export function IntegrationsSection() {
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

  return (
    <section id="integrations" className="border-t border-border px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
            Supported Systems
          </p>
          <h2 className="mt-4 font-serif text-3xl italic text-foreground md:text-4xl">
            One API, multiple platforms
          </h2>
          <p className="mt-4 max-w-xl text-foreground/70">
            We handle the complexity of each state system so you can focus on building your product.
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
              <p className="mt-4 text-sm text-foreground/70">{integration.description}</p>
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
          <span className="text-accent cursor-pointer hover:underline">
            Request a system →
          </span>
        </p>
      </div>
    </section>
  )
}
