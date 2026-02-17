'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

type ThemeItem = {
  slug: string
  name: string
  emoji: string
  category: string
  status: 'demo' | 'members' | 'coming-soon'
  blurb: string
}

const themes: ThemeItem[] = [
  {
    slug: 'game-night',
    name: 'Game Night Party',
    emoji: '🎮',
    category: 'At-Home / Cozy',
    status: 'demo',
    blurb: 'Couch co‑op, quick tournaments, snacks, and cozy options for 4–12 guests.',
  },
  {
    slug: 'super-bowl',
    name: 'Big Game Football Party',
    emoji: '🏈',
    category: 'Sports',
    status: 'members',
    blurb: 'Team-color snacks, watch party timeline, and game‑day side activities.',
  },
  {
    slug: 'birthday-bash',
    name: 'Birthday Bash',
    emoji: '🎂',
    category: 'Birthdays',
    status: 'coming-soon',
    blurb: 'Flexible birthday template for kids, adults, and milestone ages.',
  },
  {
    slug: 'holiday-cozy-christmas',
    name: 'Cozy Christmas Night In',
    emoji: '🎄',
    category: 'Holidays',
    status: 'coming-soon',
    blurb: 'Warm drinks, simple crafts, and low‑stress holiday hosting ideas.',
  },
  {
    slug: 'faith-and-food',
    name: 'Faith & Food Family Night',
    emoji: '🙏',
    category: 'Faith & Family',
    status: 'coming-soon',
    blurb: 'Gentle family nights combining simple recipes with reflection prompts.',
  },
  {
    slug: 'bachelorette-night',
    name: 'Bachelorette Night In (18+)',
    emoji: '🍷',
    category: 'Adult 18+',
    status: 'coming-soon',
    blurb: 'Spa, games, and celebration ideas that work at home or a rental.',
  },
]

const categories = [
  'All',
  'At-Home / Cozy',
  'Sports',
  'Birthdays',
  'Holidays',
  'Faith & Family',
  'Adult 18+',
]

export default function ThemesPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredThemes = useMemo(() => {
    return themes.filter(theme => {
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
            This is a living catalog. Game Night is fully demoed; others are being built and will unlock with your membership.
          </p>
        </div>

        {/* Search + Categories */}
        <div className="mb-10 space-y-4">
          {/* Search box */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search themes by name, category, or vibe..."
              className="w-full bg-black/40 text-gray-100 px-4 py-3 rounded-full border border-purple-700/50 focus:border-purple-400 focus:outline-none text-sm placeholder:text-gray-500"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {categories.map(cat => {
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
            No themes match your search yet. Try a different keyword, or tell us what you&apos;d like on the homepage IP survey.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredThemes.map(theme => {
              const isDemo = theme.status === 'demo'
              const isMembers = theme.status === 'members'
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
                    {isDemo && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500 text-slate-900 font-bold">
                        DEMO
                      </span>
                    )}
                    {isMembers && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-blue-500 text-slate-900 font-bold">
                        MEMBERS
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
                  {isDemo && (
                    <div className="flex flex-col space-y-2">
                      <Link
                        href="/preview/game-night"
                        className="w-full text-center bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all border border-white/20"
                      >
                        View Demo Theme
                      </Link>
                      <Link
                        href="/signup"
                        className="w-full text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-pink-600 hover:to-purple-600 transition-all"
                      >
                        Unlock All Themes
                      </Link>
                    </div>
                  )}

                  {isMembers && (
                    <div className="space-y-2 text-sm">
                      <p className="text-xs text-gray-400">
                        Full theme includes recipes, drinks, games, crafts, and shopping lists.
                      </p>
                      <Link
                        href="/signup"
                        className="block text-center bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all border border-white/20"
                      >
                        Login or Join to Unlock
                      </Link>
                    </div>
                  )}

                  {isComing && (
                    <div className="space-y-2 text-sm">
                      <p className="text-xs text-gray-400">
                        This theme is on our build list. Your membership helps us bring it online faster.
                      </p>
                      <Link
                        href="/preview/game-night"
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
              Tell us what you want on the homepage survey—sports teams, shows, fandoms—and we&apos;ll factor it into our licensing roadmap.
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
