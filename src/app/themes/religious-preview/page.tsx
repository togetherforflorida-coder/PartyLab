// src/app/themes/religious-preview/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Sparkles,
  Stars,
  Users,
  BookOpen,
  MonitorSmartphone,
} from 'lucide-react'

export default function ReligiousSpiritualPreviewPage() {
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
            <div className="w-9 h-9 rounded-2xl bg-violet-600/80 flex items-center justify-center border border-violet-300/60 shadow-lg shadow-violet-500/40">
              <Stars className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-violet-200">
                Theme Preview • Religious &amp; Spiritual
              </p>
              <p className="text-xs text-gray-300">
                A sneak peek at how spiritual and faith‑friendly themes can feel inside PartyLab.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Religious &amp; Spiritual Theme Preview
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            This is a preview of what religious/spiritual themes could look like in PartyLab. The paid versions will
            offer gentle, opt‑in structures for evenings of reflection, prayer, meditation, or story—designed to work
            across different traditions or for mixed‑belief households who still want something meaningful together.
          </p>
        </header>

        {/* Core idea: gentle, optional, mixed-belief-aware */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-violet-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-violet-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Gentle Structures, Not Heavy Agendas
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            A full Religious &amp; Spiritual theme in PartyLab is not about telling you what to believe. It&apos;s about
            giving you:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              Light frameworks for evenings that include prayer, scripture, readings, or meditation if you want them.
            </li>
            <li>
              Options for spiritual but not religious nights—reflection, gratitude, intention‑setting, or nature‑based
              rituals.
            </li>
            <li>
              Mixed‑belief friendly formats where people can participate at their comfort level without pressure.
            </li>
            <li>
              ND‑aware pacing and quiet corners so &quot;meaningful&quot; doesn&apos;t have to mean overstimulating.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            You decide which tradition(s) or sources you draw from; PartyLab offers timing, prompts, and flow.
          </p>
        </section>

        {/* Readings, sharing, prayer/meditation */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Readings & reflections */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-violet-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <BookOpen className="w-5 h-5 text-violet-200" />
              <h3 className="text-lg font-bold text-white">
                Readings, Stories &amp; Reflection Prompts
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Full access will suggest structures for:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Short readings (scripture, poetry, sacred texts, or affirmations) with simple prompts.</li>
              <li>Round‑robin sharing with &quot;pass&quot; options so no one is forced to speak.</li>
              <li>Printable or on‑screen prompts for gratitude, hope, healing, or grounding.</li>
            </ul>
            <p className="text-xs text-gray-400">
              We&apos;ll avoid heavy, confrontational formats and lean into &quot;soft&quot; evenings that can be
              layered onto other themes (like dinner or game night) if you prefer.
            </p>
          </div>

          {/* Prayer / meditation / ritual */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-violet-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Stars className="w-5 h-5 text-violet-200" />
              <h3 className="text-lg font-bold text-white">
                Prayer, Meditation &amp; Light‑Based Rituals
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              The paid theme will include options for quiet, light‑centered practices, such as:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Candle‑lighting moments with short, adaptable language.</li>
              <li>Guided breathing or simple meditations suitable for beginners.</li>
              <li>Ways to honor loved ones, mark grief, or set intentions without heavy ceremony.</li>
            </ul>
            <p className="text-xs text-gray-400">
              If you follow a specific faith tradition, you can swap in your own prayers or rituals while keeping the
              PartyLab structure.
            </p>
          </div>
        </section>

        {/* Setups: home, small groups, online, solo */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-violet-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <MonitorSmartphone className="w-5 h-5 text-violet-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Setups: Home Altars, Small Groups, Online &amp; Solo
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            A full Religious &amp; Spiritual theme will account for different settings:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-1">
              <p className="font-semibold text-white">Home &quot;Little Altar&quot; Evenings</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Small, safe candle setups (or LED alternatives) on a table or shelf.</li>
                <li>Guides for what to place there (photos, objects, notes) based on your tradition.</li>
                <li>How to open and close the space so it feels contained and safe.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Small Groups / Study Nights</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Light discussion formats with clearly shared expectations.</li>
                <li>Ideas for reading together, journaling quietly, then sharing (or not).</li>
                <li>Ways to welcome people of varying belief levels without pressure.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Online Circles</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Camera‑optional circles with clear instructions and length.</li>
                <li>Shared readings/prompts on screen or in chat.</li>
                <li>Closing rituals that work across time zones and tech comfort levels.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Solo Rituals</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Simple one‑person practices that can be repeated weekly or monthly.</li>
                <li>Journaling prompts and &quot;one candle&quot; rituals for quiet nights.</li>
                <li>Optional integration with therapy, spiritual direction, or community support.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mini Sample: Light & Reflection Evening */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-violet-700/70 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-violet-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Mini Sample: Light &amp; Reflection Evening
            </h3>
          </div>
          <p className="text-sm text-gray-300">
            This is a **small example** of a simple Religious/Spiritual night that could work for many traditions or for
            &quot;spiritual but not religious&quot; folks. The paid version would offer more specific variants (by
            tradition, season, or holiday), but here&apos;s a neutral &quot;Light &amp; Reflection&quot; structure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Vibe &amp; Setup</p>
              <ul className="list-disc list-inside space-y-1">
                <li>1–6 people, quiet evening at home around a small table or coffee table.</li>
                <li>
                  Center the table with a candle (or LED candle), a small cloth, and a few meaningful objects (stones,
                  photos, symbols from your path).
                </li>
                <li>Soft background music or silence; phones on silent and placed away from the table.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Simple Food &amp; Drink (Optional)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Light, simple snacks (fruit, nuts, crackers, tea biscuits) to avoid heavy digestion while reflecting.
                </li>
                <li>Warm drinks (herbal tea, cocoa) or water with lemon; no alcohol for this example.</li>
                <li>Option: fast from snacks entirely and share a small bite at the end as a closing act.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-200">
            <p className="font-semibold text-white">Example Flow (Abbreviated)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>1. Opening (5–10 min)</strong> – One person (or each person in turn) lights the candle and says a
                short line. Examples:
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>&quot;We&apos;re marking this moment together.&quot;</li>
                  <li>&quot;May this light remind us of hope / love / guidance.&quot;</li>
                  <li>Or a brief prayer or verse from your tradition.</li>
                </ul>
              </li>
              <li>
                <strong>2. Reading or Prompt (5–10 min)</strong> – Read a short text (scripture, poem, reflection, or
                affirmation) aloud. Then ask 1–2 questions, for example:
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>&quot;What word or phrase stood out to you?&quot;</li>
                  <li>&quot;What in your life does this make you think of?&quot;</li>
                </ul>
                Everyone can share, or pass.
              </li>
              <li>
                <strong>3. Quiet Time (5–10 min)</strong> – Sit together in silence or with very soft music. Options:
                eyes open, eyes closed, journaling quietly, or drawing.
              </li>
              <li>
                <strong>4. Optional Sharing (10–15 min)</strong> – Each person may share one thing they noticed, felt, or
                want to remember. It&apos;s okay to say &quot;I&apos;m not sure yet.&quot;
              </li>
              <li>
                <strong>5. Closing (5–10 min)</strong> – Blow out the candle one at a time (or together) with a short
                closing line, such as:
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>&quot;May we carry what we need from this night and leave the rest.&quot;</li>
                  <li>Or a closing prayer/verse from your tradition.</li>
                </ul>
              </li>
            </ul>
            <p className="text-[11px] text-gray-400">
              In the full theme, this &quot;Light &amp; Reflection&quot; structure would be adapted for different
              holidays and traditions (e.g., Advent, Ramadan evenings, Shabbat prep, Samhain, memorial nights), each with
              more specific language and options. Content is not a substitute for pastoral care, therapy, or crisis
              support.
            </p>
          </div>
        </section>

        {/* Preview CTA / link to signup */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-violet-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            What You&apos;ll Unlock in Full Religious &amp; Spiritual Themes
          </h3>
          <p className="text-sm text-gray-300">
            This page just previews the structure. Paid spiritual/faith‑friendly themes will include:
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>Blueprints for gentle evenings of reflection, prayer, or meditation.</li>
            <li>Mixed‑belief‑aware formats and scripts you can customize for your path.</li>
            <li>Ideas for integrating food, light, and story into your practice.</li>
            <li>Printable prompts and, over time, options for kits/custom items from the PartyLab shop.</li>
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
