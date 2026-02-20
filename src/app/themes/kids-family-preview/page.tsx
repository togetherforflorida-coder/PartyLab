// src/app/themes/kids-family-preview/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Puzzle,
  Sparkles,
  Users,
  UtensilsCrossed,
  MonitorSmartphone,
} from 'lucide-react'

export default function KidsFamilyPreviewPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-black py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back link */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center text-xs text-gray-300 hover:text-white mb-2"
        >
          <ArrowLeft className="w-3 h-3 mr-1" />
          <span>Back</span>
        </button>

        {/* Header / Preview framing */}
        <header className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-emerald-600/80 flex items-center justify-center border border-emerald-300/60 shadow-lg shadow-emerald-500/40">
              <Puzzle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200">
                Theme Preview • Kids &amp; Family
              </p>
              <p className="text-xs text-gray-300">
                A sneak peek at how full PartyLab Kids &amp; Family themes will feel once they&apos;re paid and unlocked.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Kids &amp; Family Theme Preview
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            This is a preview of what Kids &amp; Family themes will look like inside PartyLab. The paid versions will
            give you complete blueprints for family game nights, movie nights, cook‑alongs, holidays, and simple
            rituals—with age‑appropriate games, sensory‑aware tweaks, and options for mixed ages.
          </p>
        </header>

        {/* Core idea: family vibes */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-emerald-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              One Category, Many Family‑Friendly Vibes
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            A full Kids &amp; Family theme will offer different ways to gather, depending on your crew:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              <strong>Classic family game night:</strong> board/card games everyone can play, with clear turn‑taking.
            </li>
            <li>
              <strong>Little‑kid focus:</strong> simplified games, shorter rounds, built‑in wiggle/quiet‑corner breaks.
            </li>
            <li>
              <strong>Mixed ages / cousins night:</strong> parallel activities so older and younger kids both have fun.
            </li>
            <li>
              <strong>Parent + child evenings:</strong> one‑on‑one or small‑group nights with gentler pacing and small rituals.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            Each vibe will come with game suggestions, timing, behavior expectations, and backup plans for when attention
            spans run shorter than hoped.
          </p>
        </section>

        {/* Activities & setups */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Activities & games */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Users className="w-5 h-5 text-emerald-200" />
              <h3 className="text-lg font-bold text-white">
                Games, Side‑Quests &amp; Parallel Play
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Full access will give you age‑rated suggestions and structures for:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Main games (board, card, cooperative) sorted by recommended age.</li>
              <li>Simple &quot;side quests&quot; (puzzles, coloring, blocks) for kids who need breaks.</li>
              <li>
                Parallel play setups (one game at the table, quiet activity nearby) so not everyone has to do the same
                thing every second.
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              Many blueprints will specifically call out sensory loads (noise, waiting, touching pieces) and offer small
              tweaks to make nights easier for ND kids and adults.
            </p>
          </div>

          {/* Food & rhythm */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <UtensilsCrossed className="w-5 h-5 text-emerald-200" />
              <h3 className="text-lg font-bold text-white">
                Kid‑Friendly Snacks &amp; Nighttime Rhythm
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              The paid theme will suggest food and flow that works with kids&apos; energy and bedtimes:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Finger‑foods and snacks that are easy to grab between turns.</li>
              <li>Lower‑sugar options and simple hydration prompts (water, milk, juice, mocktails).</li>
              <li>Clear &quot;start game by&quot; and &quot;wind‑down&quot; times to protect bedtime routines.</li>
            </ul>
            <p className="text-xs text-gray-400">
              Any &quot;fun food&quot; ideas will be paired with gentler options and suggestions for portioning, so the
              night feels special without wrecking sleep or nervous systems.
            </p>
          </div>
        </section>

        {/* Setups */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <MonitorSmartphone className="w-5 h-5 text-emerald-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Setups: Floor Forts, Table Nights, &amp; Screen‑Optional
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            A full Kids &amp; Family theme will include layouts and options for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-1">
              <p className="font-semibold text-white">Floor Fort &amp; Cozy Piles</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Blankets, pillows, and beanbags as &quot;base camp.&quot;</li>
                <li>Low tables or trays for snacks and game boards.</li>
                <li>Soft lighting and smaller zones for kids who need breaks.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Kitchen / Dining Table Nights</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Table layouts that keep game components and food separate.</li>
                <li>Chair / booster options and clear &quot;get up and stretch&quot; moments.</li>
                <li>Ideas for quick clean‑up so you don&apos;t dread the aftermath.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Screen‑Optional Formats</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Game nights that don&apos;t require screens at all.</li>
                <li>Hybrid nights where a show or stream is background only.</li>
                <li>
                  Guidelines for when &amp; how screens can be used (scoreboards, timers) without taking over the night.
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">ND‑Aware &amp; Mixed Energy Levels</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Stations where kids can move between activities at their own pace.</li>
                <li>Ways to honor &quot;I&apos;m done now&quot; without shaming anyone.</li>
                <li>Protection for quieter siblings who might get overwhelmed.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mini Sample: Kid-Friendly Board Game Night */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-emerald-700/70 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-emerald-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Mini Sample: Kid‑Friendly Board Game Night
            </h3>
          </div>
          <p className="text-sm text-gray-300">
            This is a **small example** of how a Kids &amp; Family board game night could look in the full theme. The paid
            version will include more game options, schedules, and printables—but here&apos;s a simple taste.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Vibe &amp; Setup</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Family with 2–4 kids, ages roughly 6–12.</li>
                <li>
                  One main game at the table (easy‑to‑learn, 20–30 minute rounds) plus a small side table with puzzles
                  or coloring for kids who finish early or need breaks.
                </li>
                <li>Lighting: bright enough to see cards and pieces, but a little softer than full overhead glare.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Featured Snack Idea</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Board Piece Bites&quot;</strong> – a simple snack tray with cubes or sticks (cheese,
                  cucumber, carrots, crackers, grapes, etc.).
                </li>
                <li>Arrange in rough &quot;rows&quot; or &quot;squares&quot; so it looks a bit like a game board.</li>
                <li>Offer a small &quot;try something new&quot; bowl for brave taste‑testers.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Sample Drinks (Non‑Alcoholic)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Winner&apos;s Punch&quot;</strong> – diluted fruit juice + sparkling water over ice for
                  older kids and adults.
                </li>
                <li>
                  Plain water in fun cups or bottles for everyone, with a &quot;drink break&quot; built into the night.
                </li>
                <li>Option: warm cocoa or tea for a cooler‑weather game night.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Example Rules &amp; Expectations</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Before you start: everyone shares one &quot;do&quot; and one &quot;don&apos;t&quot; (e.g. no yelling).</li>
                <li>Plan for 1–2 rounds of the main game, then evaluate if kids still want more.</li>
                <li>
                  Have a clear end‑time or &quot;final round&quot; so kids know when bedtime or wind‑down begins.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-200">
            <p className="font-semibold text-white">Example Structure (Abbreviated)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>10–15 min: Set up snacks, drinks, and explain the game + basic expectations.</li>
              <li>20–30 min: First round of the main board game; help kids learn rules without over‑explaining.</li>
              <li>5–10 min break: Bathroom, short wiggle break, refill snacks.</li>
              <li>20–30 min: Second round or switch to a shorter/coop game if attention is fading.</li>
              <li>
                5–10 min wrap‑up: Everyone says one thing they liked or would change next time; quick clean‑up with
                assigned &quot;jobs&quot; so it&apos;s not all on the adults.
              </li>
            </ul>
            <p className="text-[11px] text-gray-400">
              In the full theme, this would expand into age‑specific game suggestions, print‑and‑go &quot;rules of
              game night&quot; posters, reward charts, and ideas for repeating the ritual weekly or monthly.
            </p>
          </div>
        </section>

        {/* Preview CTA / link to signup */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-emerald-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            What You&apos;ll Unlock in Full Kids &amp; Family Themes
          </h3>
          <p className="text-sm text-gray-300">
            This page just previews the structure. Paid Kids &amp; Family themes will include:
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>Blueprints for game nights, movie nights, cook‑alongs, and simple rituals.</li>
            <li>Age‑aware game suggestions, schedules, and behavior/expectation scripts.</li>
            <li>Snack and drink ideas that balance &quot;fun&quot; with practicality.</li>
            <li>Printable materials and options for kits/custom items from the PartyLab shop.</li>
          </ul>
          <p className="text-sm text-gray-300">
            You can access these and other themes during early access as a founding member or trial subscriber.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>See Membership &amp; Early Access</span>
              <span>→</span>
            </Link>
            <Link
              href="/signup?plan=early-bird"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg shadow-pink-500/40"
            >
              <span>Become a Founding Member</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
