// src/app/layout.tsx
import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PartyLab – Turn Any Obsession Into a Party',
  description: 'PartyLab is your party laboratory: themed party blueprints, recipes, games, kits, and live hosted events.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
          {/* Simple footer placeholder for now */}
          <footer className="bg-black/90 border-t border-purple-900/60 py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-400 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                © {new Date().getFullYear()} PartyLab. All rights reserved.
              </div>
              <div className="space-x-4">
                <Link href="/terms" className="hover:text-purple-200">Terms</Link>
                <Link href="/privacy" className="hover:text-purple-200">Privacy</Link>
                <Link href="/ip-policy" className="hover:text-purple-200">IP &amp; Licensing</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
