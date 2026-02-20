// src/app/dating-meetups/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  HeartHandshake,
  Users,
  Shield,
  Coffee,
  Sparkles,
  CalendarDays,
} from 'lucide-react'

export default function DatingMeetupsLabPage() {
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
              <HeartHandshake className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-pink-200">
                PartyLab Labs
              </p>
              <p className="text-xs text-gray-300">
                Focused spaces where we test formats for connection—not just decorations.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Dating &amp; Meetup Lab
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            The Dating &amp; Meetup Lab is our experiment in safer, more intentional dating and friend‑finding:
            part date‑idea engine, part verified‑user dating space, and part education/support hub for navigating
            modern relationships without losing yourself.
          </p>
        </header>

        {/* What this Lab is */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-pink-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-pink-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What the Dating &amp; Meetup Lab Is Building Toward
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            This Lab is **not just** “tips for dates”—it&apos;s a multi‑layered space we&apos;re actively building:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              A **verified user dating / meetup layer** where you can connect with others inside the PartyLab ecosystem.
            </li>
            <li>
              **Blueprints and kits** for first dates, early dating, and friend meetups—whether you met on PartyLab or elsewhere.
            </li>
            <li>
              **Courses and support spaces** on spotting scammers and groomers, boosting confidence, and navigating boundaries.
            </li>
            <li>
              **Live and hybrid events** for singles and new couples—group outings, mixers, and co‑hosted experiences.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            Right now, many of these pieces are still in development or pilot mode. This page is a window into the
            direction we&apos;re heading so you can decide if you want to be part of it as it grows.
          </p>
        </section>

        {/* Two main tracks: Platform + Formats */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Verified dating / meetup layer */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-pink-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Users className="w-5 h-5 text-pink-200" />
              <h3 className="text-lg font-bold text-white">Verified Dating &amp; Meetup Space</h3>
            </div>
            <p className="text-sm text-gray-200">
              Over time, the Dating &amp; Meetup Lab will include a verified‑user layer where:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>You can build a profile connected to your PartyLab account.</li>
              <li>You can opt into being visible for dating, friendship, or both.</li>
              <li>
                You can match or connect with others who are also interested in structured, consent‑aware ways of
                meeting up.
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              This will launch slowly and carefully, with a focus on verification, safety policies, and clear boundaries.
              We&apos;re not trying to be a giant dating app—we&apos;re trying to be a more thoughtful, smaller layer in
              your connection toolkit.
            </p>
          </div>

          {/* Date ideas & first-date packages */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-pink-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Coffee className="w-5 h-5 text-pink-200" />
              <h3 className="text-lg font-bold text-white">
                First‑Date Blueprints &amp; Support Packages
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Whether you met on PartyLab, another app, or through friends, we want to help make those first few dates
              less awkward and more grounded.
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Curated first‑date formats (coffee, walks, game nights, co‑cooking, etc.).</li>
              <li>
                Optional **first‑date packages**: prompts, checklists, quiet‑corner ideas, and small tangible items
                you can buy or print.
              </li>
              <li>
                Suggestion sets for &quot;if this is going well&quot; vs &quot;if we should wrap this up&quot; without
                drama.
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              These blueprints and packages will live alongside PartyLab themes—so a &quot;movie night&quot; date or a
              &quot;holiday market&quot; meetup can draw on a full blueprint, not just a vague idea.
            </p>
          </div>
        </section>

        {/* Courses & support */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-rose-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Shield className="w-5 h-5 text-rose-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Courses, Scammer/Groomer Awareness, &amp; Support Spaces
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Dating and meeting new people can be genuinely risky—emotionally, financially, and physically. This Lab will
            also host:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              Short courses or modules on how to spot **scammers, groomers, and high‑pressure patterns**, with real‑world
              examples.
            </li>
            <li>
              Confidence‑building resources: scripts, mindset shifts, and small challenges to help you feel more anchored.
            </li>
            <li>
              Support‑style spaces (text‑based or live) where people can talk about experiences, patterns, and recovery.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            Nothing in this Lab replaces therapy, legal advice, or crisis services. It&apos;s about education, harm
            reduction, and community support layered on top of the fun parts of dating and making friends.
          </p>
        </section>

        {/* Events & outings */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-pink-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <CalendarDays className="w-5 h-5 text-pink-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Live Events &amp; Group Outings
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            As PartyLab&apos;s hosted event side grows, this Lab will tie into:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              **Singles events** built around themes and activities, not just standing in a room with a name tag.
            </li>
            <li>
              **Group outings** or watch‑togethers for people who are newly dating and want something beyond &quot;dinner
              and a movie.&quot;
            </li>
            <li>
              Hybrid or virtual gatherings for people in smaller towns or who prefer online/ND‑friendly formats.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            Exact events will depend on where interest clusters and how comfortable people are meeting in person vs
            staying virtual. The Lab&apos;s job is to experiment, listen, and refine.
          </p>
        </section>

        {/* Interest / sign-up placeholder */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-pink-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            Want to Be Part of the Dating &amp; Meetup Lab?
          </h3>
          <p className="text-sm text-gray-300">
            If you&apos;re interested in trying early features, taking part in courses, or joining singles / early‑dating
            events as they roll out, you can raise your hand here. This doesn&apos;t create a public profile yet—it just
            lets us know who to invite as experiments open.
          </p>

          <form className="space-y-3 max-w-md text-sm text-gray-200">
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-pink-600/40 focus:border-pink-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                What are you hoping for from this Lab?
              </label>
              <textarea
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-pink-600/40 focus:border-pink-400 focus:outline-none"
                rows={3}
                placeholder="Example: safer dates; ND-friendly meetups; confidence help; support groups; group events; a verified dating space; etc."
              />
            </div>
            <p className="text-[11px] text-gray-400">
              Forms for this Lab are not wired up yet. As we formalize the dating layer and event schedule, we&apos;ll
              add real sign‑up and consent flows and email anyone who has expressed interest here.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              I&apos;m Interested (Coming Soon)
            </button>
          </form>
        </section>

        {/* Link back to Labs overview when you build it */}
        <section className="text-center text-xs text-gray-400">
          <p>
            As Labs roll out, you&apos;ll be able to find an overview at{' '}
            <Link href="/labs" className="underline underline-offset-2 hover:text-gray-200">
              /labs
            </Link>{' '}
            tying all of these experiments together.
          </p>
        </section>
      </div>
    </div>
  )
}
