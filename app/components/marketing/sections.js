"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export const valueProps = [
  {
    title: "Design-led Engineering",
    description: "Shadow analysis, optimal string design and structural checks tailored to every roof.",
    icon: CompassIcon,
    spotlight:
      "Our engineering desk builds digital twins, pressure-tests your roof structure and validates energy simulations before a single module ships.",
    metrics: [
      { label: "Digital twins delivered", value: "120+" },
      { label: "Average shading loss", value: "<1.5%" },
      { label: "Structural iterations", value: "3–5" },
    ],
    accent: "from-cyan-400/40 via-emerald-400/10 to-transparent",
  },
  {
    title: "Tier-1 Hardware & Compliance",
    description: "MNRE/BIS approved modules, smart inverters and end-to-end DISCOM & net-metering support.",
    icon: ShieldIcon,
    spotlight:
      "We partner with tier-1 OEMs, track every serial number and maintain compliance dossiers so audits, subsidies and DISCOM inspections stay frictionless.",
    metrics: [
      { label: "OEM partnerships", value: "14" },
      { label: "Dispatch accuracy", value: "99.6%" },
      { label: "QA checkpoints", value: "52" },
    ],
    accent: "from-emerald-400/35 via-sky-400/10 to-transparent",
  },
  {
    title: "Lifetime Performance Care",
    description: "Commissioning, remote monitoring, O&M teams and guaranteed response SLAs in Telangana.",
    icon: SparkIcon,
    spotlight:
      "Dedicated O&M crews pair preventive cleaning schedules with real-time dashboards so you get alerts before generation slips.",
    metrics: [
      { label: "Managed assets", value: "42 MWp" },
      { label: "Response SLA", value: "<4 hrs" },
      { label: "Annual uptime", value: "99%" },
    ],
    accent: "from-amber-400/35 via-emerald-500/10 to-transparent",
  },
];

export const solutions = [
  {
    name: "Residential Rooftop",
    summary: "1–15 kW bespoke systems with aesthetics, safety and subsidy readiness built in.",
    bullets: ["Hybrid & on-grid options", "Lightweight mounting for flat & tiled roofs", "Billing portal assistance"],
    href: "/panels",
    icon: SunIcon,
    detail:
      "From pergola-grade structures to concealed conduit runs, we pair form and function so your home looks better than ever while the bill drops.",
    stats: [
      { label: "Capacity band", value: "1–15 kW" },
      { label: "Avg. payback", value: "3.2 yrs" },
      { label: "Install window", value: "10–14 days" },
    ],
    experience: [
      "3D renders before execution",
      "Subsidy & DISCOM paperwork",
      "Battery & EV-ready wiring",
    ],
    accent: "from-amber-500/25 via-rose-400/10 to-transparent",
  },
  {
    name: "Commercial & Industrial",
    summary: "High-yield MW-scale plants engineered for operational efficiency and predictable ROI.",
    bullets: ["Detailed energy & cash-flow modelling", "High-efficiency mono PERC / TOPCon modules", "Continuous remote monitoring"],
    href: "/projects",
    icon: FactoryIcon,
    detail:
      "We sequence shutdowns, crane logistics and QA sign-offs with your production shifts so output never skips a beat.",
    stats: [
      { label: "Delivered capacity", value: "18 MWp" },
      { label: "Payback guidance", value: "2.8–4.2 yrs" },
      { label: "QA inspections", value: "120+" },
    ],
    experience: [
      "Dedicated HSE marshals",
      "HT/LT integration support",
      "Digital O&M playbooks",
    ],
    accent: "from-emerald-400/30 via-sky-500/10 to-transparent",
  },
  {
    name: "Institutions & Utilities",
    summary: "Multi-site campuses, hospitals and utilities with tailored O&M and safety governance.",
    bullets: ["HT/LT integration & protections", "SCADA / string-level data", "Dedicated O&M teams"],
    href: "/systems",
    icon: GridIcon,
    detail:
      "Interlace multi-building campuses, emergency circuits and complex approvals with programme-level governance your board will appreciate.",
    stats: [
      { label: "Sites orchestrated", value: "65" },
      { label: "Uptime delivered", value: "99.2%" },
      { label: "SLA cadence", value: "Weekly" },
    ],
    experience: [
      "Centralised control rooms",
      "Utility coordination desk",
      "24×7 breakdown hotline",
    ],
    accent: "from-violet-500/25 via-emerald-400/10 to-transparent",
  },
];

export const steps = [
  {
    title: "Discover & Analyse",
    description: "Bill benchmarking, site survey, drone/heliodon shadow study and roof strength assessment.",
    duration: "Week 1",
  },
  {
    title: "Engineer the System",
    description: "Electrical SLDs, PVsyst simulations, string sizing, structural drawings and BoM finalisation.",
    duration: "Week 2",
  },
  {
    title: "Procure Tier-1 Hardware",
    description: "MNRE empanelled modules, smart inverters, ACDB/DCDB, surge protection and balance of system.",
    duration: "Week 3",
  },
  {
    title: "Install & Commission",
    description: "Qualified crews, QA checklists, safety drills, net-metering coordination and final handover.",
    duration: "Weeks 4–5",
  },
  {
    title: "Monitor & Maintain",
    description: "Real-time dashboards, preventive maintenance, cleaning schedules and performance guarantees.",
    duration: "Ongoing",
  },
];

export const caseStudies = [
  {
    title: "600 kW Manufacturing Plant — Bommalaramaram",
    metric: "₹78 lakh annual savings",
    detail: "Retrofit on RCC sheds with string-level monitoring delivering 1.68 million units every year.",
    sector: "Industrial",
    impact: [
      "Night-time crane operations",
      "String-level SCADA",
      "DG synchronisation upgrades",
    ],
  },
  {
    title: "120 kW Multi-Speciality Hospital — Hyderabad",
    metric: "99.2% uptime maintained",
    detail: "Hybrid design with backup, critical load segregation and remote alarms to the maintenance team.",
    sector: "Healthcare",
    impact: [
      "Critical load protection",
      "Hybrid inverter stack",
      "On-call O&M team",
    ],
  },
  {
    title: "10 kW Premium Villa — Nallagandla",
    metric: "₹12,800 avg. monthly offset",
    detail: "Elegant dual-tone modules with concealed conduit runs and subsidy documentation handled end-to-end.",
    sector: "Residential",
    impact: [
      "Dual-tone mono modules",
      "Concealed cabling",
      "Subsidy onboarding",
    ],
  },
];

export const testimonials = [
  {
    quote: "The Bharath Solar EPC team gave us clarity on payback, executed neatly and has been proactive on every service call.",
    name: "Nithisha Poultry Farms",
    role: "100 kW on-grid plant, 2024",
    sector: "Agro & Food",
    rating: "4.9/5 satisfaction",
  },
  {
    quote: "From engineering drawings to net-metering approvals, they managed each step professionally. Generation exceeds projections.",
    name: "Tulasi Hospitals",
    role: "120 kW rooftop system, 2018",
    sector: "Healthcare",
    rating: "99% uptime maintained",
  },
  {
    quote: "Their villa design balanced aesthetics and performance. The concealed wiring and pergola finish won over our architect.",
    name: "Sreshta Lake Homes",
    role: "18 kW premium residence, 2023",
    sector: "Residential",
    rating: "₹16k monthly savings",
  },
];

export const faqs = [
  {
    question: "How do you estimate the right solar capacity for my site?",
    answer:
      "We analyse your 12-month consumption, tariff slabs, roof geometry and shading using PVsyst. The built-in calculator provides a quick starting point, followed by an on-site survey for precision.",
  },
  {
    question: "Do you assist with subsidies and net-metering?",
    answer:
      "Yes. Our documentation desk prepares DISCOM applications, schedules inspections and uploads proofs on the National Portal. We keep you informed at every stage until commissioning.",
  },
  {
    question: "What maintenance is required after installation?",
    answer:
      "Preventive cleaning and visual checks every 15–30 days paired with quarterly electrical inspections. Our O&M plans include remote monitoring, breakdown support and guaranteed response SLAs.",
  },
];

const contactJourney = [
  {
    title: "Discovery & bill study",
    timeframe: "Day 0",
    summary: "Share your latest electricity bill, roof photographs and project goals over a call or WhatsApp.",
    outputs: ["Consumption benchmark", "Preliminary capacity range"],
  },
  {
    title: "Site assessment & design",
    timeframe: "Days 1–3",
    summary: "We schedule a physical survey, capture shading data and craft 3D layouts with structural checks.",
    outputs: ["PVsyst simulation", "Engineering drawings"],
  },
  {
    title: "Proposal & commercials",
    timeframe: "Days 4–6",
    summary: "Receive a detailed EPC proposal with ROI, execution timeline and finance options.",
    outputs: ["Capex & payback model", "Cashflow schedule"],
  },
  {
    title: "Kick-off & execution",
    timeframe: "Week 2",
    summary: "Lock milestone plan, onboard procurement and assign your dedicated project manager.",
    outputs: ["Milestone tracker", "WhatsApp project room"],
  },
];

export function ValueHighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPoint, setHoverPoint] = useState({ x: 50, y: 50 });
  const active = valueProps[activeIndex];

  return (
    <section className="relative py-14 sm:py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-12 h-64 bg-gradient-to-r from-emerald-400/15 via-transparent to-sky-400/15 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[0_45px_120px_-60px_rgba(56,189,248,0.65)] backdrop-blur-xl sm:p-8"
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const x = ((event.clientX - rect.left) / rect.width) * 100;
              const y = ((event.clientY - rect.top) / rect.height) * 100;
              setHoverPoint({ x, y });
            }}
            onPointerLeave={() => setHoverPoint({ x: 50, y: 50 })}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-80 transition-all duration-500"
              style={{
                background: `radial-gradient(circle at ${hoverPoint.x}% ${hoverPoint.y}%, rgba(56, 189, 248, 0.32), transparent 68%)`,
              }}
            />
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200/90">Why Bharath Solar EPC</p>
                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-[2.6rem]">
                  Everything you need to own and run dependable solar assets
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-200/90 sm:text-base">
                  From feasibility to lifetime performance, our multi-disciplinary team covers electrical, structural and financial diligence so you always know what to expect.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 shadow-inner shadow-emerald-500/10 backdrop-blur sm:p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Now spotlighting</p>
                <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-xl">
                    <h3 className="text-xl font-semibold text-white sm:text-3xl">{active.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200/80 sm:text-base">{active.spotlight}</p>
                  </div>
                  <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 shadow-[0_12px_30px_-18px_rgba(16,185,129,0.9)] sm:h-12 sm:w-12">
                    <active.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {active.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur"
                    >
                      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-slate-400">{metric.label}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {valueProps.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-3xl border px-5 py-5 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-6 sm:py-6 ${
                    isActive
                      ? "border-white/40 bg-white/10 shadow-[0_30px_80px_-50px_rgba(56,189,248,0.9)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 transition duration-300 ${
                      isActive ? "opacity-60" : "group-hover:opacity-35"
                    }`}
                  />
                  <div className="relative z-10 flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#147B3E]/15 text-[#147B3E] sm:h-12 sm:w-12">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200/90">{item.description}</p>
                      <span className="mt-4 inline-flex items-center text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-slate-400">
                        Explore
                        <ArrowIcon className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CalculatorSection() {
  return (
    <section className="relative py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">Plan your plant</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Solar sizing calculator</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-200/90 sm:text-base">
                1 kW of rooftop solar in Telangana generates about <strong>150 units</strong> per month. Dial in your consumption profile and tariff band to instantly view the ideal system size, investment and payback.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 shadow-inner sm:p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">How to use</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200/90">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Start with a quick preset or drag the sliders to match your monthly bill and tariff slab.
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Review instant projections for capacity, capex, payback and long-term CO₂ savings.
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Share the results with us to receive a site-specific layout, shading analysis and financing options.
                </li>
              </ul>
            </div>
          </div>
          <Calculator />
        </div>
      </div>
    </section>
  );
}

function Calculator() {
  const [unitsMonth, setUnitsMonth] = useState("600");
  const [tariff, setTariff] = useState("8.5");

  const unitPresets = [
    { label: "2 BHK apartment", value: 300 },
    { label: "3 BHK / villa", value: 600 },
    { label: "Small business", value: 1200 },
    { label: "Manufacturing shed", value: 2500 },
  ];

  const tariffPresets = [
    { label: "Domestic", value: 6.5 },
    { label: "Commercial", value: 8.5 },
    { label: "HT/Industrial", value: 11 },
  ];

  const { kwRounded, generation, roofArea, monthlySavings, annualSavings, capex, payback, co2Offset, projections, hasInput } =
    useMemo(() => {
      const units = Number.parseFloat(unitsMonth) || 0;
      const rate = Number.parseFloat(tariff) || 0;
      const unitsPerKwMonth = 150;
      const roofSqftPerKw = 100;
      const capexPerKw = 55000;

      const kw = units > 0 ? units / unitsPerKwMonth : 0;
      const kwRoundedValue = kw > 0 ? Math.max(1, Math.round(kw * 10) / 10) : 0;
      const generationValue = kwRoundedValue * unitsPerKwMonth;
      const roof = kwRoundedValue * roofSqftPerKw;
      const savings = Math.min(units, generationValue) * rate;
      const annualSavingsValue = savings * 12;
      const capexValue = kwRoundedValue * capexPerKw;
      const paybackValue = savings > 0 ? capexValue / annualSavingsValue : 0;
      const co2Annual = (Math.min(units, generationValue) * 0.82 * 12) / 1000;

      const projectionYears = [1, 5, 10];
      const maxProjection = Math.max(...projectionYears.map((year) => annualSavingsValue * year), 0);
      const projectionData = projectionYears.map((year) => {
        const total = annualSavingsValue * year;
        return {
          label: `${year} yr${year > 1 ? "s" : ""}`,
          savings: total,
          co2: co2Annual * year,
          progress: maxProjection > 0 ? Math.round((total / maxProjection) * 100) : 0,
        };
      });

      return {
        kwRounded: kwRoundedValue,
        generation: generationValue,
        roofArea: roof,
        monthlySavings: savings,
        annualSavings: annualSavingsValue,
        capex: capexValue,
        payback: paybackValue,
        co2Offset: co2Annual,
        projections: projectionData,
        hasInput: units > 0,
      };
    }, [tariff, unitsMonth]);

  const unitsValue = Number.parseFloat(unitsMonth) || 0;
  const tariffValue = Number.parseFloat(tariff) || 0;

  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-white/6 p-5 shadow-[0_40px_110px_-55px_rgba(16,185,129,0.65)] backdrop-blur-xl sm:p-6">
      <form className="space-y-5">
        <div>
          <label htmlFor="units" className="text-sm font-semibold text-slate-200">
            Monthly electricity usage (units)
          </label>
          <input
            id="units"
            type="number"
            inputMode="numeric"
            value={unitsMonth}
            onChange={(event) => setUnitsMonth(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40 sm:px-4"
          />
          <input
            type="range"
            min="100"
            max="6000"
            step="50"
            value={Math.min(Math.max(unitsValue, 0), 6000)}
            onChange={(event) => setUnitsMonth(event.target.value)}
            className="mt-4 w-full accent-emerald-400"
            aria-label="Monthly electricity usage slider"
          />
          <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.3em] text-slate-500">
            <span>100 units</span>
            <span>6000 units</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {unitPresets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setUnitsMonth(String(preset.value))}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  unitsValue === preset.value
                    ? "border-emerald-300 bg-emerald-500/20 text-emerald-100"
                    : "border-white/10 bg-transparent text-slate-300 hover:border-white/20 hover:text-white"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="tariff" className="text-sm font-semibold text-slate-200">
            Average tariff (₹/unit)
          </label>
          <input
            id="tariff"
            type="number"
            inputMode="decimal"
            step="0.1"
            value={tariff}
            onChange={(event) => setTariff(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40 sm:px-4"
          />
          <input
            type="range"
            min="5"
            max="14"
            step="0.1"
            value={Math.min(Math.max(tariffValue, 5), 14)}
            onChange={(event) => setTariff(event.target.value)}
            className="mt-4 w-full accent-emerald-400"
            aria-label="Average tariff slider"
          />
          <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.3em] text-slate-500">
            <span>₹5</span>
            <span>₹14</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tariffPresets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setTariff(String(preset.value))}
                className={`rounded-full border px-3 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  Math.abs(tariffValue - preset.value) < 0.01
                    ? "border-emerald-300 bg-emerald-500/20 text-emerald-100"
                    : "border-white/10 bg-transparent text-slate-300 hover:border-white/20 hover:text-white"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </form>

      <div className="space-y-4">
        <ResultRow label="Recommended system size" value={hasInput ? `${kwRounded.toFixed(1)} kW` : "—"} />
        <ResultRow label="Expected monthly generation" value={hasInput ? `${generation.toLocaleString()} units` : "—"} />
        <ResultRow label="Roof space required" value={hasInput ? `${roofArea.toLocaleString()} sq.ft` : "—"} />
        <ResultRow label="Estimated monthly savings" value={hasInput ? `₹${Math.round(monthlySavings).toLocaleString()}` : "—"} />
        <ResultRow label="Estimated project cost" value={hasInput ? `₹${Math.round(capex).toLocaleString()}` : "—"} />
        <ResultRow label="Simple payback" value={hasInput && payback > 0 ? `${payback.toFixed(1)} years` : "—"} />
        <ResultRow label="Annual CO₂ offset" value={hasInput ? `${co2Offset.toFixed(1)} tonnes` : "—"} />
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-transparent to-emerald-500/10 p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">Savings projection</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {projections.map((projection) => (
            <div key={projection.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{projection.label}</p>
              <div className="relative mt-4 h-20 overflow-hidden rounded-2xl bg-white/5">
                <div
                  className="absolute inset-x-1 bottom-1 rounded-t-2xl bg-gradient-to-t from-emerald-400/80 via-emerald-300/40 to-transparent"
                  style={{ height: `${projection.progress}%` }}
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">
                {hasInput ? `₹${Math.round(projection.savings).toLocaleString()}` : "—"}
              </p>
              <p className="text-xs text-emerald-200/80">
                {hasInput ? `${projection.co2.toFixed(1)} t CO₂ avoided` : "Adjust inputs to view impact"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
      <span className="text-slate-300/80">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState("impact");
  const active = solutions[activeIndex];

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Solutions</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tailored EPC engagements for every segment</h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Choose the engagement that fits your load profile, roof architecture and financial goals. Every project receives design, supply, installation and long-term support under one roof.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              <button
                type="button"
                onClick={() => setViewMode("impact")}
                className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  viewMode === "impact"
                    ? "border-emerald-300 bg-emerald-500/20 text-emerald-100"
                    : "border-white/10 bg-white/0 hover:border-white/20 hover:text-white"
                }`}
              >
                Impact metrics
              </button>
              <button
                type="button"
                onClick={() => setViewMode("scope")}
                className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  viewMode === "scope"
                    ? "border-emerald-300 bg-emerald-500/20 text-emerald-100"
                    : "border-white/10 bg-white/0 hover:border-white/20 hover:text-white"
                }`}
              >
                Scope & experience
              </button>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_35px_90px_-55px_rgba(245,158,11,0.4)] sm:p-6">
              <span
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${active.accent} opacity-40`}
              />
              <div className="relative z-10 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Currently exploring</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{active.name}</h3>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#F16921] sm:h-12 sm:w-12">
                    <active.icon className="h-5 w-5" />
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-200/90 sm:text-base">{active.detail}</p>
                {viewMode === "impact" ? (
                  <div className="grid gap-4 sm:grid-cols-3">
                    {active.stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                        <p className="mt-3 text-lg font-semibold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-3 text-sm leading-relaxed text-slate-200/90">
                    {active.experience.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={active.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-white/40 hover:text-white"
                  >
                    Dive deeper <ArrowIcon className="h-4 w-4" />
                  </Link>
                  <span className="text-xs text-emerald-200/80">Hover or tap the cards to switch segments</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {solutions.map((solution, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={solution.name}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-3xl border px-5 py-5 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-6 sm:py-6 ${
                    isActive
                      ? "border-white/40 bg-white/10 shadow-[0_30px_80px_-50px_rgba(245,158,11,0.65)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                  aria-pressed={isActive}
                >
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${solution.accent} opacity-0 transition duration-300 ${
                      isActive ? "opacity-70" : "group-hover:opacity-40"
                    }`}
                  />
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F16921]/15 text-[#F16921] sm:h-12 sm:w-12">
                        <solution.icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{solution.stats[0].label}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white sm:text-lg">{solution.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-200/90">{solution.summary}</p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-200/80">
                      {solution.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckIcon className="mt-1 h-3.5 w-3.5 text-[#147B3E]" /> {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      <span>Tap to compare</span>
                      <ArrowIcon className="h-4 w-4" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">How we work</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            A proven EPC playbook from discovery to performance
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-200/90 sm:text-base">
            Our cross-functional teams run a transparent process with weekly updates, shared documentation and quality gates so you always know the status of your solar asset.
          </p>
        </div>
        <ol className="mt-10 space-y-5 sm:mt-12 sm:space-y-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-white/20 hover:bg-white/10 sm:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Step {index + 1}</span>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{step.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-200/90">{step.description}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">{step.duration}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProjectsHighlightsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % caseStudies.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  const active = caseStudies[activeIndex];
  const accentVariants = [
    "from-emerald-500/35 via-emerald-400/10 to-transparent",
    "from-amber-400/35 via-rose-400/10 to-transparent",
    "from-sky-400/35 via-emerald-400/10 to-transparent",
  ];
  const accent = accentVariants[activeIndex % accentVariants.length];

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">Proven track record</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Highlighted installations</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-200/90 sm:text-base">
              A glimpse into the industries and homes that trust us with their energy transition. Use the carousel to surface the projects most relevant to you.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            View complete list <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_40px_90px_-55px_rgba(6,182,212,0.45)] sm:p-8">
            <span aria-hidden className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-60`} />
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Sector</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{active.title}</h3>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
                  {active.sector}
                </span>
              </div>
              <p className="text-lg font-semibold text-white">{active.metric}</p>
              <p className="text-sm leading-relaxed text-slate-200/90 sm:text-base">{active.detail}</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {active.impact.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-slate-400">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                Performance verified <SparkIcon className="h-4 w-4" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-200 transition-all duration-500"
                style={{ width: `${((activeIndex + 1) / caseStudies.length) * 100}%` }}
              />
            </div>
          </article>
          <div className="grid gap-3 sm:gap-4">
            {caseStudies.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex w-full flex-col rounded-3xl border px-5 py-4 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-6 sm:py-5 ${
                    isActive
                      ? "border-white/40 bg-white/10 shadow-[0_25px_80px_-55px_rgba(6,182,212,0.55)]"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">{item.sector}</p>
                    </div>
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold ${
                      isActive ? "border-emerald-300 text-emerald-200" : "border-white/15 text-slate-300"
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-200/80">{item.detail}</p>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                    Review spotlight <ArrowIcon className="ml-2 h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let frame;
    let start;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const ratio = Math.min((timestamp - start) / 8000, 1);
      setProgress(ratio * 100);
      if (ratio < 1) {
        frame = window.requestAnimationFrame(step);
      }
    };

    frame = window.requestAnimationFrame(step);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [activeIndex]);

  const active = testimonials[activeIndex];

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">Client confidence</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Voices from our partners</h2>
          </div>
          <figure className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[0_40px_110px_-55px_rgba(129,140,248,0.5)] backdrop-blur-xl sm:p-8">
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-emerald-400/20 opacity-60" />
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{active.sector}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{active.name}</h3>
                  <p className="text-xs text-slate-400">{active.role}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{active.rating}</span>
              </div>
              <blockquote className="text-lg leading-relaxed text-slate-100 sm:text-xl">“{active.quote}”</blockquote>
              <div className="flex items-center gap-4">
                {testimonials.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className="group flex flex-col items-start gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                      aria-pressed={isActive}
                    >
                      <span className="block h-2 w-20 overflow-hidden rounded-full bg-white/10">
                        <span
                          className={`block h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-200 transition-all duration-500 ${
                            isActive ? "" : "w-0"
                          }`}
                          style={{ width: isActive ? `${progress}%` : "0%" }}
                        />
                      </span>
                      <span className={`text-[10px] uppercase tracking-[0.3em] ${isActive ? "text-emerald-200" : "text-slate-400"}`}>
                        {item.sector}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </figure>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">FAQs</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-6 space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 shadow-sm sm:p-5">
                <summary className="cursor-pointer list-none font-semibold text-white">{faq.question}</summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-200/90">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [activeStage, setActiveStage] = useState(0);
  const active = contactJourney[activeStage];

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">Start a conversation</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s design your next solar milestone</h2>
            <p className="text-sm leading-relaxed text-slate-200/90 sm:text-base">
              Share your site details, latest electricity bill and project goals. We’ll schedule a site visit, run generation simulations and send a proposal with ROI, subsidies and execution timelines.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon={PhoneIcon} title="Call or WhatsApp" detail="+91 89773 10017" href="tel:+918977310017" />
              <ContactCard icon={MailIcon} title="Email" detail="dbr@bharathsolarepc.com" href="mailto:dbr@bharathsolarepc.com" />
              <ContactCard icon={MapPinIcon} title="Headquartered" detail="Hyderabad, Telangana" />
              <ContactCard icon={CalendarIcon} title="Site visits" detail="Scheduled within 48 hours" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/6 p-6 text-white shadow-[0_40px_110px_-55px_rgba(34,197,94,0.55)] backdrop-blur-xl sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Request a customised proposal</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
              We respond within one business day with next steps and required documents.
            </p>
            <form action="https://formsubmit.co/dbr@bharathsolarepc.com" method="POST" className="mt-6 grid gap-4">
              <input type="hidden" name="_subject" value="New Lead - Bharath Solar EPC" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                name="name"
                placeholder="Your name"
                required
                className="rounded-2xl border border-white/10 px-3 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40 sm:px-4"
              />
              <input
                name="phone"
                placeholder="Phone / WhatsApp"
                required
                className="rounded-2xl border border-white/10 px-3 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40 sm:px-4"
              />
              <input
                name="city"
                placeholder="City"
                className="rounded-2xl border border-white/10 px-3 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40 sm:px-4"
              />
              <textarea
                name="message"
                placeholder="Share roof size, load profile or questions"
                rows="4"
                className="rounded-2xl border border-white/10 px-3 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40 sm:px-4"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_25px_60px_-30px_rgba(16,185,129,0.6)] transition hover:scale-105 sm:px-6"
              >
                Send request
              </button>
              <p className="text-xs text-slate-400">
                Prefer WhatsApp? Message us instantly at{" "}
                <a
                  href="https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20a%20solar%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-emerald-300"
                >
                  +91 89773 10017
                </a>
              </p>
            </form>
          </div>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Engagement timeline</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {contactJourney.map((stage, index) => {
                const isActive = index === activeStage;
                return (
                  <button
                    key={stage.title}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                      isActive ? "border-emerald-300 bg-emerald-500/20 text-emerald-100" : "border-white/10 text-slate-300 hover:border-white/20 hover:text-white"
                    }`}
                    aria-pressed={isActive}
                  >
                    {stage.timeframe}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{active.title}</h3>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">
                  {active.timeframe}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-200/80">{active.summary}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {active.outputs.map((output) => (
                  <li key={output} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    <SparkIcon className="h-4 w-4 text-emerald-300" /> {output}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/15 via-transparent to-emerald-500/5 p-6 text-sm text-slate-200">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">What we prep for our first call</p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Load profile review with recommended system size ranges.
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Checklist of documents for subsidy, DISCOM and financing workflows.
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Preview of project manager, engineering and O&M squad assigned to you.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, detail, href }) {
  const content = (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/6 p-4 text-left text-slate-200 shadow-[0_24px_60px_-40px_rgba(59,130,246,0.55)] backdrop-blur">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-slate-200">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{title}</p>
        <p className="text-sm font-semibold text-white">{detail}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#147B3E]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
        {content}
      </Link>
    );
  }

  return content;
}

function ArrowIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 12.5l3.5 3.5 9-9" />
    </svg>
  );
}

function SparkIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 5.5H19l-4.5 3.4L16.5 19 12 15.6 7.5 19l1.5-7.1L4 8.5h5.2L12 3z" />
    </svg>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-2.7 8.7-7 10-4.3-1.3-7-5.5-7-10V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2.2 2.2L15 10.5" />
    </svg>
  );
}

function CompassIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </svg>
  );
}

function SunIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function FactoryIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V9l6 4V9l6 4V3h4v18H3z" />
      <path d="M7 13h2v2H7zM13 13h2v2h-2zM7 17h2v2H7zM13 17h2v2h-2z" />
    </svg>
  );
}

function GridIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.2 3h3.4L10.8 7.5 8.5 9.2c1.1 2.1 2.9 3.9 5 5l1.7-2.3L19 15.4v3.4c0 .9-.7 1.6-1.6 1.6A14.4 14.4 0 0 1 3 5.2C3 4.3 3.7 3.6 4.6 3.6H5.2z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m22 7-10 6L2 7" />
    </svg>
  );
}

function MapPinIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M17 3v3M4.5 9h15M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
    </svg>
  );
}
