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
      <div className="site-container">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
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
                <h2 className="mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-4xl md:text-[2.6rem]">
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
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">{active.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-200/80 sm:text-base">{active.spotlight}</p>
                  </div>
                  <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 shadow-[0_12px_30px_-18px_rgba(16,185,129,0.9)] sm:h-12 sm:w-12">
                    <active.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
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
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-1">
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
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
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
    <section className="relative py-14 md:py-20">
      <div className="site-container space-y-6">
        <Calculator />
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Estimates assume 150 units per kW and Telangana irradiance averages.
        </p>
      </div>
    </section>
  );
}

const tariffStructures = {
  domestic: {
    label: "LT Cat-I(A) Domestic",
    description: "Telescopic slabs for residential consumers",
    tiers: [
      {
        maxUnits: 100,
        fixedCharge: 10,
        slabs: [
          { upto: 50, rate: 3.1, label: "0-50 units" },
          { upto: 100, rate: 4.9, label: "51-100 units" },
        ],
      },
      {
        maxUnits: 200,
        fixedCharge: 30,
        slabs: [
          { upto: 100, rate: 5.1, label: "0-100 units" },
          { upto: 200, rate: 7.2, label: "101-200 units" },
        ],
      },
      {
        maxUnits: Infinity,
        fixedCharge: 50,
        slabs: [
          { upto: 100, rate: 6.8, label: "0-100 units" },
          { upto: 200, rate: 8.2, label: "101-200 units" },
          { upto: 300, rate: 9.5, label: "201-300 units" },
          { upto: Infinity, rate: 10, label: "Above 300 units" },
        ],
      },
    ],
  },
  commercial: {
    label: "LT Cat-II(A) Commercial",
    description: "General commercial establishments",
    tiers: [
      {
        maxUnits: 50,
        fixedCharge: 70,
        slabs: [{ upto: 50, rate: 7, label: "0-50 units" }],
      },
      {
        maxUnits: Infinity,
        fixedCharge: 90,
        slabs: [
          { upto: 50, rate: 8.5, label: "0-50 units" },
          { upto: Infinity, rate: 9.5, label: "Above 50 units" },
        ],
      },
    ],
  },
  advertisement: {
    label: "LT Cat-VII Advertisement & Hoardings",
    description: "Dedicated supply for signage and hoardings",
    tiers: [
      {
        maxUnits: Infinity,
        fixedCharge: 125,
        slabs: [{ upto: Infinity, rate: 15, label: "All units" }],
      },
    ],
  },
};

function calculateTariff(units, tariffKey) {
  const structure = tariffStructures[tariffKey];
  if (!structure || units <= 0) {
    return {
      totalCharge: 0,
      effectiveRate: 0,
      breakdown: [],
      fixedCharge: 0,
      label: structure?.label ?? "",
      description: structure?.description ?? "",
    };
  }

  const tier = structure.tiers.find((option) => units <= option.maxUnits) ?? structure.tiers[structure.tiers.length - 1];
  const breakdown = [];
  let remaining = units;
  let consumed = 0;
  let totalCharge = 0;

  for (const slab of tier.slabs) {
    if (remaining <= 0) break;

    const cumulativeLimit = slab.upto;
    const slabCap = cumulativeLimit === Infinity ? Infinity : cumulativeLimit - consumed;
    if (slabCap <= 0) {
      consumed = cumulativeLimit === Infinity ? consumed : cumulativeLimit;
      continue;
    }

    const slabUnits = Math.min(remaining, slabCap);
    if (slabUnits <= 0) {
      consumed = cumulativeLimit === Infinity ? consumed : cumulativeLimit;
      continue;
    }

    const amount = slabUnits * slab.rate;
    breakdown.push({
      label: slab.label,
      units: slabUnits,
      rate: slab.rate,
      amount,
    });

    totalCharge += amount;
    remaining -= slabUnits;
    consumed += slabUnits;
  }

  const effectiveRate = totalCharge / units;

  return {
    totalCharge,
    effectiveRate,
    breakdown,
    fixedCharge: tier.fixedCharge,
    label: structure.label,
    description: structure.description,
  };
}

function Calculator() {
  const [unitsMonth, setUnitsMonth] = useState("600");
  const [tariff, setTariff] = useState("domestic");

  const tariffOptions = useMemo(
    () =>
      Object.entries(tariffStructures).map(([value, details]) => ({
        value,
        label: details.label,
        description: details.description,
      })),
    [],
  );

  const {
    kwRounded,
    generation,
    roofArea,
    monthlySavings,
    annualSavings,
    lifetimeSavings,
    capex,
    payback,
    effectiveTariff,
    slabBreakdown,
    fixedCharge,
    monthlyBill,
    postSolarBill,
    solarContribution,
    carbonOffset,
    simpleReturn,
    hasInput,
  } = useMemo(() => {
    const units = Number.parseFloat(unitsMonth) || 0;
    const unitsPerKwMonth = 150;
    const roofSqftPerKw = 100;
    const capexPerKw = 55000;
    
    const kw = units > 0 ? units / unitsPerKwMonth : 0;
    const kwRoundedValue = kw > 0 ? Math.max(1, Math.round(kw * 10) / 10) : 0;
    const generationValue = kwRoundedValue * unitsPerKwMonth;
    const roof = kwRoundedValue * roofSqftPerKw;
    const { effectiveRate, breakdown, fixedCharge: tierFixedCharge, totalCharge } = calculateTariff(units, tariff);
    const slabUnitsCovered = Math.min(units, generationValue);
    const monthlyBillValue = totalCharge + tierFixedCharge;
    const postSolarUnits = Math.max(units - generationValue, 0);
    const postSolarCharge = postSolarUnits * effectiveRate;
    const postSolarBillValue = postSolarCharge + tierFixedCharge;
    const savings = monthlyBillValue - postSolarBillValue;
    const capexValue = kwRoundedValue * capexPerKw;
    const annualSavings = savings * 12;
    const paybackValue = savings > 0 ? capexValue / annualSavings : 0;
    const lifetimeYears = 25;
    const lifetimeSavingsValue = annualSavings * lifetimeYears;
    const solarContributionValue = units > 0 ? (slabUnitsCovered / units) * 100 : 0;
    const carbonOffsetValue = generationValue * 12 * 0.82 * 0.001; // tonnes of CO₂ avoided annually
    const simpleReturnValue = capexValue > 0 ? (annualSavings / capexValue) * 100 : 0;

    return {
      kwRounded: kwRoundedValue,
      generation: generationValue,
      roofArea: roof,
      monthlySavings: savings,
      annualSavings,
      lifetimeSavings: lifetimeSavingsValue,
      capex: capexValue,
      payback: paybackValue,
      effectiveTariff: effectiveRate,
      slabBreakdown: breakdown,
      fixedCharge: tierFixedCharge,
      monthlyBill: monthlyBillValue,
      postSolarBill: postSolarBillValue,
      solarContribution: solarContributionValue,
      carbonOffset: carbonOffsetValue,
      simpleReturn: simpleReturnValue,
      hasInput: units > 0,
    };
  }, [tariff, unitsMonth]);

  const activeTariff = tariffOptions.find((option) => option.value === tariff);

  const summaryStats = [
    {
      label: "System size",
      value: hasInput ? `${kwRounded.toFixed(1)} kW` : "—",
      helper: "Recommended plant capacity",
    },
    {
      label: "Monthly generation",
      value: hasInput ? `${generation.toLocaleString()} units` : "—",
      helper: "Energy produced at site",
    },
    {
      label: "Monthly savings",
      value: hasInput ? `₹${Math.round(monthlySavings).toLocaleString()}` : "—",
      helper:
        hasInput && effectiveTariff > 0
          ? `At ₹${effectiveTariff.toFixed(2)}/unit tariff`
          : "Based on TSNPDCL slabs",
    },
    {
      label: "Project cost",
      value: hasInput ? `₹${Math.round(capex).toLocaleString()}` : "—",
      helper: "Turnkey EPC estimate",
    },
    {
      label: "Simple payback",
      value: hasInput && payback > 0 ? `${payback.toFixed(1)} years` : "—",
      helper: "Time to recover investment",
    },
    {
      label: "Roof space",
      value: hasInput ? `${roofArea.toLocaleString()} sq.ft` : "—",
      helper: "Usable shadow-free area",
    },
  ];

  const billStats = [
    {
      label: "Current DISCOM bill",
      value: hasInput ? `₹${Math.round(monthlyBill).toLocaleString()}` : "—",
      helper: hasInput ? `Includes ₹${Math.round(fixedCharge).toLocaleString()}/month fixed charges` : undefined,
    },
    {
      label: "Post-solar bill",
      value: hasInput ? `₹${Math.max(0, Math.round(postSolarBill)).toLocaleString()}` : "—",
      helper: hasInput ? "After solar generation offsets your usage" : undefined,
    },
    {
      label: "Solar contribution",
      value: hasInput ? `${Math.min(100, solarContribution).toFixed(0)}%` : "—",
      helper: "Share of your monthly units covered",
    },
  ];

  const outlookStats = [
    {
      label: "Annual savings",
      value: hasInput ? `₹${Math.round(annualSavings).toLocaleString()}` : "—",
      helper: "12-month reduction in power bills",
    },
    {
      label: "25-yr savings",
      value: hasInput ? `₹${Math.round(lifetimeSavings).toLocaleString()}` : "—",
      helper: "Assuming 25-year asset life",
    },
    {
      label: "Annual CO₂ offset",
      value: hasInput ? `${carbonOffset.toFixed(1)} tonnes` : "—",
      helper: "Based on 0.82 kg/unit grid factor",
    },
    {
      label: "Simple return",
      value: hasInput && simpleReturn > 0 ? `${simpleReturn.toFixed(0)}%` : "—",
      helper: "Annual savings ÷ project cost",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/6 p-6 shadow-[0_40px_110px_-55px_rgba(16,185,129,0.65)] backdrop-blur-xl">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">Plan your plant</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Solar sizing calculator</h2>
        <p className="text-sm leading-relaxed text-slate-200/90">
          Enter your monthly electricity usage to view the ideal system size, budget and payback for your property.
        </p>
      </div>

      <form className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="units" className="text-sm font-semibold text-slate-200">
            Monthly electricity usage (units)
          </label>
          <input
            id="units"
            type="number"
            inputMode="numeric"
            value={unitsMonth}
            onChange={(event) => setUnitsMonth(event.target.value)}
            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
            placeholder="e.g. 850"
            min={0}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="tariff" className="text-sm font-semibold text-slate-200">
            Tariff category
          </label>
          <select
            id="tariff"
            value={tariff}
            onChange={(event) => setTariff(event.target.value)}
            className="w-full appearance-none rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
          >
            {tariffOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-slate-900 text-white">
                {option.label}
              </option>
            ))}
          </select>
          {activeTariff?.description ? (
            <p className="text-xs text-slate-400">{activeTariff.description}</p>
          ) : null}
        </div>
      </form>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {summaryStats.map((stat) => (
          <SummaryStat key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {billStats.map((stat) => (
          <SummaryStat key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {outlookStats.map((stat) => (
          <SummaryStat key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">Tariff breakdown</p>
            <p className="text-sm text-slate-200/80">{activeTariff?.label}</p>
          </div>
          {hasInput ? (
            <p className="text-sm font-semibold text-white">
              DISCOM bill: ₹{Math.round(monthlyBill).toLocaleString()} / month
            </p>
          ) : null}
        </div>
        {hasInput && slabBreakdown.length > 0 ? (
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <table className="min-w-full divide-y divide-white/10 text-sm text-slate-200/90">
              <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-slate-400">
                <tr>
                  <th className="px-4 py-3 text-left">Slab</th>
                  <th className="px-4 py-3 text-right">Units</th>
                  <th className="px-4 py-3 text-right">Rate (₹)</th>
                  <th className="px-4 py-3 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {slabBreakdown.map((slab) => (
                  <tr key={slab.label}>
                    <td className="px-4 py-3">{slab.label}</td>
                    <td className="px-4 py-3 text-right">{slab.units.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">{slab.rate.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">{Math.round(slab.amount).toLocaleString()}</td>
                  </tr>
                ))}
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">Fixed charges</td>
                  <td className="px-4 py-3 text-right">—</td>
                  <td className="px-4 py-3 text-right">—</td>
                  <td className="px-4 py-3 text-right">{Math.round(fixedCharge).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-300/80">
            Enter your monthly consumption to view the slab-wise TSNPDCL energy charge breakdown and fixed charges.
          </p>
        )}
      </div>

      <p className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200/90">
        Share your latest bill and roof details with our team to receive a detailed design, financial model and commercial proposal tailored to your site.
      </p>
    </div>
  );
}

function SummaryStat({ label, value, helper }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
      {helper ? <p className="mt-1 text-xs text-slate-400/80">{helper}</p> : null}
    </div>
  );
}

export function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState("impact");
  const active = solutions[activeIndex];

  return (
    <section className="py-16 md:py-20">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Solutions</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tailored EPC engagements for every segment</h2>
              <p className="mt-3 text-slate-300">
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_35px_90px_-55px_rgba(245,158,11,0.4)]">
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
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#F16921]">
                    <active.icon className="h-5 w-5" />
                  </span>
                </div>
                <p className="text-base leading-relaxed text-slate-200/90">{active.detail}</p>
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
                  className={`group relative overflow-hidden rounded-3xl border px-6 py-6 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
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
                      <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#F16921]/15 text-[#F16921]">
                        <solution.icon className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{solution.stats[0].label}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{solution.name}</h3>
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
    <section className="py-16 md:py-20">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">How we work</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            A proven EPC playbook from discovery to performance
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200/90">
            Our cross-functional teams run a transparent process with weekly updates, shared documentation and quality gates so you always know the status of your solar asset.
          </p>
        </div>
        <ol className="mt-12 space-y-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Step {index + 1}</span>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
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
    <section className="py-16 md:py-20">
      <div className="site-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">Proven track record</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Highlighted installations</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200/90">
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
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_90px_-55px_rgba(6,182,212,0.45)]">
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
              <p className="text-base leading-relaxed text-slate-200/90">{active.detail}</p>
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
          <div className="grid gap-4">
            {caseStudies.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative flex w-full flex-col rounded-3xl border px-6 py-5 text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
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

export function ContactSection() {
  const [activeStage, setActiveStage] = useState(0);
  const active = contactJourney[activeStage];

  return (
    <section className="py-24">
      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">Start a conversation</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s design your next solar milestone</h2>
            <p className="text-base leading-relaxed text-slate-200/90">
              Share your site details, latest electricity bill and project goals. We’ll schedule a site visit, run generation simulations and send a proposal with ROI, subsidies and execution timelines.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon={PhoneIcon} title="Call or WhatsApp" detail="+91 89773 10017" href="tel:+918977310017" />
              <ContactCard icon={MailIcon} title="Email" detail="dbr@bharathsolarepc.com" href="mailto:dbr@bharathsolarepc.com" />
              <ContactCard icon={MapPinIcon} title="Headquartered" detail="Hyderabad, Telangana" />
              <ContactCard icon={CalendarIcon} title="Site visits" detail="Scheduled within 48 hours" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/6 p-8 text-white shadow-[0_40px_110px_-55px_rgba(34,197,94,0.55)] backdrop-blur-xl">
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
                className="rounded-2xl border border-white/10 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <input
                name="phone"
                placeholder="Phone / WhatsApp"
                required
                className="rounded-2xl border border-white/10 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <input
                name="city"
                placeholder="City"
                className="rounded-2xl border border-white/10 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <textarea
                name="message"
                placeholder="Share roof size, load profile or questions"
                rows="4"
                className="rounded-2xl border border-white/10 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_25px_60px_-30px_rgba(16,185,129,0.6)] transition hover:scale-105"
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
