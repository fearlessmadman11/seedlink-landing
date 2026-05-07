import type { ReactNode } from "react"
import { ConnectDemo } from "@/components/connect-demo"
import { StandardizeDemo } from "@/components/standardize-demo"
import { CaptureDemo } from "@/components/capture-demo"

type StepLayout = "left-text" | "right-text" | "centered"

type StepRowProps = {
  eyebrow: string
  title: string
  description: string
  demo: ReactNode
  layout?: StepLayout
}

function StepRow({ eyebrow, title, description, demo, layout = "left-text" }: StepRowProps) {
  if (layout === "centered") {
    return (
      <div>
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
            {eyebrow}
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
      <div className={`lg:sticky lg:top-32 ${textOnRight ? "lg:order-2" : ""}`}>
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
          {eyebrow}
        </div>
        <h3 className="mt-4 font-serif text-4xl italic leading-[1.05] text-foreground md:text-5xl lg:text-6xl text-balance">
          {title}
        </h3>
        <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 lg:text-[17px]">
          {description}
        </p>
      </div>

      <div className={`min-w-0 ${textOnRight ? "lg:order-1" : ""}`}>{demo}</div>
    </div>
  )
}

export function HowItWorksSection() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-32 md:space-y-40">
          <StepRow
            eyebrow="Connect SDK"
            title="Connect."
            description="A drop-in iframe for collecting customer credentials. Theme it to your brand. Credentials stay in our vault, never on your servers."
            demo={<ConnectDemo />}
            layout="left-text"
          />

          <StepRow
            eyebrow="Standardized API"
            title="Standardize."
            description="One data model across every state compliance provider. Build against one schema. We handle the differences."
            demo={<StandardizeDemo />}
            layout="centered"
          />

          <StepRow
            eyebrow="Capture SDK"
            title="Capture."
            description="A drop-in scanner SDK for cultivators and processors. Read RFID tags, validate against your connected provider in real time, and write back to compliance without leaving your app."
            demo={<CaptureDemo />}
            layout="right-text"
          />
        </div>
      </div>
    </section>
  )
}
