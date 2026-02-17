// src/app/signup/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Gift, AlertCircle, Check, ExternalLink } from 'lucide-react'
import { supabaseBrowser } from '@/lib/supabaseClient'

const plans = [
  { id: 'trial', name: '7-Day Trial', price: '$1.50 / week', description: 'Try PartyLab risk-free.' },
  {
    id: 'early-bird',
    name: 'Founding – 3 Months',
    price: '$5 total',
    description: 'Best early-access pricing.',
    popular: true,
  },
  { id: 'monthly', name: 'Monthly', price: '$3 / month', description: 'Flexible, month-to-month.', disabled: false },
  { id: 'yearly', name: 'Yearly', price: '$25 / year', description: 'Best value long-term.', disabled: false },
]

// Map plan ID ➜ Stripe Payment Link URL (optional, for manual payment links)
function getPaymentLinkForPlan(planId: string): string | null {
  switch (planId) {
    case 'trial':
      return 'https://buy.stripe.com/7sYbJ20zG9ivfPO3mo6Zy03'
    case 'early-bird':
      return 'https://buy.stripe.com/eVq9AUdms52f9rqbSU6Zy02'
    case 'monthly':
      return 'https://buy.stripe.com/dRm14ogyE7anfPO1eg6Zy01'
    case 'yearly':
      return 'https://buy.stripe.com/3cI14oaag8er0UU8GI6Zy00'
    default:
      return null
  }
}

export default function SignupPage() {
  const router = useRouter()
  // No useSearchParams: just default to early-bird
  const [selectedPlan, setSelectedPlan] = useState<'trial' | 'early-bird' | 'monthly' | 'yearly'>('early-bird')

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [promoCode, setPromoCode] = useState('')
  const [isAdult, setIsAdult] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const activePlan = plans.find((p) => p.id === selectedPlan)
  const paymentLink = getPaymentLinkForPlan(selectedPlan)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!isAdult) {
      setError('Please confirm that you are 18 or older.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.')
      return
    }

    setLoading(true)
    try {
      const { data, error } = await supabaseBrowser.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            selected_plan: selectedPlan,
            promo_code: promoCode.trim() || null,
          },
        },
      })

      if (error) throw error

      if (!data.user) {
        throw new Error('Signup did not complete. Please try again.')
      }

      // For now: send them to login after account creation.
      router.push('/login')
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Gift className="w-12 h-12 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Create Your PartyLab Account
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose a plan, create your login, and then complete payment on Stripe to unlock member access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Plan selection */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Choose Your Plan</h2>
            {plans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => !plan.disabled && setSelectedPlan(plan.id as any)}
                className={
                  'w-full text-left p-4 rounded-xl border-2 transition-all ' +
                  (plan.disabled
                    ? 'border-purple-900/60 bg-purple-900/30 text-gray-500 cursor-not-allowed'
                    : selectedPlan === plan.id
                    ? 'border-pink-500 bg-gradient-to-r from-pink-600/20 to-purple-600/20'
                    : 'border-purple-700/40 bg-purple-900/30 hover:border-purple-500')
                }
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      {plan.popular && (
                        <span className="bg-pink-500 text-white text-[10px] px-2 py-0.5 rounded-full">
                          POPULAR
                        </span>
                      )}
                      <h3 className="text-sm font-semibold text-white">{plan.name}</h3>
                    </div>
                    <p className="text-xs text-gray-300 mt-1">{plan.description}</p>
                  </div>
                  <div className="text-right text-xs text-gray-200">{plan.price}</div>
                </div>
                {selectedPlan === plan.id && !plan.disabled && (
                  <div className="mt-3 pt-2 border-t border-pink-500/40 flex items-center space-x-2 text-xs text-pink-200">
                    <Check className="w-3 h-3" />
                    <span>Selected</span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Signup form */}
          <div className="lg:col-span-3 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur rounded-2xl p-8 border border-purple-600/40">
            <h2 className="text-xl font-bold text-white mb-4">Your Information</h2>

            {error && (
              <div className="mb-4 bg-red-900/20 border border-red-500/40 rounded-lg p-3 flex items-start space-x-2 text-xs text-red-200">
                <AlertCircle className="w-4 h-4 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-gray-200 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-black/30 text-gray-100 px-3 py-2 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-200 mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/30 text-gray-100 px-3 py-2 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-200 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-black/30 text-gray-100 px-3 py-2 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                  placeholder="••••••••"
                />
                <p className="text-[11px] text-gray-400 mt-1">At least 6 characters.</p>
              </div>

              <div>
                <label className="block text-gray-200 mb-1">Confirm Password</label>
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-black/30 text-gray-100 px-3 py-2 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>

              {/* Promo / referral code */}
              <div>
                <label className="block text-gray-200 mb-1 flex items-center justify-between">
                  <span>Promo or referral code (optional)</span>
                  <span className="text-[10px] text-gray-400">
                    We&apos;ll validate this when we process payment.
                  </span>
                </label>
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-black/30 text-gray-100 px-3 py-2 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none text-sm"
                  placeholder="Enter a code if you have one"
                />
              </div>

              <div className="flex items-start space-x-2 mt-2">
                <input
                  type="checkbox"
                  id="adult-check"
                  checked={isAdult}
                  onChange={(e) => setIsAdult(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-purple-600 text-purple-500 focus:ring-purple-500 bg-black/40"
                />
                <label htmlFor="adult-check" className="text-xs text-gray-300">
                  I confirm I am 18 or older. Some themes and events are designed for adults.
                </label>
              </div>

              {/* Selected plan summary */}
              <div className="mt-4 bg-black/40 rounded-lg p-3 border border-purple-600/40 text-xs text-gray-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">Selected plan</p>
                    <p>{activePlan?.name}</p>
                    <p className="text-[11px] text-gray-400">{activePlan?.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">{activePlan?.price}</p>
                  </div>
                </div>
                {paymentLink && (
                  <div className="pt-2 border-t border-purple-600/40 flex items-center justify-between">
                    <p className="text-[11px] text-gray-300">
                      You can also complete payment on Stripe after creating your account.
                    </p>
                    <Link
                      href={paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-pink-200 hover:text-pink-100 underline underline-offset-2"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Pay for this plan</span>
                    </Link>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading || !isAdult}
                className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-3 rounded-lg text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Creating account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 text-center text-xs text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-purple-300 hover:text-purple-200">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
