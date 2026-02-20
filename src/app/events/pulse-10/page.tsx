// src/app/events/pulse-10/page.tsx
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  CalendarDays,
  MapPin,
  ArrowLeft,
  AlertTriangle,
  Heart,
  Mic2,
  Palette,
  Sparkles,
} from 'lucide-react'

export default function PulseTenPage() {
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

        {/* Hero */}
        <header className="bg-black/40 backdrop-blur rounded-3xl border border-purple-700/50 p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-purple-200 mb-1">
                Free Virtual Gathering • Memorial &amp; Celebration
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                Pulse 10: Love &amp; Light Virtual Memorial
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                A free virtual evening of remembrance, reflection, and queer joy on the 10‑year mark of the Pulse
                tragedy—held online so anyone who wishes to can join from wherever they feel safe.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-200">
            <span className="inline-flex items-center space-x-1">
              <CalendarDays className="w-3 h-3" />
              <span>June 12, 2026</span>
            </span>
            <span className="inline-flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>Online • Free • No PartyLab membership required</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-purple-900/60 border border-purple-500/60 text-[10px] uppercase tracking-[0.16em]">
              Memorial • Reflection • Queer Community
            </span>
          </div>
        </header>

        {/* High-level purpose and tone */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-purple-800/50 p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">What This Gathering Is</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-200">
            Pulse 10: Love &amp; Light is a free virtual observance to honor those we lost at Pulse, to hold space for
            survivors and families, and to reflect on how far our communities have come—and how far we still have to go.
          </p>
          <p className="text-sm sm:text-base text-gray-200">
            This isn&apos;t a &quot;party&quot; in the usual sense. It weaves together:
            a memorial, a gentle celebration of queer art and joy, and quiet spaces for those who need something softer.
            You can join from home, with a partner, with friends, with chosen family, or on your own.
          </p>
          <p className="text-xs text-gray-400">
            Participation is free and open to anyone. You do not need a PartyLab membership to attend.
          </p>
        </section>

        {/* How the evening is structured */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flow */}
          <div className="bg-black/40 backdrop-blur rounded-3xl border border-purple-800/50 p-6 sm:p-7 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              How the Evening Will Flow
            </h3>
            <p className="text-sm text-gray-200">
              The exact run‑of‑show is still in development, but the night will likely include:
            </p>
            <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
              <li>Opening welcome, grounding, and acknowledgment of why we&apos;re gathering.</li>
              <li>A memorial segment with candles/light, names, and moments of shared silence.</li>
              <li>
                A celebration segment honoring queer artists, musicians, and other talents—performed or shared in a
                respectful, non‑club, non‑exploitative way.
              </li>
              <li>
                Designated quiet spaces and lower‑stimulation options for those who want to observe without being in a
                louder main flow.
              </li>
              <li>
                A moderated &quot;Wall of Light&quot; where people can submit messages, art, or short reflections to be
                shared (with review to keep the space safe).
              </li>
              <li>Closing ritual, thanks, and resources for further support, action, and remembrance.</li>
            </ul>
          </div>

          {/* What you receive / why RSVP */}
          <div className="bg-black/40 backdrop-blur rounded-3xl border border-purple-800/50 p-6 sm:p-7 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Why Get a Free Ticket / RSVP
            </h3>
            <p className="text-sm text-gray-200">
              RSVP is free, and helps us:
            </p>
            <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
              <li>Share the exact link(s) and time(s) for the live portions of the evening.</li>
              <li>
                Send you a digital guide for how to set up a quiet space, candles, or an at‑home altar if you wish.
              </li>
              <li>Share any content warnings, accessibility details, and updates before the night of.</li>
              <li>
                Let you know about ways to contribute art, music, or words; volunteer to help hold space; or propose
                readings/songs.
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              You&apos;re not committing to being on camera or contributing anything. RSVP simply ensures you get
              information and access details in a coordinated, private way.
            </p>
          </div>
        </section>

        {/* Accessibility & Emotional Safety */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-rose-700/50 p-6 sm:p-7 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <AlertTriangle className="w-5 h-5 text-rose-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Accessibility, Safety &amp; Moderation
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Content will reference the Pulse shooting, queer and Latinx community grief, and loss. Some people may find
            this deeply activating. You are always invited to:
          </p>
          <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
            <li>Step away from audio/video or take breaks as needed.</li>
            <li>Stay in lower‑stimulation listening spaces if those are offered.</li>
            <li>Participate silently, or only in the quieter, memorial‑focused portions.</li>
          </ul>
          <p className="text-sm text-gray-200">
            The &quot;Wall of Light&quot; where messages, art, and reflections are shared will be moderated. Submissions
            will be reviewed before being shown publicly to reduce the chance of hateful or harmful content showing up
            in a vulnerable space.
          </p>
          <p className="text-xs text-gray-400">
            This observance is not therapy and is not a replacement for mental health support. We will share suggestions
            for before/after care and link to support resources where possible.
          </p>
        </section>

        {/* RSVP CTA (Get Free Tickets) */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-purple-700/50 p-6 sm:p-7 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Heart className="w-5 h-5 text-pink-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Get Free Tickets / RSVP for Pulse 10
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            RSVP is free and helps us send you the event link, schedule, and any updated details about how the evening
            will be structured. You&apos;ll only receive emails about Pulse 10 and closely related memorial experiences.
          </p>

          {/* Placeholder form – wiring can be added later */}
          <form className="space-y-3 max-w-md">
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Email address
              </label>
              <input
                type="email"
                className="w-full bg-black/50 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none text-sm"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Get Free Ticket / RSVP (Coming Soon)
            </button>
            <p className="text-[11px] text-gray-400">
              This form is a placeholder for now—RSVP and ticketing will be wired in as we finalize the format and
              hosting platform. You won&apos;t be charged anything for attending.
            </p>
          </form>
        </section>

        {/* Contribute / speak / art / talent CTA */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-purple-800/50 p-6 sm:p-7 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Mic2 className="w-5 h-5 text-purple-300" />
            <Palette className="w-5 h-5 text-pink-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Offer to Speak, Share Art, or Perform
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            We&apos;re hoping to include voices and work from people who are directly touched by Pulse and from the
            broader LGBTQ+ community: survivors, families, community organizers, artists, musicians, poets, clergy, and
            more.
          </p>
          <p className="text-sm text-gray-200">
            If you&apos;d like to speak, share a piece of art, perform a song/poem, help hold quiet space, or contribute
            in another way, you can express interest below. Sharing interest does not guarantee a speaking slot, but it
            helps us understand who wants to be involved and how.
          </p>

          {/* Placeholder contributor form */}
          <form className="space-y-3 max-w-md">
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Name (how you&apos;d like us to refer to you)
              </label>
              <input
                type="text"
                className="w-full bg-black/50 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none text-sm"
                placeholder="Name or handle"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-black/50 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                How would you like to contribute?
              </label>
              <textarea
                className="w-full bg-black/50 text-gray-100 px-4 py-2.5 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none text-sm"
                rows={3}
                placeholder="Example: share a song; read a poem; show visual art; speak for a few minutes; help moderate the wall; etc."
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-white/10 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              Submit Interest to Contribute (Coming Soon)
            </button>
            <p className="text-[11px] text-gray-400">
              These forms are not yet active. As we solidify the hosting and tech setup, we&apos;ll share a live
              intake form for contributors and confirm who can be included in the program.
            </p>
          </form>
        </section>

        {/* Context / disclaimer */}
        <section className="bg-black/50 backdrop-blur rounded-3xl border border-purple-800/40 p-5 sm:p-6 space-y-2">
          <p className="text-[11px] text-gray-400">
            This gathering is inspired by the Pulse community and wider LGBTQ+ resilience. PartyLab is not affiliated
            with, nor a substitute for, official Pulse Foundation or memorial organizations. We encourage you to also
            follow and support official efforts and memorials.
          </p>
          <p className="text-[11px] text-gray-400">
            As details solidify, we may share ways this experience can uplift or direct attention toward queer refuge,
            sanctuary, or memorial‑aligned projects. There is no cost to attend; if optional donations are introduced,
            we&apos;ll be transparent about where they go.
          </p>
        </section>
      </div>
    </div>
  )
}
