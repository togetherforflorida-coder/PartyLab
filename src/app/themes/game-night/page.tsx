// src/app/themes/game-night/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ThemeLayout from '@/components/ThemeLayout'
import { supabaseBrowser } from '@/lib/supabaseClient'

export default function GameNightThemePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabaseBrowser.auth.getSession()
      if (!session) {
        // Not logged in: send to preview page
        router.replace('/preview/game-night')
        return
      }
      setUser(session.user)
      setLoading(false)
    }
    checkAuth()
  }, [router])

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400" />
      </div>
    )
  }

  // At this point, user is logged in.
  return (
    <ThemeLayout
      title="Game Night Party Theme (Full Version)"
      emoji="🎮"
      subtitle="Full unlocked guide for members: setup, kits, recipes, drinks, activities, crafts, and more."
    >
      <div className="space-y-10">
        {/* Hero / Photos Placeholder */}
        <section className="bg-black/30 backdrop-blur rounded-2xl p-6 border border-purple-700/30">
          <h2 className="text-2xl font-bold text-white mb-4">Visual Vibe & Setup</h2>
          <p className="text-gray-300 text-sm mb-4">
            This is where we&apos;ll add real photos later: console setups, board game tables, snack spreads, etc.
            For now, imagine:
          </p>
          <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
            <li>One main screen with a console or party game</li>
            <li>A table for board/card games with snacks in the center</li>
            <li>A quiet corner with puzzles/coloring for low‑sensory guests</li>
          </ul>
        </section>

        {/* Kits Section */}
        <section className="bg-black/30 backdrop-blur rounded-2xl p-6 border border-purple-700/30">
          <h2 className="text-2xl font-bold text-white mb-4">Party Kits for This Theme</h2>
          <p className="text-gray-300 text-sm mb-6">
            These are sample kit ideas. Later, they&apos;ll link to real products in your Shop:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: 'Game Night Starter Kit',
                desc: 'Basic decor, snack bowls, score sheets, and a mini trophy.',
              },
              {
                name: 'Tournament Mode Kit',
                desc: 'Bracket board, dry‑erase markers, extra controller labels, and prize ribbons.',
              },
              {
                name: 'Cozy Couch Co‑Op Kit',
                desc: 'Blankets, ambient lights, coasters, and a snack caddy for the coffee table.',
              },
            ].map((kit, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-xl p-4 border border-purple-600/40"
              >
                <h3 className="text-lg font-semibold text-white mb-1">{kit.name}</h3>
                <p className="text-gray-300 text-sm">{kit.desc}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Placeholder: will connect to real products and rental options.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Drinks Section: 21+ and Virgin */}
        <section className="bg-black/30 backdrop-blur rounded-2xl p-6 border border-purple-700/30 space-y-6">
          <h2 className="text-2xl font-bold text-white mb-2">Drinks for This Theme</h2>
          <p className="text-gray-300 text-sm mb-2">
            Here we&apos;ll eventually show multiple themed drinks. For now, sample structure:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 21+ */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">21+ Cocktails</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="bg-purple-900/40 rounded-lg p-3 border border-purple-600/40">
                  <h4 className="font-semibold text-white mb-1">“Power‑Up Punch”</h4>
                  <p>Bright, fruity punch served in clear cups with optional glow‑sticks.</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Placeholder: recipe details will go here later.
                  </p>
                </div>
                <div className="bg-purple-900/40 rounded-lg p-3 border border-purple-600/40">
                  <h4 className="font-semibold text-white mb-1">“Final Boss Old Fashioned”</h4>
                  <p>A strong, classic drink for the last round of the night.</p>
                </div>
              </div>
            </div>

            {/* Virgin + Kids */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Zero‑Proof & Kids Drinks</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="bg-purple-900/40 rounded-lg p-3 border border-purple-600/40">
                  <h4 className="font-semibold text-white mb-1">“XP Potion” (Virgin)</h4>
                  <p>Sparkling juice mix with fun colored ice cubes.</p>
                </div>
                <div className="bg-purple-900/40 rounded-lg p-3 border border-purple-600/40">
                  <h4 className="font-semibold text-white mb-1">Kids Hot Chocolate Station</h4>
                  <p>Hot cocoa, toppings, and allergen‑friendly options as needed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities & Games */}
        <section className="bg-black/30 backdrop-blur rounded-2xl p-6 border border-purple-700/30 space-y-4">
          <h2 className="text-2xl font-bold text-white mb-2">Games & Activities</h2>
          <p className="text-gray-300 text-sm">
            Later, this will list multiple specific games with full rules. For now, sample layout:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">Main Game Ideas</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Bracket‑style tournament (Smash, Mario Kart, Jackbox, etc.)</li>
                <li>Co‑op story game for chill nights</li>
                <li>Party game rotation (Mario Party, Overcooked, etc.)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Low‑Sensory / Quiet Corner</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Coloring pages and word searches</li>
                <li>Simple puzzles or building toys</li>
                <li>Headphone‑friendly handheld games</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Crafts Section */}
        <section className="bg-black/30 backdrop-blur rounded-2xl p-6 border border-purple-700/30 space-y-4">
          <h2 className="text-2xl font-bold text-white mb-2">Theme Crafts & DIY</h2>
          <p className="text-gray-300 text-sm">
            Future content: step‑by‑step craft instructions, printable templates, and supply lists.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div className="bg-purple-900/40 rounded-lg p-4 border border-purple-600/40">
              <h3 className="font-semibold text-white mb-1">DIY Controller Coasters</h3>
              <p>Make felt or cork coasters shaped like game controllers.</p>
            </div>
            <div className="bg-purple-900/40 rounded-lg p-4 border border-purple-600/40">
              <h3 className="font-semibold text-white mb-1">Scoreboard or Bracket Board</h3>
              <p>Create a custom bracket or scoreboard poster for your tournament.</p>
            </div>
          </div>
        </section>

        {/* Placeholder: Shopping List & Playlist */}
        <section className="bg-black/30 backdrop-blur rounded-2xl p-6 border border-purple-700/30">
          <h2 className="text-2xl font-bold text-white mb-2">Shopping List & Playlist (Coming Soon)</h2>
          <p className="text-gray-300 text-sm mb-2">
            This section will eventually show:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Full ingredient and supply list with budget tiers</li>
            <li>Links to your shop kits and recommended items</li>
            <li>Curated playlists (chill, hype, background) with links</li>
          </ul>
        </section>
      </div>
    </ThemeLayout>
  )
}
