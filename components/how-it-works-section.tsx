import Link from "next/link"
import type { ReactNode } from "react"
import { ConnectDemo } from "@/components/connect-demo"

type StepRowProps = {
  number: string
  title: string
  description: string
  demo: ReactNode
}

function StepRow({ number, title, description, demo }: StepRowProps) {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 xl:gap-20">
      {/* LEFT — text block, all left-aligned, tight rhythm */}
      <div className="lg:sticky lg:top-32">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
          Step {number}
        </div>
        <h3 className="mt-4 font-serif text-4xl italic leading-[1.05] text-foreground md:text-5xl lg:text-6xl text-balance">
          {title}
        </h3>
        <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 lg:text-[17px]">
          {description}
        </p>
      </div>

      {/* RIGHT — demo */}
      <div className="min-w-0">{demo}</div>
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
      <div
        className="border border-border bg-[var(--cdemo-paper)] p-12 md:p-16"
        style={{ minHeight: 480 }}
      >
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--cdemo-ink-muted)]">
            {label}
          </div>
          <h4
            className="mt-4 font-serif text-2xl italic leading-tight md:text-3xl"
            style={{ color: "var(--cdemo-ink)" }}
          >
            {title}
          </h4>
          <p
            className="mt-5 max-w-md text-[14px] leading-relaxed"
            style={{ color: "var(--cdemo-ink-soft)" }}
          >
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
        {/* Section header — centered intro */}
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
            How it works
          </p>
          <h2 className="mt-4 mx-auto max-w-3xl font-serif text-4xl italic leading-[1.05] text-foreground md:text-5xl lg:text-6xl text-balance">
            Three steps from credentials to compliant data
          </h2>
        </div>

        {/* Steps — text-left + demo-right */}
        <div className="mt-24 space-y-32 md:space-y-40">
          <StepRow
            number="01"
            title="Connect."
            description="Drop a credential-collection iframe into your app. Match it to your brand. Hand off the link token. Your users authenticate with their state-system account in a SeedLink-hosted modal — credentials never touch your servers."
            demo={<ConnectDemo />}
          />

          <StepRow
            number="02"
            title="Call the standardized API."
            description="One set of endpoints — facilities, packages, plants, harvests, transfers, sales, lab results. Same shape across every state system. Build against one schema; SeedLink absorbs the differences."
            demo={
              <PlaceholderDemo
                label="Coming next"
                title="Interactive request console"
                description="Pick an endpoint, click Run, watch a real JSON response render with the actual sandbox data — packaged in the SeedLink envelope. Building this now."
              />
            }
          />

          <StepRow
            number="03"
            title="Compliance, handled."
            description="When a state system changes its API or rules, SeedLink absorbs the update behind the scenes. Field mapping, validation, and reporting formats stay consistent — no rewrites on your side."
            demo={
              <PlaceholderDemo
                label="Coming next"
                title="Field-by-field normalization viewer"
                description="See raw Metrc and BioTrack responses on the left, the SeedLink unified shape on the right. Hover any field to see how it maps. The 'we handle the differences' claim, made visible."
              />
            }
          />
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
