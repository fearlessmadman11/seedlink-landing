import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const plans = [
  {
    name: "Build",
    price: "$0",
    period: "/mo",
    tagline: "Free forever",
    environment: "Sandbox environment only",
    requests: "10,000 requests/month",
    accounts: "1 connected account",
    cta: "Start building",
    ctaHref: "#cta",
    highlighted: false,
    features: {
      connectUi: true,
      commonDataModel: true,
      webhooks: false,
      bulkEndpoints: false,
      sso: false,
      sla: false,
    },
  },
  {
    name: "Launch",
    price: "$299",
    period: "/mo",
    tagline: "Go live with confidence",
    environment: "Sandbox + Production",
    requests: "250,000 requests/month",
    accounts: "25 connected accounts",
    cta: "Go live",
    ctaHref: "#cta",
    highlighted: true,
    features: {
      connectUi: true,
      commonDataModel: true,
      webhooks: true,
      bulkEndpoints: false,
      sso: false,
      sla: false,
    },
  },
  {
    name: "Growth",
    price: "$999",
    period: "/mo",
    tagline: "Scale with demand",
    environment: "Sandbox + Production",
    requests: "2,000,000 requests/month",
    accounts: "250 connected accounts",
    cta: "Go live",
    ctaHref: "#cta",
    highlighted: false,
    features: {
      connectUi: true,
      commonDataModel: true,
      webhooks: true,
      bulkEndpoints: true,
      sso: false,
      sla: true,
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "Tailored for your operation",
    environment: "Sandbox + Production",
    requests: "Unlimited requests",
    accounts: "Unlimited connected accounts",
    cta: "Talk to sales",
    ctaHref: "mailto:sales@seedlink.dev",
    highlighted: false,
    features: {
      connectUi: true,
      commonDataModel: true,
      webhooks: true,
      bulkEndpoints: true,
      sso: true,
      sla: true,
    },
  },
]

const featureLabels: { key: keyof (typeof plans)[0]["features"]; label: string }[] = [
  { key: "connectUi", label: "Connect UI SDK" },
  { key: "commonDataModel", label: "Common Data Model" },
  { key: "webhooks", label: "Webhooks" },
  { key: "bulkEndpoints", label: "Bulk Endpoints" },
  { key: "sla", label: "SLA" },
  { key: "sso", label: "SSO" },
]

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-accent"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M3 8.5L6.5 12L13 4" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-foreground/30"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    >
      <path d="M4 4L12 12M12 4L4 12" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
          <div className="mx-auto max-w-7xl">
            <h1 className="max-w-4xl font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Pricing that scales from prototype to production
            </h1>
            <p className="mt-6 max-w-2xl font-mono text-base leading-relaxed text-foreground/70 md:text-lg">
              Start for free in sandbox. Pay only when you go live.
            </p>
          </div>
        </section>

        {/* Plan Cards */}
        <section className="px-6 pb-32 md:px-12">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col border p-6 ${
                  plan.highlighted
                    ? "border-accent"
                    : "border-border"
                }`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3">
                    <h3 className="font-mono text-sm uppercase tracking-wider text-foreground/60">
                      {plan.name}
                    </h3>
                    {plan.highlighted && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                        Recommended
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-mono text-3xl text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="font-mono text-sm text-foreground/50">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-foreground/60">
                    {plan.tagline}
                  </p>
                </div>

                {/* Plan details */}
                <div className="mb-6 space-y-3 border-t border-border pt-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span className="font-mono text-sm text-foreground/70">
                      {plan.environment}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span className="font-mono text-sm text-foreground/70">
                      {plan.requests}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    <span className="font-mono text-sm text-foreground/70">
                      {plan.accounts}
                    </span>
                  </div>
                </div>

                {/* Feature checklist */}
                <div className="mb-8 flex-1 space-y-3 border-t border-border pt-6">
                  {featureLabels.map(({ key, label }) => (
                    <div key={key} className="flex items-center gap-3">
                      {plan.features[key] ? <CheckIcon /> : <XIcon />}
                      <span
                        className={`text-sm ${
                          plan.features[key]
                            ? "text-foreground/70"
                            : "text-foreground/30"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  className={`mt-auto inline-flex items-center justify-center border px-5 py-2.5 font-mono text-sm transition-colors ${
                    plan.highlighted
                      ? "border-accent bg-accent text-accent-foreground hover:bg-transparent hover:text-accent"
                      : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
