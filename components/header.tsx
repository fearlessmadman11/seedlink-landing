"use client"

import { useState } from "react"
import Link from "next/link"

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/features", label: "Features" },
  { href: "/enterprise", label: "For Enterprises" },
  { href: "/pricing", label: "Pricing" },
  { href: "https://docs.seedlink.dev", label: "Docs" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full px-6 py-6 md:px-12 md:py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="font-serif text-xl italic text-foreground">
          SeedLink
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

        <Link
          href="https://app.seedlink.dev/register"
          className="hidden border border-accent px-5 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:inline-flex"
        >
          Get Started
        </Link>

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
          <Link
            href="https://app.seedlink.dev/register"
            onClick={() => setMobileOpen(false)}
            className="inline-flex w-fit border border-accent px-5 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Get Started
          </Link>
        </nav>
      )}
    </header>
  )
}
