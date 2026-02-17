// src/components/ThemeLayout.tsx
import React from 'react'
import Link from 'next/link'

type ThemeLayoutProps = {
  title: string
  subtitle?: string
  emoji?: string
  children: React.ReactNode
}

export default function ThemeLayout({ title, subtitle, emoji, children }: ThemeLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-purple-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/themes" className="hover:text-white">Themes</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">{title}</span>
        </div>

        {/* Header */}
        <header className="bg-black/40 backdrop-blur rounded-2xl p-6 border border-purple-700/40 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-start space-x-4">
            {emoji && (
              <div className="text-4xl md:text-5xl">
                {emoji}
              </div>
            )}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {title}
              </h1>
              {subtitle && (
                <p className="text-gray-300 text-sm md:text-base max-w-xl">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg"
            >
              Unlock Full Theme
            </Link>
            <Link
              href="/shop"
              className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/20 border border-white/20 transition-all"
            >
              View Party Kits
            </Link>
          </div>
        </header>

        {children}
      </div>
    </div>
  )
}
