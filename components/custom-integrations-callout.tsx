import Link from "next/link"

export function CustomIntegrationsCallout() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
              Custom Integrations
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
              Not on the platform? We'll build it.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
              SeedLink is a cannabis system integrations company. The platform
              is what we've productized. For everything else, we engage on a
              per-project basis.
            </p>
          </div>
          <Link
            href="/custom-integrations"
            className="inline-flex shrink-0 items-center gap-2 border border-border px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            See custom work →
          </Link>
        </div>
      </div>
    </section>
  )
}
