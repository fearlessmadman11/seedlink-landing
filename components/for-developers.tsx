import Image from "next/image"
import { PythonLogo, TypeScriptLogo } from "@/components/logos"

export function ForDevelopers() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-wider text-foreground/50">
          Built for builders
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl italic text-foreground md:text-4xl lg:text-5xl text-balance">
          For developers and agents
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {/* MCP — the ornate key, unlocking scoped agent access */}
          <div className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50">
            <div className="flex h-40 items-center justify-center">
              <Image
                src="/illustrations/engraved/mcp.png"
                alt="MCP — ornate key"
                width={400}
                height={400}
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-foreground/50">
              MCP
            </p>
            <h3 className="mt-2 font-mono text-base text-foreground">
              MCP server endpoint
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Hook AI agents directly into seed-to-sale data with a Model Context
              Protocol endpoint. Tool calls, scoped credentials, and audit logs
              out of the box.
            </p>
          </div>

          {/* Sandbox — the open botanical book, a reference catalog of fixtures */}
          <div className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50">
            <div className="flex h-40 items-center justify-center">
              <Image
                src="/illustrations/engraved/item.png"
                alt="Sandbox — open botanical reference book"
                width={400}
                height={320}
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-foreground/50">
              Sandbox
            </p>
            <h3 className="mt-2 font-mono text-base text-foreground">
              Sandbox environment
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Build and test against a full sandbox with realistic state-system
              fixtures. Identical schema to production — no surprises at
              go-live.
            </p>
          </div>

          {/* Connect SDK — two grafted stems, the connection metaphor */}
          <div className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50">
            <div className="flex h-40 items-center justify-center">
              <Image
                src="/illustrations/engraved/connection.png"
                alt="Connect SDK — two grafted cannabis stems"
                width={400}
                height={650}
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-foreground/50">
              SDKs
            </p>
            <h3 className="mt-2 font-mono text-base text-foreground">
              Connect SDK
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Pre-built component for collecting sensitive credentials and
              authenticating users across Metrc, BioTrack, and every system we
              support — drop it in and go.
            </p>
            <div className="mt-6 flex items-center gap-5 text-foreground/70">
              <TypeScriptLogo className="h-6 w-6" />
              <PythonLogo className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
