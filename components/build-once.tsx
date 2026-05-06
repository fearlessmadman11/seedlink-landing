import { BioTrackLogo, MetrcLogo } from "@/components/logos"

type Integration = {
  name: string
  logo: typeof MetrcLogo
  status: { label: string; type: "available" | "in-progress" }
  description: string
  statesLabel: string
  states: string[]
}

const integrations: Integration[] = [
  {
    name: "Metrc",
    logo: MetrcLogo,
    status: { label: "9 states", type: "available" },
    description:
      "Full Metrc API coverage — facilities, packages, plants, harvests, transfers, sales, and lab results across every Metrc state we support.",
    statesLabel: "Available",
    states: [
      "California",
      "Colorado",
      "Massachusetts",
      "Maryland",
      "Michigan",
      "Missouri",
      "Nevada",
      "Oklahoma",
      "Oregon",
    ],
  },
  {
    name: "BioTrack",
    logo: BioTrackLogo,
    status: { label: "Coming soon", type: "in-progress" },
    description:
      "BioTrack support is rolling out — same unified data model, same credential vault, same Connect SDK flow.",
    statesLabel: "Planned",
    states: ["Illinois", "New Mexico", "Hawaii", "New Hampshire"],
  },
]

function StatusBadge({ status }: { status: Integration["status"] }) {
  const isAvailable = status.type === "available"
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider ${
        isAvailable ? "text-accent" : "text-foreground/50"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 ${
          isAvailable ? "bg-accent" : "border border-foreground/40"
        }`}
      />
      {status.label}
    </span>
  )
}

export function BuildOnce() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
          Build once. Integrate everywhere.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
          One unified API across every state compliance provider. Build against
          a single data model — we handle the differences between state systems
          behind the scenes.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {integrations.map((integration) => {
            const Logo = integration.logo
            return (
              <div
                key={integration.name}
                className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center justify-between gap-4">
                  <Logo className="h-8 w-auto text-foreground" />
                  <StatusBadge status={integration.status} />
                </div>

                <p className="mt-8 text-sm leading-relaxed text-foreground/70">
                  {integration.description}
                </p>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                    {integration.statesLabel}
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                    {integration.states.map((state) => (
                      <li
                        key={state}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                        {state}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
