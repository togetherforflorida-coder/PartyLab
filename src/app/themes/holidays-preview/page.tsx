// src/app/themes/holidays-preview/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  CalendarHeart,
  Sparkles,
  Users,
  UtensilsCrossed,
  MonitorSmartphone,
} from 'lucide-react'

export default function HolidaysPreviewPage() {
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

        {/* Header / Preview framing */}
        <header className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-2xl bg-teal-600/80 flex items-center justify-center border border-teal-300/60 shadow-lg shadow-teal-500/40">
              <CalendarHeart className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-teal-200">
                Theme Preview • Holidays
              </p>
              <p className="text-xs text-gray-300">
                A sneak peek at how full PartyLab holiday themes will feel once they&apos;re paid and unlocked.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Holidays Theme Preview
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            This is a preview of what holiday themes will look like inside PartyLab. The paid versions will give you
            complete blueprints for holidays like New Year&apos;s, Valentine&apos;s, Easter, Pride, Halloween, Thanksgiving,
            and winter holidays—with decor, food, rituals, and options for faith‑centered, secular, and mixed‑belief
            gatherings.
          </p>
        </header>

        {/* Core idea */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-teal-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-teal-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Holidays for Different Households &amp; Belief Mixes
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            A full Holidays theme won&apos;t assume one &quot;right&quot; way to celebrate. Instead, it will offer:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              <strong>Secular options:</strong> focusing on season, color, food, and time together without specific
              religious content.
            </li>
            <li>
              <strong>Faith‑friendly options:</strong> gentle ways to include prayer, scriptures, or spiritual reflection
              if you choose.
            </li>
            <li>
              <strong>Mixed‑belief formats:</strong> rituals that respect multiple perspectives at one table.
            </li>
            <li>
              <strong>ND‑aware &amp; kid‑friendly tweaks:</strong> shorter segments, quieter corners, and flexible expectations.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            You choose which pieces fit your household; PartyLab provides blueprints and language so you&apos;re not making
            it up from scratch every year.
          </p>
        </section>

        {/* Activities & setups */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Activities & rituals */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-teal-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Users className="w-5 h-5 text-teal-200" />
              <h3 className="text-lg font-bold text-white">
                Traditions, Activities &amp; Gentle Rituals
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Full access will give you options for different holiday shapes:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Small‑table rituals (gratitude rounds, wishes, blessings, simple questions).</li>
              <li>Kid‑friendly activities (hunts, crafts, coloring, simple stories) tied to the day.</li>
              <li>ND‑aware alternatives for kids/adults who don&apos;t enjoy certain customs.</li>
              <li>Ideas for marking the day even if you&apos;re celebrating solo or long‑distance.</li>
            </ul>
            <p className="text-xs text-gray-400">
              We&apos;ll include options you can adapt for your own beliefs, cultural background, and energy level.
            </p>
          </div>

          {/* Food & rhythm */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-teal-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <UtensilsCrossed className="w-5 h-5 text-teal-200" />
              <h3 className="text-lg font-bold text-white">
                Seasonal Food, Treats &amp; Time Flow
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              The paid theme will suggest food and pacing appropriate to the holiday:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Brunch, lunch, or dinner styles depending on the day (like Easter morning vs evening).</li>
              <li>Simple crowd‑pleasers plus lighter or dietary‑friendly alternatives.</li>
              <li>How to time food, activity, and &quot;free play&quot; so people don&apos;t melt down.</li>
            </ul>
            <p className="text-xs text-gray-400">
              Some holidays will get special recipes; others will focus more on structure and low‑stress menus.
            </p>
          </div>
        </section>

        {/* Setups */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-teal-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <MonitorSmartphone className="w-5 h-5 text-teal-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Setups: Households, Friendsgiving‑Style, Virtual &amp; Solo
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            A full Holidays theme will include layouts and options for:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-1">
              <p className="font-semibold text-white">Household &amp; Family Gatherings</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Table setups that make kids feel included, not sidelined.</li>
                <li>Light scripts for toasts, blessings, or non‑religious &quot;why this day matters&quot; moments.</li>
                <li>Ideas for wrapping the evening gently instead of an abrupt crash.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Friends &amp; Chosen Family</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Potluck structures and who brings what.</li>
                <li>
                  Rituals that honor &quot;we chose each other&quot; (e.g., notes of appreciation, shared memories).
                </li>
                <li>Light boundaries for topics if some holidays can be fraught.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Virtual / Long‑Distance</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Shared scripts for remote toasts or reflections.</li>
                <li>Activity ideas that work over video (show‑and‑tell, scavenger hunts, crafts).</li>
                <li>How to keep calls time‑boxed so they feel special, not draining.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Solo &amp; Quiet Marking</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Rituals you can do alone (lighting a candle, letter‑writing, mini altars).</li>
                <li>Food and treat ideas for one person without tons of leftovers.</li>
                <li>Ways to blend in some rest, not just sadness or FOMO.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mini Sample: Easter at Home */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-teal-700/70 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-teal-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Mini Sample: Easter Morning at Home
            </h3>
          </div>
          <p className="text-sm text-gray-300">
            This is a **small example** of how an Easter‑style holiday morning could look in a full Holidays theme. The
            paid version will include more variations (secular, faith‑centered, multi‑age, solo) and printables—but
            here&apos;s a simple taste.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Vibe &amp; Setup</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Small household with kids, aiming for a gentle, not chaotic, Easter morning.</li>
                <li>
                  Simple spring‑colored touches: a runner or cloth, a small centerpiece (flowers, candles, or a bowl of
                  dyed eggs).
                </li>
                <li>
                  Optional: a short reading, reflection, or &quot;what are you grateful/hopeful for&quot; moment before
                  or after breakfast, tailored to your beliefs.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Featured Food Idea</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Simple Easter Brunch Board</strong> – mini pastries or toast, fruit, yogurt, boiled eggs
                  (dyed or plain), plus a small &quot;treat&quot; bowl.
                </li>
                <li>Arrange foods by color (pale yellows, greens, pinks, whites) for a low‑effort &quot;pretty&quot;.</li>
                <li>Offer at least one protein and one gentler option for sensitive stomachs.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Sample Activities (Non‑Religious)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Mini egg hunt indoors or in the yard, with a &quot;one egg at a time&quot; rule to slow the chaos.</li>
                <li>Coloring or sticker pages at the table for kids who finish eating early.</li>
                <li>Optional: &quot;spring wishes&quot; jar where each person adds one kind thing they hope happens.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Optional Faith‑Friendly Layer</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  A short reading (scripture, poem, or reflection) before or after the hunt, with one or two prompts like
                  &quot;what does new life mean to you?&quot;
                </li>
                <li>Keep it brief and gentle, with space for kids to respond simply or not at all.</li>
                <li>Option to tie it into gratitude or acts of kindness for the coming week.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-200">
            <p className="font-semibold text-white">Example Structure (Abbreviated)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Morning wake‑up: light music, table already lightly set with spring colors.</li>
              <li>10–15 min: quick check‑in or optional reading/gratitude moment.</li>
              <li>20–30 min: egg hunt (indoors/outdoors) with agreed‑upon rules and a clear end signal.</li>
              <li>20–30 min: brunch board at the table; kids can color or play quietly when they&apos;re done eating.</li>
              <li>10–15 min: tidy together and decide on one small thing to do later (walk, craft, call a relative).</li>
            </ul>
            <p className="text-[11px] text-gray-400">
              In the full theme, Easter would be one of many holiday examples, each with secular and faith‑friendly
              options, printable prompts, and pacing for different family sizes and energy levels.
            </p>
          </div>
        </section>

        {/* Preview CTA / link to signup */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-teal-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            What You&apos;ll Unlock in Full Holiday Themes
          </h3>
          <p className="text-sm text-gray-300">
            This page just previews the structure. Paid holiday themes will include:
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>Blueprints for major holidays across the year.</li>
            <li>Secular, faith‑friendly, and mixed‑belief options where appropriate.</li>
            <li>Food, activity, and ritual ideas with sensory‑aware tweaks.</li>
            <li>Printable materials and options for kits/custom items from the PartyLab shop.</li>
          </ul>
          <p className="text-sm text-gray-300">
            You can access these and other themes during early access as a founding member or trial subscriber.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>See Membership &amp; Early Access</span>
              <span>→</span>
            </Link>
            <Link
              href="/signup?plan=early-bird"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg shadow-pink-500/40"
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
