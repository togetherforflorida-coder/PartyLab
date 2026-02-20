// src/app/events/america-250/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import {
  CalendarDays,
  MapPin,
  ArrowLeft,
  Sparkles,
  Flag,
  AlertTriangle,
  Ticket,
  Mic2,
} from 'lucide-react'

export default function America250Page() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-slate-950 to-black py-10">
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
        <header className="bg-black/40 backdrop-blur rounded-3xl border border-blue-700/60 p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-blue-200 mb-1">
                Ticketed Event • Virtual Block Party • $5
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                America 250: Virtual Block Party
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                A $5 online‑plus‑at‑home block party to mark 250 years of the American experiment—celebrating neighbors,
                music, and food, while making a joyful, democracy‑affirming &quot;No Kings&quot; statement against rising
                authoritarianism.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-200">
            <span className="inline-flex items-center space-x-1">
              <CalendarDays className="w-3 h-3" />
              <span>July 4, 2026</span>
            </span>
            <span className="inline-flex items-center space-x-1">
              <MapPin className="w-3 h-3" />
              <span>Online &amp; At‑Home • Join from your porch, living room, or neighborhood</span>
            </span>
            <span className="px-2 py-0.5 rounded-full bg-blue-900/80 border border-blue-500/60 text-[10px] uppercase tracking-[0.16em]">
              Celebration • Reflection • No Kings
            </span>
          </div>
        </header>

        {/* What it is */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-blue-800/60 p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">What This Block Party Is</h2>
          </div>
          <p className="text-sm sm:text-base text-gray-200">
            America 250: Virtual Block Party is a one‑night experience for people who love the idea of a July 4th
            neighborhood gathering—but want it to feel more like a celebration of democracy and community than a
            shout‑fest or culture war.
          </p>
          <p className="text-sm sm:text-base text-gray-200">
            We&apos;ll blend music, food prompts, at‑home activities, and simple rituals to:
          </p>
          <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
            <li>Honor 250 years of a messy, imperfect, evolving democratic experiment.</li>
            <li>Make some joyful noise against the idea of &quot;kings&quot; or strongmen in a modern democracy.</li>
            <li>Hold a moment of respect for people who put their lives on the line—soldiers, civil rights figures, and everyday defenders of rights.</li>
          </ul>
          <p className="text-xs text-gray-400">
            This event is open to a wide range of beliefs. PartyLab doesn&apos;t endorse specific politicians or
            parties—we do explicitly stand against authoritarianism, and this night reflects that.
          </p>
        </section>

        {/* Ticketing & what $5 covers */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-blue-700/60 p-6 sm:p-7 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Ticket className="w-5 h-5 text-emerald-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Tickets Are $5 Per Household
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Your ticket is one per household (or small group) and unlocks:
          </p>
          <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
            <li>Access to the live virtual program segments (opening, &quot;No Kings&quot; moment, hosted prompts).</li>
            <li>
              A digital block‑party kit with food suggestions, playlists, decor ideas, activity prompts, and printable
              signs/posters.
            </li>
            <li>
              Optional &quot;stations&quot; you can run at home—games, trivia, bracket voting, or quiet reflection
              corners.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            The small ticket fee helps offset speaker honorariums, tech, and production. As plans mature, we may share
            how a portion of proceeds can uplift democracy‑supporting or community organizations—details will be clear
            before you pay.
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-red-500 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold hover:from-blue-600 hover:to-red-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            Get Ticket – $5 (Coming Soon)
          </button>
        </section>

        {/* How the night is structured */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flow */}
          <div className="bg-black/40 backdrop-blur rounded-3xl border border-blue-800/60 p-6 sm:p-7 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              How the Night Will Flow
            </h3>
            <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
              <li>Opening segment grounding the night in the idea of a shared experiment in self‑government.</li>
              <li>Guided prompts you can follow with your own group (or solo) for food, music, and conversation.</li>
              <li>
                A coordinated &quot;No Kings&quot; moment—holding up signs, banners, or lights to say we don&apos;t
                want strongman rule, no matter who&apos;s in office.
              </li>
              <li>
                A short memorial segment acknowledging soldiers, civil rights leaders, and everyday people who defended
                or expanded freedom.
              </li>
              <li>
                Optional &quot;afterglow&quot; activities—block‑party games, trivia, or bracket voting for fun categories.
              </li>
            </ul>
          </div>

          {/* Beliefs / politics stance */}
          <div className="bg-black/40 backdrop-blur rounded-3xl border border-blue-800/60 p-6 sm:p-7 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Flag className="w-5 h-5 text-blue-300" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Beliefs, Politics &amp; Where We Draw the Line
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              PartyLab aims to respect that people hold a range of beliefs and political opinions. This event:
            </p>
            <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
              <li>Does not endorse specific candidates or parties.</li>
              <li>Does affirm that democracy, free and fair elections, and civil rights matter.</li>
              <li>Does oppose the rise of authoritarianism, strongman rule, and dismantling of basic rights.</li>
            </ul>
            <p className="text-xs text-gray-400">
              If you&apos;re looking for a space that can hold civic joy, disagreement, and critical love for the
              country without turning into a campaign rally, that&apos;s the vibe we&apos;re aiming for.
            </p>
          </div>
        </section>

        {/* Accessibility / safety */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-blue-900/60 p-6 sm:p-7 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <AlertTriangle className="w-5 h-5 text-amber-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Accessibility &amp; Emotional Safety
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            While this event is celebratory, it also has reflective and memorial elements. You can:
          </p>
          <ul className="text-sm text-gray-200 space-y-1 list-disc list-inside">
            <li>Engage only with the parts that feel right for you and your group.</li>
            <li>Keep your gathering alcohol‑free or family‑friendly if desired—scripts will support that.</li>
            <li>Step away from the live portions if any segment feels too intense or political.</li>
          </ul>
          <p className="text-xs text-gray-400">
            We&apos;ll share a clear outline ahead of time so you can plan what parts to join and how to adapt them for
            your own context.
          </p>
        </section>

        {/* Optional: host / speak / local node interest */}
        <section className="bg-black/40 backdrop-blur rounded-3xl border border-blue-800/60 p-6 sm:p-7 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Mic2 className="w-5 h-5 text-blue-300" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Want to Help Host, Speak, or Anchor a Local Node?
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            As plans develop, we may invite a small number of speakers or &quot;node hosts&quot;—people who help anchor
            parts of the night, share short reflections, or run parallel gatherings in their own communities.
          </p>
          <p className="text-sm text-gray-200">
            If that sounds like you, you can share your interest below. Filling this out doesn&apos;t guarantee a
            speaking slot, but it lets us know who might want to be involved.
          </p>

          {/* Placeholder interest form */}
          <form className="space-y-3 max-w-md">
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-black/50 text-gray-100 px-4 py-2.5 rounded-lg border border-blue-600/40 focus:border-blue-400 focus:outline-none text-sm"
                placeholder="Name or handle"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-black/50 text-gray-100 px-4 py-2.5 rounded-lg border border-blue-600/40 focus:border-blue-400 focus:outline-none text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                How would you like to be involved?
              </label>
              <textarea
                className="w-full bg-black/50 text-gray-100 px-4 py-2.5 rounded-lg border border-blue-600/40 focus:border-blue-400 focus:outline-none text-sm"
                rows={3}
                placeholder="Example: host a small local gathering; speak briefly; help lead a game; share a song or reading; etc."
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-white/10 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              Submit Host/Speaker Interest (Coming Soon)
            </button>
            <p className="text-[11px] text-gray-400">
              As we refine the format and platforms used, we&apos;ll follow up selectively with people whose ideas and
              capacity match specific needs for the night.
            </p>
          </form>
        </section>

        {/* Context / disclaimer */}
        <section className="bg-black/50 backdrop-blur rounded-3xl border border-blue-900/60 p-5 sm:p-6 space-y-2">
          <p className="text-[11px] text-gray-400">
            This experience is created by PartyLab as a civic‑minded, community‑oriented event. It is not an official
            government, party, or campaign event. We won&apos;t tell you who to vote for—we will encourage you to want
            a country where voting, rights, and accountability still matter.
          </p>
          <p className="text-[11px] text-gray-400">
            As ticketing, speakers, and any donation components are finalized, we&apos;ll publish clear information
            about where your $5 goes and how the event is structured.
          </p>
        </section>
      </div>
    </div>
  )
}
