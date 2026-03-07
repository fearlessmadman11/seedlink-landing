export function DeveloperSection() {
  const codeExample = `POST /inventory/transfer

{
  "from_license": "LIC-123",
  "to_license": "LIC-456",
  "items": [
    {
      "package_id": "PKG-789",
      "quantity": 100,
      "unit": "grams"
    }
  ]
}`

  return (
    <section id="developers" className="border-t border-border px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          Developer-first
        </h2>

        <p className="mt-4 max-w-lg text-foreground/70">
          A clean, predictable API that works the way you expect.
        </p>

        <div className="mt-12 max-w-2xl border border-border bg-card">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="font-mono text-xs text-foreground/50">
              api-request.json
            </span>
          </div>

          <pre className="overflow-x-auto p-6">
            <code className="font-mono text-sm leading-relaxed text-foreground/90">
              {codeExample}
            </code>
          </pre>
        </div>

        <p className="mt-6 font-mono text-sm text-foreground/50">
          Same API, different state systems — handled automatically.
        </p>
      </div>
    </section>
  )
}
