// src/app/api/stripe-webhook/route.ts
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!stripeSecretKey) {
  throw new Error('Stripe secret key is not configured')
}
if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Supabase service config missing')
}

const stripe = new Stripe(stripeSecretKey as string)
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

export async function POST(req: Request) {
  const body = await req.text()
  const headerList = await headers()
  const sig = headerList.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature' }, { status: 400 })
  }

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not set')
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret as string)
  } catch (err: any) {
    console.error('Stripe webhook signature verification failed', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      const supabaseUserId = session.metadata?.supabase_user_id
      const planId = session.metadata?.plan_id

      if (!supabaseUserId || !planId) {
        console.warn('Missing supabase_user_id or plan_id in session metadata', session.id)
        return NextResponse.json({ received: true }, { status: 200 })
      }

      // For now, handle only 'trial' plan: grant 7 days from now
      let accessUntil: string | null = null

      if (planId === 'trial') {
        const now = new Date()
        const later = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
        accessUntil = later.toISOString()
      }

      const { error } = await supabaseAdmin.auth.admin.updateUserById(supabaseUserId, {
        user_metadata: {
          selected_plan: planId,
          subscription_status: 'active',
          access_until: accessUntil,
        },
      })

      if (error) {
        console.error('Error updating user after checkout:', error)
      }
    }

    return NextResponse.json({ received: true }, { status: 200 })
  } catch (err) {
    console.error('Error in Stripe webhook handler', err)
    return NextResponse.json({ error: 'Webhook handler error' }, { status: 500 })
  }
}
