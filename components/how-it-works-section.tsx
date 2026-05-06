import Link from "next/link"
import { ConnectDemo } from "@/components/connect-demo"

type StepHeaderProps = {
  number: string
  title: string
  description: string
}

function StepHeader({ number, title, description }: StepHeaderProps) {
  return (
    <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
        Step {number}
      </div>
      <div>
        <h3 className="max-w-2xl font-serif text-3xl italic leading-[1.1] text-foreground md:text-4xl text-balance">
          {title}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70">{description}</p>
      </div>
    </div>
  )
}

function PlaceholderDemo({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <div className="cdemo">
      <div className="border border-border bg-[var(--cdemo-paper)] p-12 md:p-16">
        <div className="mx-auto max-w-md text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--cdemo-ink-muted)]">
            {label}
          </div>
          <h4
            className="mt-4 font-serif text-2xl italic leading-tight md:text-3xl"
            style={{ color: "var(--cdemo-ink)" }}
          >
            {title}
          </h4>
          <p className="mt-5 text-[14px] leading-relaxed" style={{ color: "var(--cdemo-ink-soft)" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
            How it works
          </p>
          <h2 className="mt-4 mx-auto max-w-3xl font-serif text-4xl italic leading-[1.05] text-foreground md:text-5xl lg:text-6xl text-balance">
            Three steps from credentials to compliant data
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-24 space-y-32 md:space-y-40">
          {/* Step 01 — Connect */}
          <div>
            <StepHeader
              number="01"
              title="Connect."
              description="Drop a credential-collection iframe into your app. Match it to your brand. Hand off the link token. Your users authenticate with their state-system account in a SeedLink-hosted modal — credentials never touch your servers."
            />
            <div className="mt-12">
              <ConnectDemo />
            </div>
          </div>

          {/* Step 02 — Standardized API */}
          <div>
            <StepHeader
              number="02"
              title="Call the standardized API."
              description="One set of endpoints — facilities, packages, plants, harvests, transfers, sales, lab results. Same shape across every state system. Build against one schema; SeedLink absorbs the differences."
            />
            <div className="mt-12">
              <PlaceholderDemo
                label="Coming next"
                title="Interactive request console"
                description="Pick an endpoint, click Run, watch a real JSON response render with the actual sandbox data — packaged in the SeedLink envelope. Building this now."
              />
            </div>
          </div>

          {/* Step 03 — Compliance handled */}
          <div>
            <StepHeader
              number="03"
              title="Compliance, handled."
              description="When a state system changes its API or rules, SeedLink absorbs the update behind the scenes. Field mapping, validation, and reporting formats stay consistent — no rewrites on your side."
            />
            <div className="mt-12">
              <PlaceholderDemo
                label="Coming next"
                title="Field-by-field normalization viewer"
                description="See raw Metrc and BioTrack responses on the left, the SeedLink unified shape on the right. Hover any field to see how it maps. The 'we handle the differences' claim, made visible."
              />
            </div>
          </div>
        </div>

        {/* Footer link out to docs */}
        <div className="mt-24 text-center">
          <Link
            href="/how-it-works"
            className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
          >
            See it in detail →
          </Link>
        </div>
      </div>
    </section>
  )
}
