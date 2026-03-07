import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const integrations = [
  {
    name: "Metrc",
    description: "The most widely adopted state track-and-trace system",
    states: ["California", "Colorado", "Michigan", "Oregon", "and 15+ more"],
  },
  {
    name: "BiotrackTHC",
    description: "Seed-to-sale tracking for regulated cannabis markets",
    states: ["New Mexico", "Illinois", "New York", "Puerto Rico"],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <h1 className="max-w-4xl font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Everything you need to build on cannabis compliance
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-foreground/70 md:text-lg">
              A developer-first platform with SDKs, unified data models, and
              sandbox environments.
            </p>
          </div>
        </section>

        {/* Connect SDK */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                  Connect SDK
                </p>
                <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
                  Drop-in credential linking
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70">
                  The Connect SDK is a JavaScript library that renders a secure
                  iframe for your users to authenticate their compliance
                  accounts. No credential handling on your side — SeedLink
                  encrypts and stores everything.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "JavaScript SDK — works with React, Vue, vanilla JS",
                    "Secure iframe auth flow",
                    "Automatic credential encryption",
                    "Event callbacks for connection status",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                      <span className="text-sm text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="self-start border border-border bg-card">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <span className="font-mono text-xs text-foreground/50">
                    connect-sdk.sh
                  </span>
                </div>
                <pre className="overflow-x-auto p-6">
                  <code className="font-mono text-sm leading-relaxed text-foreground/90">
                    {`// 1. Create a link token
POST /v1/link/token/create
{
  "organization_id": "org_abc123",
  "user_id": "user_456"
}

// 2. Initialize the SDK
const connect = SeedLink.connect({
  token: "link_tok_live_...",
  onSuccess: (connection) => {
    console.log(connection.id)
  },
  onExit: () => {
    // user closed the flow
  }
})`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Common Data Model */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                  Common Data Model
                </p>
                <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
                  Unified schema across systems
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70">
                  Every state system stores data differently — different field
                  names, different formats, different structures. SeedLink
                  normalizes everything into a consistent Common Data Model so
                  you write your integration once.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "Normalized resources: packages, plants, transfers, harvests",
                    "Consistent field names and types across providers",
                    "Standardized pagination, filtering, and sorting",
                    "Predictable error codes and response shapes",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                      <span className="text-sm text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="self-start border border-border bg-card">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <span className="font-mono text-xs text-foreground/50">
                    standardized-response.json
                  </span>
                </div>
                <pre className="overflow-x-auto p-6">
                  <code className="font-mono text-sm leading-relaxed text-foreground/90">
                    {`// Same shape — whether Metrc or BioTrack
{
  "data": {
    "id": "pkg_789",
    "tag": "ABCDEF012345670000010042",
    "product_name": "Blue Dream 3.5g",
    "quantity": 100,
    "unit": "grams",
    "status": "active",
    "source_system": "metrc",
    "created_at": "2024-01-10T08:00:00Z"
  },
  "meta": {
    "request_id": "req_abc123",
    "provider": "metrc",
    "state": "CA"
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Sandbox Environments */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              Sandbox Environments
            </p>
            <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
              Build and test for free
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70">
              Every account starts with a free sandbox environment. Test your
              integration with simulated responses that match production data
              shapes — no compliance account required.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  label: "Free tier",
                  value: "10,000",
                  unit: "requests/month",
                  description:
                    "Build plan includes sandbox access at no cost",
                },
                {
                  label: "Simulated data",
                  value: "Full",
                  unit: "response fidelity",
                  description:
                    "Sandbox responses match production schema exactly",
                },
                {
                  label: "Isolation",
                  value: "Complete",
                  unit: "env separation",
                  description:
                    "Sandbox and live data are fully isolated by design",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-border p-8 transition-colors hover:border-accent/50"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                    {stat.label}
                  </p>
                  <p className="mt-4 font-mono text-2xl text-foreground">
                    {stat.value}
                  </p>
                  <p className="font-mono text-sm text-foreground/50">
                    {stat.unit}
                  </p>
                  <p className="mt-4 text-sm text-foreground/70">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                Supported Systems
              </p>
              <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
                One API, multiple platforms
              </h2>
              <p className="mt-4 max-w-xl text-foreground/70">
                We handle the complexity of each state system so you can focus on
                building your product.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {integrations.map((integration) => (
                <div
                  key={integration.name}
                  className="border border-border p-8 transition-colors hover:border-accent/50"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-serif text-2xl italic text-foreground">
                      {integration.name}
                    </h3>
                    <span className="font-mono text-xs text-accent">
                      Supported
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-foreground/70">
                    {integration.description}
                  </p>
                  <div className="mt-8 border-t border-border pt-6">
                    <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                      Coverage
                    </p>
                    <p className="mt-2 text-sm text-foreground/80">
                      {integration.states.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 font-mono text-sm text-foreground/50">
              More integrations coming soon.{" "}
              <a
                href="mailto:sales@seedlink.dev?subject=Integration%20Request"
                className="text-accent hover:underline"
              >
                Request a system →
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border px-6 py-32 md:px-12 md:py-40">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
              Start building today
            </h2>
            <p className="mt-6 max-w-lg text-foreground/70">
              Free sandbox access. No credit card required.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="https://app.seedlink.dev/register"
                className="inline-flex border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Get Started Free
              </Link>
              <Link
                href="https://docs.seedlink.dev"
                className="inline-flex font-mono text-sm text-foreground/50 transition-colors hover:text-foreground"
              >
                Read the docs →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
