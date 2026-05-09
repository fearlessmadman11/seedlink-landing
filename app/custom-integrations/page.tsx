import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const examples = [
  "Custom state-system adapters",
  "Reverse integrations into your ERP, accounting, or BI",
  "Compliance reporting workflows",
  "Data migration from legacy systems",
  "White-labeled deployments",
]

export default function CustomIntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="px-6 py-32 md:px-12 md:py-40">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
              Custom Integrations
            </p>
            <h1 className="mt-6 font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Not on the platform? We'll build it.
            </h1>
            <p className="mt-8 text-base leading-relaxed text-foreground/70 md:text-lg">
              SeedLink is a cannabis system integrations company. The platform
              is what we've productized. For everything else, we engage on a
              per-project basis.
            </p>

            <ul className="mt-12 space-y-3 border-t border-border pt-8">
              {examples.map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 text-base text-foreground/80"
                >
                  <span className="font-mono text-xs text-accent">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-12 text-sm text-foreground/60">
              Project-based pricing. Fixed scope, fixed timeline. You own the
              IP at handoff.
            </p>

            <div className="mt-10 border-t border-border pt-8">
              <a
                href="mailto:hello@seedlink.dev?subject=Custom%20Integration%20Inquiry"
                className="font-mono text-sm text-accent transition-colors hover:text-foreground"
              >
                hello@seedlink.dev →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
