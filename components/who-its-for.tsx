const audiences = [
  "Cannabis SaaS platforms",
  "POS & ERP systems",
  "Marketplaces & logistics providers",
  "Internal tools for operators and MSOs",
]

export function WhoItsFor() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          Who it&apos;s for
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 max-w-2xl">
          {audiences.map((audience) => (
            <div
              key={audience}
              className="border border-border px-6 py-5 transition-colors hover:border-accent/50"
            >
              <span className="font-mono text-sm text-foreground/90">
                {audience}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
