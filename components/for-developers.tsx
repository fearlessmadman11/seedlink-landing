export function ForDevelopers() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
          Built for builders
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
          Stable infrastructure. Real test data.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
          State compliance providers change their APIs all the time. We absorb those changes so you can build something that lasts.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              Stability
            </p>
            <h3 className="mt-4 font-mono text-base text-foreground">
              We keep up with provider changes
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              When state systems change a field name, add a column, or break a response, we update the mapping. Your code keeps working without a deploy.
            </p>
          </div>

          <div className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              Sandbox
            </p>
            <h3 className="mt-4 font-mono text-base text-foreground">
              Free for every developer
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Pre-seeded fixtures across facilities, packages, plants, harvests, transfers, sales, and lab results. Same schema as production. Pay only when you go live.
            </p>
          </div>

          <div className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              Webhooks
            </p>
            <h3 className="mt-4 font-mono text-base text-foreground">
              Push, not poll
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Subscribe to inventory and compliance events. Signed deliveries, automatic retries. No cron jobs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
