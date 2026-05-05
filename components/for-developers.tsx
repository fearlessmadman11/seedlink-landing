const items = [
  {
    label: "MCP",
    title: "MCP server endpoint",
    description:
      "Hook AI agents directly into seed-to-sale data with a Model Context Protocol endpoint. Tool calls, scoped credentials, and audit logs out of the box.",
  },
  {
    label: "Sandbox",
    title: "Sandbox environment",
    description:
      "Build and test against a full sandbox with realistic state-system fixtures. Identical schema to production — no surprises at go-live.",
  },
  {
    label: "SDKs",
    title: "Typed SDKs",
    description:
      "First-class SDKs in TypeScript and Python. Strongly typed, ergonomic, and generated from the same OpenAPI spec that powers the docs.",
  },
]

export function ForDevelopers() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
          Built for builders
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
          For developers and agents
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-border p-8 transition-colors hover:border-accent/50"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                {item.label}
              </p>
              <h3 className="mt-4 font-mono text-base text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
