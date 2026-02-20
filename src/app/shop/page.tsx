// src/app/shop/page.tsx
'use client'

import Link from 'next/link'
import { ArrowLeft, ShoppingBag, Sparkles, Wand2, Image as ImageIcon, Package, Printer } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ShopPage() {
  const router = useRouter()

  // TODO: update this to your real Shopify URL
  const shopifyUrl = 'https://your-shopify-store-url-here'

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-black py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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
            <div className="w-9 h-9 rounded-2xl bg-pink-600/80 flex items-center justify-center border border-pink-300/60 shadow-lg shadow-pink-500/40">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-pink-200">
                PartyLab Shop
              </p>
              <p className="text-xs text-gray-300">
                Kits, printables, custom design, and more—powered by Shopify, curated by PartyLab.
              </p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What You Can Get from PartyLab
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
            This page shows the types of things we sell and create. When you&apos;re ready to shop, we&apos;ll send you
            to our Shopify store to browse current products, check out, and manage orders.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg shadow-pink-500/40"
            >
              <span>Shop Now on Shopify</span>
              <span>→</span>
            </Link>
            <p className="text-[11px] text-gray-400">
              You&apos;ll leave PartyLab to complete purchases securely through Shopify.
            </p>
          </div>
        </header>

        {/* Product / service categories */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kits & bundles */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Package className="w-5 h-5 text-purple-200" />
              <h2 className="text-lg sm:text-xl font-bold text-white">Theme Kits &amp; Bundles</h2>
            </div>
            <p className="text-sm text-gray-300">
              Pre‑curated kits to support a specific theme or type of night—ready to drop into your space with minimal
              planning.
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Decor bundles (banners, table accents, color‑matched pieces)</li>
              <li>Game kits (card sets, score sheets, props for specific activities)</li>
              <li>Host bundles with a mix of decor, printables, and small props</li>
              <li>Kids &amp; ND‑friendly variations with lower‑sensory options</li>
            </ul>
            <p className="text-xs text-gray-400">
              Specific kits rotate based on seasons, major events (like America 250 or Pulse 10), and popular themes.
            </p>
          </div>

          {/* Printables & digital */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Printer className="w-5 h-5 text-indigo-200" />
              <h2 className="text-lg sm:text-xl font-bold text-white">Printables &amp; Digital Downloads</h2>
            </div>
            <p className="text-sm text-gray-300">
              Instant downloads you can print at home or use digitally to make a basic night feel intentional.
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Invitations, menus, and &quot;Tonight&apos;s Vibe&quot; cards</li>
              <li>Trivia sheets, brackets, scorecards, and bingo‑style games</li>
              <li>Coloring pages, quiet activities, and &quot;corner&quot; resources</li>
              <li>Wall art and signage you can frame or hang with tape</li>
            </ul>
            <p className="text-xs text-gray-400">
              Many digital products will be theme‑agnostic (&quot;Game Night&quot;, &quot;Cozy Night In&quot;, etc.),
              so you can reuse them with different blueprints.
            </p>
          </div>

          {/* Custom design */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <Wand2 className="w-5 h-5 text-pink-200" />
              <h2 className="text-lg sm:text-xl font-bold text-white">Custom Design &amp; Bespoke Touches</h2>
            </div>
            <p className="text-sm text-gray-300">
              For hosts who want something more personal, we&apos;ll gradually offer custom design services:
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Custom invitations or menus themed to your exact night</li>
              <li>Personalized signage, banners, or tabletop cards</li>
              <li>Digital backdrops or overlays for virtual events</li>
              <li>Consulting calls to help you tailor a PartyLab blueprint</li>
            </ul>
            <p className="text-xs text-gray-400">
              These offers will likely appear on Shopify as &quot;custom&quot; listings or booked through contact forms,
              depending on complexity.
            </p>
          </div>

          {/* Future rentals / physical items */}
          <div className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/50 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <ImageIcon className="w-5 h-5 text-yellow-200" />
              <h2 className="text-lg sm:text-xl font-bold text-white">Future Rentals &amp; Physical Pieces</h2>
            </div>
            <p className="text-sm text-gray-300">
              As PartyLab grows, we&apos;d like to offer physical items that can be shipped or rented for special
              occasions.
            </p>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>Statement decor pieces or tablescapes you can borrow for a weekend</li>
              <li>Physical game sets or prop boxes for mystery nights</li>
              <li>Seasonal or event‑specific decor bundles (e.g., America 250 porch kits)</li>
              <li>Special items for Pulse 10, Glitched Launch, and other marquee events</li>
            </ul>
            <p className="text-xs text-gray-400">
              These offerings depend on demand, shipping feasibility, and storage—we&apos;ll roll them out slowly,
              focused on the things that make the most impact.
            </p>
          </div>
        </section>

        {/* Shopify callout / future featured products */}
        <section className="bg-black/40 backdrop-blur rounded-3xl p-6 border border-purple-700/40 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Browse Live Products on Shopify
          </h2>
          <p className="text-sm text-gray-300 max-w-2xl">
            The actual, up‑to‑date product list lives on our Shopify store. That&apos;s where you&apos;ll see what&apos;s
            in stock right now, read product details, and check out securely.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={shopifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>Open PartyLab Shop on Shopify</span>
              <span>→</span>
            </Link>
            <p className="text-[11px] text-gray-400">
              In the future, we may highlight featured products directly on this page by talking to Shopify&apos;s
              Storefront API—but for now, click through to see what&apos;s live.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
