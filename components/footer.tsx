import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 pt-24 pb-12 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center pb-12 border-b border-border">
          <Image
            src="/illustrations/emblem.png"
            alt="SeedLink emblem"
            width={520}
            height={520}
            className="h-32 w-32 md:h-40 md:w-40"
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="flex items-center gap-2.5 text-foreground">
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-5 w-5"
              role="img"
              aria-label="SeedLink"
            >
              <ellipse cx="32" cy="49" rx="11" ry="9"/>
              <path d="M30 42 C30 30 31 25 32 21 C33 25 34 30 34 42 Z"/>
              <path d="M32 21 C22 22 14 14 16 4 C26 7 32 13 32 21 Z"/>
              <path d="M32 21 C42 22 50 14 48 4 C38 7 32 13 32 21 Z"/>
            </svg>
            <span className="font-serif text-lg italic">SeedLink</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-8">
            <Link
              href="/how-it-works"
              className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
            >
              How it works
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
      </div>
    </footer>
  )
}
