"use client"

import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/enterprise", label: "For Enterprises" },
  { href: "/pricing", label: "Pricing" },
  { href: "https://docs.seedlink.dev", label: "Docs" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full px-6 py-6 md:px-12 md:py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-foreground">
          <svg
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="h-6 w-6"
            role="img"
            aria-label="SeedLink"
          >
            <ellipse cx="32" cy="49" rx="11" ry="9"/>
            <path d="M30 42 C30 30 31 25 32 21 C33 25 34 30 34 42 Z"/>
            <path d="M32 21 C22 22 14 14 16 4 C26 7 32 13 32 21 Z"/>
            <path d="M32 21 C42 22 50 14 48 4 C38 7 32 13 32 21 Z"/>
          </svg>
          <span className="font-serif text-xl italic">SeedLink</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-200 ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-foreground transition-all duration-200 ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="mt-6 flex flex-col gap-6 border-t border-border pt-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
