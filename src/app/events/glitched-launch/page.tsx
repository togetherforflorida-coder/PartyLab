// src/app/events/glitched-launch/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import {
  CalendarDays,
  MapPin,
  ArrowLeft,
  AlertTriangle,
  Ticket,
  Sparkles,
  Gamepad2,
  HelpCircle,
} from 'lucide-react'

export default function GlitchedLaunchPage() {
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

        {/* Hero */}
        <header className="bg-black/40 backdrop-blur rounded-3xl border border-purple-700/60 p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-purple-200 mb-1">
                Live Hosted Event • Mystery Dinner • Ticketed
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                Glitched Launch: Sabotage Mystery Dinner
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                A live, story‑driven mystery dinner that shows what PartyLab can do. The launch of a major platform goes
                sideways—and it wasn&apos;t an accident. Over the course of the evening, your job is to figure out who
                sabotaged it, why, and how.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-200">
            <span className="inline-flex items-center space-x-1">
              <CalendarDays className="w-3 h-3" />
              <span>Date &amp; time TBA • 2026</span>
            </span>
            <span className="inline-flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>Live online • Host your dinner at home while you play along</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-purple-900/70 border border-purple-500/60 text-[10px] uppercase tracking-[0.16em]">
              Mystery Dinner • Sabotage Story • PartyLab Showcase
            </span>
          </div>
        </header>

        {/* What it is */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-purple-800/60 p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Gamepad2 className="w-5 h-5 text-purple-300" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              What &quot;Glitched Launch&quot; Actually Is
            </h2>
          </div>
          <p className="text-sm sm:text-base text-gray-200">
            Glitched Launch is a live mystery dinner you can join from home (or anywhere you can gather a few people).
            Instead of a whodunit murder, this story is about a high‑stakes launch—a platform, product, or major online
            event—that&apos;s supposed to be perfect. The press is watching. Investors are watching. Users are waiting.
          </p>
          <p className="text-sm sm:text-base text-gray-200">
            As the night goes on, things break in ways that don&apos;t feel random. Someone—maybe more than one
            someone—has sabotaged the launch. Through character intros, glitch moments, and dropped clues, you&apos;ll
            have to decide:
          </p>
          <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
            <li>Who sabotaged the launch.</li>
            <li>What their real motive was.</li>
            <li>Which &quot;glitches&quot; were part of the plan and which were just noise.</li>
          </ul>
          <p className="text-xs text-gray-400">
            It&apos;s a fictional scenario, designed as a showcase for PartyLab&apos;s ability to run immersive,
            clue‑driven events—not a real company&apos;s disaster.
          </p>
        </section>

        {/* Ticketing & pricing */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-purple-700/60 p-6 sm:p-7 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Ticket className="w-5 h-5 text-emerald-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Tickets Are Per Guessing Seat, Not Per Eyeball
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Glitched Launch is built around **guesses**. Each ticket is tied to **one official guess** in the mystery.
            If your household or group is happy to agree on a single theory, you can buy one ticket and share that one
            guess together.
          </p>
          <p className="text-sm text-gray-200">
            If you want multiple independent guesses in the same home or friend group (so people can compete), you can
            purchase multiple tickets:
          </p>
          <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
            <li>1 ticket (1 official guess): <strong>$5</strong></li>
            <li>2–3 tickets (2–3 official guesses): planned group pricing around <strong>$4 per ticket</strong></li>
            <li>4+ tickets (4 or more official guesses): planned group pricing around <strong>$3 per ticket</strong></li>
          </ul>
          <p className="text-xs text-gray-400">
            Exact group pricing and checkout flow may shift as we lock in the ticketing platform—but the core idea is
            that each ticket = one official guess. Groups can save by agreeing on a shared theory, or buy multiple seats
            if everyone wants to be their own detective.
          </p>
          <p className="text-sm text-gray-200">
            Each ticket (each guess seat) includes:
          </p>
          <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
            <li>Access to the live hosted event (watch together with your group).</li>
            <li>A digital &quot;host&quot; section with tips on food, timing, and how to integrate it into a dinner.</li>
            <li>Story/character materials and instructions on how to submit that seat&apos;s final guess.</li>
          </ul>
          <button
            type="button"
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            View Ticket Options (Coming Soon)
          </button>
        </section>

        {/* How the live night works */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flow */}
          <div className="bg-black/40 backdrop-blur rounded-3xl border border-purple-800/60 p-6 sm:p-7 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              How the Live Night Will Flow
            </h3>
            <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
              <li>Before event: you get a setup packet and optional dinner planning suggestions.</li>
              <li>
                Act I (Live): meet the key characters, see the polished launch set‑up, and get a sense of what&apos;s
                supposed to happen.
              </li>
              <li>
                Act II (Live): glitches and weird behavior start stacking up. You&apos;ll be given specific moments and
                clues to discuss with your table or chat.
              </li>
              <li>
                Act III (Live): final clue drops and time to lock in each ticket&apos;s official guess via a simple
                form or link.
              </li>
              <li>
                Finale: the host walks everyone through the real chain of events and reveals who sabotaged the launch,
                and why.
              </li>
            </ul>
          </div>

          {/* Prizes & scoring */}
          <div className="bg-black/40 backdrop-blur rounded-3xl border border-purple-800/60 p-6 sm:p-7 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Prizes for the Best Detectives
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Tickets (seats) that correctly identify the saboteur—and possibly bonus details like motive or key
              misdirection—will be eligible for rewards, such as:
            </p>
            <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
              <li>Discounts or credits toward a future PartyLab event, theme, or mystery.</li>
              <li>Access to alternate endings, director&apos;s commentary, or additional epilogue scenes.</li>
              <li>
                Optional shout‑outs in a &quot;beta detective&quot; roll—we&apos;re testing the format and you helped
                prove it works (opt‑in only).
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              We&apos;ll publish prize details before ticket sales go live so you know exactly what&apos;s on the line.
              The main payoff, though, is bragging rights and a really good story.
            </p>
          </div>
        </section>

        {/* Tone & content safety */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-purple-900/60 p-6 sm:p-7 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <AlertTriangle className="w-5 h-5 text-amber-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Tone, Content, and Safety
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Glitched Launch is meant to be tense, twisty, and a little dramatic—but not horror or trauma‑heavy. You can:
          </p>
          <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
            <li>Run it at a PG‑13 level with colleagues or friends.</li>
            <li>Emphasize tech/corporate drama, not physical harm, if that fits your table best.</li>
            <li>Step back from the story if it stirs up too much workplace or project‑failure anxiety.</li>
          </ul>
          <p className="text-xs text-gray-400">
            We&apos;ll share content notes in advance—so you can decide if this is a good fit for your group and make
            tweaks if needed.
          </p>
        </section>

        {/* FAQ / quick notes */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-purple-800/60 p-6 sm:p-7 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <HelpCircle className="w-5 h-5 text-purple-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white">Quick Questions</h3>
          </div>
          <ul className="text-sm text-gray-200 space-y-2">
            <li>
              <span className="font-semibold">Do we have to agree on one guess?</span>{' '}
              <span>
                Only if you buy one ticket. One ticket = one official guess. If everyone wants their own theory in the
                running, you can buy multiple tickets for your group at a group rate.
              </span>
            </li>
            <li>
              <span className="font-semibold">Do I have to cook a full dinner?</span>{' '}
              <span>
                No. You can absolutely do this as snacks on the coffee table. The &quot;dinner&quot; angle is there if
                you want to lean into it.
              </span>
            </li>
            <li>
              <span className="font-semibold">Is this only for members?</span>{' '}
              <span>
                No. Glitched Launch will be open to anyone as a paid event. PartyLab members may see extra perks or
                discounts, but membership isn&apos;t required to play.
              </span>
            </li>
            <li>
              <span className="font-semibold">Can we play virtually with remote friends?</span>{' '}
              <span>
                Yes. We&apos;ll share guidance on how to coordinate guesses and discussion across video calls or
                group chats if you&apos;re not in the same room.
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}
