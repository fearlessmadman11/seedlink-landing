const benefits = [
  "Unified data model across seed-to-sale platforms",
  "Built for regulated, high-risk environments",
  "Designed for engineers, not compliance consultants",
  "Reduces integration maintenance and vendor lock-in",
  "Future-proofed for new states and systems",
]

export function WhySeedLink() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          Why SeedLink
        </h2>

        <ul className="mt-12 max-w-2xl space-y-6">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-4 text-foreground/80"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
              <span className="text-base">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
