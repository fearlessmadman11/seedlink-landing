"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="w-full px-6 py-6 md:px-12 md:py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="font-serif text-xl italic text-foreground">
          SeedLink
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="#how-it-works"
            className="font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="#integrations"
            className="font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            Integrations
          </Link>
          <Link
            href="#developers"
            className="font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            Developers
          </Link>
          <Link
            href="/pricing"
            className="font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="font-mono text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            Docs
          </Link>
        </nav>

        <Link
          href="#cta"
          className="hidden border border-accent px-5 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground md:inline-flex"
        >
          Request Access
        </Link>
      </div>
    </header>
  )
}
