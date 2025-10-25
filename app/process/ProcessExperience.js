"use client";

import { useMemo, useState } from "react";

const processPhases = [
  {
    id: "discovery",
    name: "Discovery & Feasibility",
    baseWeeks: 2,
    objective:
      "Capture load profile insights, audit the site, and model business viability for solar adoption.",
    activities: [
      "Site walk-through with drone imagery and shading study",
      "Energy audit using last 12 months of bills",
      "Preliminary single line diagram and interconnection notes",
    ],
    deliverables: [
      "Feasibility report with system sizing recommendations",
      "Financial model with savings and IRR scenarios",
      "Risk register covering structural, permitting and utility aspects",
    ],
    owners: ["Solutions consultant", "Energy analyst"],
  },
  {
    id: "engineering",
    name: "Detailed Engineering",
    baseWeeks: 3,
    objective:
      "Translate feasibility insights into certified designs, layouts, and BoM that pass compliance checks.",
    activities: [
      "3D structural modeling and wind load simulation",
      "DC & AC electrical schematics with protection studies",
      "Procurement-ready bill of materials and vendor shortlist",
    ],
    deliverables: [
      "GFC drawings for civil and electrical disciplines",
      "BOM with alternate OEM options and lead times",
      "Updated project execution plan with manpower curve",
    ],
    owners: ["Design engineer", "Quality engineer"],
  },
  {
    id: "procurement",
    name: "Procurement & Approvals",
    baseWeeks: 4,
    objective:
      "Lock commercial terms, reserve inventory, and secure statutory approvals without delaying ground break.",
    activities: [
      "OEM negotiations across modules, inverters, and BOS",
      "Utility and DISCOM application filing with documentation",
      "Pre-dispatch inspections and factory acceptance tests",
    ],
    deliverables: [
      "Purchase orders with delivery schedules",
      "Approval tracker with authority SLAs",
      "Logistics plan and insurance coverage notes",
    ],
    owners: ["Procurement lead", "Regulatory liaison"],
  },
  {
    id: "construction",
    name: "Construction & Installation",
    baseWeeks: 6,
    objective:
      "Coordinate civil, mechanical, and electrical teams to deliver a safe, high-quality build on time.",
    activities: [
      "Module mounting structure fabrication & erection",
      "DC stringing, cable tray routing, and earthing",
      "AC panel installation and grid interconnection",
    ],
    deliverables: [
      "Daily site progress reports with photo evidence",
      "Quality checklists and inspection test plans",
      "HSE compliance reports and toolbox talk logs",
    ],
    owners: ["Project manager", "Site execution supervisor"],
  },
  {
    id: "commissioning",
    name: "Testing & Commissioning",
    baseWeeks: 2,
    objective:
      "Validate performance, safety, and documentation prior to handover and billing commencement.",
    activities: [
      "Pre-commissioning verification and IR testing",
      "SCADA integration, inverter configuration, and firmware updates",
      "Performance ratio and capacity utilization benchmarking",
    ],
    deliverables: [
      "Commissioning protocol sign-offs",
      "As-built drawings and O&M manuals",
      "Utility synchronization approval and safety certificates",
    ],
    owners: ["Testing engineer", "SCADA specialist"],
  },
  {
    id: "operations",
    name: "Operations & Optimisation",
    baseWeeks: 12,
    objective:
      "Stabilise generation, monitor analytics, and implement optimisations for lifetime returns.",
    activities: [
      "24/7 remote monitoring with alerts and SLAs",
      "Preventive maintenance and thermography scans",
      "Performance analytics with savings verification",
    ],
    deliverables: [
      "Monthly performance dashboards",
      "Warranty management and spares inventory plan",
      "Continuous improvement recommendations",
    ],
    owners: ["O&M lead", "Performance analyst"],
  },
];

const collaborationStreams = [
  {
    id: "program",
    title: "Program leadership",
    description:
      "Keeps the integrated schedule, commercial commitments, and stakeholder communication on track.",
    cadence: [
      "Weekly executive pulse with client leadership",
      "Fortnightly risk review with mitigation updates",
      "Shared action register with RACI ownership",
    ],
    toolkit: ["Primavera schedule", "Shared RAID log", "Executive scorecards"],
    lead: "Engagement director",
  },
  {
    id: "design",
    title: "Design & engineering",
    description:
      "Produces compliant drawings, BoMs, and simulations while responding to site discoveries in real time.",
    cadence: [
      "Model update stand-up every 48 hours",
      "Design approval workshops with client SME",
      "Digital twin sync showcasing shading & load simulations",
    ],
    toolkit: ["BIM 360", "ETAP studies", "AutoCAD vault"],
    lead: "Chief design engineer",
  },
  {
    id: "execution",
    title: "Site execution",
    description:
      "Orchestrates contractors, safety marshals, and logistics so workfronts stay energised across shifts.",
    cadence: [
      "Daily stand-up with subcontractor leads",
      "HSE walkdown twice a week with joint sign-off",
      "Material readiness huddle aligned to look-ahead plan",
    ],
    toolkit: ["Look-ahead planner", "EHS observation app", "Material tracking dashboard"],
    lead: "Project manager",
  },
  {
    id: "operations",
    title: "Operations centre",
    description:
      "Monitors live generation, triages alarms, and assures SLA adherence after commercial operations date.",
    cadence: [
      "Daily performance digest shared before 10am",
      "Weekly optimisation clinic reviewing PR trends",
      "Quarterly asset health assessment with client team",
    ],
    toolkit: ["SCADA portal", "Predictive maintenance engine", "Customer service desk"],
    lead: "Head of O&M",
  },
];

const readinessCheckpoints = [
  {
    id: "preconstruction",
    label: "Pre-construction",
    focus: "All regulatory, financial, and technical approvals ready for shovel-ready status.",
    checks: [
      "PPA, net metering and government subsidies formally approved",
      "Bank guarantees, insurance, and advance payment schedules agreed",
      "Utility metering specs and protection settings acknowledged",
      "Environmental and structural clearances documented",
    ],
    artifacts: ["Approval tracker", "Financial closure letter", "Signed net-metering agreement"],
  },
  {
    id: "midbuild",
    label: "Mid build",
    focus: "Execution performance aligns with baseline schedule and quality benchmarks.",
    checks: [
      "Critical path milestones achieved within float",
      "Material reconciliation within ±2% variance",
      "Quality NCRs closed with root cause actions",
      "Zero lost time incidents and safety audits green",
    ],
    artifacts: ["Progress S-curve", "Quality NCR log", "Safety audit scorecards"],
  },
  {
    id: "handover",
    label: "Handover",
    focus: "System readiness proven with documentation, warranties, and O&M onboarding complete.",
    checks: [
      "Performance ratio exceeds guaranteed value",
      "As-built drawings mirror installed topology",
      "OEM warranties activated and stored",
      "O&M team trained with spare strategy approved",
    ],
    artifacts: ["Commissioning dossier", "Warranty matrix", "Training completion report"],
  },
];

function formatWeeks(weeks) {
  if (weeks < 1) {
    return "<1 week";
  }
  return weeks === 1 ? "1 week" : `${weeks} weeks`;
}

export default function ProcessExperience() {
  const [systemSize, setSystemSize] = useState(250);
  const [selectedPhaseIndex, setSelectedPhaseIndex] = useState(0);
  const [activeStreamId, setActiveStreamId] = useState(collaborationStreams[0].id);
  const [activeReadinessId, setActiveReadinessId] = useState(readinessCheckpoints[0].id);

  const phasesWithDurations = useMemo(() => {
    const scale = Math.sqrt(systemSize / 250);
    const phases = [];
    let cursor = 0;

    for (const phase of processPhases) {
      const computedWeeks = Math.max(1, Math.round(phase.baseWeeks * scale));
      const startWeek = cursor + 1;
      const endWeek = cursor + computedWeeks;

      phases.push({
        ...phase,
        computedWeeks,
        startWeek,
        endWeek,
      });

      cursor = endWeek;
    }

    return phases;
  }, [systemSize]);

  const totalWeeks = phasesWithDurations.length
    ? phasesWithDurations[phasesWithDurations.length - 1].endWeek
    : 0;

  const selectedPhase = phasesWithDurations[selectedPhaseIndex] ?? phasesWithDurations[0];

  const elapsedWeeksBeforePhase = phasesWithDurations
    .slice(0, selectedPhaseIndex)
    .reduce((acc, phase) => acc + phase.computedWeeks, 0);

  const timelineProgress = totalWeeks
    ? Math.min(
        100,
        Math.round(
          ((elapsedWeeksBeforePhase + (selectedPhase?.computedWeeks ?? 0)) / totalWeeks) * 100,
        ),
      )
    : 0;

  const activeStream = collaborationStreams.find((stream) => stream.id === activeStreamId);
  const activeReadiness = readinessCheckpoints.find((checkpoint) => checkpoint.id === activeReadinessId);

  return (
    <>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Timeline simulator</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Customise the EPC journey for your plant size
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  Adjust the system capacity to preview how our teams rebalance engineering, procurement, and execution windows.
                  The playbook below refreshes automatically, highlighting handoffs and key deliverables.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Projected duration</p>
                <p className="mt-1 text-2xl font-semibold text-white">{formatWeeks(totalWeeks)}</p>
                <p className="text-xs text-slate-400">Based on {systemSize} kW capacity</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <span className="text-sm font-semibold text-slate-200">System capacity: {systemSize} kW</span>
                <input
                  type="range"
                  min={50}
                  max={5000}
                  step={10}
                  value={systemSize}
                  aria-label="Adjust system capacity in kilowatts"
                  onChange={(event) => setSystemSize(Number(event.target.value))}
                  className="accent-[#F16921]"
                />
              </div>
              <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/5">
                {phasesWithDurations.map((phase, index) => (
                  <button
                    key={phase.id}
                    type="button"
                    onClick={() => setSelectedPhaseIndex(index)}
                    className="group relative h-full flex-1"
                    style={{ width: `${(phase.computedWeeks / totalWeeks) * 100}%` }}
                    aria-label={`Focus on ${phase.name}`}
                  >
                    <span
                      className={`absolute inset-0 transition ${
                        index === selectedPhaseIndex ? "bg-[#F16921]" : "bg-white/10 group-hover:bg-white/20"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Week 1</span>
                <span>Week {totalWeeks}</span>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="flex flex-wrap gap-2">
                  {phasesWithDurations.map((phase, index) => (
                    <button
                      key={phase.id}
                      type="button"
                      onClick={() => setSelectedPhaseIndex(index)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        index === selectedPhaseIndex
                          ? "border-transparent bg-white text-slate-900"
                          : "border-white/20 bg-white/5 text-slate-200 hover:border-white/40 hover:bg-white/10"
                      }`}
                    >
                      {phase.name}
                    </button>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {selectedPhase ? `Weeks ${selectedPhase.startWeek} – ${selectedPhase.endWeek}` : ""}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{selectedPhase?.name}</h3>
                  <p className="mt-3 text-slate-300">{selectedPhase?.objective}</p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Key activities</h4>
                      <ul className="mt-2 space-y-2 text-sm text-slate-200">
                        {selectedPhase?.activities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2">
                            <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[#F16921]" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Deliverables</h4>
                      <ul className="mt-2 space-y-2 text-sm text-slate-200">
                        {selectedPhase?.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-start gap-2">
                            <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-slate-400">
                    <span className="font-semibold text-slate-200">Owners:</span> {selectedPhase?.owners.join(", ")}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-black/30 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Progress snapshot</p>
                  <p className="mt-2 text-4xl font-semibold text-white">{timelineProgress}%</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Milestone confidence based on weighted duration of completed phases.
                  </p>
                </div>
                <div className="space-y-3">
                  {phasesWithDurations.map((phase, index) => (
                    <div key={phase.id} className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-semibold text-slate-200">{phase.name}</span>
                        <span>{formatWeeks(phase.computedWeeks)}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full ${
                            index < selectedPhaseIndex
                              ? "bg-[#147B3E]"
                              : index === selectedPhaseIndex
                              ? "bg-[#F16921]"
                              : "bg-white/15"
                          }`}
                          style={{ width: `${(phase.computedWeeks / totalWeeks) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
                  <p>
                    Our schedule buffers include weather contingencies, night-shift execution where possible, and staggered
                    deliveries so no workfront idles. Any capacity increase automatically updates the execution curve you see
                    here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Collaboration streams</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Meet the squads steering your EPC</h2>
                <p className="mt-3 text-sm text-slate-300">
                  Toggle between the core teams to understand their rhythm, collaboration tools, and what they ship each week.
                  Every stream remains synced to your single source of truth.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {collaborationStreams.map((stream) => (
                  <button
                    key={stream.id}
                    type="button"
                    onClick={() => setActiveStreamId(stream.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      stream.id === activeStreamId
                        ? "border-transparent bg-white text-slate-900"
                        : "border-white/20 bg-white/5 text-slate-200 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    {stream.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Stream lead</p>
                <p className="mt-1 text-lg font-semibold text-white">{activeStream?.lead}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{activeStream?.title}</h3>
                <p className="mt-3 text-slate-300">{activeStream?.description}</p>
                <div className="mt-5 space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Operating cadence</h4>
                    <ul className="mt-2 space-y-2">
                      {activeStream?.cadence.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-[#F16921]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Tool stack</h4>
                    <ul className="mt-2 flex flex-wrap gap-2 text-xs">
                      {activeStream?.toolkit.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-200"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-slate-200">
                <h4 className="text-sm font-semibold text-white">What you can expect</h4>
                <ul className="mt-3 space-y-3">
                  {activeStream?.cadence.map((item) => (
                    <li key={`${activeStream?.id}-${item}`} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-200">{item}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        Action items, owners, and files land in your shared workspace immediately after each ritual.
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 rounded-2xl border border-[#F16921]/40 bg-[#F16921]/10 p-4 text-xs text-[#F6D0BC]">
                  <p>
                    Stream dashboards plug into your WhatsApp and email preferences, ensuring updates are actionable across your
                    leadership team without chasing status reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Quality gates</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Track readiness across the EPC lifecycle
                </h2>
                <p className="mt-3 text-sm text-slate-300">
                  Select a checkpoint to view the criteria and artefacts we require before green-lighting the next milestone. The
                  checklist mirrors what our QA and client teams review in joint audits.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {readinessCheckpoints.map((checkpoint) => (
                  <button
                    key={checkpoint.id}
                    type="button"
                    onClick={() => setActiveReadinessId(checkpoint.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      checkpoint.id === activeReadinessId
                        ? "border-transparent bg-white text-slate-900"
                        : "border-white/20 bg-white/5 text-slate-200 hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    {checkpoint.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Focus</p>
                <p className="mt-1 text-lg font-semibold text-white">{activeReadiness?.focus}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Checklist before sign-off</h3>
                <ul className="mt-4 space-y-3">
                  {activeReadiness?.checks.map((check) => (
                    <li key={check} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#147B3E]/20 text-[#147B3E]">
                          ✓
                        </span>
                        <p className="text-sm text-slate-200">{check}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/30 p-6 text-sm text-slate-200">
                <div>
                  <h4 className="text-sm font-semibold text-white">Evidence package</h4>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                    {activeReadiness?.artifacts.map((artifact) => (
                      <li key={artifact} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-200">
                        {artifact}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#147B3E]/30 bg-[#147B3E]/10 p-4 text-xs text-[#C6F2D9]">
                  <p>
                    Joint audits combine digital evidence with on-site walkthroughs. Every checkpoint feeds into our single
                    source of truth so stakeholders have immediate visibility on outstanding actions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
                  <p>
                    Looking for deeper governance? We can plug this matrix into your PMO templates, ISO frameworks, or ESG
                    disclosures so reporting is automated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
