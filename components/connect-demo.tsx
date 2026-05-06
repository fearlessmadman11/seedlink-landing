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

export function ConnectDemo() {
  const [theme, setTheme] = useState<Theme>("light")
  const [primary, setPrimary] = useState("#2d5240")
  const [step, setStep] = useState<Step>("provider")
  const [selectedState, setSelectedState] = useState("California")

  const customerName = "Acme Cannabis Co."

  const cssVars = {
    "--cdemo-primary": primary,
    "--cdemo-primary-fg": primaryFg(primary),
    "--cdemo-radius": "0px",
  } as CSSProperties

  const progress = step === "provider" ? 1 : step === "state" ? 2 : 3

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_minmax(380px,460px)]">
      {/* LEFT: SDK preview frame */}
      <div className={`cdemo ${theme === "dark" ? "dark" : ""}`} style={cssVars}>
        {/* Controls strip */}
        <div className="mb-6 flex flex-wrap items-center gap-x-8 gap-y-3">
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
                  onClick={() => setTheme(t)}
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

          {/* Colors */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              Color
            </span>
            <div className="flex gap-1.5">
              {COLOR_PRESETS.map((c) => (
                <button
                  key={c.hex}
                  type="button"
                  onClick={() => setPrimary(c.hex)}
                  title={c.label}
                  aria-label={`Primary color: ${c.label}`}
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
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
              Step
            </span>
            <div className="flex flex-wrap gap-1">
              {(
                [
                  ["provider", "1"],
                  ["state", "2"],
                  ["credentials", "3"],
                  ["validating", "4"],
                  ["success", "5"],
                  ["error", "6"],
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

        {/* The SDK iframe content */}
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
              <div key={i} className={`cdemo-seg ${i <= progress ? "active" : ""}`} />
            ))}
          </div>

          {/* Body */}
          <div className="cdemo-body">
            {step === "provider" && <ProviderStep onSelect={() => setStep("state")} />}
            {step === "state" && (
              <StateStep
                selected={selectedState}
                onSelect={setSelectedState}
                onBack={() => setStep("provider")}
                onContinue={() => setStep("credentials")}
              />
            )}
            {step === "credentials" && (
              <CredentialsStep
                selectedState={selectedState}
                customerName={customerName}
                onBack={() => setStep("state")}
                onConnect={() => setStep("validating")}
              />
            )}
            {step === "validating" && <ValidatingStep selectedState={selectedState} />}
            {step === "success" && <SuccessStep customerName={customerName} onDone={() => setStep("provider")} />}
            {step === "error" && (
              <ErrorStep onBack={() => setStep("state")} onRetry={() => setStep("validating")} />
            )}
          </div>
        </div>
      </div>

      {/* RIGHT: Generated code snippet */}
      <div className="flex flex-col gap-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
          SDK init code
        </div>
        <CodeSnippet theme={theme} primary={primary} customer={customerName} />
        <p className="font-mono text-[11px] leading-relaxed text-foreground/50">
          Drop this into your app. The iframe renders with the config you've selected — themed to
          match your brand, embedded next to your application chrome.
        </p>
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────────
   Step renderers
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
      <div className="mt-7 flex flex-col gap-2.5">
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
            <div className="cdemo-tile-desc">9 states · CA, CO, MA, MD, MI, MO, NV, OK, OR</div>
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
              Coming soon · IL, NM, HI, NH
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
  onBack,
  onContinue,
}: {
  selected: string
  onSelect: (s: string) => void
  onBack: () => void
  onContinue: () => void
}) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 2 of 3 · Metrc</div>
      <h3 className="cdemo-title">Which state do you operate in?</h3>
      <p className="cdemo-lede">
        Metrc credentials are state-specific. Pick the state where your facility holds its license.
      </p>
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
      <div className="cdemo-actions" style={{ borderTop: "none", padding: "24px 0 0", marginTop: "24px" }}>
        <Powered />
        <button type="button" className="cdemo-btn ghost" onClick={onBack}>
          Back
        </button>
        <button type="button" className="cdemo-btn" onClick={onContinue}>
          Continue
        </button>
      </div>
    </>
  )
}

function CredentialsStep({
  selectedState,
  customerName,
  onBack,
  onConnect,
}: {
  selectedState: string
  customerName: string
  onBack: () => void
  onConnect: () => void
}) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 3 of 3 · Metrc · {selectedState}</div>
      <h3 className="cdemo-title">Enter your Metrc credentials</h3>
      <p className="cdemo-lede">
        Your User API Key is issued by your Metrc state administrator and lives in your Metrc account
        profile.
      </p>
      <div className="cdemo-form">
        <div className="cdemo-field">
          <label>User API Key</label>
          <input type="password" placeholder="Paste your User API Key" autoComplete="off" />
          <div className="cdemo-field-hint">
            Find this under Account → Identification → User API Key in your Metrc dashboard.
          </div>
        </div>
        <div className="cdemo-security">
          <svg className="cdemo-security-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 6 V 4 a 4 4 0 0 1 8 0 V 6 M 2 6 H 12 V 12 H 2 Z" />
          </svg>
          <div className="cdemo-security-text">
            Your key is encrypted with AES-256-GCM and stored in our credential vault.{" "}
            <strong>{customerName}</strong> never sees it directly.
          </div>
        </div>
      </div>
      <div className="cdemo-actions" style={{ borderTop: "none", padding: "24px 0 0", marginTop: "24px" }}>
        <Powered />
        <button type="button" className="cdemo-btn ghost" onClick={onBack}>
          Back
        </button>
        <button type="button" className="cdemo-btn" onClick={onConnect}>
          Connect
        </button>
      </div>
    </>
  )
}

function ValidatingStep({ selectedState }: { selectedState: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-14">
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
        Verifying your User API Key. Metrc usually responds in under 5 seconds.
      </div>
    </div>
  )
}

function SuccessStep({ customerName, onDone }: { customerName: string; onDone: () => void }) {
  return (
    <>
      <div className="flex flex-col items-center gap-3 px-5 pt-8 pb-4 text-center">
        <img
          className="cdemo-success-engraving"
          src="/illustrations/engraved/connection.png"
          alt="Two grafted cannabis stems — Connection"
        />
        <h3 className="cdemo-title text-center">You're connected.</h3>
        <p
          className="max-w-[320px] text-[13px] leading-relaxed"
          style={{ color: "var(--cdemo-ink-soft)" }}
        >
          <strong>{customerName}</strong> can now read your Metrc data on your behalf — packages,
          plants, transfers, and more.
        </p>
        <div className="cdemo-conn-id">conn_mrc_9f8a7b6c</div>
        <p
          className="max-w-[320px] text-[13px] leading-relaxed"
          style={{ color: "var(--cdemo-ink-soft)" }}
        >
          2 facilities found · Active
        </p>
      </div>
      <div className="cdemo-actions">
        <Powered />
        <button type="button" className="cdemo-btn" style={{ marginLeft: "auto" }} onClick={onDone}>
          Done
        </button>
      </div>
    </>
  )
}

function ErrorStep({ onBack, onRetry }: { onBack: () => void; onRetry: () => void }) {
  return (
    <>
      <div className="cdemo-eyebrow">Step 3 of 3 · Metrc · California</div>
      <h3 className="cdemo-title">We couldn't validate that key</h3>
      <p className="cdemo-lede">
        Metrc rejected the credentials. Common causes: an expired key, a key for the wrong state, or
        a copy-paste with an extra character.
      </p>
      <div className="cdemo-error-box">
        <div className="cdemo-error-label">Error · invalid_credentials</div>
        <div className="cdemo-error-text">
          Metrc returned 401 Unauthorized. Verify the User API Key in your Metrc Account →
          Identification page and re-enter it.
        </div>
      </div>
      <div className="cdemo-form">
        <div className="cdemo-field">
          <label>User API Key</label>
          <input type="password" placeholder="Paste your User API Key" autoComplete="off" />
        </div>
      </div>
      <div className="cdemo-actions" style={{ borderTop: "none", padding: "24px 0 0", marginTop: "24px" }}>
        <Powered />
        <button type="button" className="cdemo-btn ghost" onClick={onBack}>
          Back
        </button>
        <button type="button" className="cdemo-btn" onClick={onRetry}>
          Try again
        </button>
      </div>
    </>
  )
}

function CodeSnippet({
  theme,
  primary,
  customer,
}: {
  theme: Theme
  primary: string
  customer: string
}) {
  const escaped = customer.replace(/'/g, "\\'")
  return (
    <pre className="cdemo-code">
      <span className="ck">SeedlinkConnect</span>.<span className="ck">create</span>{"({"}
      {"\n  "}token: <span className="cs">{"'lt_9f2c8a4b7e1d3f6g'"}</span>,
      {"\n  "}theme: <span className="cs">{`'${theme}'`}</span>,
      {"\n  "}primaryColor: <span className="cs">{`'${primary}'`}</span>,
      {"\n  "}customerName: <span className="cs">{`'${escaped}'`}</span>,
      {"\n  "}onSuccess: (publicToken, metadata) {"=> {"}
      {"\n    "}<span className="cc">{"// hand publicToken to your server"}</span>
      {"\n  "}{"},"}
      {"\n"}{"});"}
    </pre>
  )
}
