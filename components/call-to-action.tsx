import Link from "next/link"

export function CallToAction() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
          Get started
        </p>
        <h2 className="mt-4 font-serif text-4xl italic leading-[1.05] text-foreground md:text-5xl lg:text-6xl text-balance">
          Read the docs.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70 lg:text-[17px]">
          Quickstart, full API reference, and every endpoint with copy-paste examples. Free sandbox account included.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://docs.seedlink.dev"
            className="inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wider text-accent-foreground transition-colors hover:bg-foreground hover:border-foreground hover:text-background"
          >
            View docs
          </Link>
          <Link
            href="mailto:sales@seedlink.dev"
            className="inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-sm uppercase tracking-wider text-foreground/70 transition-colors hover:border-foreground hover:text-foreground"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  )
}
