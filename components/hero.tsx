import Image from "next/image"

export function Hero() {
  return (
    <section className="px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24 lg:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <h1 className="max-w-3xl font-serif text-4xl italic leading-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl text-balance">
            A Single API for cannabis track and trace
          </h1>

          <p className="mt-8 max-w-xl font-mono text-base leading-relaxed text-foreground/80 md:text-lg">
            Integrate with multiple seed-to-sale platforms
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px] lg:max-w-[380px]">
          <Image
            src="/illustrations/four-panel.png"
            alt="The SeedLink narrative — seed, plant, molecule, cloud-server"
            width={760}
            height={1900}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
