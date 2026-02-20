// src/app/about/page.tsx
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  FlaskConical,
  Sparkles,
  Users,
  Shield,
  HeartHandshake,
  Globe2,
} from 'lucide-react'

export default function AboutPage() {
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
                About PartyLab
              </p>
              <p className="text-xs text-gray-300">
                The story, values, and real human behind this “party laboratory.”
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Why PartyLab Exists
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            PartyLab is a planning lab for parties, cozy nights in, and live experiences—built to make gatherings feel
            more joyful, more inclusive, and less stressful for people across the globe.
          </p>
        </header>

        {/* Who I am / founding story */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <HeartHandshake className="w-5 h-5 text-purple-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Hi, I&apos;m Logan.
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            I&apos;m a gay man who has always had a real passion for hosting—small events, theme nights, and parties
            with friends, family, and through a nonprofit I once ran. My favorite thing is seeing people relax, have a
            good time, and feel safe.
          </p>
          <p className="text-sm text-gray-200">
            Recently I was diagnosed as being slightly on the spectrum, which pushed me to learn more about
            neurodivergence and what it means to make spaces genuinely inclusive. PartyLab is my way of combining all of
            that: queer joy, ND‑aware design, themed nights, and real‑world hosting experience—while keeping things
            affordable enough that people can actually use it.
          </p>
          <p className="text-sm text-gray-200">
            I&apos;d love for PartyLab to grow big enough that I can focus on it with the time and care it deserves,
            but I don&apos;t want it to become something exclusive or out of reach. That&apos;s why you&apos;ll see low
            early‑access pricing and clear labeling instead of pressure.
          </p>
        </section>

        {/* What PartyLab actually is */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-purple-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What PartyLab Is (Right Now)
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            PartyLab is a “party laboratory” in three layers:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              <strong>Themes &amp; blueprints</strong> – structured plans for game nights, sports watch parties,
              holidays, birthdays, faith‑friendly evenings, kids &amp; family nights, and more. Each theme will include
              recipes, decor ideas, games, playlists, timing, and notes for different comfort levels.
            </li>
            <li>
              <strong>Labs</strong> – focused spaces experimenting with parts of life that keep coming up: dating,
              social media, cooking, study/focus, music &amp; nightlife. Labs are where things like safer dating ideas,
              ND‑friendly study parties, and home‑scale nightlife formats get tested.
            </li>
            <li>
              <strong>Hosted events</strong> – live or hybrid experiences like the Pulse 10 memorial, America 250 block
              party, or the Glitched Launch mystery dinner, that show what PartyLab can do at scale while still being
              accessible from home.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            Under the hood, there&apos;s also a small shop and custom‑orders pipeline (sublimation, 3D printing, laser
            engraving, candles, and more) so the digital blueprints can connect to physical items when that makes nights
            easier or more special.
          </p>
        </section>

        {/* Values & boundaries */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-800/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Shield className="w-5 h-5 text-amber-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What PartyLab Stands For (and What It Won&apos;t Do)
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            PartyLab is built around a few clear commitments:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              <strong>Queer‑inclusive by design:</strong> I&apos;m a gay man, and there will absolutely be LGBTQ+ events
              and themes. Those are clearly labeled so you can opt in or out, but they&apos;re not hidden.
            </li>
            <li>
              <strong>ND‑aware and sensory‑conscious:</strong> getting my own autism‑spectrum diagnosis pushed me to
              think harder about sound, lights, pacing, and &quot;opt‑out&quot; options. PartyLab will keep including
              ND‑friendly paths by default.
            </li>
            <li>
              <strong>Respect for all beliefs (and no forced doctrine):</strong> I personally no longer believe in a
              specific religious path, but I respect that others do. Religious &amp; spiritual content is opt‑in,
              gently worded, and never about pushing one view.
            </li>
            <li>
              <strong>No political parties or candidates:</strong> PartyLab may have pro‑democracy, anti‑authoritarian
              values (e.g., &quot;No Kings&quot; moments), but it will not endorse parties, candidates, or tell you how
              to vote.
            </li>
            <li>
              <strong>No perfection pressure:</strong> this isn&apos;t about having the fanciest house, the biggest
              budget, or the most intense social battery. It&apos;s about repeatable, humane nights that feel doable.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            If a section or theme doesn&apos;t fit your life, belief, or comfort level, you&apos;re encouraged to skip
            it. Everything is labeled so you can gravitate toward what supports you and avoid what doesn&apos;t.
          </p>
        </section>

        {/* How it’s meant to be used */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Users className="w-5 h-5 text-purple-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              How I Hope People Use PartyLab
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            I imagine PartyLab helping in lots of small, real ways, like:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              A family that wants a predictable game night or holiday ritual that doesn&apos;t leave anyone overwhelmed.
            </li>
            <li>
              A queer friend group who wants safer, cozier nightlife at home instead of always having to go out to clubs.
            </li>
            <li>
              Singles and early‑dating folks who want structure and safety‑aware ideas for meeting up and getting to know
              each other.
            </li>
            <li>
              People rebuilding after grief, burnout, or big life changes, who want gentle ways back into gathering.
            </li>
            <li>
              Anyone, anywhere, who wants &quot;I wish someone would just tell me how to host this&quot; turned into
              clear, flexible plans.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            PartyLab is ever‑growing and will keep evolving based on what real people actually use and ask for—not just
            what looks good in a marketing screenshot.
          </p>
        </section>

        {/* Global / future-looking */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-900/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Globe2 className="w-5 h-5 text-indigo-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              A Lab, Not a Finished Product
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            Right now PartyLab is in an early access phase. Payments are running in test mode while the structure, pages,
            and events are being built out. You&apos;ll see some themes and Labs with full preview pages and others marked
            &quot;coming soon.&quot; That&apos;s intentional.
          </p>
          <p className="text-sm text-gray-200">
            My hope is that over time, PartyLab becomes a trusted place people all over the world can come back to when
            they want to gather—a toolbox for joy and safe connection, not a pressure factory.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center space-y-3">
          <p className="text-sm text-gray-300">
            If PartyLab sounds like something you&apos;d like to be part of while it grows, you can explore themes or
            lock in early access pricing:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/themes"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>Browse Themes &amp; Previews</span>
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
