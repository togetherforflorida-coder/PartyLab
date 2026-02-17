// src/components/NavBar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, FlaskConical } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Themes', href: '/themes' },
  { name: 'Events', href: '/events' },
  { name: 'Shop', href: '/shop' },
  { name: 'Custom Orders', href: '/custom-orders' },
  { name: 'Pricing', href: '/pricing' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="bg-gradient-to-r from-purple-950 via-indigo-950 to-purple-950 border-b border-purple-900/60 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-purple-600/80 border border-purple-300/40 shadow-lg">
            <FlaskConical className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-white">PartyLab</span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-purple-200">
              Party Laboratory
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={
                'text-sm font-medium transition-colors ' +
                (isActive(link.href)
                  ? 'text-white border-b-2 border-pink-400 pb-1'
                  : 'text-gray-300 hover:text-white')
              }
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-purple-800/70 mx-1" />
          <Link
            href="/login"
            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all shadow-md hover:shadow-purple-500/40"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 border-t border-purple-900/60">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  'block px-3 py-2 rounded-lg text-sm font-medium transition-colors ' +
                  (isActive(link.href)
                    ? 'bg-purple-800/70 text-white'
                    : 'text-gray-300 hover:bg-purple-900/60 hover:text-white')
                }
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-purple-900/60 mt-2" />
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-purple-900/60 hover:text-white"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="block text-center px-3 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
