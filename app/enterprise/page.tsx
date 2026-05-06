import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const available = [
  {
    name: "Per-organization multi-tenancy",
    description:
      "Every resource — connections, keys, webhooks, audit records — is foreign-keyed to an organization. Auth context carries org_id; queries are scoped at the middleware layer. No shared state between tenants.",
  },
  {
    name: "AES-256-GCM credential encryption at rest",
    description:
      "State-system credentials are encrypted with AES-256-GCM and scrypt-derived keys. Stored format is salt:iv:authTag:ciphertext, decrypted only when an adapter needs to call the upstream system. Key rotation is supported.",
  },
  {
    name: "Sandbox / production environment isolation",
    description:
      "Sandbox and production are separate at the data layer — keys, connections, webhook deliveries, and audit logs all carry an environment flag. Live credentials cannot reach sandbox data, and vice versa.",
  },
]

const inProgress = [
  {
    name: "SSO via WorkOS",
    description:
      "OAuth-based SSO with WorkOS, supporting Okta, Azure AD, Google Workspace, and any SAML 2.0 IdP. Code is in place; rolling out to design-partner enterprises before general availability.",
  },
  {
    name: "Audit logging",
    description:
      "Org-scoped activity log with action, actor, resource, and metadata. Backend writes to a local AuditLog table and forwards to WorkOS Audit Logs. Dashboard query UI and export tooling still in build.",
  },
  {
    name: "Role-based access control",
    description:
      "Three-role hierarchy — Viewer, Member, Admin — enforced via route middleware. The roles exist and gate writes today; we're polishing the team-management UI and invitation flow.",
  },
  {
    name: "Webhooks with retry delivery",
    description:
      "Event dispatcher with per-environment delivery queues, signature verification, and tracked retry attempts. Backend is functional; we're hardening the developer-facing endpoint configuration UI.",
  },
]

function StatusBadge({ status }: { status: "available" | "in-progress" }) {
  const isAvailable = status === "available"
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest ${
        isAvailable ? "text-accent" : "text-foreground/50"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 ${
          isAvailable ? "bg-accent" : "border border-foreground/40"
        }`}
      />
      {isAvailable ? "Available" : "In progress"}
    </span>
  )
}

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              Enterprise roadmap
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              What we have. What we're building.
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-foreground/70 md:text-lg">
              We'd rather tell you the truth about where we are than ship a
              brochure. Here's the state of SeedLink's enterprise capabilities
              today.
            </p>
          </div>
        </section>

        {/* Available */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-4">
              <StatusBadge status="available" />
              <span className="font-mono text-xs text-foreground/40">
                {available.length} capabilities
              </span>
            </div>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl">
              Available today
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/60">
              Foundational infrastructure that every customer relies on from day
              one. These are non-negotiable — the platform doesn't function
              without them.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {available.map((item) => (
                <div
                  key={item.name}
                  className="border border-border p-8 transition-colors hover:border-accent/50"
                >
                  <h3 className="font-mono text-sm uppercase tracking-wider text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In progress */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-4">
              <StatusBadge status="in-progress" />
              <span className="font-mono text-xs text-foreground/40">
                {inProgress.length} capabilities
              </span>
            </div>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl">
              In progress
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/60">
              Code paths exist and are exercised internally. We're polishing the
              developer-facing surfaces, running with design partners, and
              hardening the edges before we promise general availability.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {inProgress.map((item) => (
                <div
                  key={item.name}
                  className="border border-border p-8 transition-colors hover:border-accent/50"
                >
                  <h3 className="font-mono text-sm uppercase tracking-wider text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-foreground/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honest closer */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-3xl font-serif text-2xl italic text-foreground md:text-3xl text-balance">
              If a capability isn't on this page, we haven't built it.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-foreground/60">
              Need something specific — a compliance attestation, dedicated
              infrastructure, custom data residency, an SLA — and you don't see
              it here? It's not built yet. Tell us what your security and
              procurement teams require, and we'll be straight with you about
              whether and when we can deliver it.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
