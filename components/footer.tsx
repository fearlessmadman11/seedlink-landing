import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Link href="/" className="font-serif text-lg italic text-foreground">
          SeedLink
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/pricing"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <p className="font-mono text-xs text-foreground/40">
          © {new Date().getFullYear()} SeedLink
        </p>
      </div>
    </footer>
  )
}
