import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <Link href="/" className="font-serif text-lg italic text-foreground">
          SeedLink
        </Link>

        <nav className="flex flex-wrap items-center gap-8">
          <Link
            href="/how-it-works"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="/features"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/enterprise"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Enterprise
          </Link>
          <Link
            href="/pricing"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="https://docs.seedlink.dev"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="mailto:sales@seedlink.dev"
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
