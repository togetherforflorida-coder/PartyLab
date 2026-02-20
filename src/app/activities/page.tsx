// src/app/activities/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Sparkles,
  Puzzle,
  FileText,
  MonitorSmartphone,
  Gamepad2,
  Trophy,
} from 'lucide-react'

export default function ActivitiesPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-black py-10">
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
            <div className="w-9 h-9 rounded-2xl bg-indigo-600/80 flex items-center justify-center border border-indigo-300/60 shadow-lg shadow-indigo-500/40">
              <Puzzle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-200">
                PartyLab Activities
              </p>
              <p className="text-xs text-gray-300">
                Things to do on nights when you&apos;re not hosting a full party.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Activities Between Parties
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            PartyLab isn&apos;t only about big themes and full events. It&apos;s also a place for crosswords, word
            searches, printable activity sheets, virtual challenges, trivia nights, drafts, tournaments, and more you
            can use any time—solo, with a friend, or with whoever happens to be around.
          </p>
        </header>

        {/* What Activities are */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What &quot;Activities&quot; Means Inside PartyLab
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            Think of Activities as the &quot;snacks&quot; of PartyLab: small things you can grab and use without
            committing to a whole theme or event. Some tie into themes and Labs; others stand alone as quiet‑corner
            options, ND‑friendly fidgets, or virtual hangs.
          </p>
          <p className="text-sm text-gray-200">
            Over time, this will grow into a library of:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Printable puzzles and activity sheets for kids, teens, and adults.</li>
            <li>Trivia and quiz packs you can run over video or at the table.</li>
            <li>Fantasy drafts and mini‑tournaments that don&apos;t require a full party.</li>
            <li>Virtual challenges and &quot;do this anytime&quot; experiments connected to Labs.</li>
          </ul>
        </section>

        {/* Puzzles & printables */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Puzzles */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Puzzle className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">Crosswords, Word Searches &amp; Puzzles</h3>
            </div>
            <p className="text-sm text-gray-200">
              We&apos;ll be building a library of printable and digital puzzles that match different vibes:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Theme‑agnostic crosswords and word searches you can do any time.</li>
              <li>Sports, movies &amp; TV, holidays, and kids&ndash;friendly puzzle sets.</li>
              <li>ND‑aware difficulty options (shorter grids, bigger fonts, clearer layouts).</li>
              <li>Quiet‑corner pages you can add to parties for guests who need breaks.</li>
            </ul>
            <p className="text-xs text-gray-400">
              Many of these will live as download‑and‑print PDFs, with occasional interactive versions you can do on a
              tablet or computer.
            </p>
          </div>

          {/* Activity sheets */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <FileText className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">Printable Activity Sheets</h3>
            </div>
            <p className="text-sm text-gray-200">
              Beyond puzzles, you&apos;ll see lots of printable sheets you can grab as needed:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Coloring pages (kids, adults, ND‑friendly doodles).</li>
              <li>Conversation cards and journaling prompts you can cut out or read from a phone.</li>
              <li>Score sheets, bingo cards, and &quot;Tonight&apos;s Activities&quot; menus.</li>
              <li>Quiet‑focus pages for Study Lab nights or solo recharge evenings.</li>
            </ul>
            <p className="text-xs text-gray-400">
              These can be used totally on their own or dropped into a theme as supporting material.
            </p>
          </div>
        </section>

        {/* Virtual & live activities */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <MonitorSmartphone className="w-5 h-5 text-indigo-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Virtual Challenges, Trivia Nights &amp; Lab‑Linked Activities
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Some activities will be designed for nights when you&apos;re online or only have an hour to spare:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-1">
              <p className="font-semibold text-white">Virtual &amp; Quick‑Start</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Trivia packs you can run over Discord, Zoom, or in a group chat.</li>
                <li>Mini &quot;watch‑along&quot; prompts for awards shows or game days.</li>
                <li>Short social media challenges from the Social Media Lab (post‑together nights, etc.).</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Linked to Labs &amp; Themes</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Study Lab focus prompts or body‑doubling formats you can grab last‑minute.</li>
                <li>Cooking Lab &quot;mini experiments&quot; you can do solo or with a kid.</li>
                <li>Music &amp; Nightlife Lab micro‑sets for 20–30 minute dance or listening breaks.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            You won&apos;t have to set up a full event to use these—you can just drop them into your evening whenever you
            need something to do.
          </p>
        </section>

        {/* Drafts, tournaments & competitive fun */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Trophy className="w-5 h-5 text-emerald-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Drafts, Tournaments &amp; Friendly Competition
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Not every draft or tournament needs to be a huge event. Activities will also cover lighter formats, like:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Fantasy mini‑drafts (for shows, sports, music, or fictional universes).</li>
            <li>Bracket templates for March Madness‑style &quot;just us&quot; tournaments.</li>
            <li>Game night mini‑tournaments that you can run anytime you feel like competing.</li>
            <li>Printable and digital scoreboards you can reuse across multiple nights.</li>
          </ul>
          <p className="text-xs text-gray-400">
            These are great when you want &quot;more than just watching&quot; but don&apos;t have the energy for
            full‑on hosting.
          </p>
        </section>

        {/* ND-friendly & quiet-corner note */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-800/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Gamepad2 className="w-5 h-5 text-indigo-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              ND‑Friendly, Low‑Pressure &amp; Quiet‑Corner Ready
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Because PartyLab is being built with neurodivergent and mixed‑energy groups in mind, many Activities will:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Have both &quot;high engagement&quot; and &quot;quiet corner&quot; options.</li>
            <li>Use clear, simple instructions with visual cues where possible.</li>
            <li>Offer solo and parallel‑play variations so people can step in and out.</li>
          </ul>
          <p className="text-xs text-gray-400">
            You can use these to support a theme night—or just to give yourself and your people something gentle to do
            on a random Tuesday.
          </p>
        </section>

        {/* CTA / membership tie-in */}
        <section className="text-center space-y-3">
          <p className="text-sm text-gray-300">
            As PartyLab grows, Activities will be included with membership and tied into themes and Labs. If you want
            access while we&apos;re still building out the library, you can lock in early pricing:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/themes"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>Explore Themes &amp; Previews</span>
              <span>→</span>
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg shadow-pink-500/40"
            >
              <span>See Membership &amp; Early Access</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
