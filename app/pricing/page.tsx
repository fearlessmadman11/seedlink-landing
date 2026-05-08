import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const developerHighlights = [
  "100,000 API requests included",
  "Live access in supported states",
  "Scheduled syncs (every 15 min)",
  "Connect SDK and Webhooks",
]

const enterpriseHighlights = [
  "Everything in Developer",
  "SSO / SAML and audit logging",
  "Real-time data delivery",
  "Dedicated support and SLAs",
]

type ComparisonValue = boolean | string

const comparisonRows: { feature: string; dev: ComparisonValue; ent: ComparisonValue }[] = [
  { feature: "Price", dev: "$299/mo", ent: "Custom" },
  { feature: "API requests included", dev: "100,000/mo", ent: "Volume pricing" },
  { feature: "Per API Request Price", dev: "$0.005 / request after 100K", ent: "Negotiated" },
  { feature: "Sandbox", dev: true, ent: true },
  { feature: "Live providers", dev: true, ent: true },
  { feature: "Connect SDK", dev: true, ent: true },
  { feature: "Webhooks", dev: true, ent: true },
  { feature: "Data delivery", dev: "Scheduled (15 min)", ent: "Real-time where available" },
  { feature: "SSO / SAML", dev: false, ent: true },
  { feature: "Audit logging", dev: false, ent: true },
  { feature: "Custom SLAs", dev: false, ent: true },
  { feature: "Support", dev: "Standard", ent: "Dedicated" },
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

function MinusIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-foreground/30"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M4 8h8" />
    </svg>
  )
}

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (value === true) return <CheckIcon />
  if (value === false) return <MinusIcon />
  return <span className="text-sm text-foreground/70">{value}</span>
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
              Pricing built for cannabis software.
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-foreground/70 md:text-lg">
              Two plans. Sandbox is always free. Pay only for live, production
              integrations.
            </p>
          </div>
        </section>

        {/* Plan Cards */}
        <section className="px-6 pb-24 md:px-12 md:pb-28">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* Developer */}
            <div className="flex flex-col border border-border p-8">
              <h2 className="font-mono text-sm uppercase tracking-wider text-foreground/60">
                Developer
              </h2>

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

              <p className="mt-6 text-sm text-foreground/60">
                For individual developers, startups, and teams shipping their
                first integration.
              </p>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {developerHighlights.map((item) => (
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
                need SSO, real-time data, or a custom agreement.
              </p>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {enterpriseHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              Plan comparison
            </p>
            <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
              Every feature, side by side.
            </h2>

            <div className="mt-12 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 pr-4 text-left font-mono text-xs uppercase tracking-wider text-foreground/50">
                      Feature
                    </th>
                    <th className="py-4 pr-4 text-left font-mono text-xs uppercase tracking-wider text-foreground/50">
                      Developer
                    </th>
                    <th className="py-4 text-left font-mono text-xs uppercase tracking-wider text-foreground/50">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-border/40"
                    >
                      <td className="py-4 pr-4 text-sm text-foreground/80">
                        {row.feature}
                      </td>
                      <td className="py-4 pr-4">
                        <ComparisonCell value={row.dev} />
                      </td>
                      <td className="py-4">
                        <ComparisonCell value={row.ent} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How billing works */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              How billing works
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl italic text-foreground md:text-4xl">
              Pay-as-you-go, with the first 100K included.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/70">
              The Developer Plan is a flat $299/month. That covers your first
              100,000 API requests. Every request after that is billed at
              $0.005, prorated to the nearest request. Sandbox traffic is
              never metered.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  volume: "50K requests/mo",
                  cost: "$299",
                  note: "Well under the 100K allowance. Just the base fee.",
                },
                {
                  volume: "250K requests/mo",
                  cost: "$1,049",
                  note: "$299 base + 150K × $0.005 overage.",
                },
                {
                  volume: "1M requests/mo",
                  cost: "$4,799",
                  note: "$299 base + 900K × $0.005. At this volume, talk to us about Enterprise.",
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

        {/* Real-time vs scheduled callout */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              Scheduled vs real-time
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl">
              Most compliance providers don't push.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/70">
              Cannabis state-tracking systems are queried on a schedule. The
              Developer Plan polls each connected account on a fixed interval
              and writes changes to your webhooks. The Enterprise Plan adds
              direct push delivery in states where the upstream provider
              supports it, or a faster polling interval where they don't.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
