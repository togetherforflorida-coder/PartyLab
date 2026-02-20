// src/app/themes/page.tsx
'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type ThemeItem = {
  slug: string
  name: string
  emoji: string
  category: string
  status: 'demo-preview' | 'preview' | 'coming-soon'
  blurb: string
  href: string
}

const themes: ThemeItem[] = [
  {
    slug: 'game-night',
    name: 'Game Night Party',
    emoji: '🎮',
    category: 'At-Home / Cozy',
    status: 'demo-preview',
    blurb:
      'Couch co‑op, quick tournaments, snacks, playlists, and cozy options for solo, group, online, and ND‑friendly play.',
    href: '/themes/game-night-preview',
  },
  {
    slug: 'movies-tv',
    name: 'Movies & TV Watch Nights',
    emoji: '🎬',
    category: 'At-Home / Cozy',
    status: 'preview',
    blurb:
      'Watch parties, premieres, finales, and binge sessions with pacing, snacks, and genre‑specific rituals.',
    href: '/themes/movies-preview',
  },
  {
    slug: 'sports-parties',
    name: 'Sports Parties & Game Days',
    emoji: '🏈',
    category: 'Sports',
    status: 'preview',
    blurb:
      'Game days, finals, drafts and tournament runs with brackets, fantasy mini‑leagues, and tailgate‑style spreads.',
    href: '/themes/sports-preview',
  },
  {
    slug: 'kids-family',
    name: 'Kids & Family Nights',
    emoji: '🧩',
    category: 'Kids & Family',
    status: 'preview',
    blurb:
      'Family game nights, movie nights, and rituals with age‑aware games, parallel play, and ND‑friendly tweaks.',
    href: '/themes/kids-family-preview',
  },
  {
    slug: 'holidays',
    name: 'Holiday Gatherings',
    emoji: '🎄',
    category: 'Holidays',
    status: 'preview',
    blurb:
      'Blueprints for holidays like New Year’s, Valentine’s, Easter, Pride, Halloween, Thanksgiving, and winter holidays.',
    href: '/themes/holidays-preview',
  },
  {
    slug: 'religious-spiritual',
    name: 'Religious & Spiritual Evenings',
    emoji: '🕯️',
    category: 'Faith & Family',
    status: 'preview',
    blurb:
      'Gentle, mixed‑belief‑aware nights of reflection, prayer, meditation, or light‑based rituals you can adapt to your path.',
    href: '/themes/religious-preview',
  },
  // A few roadmap ideas to show breadth
  {
    slug: 'birthday-bash',
    name: 'Birthday Bash (Kids & Adults)',
    emoji: '🎂',
    category: 'Birthdays',
    status: 'coming-soon',
    blurb:
      'Flexible birthday templates for kids, adults, and milestones—with options for low‑sensory and ND‑friendly celebrations.',
    href: '/themes', // placeholder until a dedicated preview exists
  },
  {
    slug: 'bachelorette-night',
    name: 'Bachelorette Night In (18+)',
    emoji: '🍷',
    category: 'Adult 18+',
    status: 'coming-soon',
    blurb:
      'Spa, games, and celebration ideas that work at home or a rental, with multiple “spice levels” and consent‑first framing.',
    href: '/themes',
  },
  {
    slug: 'faith-and-food',
    name: 'Faith & Food Family Night',
    emoji: '🙏',
    category: 'Faith & Family',
    status: 'coming-soon',
    blurb:
      'Gentle family nights that blend simple recipes with stories, gratitude, and optional scripture or spiritual readings.',
    href: '/themes',
  },
]

const categories = [
  'All',
  'At-Home / Cozy',
  'Sports',
  'Birthdays',
  'Holidays',
  'Kids & Family',
  'Faith & Family',
  'Adult 18+',
]

export default function ThemesPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredThemes = useMemo(() => {
    return themes.filter((theme) => {
      const matchesCategory =
        activeCategory === 'All' || theme.category === activeCategory

      const text = (theme.name + ' ' + theme.category + ' ' + theme.blurb)
        .toLowerCase()
      const matchesSearch = text.includes(search.toLowerCase().trim())

      return matchesCategory && matchesSearch
    })
  }, [search, activeCategory])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎉 Browse Party Themes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            This is a living catalog. Game Night and our main categories have preview pages so you can see how themes
            will work; full paid blueprints will unlock more detail over time.
          </p>
        </div>

        {/* Search + Categories */}
        <div className="mb-10 space-y-4">
          {/* Search box */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search themes by name, category, or vibe..."
              className="w-full bg-black/40 text-gray-100 px-4 py-3 rounded-full border border-purple-700/50 focus:border-purple-400 focus:outline-none text-sm placeholder:text-gray-500"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={
                    'px-4 py-2 rounded-full border transition-colors ' +
                    (isActive
                      ? 'bg-purple-600 text-white border-purple-300'
                      : 'bg-black/30 border-purple-700/40 text-gray-200 hover:bg-purple-900/40 hover:border-purple-400')
                  }
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Themes grid */}
        {filteredThemes.length === 0 ? (
          <div className="text-center text-gray-300 text-sm py-12">
            No themes match your search yet. Try a different keyword, or tell us what you&apos;d like on the homepage IP
            survey.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredThemes.map((theme) => {
              const isDemoPreview = theme.status === 'demo-preview'
              const isPreview = theme.status === 'preview'
              const isComing = theme.status === 'coming-soon'

              return (
                <div
                  key={theme.slug}
                  className="relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur rounded-2xl p-6 border border-purple-700/40 hover:border-purple-500 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="text-4xl">{theme.emoji}</div>
                      <div>
                        <h2 className="text-xl font-bold text-white mb-1">{theme.name}</h2>
                        <p className="text-xs text-purple-300">{theme.category}</p>
                      </div>
                    </div>
                    {isDemoPreview && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500 text-slate-900 font-bold">
                        DEMO PREVIEW
                      </span>
                    )}
                    {isPreview && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500 text-slate-900 font-bold">
                        PREVIEW
                      </span>
                    )}
                    {isComing && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-gray-500 text-slate-900 font-bold">
                        COMING SOON
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-300 mb-4">{theme.blurb}</p>

                  {/* Call-to-action area */}
                  {isDemoPreview && (
                    <div className="flex flex-col space-y-2">
                      <Link
                        href={theme.href}
                        className="w-full text-center bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all border border-white/20"
                      >
                        View Game Night Demo
                      </Link>
                      <Link
                        href="/signup"
                        className="w-full text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-pink-600 hover:to-purple-600 transition-all"
                      >
                        Unlock All Themes
                      </Link>
                    </div>
                  )}

                  {isPreview && (
                    <div className="space-y-2 text-sm">
                      <Link
                        href={theme.href}
                        className="block text-center bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all border border-white/20"
                      >
                        Explore This Theme Preview
                      </Link>
                      <p className="text-xs text-gray-400">
                        Paid versions will add full blueprints: recipes, games, decor, scripts, and optional kits.
                      </p>
                    </div>
                  )}

                  {isComing && (
                    <div className="space-y-2 text-sm">
                      <p className="text-xs text-gray-400">
                        This theme is on our build list. Your membership and IP feedback help us decide what to finish
                        first.
                      </p>
                      <Link
                        href="/themes/game-night-preview"
                        className="block text-center bg-white/5 text-gray-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/15 transition-all border border-white/10"
                      >
                        See How Themes Will Look
                      </Link>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur p-8 rounded-2xl border border-purple-500/30 inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">
              Want a specific theme or IP?
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Tell us what you want on the homepage survey—sports teams, shows, fandoms—and we&apos;ll factor it into
              our licensing and build roadmap.
            </p>
            <Link
              href="/#ip-interest"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              <span>Go to IP Interest Form</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
