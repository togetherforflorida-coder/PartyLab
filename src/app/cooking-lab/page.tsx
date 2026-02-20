// src/app/cooking-lab/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  UtensilsCrossed,
  ChefHat,
  Users,
  Shield,
  Sparkles,
} from 'lucide-react'

export default function CookingLabPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-purple-950 to-black py-10">
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
            <div className="w-9 h-9 rounded-2xl bg-amber-600/80 flex items-center justify-center border border-amber-300/60 shadow-lg shadow-amber-500/40">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200">
                PartyLab Labs
              </p>
              <p className="text-xs text-gray-300">
                Focused spaces where we test small, sustainable rituals—not just big events.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Cooking Lab
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-3xl">
            The Cooking Lab is about turning &quot;what are we eating&quot; into repeatable, low‑stress rituals—
            co‑created recipes, cook‑along nights, kid‑friendly kitchen experiments, and ND‑friendly formats that fit
            real life instead of Instagram.
          </p>
        </header>

        {/* What this Lab is */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-amber-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Sparkles className="w-5 h-5 text-amber-200" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              What the Cooking Lab Focuses On
            </h2>
          </div>
          <p className="text-sm text-gray-200">
            This Lab isn&apos;t a glossy food blog or a strict meal prep plan. It&apos;s a sandbox for:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Co‑created recipes you can adapt for sensory needs, budgets, and time.</li>
            <li>Cook‑along formats for kids, roommates, partners, or friends.</li>
            <li>Small rituals around food that feel grounded, not perfectionistic.</li>
          </ul>
          <p className="text-xs text-gray-400">
            The goal is to give you simple structures you can repeat—Thursday soup nights, Sunday pancake rituals,
            &quot;study snack&quot; routines—without needing to reinvent dinner every single day.
          </p>
        </section>

        {/* Example formats */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Family / kids / ND-friendly */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-amber-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <ChefHat className="w-5 h-5 text-amber-200" />
              <h3 className="text-lg font-bold text-white">
                Family &amp; Kid‑Friendly Cook‑Along Nights
              </h3>
            </div>
            <p className="text-sm text-gray-200">
              Formats for letting kids, ND folks, or hesitant cooks actually help in the kitchen without chaos:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Step‑by‑step visual prompts and checklists.</li>
              <li>Split‑role recipes (one person chops, one person stirs, etc.).</li>
              <li>Lower‑sensory options (no sizzling oil, flexible textures, quieter tools).</li>
            </ul>
            <p className="text-xs text-gray-400">
              Many Lab recipes will include notes like &quot;if crunchy textures are hard&quot;, &quot;if certain smells
              are tricky&quot;, or &quot;if someone needs to tap out partway through.&quot;
            </p>
          </div>

          {/* Friends / roommates / small groups */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-amber-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Users className="w-5 h-5 text-amber-200" />
              <h3 className="text-lg font-bold text-white">Roommate, Couple &amp; Friend Cook‑Alongs</h3>
            </div>
            <p className="text-sm text-gray-200">
              Nights that feel like a little event without needing a huge menu:
            </p>
            <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
              <li>Choose‑your‑own‑adventure dinners (tacos, bowls, DIY boards).</li>
              <li>Shared &quot;prep party&quot; nights where you batch a few meals together.</li>
              <li>Simple &quot;dinner and an episode&quot; structures tied into PartyLab themes.</li>
            </ul>
            <p className="text-xs text-gray-400">
              These formats will plug directly into some PartyLab themes (Game Night, holidays, movie marathons) so
              dinner and vibes support each other.
            </p>
          </div>
        </section>

        {/* Safety & accessibility */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-rose-700/50 space-y-3">
          <div className="flex items-center space-x-2 mb-1">
            <Shield className="w-5 h-5 text-rose-200" />
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Accessibility, Safety &amp; Real‑Life Constraints
            </h3>
          </div>
          <p className="text-sm text-gray-200">
            Not everyone has the same energy, tools, money, or spoons. The Cooking Lab will:
          </p>
          <ul className="text-sm text-gray-200 list-disc list-inside space-y-1">
            <li>Flag recipes as low‑spoon, medium‑spoon, or high‑spoon where possible.</li>
            <li>Offer substitutions for budget, dietary needs, and local availability.</li>
            <li>
              Include safety callouts for kids in the kitchen, knife skills, and avoiding burners/ovens if that&apos;s
              not realistic for your household.
            </li>
          </ul>
          <p className="text-xs text-gray-400">
            We&apos;re not nutritionists or medical professionals, and this is not a diet program. It&apos;s about
            helping you build a relationship with food and hosting that works for your situation.
          </p>
        </section>

        {/* Interest / coming soon */}
        <section className="bg-black/50 backdrop-blur rounded-3xl p-6 border border-amber-700/70 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            Want to Try Cooking Lab Experiments?
          </h3>
          <p className="text-sm text-gray-300">
            If you&apos;re interested in trying co‑created recipes, family/ND‑friendly cook‑alongs, or small weekly food
            rituals—and giving feedback on what actually works—you can raise your hand here.
          </p>

          <form className="space-y-3 max-w-md text-sm text-gray-200">
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-amber-600/40 focus:border-amber-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-200 mb-1">
                What kind of cooking help or structure would you like?
              </label>
              <textarea
                className="w-full bg-black/40 text-gray-100 px-4 py-2.5 rounded-lg border border-amber-600/40 focus:border-amber-400 focus:outline-none"
                rows={3}
                placeholder="Example: kid-friendly dinners; low-spoon meals; roommate cook-alongs; ND sensory-friendly recipes; something else?"
              />
            </div>
            <p className="text-[11px] text-gray-400">
              Forms for this Lab aren&apos;t wired up yet; interest collection and follow‑up will be added as experiments
              move from idea to pilot.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:from-amber-600 hover:to-purple-600 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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
