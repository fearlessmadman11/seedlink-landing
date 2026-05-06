import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const platformIncludes = [
  "100,000 API requests/month included",
  "$0.005 per request beyond included volume",
  "Sandbox + production environments",
  "Unified API across Metrc and BioTrack",
  "Connect SDK, Webhooks, MCP endpoint",
  "Common Data Model & state-system normalization",
  "Standard support",
]

const enterpriseIncludes = [
  "Volume pricing for high-request workloads",
  "SSO / SAML, audit logging",
  "Dedicated environments and isolated infrastructure",
  "Custom SLAs and dedicated support",
  "Custom contracts and procurement",
]

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-accent"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M3 8.5L6.5 12L13 4" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <h1 className="max-w-4xl font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Flat platform fee. Pay only for what you use.
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-foreground/70 md:text-lg">
              One plan, predictable overage pricing. Sandbox is free for every
              developer — pay only when you go live.
            </p>
          </div>
        </section>

        {/* Plan Cards */}
        <section className="px-6 pb-32 md:px-12">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* Platform */}
            <div className="flex flex-col border border-accent p-8">
              <div className="flex items-center gap-3">
                <h2 className="font-mono text-sm uppercase tracking-wider text-foreground/60">
                  Platform
                </h2>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Recommended
                </span>
              </div>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-mono text-4xl text-foreground">$299</span>
                <span className="font-mono text-sm text-foreground/50">
                  /month
                </span>
              </div>
              <p className="mt-3 font-mono text-sm text-foreground/70">
                + <span className="text-foreground">$0.005</span> per API
                request beyond 100K/mo
              </p>
              <p className="mt-2 font-mono text-xs text-accent">
                Sandbox is always free — only pay when you ship to production.
              </p>

              <p className="mt-6 text-sm text-foreground/60">
                Everything you need to ship a production seed-to-sale
                integration.
              </p>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {platformIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col border border-border p-8">
              <h2 className="font-mono text-sm uppercase tracking-wider text-foreground/60">
                Enterprise
              </h2>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-mono text-4xl text-foreground">
                  Custom
                </span>
              </div>
              <p className="mt-3 font-mono text-sm text-foreground/50">
                Tailored for your operation
              </p>

              <p className="mt-6 text-sm text-foreground/60">
                For high-volume customers, regulated teams, and operators that
                need dedicated infrastructure.
              </p>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {enterpriseIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Math callout */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              How the math works
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl">
              Predictable, even as you scale
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  volume: "50K requests/mo",
                  cost: "$299",
                  note: "Well under the included allowance — flat platform fee.",
                },
                {
                  volume: "250K requests/mo",
                  cost: "$1,049",
                  note: "$299 platform + 150K × $0.005 overage.",
                },
                {
                  volume: "1M requests/mo",
                  cost: "$4,799",
                  note: "$299 platform + 900K × $0.005 overage. Talk to us before you hit this — Enterprise volume pricing applies.",
                },
              ].map((row) => (
                <div
                  key={row.volume}
                  className="border border-border p-8 transition-colors hover:border-accent/50"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                    {row.volume}
                  </p>
                  <p className="mt-4 font-mono text-3xl text-foreground">
                    {row.cost}
                  </p>
                  <p className="mt-4 text-sm text-foreground/60">{row.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
