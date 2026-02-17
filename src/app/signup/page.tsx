// src/app/signup/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Gift, AlertCircle, Check } from 'lucide-react'
import { supabaseBrowser } from '@/lib/supabaseClient'

const plans = [
  { id: 'trial', name: '7-Day Trial', price: '$1.50 / week', description: 'Try PartyLab risk-free.' },
  { id: 'early-bird', name: 'Founding – 3 Months', price: '$5 total', description: 'Best early-access pricing.', popular: true },
  { id: 'monthly', name: 'Monthly', price: '$3 / month', description: 'Flexible, month-to-month.' },
  { id: 'yearly', name: 'Yearly', price: '$25 / year', description: 'Best long-term value.' },
]

export default function SignupPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialPlan = (searchParams.get('plan') as string) || 'early-bird'

  const [selectedPlan, setSelectedPlan] = useState(initialPlan)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isAdult, setIsAdult] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const activePlan = plans.find(p => p.id === selectedPlan)

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
      // 1. Create Supabase user
      const { data, error } = await supabaseBrowser.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            selected_plan: selectedPlan,
          },
        },
      })

      if (error) throw error

      // Optional: you could check data.session here; Supabase may email-confirm.
      if (!data.user) {
        throw new Error('User signup did not complete. Please check your email for confirmation.')
      }

      // 2. Call our checkout API to get Stripe Checkout URL
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selectedPlan,
          email: formData.email,
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Could not start checkout.')
      }

      const { url } = await res.json()

      if (!url) {
        throw new Error('Checkout URL not returned.')
      }

      // 3. Redirect to Stripe Checkout
      window.location.href = url
    } catch (err: any) {
      console.error('Signup/checkout error:', err)
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
            Choose a plan, create your login, and then complete checkout to unlock themes and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Plan selection */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Choose Your Plan</h2>
            {plans.map(plan => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedPlan(plan.id)}
                className={
                  'w-full text-left p-4 rounded-xl border-2 transition-all ' +
                  (selectedPlan === plan.id
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
                {selectedPlan === plan.id && (
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
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
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
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
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
                  onChange={e => setFormData({ ...formData, password: e.target.value })}
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
                  onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-black/30 text-gray-100 px-3 py-2 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-start space-x-2 mt-2">
                <input
                  type="checkbox"
                  id="adult-check"
                  checked={isAdult}
                  onChange={e => setIsAdult(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-purple-600 text-purple-500 focus:ring-purple-500 bg-black/40"
                />
                <label htmlFor="adult-check" className="text-xs text-gray-300">
                  I confirm I am 18 or older. Some themes and events are designed for adults.
                </label>
              </div>

              {/* Selected plan summary */}
              <div className="mt-4 bg-black/40 rounded-lg p-3 border border-purple-600/40 text-xs text-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">Selected plan</p>
                  <p>{activePlan?.name}</p>
                  <p className="text-[11px] text-gray-400">{activePlan?.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">{activePlan?.price}</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !isAdult}
                className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-3 rounded-lg text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Creating account & redirecting to checkout...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account & Continue to Checkout</span>
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
