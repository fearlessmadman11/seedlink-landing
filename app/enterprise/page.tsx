import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <h1 className="max-w-4xl font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Built for enterprise compliance teams
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-foreground/70 md:text-lg">
              SSO, audit logging, and organization management — designed for
              teams that need security, visibility, and control.
            </p>
          </div>
        </section>

        {/* SSO / SAML */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                  Authentication
                </p>
                <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
                  SSO / SAML
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70">
                  Enable single sign-on for your organization with SAML 2.0.
                  Your team authenticates through your existing identity provider
                  — no separate credentials to manage.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "SAML 2.0 single sign-on",
                    "Works with Okta, Azure AD, Google Workspace",
                    "Automatic user provisioning",
                    "Available on Growth + Enterprise plans",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                      <span className="text-sm text-foreground/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="self-start border border-border p-8">
                <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                  Supported providers
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {["Okta", "Azure AD", "Google Workspace", "OneLogin"].map(
                    (provider) => (
                      <div
                        key={provider}
                        className="border border-border p-4 text-center transition-colors hover:border-accent/50"
                      >
                        <span className="font-mono text-sm text-foreground/70">
                          {provider}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <p className="mt-6 font-mono text-xs text-foreground/40">
                  Any SAML 2.0 compatible provider is supported.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Logging */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                  Visibility
                </p>
                <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
                  Audit logging
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70">
                  Every action in your organization is logged with a full audit
                  trail. Know who did what, when, and from where — queryable,
                  exportable, and compliance-ready.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "Full audit trail for every action",
                    "Queryable logs with filtering and search",
                    "Exportable for compliance reporting",
                    "Real-time event streaming",
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
                    audit-log.json
                  </span>
                </div>
                <pre className="overflow-x-auto p-6">
                  <code className="font-mono text-sm leading-relaxed text-foreground/90">
                    {`{
  "id": "evt_abc123",
  "action": "connection.created",
  "actor": {
    "id": "user_456",
    "email": "admin@company.com"
  },
  "target": {
    "type": "connection",
    "id": "conn_789"
  },
  "metadata": {
    "provider": "metrc",
    "state": "CA"
  },
  "occurred_at": "2024-01-15T14:30:00Z"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Management */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              Control
            </p>
            <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
              Organization management
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70">
              Multi-tenant organizations with role-based access control. Manage
              team members, API keys, and environments from a single dashboard.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Role-based access",
                  description:
                    "Three permission levels — Viewer, Member, and Admin — with granular control over who can access what.",
                  details: [
                    "Viewer: read-only dashboard access",
                    "Member: API access + connections",
                    "Admin: full org management",
                  ],
                },
                {
                  title: "Environment isolation",
                  description:
                    "Sandbox and live environments are fully separated. API keys, connections, and data are isolated by design.",
                  details: [
                    "Separate API keys per environment",
                    "Isolated connection pools",
                    "Independent rate limits",
                  ],
                },
                {
                  title: "API key management",
                  description:
                    "Create, rotate, and revoke API keys from the dashboard. Each key is scoped to a specific environment.",
                  details: [
                    "Per-environment key scoping",
                    "Key rotation without downtime",
                    "Usage tracking per key",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="border border-border p-8 transition-colors hover:border-accent/50"
                >
                  <h3 className="font-mono text-sm uppercase tracking-wider text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                    {card.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {card.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                        <span className="text-sm text-foreground/60">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security callout */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              Security
            </p>
            <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
              Security by default
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/70">
              Every layer of SeedLink is built with security and compliance in
              mind.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  label: "Encryption",
                  value: "AES-256-GCM",
                  description:
                    "All credentials encrypted at rest with AES-256-GCM and scrypt key derivation",
                },
                {
                  label: "Isolation",
                  value: "Per-org",
                  description:
                    "Complete tenant isolation — credentials, connections, and data are never shared",
                },
                {
                  label: "Environments",
                  value: "Separated",
                  description:
                    "Sandbox and production environments are architecturally isolated",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-border p-8 transition-colors hover:border-accent/50"
                >
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                    {item.label}
                  </p>
                  <p className="mt-4 font-mono text-2xl text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-4 text-sm text-foreground/70">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border px-6 py-32 md:px-12 md:py-40">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
              Ready to scale your compliance infrastructure?
            </h2>
            <p className="mt-6 max-w-lg text-foreground/70">
              Talk to our team about Enterprise plans, custom SLAs, and
              dedicated support.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="mailto:sales@seedlink.dev"
                className="inline-flex border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Talk to sales
              </Link>
              <Link
                href="/pricing"
                className="inline-flex font-mono text-sm text-foreground/50 transition-colors hover:text-foreground"
              >
                View pricing →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
