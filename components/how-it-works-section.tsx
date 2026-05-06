import Link from "next/link"
import type { ReactNode } from "react"
import { ConnectDemo } from "@/components/connect-demo"
import { CaptureDemo } from "@/components/capture-demo"
import { StandardizeDemo } from "@/components/standardize-demo"

type StepLayout = "left-text" | "right-text" | "centered"

type StepRowProps = {
  number: string
  title: string
  description: string
  demo: ReactNode
  layout?: StepLayout
}

function StepRow({ number, title, description, demo, layout = "left-text" }: StepRowProps) {
  if (layout === "centered") {
    return (
      <div>
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
            Step {number}
          </div>
          <h3 className="mt-4 font-serif text-4xl italic leading-[1.05] text-foreground md:text-5xl lg:text-6xl text-balance">
            {title}
          </h3>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 lg:text-[17px]">
            {description}
          </p>
        </div>
        <div className="mt-16 mx-auto max-w-5xl">{demo}</div>
      </div>
    )
  }

  const textOnRight = layout === "right-text"

  return (
    <div
      className={`grid items-start gap-12 lg:gap-16 xl:gap-20 ${
        textOnRight ? "lg:grid-cols-[1.2fr_1fr]" : "lg:grid-cols-[1fr_1.2fr]"
      }`}
    >
      {/* TEXT — sticky on desktop so it stays in view as the demo scrolls */}
      <div className={`lg:sticky lg:top-32 ${textOnRight ? "lg:order-2" : ""}`}>
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

      {/* DEMO */}
      <div className={`min-w-0 ${textOnRight ? "lg:order-1" : ""}`}>{demo}</div>
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

        {/* Steps — alternating layout: left, center, right */}
        <div className="mt-24 space-y-32 md:space-y-40">
          <StepRow
            number="01"
            title="Connect."
            description="A drop-in credential-collection iframe. Theme it to your brand; customer credentials stay in our vault, never touch your servers."
            demo={<ConnectDemo />}
            layout="left-text"
          />

          <StepRow
            number="02"
            title="Standardize."
            description="One unified data model across Metrc, BioTrack, and every system we support. Build against one schema — we absorb provider-specific quirks behind the scenes."
            demo={<StandardizeDemo />}
            layout="centered"
          />

          <StepRow
            number="03"
            title="Capture."
            description="A drop-in scanner SDK for cultivators and processors. Read RFID tags, validate against your connected provider in real time, and write back to compliance — without leaving your app."
            demo={<CaptureDemo />}
            layout="right-text"
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
