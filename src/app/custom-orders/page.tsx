// src/app/custom-orders/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Sparkles,
  Wand2,
  CalendarDays,
  MapPin,
  Package,
  Printer,
  Hammer,
  Flame,
} from 'lucide-react'

export default function CustomOrdersPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-black py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back link */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-xs text-gray-300 hover:text-white mb-2"
        >
          <ArrowLeft className="w-3 h-3 mr-1" />
          <span>Back</span>
        </button>

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-pink-600/80 flex items-center justify-center border border-pink-300/60 shadow-lg shadow-pink-500/40">
              <Wand2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-pink-200">
                Custom Orders &amp; Special Projects
              </p>
              <p className="text-xs text-gray-300">
                Bring us an idea, a theme, or an event—and we&apos;ll help turn it into something you can see, hold, or experience.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Tell Us What You&apos;re Dreaming Up
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            PartyLab can design and produce one‑of‑a‑kind pieces for events, parties, weddings, memorials, group outings,
            festivals, churches, schools and more. From custom candles and engraved keepsakes to 3D‑printed props and
            full theme packages, this is where you tell us what you need.
          </p>
        </header>

        {/* What we can do */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
            Types of Events &amp; Projects We Love
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="space-y-1">
              <p className="font-semibold text-white">Events &amp; Parties</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Birthday parties (kids, adults, milestones)</li>
                <li>Game nights and theme nights</li>
                <li>Bachelorette / bachelor evenings</li>
                <li>Watch parties and fan events</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Weddings &amp; Intimate Gatherings</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Signage, favors, and custom decor</li>
                <li>Table numbers, escort cards, &amp; menus</li>
                <li>Unity candles or keepsake items</li>
                <li>Rehearsal dinner and shower touches</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Memorials &amp; Meaningful Moments</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Memory candles or light‑based installations</li>
                <li>Photo displays and name plaques</li>
                <li>Gentle rituals or reflection prompts</li>
                <li>Anniversary or remembrance tokens</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Groups, Churches &amp; Schools</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Retreat and small‑group decor or kits</li>
                <li>Activity stations and visual aids</li>
                <li>Branded items for teams or clubs</li>
                <li>Seasonal or holiday experiences</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Don&apos;t see your use case listed? That&apos;s okay. The form below is your place to describe anything
            from a small at‑home dinner to a multi‑day festival concept.
          </p>
        </section>

        {/* Capabilities */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
            Materials, Methods &amp; What We Can Make
          </h2>
          <p className="text-sm text-gray-300">
            Behind the scenes, PartyLab has practical tools and creative partners. Some of the ways we can bring ideas to life:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 mb-1">
                <Printer className="w-4 h-4 text-indigo-200" />
                <span className="font-semibold text-white">Print, Sublimation &amp; Paper Goods</span>
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Invitations, menus, programs, and signage</li>
                <li>Mugs, tumblers, and apparel via sublimation</li>
                <li>Custom printed backdrops or photo props</li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 mb-1">
                <Hammer className="w-4 h-4 text-amber-200" />
                <span className="font-semibold text-white">3D Printing &amp; Structural Pieces</span>
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Small props and display stands</li>
                <li>Custom tokens, markers, or game pieces</li>
                <li>Accent pieces for centerpieces or altars</li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 mb-1">
                <Flame className="w-4 h-4 text-orange-200" />
                <span className="font-semibold text-white">Laser Engraving &amp; Etched Items</span>
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Wooden signs, plaques, and keepsakes</li>
                <li>Engraved glass, metal, or acrylic pieces</li>
                <li>Custom name tags, tokens, or awards</li>
              </ul>
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 mb-1">
                <Sparkles className="w-4 h-4 text-pink-200" />
                <span className="font-semibold text-white">Candles, Atmosphere &amp; Finishing Touches</span>
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>Themed candles and candle wraps</li>
                <li>Tabletop vignettes and altarscapes</li>
                <li>Favor packaging and small gift items</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Some projects we handle fully in‑house, others we coordinate with partners. The more details you provide in
            the form below, the easier it will be to say what&apos;s possible.
          </p>
        </section>

        {/* Custom request form (non-functional placeholder) */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-purple-700/60 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
            Share Your Custom Request
          </h2>
          <p className="text-sm text-gray-300">
            Fill this out with as much detail as you have right now. This doesn&apos;t lock you into anything—it just
            gives us a starting point so we can follow up with ideas, questions, and a rough sense of feasibility.
          </p>

          <form className="space-y-4 text-sm text-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1">
                  Event Type
                </label>
                <input
                  type="text"
                  className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                  placeholder="Wedding, memorial, game night, church retreat, festival, etc."
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-200 mb-1">
                  Event Date or Timeframe
                </label>
                <input
                  type="text"
                  className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                  placeholder="Exact date or rough window (e.g., March 2027)"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Where Will This Take Place?
              </label>
              <input
                type="text"
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                placeholder="City / region, or &quot;online&quot; / &quot;hybrid&quot;"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                What Are You Hoping We Can Make or Design?
              </label>
              <textarea
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                rows={4}
                placeholder="Tell us about the vibe, theme, specific pieces (candles, signage, kits, props), and anything else on your mind."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                What Types of Services Are You Interested In?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
                {[
                  'Sublimation (mugs, tumblers, apparel)',
                  '3D-printed props or pieces',
                  'Laser-engraved items (wood, glass, acrylic, metal)',
                  'Custom candles or light-based decor',
                  'Print design (menus, programs, signage)',
                  'Full theme / environment design',
                  'Consulting / planning session',
                  'Something else (describe above)',
                ].map((label) => (
                  <label key={label} className="inline-flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3 rounded border-purple-600/60 bg-black/40 text-purple-500 focus:ring-purple-500"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Approximate Budget Range (Optional)
              </label>
              <input
                type="text"
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none"
                placeholder="Example: $100–$250, or &quot;not sure yet&quot;"
              />
            </div>

            <p className="text-[11px] text-gray-400">
              This form is a starting point only. Submitting it is not a binding contract or payment. We&apos;ll review
              your request and let you know if it&apos;s a fit, what&apos;s possible, and what next steps might look like.
            </p>

            <button
              type="button"
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Send Custom Request (Coming Soon)
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
