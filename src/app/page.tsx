// src/app/page.tsx
import Link from 'next/link'
import { Sparkles, Check, Gift } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950">
      {/* PartyLab Lab Banner */}
      <section className="bg-black/40 border-b border-purple-900/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600/80 border border-purple-300/40 shadow-md">
              <span className="text-white text-sm">⚗️</span>
            </div>
            <div>
              <p className="text-xs text-purple-100 uppercase tracking-[0.18em]">
                PartyLab • Party Laboratory
              </p>
              <p className="text-[11px] text-gray-300">
                Where recipes, games, decor & vibes get tested like experiments—so you don&apos;t have to wing it.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
            <span className="px-2 py-1 rounded-full bg-purple-900/60 border border-purple-600/50">
              🧪 Early Access Build • Features Rolling Out
            </span>
            <span className="px-2 py-1 rounded-full bg-indigo-900/60 border border-indigo-600/50">
              🎉 You&apos;re seeing our lab in progress
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-indigo-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Turn Any Obsession
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {' '}Into a Party
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              PartyLab is your hub for themed parties inspired by your favorite movies, shows, sports, holidays, and more—
              with recipes, games, decor ideas, and kits to bring it all to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/signup"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-2xl hover:shadow-purple-500/50"
              >
                Become a Founding Member
              </Link>
            <Link
                href="/signup?plan=trial"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Try PartyLab for 7 Days
              </Link>
            </div>
            <div className="mt-12 inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur px-6 py-3 rounded-full border border-yellow-500/30">
              <Gift className="w-6 h-6 text-yellow-400" />
              <span className="text-white font-semibold">
                Early access pricing: 3 months for $5 (limited time)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How PartyLab Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Turn anything you’re obsessed with into a party blueprint you can actually run.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Search a Theme',
                desc: 'Type in a movie, show, sport, holiday, or vibe—or browse by category.',
                icon: '🔍',
              },
              {
                title: 'Get a Party Blueprint',
                desc: 'Each theme includes decor ideas, recipes, games, playlists, and more.',
                icon: '📋',
              },
              {
                title: 'Make it Real',
                desc: 'Use what you have, shop our kits, or order custom pieces as we grow.',
                icon: '🎉',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur p-8 rounded-2xl border border-purple-700/30 hover:border-purple-500/50 transition-all hover:scale-105"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Themes */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Popular Themes
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From big games to birthdays to cozy TV nights—start with a vibe and we’ll give you a plan.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Sports Parties', emoji: '🏈', note: 'Super Bowl, finals, game days' },
              { name: 'Movies & TV', emoji: '🎬', note: 'Movie marathons & watch parties' },
              { name: 'Holidays', emoji: '🎄', note: 'Christmas, Halloween, NYE & more' },
              { name: 'Birthdays', emoji: '🎂', note: 'Kids, adults & milestones' },
              { name: 'Game Night', emoji: '🎮', note: 'Cozy couch co‑op & tournaments' },
              { name: 'Adult 18+', emoji: '🍷', note: 'Bachelorette, date nights & more' },
              { name: 'Faith & Family', emoji: '🙏', note: 'Gentle faith‑friendly nights' },
              { name: 'Kids & ND‑Friendly', emoji: '🧩', note: 'Lower‑sensory options' },
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur p-6 rounded-2xl border border-purple-700/30 hover:border-purple-500/60 transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{cat.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-1">{cat.name}</h3>
                <p className="text-gray-300 text-xs">{cat.note}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/themes"
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              <span>Browse All Themes</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Preview Theme CTA */}
      <section className="py-16 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-900/70 to-indigo-900/70 backdrop-blur p-10 rounded-3xl border border-purple-600/40">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want to See a Full Theme Preview?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Check out our Game Night demo theme to see how PartyLab lays out recipes, games, decor ideas,
              and shopping lists—with one unlocked sample in each category.
            </p>
            <Link
              href="/preview/game-night"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-2xl hover:shadow-purple-500/50"
            >
              <span>Preview the Game Night Theme</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Early Access Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Lock in launch pricing while we build out the library.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trial */}
            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur p-8 rounded-2xl border border-purple-700/30 hover:border-purple-500 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">7-Day Trial</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$1.50</span>
                <span className="text-gray-300 ml-1">/ week</span>
              </div>
              <ul className="space-y-2 mb-6 text-gray-300 text-sm">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>Access to all themes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-400 mt-0.5" />
                  <span>All recipes, games, and guides</span>
                </li>
              </ul>
              <Link
                href="/signup?plan=trial"
                className="block text-center bg-white/10 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Start Trial
              </Link>
            </div>

            {/* Early Bird (popular) */}
            <div className="relative bg-gradient-to-br from-pink-600/40 to-purple-600/40 backdrop-blur p-8 rounded-2xl border-2 border-pink-500 shadow-2xl shadow-pink-500/30 hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                <span>MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Founding Member – 3 Months</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$5</span>
                <span className="text-gray-300 ml-1">total</span>
              </div>
              <ul className="space-y-2 mb-6 text-gray-100 text-sm">
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-300 mt-0.5" />
                  <span>3 months of full access</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check className="w-4 h-4 text-green-300 mt-0.5" />
                  <span>Best value during early access</span>
                </li>
              </ul>
              <Link
                href="/signup?plan=early-bird"
                className="block text-center bg-white text-purple-900 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all"
              >
                Get 3 Months for $5
              </Link>
            </div>

            {/* Standard */}
            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur p-8 rounded-2xl border border-purple-700/30 hover:border-purple-500 transition-all hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-4">Regular Plans</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">$3</span>
                <span className="text-gray-300 ml-1">/ month</span>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">$25</span>
                <span className="text-gray-300 ml-1">/ year</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Standard pricing after our early access window. Founding members keep their access.
              </p>
              <button
                disabled
                className="block w-full text-center bg-white/10 text-gray-400 px-6 py-3 rounded-full font-semibold cursor-not-allowed border border-white/10"
              >
                Coming After Launch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hosted Events & Live Experiences */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hosted Events & Live Experiences
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              In addition to at‑home parties, we&apos;re building live and virtual experiences you can join from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Pulse 10 */}
            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur rounded-2xl p-6 border border-purple-600/40">
              <h3 className="text-xl font-bold text-white mb-2">
                Pulse 10: Love &amp; Light Virtual Memorial
              </h3>
              <p className="text-xs text-gray-400 mb-2">June 12, 2026 • Online Gathering</p>
              <p className="text-sm text-gray-300 mb-4">
                A 10‑year memorial honoring the lives lost at Pulse, holding space for grief, remembrance,
                and queer resilience. A guided evening with reflection, candles, and shared storytelling.
                All proceeds will support an LGBTQ+ sanctuary project.
              </p>
              <p className="text-xs text-gray-400 mb-3">
                This will be both a live hosted experience and a kit‑supported at‑home observance.
              </p>
              <Link
                href="/events"
                className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
              >
                Learn More About Pulse 10 →
              </Link>
            </div>

            {/* America 250 */}
            <div className="bg-gradient-to-br from-blue-900/50 to-red-900/50 backdrop-blur rounded-2xl p-6 border border-blue-600/40">
              <h3 className="text-xl font-bold text-white mb-2">
                America 250: Virtual Block Party
              </h3>
              <p className="text-xs text-gray-400 mb-2">July 4, 2026 • Coast‑to‑Coast Celebration</p>
              <p className="text-sm text-gray-300 mb-4">
                A Fourth of July “America 250” block party you can join from your porch, living room, or neighborhood—featuring
                playlists, activity prompts, printable decorations, and optional kits for food, decor, and games.
              </p>
              <p className="text-xs text-gray-400 mb-3">
                Built to be inclusive, multi‑faith, and accessible for families, friends, or solo celebrations.
              </p>
              <Link
                href="/events"
                className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
              >
                Learn More About America 250 →
              </Link>
            </div>
          </div>

          {/* Future live formats */}
          <div className="bg-black/40 backdrop-blur rounded-2xl p-6 border border-purple-700/40">
            <h3 className="text-lg font-bold text-white mb-3">
              Coming as PartyLab Grows
            </h3>
            <p className="text-sm text-gray-300 mb-3">
              We&apos;re planning a mix of live‑hosted and at‑home hybrid experiences, including:
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Dinner theatre nights you can stream at home—with matching menus and decor suggestions.</li>
              <li>Live game nights and trivia events tied to your favorite shows, movies, and sports.</li>
              <li>Murder mystery evenings with printable character packets and optional mailed props.</li>
              <li>Seasonal “watch together” events around major finales, awards shows, and competitions.</li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">
              These will roll out gradually over 2025–2026. Founding members and early subscribers will get first access and special pricing.
            </p>
          </div>
        </div>
      </section>

      {/* More Than Parties / Coming to PartyLab */}
      <section className="py-20 bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              More Than Just Parties
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              PartyLab is also about cozy nights in, family rituals, self‑care evenings, and
              small traditions you can repeat all year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kids Cook‑Along Nights',
                emoji: '👨‍🍳',
                desc: 'Autism‑friendly, step‑by‑step recipes for getting kids involved in the kitchen with sensory‑aware options.',
              },
              {
                title: 'Faith & Food Themes',
                emoji: '🙏',
                desc: 'Gentle, non‑shouty family nights that blend simple recipes with bible stories, reflection questions, or gratitude practices.',
              },
              {
                title: 'Mystical & Tarot Evenings',
                emoji: '🔮',
                desc: '“Tarot & Tea” nights with digital card pulls, reflection prompts, and cozy setups—for fun and introspection, not a substitute for therapy.',
              },
              {
                title: 'Ladies Nights & Adult Evenings (18+)',
                emoji: '🍷',
                desc: 'Spa nights, wine tastings, bachelorette‑friendly games, and grown‑up evenings at home with guidance and safety notes.',
              },
              {
                title: 'Printables & Quiet Activities',
                emoji: '🧩',
                desc: 'Coloring pages, word searches, crosswords, and low‑sensory activities for kids, neurodivergent guests, or anyone who needs a quieter corner.',
              },
              {
                title: 'Fantasy Leagues & Brackets',
                emoji: '📊',
                desc: 'Sports brackets, TV show fantasy leagues, awards‑show predictions, and shared watch spreadsheets to make any event participatory.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur p-6 rounded-2xl border border-purple-700/30"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IP Interest Survey */}
      <section id="ip-interest" className="py-20 bg-black/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur p-8 md:p-10 rounded-3xl border border-red-500/40">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Help Us Choose Future Official IP Themes
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-6 text-center max-w-2xl mx-auto">
              We&apos;re actively working to secure licenses for trademarked themes—sports, movies,
              shows, games and more. Tell us which teams, characters, or universes you&apos;d be most
              excited to see on PartyLab when we&apos;re officially licensed.
            </p>

            <form className="space-y-4 max-w-xl mx-auto">
              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-1">
                  What IPs or fandoms do you want PartyLab to support?
                </label>
                <textarea
                  className="w-full bg-black/40 text-gray-100 px-4 py-3 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none text-sm"
                  rows={4}
                  placeholder="Example: Kansas City football, Marvel, Studio Ghibli, Taylor Swift, Harry Potter (if licensed safely), specific teams, shows, or games..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-1">
                  Optional: Your email (so we can tell you if we get your favorites)
                </label>
                <input
                  type="email"
                  className="w-full bg-black/40 text-gray-100 px-4 py-3 rounded-lg border border-purple-600/40 focus:border-purple-400 focus:outline-none text-sm"
                  placeholder="you@example.com"
                />
              </div>

              <p className="text-xs text-gray-400 mb-3">
                This is just a preference survey right now—submitting this form doesn&apos;t guarantee
                a specific theme or licensing outcome, but it helps us prioritize who we talk to first.
              </p>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:from-pink-600 hover:to-purple-600 transition-all"
              >
                Submit Interest (Coming Soon)
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
