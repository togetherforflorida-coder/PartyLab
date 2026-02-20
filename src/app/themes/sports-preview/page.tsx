// src/app/themes/sports-preview/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Trophy,
  Sparkles,
  Users,
  ClipboardList,
  UtensilsCrossed,
  MonitorSmartphone,
} from 'lucide-react'

export default function SportsPreviewPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-black py-10">
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
            <div className="w-9 h-9 rounded-2xl bg-emerald-600/80 flex items-center justify-center border border-emerald-300/60 shadow-lg shadow-emerald-500/40">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-emerald-200">
                Theme Preview • Sports Parties
              </p>
              <p className="text-xs text-gray-300">
                A sneak peek at how full PartyLab sports themes will feel once they&apos;re paid and unlocked.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Sports Party Theme Preview
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            This is a preview of what full Sports Party themes will look like inside PartyLab. The paid versions will
            give you complete blueprints for game days, finals, drafts, fantasy leagues, and tournament runs—with decor,
            brackets, activities, food, drinks, and optional kits to support your favorite teams and seasons.
          </p>
        </header>

        {/* Core idea: fantasy, drafts, game activities */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-emerald-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Not Just Watching: Fantasy, Drafts &amp; Game Activities
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            A full sports theme in PartyLab will go beyond &quot;turn on the game&quot; and help you:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Run simple fantasy leagues or mini‑brackets with friends and family.</li>
            <li>Host draft nights with structured picks, snacks, and some light ceremony.</li>
            <li>Layer in game‑time activities (squares, bingo, prediction cards, prop bets without real money).</li>
            <li>Give non‑sports‑obsessed people something fun to do while the superfans lock in.</li>
          </ul>
          <p className="text-xs text-gray-400">
            The goal is to make game days feel like events everyone can engage with, not just background noise for the
            loudest fan in the room.
          </p>
        </section>

        {/* Fantasy, drafts, brackets */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fantasy & prop-style games */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <ClipboardList className="w-5 h-5 text-emerald-200" />
              <h3 className="text-lg font-bold text-white">
                Fantasy, Brackets &amp; Low‑Math Prediction Games
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Full access will give you templates and rules for:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Mini fantasy leagues that run for a tournament, a weekend, or a season.</li>
              <li>Printable or digital brackets with simple scoring and tiebreakers.</li>
              <li>Non‑gambling &quot;prop&quot; style predictions (first to score, MVP, jersey color, etc.).</li>
              <li>Kids/family‑friendly versions with more visuals and fewer stats.</li>
            </ul>
            <p className="text-xs text-gray-400">
              We&apos;ll include both &quot;just for fun&quot; versions and more serious tracking options for stat nerds.
            </p>
          </div>

          {/* Food & atmosphere */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <UtensilsCrossed className="w-5 h-5 text-emerald-200" />
              <h3 className="text-lg font-bold text-white">
                Tailgate‑Style Food, Drinks &amp; Atmosphere
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              The paid theme will suggest food and drink spreads that match the sport, level of effort, and team colors:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Build‑your‑own bar (nachos, sliders, subs, wings, or veggie trays).</li>
              <li>Color‑blocked snacks or desserts to match team/tournament colors.</li>
              <li>
                <strong>Non‑alcoholic</strong> drink stations (sports drinks, sodas, iced tea, mocktails) with fun names.
              </li>
              <li>
                Optional <strong>alcoholic</strong> suggestions (where legal), with clear encouragement to also feature
                great NA options.
              </li>
            </ul>
            <p className="text-[11px] text-gray-400">
              Alcohol disclaimer: Any alcoholic drink suggestions in PartyLab content are for locations where drinking is
              legal and only for adults of legal drinking age in their country/region. You are responsible for following
              your local laws, drinking responsibly, and never serving alcohol to minors.
            </p>
          </div>
        </section>

        {/* Setups */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-emerald-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <MonitorSmartphone className="w-5 h-5 text-emerald-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Setups: House Party, Family Night, Bar/Community, Online
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            A full Sports Party theme will offer guidance for different contexts:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-1">
              <p className="font-semibold text-white">House Party</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Seating and screen layout so everyone can see.</li>
                <li>Where to put food/drinks to avoid blocking the view.</li>
                <li>How to handle volume for cheers vs. conversation breaks.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Family &amp; Mixed Ages</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Side activities for kids (coloring pages, mascot bingo, quieter games).</li>
                <li>Simple explanation prompts for rules/schedules.</li>
                <li>
                  Ideas for &quot;if kids lose interest&quot; so adults can still enjoy the game without guilt.
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Bar / Community Room</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Bracket walls, sign‑up sheets, and QR codes for digital scoring.</li>
                <li>Guides for hosting small pools or prize drawings (non‑gambling focused).</li>
                <li>How to communicate &quot;house rules&quot; around cheering, trash talk, and safety.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Online / Hybrid</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Shared bracket docs and live‑updating scoreboards.</li>
                <li>Discord/video watch‑together prompts and check‑ins.</li>
                <li>Fantasy or prediction sheets people can fill out remotely.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mini Sample: March Madness Night */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-emerald-700/70 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-emerald-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Mini Sample: March Madness Game Night
            </h3>
          </div>
          <p className="text-sm text-gray-300">
            This is a **small example** of how a March Madness‑style night could look in a full Sports Party theme. The
            paid version will include more bracket options, printables, and alt‑recipes—but here&apos;s a taste.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Vibe &amp; Setup</p>
              <ul className="list-disc list-inside space-y-1">
                <li>4–10 friends, one main TV with tournament games on.</li>
                <li>
                  A big printed or whiteboard bracket on the wall where everyone can see updates between timeouts/halves.
                </li>
                <li>
                  Team‑color accents (napkins, cups, simple banners) using generic color combos or neutral designs to
                  avoid IP issues.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Simple Bracket Activity</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Everyone fills out a quick &quot;Sweet 16&quot; or &quot;Final Four&quot; mini bracket (not the full
                  tournament) before the games start.
                </li>
                <li>Points for correct picks; bonus for upsets (as defined in the rules sheet).</li>
                <li>Prizes can be silly: winner picks the next snack, playlist, or takes home a small themed item.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Featured Snack Idea</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Court Side&quot; Slider Bar</strong> – small rolls, a tray of mini burger patties or
                  plant‑based patties, cheese, pickles, lettuce, condiments.
                </li>
                <li>Label toppings with basketball‑themed names (e.g. &quot;Full Court Press Pickles&quot;).</li>
                <li>Include at least one veggie‑forward or lighter option for folks who don&apos;t want heavy food.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Sample Non‑Alcoholic Drink</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Halftime Citrus Punch&quot;</strong> – orange juice + lemonade + soda water over ice with
                  sliced citrus.
                </li>
                <li>Serve in clear pitchers so people can refill easily during timeouts.</li>
                <li>Optional: colored straws or cups to match team‑ish colors (without official logos).</li>
              </ul>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-200">
            <p className="font-semibold text-white">Example Structure (Abbreviated)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>15–20 min pre‑tip: Arrivals, bracket fill‑outs, &quot;who are you rooting for&quot; check‑ins.</li>
              <li>
                First half: Focus mostly on the game; light commentary. During timeouts, update bracket board and offer
                quick prediction prompts (&quot;next team to hit a three&quot;).
              </li>
              <li>Halftime: Snack refills, bracket recap, stretch, bathroom break.</li>
              <li>
                Second half: More engaged cheering. After the final buzzer, update brackets and call out fun upsets or
                near‑misses.
              </li>
              <li>End of night: Quick debrief (&quot;wildest moment?&quot;) and prize/recognition for bracket leaders.</li>
            </ul>
            <p className="text-[11px] text-gray-400">
              In the full theme, March Madness would be one of several sports examples (football championships, soccer
              tournaments, local leagues), each with printable brackets, score sheets, and kit ideas.
            </p>
          </div>
        </section>

        {/* Preview CTA / link to signup */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-emerald-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            What You&apos;ll Unlock in Full Sports Themes
          </h3>
          <p className="text-sm text-gray-300">
            This page just previews the structure. Paid Sports Party themes will include:
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>Blueprints for game days, finals, drafts, and tournament runs.</li>
            <li>Fantasy/mini‑league structures, bracket templates, and activity sheets.</li>
            <li>Detailed snack and drink pairings with substitutions.</li>
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
