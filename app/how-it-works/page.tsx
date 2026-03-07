import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const steps = [
  {
    number: "01",
    title: "Connect",
    subtitle: "Secure credential linking via Connect SDK",
    description:
      "Your users authenticate their compliance accounts through the Connect SDK iframe — a drop-in UI component that handles credential collection and validation. You never touch or store state system credentials directly.",
    details: [
      "Drop-in iframe works in any web app",
      "Credentials encrypted with AES-256-GCM",
      "Supports Metrc, BioTrack, and more",
      "Users link accounts in under 60 seconds",
    ],
    code: `// Create a link token for the Connect SDK
POST /v1/link/token/create
{
  "organization_id": "org_abc123",
  "user_id": "user_456"
}

→ 200 OK
{
  "link_token": "link_tok_live_...",
  "expiration": "2024-01-15T12:00:00Z"
}`,
    codeLabel: "link-token.sh",
  },
  {
    number: "02",
    title: "Standardized API",
    subtitle: "One interface for every state system",
    description:
      "Use consistent endpoints for packages, plants, transfers, harvests, and reports — regardless of which state system your users are connected to. Our Common Data Model normalizes every response into a predictable shape.",
    details: [
      "Unified schema across Metrc and BioTrack",
      "Consistent pagination, filtering, and sorting",
      "Predictable error codes and response shapes",
      "Comprehensive API reference documentation",
    ],
    code: `// Pull packages from any state system
GET /v1/packages?connection_id=conn_456

→ 200 OK
{
  "data": [
    {
      "id": "pkg_789",
      "tag": "ABCDEF012345670000010042",
      "product_name": "Blue Dream 3.5g",
      "quantity": 100,
      "unit": "grams",
      "status": "active"
    }
  ],
  "pagination": {
    "total": 248,
    "page": 1,
    "per_page": 25
  }
}`,
    codeLabel: "packages.sh",
  },
  {
    number: "03",
    title: "Compliance handled",
    subtitle: "State-specific rules managed behind the scenes",
    description:
      "Every state has different field requirements, validation rules, and reporting formats. SeedLink manages these differences behind the scenes — when a state system changes its API or rules, we handle the update so you don't have to.",
    details: [
      "State-specific field mapping and validation",
      "Automatic format conversions",
      "System change monitoring and updates",
      "No code changes when regulations shift",
    ],
    code: null,
    codeLabel: null,
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <h1 className="max-w-4xl font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Three steps to compliance integration
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-foreground/70 md:text-lg">
              Connect your users' compliance accounts, call a standardized API,
              and let SeedLink handle the rest.
            </p>
          </div>
        </section>

        {/* Steps */}
        {steps.map((step) => (
          <section
            key={step.number}
            className="border-t border-border px-6 py-24 md:px-12"
          >
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                {/* Left — content */}
                <div>
                  <span className="font-mono text-xs text-foreground/40">
                    {step.number}
                  </span>
                  <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
                    {step.title}
                  </h2>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-foreground/50">
                    {step.subtitle}
                  </p>
                  <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70">
                    {step.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                        <span className="text-sm text-foreground/70">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — code example */}
                {step.code && (
                  <div className="self-start border border-border bg-card">
                    <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                      <span className="font-mono text-xs text-foreground/50">
                        {step.codeLabel}
                      </span>
                    </div>
                    <pre className="overflow-x-auto p-6">
                      <code className="font-mono text-sm leading-relaxed text-foreground/90">
                        {step.code}
                      </code>
                    </pre>
                  </div>
                )}

                {/* Step 3 — no code, show summary card instead */}
                {!step.code && (
                  <div className="self-start border border-border p-8">
                    <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                      What we handle
                    </p>
                    <div className="mt-6 space-y-4">
                      {[
                        "Metrc field mapping & validation",
                        "BioTrack format conversion",
                        "State system API versioning",
                        "Regulatory change monitoring",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                          <span className="text-sm text-foreground/70">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="border-t border-border px-6 py-32 md:px-12 md:py-40">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
              Ready to integrate?
            </h2>
            <p className="mt-6 max-w-lg text-foreground/70">
              Start with a free sandbox account. No credit card required.
            </p>
            <Link
              href="https://app.seedlink.dev/register"
              className="mt-10 inline-flex border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
