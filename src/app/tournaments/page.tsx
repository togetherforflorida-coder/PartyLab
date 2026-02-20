// src/app/tournaments/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Trophy,
  Sparkles,
  Gamepad2,
  ClipboardList,
  MonitorSmartphone,
  Shield,
} from 'lucide-react'

export default function TournamentsPage() {
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
            <div className="w-9 h-9 rounded-2xl bg-emerald-600/80 flex items-center justify-center border border-emerald-300/60 shadow-lg shadow-emerald-500/40">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200">
                PartyLab Tournaments
              </p>
              <p className="text-xs text-gray-300">
                Friendly, skill‑based competitions—not gambling.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Tournaments &amp; Friendly Competitions
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            Over time, PartyLab will host online and hybrid tournaments for games, trivia, brackets, and creative
            challenges. These are skill‑based competitions with clear rules and prize structures—not gambling.
          </p>
        </header>

        {/* What tournaments are */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-emerald-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What Our Tournaments Look Like
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            Tournaments are structured, time‑boxed competitions you can join from home or with a small group. Some
            examples we may run as PartyLab grows:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Video game brackets (party games, racing, sports, co‑op challenges).</li>
            <li>Tabletop or card game tournaments with shared rulesets.</li>
            <li>Trivia and quiz tournaments around sports, movies, TV, holidays, and fandoms.</li>
            <li>Fantasy draft or bracket competitions (non‑gambling) with points and prizes.</li>
          </ul>
          <p className="text-xs text-gray-400">
            All of these will be built to be fair, skill‑based, and clear—you&apos;ll know what you&apos;re signing up
            for before you hit &quot;join.&quot;
          </p>
        </section>

        {/* Skill-based & rules */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <ClipboardList className="w-5 h-5 text-emerald-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Skill‑Based, Clear Rules &amp; Equal Footing
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            PartyLab tournaments are **skill‑based competitions**, not games of chance. That means:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              Rules, scoring, and how to win are posted **before** you enter—no hidden mechanics or surprise
              requirements.
            </li>
            <li>Everyone in a given tournament is on equal footing (same rules, same scoring, same time limits).</li>
            <li>Standings and tiebreakers are handled according to the posted rules, not on the fly.</li>
          </ul>
          <p className="text-xs text-gray-400">
            If a tournament has any special format (e.g., group stages, playoffs, creative judging), you&apos;ll see that
            clearly in the event description before you decide to participate.
          </p>
        </section>

        {/* Not gambling disclaimer */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-rose-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Shield className="w-5 h-5 text-rose-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Not Gambling &amp; How We Handle Entry Fees
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            PartyLab is **not** a gambling platform. We do not run or endorse betting, casinos, or real‑money wagering on
            outcomes.
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              If someone chooses to gamble on something related to an event, that is **not** done through PartyLab and
              is entirely their own responsibility.
            </li>
            <li>
              We expect anyone who chooses to gamble on their own to do so legally and responsibly and in line with the
              laws of their country/region.
            </li>
            <li>
              PartyLab tournaments may have small **entry fees**, but those are to cover prizes, admin, and creative
              work—not to fund betting pools.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            For each tournament, entry fees (if any), prize descriptions, and eligibility (age, region, etc.) will be
            listed clearly before you sign up.
          </p>
        </section>

        {/* Types of tournaments & formats */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Gamepad2 className="w-5 h-5 text-emerald-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Formats We&apos;re Exploring
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Over time, you might see formats like:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-1">
              <p className="font-semibold text-white">Bracket Tournaments</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Single‑elimination or double‑elimination brackets for games or trivia.</li>
                <li>Seeding rules and tiebreakers posted in advance.</li>
                <li>Printable or digital brackets you can follow along at home.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Round‑Robin &amp; Points‑Based Leagues</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Everyone plays multiple rounds; points add up over time.</li>
                <li>Clear point values for wins, draws, and specific achievements.</li>
                <li>Mini “seasons” tied to sports schedules, shows, or events.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Drafts &amp; Fantasy‑Style Contests</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Draft nights for sports tournaments, award shows, or fictional lineups.</li>
                <li>Scoring based on real‑world or in‑game performance, no cash betting.</li>
                <li>Templates that keep the math simple enough for casual players.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Creative &amp; Lab‑Linked Tournaments</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Bracket or points systems for cooking experiments, playlists, or watch lists.</li>
                <li>Tournaments that tie into Labs (Study Party, Cooking, Music &amp; Nightlife).</li>
                <li>Judging criteria posted up front for any creative or subjective scoring.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Online/hybrid note */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-800/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <MonitorSmartphone className="w-5 h-5 text-emerald-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Online, At Home &amp; Hybrid Participation
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Most PartyLab tournaments will be designed so you can:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Join solo from home (video, chat, or score submission systems).</li>
            <li>Play as a household or small group on one &quot;team&quot; together.</li>
            <li>Join hybrid events that have both online and in‑person angles.</li>
          </ul>
          <p className="text-xs text-gray-400">
            Exact participation details (required platforms, time zones, accessibility notes) will be listed for each
            tournament before you register.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-3">
          <p className="text-sm text-gray-300">
            Tournaments will roll out gradually as PartyLab grows. Many will be available to members at a discount, with
            small entry fees when prizes are involved. If you want to be around as we start launching them:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/events"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>See Events &amp; Live Formats</span>
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
          <p className="text-[11px] text-gray-400 max-w-md mx-auto">
            Whenever a specific tournament goes live, its page will spell out rules, fees (if any), prizes, and
            eligibility so you can decide if it&apos;s a good fit for you.
          </p>
        </section>
      </div>
    </div>
  )
}
