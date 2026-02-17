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
    const { planId } = body as { planId?: string }

    // For this test, we only support the 7-day trial plan
    if (planId !== 'trial') {
      return NextResponse.json(
        { error: 'Only the 7-day trial plan is enabled for testing.' },
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

    // TEMP: No server-side Supabase auth check; use a placeholder user id/email
    const userId = 'test-user-id'
    const userEmail = 'test@example.com'

    console.log('CHECKOUT USER (TEMP)', { id: userId, email: userEmail })

    const origin = req.headers.get('origin') ?? 'http://localhost:3000'

    // One-time payment for the trial (test mode)
    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: trialPriceId,
          quantity: 1,
        },
      ],
      customer_email: userEmail,
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
