// src/app/labs/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  FlaskConical,
  HeartHandshake,
  Share2,
  UtensilsCrossed,
  BookOpenCheck,
  Music2,
  Sparkles,
} from 'lucide-react'

export default function LabsOverviewPage() {
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
            <div className="w-9 h-9 rounded-2xl bg-purple-600/80 flex items-center justify-center border border-purple-300/60 shadow-lg shadow-purple-500/40">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-purple-200">
                PartyLab Labs
              </p>
              <p className="text-xs text-gray-300">
                Focused spaces where we test formats for connection, not just decoration.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Labs Overview
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            Labs are where PartyLab experiments with specific parts of life—dating, social media, cooking, studying,
            nightlife, and more. Themes and blueprints help you plan nights in; Labs explore ongoing rituals,
            experiments, and hosted experiences that sit alongside those nights.
          </p>
        </header>

        {/* How Labs fit in */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-purple-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              How Labs Fit Into PartyLab
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            Think of it like this:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              <strong>Themes &amp; blueprints</strong> = specific nights and parties (movie marathons, game nights,
              holidays, birthdays, etc.).
            </li>
            <li>
              <strong>Labs</strong> = ongoing experiments and rituals in parts of your life that keep coming up: dating,
              social media, cooking, studying, nightlife.
            </li>
            <li>
              <strong>Hosted events</strong> = bigger moments (Pulse 10, America 250, Glitched Launch) that showcase
              what PartyLab can do live or hybrid.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            Some Lab work will stay as guides and blueprints. Some pieces may become live events or courses. Labs are
            intentionally slow‑built and feedback‑driven.
          </p>
        </section>

        {/* Individual Labs grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dating & Meetup Lab */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-pink-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <HeartHandshake className="w-5 h-5 text-pink-200" />
              <h3 className="text-lg font-bold text-white">Dating &amp; Meetup Lab</h3>
            </div>
            <p className="text-sm text-gray-200 mb-2">
              Safer, more intentional dating and friend‑finding: verified connections, first‑date blueprints, small
              group outings, and education around scammers, groomers, confidence, and boundaries.
            </p>
            <Link
              href="/dating-meetups"
              className="inline-flex items-center space-x-1 text-xs text-pink-200 hover:text-pink-100 underline underline-offset-2"
            >
              <span>Visit the Dating &amp; Meetup Lab</span>
              <span>→</span>
            </Link>
          </div>

          {/* Social Media Lab */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Share2 className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">Social Media Lab</h3>
            </div>
            <p className="text-sm text-gray-200 mb-2">
              Experiments in making social media feel more intentional and less like a doomscroll: content nights,
              post‑together sessions, boundaries, and basic safety/harassment awareness.
            </p>
            <Link
              href="/social-media"
              className="inline-flex items-center space-x-1 text-xs text-indigo-200 hover:text-indigo-100 underline underline-offset-2"
            >
              <span>Visit the Social Media Lab</span>
              <span>→</span>
            </Link>
          </div>

          {/* Cooking Lab */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-amber-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <UtensilsCrossed className="w-5 h-5 text-amber-200" />
              <h3 className="text-lg font-bold text-white">Cooking Lab</h3>
            </div>
            <p className="text-sm text-gray-200 mb-2">
              Co‑created recipes, cook‑along nights, and food rituals for families, ND folks, roommates, and anyone who
             &apos;s tired of the &quot;what are we eating&quot; spiral.
            </p>
            <Link
              href="/cooking-lab"
              className="inline-flex items-center space-x-1 text-xs text-amber-200 hover:text-amber-100 underline underline-offset-2"
            >
              <span>Visit the Cooking Lab</span>
              <span>→</span>
            </Link>
          </div>

          {/* Study Party Lab */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <BookOpenCheck className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">Study Party Lab</h3>
            </div>
            <p className="text-sm text-gray-200 mb-2">
              Focus blocks, body‑doubling, and &quot;study party&quot; formats for students, remote workers, and ND
              brains who need gentler structures and less shame around productivity.
            </p>
            <Link
              href="/study-lab"
              className="inline-flex items-center space-x-1 text-xs text-indigo-200 hover:text-indigo-100 underline underline-offset-2"
            >
              <span>Visit the Study Party Lab</span>
              <span>→</span>
            </Link>
          </div>

          {/* Music & Nightlife Lab */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-fuchsia-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Music2 className="w-5 h-5 text-fuchsia-200" />
              <h3 className="text-lg font-bold text-white">Music &amp; Nightlife Lab</h3>
            </div>
            <p className="text-sm text-gray-200 mb-2">
              Home‑scale nightlife experiments: DJ nights, listening parties, album release celebrations, pre‑ and
              post‑concert gatherings, and queer‑/ND‑friendly alternatives to conventional clubs.
            </p>
            <Link
              href="/music-nightlife"
              className="inline-flex items-center space-x-1 text-xs text-fuchsia-200 hover:text-fuchsia-100 underline underline-offset-2"
            >
              <span>Visit the Music &amp; Nightlife Lab</span>
              <span>→</span>
            </Link>
          </div>

          {/* Future Labs placeholder */}
          <div className="bg-black/30 backdrop-blur rounded-3xl p-6 border border-purple-800/60 space-y-3">
            <h3 className="text-lg font-bold text-white mb-1">Future Labs &amp; Experimental Spaces</h3>
            <p className="text-sm text-gray-200 mb-2">
              Over time, we may introduce additional Labs or sub‑Labs—around grief, creativity, parenting, fandoms, or
              specific communities—based on what people ask for and where we see real need.
            </p>
            <p className="text-xs text-gray-400">
              If there&apos;s a part of your life you keep saying &quot;I wish there was a structure for this&quot;
              about, you&apos;ll eventually be able to suggest Lab ideas and pilots.
            </p>
          </div>
        </section>

        {/* Membership & access note */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-white">
            How Labs Relate to Membership &amp; Pricing
          </h2>
          <p className="text-sm text-gray-300">
            Right now, Labs are in active development. As they come online:
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>
              Some Lab content will be available to all members (and sometimes even non‑members as we test ideas).
            </li>
            <li>
              Certain live experiences, courses, or deeper dives may be **ticketed or premium**, with founding members
              getting better pricing and earlier access.
            </li>
            <li>
              Labs will plug into the main PartyLab themes and events, so your membership still centers around having a
              living toolbox of nights and rituals to pull from.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            We&apos;ll keep the Pricing page updated with what&apos;s included by default vs. what&apos;s a separate
            ticket or add‑on, so you can choose what fits your budget and needs.
          </p>
        </section>

        {/* CTA back to pricing / signup */}
        <section className="text-center space-y-3">
          <p className="text-sm text-gray-300">
            If Labs sound like the kind of experiments you want to be around, you can lock in early access pricing while
            we&apos;re still building them.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>See Membership &amp; Pricing</span>
              <span>→</span>
            </Link>
            <Link
              href="/signup?plan=early-bird"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg shadow-pink-500/40"
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
