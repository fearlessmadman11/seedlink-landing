import Image from "next/image"

export function Hero() {
  return (
    <section className="relative isolate -mt-[88px] flex min-h-[100svh] w-full items-end overflow-hidden">
      <Image
        src="/illustrations/hero.png"
        alt="A developer at night, building Seedlink, with a moonlit cannabis cultivation field outside the window"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient: darker at the bottom for headline legibility, fades up */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />

      {/* Subtle left-side fade so headline sits on a darker base */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-48">
        <h1 className="max-w-3xl font-serif text-5xl italic leading-[1.05] text-foreground md:text-6xl lg:text-7xl xl:text-[88px] text-balance">
          A single API for cannabis track and trace
        </h1>

        <p className="mt-8 max-w-xl font-mono text-base leading-relaxed text-foreground/80 md:text-lg">
          Integrate with multiple seed-to-sale platforms.
        </p>
      </div>
    </section>
  )
}
