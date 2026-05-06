import { BioTrackLogo, MetrcLogo } from "@/components/logos"

const integrations = [
  {
    name: "Metrc",
    logo: MetrcLogo,
    states: "20+ states",
    description:
      "Full Metrc API coverage — packages, plants, transfers, harvests, and reports across every Metrc state.",
  },
  {
    name: "BioTrack",
    logo: BioTrackLogo,
    states: "WA, IL, ND, NM, NY",
    description:
      "Native BioTrack support — credential linking, inventory, manifests, and reporting normalized to the same data model.",
  },
]

export function BuildOnce() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
          Build once. Integrate everywhere.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
          One unified API across every seed-to-sale platform. Build against a
          single data model — we handle the differences between state systems
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
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {integration.states}
                  </span>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-foreground/70">
                  {integration.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
