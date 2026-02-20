// src/components/NavBar.tsx
'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  Menu,
  X,
  FlaskConical,
  User,
  LogOut,
  ChevronDown,
} from 'lucide-react'
import { supabaseBrowser } from '@/lib/supabaseClient'

type ThemeLink = {
  name: string
  href: string
}

type DropdownItem = {
  name: string
  href: string
}

// Member themes dropdown (logged-in)
const memberThemeLinks: ThemeLink[] = [
  { name: 'By Category', href: '/member/themes' },
  { name: 'Movies', href: '/themes/movies' },
  { name: 'TV & Cartoons', href: '/themes/tv-cartoons' },
  { name: 'Books', href: '/themes/books' },
  { name: 'Anime', href: '/themes/anime' },
  { name: 'Sports', href: '/themes/sports' },
  { name: 'Holidays', href: '/themes/holidays' },
  { name: 'Games / Game Night', href: '/member/themes/game-night' },
  { name: 'Religious & Spiritual', href: '/themes/religious' },
]

// Logged-out themes preview dropdown items — per-category previews
const loggedOutThemePreviewLinks: DropdownItem[] = [
  { name: 'Game Night', href: '/themes/game-night-preview' },
  { name: 'Movies & TV', href: '/themes/movies-preview' },
  { name: 'Sports Parties', href: '/themes/sports-preview' },
  { name: 'Kids & Family', href: '/themes/kids-family-preview' },
  { name: 'Holidays', href: '/themes/holidays-preview' },
  { name: 'Religious & Spiritual', href: '/themes/religious-preview' },
]

// Logged-out "Other Celebrations" dropdown items
const celebrationLinks: DropdownItem[] = [
  { name: 'Birthdays', href: '/celebrations/birthdays' },
  { name: 'Corporate', href: '/celebrations/corporate' },
  { name: 'Weddings', href: '/celebrations/weddings' },
  { name: 'Celebration of Life', href: '/celebrations/celebration-of-life' },
  { name: 'Bar/Bat Mitzvahs', href: '/celebrations/bar-bat-mitzvahs' },
  { name: 'Quinceañeras', href: '/celebrations/quinceaneras' },
  { name: 'Pets', href: '/celebrations/pets' },
  { name: 'Other Celebrations', href: '/celebrations/other' },
]

// Logged-out Labs dropdown items (public pages)
const publicLabsLinks: DropdownItem[] = [
  { name: 'All Labs Overview', href: '/labs' },
  { name: 'Dating & Meetup Lab', href: '/dating-meetups' },
  { name: 'Social Media Lab', href: '/social-media' },
  { name: 'Cooking Lab', href: '/cooking-lab' },
  { name: 'Study Party Lab', href: '/study-lab' },
  { name: 'Music & Nightlife Lab', href: '/music-nightlife' },
]

// Logged-in Labs dropdown items (member areas)
const memberLabsLinks: DropdownItem[] = [
  { name: 'Labs Overview', href: '/member/labs' },
  { name: 'Dating & Meetup Lab', href: '/member/labs/dating' },
  { name: 'Social Media Lab', href: '/member/labs/social-media' },
  { name: 'Cooking Lab', href: '/member/labs/cooking' },
  { name: 'Study Party Lab', href: '/member/labs/study' },
  { name: 'Music & Nightlife Lab', href: '/member/labs/music-nightlife' },
]

export default function NavBar() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loadingUser, setLoadingUser] = useState(true)
  const [themesOpen, setThemesOpen] = useState(false)
  const [celebrationsOpen, setCelebrationsOpen] = useState(false)
  const [labsOpen, setLabsOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabaseBrowser.auth.getSession()
      setUser(session?.user ?? null)
      setLoadingUser(false)
    }

    getUser()

    const { data: subscription } = supabaseBrowser.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    return () => {
      subscription.subscription?.unsubscribe?.()
    }
  }, [])

  const handleLogout = async () => {
    await supabaseBrowser.auth.signOut()
    setUser(null)
    router.push('/')
  }

  const isLoggedIn = !!user
  const logoHref = isLoggedIn ? '/member/dashboard' : '/'

  return (
    <nav className="bg-gradient-to-r from-purple-950 via-indigo-950 to-purple-950 border-b border-purple-900/60 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={logoHref} className="flex items-center space-x-2">
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              {/* Logged-in: Themes dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setThemesOpen((prev) => !prev)
                    setCelebrationsOpen(false)
                    setLabsOpen(false)
                  }}
                  className={
                    'inline-flex items-center space-x-1 text-sm font-medium transition-colors ' +
                    (pathname.startsWith('/themes') ||
                    pathname.startsWith('/member/themes/game-night') ||
                    pathname.startsWith('/member/themes')
                      ? 'text-white border-b-2 border-pink-400 pb-1'
                      : 'text-gray-300 hover:text-white')
                  }
                >
                  <span>Themes</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {themesOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-slate-950/95 border border-purple-700/60 rounded-xl shadow-lg py-2 text-xs text-gray-200 z-50">
                    {memberThemeLinks.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setThemesOpen(false)}
                        className={
                          'block px-3 py-1.5 hover:bg-purple-900/60 ' +
                          (isActive(t.href) ? 'text-white' : 'text-gray-200')
                        }
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Logged-in: Labs dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLabsOpen((prev) => !prev)
                    setThemesOpen(false)
                    setCelebrationsOpen(false)
                  }}
                  className={
                    'inline-flex items-center space-x-1 text-sm font-medium transition-colors ' +
                    (pathname.startsWith('/member/labs')
                      ? 'text-white border-b-2 border-sky-400 pb-1'
                      : 'text-sky-200/80 hover:text-sky-200')
                  }
                >
                  <span>Labs</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {labsOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-slate-950/95 border border-sky-700/60 rounded-xl shadow-lg py-2 text-xs text-gray-200 z-50">
                    {memberLabsLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setLabsOpen(false)}
                        className="block px-3 py-1.5 hover:bg-slate-900/70"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Member: Activities, Events, Shop, Custom Orders, Pricing, Adult */}
              <Link
                href="/member/activities"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/member/activities')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Activities
              </Link>

              <Link
                href="/member/events"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/member/events')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Events
              </Link>

              <Link
                href="/shop"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/shop')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Shop
              </Link>

              <Link
                href="/custom-orders"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/custom-orders')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Custom Orders
              </Link>

              <Link
                href="/pricing"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/pricing')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Pricing
              </Link>

              <Link
                href="/adult"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/adult')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Adult (18+)
              </Link>

              <div className="h-6 w-px bg-purple-800/70 mx-1" />

              {/* Right side auth (logged in) */}
              {loadingUser ? (
                <span className="text-xs text-gray-400">Checking session…</span>
              ) : (
                <>
                  <Link
                    href="/member/dashboard"
                    className="inline-flex items-center space-x-1 text-sm font-medium text-gray-200 hover:text-white"
                  >
                    <User className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    href="/member/account"
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Account
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Log out</span>
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              {/* Logged-out: Themes preview dropdown (previews + Browse all) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setThemesOpen((prev) => !prev)
                    setCelebrationsOpen(false)
                    setLabsOpen(false)
                  }}
                  className="inline-flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <span>Themes</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {themesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-950/95 border border-purple-700/60 rounded-xl shadow-lg py-2 text-xs text-gray-200 z-50">
                    {loggedOutThemePreviewLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setThemesOpen(false)}
                        className="block px-3 py-1.5 hover:bg-purple-900/60"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="border-t border-purple-800/60 mt-2 pt-2 px-3">
                      <Link
                        href="/themes"
                        onClick={() => setThemesOpen(false)}
                        className="block py-1.5 text-[11px] text-purple-200 hover:text-purple-100 underline underline-offset-2"
                      >
                        Browse all themes →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/about')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                About
              </Link>

              <Link
                href="/activities"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/activities')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Activities
              </Link>

              <Link
                href="/tournaments"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/tournaments')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Tournaments
              </Link>

              <Link
                href="/events"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/events')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Events
              </Link>

              <Link
                href="/shop"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/shop')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Shop
              </Link>

              <Link
                href="/custom-orders"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/custom-orders')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Custom Orders
              </Link>

              <Link
                href="/pricing"
                className={
                  'text-sm font-medium transition-colors ' +
                  (isActive('/pricing')
                    ? 'text-white border-b-2 border-pink-400 pb-1'
                    : 'text-gray-300 hover:text-white')
                }
              >
                Pricing
              </Link>

              {/* Logged-out: Labs (public) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setLabsOpen((prev) => !prev)
                    setThemesOpen(false)
                    setCelebrationsOpen(false)
                  }}
                  className={
                    'inline-flex items-center space-x-1 text-sm font-medium transition-colors ' +
                    (pathname.startsWith('/labs') ||
                    pathname.startsWith('/dating-meetups') ||
                    pathname.startsWith('/social-media') ||
                    pathname.startsWith('/cooking-lab') ||
                    pathname.startsWith('/study-lab') ||
                    pathname.startsWith('/music-nightlife')
                      ? 'text-white border-b-2 border-sky-400 pb-1'
                      : 'text-sky-200/80 hover:text-sky-200')
                  }
                >
                  <span>Labs</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {labsOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-950/95 border border-sky-700/60 rounded-xl shadow-lg py-2 text-xs text-gray-200 z-50">
                    {publicLabsLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setLabsOpen(false)}
                        className="block px-3 py-1.5 hover:bg-slate-900/70"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Logged-out: Other Celebrations */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setCelebrationsOpen((prev) => !prev)
                    setThemesOpen(false)
                    setLabsOpen(false)
                  }}
                  className="inline-flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  <span>Other Celebrations</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {celebrationsOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-slate-950/95 border border-purple-700/60 rounded-xl shadow-lg py-2 text-xs text-gray-200 z-50">
                    {celebrationLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setCelebrationsOpen(false)}
                        className="block px-3 py-1.5 hover:bg-purple-900/60"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-purple-800/70 mx-1" />

              {/* Logged-out auth */}
              <Link
                href="/login"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all shadow-md hover:shadow-purple-500/40"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-white"
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 border-t border-purple-900/60">
          <div className="px-4 pt-2 pb-4 space-y-2 text-sm text-gray-200">
            {isLoggedIn ? (
              <>
                {/* Logged-in mobile themes */}
                <details className="bg-black/30 rounded-lg border border-purple-800/60" open>
                  <summary className="px-3 py-2 cursor-pointer flex items-center justify-between">
                    <span>Themes</span>
                    <ChevronDown className="w-4 h-4" />
                  </summary>
                  <div className="px-3 pb-2 space-y-1 text-xs">
                    {memberThemeLinks.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setOpen(false)}
                        className={
                          'block px-2 py-1 rounded hover:bg-purple-900/60 ' +
                          (isActive(t.href) ? 'text-white' : 'text-gray-200')
                        }
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Logged-in mobile Labs */}
                <details className="bg-black/30 rounded-lg border border-sky-800/60">
                  <summary className="px-3 py-2 cursor-pointer flex items-center justify-between">
                    <span>Labs</span>
                    <ChevronDown className="w-4 h-4" />
                  </summary>
                  <div className="px-3 pb-2 space-y-1 text-xs">
                    {memberLabsLinks.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setOpen(false)}
                        className="block px-2 py-1 rounded hover:bg-slate-900/70"
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </details>

                <Link
                  href="/member/activities"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Activities
                </Link>
                <Link
                  href="/member/events"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Events
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Shop
                </Link>
                <Link
                  href="/custom-orders"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Custom Orders
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Pricing
                </Link>
                <Link
                  href="/adult"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Adult (18+)
                </Link>

                <div className="pt-2 border-t border-purple-900/60 mt-2" />

                {loadingUser ? (
                  <div className="text-xs text-gray-400 px-3 py-2">
                    Checking session…
                  </div>
                ) : (
                  <>
                    <Link
                      href="/member/dashboard"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/member/account"
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                    >
                      Account
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout()
                        setOpen(false)
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-purple-900/60"
                    >
                      Log out
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                {/* Logged-out mobile themes preview */}
                <details className="bg-black/30 rounded-lg border border-purple-800/60" open>
                  <summary className="px-3 py-2 cursor-pointer flex items-center justify-between">
                    <span>Themes</span>
                    <ChevronDown className="w-4 h-4" />
                  </summary>
                  <div className="px-3 pb-2 space-y-1 text-xs">
                    {loggedOutThemePreviewLinks.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setOpen(false)}
                        className="block px-2 py-1 rounded hover:bg-purple-900/60"
                      >
                        {t.name}
                      </Link>
                    ))}
                    <div className="border-t border-purple-800/60 mt-2 pt-2">
                      <Link
                        href="/themes"
                        onClick={() => setOpen(false)}
                        className="block px-2 py-1 text-[11px] text-purple-200 hover:text-purple-100 underline underline-offset-2"
                      >
                        Browse all themes →
                      </Link>
                    </div>
                  </div>
                </details>

                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  About
                </Link>
                <Link
                  href="/activities"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Activities
                </Link>
                <Link
                  href="/tournaments"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Tournaments
                </Link>
                <Link
                  href="/events"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Events
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Shop
                </Link>
                <Link
                  href="/custom-orders"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Custom Orders
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Pricing
                </Link>

                {/* Logged-out mobile Labs */}
                <details className="bg-black/30 rounded-lg border border-sky-800/60">
                  <summary className="px-3 py-2 cursor-pointer flex items-center justify-between">
                    <span>Labs</span>
                    <ChevronDown className="w-4 h-4" />
                  </summary>
                  <div className="px-3 pb-2 space-y-1 text-xs">
                    {publicLabsLinks.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setOpen(false)}
                        className="block px-2 py-1 rounded hover:bg-slate-900/70"
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </details>

                {/* Logged-out mobile Other Celebrations */}
                <details className="bg-black/30 rounded-lg border border-purple-800/60">
                  <summary className="px-3 py-2 cursor-pointer flex items-center justify-between">
                    <span>Other Celebrations</span>
                    <ChevronDown className="w-4 h-4" />
                  </summary>
                  <div className="px-3 pb-2 space-y-1 text-xs">
                    {celebrationLinks.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setOpen(false)}
                        className="block px-2 py-1 rounded hover:bg-purple-900/60"
                      >
                        {t.name}
                      </Link>
                    ))}
                  </div>
                </details>

                <div className="pt-2 border-t border-purple-900/60 mt-2" />

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-purple-900/60"
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="block text-center px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600 shadow-md"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
