// src/app/member/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabaseBrowser } from '@/lib/supabaseClient'
import {
  User,
  LogOut,
  Sparkles,
  Search,
  LayoutGrid,
  CalendarDays,
  ShoppingBag,
  Bookmark,
  Package,
} from 'lucide-react'

type MembershipInfo = {
  planName: string | null
  status: string | null
  accessUntil: string | null
}

export default function MemberDashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [membership, setMembership] = useState<MembershipInfo>({
    planName: null,
    status: null,
    accessUntil: null,
  })

  useEffect(() => {
    const load = async () => {
      const {
        data: { session },
        error,
      } = await supabaseBrowser.auth.getSession()

      if (error) {
        console.error('Error getting session', error)
      }

      // Not logged in → go to login
      if (!session || !session.user) {
        router.push('/login')
        return
      }

      const u = session.user
      const meta = u.user_metadata || {}

      // Membership gating
      const status: string = meta.subscription_status || 'inactive'
      const accessUntil: string | null = meta.access_until || null

      let hasAccess = false
      if (status === 'active') {
        if (!accessUntil) {
          hasAccess = true
        } else {
          const now = new Date()
          const expires = new Date(accessUntil)
          hasAccess = expires > now
        }
      }

      if (!hasAccess) {
        // Logged in but not an active member → send to upgrade page
        router.push('/member/upgrade')
        return
      }

      // If we reach here, user is logged in and has access
      setUser(u)

      const planName =
        meta.selected_plan === 'early-bird'
          ? 'Founding Member – 3 Months'
          : meta.selected_plan === 'trial'
          ? '7‑Day Trial'
          : meta.selected_plan === 'monthly'
          ? 'Monthly'
          : meta.selected_plan === 'yearly'
          ? 'Annual'
          : null

      setMembership({
        planName,
        status,
        accessUntil,
      })

      setLoading(false)
    }

    load()
  }, [router])

  const handleLogout = async () => {
    await supabaseBrowser.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400" />
      </div>
    )
  }

  if (!user) return null

  const firstName =
    user.user_metadata?.full_name?.split(' ')[0] ||
    user.email?.split('@')[0] ||
    'there'

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-purple-600/80 flex items-center justify-center border border-purple-300/40">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Welcome back, {firstName}
              </h1>
              <p className="text-xs text-gray-300">
                This is your PartyLab member dashboard. From here you can explore themes, check orders, and see what&apos;s coming next.
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center space-x-2 text-xs text-gray-300 hover:text-white bg-black/40 px-3 py-2 rounded-full border border-purple-700/50"
          >
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </button>
        </header>

        {/* Membership summary */}
        <section className="bg-black/40 backdrop-blur rounded-2xl p-6 border border-purple-700/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-900/70 flex items-center justify-center border border-purple-400/50">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <p className="text-xs text-purple-200 uppercase tracking-[0.16em] mb-1">
                Membership
              </p>
              <p className="text-sm text-gray-100">
                Plan:{' '}
                <span className="font-semibold">
                  {membership.planName || '[Unknown Plan]'}
                </span>
              </p>
              <p className="text-xs text-gray-300">
                Status:{' '}
                <span className="font-semibold">
                  {membership.status || '[Unknown]'}
                </span>
              </p>
              {membership.accessUntil && (
                <p className="text-xs text-gray-300">
                  Access through{' '}
                  <span className="font-semibold">{membership.accessUntil}</span>
                </p>
              )}
              {!membership.accessUntil && (
                <p className="text-xs text-gray-500">
                  Access end date not available yet. This will show renewal or end date once billing is fully wired.
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2 text-right">
            <Link
              href="/member/account"
              className="inline-flex items-center space-x-2 text-xs bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              <span>Manage Account</span>
              <span>→</span>
            </Link>
            <div>
              <Link
                href="/member/upgrade"
                className="inline-flex items-center space-x-2 text-[11px] text-purple-200 hover:text-purple-100 underline underline-offset-2"
              >
                <span>Change / Upgrade Plan</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="bg-black/40 backdrop-blur rounded-2xl p-5 border border-purple-700/40">
          <h2 className="text-sm font-semibold text-white mb-3">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs text-gray-200">
            <Link
              href="/member/themes"
              className="flex items-center space-x-2 px-3 py-3 rounded-xl bg-purple-900/50 border border-purple-600/50 hover:bg-purple-800/60 transition-all"
            >
              <Search className="w-4 h-4 text-purple-200" />
              <div>
                <p className="font-semibold text-white">Search Themes</p>
                <p className="text-[11px] text-gray-300">Browse all themes by category or keyword.</p>
              </div>
            </Link>

            <Link
              href="/member/themes/categories"
              className="flex items-center space-x-2 px-3 py-3 rounded-xl bg-purple-900/50 border border-purple-600/50 hover:bg-purple-800/60 transition-all"
            >
              <LayoutGrid className="w-4 h-4 text-purple-200" />
              <div>
                <p className="font-semibold text-white">Browse by Category</p>
                <p className="text-[11px] text-gray-300">Movies, sports, holidays, game night, and more.</p>
              </div>
            </Link>

            <Link
              href="/events"
              className="flex items-center space-x-2 px-3 py-3 rounded-xl bg-purple-900/50 border border-purple-600/50 hover:bg-purple-800/60 transition-all"
            >
              <CalendarDays className="w-4 h-4 text-purple-200" />
              <div>
                <p className="font-semibold text-white">View Hosted Events</p>
                <p className="text-[11px] text-gray-300">Pulse 10, America 250, and more.</p>
              </div>
            </Link>

            <Link
              href="/shop"
              className="flex items-center space-x-2 px-3 py-3 rounded-xl bg-purple-900/50 border border-purple-600/50 hover:bg-purple-800/60 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-purple-200" />
              <div>
                <p className="font-semibold text-white">Visit Shop</p>
                <p className="text-[11px] text-gray-300">Kits, custom items, and future products.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Saved Themes */}
        <section className="bg-black/40 backdrop-blur rounded-2xl p-5 border border-purple-700/40 space-y-3">
          <h2 className="text-sm font-semibold text-white flex items-center space-x-2">
            <Bookmark className="w-4 h-4 text-purple-200" />
            <span>Saved Themes</span>
          </h2>
          <p className="text-xs text-gray-300">
            You haven&apos;t saved any themes yet. Browse themes and click &quot;Save This Theme&quot; (once enabled) to build your favorites list.
          </p>
        </section>

        {/* Orders */}
        <section className="bg-black/40 backdrop-blur rounded-2xl p-5 border border-purple-700/40 space-y-3">
          <h2 className="text-sm font-semibold text-white flex items-center space-x-2">
            <Package className="w-4 h-4 text-purple-200" />
            <span>Orders</span>
          </h2>
          <p className="text-xs text-gray-300">
            No orders yet. When you buy kits, custom items, or rentals, they&apos;ll appear here with their status.
          </p>
        </section>

        {/* What's New & Coming Soon */}
        <section className="bg-black/40 backdrop-blur rounded-2xl p-5 border border-purple-700/40 space-y-3">
          <h2 className="text-sm font-semibold text-white">What&apos;s New &amp; Coming Soon</h2>
          <ul className="list-disc list-inside text-xs text-gray-300 space-y-1">
            <li>Super Bowl / Big Game party themes launching soon.</li>
            <li>Pulse 10: Love &amp; Light Virtual Memorial – June 12, 2026.</li>
            <li>America 250 Virtual Block Party – July 4, 2026.</li>
            <li>Expanded Game Night themes across video games, board games, and more.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
