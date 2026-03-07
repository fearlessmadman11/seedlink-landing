const steps = [
  {
    number: "01",
    title: "Connect once",
    description:
      "Authenticate with SeedLink instead of individual state systems.",
  },
  {
    number: "02",
    title: "Standardized API",
    description:
      "Use consistent endpoints for inventory, transfers, plants, packages, and reports.",
  },
  {
    number: "03",
    title: "State-aware compliance",
    description:
      "SeedLink handles state-specific rules, formats, and changes behind the scenes.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          How it works
        </h2>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-mono text-xs text-foreground/40">
                {step.number}
              </span>

              <h3 className="mt-4 font-mono text-sm uppercase tracking-wider text-foreground">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
