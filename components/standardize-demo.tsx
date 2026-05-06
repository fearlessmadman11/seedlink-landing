"use client"

import { useState, type ReactNode } from "react"

type EndpointId =
  | "facilities"
  | "packages"
  | "plants"
  | "harvests"
  | "transfers"
  | "sales"
  | "lab_results"

type Endpoint = {
  id: EndpointId
  label: string
  method: "GET"
  path: string
  query?: string
  describe: string
  responseTime: string
  responseStatus: string
  data: unknown
}

const CONNECTION_ID = "conn_mrc_9f8a7b6c"
const FACILITY_ID = "sandbox-fac-001"

const ENDPOINTS: Endpoint[] = [
  {
    id: "facilities",
    label: "Facilities",
    method: "GET",
    path: `/v1/connections/${CONNECTION_ID}/facilities`,
    describe: "List all facilities under this connection.",
    responseTime: "142ms",
    responseStatus: "200 OK",
    data: {
      data: [
        {
          id: "sandbox-fac-001",
          name: "Green Valley Dispensary",
          license_number: "C10-0000001-LIC",
          license_type: "Retailer",
          state: "CA",
          provider: "metrc",
          status: "active",
          capabilities: ["packages", "sales", "lab_results", "transfers"],
        },
        {
          id: "sandbox-fac-002",
          name: "Emerald Farms Cultivation",
          license_number: "C12-0000042-LIC",
          license_type: "Cultivator",
          state: "CA",
          provider: "metrc",
          status: "active",
        },
      ],
      meta: {
        request_id: "req_a1b2c3d4",
        provider: "metrc",
        state: "CA",
        timestamp: "2026-05-06T19:42:11Z",
      },
      pagination: { page: 1, per_page: 25, total: 2, total_pages: 1 },
    },
  },
  {
    id: "packages",
    label: "Packages",
    method: "GET",
    path: `/v1/connections/${CONNECTION_ID}/facilities/${FACILITY_ID}/packages`,
    query: "status=active",
    describe: "List active packages at a facility.",
    responseTime: "168ms",
    responseStatus: "200 OK",
    data: {
      data: [
        {
          id: "sandbox-pkg-001",
          tag: "1A40F00000001000000001",
          item_name: "Blue Dream - Flower - 3.5g",
          item_strain: "Blue Dream",
          quantity: 150,
          unit_of_measure: "Grams",
          lab_testing_state: "TestPassed",
          is_on_hold: false,
          packaged_date: "2026-02-15",
        },
        {
          id: "sandbox-pkg-008",
          tag: "1A40F00000001000000008",
          item_name: "Jack Herer - Flower - 28g",
          item_strain: "Jack Herer",
          quantity: 30,
          unit_of_measure: "Grams",
          lab_testing_state: "TestFailed",
          is_on_hold: true,
        },
      ],
      meta: { request_id: "req_e5f6g7h8", provider: "metrc", state: "CA" },
      pagination: { page: 1, per_page: 25, total: 10 },
    },
  },
  {
    id: "plants",
    label: "Plants",
    method: "GET",
    path: `/v1/connections/${CONNECTION_ID}/facilities/${FACILITY_ID}/plants`,
    query: "growth_phase=flowering",
    describe: "List plants by growth phase.",
    responseTime: "131ms",
    responseStatus: "200 OK",
    data: {
      data: [
        {
          id: "sandbox-plt-001",
          tag: "1A40F00000002000000001",
          strain_name: "Blue Dream",
          growth_phase: "flowering",
          flowering_date: "2026-01-20",
          location: "Room A - Row 3",
        },
        {
          id: "sandbox-plt-004",
          tag: "1A40F00000002000000004",
          strain_name: "Wedding Cake",
          growth_phase: "flowering",
          flowering_date: "2026-01-10",
          location: "Room A - Row 5",
        },
      ],
      meta: { request_id: "req_i9j0k1l2", provider: "metrc" },
      pagination: { page: 1, per_page: 25, total: 2 },
    },
  },
  {
    id: "harvests",
    label: "Harvests",
    method: "GET",
    path: `/v1/connections/${CONNECTION_ID}/facilities/${FACILITY_ID}/harvests`,
    describe: "List harvest batches.",
    responseTime: "118ms",
    responseStatus: "200 OK",
    data: {
      data: [
        {
          id: "sandbox-harv-001",
          harvest_name: "Blue Dream - Feb 2026",
          strain_name: "Blue Dream",
          harvest_type: "WholePlant",
          harvested_date: "2026-02-10",
          current_weight: 2500,
          unit_of_measure: "Grams",
          plant_count: 25,
        },
      ],
      meta: { request_id: "req_m3n4o5p6", provider: "metrc" },
      pagination: { page: 1, per_page: 25, total: 5 },
    },
  },
  {
    id: "transfers",
    label: "Transfers",
    method: "GET",
    path: `/v1/connections/${CONNECTION_ID}/facilities/${FACILITY_ID}/transfers`,
    query: "direction=outgoing",
    describe: "List outgoing transfer manifests.",
    responseTime: "194ms",
    responseStatus: "200 OK",
    data: {
      data: [
        {
          id: "sandbox-xfer-002",
          manifest_number: "0000000002",
          status: "in_transit",
          shipper_facility: "Green Valley Dispensary",
          recipient_facility: "Bay Area Collective",
          estimated_arrival: "2026-03-01T16:00:00Z",
          packages: [
            {
              package_id: "sandbox-pkg-003",
              tag: "1A40F00000001000000003",
              item_name: "Gelato - Edible - 10pk Gummies",
              quantity: 50,
            },
          ],
        },
      ],
      meta: { request_id: "req_q7r8s9t0", provider: "metrc" },
      pagination: { page: 1, per_page: 25, total: 3 },
    },
  },
  {
    id: "sales",
    label: "Sales",
    method: "GET",
    path: `/v1/connections/${CONNECTION_ID}/facilities/${FACILITY_ID}/sales`,
    describe: "List retail sales.",
    responseTime: "152ms",
    responseStatus: "200 OK",
    data: {
      data: [
        {
          id: "sandbox-sale-001",
          receipt_number: "GV-20260228-001",
          sale_date: "2026-02-28",
          customer_type: "Consumer",
          total_price: 90.0,
          total_discount: 5.0,
          items: [
            {
              package_id: "sandbox-pkg-001",
              item_name: "Blue Dream - Flower - 3.5g",
              quantity: 1,
              unit_price: 45.0,
              total: 45.0,
            },
          ],
        },
      ],
      meta: { request_id: "req_u1v2w3x4", provider: "metrc" },
      pagination: { page: 1, per_page: 25, total: 47 },
    },
  },
  {
    id: "lab_results",
    label: "Lab Results",
    method: "GET",
    path: `/v1/connections/${CONNECTION_ID}/facilities/${FACILITY_ID}/lab_results`,
    query: "package_id=sandbox-pkg-001",
    describe: "Lab results attached to a specific package.",
    responseTime: "176ms",
    responseStatus: "200 OK",
    data: {
      data: [
        {
          id: "sandbox-lab-001",
          package_id: "sandbox-pkg-001",
          lab_name: "SC Labs",
          test_type: "Potency & Pesticides",
          overall_passed: true,
          test_date: "2026-02-12",
          results: [
            { name: "THC", value: 24.5, unit: "%", passed: true },
            { name: "CBD", value: 0.8, unit: "%", passed: true },
            { name: "Pesticides", passed: true, notes: "No pesticides detected" },
          ],
        },
      ],
      meta: { request_id: "req_y5z6a7b8", provider: "metrc" },
      pagination: { page: 1, per_page: 25, total: 7 },
    },
  },
]

export function StandardizeDemo() {
  const [activeId, setActiveId] = useState<EndpointId>("facilities")
  const ep = ENDPOINTS.find((e) => e.id === activeId)!
  const fullPath = ep.query ? `${ep.path}?${ep.query}` : ep.path

  return (
    <div className="cdemo">
      <div className="cdemo-console">
        {/* Top context strip */}
        <div className="cdemo-console-context">
          <div className="cdemo-console-context-left">
            <span className="cdemo-console-status-dot" />
            <span>Metrc · California · sandbox</span>
          </div>
          <span className="cdemo-console-context-path">{CONNECTION_ID}</span>
        </div>

        {/* Endpoint tabs */}
        <div className="cdemo-console-tabs">
          {ENDPOINTS.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setActiveId(e.id)}
              className={`cdemo-console-tab ${activeId === e.id ? "active" : ""}`}
            >
              {e.label}
            </button>
          ))}
        </div>

        {/* Body — request left, response right */}
        <div className="cdemo-console-body">
          {/* Request */}
          <div className="cdemo-console-pane request">
            <div className="cdemo-console-pane-label">
              <span>Request</span>
              <span className="cdemo-console-status-pill">{ep.method}</span>
            </div>
            <div>
              <span className="cdemo-console-method">{ep.method}</span>
              <span className="cdemo-console-path">{fullPath}</span>
            </div>
            <div className="cdemo-console-curl">
              {`curl https://api.seedlink.dev${fullPath} \\\n  -H "Authorization: Bearer at_..." \\\n  -H "Accept: application/json"`}
            </div>
            <dl className="cdemo-console-fields">
              <div className="row">
                <dt>Auth</dt>
                <dd>OAuth Bearer</dd>
              </div>
              <div className="row">
                <dt>Returns</dt>
                <dd>Paginated list</dd>
              </div>
              <div className="row">
                <dt>Description</dt>
                <dd>{ep.describe}</dd>
              </div>
            </dl>
          </div>

          {/* Response */}
          <div className="cdemo-console-pane response">
            <div className="cdemo-console-pane-label">
              <span>Response</span>
              <span className="cdemo-console-status-pill">
                {ep.responseStatus} · {ep.responseTime}
              </span>
            </div>
            <pre className="cdemo-console-json">
              {renderJson(ep.data, 0)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ───────────────────────────────────────────────
   Inline JSON renderer with syntax highlighting
   ─────────────────────────────────────────────── */

function renderJson(value: unknown, indent: number): ReactNode {
  return <>{walk(value, indent)}</>
}

function walk(value: unknown, indent: number): ReactNode[] {
  const pad = "  ".repeat(indent)
  const out: ReactNode[] = []

  if (typeof value === "string") {
    out.push(<span key={Math.random()} className="s">{`"${escapeStr(value)}"`}</span>)
    return out
  }
  if (typeof value === "number") {
    out.push(<span key={Math.random()} className="n">{String(value)}</span>)
    return out
  }
  if (typeof value === "boolean" || value === null) {
    out.push(<span key={Math.random()} className="b">{String(value)}</span>)
    return out
  }
  if (Array.isArray(value)) {
    if (value.length === 0) {
      out.push(<span key={Math.random()} className="punc">[]</span>)
      return out
    }
    out.push(<span key={Math.random()} className="punc">[</span>)
    out.push("\n")
    value.forEach((item, i) => {
      out.push(pad + "  ")
      out.push(...walk(item, indent + 1))
      if (i < value.length - 1) out.push(<span key={Math.random()} className="punc">,</span>)
      out.push("\n")
    })
    out.push(pad)
    out.push(<span key={Math.random()} className="punc">]</span>)
    return out
  }
  if (typeof value === "object" && value !== null) {
    const entries = Object.entries(value as Record<string, unknown>)
    if (entries.length === 0) {
      out.push(<span key={Math.random()} className="punc">{"{}"}</span>)
      return out
    }
    out.push(<span key={Math.random()} className="punc">{"{"}</span>)
    out.push("\n")
    entries.forEach(([k, v], i) => {
      out.push(pad + "  ")
      out.push(<span key={Math.random()} className="k">{`"${k}"`}</span>)
      out.push(<span key={Math.random()} className="punc">: </span>)
      out.push(...walk(v, indent + 1))
      if (i < entries.length - 1) out.push(<span key={Math.random()} className="punc">,</span>)
      out.push("\n")
    })
    out.push(pad)
    out.push(<span key={Math.random()} className="punc">{"}"}</span>)
    return out
  }
  return out
}

function escapeStr(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')
}
