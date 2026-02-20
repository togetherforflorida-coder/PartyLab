// src/app/music-nightlife/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Music2,
  Headphones,
  Sparkles,
  Users,
  Shield,
  CalendarDays,
} from 'lucide-react'

export default function MusicNightlifeLabPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-fuchsia-950 via-purple-950 to-black py-10">
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
            <div className="w-9 h-9 rounded-2xl bg-fuchsia-600/80 flex items-center justify-center border border-fuchsia-300/60 shadow-lg shadow-fuchsia-500/40">
              <Music2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-fuchsia-200">
                PartyLab Labs
              </p>
              <p className="text-xs text-gray-300">
                Focused spaces where we prototype small‑scale nightlife for real people.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Music &amp; Nightlife Lab
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            The Music &amp; Nightlife Lab is about building cozy, queer‑/ND‑friendly alternatives to
            conventional nightlife—home‑scale DJ nights, listening parties, tiny dance floors, album release
            celebrations, pre‑ and post‑concert parties, and other ways to bring music home without needing a club.
          </p>
        </header>

        {/* What this lab is */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-fuchsia-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-fuchsia-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What the Music &amp; Nightlife Lab Focuses On
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            This Lab isn&apos;t about bottle service or 3 AM pulsing speakers. It&apos;s about:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>DJ‑style nights and playlists you can run in a living room or backyard.</li>
            <li>Listening parties that feel special—even if it&apos;s just you and a few friends.</li>
            <li>
              Pre‑concert hype nights and post‑concert decompression parties that extend the magic of live shows in a
              safer or more accessible space.
            </li>
            <li>Album release celebrations for artists you love (or your own projects), at home or online.</li>
          </ul>
          <p className="text-xs text-gray-400">
            The focus is on vibes, community, and story—not just &quot;get as loud and drunk as possible.&quot;
          </p>
        </section>

        {/* Example formats */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Listening & album parties */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-fuchsia-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Headphones className="w-5 h-5 text-fuchsia-200" />
              <h3 className="text-lg font-bold text-white">
                Listening Parties &amp; Album Release Nights
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Formats for album drops, re‑listening to old favorites, or celebrating your own creative releases:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Structured &quot;now playing&quot; listening parties with prompts and quiet rules.</li>
              <li>Album release rituals—lighting, visuals, snacks, and before/after reflection questions.</li>
              <li>
                Ways to host &quot;release nights&quot; for your own music, mixes, or podcasts without needing a venue.
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              Many of these formats can be hybrid: a few people in a room, a few on video, everyone sharing about
              lyrics, memories, or visuals in real time.
            </p>
          </div>

          {/* Pre-/post-concert & tiny dance floors */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-fuchsia-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Users className="w-5 h-5 text-fuchsia-200" />
              <h3 className="text-lg font-bold text-white">
                Pre‑Game, Afterglow &amp; Tiny Dance Floors
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Structures for when you do go out—or when you want the &quot;going out&quot; feeling without the chaos:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>
                Pre‑concert gatherings with themed drinks/snacks, outfit try‑ons, and &quot;get in the mood&quot;
                playlists.
              </li>
              <li>
                Post‑concert decompression: tea, quiet playlists, journaling prompts, and &quot;favorite moments&quot;
                share‑outs.
              </li>
              <li>
                Tiny dance floor blueprints—how to turn part of your living room or patio into a safe, silly, low‑stakes
                dance space.
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              These formats are especially aimed at folks who like music and movement but don&apos;t love big crowds,
              overstimulation, or unsafe environments.
            </p>
          </div>
        </section>

        {/* Safety, accessibility & boundaries */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-rose-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Shield className="w-5 h-5 text-rose-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Safety, Sensory Levels &amp; Boundaries
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Not everyone experiences music and nightlife the same way. The Music &amp; Nightlife Lab will:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Include &quot;volume and light&quot; guidance for each format (low, medium, high optional).</li>
            <li>
              Offer ND‑friendly tweaks like quiet corners, &quot;no touch without consent&quot; norms, and shorter
              time blocks.
            </li>
            <li>
              Share scripts for inviting people in (or asking someone to leave) that prioritize consent and safety.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            We can&apos;t control every environment or outcome, but we can design formats that start from the assumption
            that you deserve to feel safe, respected, and able to opt out.
          </p>
        </section>

        {/* Future events hook */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-fuchsia-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <CalendarDays className="w-5 h-5 text-fuchsia-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              How This Lab Connects to Hosted Events
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            As PartyLab&apos;s event side grows, the Music &amp; Nightlife Lab may plug into:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Live or streamed DJ sets designed to be followed at home.</li>
            <li>Hybrid album release nights for specific artists or communities.</li>
            <li>
              Themed &quot;Night In&quot; events around big cultural music moments (award shows, tours, festivals).
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            You&apos;ll see these show up on the Events page as they move from idea to real, ticketed or free
            experiences.
          </p>
        </section>

        {/* Interest / coming soon */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-fuchsia-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            Want to Be Part of Music &amp; Nightlife Lab Experiments?
          </h3>
          <p className="text-sm text-gray-300">
            If you&apos;re interested in home‑scale DJ nights, album release listening parties, pre‑/post‑concert
            gatherings, or safer alternatives to traditional nightlife, you can raise your hand here.
          </p>

          <form className="space-y-3 max-w-md text-sm text-gray-200">
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-fuchsia-600/40 focus:border-fuchsia-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                What are you most interested in?
              </label>
              <textarea
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-fuchsia-600/40 focus:border-fuchsia-400 focus:outline-none"
                rows={3}
                placeholder="Example: album listening parties; pre-/post-concert nights; tiny dance floors; ND-/queer-friendly alternatives to clubs; something else?"
              />
            </div>
            <p className="text-[11px] text-gray-400">
              Forms for this Lab aren&apos;t wired up yet; interest collection and follow‑up will be added as experiments
              move from idea to pilot.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:from-fuchsia-600 hover:to-purple-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              I&apos;m Interested (Coming Soon)
            </button>
          </form>
        </section>

        {/* Link back to Labs overview */}
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
