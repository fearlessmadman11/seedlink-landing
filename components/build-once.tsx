import { MetrcLogo } from "@/components/logos"

const METRC_STATES = [
  "California",
  "Colorado",
  "Massachusetts",
  "Maryland",
  "Michigan",
  "Missouri",
  "Nevada",
  "Oklahoma",
  "Oregon",
]

export function BuildOnce() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
          Build once. Integrate everywhere.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70">
          One unified data model across every state compliance provider. Build
          against a single schema — we handle the differences between state
          systems behind the scenes.
        </p>

        <div className="mt-16">
          <div className="mx-auto max-w-3xl border border-border p-10 transition-colors hover:border-accent/50 md:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <MetrcLogo className="h-10 w-auto text-foreground" />
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent">
                <span className="h-1.5 w-1.5 bg-accent" />
                {METRC_STATES.length} states · Available
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/70">
              Full Metrc API coverage — facilities, packages, plants, harvests,
              transfers, sales, and lab results across every Metrc state we
              support.
            </p>

            <div className="mt-10 border-t border-border pt-8">
              <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
                Available
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-3">
                {METRC_STATES.map((state) => (
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
        </div>
      </div>
    </section>
  )
}
