"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export const valueProps = [
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

export const solutions = [
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

export const testimonials = [
  {
    quote: "The Bharath Solar EPC team gave us clarity on payback, executed neatly and has been proactive on every service call.",
    name: "Nithisha Poultry Farms",
    role: "100 kW on-grid plant, 2024",
  },
  {
    quote: "From engineering drawings to net-metering approvals, they managed each step professionally. Generation exceeds projections.",
    name: "Tulasi Hospitals",
    role: "120 kW rooftop system, 2018",
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

export function ValueHighlightsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Why Bharath Solar EPC</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Everything you need to own and run dependable solar assets
          </h2>
          <p className="mt-3 text-slate-300">
            From feasibility to lifetime performance, our multi-disciplinary team covers electrical, structural and financial diligence so you always know what to expect.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#147B3E]/15 text-[#147B3E]">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-slate-200">
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

export function CalculatorSection() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Plan your plant</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Solar sizing calculator</h2>
            <p className="mt-3 text-slate-300">
              1 kW of rooftop solar in Telangana generates about <strong>150 units</strong> per month. Enter your electricity usage and tariff to estimate system size, space requirement and payback.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
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

  const { kwRounded, generation, roofArea, monthlySavings, capex, payback, co2Offset, hasInput } = useMemo(() => {
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
    const co2 = (Math.min(units, generationValue) * 0.82) / 1000;

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

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.55)]">
      <form className="space-y-4">
        <div>
          <label htmlFor="units" className="text-sm font-semibold text-slate-200">
            Monthly electricity usage (units)
          </label>
          <input
            id="units"
            value={unitsMonth}
            onChange={(event) => setUnitsMonth(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
          />
        </div>
        <div>
          <label htmlFor="tariff" className="text-sm font-semibold text-slate-200">
            Average tariff (₹/unit)
          </label>
          <input
            id="tariff"
            value={tariff}
            onChange={(event) => setTariff(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
          />
        </div>
      </form>

      <div className="mt-6 space-y-4">
        <ResultRow label="Recommended system size" value={hasInput ? `${kwRounded.toFixed(1)} kW` : "—"} />
        <ResultRow label="Expected monthly generation" value={hasInput ? `${generation.toLocaleString()} units` : "—"} />
        <ResultRow label="Roof space required" value={hasInput ? `${roofArea.toLocaleString()} sq.ft` : "—"} />
        <ResultRow label="Estimated monthly savings" value={hasInput ? `₹${Math.round(monthlySavings).toLocaleString()}` : "—"} />
        <ResultRow label="Estimated project cost" value={hasInput ? `₹${Math.round(capex).toLocaleString()}` : "—"} />
        <ResultRow label="Simple payback" value={hasInput && payback > 0 ? `${payback.toFixed(1)} years` : "—"} />
        <ResultRow label="Annual CO₂ offset" value={hasInput ? `${co2Offset.toFixed(2)} tonnes` : "—"} />
      </div>
    </div>
  );
}

function ResultRow({ label, value }) {
  return (
    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
      <span className="text-slate-400">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}

export function SolutionsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Solutions</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Tailored EPC engagements for every segment</h2>
          <p className="mt-3 text-slate-300">
            Choose the engagement that fits your load profile, roof architecture and financial goals. Every project receives design, supply, installation and long-term support under one roof.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {solutions.map((solution) => (
            <div key={solution.name} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F16921]/15 text-[#F16921]">
                <solution.icon className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">{solution.name}</h3>
              <p className="mt-3 text-sm text-slate-300">{solution.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {solution.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> {bullet}
                  </li>
                ))}
              </ul>
              <Link href={solution.href} className="mt-8 inline-flex items-center text-sm font-semibold text-slate-200 hover:text-white">
                Explore details <ArrowIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">How we work</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            A proven EPC playbook from discovery to performance
          </h2>
          <p className="mt-3 text-slate-300">
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
                  <p className="mt-3 text-sm text-slate-300">{step.description}</p>
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
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Proven track record</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Highlighted installations</h2>
            <p className="mt-3 text-slate-300">
              A glimpse into the industries and homes that trust us with their energy transition. Detailed case studies and references are available on request.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
          >
            View complete list <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-2xl font-bold text-white">{item.metric}</p>
              <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-200">
                Performance verified <SparkIcon className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsFaqSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Client confidence</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Voices from our partners</h2>
          <div className="mt-6 space-y-6">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
                <blockquote className="text-base text-slate-200">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-white">
                  {testimonial.name} <span className="block text-xs font-normal text-slate-400">{testimonial.role}</span>
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
              <details key={faq.question} className="group rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200 shadow-sm">
                <summary className="cursor-pointer list-none font-semibold text-white">{faq.question}</summary>
                <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Start a conversation</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Let’s design your next solar milestone</h2>
            <p className="text-slate-300">
              Share your site details, latest electricity bill and project goals. We’ll schedule a site visit, run generation simulations and send a proposal with ROI, subsidies and execution timelines.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon={PhoneIcon} title="Call or WhatsApp" detail="+91 89773 10017" href="tel:+918977310017" />
              <ContactCard icon={MailIcon} title="Email" detail="dbr@bharathsolarepc.com" href="mailto:dbr@bharathsolarepc.com" />
              <ContactCard icon={MapPinIcon} title="Headquartered" detail="Hyderabad, Telangana" />
              <ContactCard icon={CalendarIcon} title="Site visits" detail="Scheduled within 48 hours" />
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold text-white">Request a customised proposal</h3>
            <p className="mt-2 text-sm text-slate-300">
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
      </div>
    </section>
  );
}

function ContactCard({ icon: Icon, title, detail, href }) {
  const content = (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-slate-200 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-slate-300">
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
