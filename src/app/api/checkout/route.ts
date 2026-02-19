// src/app/api/checkout/route.ts
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

const stripe = new Stripe(stripeSecretKey as string)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { planId, userId } = body as { planId?: string; userId?: string }

    if (planId !== 'trial') {
      return NextResponse.json(
        { error: 'Only the 7-day trial plan is enabled for testing.' },
        { status: 400 },
      )
    }

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId in request body' },
        { status: 400 },
      )
    }

    const trialPriceId = process.env.STRIPE_PRICE_TRIAL
    if (!trialPriceId) {
      return NextResponse.json(
        { error: 'STRIPE_PRICE_TRIAL is not configured.' },
        { status: 500 },
      )
    }

    console.log('CHECKOUT REQUEST', { userId, planId })

    const origin = req.headers.get('origin') ?? 'http://localhost:3000'

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: trialPriceId,
          quantity: 1,
        },
      ],
      metadata: {
        supabase_user_id: userId,
        plan_id: planId,
      },
      success_url: `${origin}/member/dashboard?checkout=success`,
      cancel_url: `${origin}/member/dashboard?checkout=cancelled`,
    })

    return NextResponse.json({ url: checkoutSession.url }, { status: 200 })
  } catch (error: any) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: error?.message || 'Error creating checkout session' },
      { status: 500 },
    )
  }
}
