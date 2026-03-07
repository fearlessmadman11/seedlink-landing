import Link from "next/link"

export function Hero() {
  return (
    <section className="px-6 pb-32 pt-24 md:px-12 md:pb-48 md:pt-32 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <h1 className="max-w-4xl font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl text-balance">
          A Single API for cannabis track and trace
        </h1>

        <p className="mt-8 max-w-2xl font-mono text-base leading-relaxed text-foreground/80 md:text-lg">
          Effortlessly integrate with multiple seed-to-sale platforms
        </p>

        <div className="mt-12">
          <Link
            href="https://app.seedlink.dev/register"
            className="inline-flex border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </section>
  )
}
