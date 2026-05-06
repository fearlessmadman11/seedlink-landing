"use client"

import { useState, type CSSProperties } from "react"

type Theme = "light" | "dark"
type Step = "provider" | "state" | "credentials" | "validating" | "success" | "error"

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

const STATES = [
  "California",
  "Colorado",
  "Massachusetts",
  "Maryland",
  "Michigan",
  "Missouri",
  "Nevada",
  "Oklahoma",
  "Oregon",
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
    case "provider":
      return 1
    case "state":
      return 2
    default:
      return 3
  }
}

export function ConnectDemo() {
  const [theme, setTheme] = useState<Theme>("light")
  const [background, setBackground] = useState(THEME_DEFAULT_BG.light)
  const [primary, setPrimary] = useState("#2d5240")
  const [step, setStep] = useState<Step>("provider")
  const [selectedState, setSelectedState] = useState("California")

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
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Theme
          </span>
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
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Background
          </span>
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
                  background === c.hex
                    ? "border-foreground ring-2 ring-foreground/30"
                    : "border-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Accent (primary) */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Accent
          </span>
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
                  primary === c.hex
                    ? "border-foreground ring-2 ring-foreground/30"
                    : "border-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step nav */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
            Step
          </span>
          <div className="flex flex-wrap gap-1">
            {(
              [
                ["provider", "Provider"],
                ["state", "State"],
                ["credentials", "Credentials"],
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

      {/* SDK iframe wrapped in an iPhone-shaped phone frame */}
      <div className={`cdemo ${theme === "dark" ? "dark" : ""}`} style={cssVars}>
        <div className="cdemo-phone">
          {/* Side buttons — physical hardware hints */}
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
            {step === "provider" && <ProviderStep onSelect={() => setStep("state")} />}
            {step === "state" && (
              <StateStep
                selected={selectedState}
                onSelect={setSelectedState}
              />
            )}
            {step === "credentials" && (
              <CredentialsStep selectedState={selectedState} customerName={customerName} />
            )}
            {step === "validating" && <ValidatingStep selectedState={selectedState} />}
            {step === "success" && <SuccessStep customerName={customerName} />}
            {step === "error" && <ErrorStep />}
          </div>

          {/* Action bar */}
          <ActionBar step={step} setStep={setStep} />
            </div>
          </div>
        </div>
      </div>

      {/* Code snippet */}
      <div className="space-y-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
          SDK init code
        </div>
        <CodeSnippet
          theme={theme}
          background={background}
          primary={primary}
          customer={customerName}
        />
        <p className="font-mono text-[11px] leading-relaxed text-foreground/50">
          Drop this into your app. The iframe renders with the config you've selected — themed to
          match your brand, embedded next to your application chrome.
        </p>
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────────
   Action bar — uniform footer with Powered by + buttons per step
   ─────────────────────────────────────────────── */

function ActionBar({ step, setStep }: { step: Step; setStep: (s: Step) => void }) {
  if (step === "provider") {
    // Provider-step has no buttons — clicking a tile advances
    return (
      <div className="cdemo-actions">
        <Powered />
      </div>
    )
  }
  if (step === "state") {
    return (
      <div className="cdemo-actions">
        <Powered />
        <button className="cdemo-btn ghost" onClick={() => setStep("provider")}>Back</button>
        <button className="cdemo-btn" onClick={() => setStep("credentials")}>Continue</button>
      </div>
    )
  }
  if (step === "credentials") {
    return (
      <div className="cdemo-actions">
        <Powered />
        <button className="cdemo-btn ghost" onClick={() => setStep("state")}>Back</button>
        <button className="cdemo-btn" onClick={() => setStep("validating")}>Connect</button>
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
        <button className="cdemo-btn" onClick={() => setStep("provider")}>Done</button>
      </div>
    )
  }
  if (step === "error") {
    return (
      <div className="cdemo-actions">
        <Powered />
        <button className="cdemo-btn ghost" onClick={() => setStep("state")}>Back</button>
        <button className="cdemo-btn" onClick={() => setStep("validating")}>Try again</button>
      </div>
    )
  }
  return null
}

/* ───────────────────────────────────────────────
   Step body renderers (no action buttons — those live in ActionBar)
   ─────────────────────────────────────────────── */

function ProviderStep({ onSelect }: { onSelect: () => void }) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 1 of 3</div>
      <h3 className="cdemo-title">Connect your compliance system</h3>
      <p className="cdemo-lede">
        Pick the seed-to-sale system your facility uses. We'll collect your credentials securely
        and verify the connection.
      </p>
      <div className="mt-6 flex flex-col gap-2">
        <button type="button" className="cdemo-tile" onClick={onSelect}>
          <div className="flex h-7 w-14 flex-shrink-0 items-center" style={{ color: "var(--cdemo-ink)" }}>
            <svg viewBox="0 0 160 48" fill="currentColor">
              <g>
                <path
                  d="M132 14c5-8 14-11 22-9-1 9-7 16-15 18-3 1-7 1-10-1 0-3 1-6 3-8z"
                  opacity="0.85"
                />
                <path d="M137 22c-2 4-2 9 0 13-4-1-7-5-7-10 0-2 1-4 2-5 2 1 4 1 5 2z" opacity="0.55" />
              </g>
              <text x="0" y="38" fontFamily="ui-sans-serif" fontWeight="700" fontSize="34" letterSpacing="-1" fill="currentColor">
                metrc
              </text>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="cdemo-tile-name">Metrc</div>
            <div className="cdemo-tile-desc">9 states</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--cdemo-ink-muted)" }}>
            <path d="M3 7 H 11 M 7 3 L 11 7 L 7 11" />
          </svg>
        </button>
        <div className="cdemo-tile coming-soon">
          <div className="flex h-7 w-14 flex-shrink-0 items-center" style={{ color: "var(--cdemo-ink)" }}>
            <svg viewBox="0 0 220 48" fill="currentColor">
              <text x="0" y="34" fontFamily="ui-sans-serif" fontWeight="700" fontSize="30" letterSpacing="-1" fill="currentColor">
                BioTrack
              </text>
              <text x="135" y="34" fontFamily="ui-sans-serif" fontWeight="500" fontSize="22" letterSpacing="0.5" fill="currentColor" opacity="0.6">
                THC
              </text>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="cdemo-tile-name">BioTrack</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.15em] mt-1" style={{ color: "var(--cdemo-ink-muted)" }}>
              Coming soon
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function StateStep({
  selected,
  onSelect,
}: {
  selected: string
  onSelect: (s: string) => void
}) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 2 of 3 · Metrc</div>
      <h3 className="cdemo-title">Which state?</h3>
      <p className="cdemo-lede">Metrc credentials are state-specific.</p>
      <div className="cdemo-state-grid">
        {STATES.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onSelect(s)}
            className={`cdemo-state-btn ${selected === s ? "selected" : ""}`}
          >
            {s}
          </button>
        ))}
      </div>
    </>
  )
}

function CredentialsStep({
  selectedState,
  customerName,
}: {
  selectedState: string
  customerName: string
}) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 3 of 3 · Metrc · {selectedState}</div>
      <h3 className="cdemo-title">Enter your Metrc API key</h3>
      <p className="cdemo-lede">
        Issued by your Metrc state administrator. Lives in your Metrc account profile.
      </p>
      <div className="cdemo-form">
        <div className="cdemo-field">
          <label>User API Key</label>
          <input type="password" placeholder="Paste your User API Key" autoComplete="off" />
          <div className="cdemo-field-hint">
            Account → Identification → User API Key in your Metrc dashboard.
          </div>
        </div>
        <div className="cdemo-security">
          <svg className="cdemo-security-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6 V 4 a 4 4 0 0 1 8 0 V 6 M 2 6 H 12 V 12 H 2 Z" />
          </svg>
          <div className="cdemo-security-text">
            Encrypted with AES-256-GCM. <strong>{customerName}</strong> never sees it directly.
          </div>
        </div>
      </div>
    </>
  )
}

function ValidatingStep({ selectedState }: { selectedState: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-10">
      <div className="cdemo-spinner" />
      <div
        className="font-mono text-[11px] uppercase tracking-[0.18em]"
        style={{ color: "var(--cdemo-ink-soft)" }}
      >
        Validating with Metrc · {selectedState}
      </div>
      <div
        className="max-w-[280px] text-center text-[13px] leading-relaxed"
        style={{ color: "var(--cdemo-ink-muted)" }}
      >
        Metrc usually responds in under 5 seconds.
      </div>
    </div>
  )
}

function SuccessStep({ customerName }: { customerName: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 py-4 text-center">
      <img
        src="/illustrations/engraved/connection.png"
        alt=""
        aria-hidden="true"
        className="mb-1 h-20 w-20 cdemo-success-engraving"
      />
      <h3 className="cdemo-title text-center">You're connected.</h3>
      <p
        className="max-w-[300px] text-[13px] leading-relaxed"
        style={{ color: "var(--cdemo-ink-soft)" }}
      >
        <strong>{customerName}</strong> can now read your Metrc data.
      </p>
      <div className="cdemo-conn-id">conn_mrc_9f8a7b6c</div>
      <p
        className="text-[12px]"
        style={{ color: "var(--cdemo-ink-muted)" }}
      >
        2 facilities · Active
      </p>
    </div>
  )
}

function ErrorStep() {
  return (
    <>
      <div className="cdemo-eyebrow">Step 3 of 3 · Metrc · California</div>
      <h3 className="cdemo-title">We couldn't validate that key</h3>
      <p className="cdemo-lede">
        Metrc rejected the credentials. Check the key and try again.
      </p>
      <div className="cdemo-error-box">
        <div className="cdemo-error-label">invalid_credentials</div>
        <div className="cdemo-error-text">
          Metrc returned 401 Unauthorized. Verify the User API Key in your Metrc Account →
          Identification page.
        </div>
      </div>
      <div className="cdemo-form">
        <div className="cdemo-field">
          <label>User API Key</label>
          <input type="password" placeholder="Paste your User API Key" autoComplete="off" />
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
}: {
  theme: Theme
  background: string
  primary: string
  customer: string
}) {
  const escaped = customer.replace(/'/g, "\\'")
  return (
    <pre className="cdemo-code">
      <span className="ck">SeedlinkConnect</span>.<span className="ck">create</span>{"({"}
      {"\n  "}token: <span className="cs">{"'lt_9f2c8a4b7e1d3f6g'"}</span>,
      {"\n  "}theme: <span className="cs">{`'${theme}'`}</span>,
      {"\n  "}backgroundColor: <span className="cs">{`'${background}'`}</span>,
      {"\n  "}primaryColor: <span className="cs">{`'${primary}'`}</span>,
      {"\n  "}customerName: <span className="cs">{`'${escaped}'`}</span>,
      {"\n  "}onSuccess: (publicToken, metadata) {"=> {"}
      {"\n    "}<span className="cc">{"// hand publicToken to your server"}</span>
      {"\n  "}{"},"}
      {"\n"}{"});"}
    </pre>
  )
}
