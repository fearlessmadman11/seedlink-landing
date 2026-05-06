import Image from "next/image"
import { PythonLogo, TypeScriptLogo } from "@/components/logos"

type FeatureProps = {
  eyebrow: string
  title: string
  body: string
  image: { src: string; alt: string; ratio: number }
  reverse?: boolean
  children?: React.ReactNode
}

function Feature({ eyebrow, title, body, image, reverse, children }: FeatureProps) {
  return (
    <div
      className={`grid items-center gap-12 md:gap-20 ${
        reverse ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.2fr]"
      }`}
    >
      <div className={reverse ? "md:order-2" : "md:order-1"}>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h3 className="mt-5 font-serif text-3xl italic text-foreground md:text-4xl text-balance">
          {title}
        </h3>
        <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
          {body}
        </p>
        {children}
      </div>

      <div className={reverse ? "md:order-1" : "md:order-2"}>
        <div
          className="relative mx-auto w-full"
          style={{ maxWidth: image.ratio < 1 ? 360 : 480 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000 / image.ratio}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  )
}

export function ForDevelopers() {
  return (
    <section className="border-t border-border px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
            Built for builders
          </p>
          <h2 className="mt-6 font-serif text-4xl italic text-foreground md:text-5xl lg:text-6xl text-balance">
            For developers and agents
          </h2>
        </div>

        <div className="mt-32 space-y-32 md:space-y-40">
          <Feature
            eyebrow="MCP"
            title="Scoped, audited access for AI agents"
            body="Hook AI agents directly into seed-to-sale data with a Model Context Protocol endpoint. Tool calls, scoped credentials, and audit logs out of the box — read-only by design."
            image={{
              src: "/illustrations/engraved/mcp.png",
              alt: "Ornate brass key — MCP",
              ratio: 1.0,
            }}
          />

          <Feature
            eyebrow="Sandbox"
            title="A free reference catalog for every developer"
            body="Build and test against a full sandbox with realistic state-system fixtures — two facilities, ten packages, harvests, transfers, sales, lab results. Identical schema to production. Sandbox is free for every developer."
            reverse
            image={{
              src: "/illustrations/engraved/item.png",
              alt: "Open botanical reference book — Sandbox",
              ratio: 1.2,
            }}
          />

          <Feature
            eyebrow="Connect SDK"
            title="Graft your application to your users' compliance accounts"
            body="A pre-built component for collecting sensitive credentials and authenticating users across Metrc, BioTrack, and every system we support. Drop it in, hand off the link token, and the iframe handles the rest."
            image={{
              src: "/illustrations/engraved/connection.png",
              alt: "Two grafted cannabis stems with shared roots — Connect SDK",
              ratio: 0.6,
            }}
          >
            <div className="mt-8 flex items-center gap-5 text-foreground/60">
              <TypeScriptLogo className="h-6 w-6" />
              <PythonLogo className="h-6 w-6" />
            </div>
          </Feature>
        </div>
      </div>
    </section>
  )
}
