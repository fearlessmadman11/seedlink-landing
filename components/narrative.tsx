import Image from "next/image"

export function Narrative() {
  return (
    <section className="border-t border-border px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-foreground/50">
          Seedlink in four panels
        </p>
        <h2 className="mt-6 font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
          From seed to data center.
        </h2>

        <div className="mt-16 w-full max-w-[280px] md:max-w-[340px]">
          <Image
            src="/illustrations/four-panel.png"
            alt="The Seedlink narrative — seed, plant, molecule, cloud-server"
            width={760}
            height={1900}
            className="h-auto w-full"
          />
        </div>

        <p className="mt-16 max-w-md font-serif text-xl italic text-foreground/70 md:text-2xl text-balance">
          Cultivation becomes inventory. Inventory becomes data. Data becomes infrastructure.
        </p>
      </div>
    </section>
  )
}
