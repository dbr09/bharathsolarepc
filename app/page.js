"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const WhatsAppFloat = dynamic(() => import("./components/WhatsAppFloat"), { ssr: false });

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Calculator", href: "#calculator" },
  { label: "Projects", href: "#projects" },
  { label: "Subsidy", href: "/subsidy" },
  { label: "Contact", href: "#contact" },
];

const heroStats = [
  { label: "Rooftop Systems Delivered", value: "300+" },
  { label: "Commercial & Industrial MWp", value: "18" },
  { label: "Average Client Payback", value: "3.2 yrs" },
];

const valueProps = [
  {
    title: "Design-led Engineering",
    description: "Shadow analysis, optimal string design and structural checks tailored to every roof.",
    icon: CompassIcon,
  },
  {
    title: "Tier-1 Hardware & Compliance",
    description: "MNRE/BIS approved modules, smart inverters and end-to-end DISCOM & net-metering support.",
    icon: ShieldIcon,
  },
  {
    title: "Lifetime Performance Care",
    description: "Commissioning, remote monitoring, O&M teams and guaranteed response SLAs in Telangana.",
    icon: SparkIcon,
  },
];

const solutions = [
  {
    name: "Residential Rooftop",
    summary: "1–15 kW bespoke systems with aesthetics, safety and subsidy readiness built in.",
    bullets: ["Hybrid & on-grid options", "Lightweight mounting for flat & tiled roofs", "Billing portal assistance"],
    href: "/panels",
    icon: SunIcon,
  },
  {
    name: "Commercial & Industrial",
    summary: "High-yield MW-scale plants engineered for operational efficiency and predictable ROI.",
    bullets: ["Detailed energy & cash-flow modelling", "High-efficiency mono PERC / TOPCon modules", "Continuous remote monitoring"],
    href: "/projects",
    icon: FactoryIcon,
  },
  {
    name: "Institutions & Utilities",
    summary: "Multi-site campuses, hospitals and utilities with tailored O&M and safety governance.",
    bullets: ["HT/LT integration & protections", "SCADA / string-level data", "Dedicated O&M teams"],
    href: "/systems",
    icon: GridIcon,
  },
];

const steps = [
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

const caseStudies = [
  {
    title: "600 kW Manufacturing Plant — Bommalaramaram",
    metric: "₹78 lakh annual savings",
    detail: "Retrofit on RCC sheds with string-level monitoring delivering 1.68 million units every year.",
  },
  {
    title: "120 kW Multi-Speciality Hospital — Hyderabad",
    metric: "99.2% uptime maintained",
    detail: "Hybrid design with backup, critical load segregation and remote alarms to the maintenance team.",
  },
  {
    title: "10 kW Premium Villa — Nallagandla",
    metric: "₹12,800 avg. monthly offset",
    detail: "Elegant dual-tone modules with concealed conduit runs and subsidy documentation handled end-to-end.",
  },
];

const testimonials = [
  {
    quote:
      "The Bharath Solar EPC team gave us clarity on payback, executed neatly and has been proactive on every service call.",
    name: "Nithisha Poultry Farms",
    role: "100 kW on-grid plant, 2024",
  },
  {
    quote:
      "From engineering drawings to net-metering approvals, they managed each step professionally. Generation exceeds projections.",
    name: "Tulasi Hospitals",
    role: "120 kW rooftop system, 2018",
  },
];

const faqs = [
  {
    question: "How do you estimate the right solar capacity for my site?",
    answer:
      "We analyse your 12-month consumption, tariff slabs, roof geometry and shading using PVsyst. The built-in calculator below provides a quick starting point, followed by an on-site survey for precision.",
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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <BackgroundDecorations />
      <SiteHeader />
      <Hero />
      <ValueHighlights />
      <CalculatorSection />
      <SolutionsSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsFaqSection />
      <ContactSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

function BackgroundDecorations() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-[-320px] h-[620px] bg-[radial-gradient(circle_at_top,_rgba(20,123,62,0.45),_transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-[-360px] h-[620px] bg-[radial-gradient(circle_at_bottom,_rgba(241,105,33,0.35),_transparent_70%)]" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#147B3E]/20 blur-3xl" />
    </div>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/10">
            <Image src="/logo.png" alt="Bharath Solar EPC" fill className="object-contain" sizes="48px" priority />
          </span>
          <div className="hidden sm:block">
            <p className="text-sm uppercase tracking-[0.24em] text-white/60">Bharath Solar EPC</p>
            <p className="text-lg font-semibold text-white">Energy that pays for itself</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className="text-white/70 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+918977310017"
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
          >
            +91 89773 10017
          </a>
          <Link
            href="#contact"
            className="rounded-full bg-[#147B3E] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/40 transition hover:bg-[#126736]"
          >
            Talk to an expert
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-white/80 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+918977310017" className="text-base font-semibold text-white" onClick={() => setOpen(false)}>
              +91 89773 10017
            </a>
            <Link
              href="#contact"
              className="inline-flex w-full justify-center rounded-full bg-[#147B3E] px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-20">
      <div className="absolute inset-x-6 bottom-0 top-32 rounded-3xl border border-white/5 bg-white/5 blur-3xl" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            MNRE empanelled • Tier-1 components • EPC & O&M
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Power your business and home with <span className="text-[#F16921]">bankable</span> solar assets
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            We design, build and maintain high-performance solar PV plants across Telangana, Andhra Pradesh and pan-India. From roof assessments to lifetime monitoring, Bharath Solar EPC delivers energy independence with predictable returns.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#calculator"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
            >
              Estimate your savings
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              View recent work
            </Link>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <dd className="text-2xl font-bold text-white">{stat.value}</dd>
                <dt className="text-sm text-white/60">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-2xl">
            <div className="flex items-center justify-between text-sm font-semibold text-white/70">
              <span className="flex items-center gap-2">
                <SparkIcon className="h-4 w-4" /> Real-time monitoring
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em]">24/7</span>
            </div>
            <div className="mt-6 grid gap-4 text-white">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">This week</p>
                <p className="mt-1 text-3xl font-bold">4.8 MWh generated</p>
                <p className="text-sm text-emerald-300">+12% vs. weather-adjusted forecast</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/60">Carbon avoided</p>
                <p className="mt-1 text-3xl font-bold">3.9 tCO₂e</p>
                <p className="text-sm text-white/60">Equivalent to planting 176 mature trees</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#147B3E]/80 p-4 text-sm text-white">
              <p className="font-semibold">Dedicated performance desk</p>
              <p className="text-white/80">
                Get alerts before your DISCOM bill does. Our engineers review dashboards daily and dispatch crews before yield drops.
              </p>
            </div>
          </div>
          <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg sm:block">
            <Image src="/globe.svg" alt="Solar network" fill className="p-6 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueHighlights() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Why Bharath Solar EPC</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Everything you need to own and run dependable solar assets</h2>
          <p className="mt-3 text-white/70">
            From feasibility to lifetime performance, our multi-disciplinary team covers electrical, structural and financial diligence so you always know what to expect.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#147B3E]/15 text-[#147B3E]">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-white/70">{item.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-white/70">
                Learn more
                <ArrowIcon className="ml-2 h-4 w-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  return (
    <section id="calculator" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Plan your plant</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Solar sizing calculator</h2>
            <p className="mt-3 text-white/70">
              1 kW of rooftop solar in Telangana generates about <strong>150 units</strong> per month. Enter your electricity usage and tariff to estimate system size, space requirement and payback.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Tailored proposals include module layout, structure details and financial model.
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> For subsidy-ready systems, we assist with portal applications and inspections.
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Commercial clients receive net-metering, HT/LT integration and remote monitoring setups.
              </li>
            </ul>
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

  const {
    kwRounded,
    generation,
    roofArea,
    monthlySavings,
    capex,
    payback,
    co2Offset,
    hasInput,
  } = useMemo(() => {
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
    const capexValue = kwRoundedValue * capexPerKw;
    const paybackValue = savings > 0 ? capexValue / (savings * 12) : 0;
    const co2 = (Math.min(units, generationValue) * 0.82) / 1000; // tonnes of CO₂

    return {
      kwRounded: kwRoundedValue,
      generation: generationValue,
      roofArea: roof,
      monthlySavings: savings,
      capex: capexValue,
      payback: paybackValue,
      co2Offset: co2,
      hasInput: units > 0,
    };
  }, [tariff, unitsMonth]);

  const whatsappMessage = encodeURIComponent(
    `Hi Bharath, my site consumes about ${unitsMonth || "0"} units/month. Your calculator suggests ~${kwRounded.toFixed(
      1
    )} kW. Please help with a detailed proposal.`
  );

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
      <div className="space-y-6">
        <label className="block text-sm font-semibold text-white/80">
          Monthly consumption (units / kWh)
          <input
            value={unitsMonth}
            onChange={(event) => setUnitsMonth(event.target.value)}
            type="number"
            min="0"
            placeholder="e.g. 750"
            className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/60 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
          />
        </label>
        <label className="block text-sm font-semibold text-white/80">
          Tariff per unit (₹)
          <input
            value={tariff}
            onChange={(event) => setTariff(event.target.value)}
            type="number"
            min="0"
            step="0.1"
            placeholder="e.g. 8.5"
            className="mt-2 w-full rounded-2xl border border-white/20 bg-slate-900/60 px-4 py-3 text-base text-white placeholder:text-white/40 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
          />
        </label>
      </div>

      {hasInput ? (
        <div className="mt-8 space-y-4">
          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <InfoRow label="Recommended system size" value={`${kwRounded.toFixed(1)} kW`} />
            <InfoRow label="Estimated monthly generation" value={`${Math.round(generation).toLocaleString()} units`} />
            <InfoRow label="Approx. roof area required" value={`${Math.round(roofArea).toLocaleString()} sq.ft`} />
            <InfoRow
              label="Monthly savings potential"
              value={`₹${Math.round(monthlySavings).toLocaleString("en-IN")}`}
            />
            <InfoRow
              label="Indicative turnkey cost"
              value={kwRounded > 0 ? `₹${Math.round(capex / 1000).toLocaleString("en-IN")}K` : "₹0"}
            />
            <InfoRow
              label="Simple payback period"
              value={payback > 0 ? `${payback.toFixed(1)} years` : "–"}
            />
            <InfoRow
              label="CO₂ offset every year"
              value={`${(co2Offset * 12).toFixed(1)} tonnes`}
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/918977310017?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-[#147B3E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#126736]"
            >
              Share on WhatsApp
            </a>
            <Link
              href="#contact"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-white/30 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Request detailed proposal
            </Link>
          </div>
          <p className="text-xs text-white/50">
            Estimates assume south-facing rooftops in Telangana with 100 sq.ft/kW of usable area and ₹55,000/kW EPC pricing.
          </p>
        </div>
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 text-sm text-white/60">
          Enter your average monthly consumption to preview system sizing, savings and payback. Our engineering team will validate the numbers with a site survey.
        </p>
      )}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
      <span className="text-white/60">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Solutions</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tailored EPC engagements for every segment</h2>
          <p className="mt-3 text-white/70">
            Choose the engagement that fits your load profile, roof architecture and financial goals. Every project receives design, supply, installation and long-term support under one roof.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.name} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F16921]/15 text-[#F16921]">
                <solution.icon className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
              <p className="mt-3 text-sm text-white/70">{solution.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/70">
                {solution.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> {bullet}
                  </li>
                ))}
              </ul>
              <Link
                href={solution.href}
                className="mt-8 inline-flex items-center text-sm font-semibold text-white/80 hover:text-white"
              >
                Explore details <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">How we work</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">A proven EPC playbook from discovery to performance</h2>
          <p className="mt-3 text-white/70">
            Our cross-functional teams run a transparent process with weekly updates, shared documentation and quality gates so you always know the status of your solar asset.
          </p>
        </div>
        <ol className="mt-12 space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-white/40 hover:bg-white/10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Step {index + 1}</span>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-white/70">{step.description}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">{step.duration}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Proven track record</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Highlighted installations</h2>
            <p className="mt-3 text-white/70">
              A glimpse into the industries and homes that trust us with their energy transition. Detailed case studies and references are available on request.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 hover:border-white/40 hover:text-white"
          >
            View complete list <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-2xl font-bold text-white">{item.metric}</p>
              <p className="mt-3 text-sm text-white/70">{item.detail}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/70">
                Performance verified <SparkIcon className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsFaqSection() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Client confidence</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Voices from our partners</h2>
          <div className="mt-6 space-y-6">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <blockquote className="text-base text-white/80">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-white">
                  {testimonial.name} <span className="block text-xs font-normal text-white/60">{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">FAQs</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
                <summary className="cursor-pointer list-none font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Start a conversation</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s design your next solar milestone</h2>
            <p className="text-white/70">
              Share your site details, latest electricity bill and project goals. We’ll schedule a site visit, run generation simulations and send a proposal with ROI, subsidies and execution timelines.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={PhoneIcon}
                title="Call or WhatsApp"
                detail="+91 89773 10017"
                href="tel:+918977310017"
              />
              <ContactCard
                icon={MailIcon}
                title="Email"
                detail="dbr@bharathsolarepc.com"
                href="mailto:dbr@bharathsolarepc.com"
              />
              <ContactCard
                icon={MapPinIcon}
                title="Headquartered"
                detail="Hyderabad, Telangana"
              />
              <ContactCard
                icon={CalendarIcon}
                title="Site visits"
                detail="Scheduled within 48 hours"
              />
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-semibold text-slate-900">Request a customised proposal</h3>
            <p className="mt-2 text-sm text-slate-600">
              We respond within one business day with next steps and required documents.
            </p>
            <form
              action="https://formsubmit.co/dbr@bharathsolarepc.com"
              method="POST"
              className="mt-6 grid gap-4"
            >
              <input type="hidden" name="_subject" value="New Lead - Bharath Solar EPC" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                name="name"
                placeholder="Your name"
                required
                className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <input
                name="phone"
                placeholder="Phone / WhatsApp"
                required
                className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <input
                name="city"
                placeholder="City"
                className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <textarea
                name="message"
                placeholder="Share roof size, load profile or questions"
                rows="4"
                className="rounded-2xl border border-slate-200 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <button
                type="submit"
                className="rounded-full bg-[#147B3E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/30 transition hover:bg-[#126736]"
              >
                Send request
              </button>
              <p className="text-xs text-slate-500">
                Prefer WhatsApp? Message us instantly at {" "}
                <a
                  href="https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20a%20solar%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#147B3E]"
                >
                  +91 89773 10017
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, detail, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">{title}</p>
        <p className="text-sm font-semibold text-white">{detail}</p>
      </div>
    </div>
  );

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} className="block" target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }

    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">© {year} Bharath Solar EPC</p>
          <p>Dodlapati Bharath Reddy • Hyderabad, Telangana • India</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/panels" className="hover:text-white">
            Panels
          </Link>
          <Link href="/systems" className="hover:text-white">
            Systems
          </Link>
          <Link href="/subsidy" className="hover:text-white">
            Subsidy support
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Icons ---------- */

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
