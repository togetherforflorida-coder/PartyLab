// src/app/study-lab/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpenCheck,
  Coffee,
  Users,
  Shield,
  Sparkles,
  Clock3,
} from 'lucide-react'

export default function StudyLabPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-slate-950 to-black py-10">
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
              <BookOpenCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-200">
                PartyLab Labs
              </p>
              <p className="text-xs text-gray-300">
                Focused spaces where we test tiny rituals, not just big parties.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Study Party Lab
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            The Study Party Lab is for students, remote workers, creatives, and ND brains who need help focusing without
            burning out. Think body‑doubling sessions, gentle accountability, and repeatable &quot;study party&quot;
            formats that feel more like support and less like punishment.
          </p>
        </header>

        {/* What this lab is */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What the Study Party Lab Focuses On
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            This Lab isn&apos;t about grinding 12 hours a day. It&apos;s about:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Small, time‑boxed focus blocks you can repeat.</li>
            <li>Body‑doubling formats (working &quot;together&quot;, even when you&apos;re apart).</li>
            <li>Rituals that wrap work or study in gentleness instead of shame.</li>
          </ul>
          <p className="text-xs text-gray-400">
            The goal is to give you structures that make it easier to start, easier to keep going (a little), and easier
            to stop without guilt when you&apos;re done for the day.
          </p>
        </section>

        {/* Example formats */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Solo & paired focus */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Clock3 className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">
                Solo &amp; Paired Focus Blocks
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Simple patterns you can run alone or with one friend/partner:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>25/5 or 40/10 style timers with clear &quot;what goes in this block&quot; prompts.</li>
              <li>Check‑in / check‑out scripts (&quot;What are you doing this block?&quot; / &quot;How did it go?&quot;).</li>
              <li>
                Tiny start‑rituals (tea, one song, lighting a candle) that tell your brain &quot;we&apos;re in focus
                mode now&quot; without feeling military.
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              Many formats will come with versions tailored for ADHD/ND brains, chronic illness, or depression/anxiety
              baselines.
            </p>
          </div>

          {/* Group / virtual study parties */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Users className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">Group &amp; Virtual Study Parties</h3>
            </div>
            <p className="text-sm text-gray-200">
              Formats you can run in a living room, on Discord, or over video:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Scheduled &quot;quiet together&quot; sessions with built‑in breaks and chat time.</li>
              <li>Project‑specific nights (paper writing, grading, coding, admin, creative work).</li>
              <li>
                Reward rituals that don&apos;t rely on junk food or all‑nighters (stretching, music, brief games, or
                reflective journaling).
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              These formats can be paired with PartyLab themes (e.g., &quot;cozy study night&quot; blueprint) or used on
              their own.
            </p>
          </div>
        </section>

        {/* Safety, capacity & expectations */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-rose-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Shield className="w-5 h-5 text-rose-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Safety, Capacity &amp; Not Treating You Like a Robot
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            The Study Party Lab explicitly acknowledges:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Your brain and body are not machines—even if school or work pretend they are.</li>
            <li>Some days, your &quot;win&quot; will be one small block. That&apos;s still a win.</li>
            <li>
              Shame is a terrible motivator. The Lab will avoid formats that rely on shaming, competition, or public
              call‑outs.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            We&apos;re not therapists, coaches, or disability services. But we can help you experiment with structures
            that respect your limits and still move you forward a little at a time.
          </p>
        </section>

        {/* Interest / coming soon */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-indigo-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            Want to Try Study Party Lab Experiments?
          </h3>
          <p className="text-sm text-gray-300">
            If you&apos;re interested in trying pilot formats—solo focus blocks, virtual study parties, gentle
            accountability partners—or you run a classroom, campus group, or coworking community that might benefit,
            you can raise your hand here.
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
                What are you hoping this Lab could help with?
              </label>
              <textarea
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-indigo-600/40 focus:border-indigo-400 focus:outline-none"
                rows={3}
                placeholder="Example: ADHD focus; college study; remote work; grading; admin; creative practice; something else?"
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
