// src/app/login/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Lock, AlertCircle } from 'lucide-react'
import { supabaseBrowser } from '@/lib/supabaseClient'

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { data, error } = await supabaseBrowser.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) throw error

      if (data.user) {
        // Send logged-in users to the *member* dashboard
        router.push('/member/dashboard')
      } else {
        setError('Login did not return a user. Please check your email and password.')
      }
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your email and password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 py-12 flex items-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Lock className="w-10 h-10 text-purple-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-300">
            Sign in to your PartyLab account to access themes, Labs, and tools.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur rounded-2xl p-8 border border-purple-600/40">
          {error && (
            <div className="mb-4 bg-red-900/20 border border-red-500/40 rounded-lg p-3 flex items-start space-x-2 text-xs text-red-200">
              <AlertCircle className="w-4 h-4 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
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
              <div className="mt-1 text-[11px] text-gray-300 text-right">
                <Link
                  href="/reset-password"
                  className="underline underline-offset-2 hover:text-white"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-3 rounded-lg text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  <span>Signing in...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </form>

          <div className="mt-4 text-center text-xs text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-purple-300 hover:text-purple-200">
              Create one
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          <Link href="/" className="hover:text-white">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
