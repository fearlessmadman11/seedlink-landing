import Link from "next/link"

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Processors, dispensaries, and cultivators link their state-system credentials through the Connect SDK — a drop-in iframe that authenticates against Metrc, BioTrack, and other seed-to-sale platforms.",
  },
  {
    number: "02",
    title: "Standardized API",
    description:
      "Call one set of endpoints — packages, plants, transfers, harvests, reports — and SeedLink handles every state system on the other side. Your code never has to know the difference.",
  },
  {
    number: "03",
    title: "Compliance, handled",
    description:
      "When a state system changes its API or rules, SeedLink absorbs the update behind the scenes. Field mapping, validation, and reporting formats stay consistent — no rewrites.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
          How it works
        </p>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
          Three steps from credentials to compliant data
        </h2>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="bg-background p-8">
              <span className="font-mono text-xs text-foreground/40">
                {step.number}
              </span>
              <h3 className="mt-4 font-serif text-2xl italic text-foreground">
                {step.title}
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex font-mono text-sm text-foreground/50 transition-colors hover:text-foreground"
          >
            See it in detail →
          </Link>
        </div>
      </div>
    </section>
  )
}
