// src/app/social-media/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Share2,
  Smartphone,
  Shield,
  Clock3,
  Sparkles,
} from 'lucide-react'

export default function SocialMediaLabPage() {
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
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-200">
                PartyLab Labs
              </p>
              <p className="text-xs text-gray-300">
                Focused spaces where we test better ways to connect, online and off.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Social Media Lab
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            The Social Media Lab explores how to make being online feel more intentional, less draining, and more
            connected to real life. Think content nights, small group challenges, &quot;post together&quot; sessions,
            and boundaries that support your mental health—not hacks for going viral at any cost.
          </p>
        </header>

        {/* What this Lab is */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What the Social Media Lab Focuses On
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            This Lab isn&apos;t about turning you into an influencer. It&apos;s about experimenting with:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Ways to share that feel authentic and sustainable, not performative.</li>
            <li>Structures and rituals that make social media more &quot;on purpose&quot; and less &quot;by accident.&quot;</li>
            <li>
              Boundaries and formats that support neurodivergent brains, trauma survivors, caregivers, and anyone tired
              of the attention economy.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            You can absolutely use Lab formats to support your creative work or small business—but our starting point is
            quality of life, not follower counts.
          </p>
        </section>

        {/* Example experiments */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Content nights & post-together sessions */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Smartphone className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">
                Content Nights &amp; Post‑Together Sessions
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Structured blocks where you and maybe a friend (or a small group) sit down to:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Clear out drafts you&apos;ve wanted to post but been anxious about.</li>
              <li>Write captions, choose photos, and decide what actually feels okay to share.</li>
              <li>Batch &quot;life admin&quot; content (thank‑you posts, updates, small wins) instead of doom‑scrolling.</li>
            </ul>
            <p className="text-xs text-gray-400">
              We&apos;ll test blueprints for solo nights, pairs, and small groups—some quiet, some more like a little
              co‑working party with snacks.
            </p>
          </div>

          {/* Challenges & boundaries */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Clock3 className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">Challenges, Breaks &amp; Boundaries</h3>
            </div>
            <p className="text-sm text-gray-200">
              Not every experiment is about posting more. Some will be about:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Planned breaks or slow‑downs that don&apos;t feel like failure.</li>
              <li>Daily/weekly &quot;checkpoints&quot; that replace endless scrolling with one intentional visit.</li>
              <li>Shared agreements with friends (&quot;we don&apos;t comment like this&quot;, &quot;we don&apos;t tag without consent&quot;).</li>
            </ul>
            <p className="text-xs text-gray-400">
              The Lab will experiment with formats you can copy/paste or adapt with your own comfort levels and platforms.
            </p>
          </div>
        </section>

        {/* Safety & mental health */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-rose-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Shield className="w-5 h-5 text-rose-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Safety, Harassment &amp; Mental Health Awareness
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Social media isn&apos;t neutral. It can amplify harassment, stalking, targeted hate, and burnout. The Lab
            will include:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              Education‑style content about blocking, reporting, privacy tools, and basic operational security (without
              promising perfect safety).
            </li>
            <li>
              Scripts and formats for setting boundaries with followers, friends, or family (online and offline).
            </li>
            <li>Experiments in &quot;soft&quot; sharing vs public posting—Finstas, close friends lists, private circles.</li>
          </ul>
          <p className="text-xs text-gray-400">
            We&apos;re not your therapist, lawyer, or platform rep. But we can help you name patterns, see options, and
            build small practices that are kinder to your nervous system.
          </p>
        </section>

        {/* Interest / coming soon */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-indigo-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            Want to Be Part of Social Media Lab Experiments?
          </h3>
          <p className="text-sm text-gray-300">
            If you&apos;re interested in trying content nights, posting‑together sessions, or boundary experiments—or
            you have stories you&apos;d like us to learn from—you can raise your hand here. This doesn&apos;t put your
            handle on blast; it just tells us who might want to participate as pilots roll out.
          </p>

          <form className="space-y-3 max-w-md text-sm text-gray-200">
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-indigo-600/40 focus:border-indigo-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                What would you like help or structure with?
              </label>
              <textarea
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-indigo-600/40 focus:border-indigo-400 focus:outline-none"
                rows={3}
                placeholder="Example: posting without spiraling; taking breaks; running a small creative account; handling DMs; something else?"
              />
            </div>
            <p className="text-[11px] text-gray-400">
              Forms for this Lab aren&apos;t wired up yet; interest collection and follow‑up will be added as experiments
              move from idea to pilot.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:from-indigo-600 hover:to-purple-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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
