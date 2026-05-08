import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const developerIncludes = [
  "100,000 API requests/month included",
  "Sandbox access (free, always)",
  "Live account access in supported states",
  "Scheduled syncs (data refreshed every 15 minutes)",
  "Connect SDK and Webhooks",
  "Common Data Model & state-system normalization",
  "Standard support",
]

const enterpriseIncludes = [
  "Everything in the Developer Plan",
  "SSO / SAML and audit logging",
  "Real-time data delivery via webhooks (where upstream supports push)",
  "Volume pricing for high-request workloads",
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
              Pricing built for cannabis software.
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-foreground/70 md:text-lg">
              Two plans. Sandbox is always free. Pay only for live, production
              integrations.
            </p>
          </div>
        </section>

        {/* Plan Cards */}
        <section className="px-6 pb-32 md:px-12">
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
              <p className="mt-2 font-mono text-xs text-accent">
                Sandbox is always free — only pay when you ship to production.
              </p>

              <p className="mt-6 text-sm text-foreground/60">
                For individual developers, startups, and teams shipping their
                first integration.
              </p>

              <ul className="mt-8 space-y-3 border-t border-border pt-8">
                {developerIncludes.map((item) => (
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
                need SSO, real-time data, or dedicated infrastructure.
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
