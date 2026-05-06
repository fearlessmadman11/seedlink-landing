"use client"

import { useState, type CSSProperties } from "react"

type Theme = "light" | "dark"
type Step = "mode" | "scan" | "queue" | "validating" | "success" | "error"
type Mode = "tag_plants" | "move_packages" | "scan_manifest" | "finalize_sale"
type Scanner = "camera" | "bluetooth"

const COLOR_PRESETS = [
  { hex: "#2d5240", label: "Forest" },
  { hex: "#1f4d8c", label: "Indigo" },
  { hex: "#7a3d8c", label: "Plum" },
  { hex: "#c5a563", label: "Gold" },
  { hex: "#8c3d2e", label: "Brick" },
  { hex: "#1a1a1a", label: "Black" },
]

const BG_PRESETS: Record<Theme, { hex: string; label: string }[]> = {
  light: [
    { hex: "#f3ecd9", label: "Cream" },
    { hex: "#ffffff", label: "White" },
    { hex: "#f5f3ee", label: "Warm gray" },
    { hex: "#f4f5f7", label: "Cool gray" },
    { hex: "#fdfbf5", label: "Pale" },
  ],
  dark: [
    { hex: "#1f2a1d", label: "Forest" },
    { hex: "#0a0a0a", label: "Black" },
    { hex: "#18181b", label: "Charcoal" },
    { hex: "#1a1f2e", label: "Slate" },
    { hex: "#1a1612", label: "Coffee" },
  ],
}

const THEME_DEFAULT_BG: Record<Theme, string> = {
  light: "#f3ecd9",
  dark: "#1f2a1d",
}

const MODES: Record<Mode, { name: string; eyebrow: string; describe: string }> = {
  tag_plants: {
    name: "Tag plants",
    eyebrow: "Tag plants",
    describe: "Scan new plant tags as plants enter the regulated lifecycle.",
  },
  move_packages: {
    name: "Move packages",
    eyebrow: "Move packages",
    describe: "Scan packages onto an outgoing transfer manifest.",
  },
  scan_manifest: {
    name: "Receive manifest",
    eyebrow: "Receive manifest",
    describe: "Scan packages off an incoming transfer at receipt.",
  },
  finalize_sale: {
    name: "Finalize sale",
    eyebrow: "Finalize sale",
    describe: "Scan a package at point-of-sale to record the transaction.",
  },
}

const MOCK_TAGS = [
  { id: "1A40F00000001000000001", name: "Blue Dream · clone", status: "valid" as const },
  { id: "1A40F00000001000000002", name: "Blue Dream · clone", status: "valid" as const },
  { id: "1A40F00000001000000003", name: "Validating…", status: "pending" as const },
]

function primaryFg(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const lum = 0.299 * r + 0.587 * g + 0.114 * b
  return lum > 0.55 ? "#1f3326" : "#f3ecd9"
}

const SeedlinkMark = ({ size = 11 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <ellipse cx="32" cy="49" rx="11" ry="9" />
    <path d="M30 42 C30 30 31 25 32 21 C33 25 34 30 34 42 Z" />
    <path d="M32 21 C22 22 14 14 16 4 C26 7 32 13 32 21 Z" />
    <path d="M32 21 C42 22 50 14 48 4 C38 7 32 13 32 21 Z" />
  </svg>
)

const Powered = () => (
  <span className="cdemo-powered">
    <SeedlinkMark />
    Powered by SeedLink
  </span>
)

function progressOf(step: Step): number {
  switch (step) {
    case "mode":
      return 1
    case "scan":
      return 2
    default:
      return 3
  }
}

/* ───────────────────────────────────────────────
   Mode tile icons — simple inline SVG matching the line-art register
   ─────────────────────────────────────────────── */

const PlantIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M9 18h6l-1 4h-4z" />
    <path d="M9 18h6" />
    <path d="M12 14v-2" />
    <path d="M12 12 C 8 12 6 9 6 7 C 9 7 12 9 12 12 Z" />
    <path d="M12 12 C 16 12 18 9 18 7 C 15 7 12 9 12 12 Z" />
  </svg>
)

const PackageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="4" y="7" width="16" height="13" />
    <line x1="12" y1="7" x2="12" y2="20" />
    <line x1="4" y1="13" x2="20" y2="13" />
    <path d="M12 7 C 10 5 8 6 9 7" />
    <path d="M12 7 C 14 5 16 6 15 7" />
  </svg>
)

const TransferIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <rect x="3" y="9" width="11" height="8" />
    <line x1="14" y1="13" x2="22" y2="13" />
    <path d="M19 10 L 22 13 L 19 16" />
  </svg>
)

const SaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
    <path d="M7 3 v 18 l 1.5 -1.5 L 10 21 l 1.5 -1.5 L 13 21 l 1.5 -1.5 L 16 21 V 3 Z" />
    <line x1="9" y1="8" x2="14" y2="8" />
    <line x1="9" y1="12" x2="14" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
  </svg>
)

const MODE_ICON: Record<Mode, () => React.JSX.Element> = {
  tag_plants: PlantIcon,
  move_packages: PackageIcon,
  scan_manifest: TransferIcon,
  finalize_sale: SaleIcon,
}

/* ───────────────────────────────────────────────
   The demo
   ─────────────────────────────────────────────── */

export function CaptureDemo() {
  const [theme, setTheme] = useState<Theme>("light")
  const [background, setBackground] = useState(THEME_DEFAULT_BG.light)
  const [primary, setPrimary] = useState("#2d5240")
  const [step, setStep] = useState<Step>("mode")
  const [mode, setMode] = useState<Mode>("tag_plants")
  const [scanner, setScanner] = useState<Scanner>("camera")

  const customerName = "Acme Cannabis Co."

  const handleThemeChange = (t: Theme) => {
    setTheme(t)
    setBackground(THEME_DEFAULT_BG[t])
  }

  const cssVars = {
    "--cdemo-primary": primary,
    "--cdemo-primary-fg": primaryFg(primary),
    "--cdemo-paper": background,
    "--cdemo-radius": "0px",
  } as CSSProperties

  const filled = progressOf(step)

  return (
    <div className="space-y-6">
      {/* Controls strip — centered above the phone */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {/* Theme */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Theme</span>
          <div className="flex gap-1">
            {(["light", "dark"] as Theme[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => handleThemeChange(t)}
                className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                  theme === t
                    ? "bg-foreground text-background"
                    : "border border-border text-foreground/70 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Background */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Background</span>
          <div className="flex gap-1.5">
            {BG_PRESETS[theme].map((c) => (
              <button
                key={c.hex}
                type="button"
                onClick={() => setBackground(c.hex)}
                title={c.label}
                aria-label={`Background: ${c.label}`}
                style={{ background: c.hex }}
                className={`h-6 w-6 border transition-transform hover:scale-110 ${
                  background === c.hex ? "border-foreground ring-2 ring-foreground/30" : "border-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Accent */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Accent</span>
          <div className="flex gap-1.5">
            {COLOR_PRESETS.map((c) => (
              <button
                key={c.hex}
                type="button"
                onClick={() => setPrimary(c.hex)}
                title={c.label}
                aria-label={`Accent: ${c.label}`}
                style={{ background: c.hex }}
                className={`h-6 w-6 border transition-transform hover:scale-110 ${
                  primary === c.hex ? "border-foreground ring-2 ring-foreground/30" : "border-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step nav */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">Step</span>
          <div className="flex flex-wrap gap-1">
            {(
              [
                ["mode", "Mode"],
                ["scan", "Scan"],
                ["queue", "Queue"],
                ["validating", "Validating"],
                ["success", "Success"],
                ["error", "Error"],
              ] as [Step, string][]
            ).map(([s, label]) => (
              <button
                key={s}
                type="button"
                onClick={() => setStep(s)}
                className={`px-2.5 py-1.5 font-mono text-[11px] tracking-[0.05em] transition-colors ${
                  step === s
                    ? "bg-foreground text-background"
                    : "border border-border text-foreground/60 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Phone-framed SDK */}
      <div className={`cdemo ${theme === "dark" ? "dark" : ""}`} style={cssVars}>
        <div className="cdemo-phone">
          <div className="cdemo-phone-btn cdemo-phone-btn-action" />
          <div className="cdemo-phone-btn cdemo-phone-btn-vol-up" />
          <div className="cdemo-phone-btn cdemo-phone-btn-vol-down" />
          <div className="cdemo-phone-btn cdemo-phone-btn-power" />

          <div className="cdemo-phone-screen">
            <div className="cdemo-phone-island" />
            <div className="cdemo-phone-home" />

            <div className="cdemo-iframe">
              {/* Header */}
              <div className="cdemo-header">
                <div className="cdemo-customer">{customerName}</div>
                <div className="cdemo-close">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 2 L12 12 M12 2 L2 12" />
                  </svg>
                </div>
              </div>

              {/* Progress */}
              <div className="cdemo-progress">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`cdemo-seg ${i <= filled ? "active" : ""}`} />
                ))}
              </div>

              {/* Body */}
              <div className="cdemo-body">
                {step === "mode" && (
                  <ModeStep
                    onSelect={(m) => {
                      setMode(m)
                      setStep("scan")
                    }}
                  />
                )}
                {step === "scan" && <ScanStep mode={mode} scanner={scanner} setScanner={setScanner} />}
                {step === "queue" && <QueueStep mode={mode} />}
                {step === "validating" && <ValidatingStep />}
                {step === "success" && <SuccessStep mode={mode} />}
                {step === "error" && <ErrorStep mode={mode} />}
              </div>

              {/* Action bar */}
              <ActionBar step={step} setStep={setStep} />
            </div>
          </div>
        </div>
      </div>

      {/* Code snippet */}
      <div className="space-y-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">SDK init code</div>
        <CodeSnippet
          theme={theme}
          background={background}
          primary={primary}
          customer={customerName}
          mode={mode}
        />
        <p className="font-mono text-[11px] leading-relaxed text-foreground/50">
          Drop this into your operator-facing app. Cultivators scan tags in the field; you get
          validated batches written to the connected provider in real time.
        </p>
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────────
   Action bar
   ─────────────────────────────────────────────── */

function ActionBar({ step, setStep }: { step: Step; setStep: (s: Step) => void }) {
  if (step === "mode") {
    return (
      <div className="cdemo-actions">
        <Powered />
      </div>
    )
  }
  if (step === "scan") {
    return (
      <div className="cdemo-actions">
        <Powered />
        <button className="cdemo-btn ghost" onClick={() => setStep("mode")}>
          Back
        </button>
        <button className="cdemo-btn" onClick={() => setStep("queue")}>
          Continue
        </button>
      </div>
    )
  }
  if (step === "queue") {
    return (
      <div className="cdemo-actions">
        <Powered />
        <button className="cdemo-btn ghost" onClick={() => setStep("scan")}>
          Back
        </button>
        <button className="cdemo-btn" onClick={() => setStep("validating")}>
          Submit batch
        </button>
      </div>
    )
  }
  if (step === "validating") {
    return (
      <div className="cdemo-actions">
        <Powered />
      </div>
    )
  }
  if (step === "success") {
    return (
      <div className="cdemo-actions">
        <Powered />
        <button className="cdemo-btn" onClick={() => setStep("mode")}>
          Done
        </button>
      </div>
    )
  }
  if (step === "error") {
    return (
      <div className="cdemo-actions">
        <Powered />
        <button className="cdemo-btn ghost" onClick={() => setStep("queue")}>
          Back
        </button>
        <button className="cdemo-btn" onClick={() => setStep("validating")}>
          Try again
        </button>
      </div>
    )
  }
  return null
}

/* ───────────────────────────────────────────────
   Step body renderers
   ─────────────────────────────────────────────── */

function ModeStep({ onSelect }: { onSelect: (m: Mode) => void }) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 1 of 3</div>
      <h3 className="cdemo-title">What are you capturing?</h3>
      <p className="cdemo-lede">
        Pick a capture mode. Each scan is validated against your active connection in real time.
      </p>
      <div className="mt-6 flex flex-col gap-2">
        {(Object.keys(MODES) as Mode[]).map((m) => {
          const meta = MODES[m]
          const Icon = MODE_ICON[m]
          return (
            <button key={m} type="button" className="cdemo-tile" onClick={() => onSelect(m)}>
              <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center" style={{ color: "var(--cdemo-ink)" }}>
                <Icon />
              </div>
              <div className="flex-1 min-w-0">
                <div className="cdemo-tile-name">{meta.name}</div>
                <div className="cdemo-tile-desc">{meta.describe}</div>
              </div>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ color: "var(--cdemo-ink-muted)" }}
              >
                <path d="M3 7 H 11 M 7 3 L 11 7 L 7 11" />
              </svg>
            </button>
          )
        })}
      </div>
    </>
  )
}

function ScanStep({
  mode,
  scanner,
  setScanner,
}: {
  mode: Mode
  scanner: Scanner
  setScanner: (s: Scanner) => void
}) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 2 of 3 · {MODES[mode].eyebrow}</div>
      <h3 className="cdemo-title">Ready to scan</h3>
      <p className="cdemo-lede">
        {scanner === "camera"
          ? "Point your camera at the tag. We'll auto-detect the format."
          : "Pull the trigger on your Bluetooth scanner. Each read appears in the queue below."}
      </p>

      <div className="cdemo-viewfinder">
        <div className="cdemo-vf-tl" />
        <div className="cdemo-vf-tr" />
        <div className="cdemo-vf-bl" />
        <div className="cdemo-vf-br" />
        <div className="cdemo-vf-line" />
        <div className="cdemo-vf-label">{scanner === "camera" ? "Point at tag" : "Awaiting scan"}</div>
      </div>

      <div className="cdemo-scanner-toggle">
        <button
          type="button"
          className={scanner === "camera" ? "active" : ""}
          onClick={() => setScanner("camera")}
        >
          Camera
        </button>
        <button
          type="button"
          className={scanner === "bluetooth" ? "active" : ""}
          onClick={() => setScanner("bluetooth")}
        >
          Bluetooth
        </button>
      </div>
    </>
  )
}

function QueueStep({ mode }: { mode: Mode }) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 3 of 3 · {MODES[mode].eyebrow}</div>
      <h3 className="cdemo-title">3 tags scanned</h3>
      <p className="cdemo-lede">Validation runs against your Metrc connection in real time.</p>
      <div className="cdemo-tag-list">
        {MOCK_TAGS.map((tag) => (
          <div key={tag.id} className="cdemo-tag">
            <span className={`cdemo-tag-dot ${tag.status}`} />
            <div className="cdemo-tag-meta">
              <div className="cdemo-tag-id">{tag.id}</div>
              <div className="cdemo-tag-name">{tag.name}</div>
            </div>
            <span className={`cdemo-tag-status ${tag.status}`}>
              {tag.status === "valid" ? "Valid" : tag.status === "pending" ? "Validating" : "Invalid"}
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

function ValidatingStep() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-10">
      <div className="cdemo-spinner" />
      <div
        className="font-mono text-[11px] uppercase tracking-[0.18em]"
        style={{ color: "var(--cdemo-ink-soft)" }}
      >
        Submitting to Metrc · California
      </div>
      <div
        className="max-w-[280px] text-center text-[13px] leading-relaxed"
        style={{ color: "var(--cdemo-ink-muted)" }}
      >
        Recording 3 tags. Usually completes in 2-3 seconds.
      </div>
    </div>
  )
}

function SuccessStep({ mode }: { mode: Mode }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 py-4 text-center">
      <img
        src="/illustrations/engraved/package.png"
        alt=""
        aria-hidden="true"
        className="mb-1 h-20 w-20 cdemo-success-engraving"
      />
      <h3 className="cdemo-title text-center">Batch submitted.</h3>
      <p className="max-w-[300px] text-[13px] leading-relaxed" style={{ color: "var(--cdemo-ink-soft)" }}>
        3 tags recorded under {MODES[mode].name.toLowerCase()}.
      </p>
      <div className="cdemo-conn-id">capture_evt_a3b9c2d8</div>
      <p className="text-[12px]" style={{ color: "var(--cdemo-ink-muted)" }}>
        View in Metrc · California
      </p>
    </div>
  )
}

function ErrorStep({ mode }: { mode: Mode }) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 3 of 3 · {MODES[mode].eyebrow}</div>
      <h3 className="cdemo-title">Couldn't submit batch</h3>
      <p className="cdemo-lede">One tag failed validation. The rest of the batch is paused.</p>
      <div className="cdemo-error-box">
        <div className="cdemo-error-label">tag_not_found</div>
        <div className="cdemo-error-text">
          Tag <span style={{ fontFamily: "JetBrains Mono, monospace" }}>1A40F00000001000000003</span>
          {" "}was not found in your Metrc account. Verify the tag is undamaged and was issued to this
          facility.
        </div>
      </div>
    </>
  )
}

function CodeSnippet({
  theme,
  background,
  primary,
  customer,
  mode,
}: {
  theme: Theme
  background: string
  primary: string
  customer: string
  mode: Mode
}) {
  const escaped = customer.replace(/'/g, "\\'")
  return (
    <pre className="cdemo-code">
      <span className="ck">SeedlinkCapture</span>.<span className="ck">create</span>{"({"}
      {"\n  "}token: <span className="cs">{"'lt_9f2c8a4b7e1d3f6g'"}</span>,
      {"\n  "}connectionId: <span className="cs">{"'conn_mrc_9f8a7b6c'"}</span>,
      {"\n  "}theme: <span className="cs">{`'${theme}'`}</span>,
      {"\n  "}backgroundColor: <span className="cs">{`'${background}'`}</span>,
      {"\n  "}primaryColor: <span className="cs">{`'${primary}'`}</span>,
      {"\n  "}customerName: <span className="cs">{`'${escaped}'`}</span>,
      {"\n  "}mode: <span className="cs">{`'${mode}'`}</span>,
      {"\n  "}onCapture: (batch) {"=> {"}
      {"\n    "}<span className="cc">{"// batch.captureEventId, batch.tags[]"}</span>
      {"\n  "}{"},"}
      {"\n"}{"});"}
    </pre>
  )
}
