// src/app/themes/game-night-preview/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Gamepad2,
  Users,
  Sparkles,
  Music2,
  UtensilsCrossed,
  Wine,
  MonitorSmartphone,
} from 'lucide-react'

export default function GameNightPreviewPage() {
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
            <div className="w-9 h-9 rounded-2xl bg-indigo-600/80 flex items-center justify-center border border-indigo-300/60 shadow-lg shadow-indigo-500/40">
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-indigo-200">
                Theme Preview • Game Night
              </p>
              <p className="text-xs text-gray-300">
                A sneak peek at how a full PartyLab Game Night theme will feel once it&apos;s paid and unlocked.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Game Night Theme Preview
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            This is a preview of what a full Game Night theme will look like inside PartyLab. The paid version will give
            you complete blueprints: playlists, decor, recipes, drink ideas, game suggestions, timing, printables,
            hosting notes, and optional kits or custom items to match your vibe.
          </p>
        </header>

        {/* Core idea: multiple game vibes */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              One Theme, Many Game Night Vibes
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            The full Game Night theme won&apos;t just give you &quot;play a board game.&quot; It will offer multiple
            sub‑vibes you can pick from or mix and match:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li><strong>Solo chill:</strong> one‑player games, cozy snacks, ambient playlists.</li>
            <li><strong>Couch co‑op / group:</strong> party games, couch co‑op, card/board games.</li>
            <li><strong>Online / hybrid:</strong> Discord/Zoom‑friendly games and timing structures.</li>
            <li><strong>Low‑sensory / ND‑friendly:</strong> quieter games, softer lighting, fewer loud surprises.</li>
          </ul>
          <p className="text-xs text-gray-400">
            Each vibe will come with suggested games (video, tabletop, card, analog), pacing, and how to transition
            between phases of the night.
          </p>
        </section>

        {/* Music & Atmosphere */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Playlists & sound */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Music2 className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">Curated Playlists &amp; Atmosphere</h3>
            </div>
            <p className="text-sm text-gray-200">
              Full access will include playlists and soundscapes tailored to different types of Game Night:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Upbeat &amp; silly tracks for party games and big laughs.</li>
              <li>Lo‑fi / chill mixes for cozy solo or small‑group sessions.</li>
              <li>Themed playlists (fantasy, sci‑fi, retro, sports, horror‑lite, etc.).</li>
              <li>Guidance on volume &amp; when to turn music off for focus.</li>
            </ul>
            <p className="text-xs text-gray-400">
              We&apos;ll link to playlists on popular platforms, and suggest &quot;fallback&quot; genres if you want to
              use your own music library.
            </p>
          </div>

          {/* Food & drinks */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <UtensilsCrossed className="w-5 h-5 text-indigo-200" />
              <h3 className="text-lg font-bold text-white">
                Snacks, Recipes &amp; Themed Drinks
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              The paid theme will suggest food and drink ideas matched to your gaming vibe or specific games, including:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Finger‑food platters and low‑mess snacks for controllers and cards.</li>
              <li>Quick, low‑spoon dinners you can eat between rounds.</li>
              <li>
                Themed <strong>non‑alcoholic</strong> drinks (mocktails, sodas, tea/coffee combos) inspired by game
                genres or color palettes.
              </li>
              <li>
                Optional <strong>alcoholic</strong> variations (where legal), with notes on responsible service and
                alternatives.
              </li>
            </ul>
            <p className="text-[11px] text-gray-400">
              Alcohol disclaimer: Any alcoholic drink suggestions in PartyLab content are for locations where drinking is
              legal and only for adults of legal drinking age in their country/region. You are responsible for following
              your local laws, drinking responsibly, and never serving alcohol to minors.
            </p>
          </div>
        </section>

        {/* Different Game Night modes */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <MonitorSmartphone className="w-5 h-5 text-indigo-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Modes: Solo, Couch, Online &amp; Sensory‑Friendly
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            A full Game Night theme will have separate guidance for different setups:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-1">
              <p className="font-semibold text-white">Solo Play</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Comfort games and &quot;background&quot; goals for a gentle night in.</li>
                <li>Pairings with podcasts, streams, or music for one‑person hangs.</li>
                <li>Ideas for turning progress into a small celebration.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Couch Co‑Op &amp; Group</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Party game lineups with pacing (short, medium, wild rounds).</li>
                <li>Controller / turn‑taking structures that keep everyone involved.</li>
                <li>How to reset the room between games and keep energy balanced.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Online / Hybrid</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Discord or video‑call‑friendly games and tools.</li>
                <li>Clear schedule blocks (who hosts, when to switch games).</li>
                <li>Shared boards, score sheets and prompts that work over chat.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Sensory‑Aware &amp; ND‑Friendly</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Game suggestions with lower sensory load or fewer fast reactions.</li>
                <li>Lighting, seating and noise suggestions for different needs.</li>
                <li>Quiet “side quests” or parallel activities for when someone needs a break.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Custom items & kits */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-indigo-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Users className="w-5 h-5 text-indigo-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Custom Items, Kits &amp; Printables
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Game Night is one of the themes where PartyLab&apos;s shop and custom work really shine. As the theme
            matures, you&apos;ll be able to:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Order themed kits with score sheets, tokens, and small props.</li>
            <li>Download printables: &quot;Tonight&apos;s Game List&quot;, scoreboard posters, bingo cards, etc.</li>
            <li>
              Request custom items: engraved tokens, controller stands, drink markers, themed coasters and more (via
              sublimation, 3D printing, laser engraving, and candle work).
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            Not every item will be available at launch, but Game Night will be one of the first themes where we experiment
            with physical kits and bespoke add‑ons.
          </p>
        </section>

        {/* Mini Sample: Kart Racing Game Night */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-indigo-700/70 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Mini Sample: Kart Racing Game Night with Friends
            </h3>
          </div>
          <p className="text-sm text-gray-300">
            This is a **small example** of how a specific Game Night could look inside the full theme. The paid version
            will offer more options, variations, and printable details—but here&apos;s a taste for a kart‑racing‑style
            night.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Vibe &amp; Setup</p>
              <ul className="list-disc list-inside space-y-1">
                <li>4–8 friends, rotating controllers in teams or pairs.</li>
                <li>Color‑blocked decor in 3–4 &quot;team&quot; colors (cups, napkins, balloons).</li>
                <li>
                  Playlist: upbeat, cartoony racing tracks and retro game music—no heavy lyrics so people can still
                  trash‑talk and laugh.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Featured Snack Idea</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Pit Stop&quot; Build‑Your‑Own Nacho Bar</strong> – chips, queso, beans, salsa, jalapeños,
                  chopped veggies, and a mild &amp; spicy option.
                </li>
                <li>Label toppings with track‑themed names (e.g., &quot;Turbo Beans&quot;, &quot;Rainbow Veg&quot;).</li>
                <li>Include at least one dairy‑free and gluten‑friendly option where possible.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Sample Non‑Alcoholic Drink</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Blue Shell Boost&quot; Mocktail</strong> – blue sports drink or flavored sparkling water
                  + lemonade + a splash of coconut water over ice.
                </li>
                <li>Serve in clear cups with a tiny candy &quot;power‑up&quot; skewer (if safe for your group).</li>
                <li>Optional color variations for each &quot;team&quot;.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Sample Alcoholic Option (Optional)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Rainbow Road Spritz&quot;</strong> – prosecco or dry sparkling wine + fruit juice (like
                  passionfruit or pineapple) + a splash of soda water, served over ice.
                </li>
                <li>Garnish with a citrus slice in one team color.</li>
                <li>Always offer the mocktail version side‑by‑side so nobody is left out.</li>
              </ul>
              <p className="text-[11px] text-gray-400">
                Alcohol disclaimer: This suggestion is intended only for adults of legal drinking age in their country or
                region, and only where serving alcohol is legal. Hosts are responsible for following local laws, never
                serving minors, and encouraging guests to drink responsibly and arrange safe transportation.
              </p>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-200">
            <p className="font-semibold text-white">Example Structure (Abbreviated)</p>
            <ul className="list-disc list-inside space-y-1">
              <li>15–20 min: Arrival, &quot;team&quot; assignment, snacks &amp; drinks intro.</li>
              <li>45–60 min: Casual warm‑up races and practice rounds.</li>
              <li>30–45 min: Mini tournament bracket or &quot;first to X wins&quot; challenge.</li>
              <li>15–20 min: Wind‑down races, photo moments, &quot;final lap&quot; playlist songs.</li>
            </ul>
            <p className="text-[11px] text-gray-400">
              In the full theme, these samples would be expanded into printable run‑of‑show sheets, shopping lists, and
              optional kit add‑ons (like color tokens, themed coasters, or scoreboard posters).
            </p>
          </div>
        </section>

        {/* Preview CTA / link to signup */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-indigo-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            What You&apos;ll Unlock in the Full Game Night Theme
          </h3>
          <p className="text-sm text-gray-300">
            This page just previews the structure. A paid Game Night theme will include:
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>Full game suggestions by vibe (solo, couch, online, ND‑friendly).</li>
            <li>Exact playlists, timing guides, and hosting scripts.</li>
            <li>Detailed recipes and drink pairings with substitutions.</li>
            <li>Printable materials and options for kits/custom items from the PartyLab shop.</li>
          </ul>
          <p className="text-sm text-gray-300">
            You can access this and other themes during early access as a founding member or trial subscriber.
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
