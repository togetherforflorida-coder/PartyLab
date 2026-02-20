// src/app/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Sparkles, Check, Gift, ArrowRight, CalendarDays, MapPin, Bookmark } from 'lucide-react'

type EventCard = {
  id: string
  name: string
  date: string
  location: string
  description: string
  tag: string
  href: string
  accent: 'purple' | 'blue' | 'pink'
}

const upcomingEvents: EventCard[] = [
  {
    id: 'pulse10',
    name: 'Pulse 10: Love & Light Virtual Memorial',
    date: 'June 12, 2026',
    location: 'Online • Global',
    description:
      'A 10‑year memorial honoring the lives lost at Pulse—holding space for grief, remembrance, and queer resilience with guided reflection, candles, and shared storytelling.',
    tag: 'Queer Memorial & Healing',
    href: '/events/pulse-10',
    accent: 'purple',
  },
  {
    id: 'america250',
    name: 'America 250: Virtual Block Party',
    date: 'July 4, 2026',
    location: 'Your Porch, Living Room, or Neighborhood',
    description:
      'An inclusive “America 250” block party you can join from anywhere—playlists, printable decor, activity prompts, and optional kits for food & games.',
    tag: 'Nationwide Celebration',
    href: '/events/america-250',
    accent: 'blue',
  },
  {
    id: 'glitched-launch',
    name: 'Glitched Launch: Mystery Dinner Beta',
    date: 'Coming 2025',
    location: 'At‑Home or Small Groups • Hybrid',
    description:
      'A story‑driven “glitch in the system” mystery dinner: character packets, digital clues, props, and prompts that slowly reveal what’s gone wrong behind the scenes.',
    tag: 'Mystery Dinner & Story Night',
    href: '/events/glitched-launch',
    accent: 'pink',
  },
]

export default function HomePage() {
  const [activeEventIndex, setActiveEventIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEventIndex((prev) => (prev + 1) % upcomingEvents.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const activeEvent = upcomingEvents[activeEventIndex]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950">
      {/* Lab banner */}
      <section className="bg-black/40 border-b border-purple-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600/80 border border-purple-300/40 shadow-md">
              <span className="text-white text-sm">⚗️</span>
            </div>
            <div>
              <p className="text-xs text-purple-100 uppercase tracking-[0.18em]">
                PartyLab • Party Laboratory
              </p>
              <p className="text-[11px] text-gray-300">
                Where recipes, games, decor & vibes get tested like experiments—so you don&apos;t have to wing it.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
            <span className="px-2 py-1 rounded-full bg-purple-900/60 border border-purple-600/50">
              🧪 Early Access Build • Features Rolling Out
            </span>
            <span className="px-2 py-1 rounded-full bg-indigo-900/60 border border-indigo-600/50">
              🎉 You&apos;re seeing our lab in progress
            </span>
          </div>
        </div>
      </section>

      {/* HERO + PRICING AT TOP */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 via-pink-600/20 to-indigo-600/25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Hero text */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400" />
                <span className="text-xs font-semibold tracking-[0.2em] text-purple-100 uppercase">
                  PLAN • PARTY • REPEAT
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Turn Any Obsession
                <span className="block bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 bg-clip-text text-transparent mt-2">
                  Into a Party Blueprint
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 max-w-xl">
                PartyLab gives you themed “blueprints” for parties, cozy nights in, and live events inspired by the
                things you love—movies, shows, sports, holidays, fandoms, faith, and more.
              </p>
              <p className="text-sm text-gray-300 mb-4 max-w-md">
                Get recipes, games, decor ideas, playlists, printables, and hosting notes—tested in our lab before they
                land in your living room.
              </p>

              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur px-4 py-2 rounded-full border border-yellow-500/30">
                <Gift className="w-5 h-5 text-yellow-400" />
                <span className="text-xs sm:text-sm text-white font-semibold">
                  Early access: 3 months for $5 • Founding member pricing
                </span>
              </div>
            </div>

            {/* Pricing cards up top */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Early Bird (highlighted) */}
              <div className="relative bg-gradient-to-br from-pink-600/40 to-purple-600/40 backdrop-blur p-6 rounded-2xl border-2 border-pink-500 shadow-2xl shadow-pink-500/30 flex flex-col justify-between">
                <div>
                  <div className="absolute -top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-0.5 rounded-full text-[10px] font-bold">
                    MOST POPULAR
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2 mb-2">
                    Founding Member – 3 Months
                  </h3>
                  <p className="text-xs text-pink-100 mb-3">Limited early access pricing</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">$5</span>
                    <span className="text-gray-200 ml-1 text-sm">total</span>
                  </div>
                  <ul className="space-y-1 text-gray-100 text-xs">
                    <li className="flex items-start space-x-2">
                      <Check className="w-3 h-3 text-green-300 mt-0.5" />
                      <span>3 months of full access to all themes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-3 h-3 text-green-300 mt-0.5" />
                      <span>Lock in founding member benefits</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/signup?plan=early-bird"
                  className="mt-4 block text-center bg-white text-purple-900 px-4 py-2 rounded-full text-xs font-bold hover:bg-gray-100 transition-all"
                >
                  Get 3 Months for $5
                </Link>
              </div>

              {/* Trial */}
              <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur p-6 rounded-2xl border border-purple-700/40 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">7‑Day Trial</h3>
                  <p className="text-xs text-gray-300 mb-3">
                    Try PartyLab with low‑risk, low‑stakes hosting.
                  </p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-white">$1.50</span>
                    <span className="text-gray-300 ml-1 text-sm">/ week (trial)</span>
                  </div>
                  <ul className="space-y-1 text-gray-300 text-xs">
                    <li className="flex items-start space-x-2">
                      <Check className="w-3 h-3 text-green-400 mt-0.5" />
                      <span>Access to all current blueprints</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-3 h-3 text-green-400 mt-0.5" />
                      <span>Recipes, games, decor ideas & hosting notes</span>
                    </li>
                  </ul>
                </div>
                <Link
                  href="/signup?plan=trial"
                  className="mt-4 block text-center bg-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-white/20 border border-white/20 transition-all"
                >
                  Start 7‑Day Trial
                </Link>
              </div>

              {/* Regular plans preview */}
              <div className="bg-black/40 backdrop-blur p-6 rounded-2xl border border-purple-800/40 col-span-1 sm:col-span-2">
                <h3 className="text-sm font-semibold text-white mb-2">Coming After Launch</h3>
                <p className="text-xs text-gray-300 mb-1">
                  Standard pricing once the library is fuller:
                </p>
                <p className="text-xs text-gray-200 mb-1">
                  <span className="font-bold">$3/month</span> • <span className="font-bold">$25/year</span>
                </p>
                <p className="text-[11px] text-gray-400">
                  Founding members keep their early access rate or perks even after standard pricing begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS CAROUSEL */}
      <section className="py-12 bg-black/40 border-y border-purple-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Upcoming Hosted Events & Live Experiences
              </h2>
              <p className="text-sm text-gray-300 max-w-xl">
                Join bigger experiences—from memorials and block parties to mystery dinners—that connect you with
                others around the same theme, even if you&apos;re celebrating at home.
              </p>
            </div>
            <Link
              href="/events"
              className="inline-flex items-center space-x-2 text-xs bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all"
            >
              <span>See All Events</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="relative bg-gradient-to-br from-purple-900/60 via-indigo-900/60 to-black/70 backdrop-blur rounded-2xl border border-purple-700/60 p-6 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="md:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.2em] text-purple-200 mb-2">
                  Featured Experience
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {activeEvent.name}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 mb-3">
                  <span className="inline-flex items-center space-x-1">
                    <CalendarDays className="w-3 h-3" />
                    <span>{activeEvent.date}</span>
                  </span>
                  <span className="inline-flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{activeEvent.location}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase tracking-wider">
                    {activeEvent.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-200 mb-4">
                  {activeEvent.description}
                </p>
                <Link
                  href={activeEvent.href}
                  className="inline-flex items-center space-x-2 text-xs bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  <span>Learn More &amp; Join</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="md:border-l md:border-purple-700/60 md:pl-6 flex md:flex-col justify-between md:justify-start gap-4">
                {upcomingEvents.map((event, index) => {
                  const isActive = index === activeEventIndex
                  const accentColor =
                    event.accent === 'purple'
                      ? 'border-purple-400/70 bg-purple-900/40'
                      : event.accent === 'blue'
                      ? 'border-blue-400/70 bg-blue-900/40'
                      : 'border-pink-400/70 bg-pink-900/40'

                  return (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => setActiveEventIndex(index)}
                      className={
                        'flex-1 text-left rounded-xl p-3 border text-xs transition-all ' +
                        (isActive
                          ? `${accentColor} text-white shadow-lg`
                          : 'border-purple-700/60 bg-black/40 text-gray-300 hover:border-purple-400/70')
                      }
                    >
                      <p className="font-semibold text-[11px] mb-1">{event.name}</p>
                      <p className="text-[10px] text-gray-300">{event.date}</p>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PartyLab / How It Works */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              What is PartyLab?
            </h2>
            <p className="text-sm md:text-lg text-gray-300 max-w-3xl mx-auto">
              PartyLab is a theme engine and planning lab. You tell us the vibe—Super Bowl, cozy game night, bachelorette,
              faith‑family dinner, fandom watch party—and we hand you a blueprint you can actually run.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Search or Browse a Theme',
                desc: 'Start with a movie, show, sport, holiday, fandom, or hosting need (kids, ND‑friendly, 18+).',
                icon: '🔍',
              },
              {
                title: 'Get a Party or Night‑In Blueprint',
                desc: 'Each theme outlines decor, recipes, games, playlists, timing, and hosting notes.',
                icon: '📋',
              },
              {
                title: 'Run It Your Way',
                desc: 'Use what you already own, print things at home, or order kits and custom items as we grow.',
                icon: '🎉',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur p-8 rounded-2xl border border-purple-700/30 hover:border-purple-500/50 transition-all hover:scale-[1.02]"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Popular Themes from your original page */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Themes You&apos;ll Find in PartyLab
            </h3>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
              Start with big buckets like sports, holidays, kids & ND‑friendly, adult evenings, and faith & family.
              We&apos;ll keep layering in fandoms, live events, and special experiences as we grow.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {[
              { name: 'Sports Parties', emoji: '🏈', note: 'Super Bowl, finals, game days' },
              { name: 'Movies & TV', emoji: '🎬', note: 'Movie marathons & watch parties' },
              { name: 'Holidays', emoji: '🎄', note: 'Christmas, Halloween, NYE & more' },
              { name: 'Birthdays', emoji: '🎂', note: 'Kids, adults & milestones' },
              { name: 'Game Night', emoji: '🎮', note: 'Cozy couch co‑op & tournaments' },
              { name: 'Adult 18+', emoji: '🍷', note: 'Bachelorette, date nights & more' },
              { name: 'Faith & Family', emoji: '🙏', note: 'Gentle faith‑friendly nights' },
              { name: 'Kids & ND‑Friendly', emoji: '🧩', note: 'Lower‑sensory options' },
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur p-6 rounded-2xl border border-purple-700/30 hover:border-purple-500/60 transition-all hover:scale-[1.02]"
              >
                <div className="text-4xl mb-3">{cat.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-1">{cat.name}</h3>
                <p className="text-gray-300 text-xs">{cat.note}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/themes"
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              <span>Browse All Themes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Theme CTA */}
      <section className="py-16 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-900/70 to-indigo-900/70 backdrop-blur p-10 rounded-3xl border border-purple-600/40">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to See a Full Theme Preview?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Check out our Game Night demo theme to see how PartyLab lays out recipes, games, decor ideas,
              and shopping lists—with one unlocked sample in each category.
            </p>
            <Link
              href="/preview/game-night"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-2xl shadow-pink-500/40"
            >
              <span>Preview the Game Night Theme</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* More Than Parties / Coming to PartyLab */}
      <section className="py-20 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              More Than Just Parties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              PartyLab is also about cozy nights in, family rituals, self‑care evenings, and
              small traditions you can repeat all year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kids Cook‑Along Nights',
                emoji: '👨‍🍳',
                desc: 'Autism‑friendly, step‑by‑step recipes for getting kids involved in the kitchen with sensory‑aware options.',
              },
              {
                title: 'Faith & Food Themes',
                emoji: '🙏',
                desc: 'Gentle, non‑shouty family nights that blend simple recipes with stories, reflection questions, or gratitude practices.',
              },
              {
                title: 'Mystical & Tarot Evenings',
                emoji: '🔮',
                desc: '“Tarot & Tea” nights with card pulls, reflection prompts, and cozy setups—for fun and introspection, not a substitute for therapy.',
              },
              {
                title: 'Ladies Nights & Adult Evenings (18+)',
                emoji: '🍷',
                desc: 'Spa nights, wine tastings, bachelorette‑friendly games, and grown‑up evenings at home with guidance and safety notes.',
              },
              {
                title: 'Printables & Quiet Activities',
                emoji: '🧩',
                desc: 'Coloring pages, word searches, and low‑sensory activities for kids, ND guests, or anyone who needs a quieter corner.',
              },
              {
                title: 'Fantasy Leagues & Brackets',
                emoji: '📊',
                desc: 'Sports brackets, TV show fantasy leagues, awards‑show predictions, and shared watch spreadsheets.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur p-6 rounded-2xl border border-purple-700/30"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Interest Survey */}
      <section id="ip-interest" className="py-20 bg-black/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur p-8 md:p-10 rounded-3xl border border-red-500/40">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Help Us Choose Future Official IP Themes
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-6 text-center max-w-2xl mx-auto">
              We&apos;re actively working to secure licenses for trademarked themes—sports, movies,
              shows, games and more. Tell us which teams, characters, or universes you&apos;d be most
              excited to see on PartyLab when we&apos;re officially licensed.
            </p>

            <form className="space-y-4 max-w-xl mx-auto">
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-1">
                  What IPs or fandoms do you want PartyLab to support?
                </label>
                <textarea
                  className="w-full bg-black/40 text-gray-100 px-4 py-3 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none text-sm"
                  rows={4}
                  placeholder="Example: Kansas City football, Marvel, Studio Ghibli, Taylor Swift, Harry Potter (if licensed safely), specific teams, shows, or games..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-1">
                  Optional: Your email (so we can tell you if we get your favorites)
                </label>
                <input
                  type="email"
                  className="w-full bg-black/40 text-gray-100 px-4 py-3 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <p className="text-xs text-gray-400 mb-3">
                This is just a preference survey right now—submitting this form doesn&apos;t guarantee
                a specific theme or licensing outcome, but it helps us prioritize who we talk to first.
              </p>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:from-pink-600 hover:to-purple-600 transition-all"
              >
                Submit Interest (Coming Soon)
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
