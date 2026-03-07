const statusItems = [
  "Currently in private developer preview",
  "Starting with Metrc-based states",
  "Built with compliance, security, and auditability in mind",
]

export function StatusSection() {
  return (
    <section className="border-t border-border px-6 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-3xl italic text-foreground md:text-4xl">
          Current status
        </h2>

        <ul className="mt-10 max-w-xl space-y-4">
          {statusItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 text-foreground/70"
            >
              <span className="h-1.5 w-1.5 bg-accent" />
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
