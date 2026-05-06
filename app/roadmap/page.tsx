import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type ColumnStatus = "live" | "building" | "next" | "later"

type Card = {
  title: string
  description: string
  badge?: string
}

type Column = {
  status: ColumnStatus
  label: string
  caption: string
  cards: Card[]
}

const COLUMNS: Column[] = [
  {
    status: "live",
    label: "Live",
    caption: "Available in production today.",
    cards: [
      {
        title: "Standardized API",
        description:
          "Read endpoints across facilities, packages, plants, harvests, transfers, sales, lab results, items, and strains.",
      },
      {
        title: "OAuth 2.0 client credentials",
        description:
          "Standard auth flow with token exchange, refresh, and revoke. Per-org client_id / client_secret.",
      },
      {
        title: "Sandbox environment",
        description:
          "Free for every developer. Seeded with 2 facilities, 10 packages, plants, transfers, and lab results.",
      },
      {
        title: "Webhooks with retry delivery",
        description:
          "Subscribe to package, transfer, lab-result, and connection events. Signed deliveries, exponential backoff retries.",
      },
      {
        title: "Credential vault",
        description:
          "AES-256-GCM encryption at rest with scrypt-derived keys. Credentials decrypt only when calling upstream.",
      },
      {
        title: "Multi-tenancy & isolation",
        description:
          "Per-org foreign-key isolation on every resource. Sandbox and production are architecturally separated.",
      },
    ],
  },
  {
    status: "building",
    label: "Building",
    caption: "In active development. Available to design partners.",
    cards: [
      {
        title: "Connect SDK",
        description:
          "Drop-in credential-collection iframe. Themable, embeddable, fully white-label-able. Currently shipping as a demo.",
        badge: "Beta",
      },
      {
        title: "Capture SDK",
        description:
          "Mobile-first RFID + barcode scanner SDK for cultivators and processors. Real-time validation, batch submit.",
        badge: "Beta",
      },
      {
        title: "BioTrack adapter",
        description:
          "Coverage for IL, NM, HI, NH. Same unified data model, same Connect SDK flow — additional state-system support.",
      },
      {
        title: "@seedlink npm packages",
        description:
          "First-class server SDKs for TypeScript and Python. Generated from the OpenAPI spec.",
      },
      {
        title: "MCP server",
        description:
          "Model Context Protocol endpoint for AI agents. Read-only access to the standardized API with audit logging.",
      },
      {
        title: "SSO via WorkOS",
        description:
          "Enterprise auth with SAML 2.0 and OIDC. Code paths shipped, rolling out to design-partner orgs first.",
      },
    ],
  },
  {
    status: "next",
    label: "Next",
    caption: "Committed. Roadmap-defined and queued for build.",
    cards: [
      {
        title: "Additional Metrc states",
        description:
          "Expanding from 9 covered states to broader Metrc footprint. State-by-state vendor onboarding.",
      },
      {
        title: "Standardize console (live)",
        description:
          "Wire the landing page request console to the actual sandbox API. Visitors fire real requests, get real responses.",
      },
      {
        title: "Plant lifecycle writes",
        description:
          "Write endpoints for plant create, harvest, package-out, destroy. Currently read-only.",
      },
      {
        title: "Audit logging UI",
        description:
          "Dashboard surface for the audit log. Backend writes already work; the visualization is what's pending.",
      },
      {
        title: "Webhook deliveries replay",
        description:
          "Surface the WebhookDelivery table in the dashboard with retry/replay controls.",
      },
    ],
  },
  {
    status: "later",
    label: "Later",
    caption: "On the roadmap. Sequenced after the Next column ships.",
    cards: [
      {
        title: "SOC 2 Type II",
        description: "Audit and certification. Required for some enterprise procurement paths.",
      },
      {
        title: "BAA / HIPAA-flavored attestation",
        description:
          "For customers in adjacent regulated spaces (medical cannabis programs that overlap with HIPAA workflows).",
      },
      {
        title: "Dedicated tenant infrastructure",
        description:
          "Single-tenant deployments with isolated database and worker pools. For high-volume or compliance-sensitive operators.",
      },
      {
        title: "Custom data residency",
        description:
          "Option to host customer data in a specific region or operator-owned cloud account.",
      },
      {
        title: "Volume / Enterprise pricing",
        description:
          "Custom contracts for high-request-volume customers, with negotiated SLAs and dedicated support.",
      },
      {
        title: "More SDK languages",
        description:
          "Go, Ruby, Java once TS / Python land cleanly. Generated from the same OpenAPI spec.",
      },
    ],
  },
]

function StatusDot({ status }: { status: ColumnStatus }) {
  const base = "h-1.5 w-1.5 inline-block"
  switch (status) {
    case "live":
      return <span className={`${base} bg-accent`} />
    case "building":
      return <span className={`${base} bg-accent/70 animate-pulse`} />
    case "next":
      return <span className={`${base} border border-accent`} />
    case "later":
      return <span className={`${base} border border-foreground/30`} />
  }
}

function ColumnHeader({ status, label, count, caption }: {
  status: ColumnStatus
  label: string
  count: number
  caption: string
}) {
  return (
    <div className="border-b border-border pb-4">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground">
          <StatusDot status={status} />
          {label}
        </span>
        <span className="font-mono text-[10px] text-foreground/50">{count}</span>
      </div>
      <p className="mt-3 text-xs text-foreground/60 leading-relaxed">{caption}</p>
    </div>
  )
}

function CardItem({ card }: { card: Card }) {
  return (
    <div className="border border-border p-5 transition-colors hover:border-accent/50">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-lg italic leading-snug text-foreground">{card.title}</h3>
        {card.badge && (
          <span className="font-mono text-[9px] uppercase tracking-wider text-accent border border-accent/40 px-1.5 py-0.5">
            {card.badge}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70">{card.description}</p>
    </div>
  )
}

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page header */}
        <section className="px-6 pt-32 pb-20 md:px-12 md:pt-40 md:pb-24">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
              Roadmap
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl italic leading-[1.05] text-foreground md:text-6xl lg:text-7xl text-balance">
              What we&apos;ve shipped. What we&apos;re building.
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/70 lg:text-[17px]">
              Honest status, no vapor. If a capability isn&apos;t in this Kanban, we haven&apos;t built it. We&apos;d rather tell you the truth about where things stand than ship a brochure.
            </p>
          </div>
        </section>

        {/* Kanban */}
        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {COLUMNS.map((col) => (
                <div key={col.status} className="flex flex-col gap-4">
                  <ColumnHeader
                    status={col.status}
                    label={col.label}
                    count={col.cards.length}
                    caption={col.caption}
                  />
                  <div className="flex flex-col gap-4">
                    {col.cards.map((card) => (
                      <CardItem key={card.title} card={card} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Release notes — placeholder for now */}
        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
              Release notes
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl italic leading-[1.05] text-foreground md:text-4xl lg:text-5xl text-balance">
              Detailed releases will live here.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/60 lg:text-base">
              When we ship something out of the Building column, you&apos;ll see the date, the
              changeset, and any breaking-change migration notes here. For now, the Kanban above
              is the source of truth.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
