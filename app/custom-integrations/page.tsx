import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const buildExamples = [
  {
    title: "Custom state-system adapters",
    body: "A state we don't yet support on the platform, or a non-Metrc system entirely. We'll build the adapter against the spec your operators need.",
  },
  {
    title: "Reverse integrations",
    body: "SeedLink data flowing into your existing ERP, accounting, BI, or POS. Customer hand-rolled integrations that aren't worth productizing.",
  },
  {
    title: "Compliance reporting workflows",
    body: "Custom reports, end-of-month reconciliations, audit trails for your state regulator. Built once and run on your schedule.",
  },
  {
    title: "Data migration from legacy systems",
    body: "Moving a multi-license operator off a legacy compliance vendor onto SeedLink, with full historical data preserved.",
  },
  {
    title: "White-labeled deployments",
    body: "SeedLink running under your brand, in your cloud, with your contracts. For platforms that need to embed compliance without the SeedLink name.",
  },
]

const engagementSteps = [
  {
    n: "01",
    title: "Discovery call",
    body: "30 minutes, no charge. We learn what you're trying to build, the constraint you're hitting, and whether SeedLink is the right shape of solution.",
  },
  {
    n: "02",
    title: "Scoping document",
    body: "We write up the problem, the proposed solution, the deliverables, and the timeline. You get a fixed-price quote attached.",
  },
  {
    n: "03",
    title: "Custom agreement",
    body: "MSA, DPA, and any procurement requirements your legal team needs. Real signed contract on your paper or ours.",
  },
  {
    n: "04",
    title: "Phased build",
    body: "Weekly check-ins, demo-able milestones, visibility into our work. No black-box engagements.",
  },
  {
    n: "05",
    title: "Handoff and support",
    body: "Code, docs, runbooks, and ongoing support. You own the IP at handoff — no lock-in.",
  },
]

export default function CustomIntegrationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
              Custom Integrations
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Not on the platform? We'll build it.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/70 md:text-lg">
              SeedLink is a cannabis system integrations company. The platform
              is what we've productized. For everything else, we engage on a
              per-project basis.
            </p>
            <div className="mt-10">
              <a
                href="mailto:hello@seedlink.dev?subject=Custom%20Integration%20Inquiry"
                className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 font-mono text-sm text-background transition-colors hover:bg-accent/90"
              >
                Start a conversation →
              </a>
            </div>
          </div>
        </section>

        {/* What we build */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              What we build
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
              Cannabis-specific integrations, end to end.
            </h2>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {buildExamples.map((item) => (
                <div
                  key={item.title}
                  className="border border-border p-8 transition-colors hover:border-accent/50"
                >
                  <h3 className="font-serif text-2xl italic text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How an engagement works */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              How an engagement works
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
              Five steps from problem to handoff.
            </h2>

            <div className="mt-16 space-y-px border border-border">
              {engagementSteps.map((step) => (
                <div
                  key={step.n}
                  className="grid gap-6 bg-background px-8 py-8 md:grid-cols-[80px_1fr] md:items-start md:gap-10"
                >
                  <p className="font-mono text-sm tracking-widest text-accent">
                    {step.n}
                  </p>
                  <div>
                    <h3 className="font-serif text-2xl italic text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement model */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
              How we work
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
              Fixed scope, fixed timeline, fixed price.
            </h2>

            <div className="mt-12 grid gap-8 text-base leading-relaxed text-foreground/70 md:grid-cols-2">
              <p>
                We don't bill hourly. Every engagement starts with a written
                scope and a fixed quote. You know exactly what you're getting
                and what it costs before you sign.
              </p>
              <p>
                We take small projects (a single state adapter, a one-off
                migration) and large ones (multi-quarter integrations into
                multi-state operations). Discovery calls are always free.
              </p>
              <p>
                You own the code, the docs, and the IP at handoff. No vendor
                lock-in, no surprise license fees, no recurring custom-work
                charges unless you specifically want ongoing support.
              </p>
              <p>
                Where it makes sense, we'll productize what we built for you
                back into the SeedLink platform. When that happens, you get a
                discount on the platform tier. We'd rather grow the platform
                than charge twice for the same work.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-border px-6 py-24 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
              Tell us what you're building.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/70">
              Discovery call is free. We'll tell you straight up whether we're
              the right team for the job.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@seedlink.dev?subject=Custom%20Integration%20Inquiry"
                className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 font-mono text-sm text-background transition-colors hover:bg-accent/90"
              >
                hello@seedlink.dev
              </a>
              <Link
                href="/pricing"
                className="font-mono text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                Or see platform pricing →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
