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
          {/* MCP */}
          <div className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-foreground"
              role="img"
              aria-label="MCP"
            >
              <path d="M22 14 L10 32 L22 50" />
              <path d="M42 14 L54 32 L42 50" />
              <ellipse cx="32" cy="40" rx="5" ry="4" fill="currentColor" />
              <line x1="32" y1="36" x2="32" y2="26" />
              <path d="M32 26 Q 27 24 25 20" fill="currentColor" />
              <path d="M32 26 Q 37 24 39 20" fill="currentColor" />
            </svg>
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

          {/* Sandbox */}
          <div className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-foreground"
              role="img"
              aria-label="Sandbox"
            >
              <path d="M26 10 L26 24 L14 50 Q 14 56 22 56 L42 56 Q 50 56 50 50 L38 24 L38 10" />
              <line x1="24" y1="10" x2="40" y2="10" />
              <line x1="20" y1="42" x2="44" y2="42" />
              <circle cx="28" cy="48" r="1.5" fill="currentColor" />
              <circle cx="36" cy="50" r="1.2" fill="currentColor" />
              <circle cx="32" cy="52" r="1" fill="currentColor" />
            </svg>
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

          {/* SDKs — credential-collection component */}
          <div className="flex flex-col border border-border p-8 transition-colors hover:border-accent/50">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-foreground"
              role="img"
              aria-label="Connect"
            >
              <path d="M14 14 Q 14 32 32 32 Q 50 32 50 50" />
              <path d="M50 14 Q 50 32 32 32 Q 14 32 14 50" />
              <circle cx="32" cy="32" r="3" fill="currentColor" />
            </svg>
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
