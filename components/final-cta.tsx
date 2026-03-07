import Link from "next/link"

export function FinalCTA() {
  return (
    <section id="cta" className="border-t border-border px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
          Build once. Integrate everywhere.
        </h2>

        <p className="mt-6 max-w-lg text-foreground/70">
          Start with a free sandbox account. Go live when you're ready.
        </p>

        <Link
          href="https://app.seedlink.dev/register"
          className="mt-10 inline-flex border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Get Started Free
        </Link>
      </div>
    </section>
  )
}
