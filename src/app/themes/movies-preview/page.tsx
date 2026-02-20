// src/app/themes/movies-preview/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Clapperboard,
  Tv,
  Sparkles,
  Music2,
  UtensilsCrossed,
  MonitorSmartphone,
} from 'lucide-react'

export default function MoviesPreviewPage() {
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
            <div className="w-9 h-9 rounded-2xl bg-purple-600/80 flex items-center justify-center border border-purple-300/60 shadow-lg shadow-purple-500/40">
              <Clapperboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-purple-200">
                Theme Preview • Movies &amp; TV
              </p>
              <p className="text-xs text-gray-300">
                A sneak peek at how a full PartyLab Movies &amp; TV theme will feel once it&apos;s paid and unlocked.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Movies &amp; TV Theme Preview
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            This is a preview of what a full Movies &amp; TV theme will look like inside PartyLab. The paid version will
            give you complete blueprints for watch parties, multi‑episode binges, premiere nights, finales, and cozy
            rewatch rituals—with decor, snacks, playlists, pacing, and optional kits.
          </p>
        </header>

        {/* Core idea: multiple viewing vibes */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-purple-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              One Theme, Many Watch Night Vibes
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            A full Movies &amp; TV theme won&apos;t just say &quot;put something on.&quot; It will offer multiple sub‑vibes:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>
              <strong>Chill rewatch:</strong> comfort movies/episodes, blankets, low‑prep snacks for background viewing.
            </li>
            <li>
              <strong>Focused movie night:</strong> one feature + rituals before/after (discussion, reflection, quotes).
            </li>
            <li>
              <strong>Binge sessions:</strong> 3–6 episodes with planned breaks and snack/drink checkpoints.
            </li>
            <li>
              <strong>Premiere / finale parties:</strong> decor, themed food, prediction games, and post‑episode debrief.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            Each vibe will include pacing (start, middle, end), suggested activities, and how to scale for 1, 2, or a
            small group.
          </p>
        </section>

        {/* Music & Atmosphere */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Playlists & sound */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Music2 className="w-5 h-5 text-purple-200" />
              <h3 className="text-lg font-bold text-white">Soundtrack &amp; Atmosphere</h3>
            </div>
            <p className="text-sm text-gray-200">
              Full access will include playlists and sound cues for different genres and moods:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Pre‑show music to set the tone while people arrive and get settled.</li>
              <li>Genre‑matching playlists (horror, rom‑com, fantasy, sci‑fi, cozy drama, etc.).</li>
              <li>Quiet, ambient options for background during dialogue‑heavy scenes.</li>
              <li>
                Cues for &quot;pause here&quot; moments (refills, discussion, stretch breaks) so the night flows on
                purpose.
              </li>
            </ul>
            <p className="text-xs text-gray-400">
              You&apos;ll see suggestions for specific streaming playlists plus fallback genres if you prefer your own library.
            </p>
          </div>

          {/* Food & drinks */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/60 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <UtensilsCrossed className="w-5 h-5 text-purple-200" />
              <h3 className="text-lg font-bold text-white">
                Snacks, Themed Treats &amp; Drinks
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              The paid theme will suggest food and drink pairings that match your show/movie or genre, including:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Popcorn bars with toppings named after characters or locations.</li>
              <li>Boards (charcuterie, candy, snack mixes) styled to your genre colors.</li>
              <li>
                Themed <strong>non‑alcoholic</strong> drinks (mocktails, flavor sodas, hot chocolate, tea/coffee) with
                optional character/episode names.
              </li>
              <li>
                Optional <strong>alcoholic</strong> versions where legal, with strong guidance to also offer exciting
                non‑alcoholic options.
              </li>
            </ul>
            <p className="text-[11px] text-gray-400">
              Alcohol disclaimer: Any alcoholic drink suggestions in PartyLab content are for locations where drinking is
              legal and only for adults of legal drinking age in their country/region. You are responsible for following
              your local laws, drinking responsibly, and never serving alcohol to minors.
            </p>
          </div>
        </section>

        {/* Modes & setups */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/60 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <MonitorSmartphone className="w-5 h-5 text-purple-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Setups: Solo Cozy, Couple Night, Group Watch &amp; Online
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            A full Movies &amp; TV theme will give you specific setups for different contexts:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-1">
              <p className="font-semibold text-white">Solo Cozy</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Blanket nest ideas, snack setups within arm&apos;s reach.</li>
                <li>One‑person rituals before/after (journal prompt, rating system, screenshot moments).</li>
                <li>Suggestions for &quot;comfort rewatches&quot; vs &quot;new‑to‑me&quot; nights.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Couple / Partner Night</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Decision formats (each person picks one, draw from a jar, etc.).</li>
                <li>Conversation prompts that aren&apos;t heavy but still feel connecting.</li>
                <li>Ideas for &quot;intermission&quot; touchpoints (dessert, walk, stretch, check‑in).</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Small Group / Roommate Watch</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Seating layouts that keep sightlines clear and bodies comfortable.</li>
                <li>Light rules for talking/pausing so people stay on the same page.</li>
                <li>Voting formats for episodes, movies, or next‑up choices.</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-white">Online / Synchronized Watch</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Guides for watch‑party extensions or timed pressing &quot;play&quot; together.</li>
                <li>Chat prompts for before/after episodes (without big spoilers mid‑scene).</li>
                <li>Shared bingo/quote cards, reaction check‑ins, and post‑episode debrief ideas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Custom items & kits */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/60 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Tv className="w-5 h-5 text-purple-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Custom Decor, Kits &amp; Printables
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Over time, Movies &amp; TV themes will connect to the PartyLab shop so you can:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Print watch‑bingo cards, reaction sheets, quote pages, and &quot;Tonight&apos;s Feature&quot; signs.</li>
            <li>
              Order small kits: themed coasters, candle wraps, snack labels, or mini marquee‑style signs with letters.
            </li>
            <li>
              Request custom work: show‑inspired art, engraved plaques, or specific decor for big finales/premieres.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            Not every show or film will get a full kit, but high‑demand genres and big cultural moments are more likely
            to see extra support.
          </p>
        </section>

        {/* Mini Sample: Horror Movie Night */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-purple-700/70 space-y-4">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-purple-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Mini Sample: Horror Movie Night with Friends
            </h3>
          </div>
          <p className="text-sm text-gray-300">
            This is a **small example** of how a specific Movies &amp; TV night could look in the full theme. The paid
            version will give more options, alt‑recipes, and printables—but here&apos;s a taste for a horror movie night
            with friends.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Vibe &amp; Setup</p>
              <ul className="list-disc list-inside space-y-1">
                <li>3–6 friends, dimmed lights, seating in a loose semicircle.</li>
                <li>
                  Lighting: a few candles or colored LEDs (red/purple) but keep walkways visible for bathroom/snack
                  runs.
                </li>
                <li>
                  Playlist: eerie, atmospheric horror scores playing quietly **before** the movie, then off once it
                  starts.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Featured Snack Idea</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Midnight Mix&quot; Popcorn &amp; Candy Bowls</strong> – base of salted popcorn mixed
                  with a couple of candies (e.g. chocolate pieces, gummies, or pretzels).
                </li>
                <li>Offer one &quot;spooky&quot; spicy version (with chili powder) and one mild version.</li>
                <li>Label bowls with themed names (e.g. &quot;Graveyard Crunch&quot;, &quot;Ghost Bites&quot;).</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="space-y-2">
              <p className="font-semibold text-white">Sample Non‑Alcoholic Drink</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Blood Moon Fizz&quot; Mocktail</strong> – cranberry juice + a splash of orange juice +
                  flavored sparkling water over ice.
                </li>
                <li>Garnish with an orange slice or a few frozen berries that slowly &quot;bleed&quot; into the glass.</li>
                <li>Serve in clear cups so the color pops; add a fun straw or simple stir stick.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">Sample Alcoholic Option (Optional)</p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>&quot;Nightfall Spritz&quot;</strong> – red wine + a splash of orange liqueur + soda water,
                  served over ice in a wine glass.
                </li>
                <li>Keep pours modest and always offer the Blood Moon Fizz as an equally special mocktail.</li>
                <li>Encourage guests to alternate with water or non‑alcoholic options.</li>
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
              <li>15–20 min: Arrival, snacks &amp; drinks, light chat + &quot;how scary do we want this&quot; check‑in.</li>
              <li>
                5–10 min: Quick pre‑movie ritual—everyone shares a favorite horror trope or a &quot;no thanks&quot; (e.g.
                &quot;no animal harm&quot;, &quot;no home invasion&quot;).
              </li>
              <li>Movie runtime: Lights down, phones on silent. Option to pause once at the midpoint for refills.</li>
              <li>
                15–25 min after: Soft lights up, debrief questions (&quot;scariest moment?&quot;, &quot;what would you
                do differently?&quot;), and a few minutes of neutral content (memes, trailers) before people head home.
              </li>
            </ul>
            <p className="text-[11px] text-gray-400">
              In the full theme, this horror night would be one of several genre‑specific samples, each with printable
              run‑of‑show sheets, content‑warning notes, and optional decor/kit suggestions.
            </p>
          </div>
        </section>

        {/* Preview CTA / link to signup */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-purple-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            What You&apos;ll Unlock in the Full Movies &amp; TV Theme
          </h3>
          <p className="text-sm text-gray-300">
            This page just previews the structure. A paid Movies &amp; TV theme will include:
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>Blueprints for different vibes (chill, binge, premiere, finale, genre nights).</li>
            <li>Exact playlists, timing guides, and hosting scripts.</li>
            <li>Detailed snack and drink pairings with substitutions.</li>
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
