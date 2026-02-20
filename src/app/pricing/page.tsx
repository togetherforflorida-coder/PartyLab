// src/app/pricing/page.tsx
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Gift, Sparkles, Check, CalendarDays, Ticket, LayoutGrid } from 'lucide-react'

export default function PricingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-black py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back link */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-xs text-gray-300 hover:text-white mb-2"
        >
          <ArrowLeft className="w-3 h-3 mr-1" />
          <span>Back</span>
        </button>

        {/* Header */}
        <header className="space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/40 border border-purple-700/50">
            <Sparkles className="w-4 h-4 text-purple-200" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-purple-100">
              PartyLab Membership
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Simple Early‑Access Pricing
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            We&apos;re in an early‑access phase—building out themes, tools, and hosted events in real time. Pricing is
            intentionally low right now to reward the people who help us shape PartyLab from the start.
          </p>
        </header>

        {/* Current plans */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Trial */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 flex flex-col justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
                7‑Day Trial
              </h2>
              <p className="text-xs text-gray-400 mb-4">
                Try PartyLab for a week in Stripe test mode while we build out the experience.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$1.50</span>
                <span className="text-gray-300 ml-1 text-sm">/ week (trial)</span>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Access to all current themes and blueprints</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Recipes, games, decor ideas, playlists, and notes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Peek at how hosted events will work with membership</span>
                </li>
              </ul>
            </div>
            <Link
              href="/signup?plan=trial"
              className="mt-4 inline-flex items-center justify-center bg-white/10 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              Start 7‑Day Trial
            </Link>
          </div>

          {/* Founding Member */}
          <div className="relative bg-gradient-to-br from-pink-600/40 to-purple-600/40 backdrop-blur rounded-3xl p-6 border-2 border-pink-500 shadow-xl shadow-pink-500/30 flex flex-col justify-between">
            <div>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-0.5 rounded-full text-[10px] font-bold">
                MOST POPULAR
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white mt-2 mb-1">
                Founding Member – 3 Months
              </h2>
              <p className="text-xs text-pink-100 mb-4">
                Early‑access rate while we&apos;re still growing the library and events.
              </p>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$5</span>
                <span className="text-gray-200 ml-1 text-sm">total</span>
              </div>
              <ul className="text-sm text-gray-100 space-y-1">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-300 mt-0.5" />
                  <span>3 months of full access to themes and party blueprints</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-300 mt-0.5" />
                  <span>Priority access and better pricing on early hosted events</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-300 mt-0.5" />
                  <span>Input on what we build next (feedback channels &amp; surveys)</span>
                </li>
              </ul>
            </div>
            <Link
              href="/signup?plan=early-bird"
              className="mt-4 inline-flex items-center justify-center bg-white text-purple-900 px-4 py-2 rounded-full text-xs sm:text-sm font-bold hover:bg-gray-100 transition-all"
            >
              Get 3 Months for $5
            </Link>
          </div>

          {/* Future plans */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 flex flex-col justify-between">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
                Standard Monthly &amp; Yearly
              </h2>
              <p className="text-xs text-gray-400 mb-4">
                These plans will become available once the library is fuller and we&apos;re out of early access.
              </p>
              <div className="mb-4 space-y-1">
                <div>
                  <span className="text-2xl font-bold text-white">$3</span>
                  <span className="text-gray-300 ml-1 text-sm">/ month</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">$25</span>
                  <span className="text-gray-300 ml-1 text-sm">/ year</span>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                Once these are active, they&apos;ll be the default pricing for new members. Founding members keep their
                early‑access benefits.
              </p>
            </div>
            <button
              disabled
              className="mt-4 inline-flex items-center justify-center bg-white/5 text-gray-400 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border border-white/10 cursor-not-allowed"
            >
              Coming After Launch
            </button>
          </div>
        </section>

        {/* What membership actually includes */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/40 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <LayoutGrid className="w-5 h-5 text-purple-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What You Get Access To
            </h2>
          </div>
          <p className="text-sm text-gray-300">
            Whether you&apos;re on a trial or a paid plan, membership is about unlocking **blueprints** and having a
            living lab of ideas to pull from.
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>Theme libraries with recipes, decor, games, playlists, and hosting notes.</li>
            <li>
              Categories for sports, movies &amp; TV, holidays, birthdays, game nights, adult evenings, faith &amp;
              family, kids &amp; ND‑friendly, and more.
            </li>
            <li>
              Access to previews and demo themes (like the Game Night sample) so you can see how PartyLab thinks about
              nights in and events.
            </li>
            <li>
              Early invites and better pricing on certain hosted events (Pulse 10, America 250, Glitched Launch, and
              others as they launch).
            </li>
          </ul>
        </section>

        {/* Hosted events relationship */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/40 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <CalendarDays className="w-5 h-5 text-indigo-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              How Hosted Events Fit Into Pricing
            </h2>
          </div>
          <p className="text-sm text-gray-300">
            Hosted events (like Pulse 10, America 250, and Glitched Launch) sit alongside membership:
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>
              <span className="font-semibold">Free events:</span> Some community or memorial events will be free and
              open to non‑members (e.g., Pulse 10), with optional ways to support related projects.
            </li>
            <li>
              <span className="font-semibold">Ticketed events:</span> Some experiences will be separately ticketed
              (e.g., America 250, Glitched Launch) but discounted or prioritised for members.
            </li>
            <li>
              <span className="font-semibold">Blueprint access:</span> Members may receive follow‑up blueprints for
              running similar nights on their own later.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            We&apos;ll always be clear about what&apos;s included with membership vs. what&apos;s a separate ticket, so
            you can choose what fits your budget and interest.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-3">
          <p className="text-sm text-gray-300">
            Ready to explore PartyLab while the prices are this low?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup?plan=early-bird"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg shadow-pink-500/40"
            >
              <span>Become a Founding Member</span>
              <span>→</span>
            </Link>
            <Link
              href="/signup?plan=trial"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>Try the 7‑Day Trial</span>
              <span>→</span>
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <Gift className="w-4 h-4 text-yellow-300" />
            <p className="text-[11px] text-gray-400 max-w-md">
              Founding member pricing is time‑limited. Once standard monthly/yearly plans are live, these early
              offers may no longer be available for new sign‑ups—existing founding members keep their benefits.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
