import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

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
              Don't see what you need?
            </h1>
            <p className="mt-8 text-base leading-relaxed text-foreground/70 md:text-lg">
              Tell us what you're building. We'll either add it to the developer
              platform or build it custom for you.
            </p>

            <div className="mt-16 space-y-12 border-t border-border pt-12">
              <div>
                <h2 className="font-serif text-2xl italic text-foreground md:text-3xl">
                  Add to the platform
                </h2>
                <p className="mt-3 text-base leading-relaxed text-foreground/70">
                  We build it once and ship it to every customer. Best for new
                  states, new providers, or new resource types.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl italic text-foreground md:text-3xl">
                  Build it custom
                </h2>
                <p className="mt-3 text-base leading-relaxed text-foreground/70">
                  We build it just for you. Best for reverse integrations into
                  your stack, white-labeled deployments, or workflows specific
                  to your operation. IP yours at handoff.
                </p>
              </div>
            </div>

            <div className="mt-16 border-t border-border pt-8">
              <p className="text-sm leading-relaxed text-foreground/55">
                This is a custom service. Every engagement starts with
                discovery and a contract. New work is prioritized against our
                platform roadmap, so timing depends on fit and capacity.
              </p>
              <a
                href="mailto:hello@seedlink.dev?subject=Integration%20Inquiry"
                className="mt-8 inline-block font-mono text-sm text-accent transition-colors hover:text-foreground"
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
