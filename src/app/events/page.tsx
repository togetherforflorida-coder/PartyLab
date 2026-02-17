// src/app/events/page.tsx
import Link from 'next/link'

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <p className="text-sm text-gray-400 uppercase tracking-[0.2em]">
            Hosted Events & Live Experiences
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Join Us for Shared Moments
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            In addition to at‑home party blueprints, PartyLab will host live and virtual events you can join from anywhere—
            memorials, block parties, dinner theatre nights, murder mysteries, and more.
          </p>
        </header>

        {/* Key Events */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pulse 10 */}
          <div className="bg-gradient-to-br from-purple-900/60 to-indigo-900/60 backdrop-blur rounded-2xl p-6 border border-purple-600/40 space-y-3">
            <h2 className="text-2xl font-bold text-white">
              Pulse 10: Love &amp; Light Virtual Memorial
            </h2>
            <p className="text-xs text-gray-400">Planned for June 12, 2026 • Online Gathering</p>
            <p className="text-sm text-gray-300">
              A 10‑year memorial honoring the 49 lives lost at Pulse, holding space for grief, remembrance,
              and queer resilience. We&apos;re designing a gentle, thoughtful online gathering where you can
              light a candle at home, join in guided reflection, and connect quietly with others.
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Guided reflection prompts and optional readings</li>
              <li>Candle‑lighting ritual you can follow from home</li>
              <li>Optional at‑home kit to create a small memorial corner</li>
              <li>All proceeds support an LGBTQ+ sanctuary project vision</li>
            </ul>
            <p className="text-xs text-gray-400">
              This event will respect all faith backgrounds and those with no faith; it&apos;s about memory, not doctrine.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              Get Updates on Pulse 10 →
            </Link>
          </div>

          {/* America 250 */}
          <div className="bg-gradient-to-br from-blue-900/60 to-red-900/60 backdrop-blur rounded-2xl p-6 border border-blue-600/40 space-y-3">
            <h2 className="text-2xl font-bold text-white">
              America 250: Virtual Block Party
            </h2>
            <p className="text-xs text-gray-400">Planned for July 4, 2026 • Coast‑to‑Coast Celebration</p>
            <p className="text-sm text-gray-300">
              A July 4th “America 250” celebration you can join from your own porch, living room, or neighborhood.
              Think printable decorations, playlists, conversation prompts, reflection questions, and optional kits
              to help you host something that feels like you.
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>PartyLab‑curated playlists for the day and evening</li>
              <li>Printable decor and signage you can color or customize</li>
              <li>Prompts that acknowledge the complexity of U.S. history</li>
              <li>Optional food & game kits to keep it simple but special</li>
            </ul>
            <p className="text-xs text-gray-400">
              Designed to be inclusive, multi‑faith, multi‑cultural, and accessible for families, friend groups, or solo hosts.
            </p>
            <Link
              href="/signup"
              className="inline-block mt-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              Get Updates on America 250 →
            </Link>
          </div>
        </section>

        {/* Future Formats */}
        <section className="bg-black/40 backdrop-blur rounded-2xl p-6 border border-purple-700/40 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Live Formats We&apos;re Planning
          </h2>
          <p className="text-sm text-gray-300">
            As PartyLab grows, we want to host experiences that feel like “events in a box” you can join wherever you live.
            Some will be live‑hosted on Zoom or similar; others will be on‑demand kits with guided scripts and playlists.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">✨ Dinner Theatre at Home</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Streamed or pre‑recorded “shows” with matching menus and decor</li>
                <li>Conversation prompts or program notes to read at the table</li>
                <li>Optional costume or prop suggestions if your group likes to dress up</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">🎲 Live Game Nights & Trivia</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Theme‑based trivia nights (shows, sports seasons, decades, etc.)</li>
                <li>Interactive party games that work over video or in‑person with a screen</li>
                <li>Scoreboards, brackets, and printable answer sheets from PartyLab</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
            <div>
              <h3 className="font-semibold text-white mb-2">🕵️ Murder Mysteries</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Printable character packets with roles and secret objectives</li>
                <li>Optional mailed prop kits (envelopes, clues, little physical items)</li>
                <li>Themed menus and decor suggestions for each story</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">📺 Special Event Watch‑Alongs</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Awards shows (Oscars, Grammys, etc.)</li>
                <li>Season premieres or finales of big shows</li>
                <li>Competition events (Eurovision, big game days, etc.)</li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            These formats will roll out gradually through 2025–2026. Founding members and early subscribers will get early invites and special pricing/bonuses.
          </p>
        </section>

        {/* How It Ties Into Membership */}
        <section className="bg-black/40 backdrop-blur rounded-2xl p-6 border border-purple-700/40 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            How Hosted Events Work with Your Membership
          </h2>
          <p className="text-sm text-gray-300">
            We want hosted events to feel like a natural “bonus layer” on top of the themes and blueprints you already get with PartyLab.
          </p>
          <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
            <li>Some events will be free to all active members (with optional paid kits).</li>
            <li>Some may be separately ticketed, but discounted or bonus‑enhanced for members.</li>
            <li>Every live experience will include guidance for adapting it to your home, budget, and accessibility needs.</li>
          </ul>
          <div className="pt-2">
            <Link
              href="/signup"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
            >
              <span>Join as a Founding Member</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
