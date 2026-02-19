// src/app/member/upgrade/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseBrowser } from '@/lib/supabaseClient'

const TRIAL_PLAN = {
  id: 'trial',
  label: '7-Day Trial – $1.50',
  description: 'Try PartyLab for a week using Stripe test mode.',
}

export default function UpgradePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const loadUser = async () => {
      const { data, error } = await supabaseBrowser.auth.getUser()
      if (error) {
        console.error('Error getting user in upgrade page', error)
        return
      }
      if (data.user) {
        setUserId(data.user.id)
      } else {
        router.push('/login')
      }
    }
    loadUser()
  }, [router])

  const handleCheckout = async () => {
    setError(null)

    if (!userId) {
      setError('No user ID available. Please log in again.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId: TRIAL_PLAN.id, userId }),
      })

      const data = await res.json()
      console.log('CHECKOUT RESPONSE', { status: res.status, data })

      if (!res.ok || !data.url) {
        throw new Error(data.error || 'Failed to create checkout session.')
      }

      window.location.href = data.url
    } catch (err: any) {
      console.error(err)
      setError(err.message || 'Something went wrong starting checkout.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center py-10">
      <div className="max-w-lg w-full px-4 space-y-4">
        <h1 className="text-2xl font-bold">Start Your 7-Day Trial</h1>
        <p className="text-sm text-gray-300">
          This will use Stripe&apos;s test mode so you can practice the flow without charging real cards.
        </p>

        {error && (
          <p className="text-xs text-rose-300 bg-rose-900/40 border border-rose-500/50 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full text-left bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-3 hover:border-emerald-400 transition-all text-sm flex items-center justify-between"
        >
          <div>
            <p className="font-semibold text-white">{TRIAL_PLAN.label}</p>
            <p className="text-xs text-gray-300">{TRIAL_PLAN.description}</p>
          </div>
          {loading && (
            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-emerald-300" />
          )}
        </button>

        <button
          onClick={() => router.push('/member/dashboard')}
          className="text-xs text-gray-300 hover:text-white underline underline-offset-2"
        >
          ← Back to dashboard
        </button>
      </div>
    </div>
  )
}
