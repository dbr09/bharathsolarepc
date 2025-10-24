"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  ArrowIcon,
  CalendarIcon,
  CheckIcon,
  CompassIcon,
  FactoryIcon,
  GridIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  SparkIcon,
  SunIcon,
} from "../icons";

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
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-950"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#147B3E]/15 text-[#147B3E]">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{item.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-slate-300">
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
    <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/50">
      <form className="space-y-4">
        <div>
          <label htmlFor="units" className="text-sm font-semibold text-slate-300">
            Monthly electricity usage (units)
          </label>
          <input
            id="units"
            value={unitsMonth}
            onChange={(event) => setUnitsMonth(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-base text-white placeholder:text-slate-300 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
          />
        </div>
        <div>
          <label htmlFor="tariff" className="text-sm font-semibold text-slate-300">
            Average tariff (₹/unit)
          </label>
          <input
            id="tariff"
            value={tariff}
            onChange={(event) => setTariff(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-base text-white placeholder:text-slate-300 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
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
      <span className="text-slate-300">{label}</span>
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
            <div key={solution.name} className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/40">
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
              <Link href={solution.href} className="mt-8 inline-flex items-center text-sm font-semibold text-slate-300 hover:text-white">
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
              className="group relative rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition duration-300 hover:border-slate-600 hover:bg-slate-950"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Step {index + 1}</span>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{step.description}</p>
                </div>
                <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold text-slate-200">{step.duration}</span>
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
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-slate-500 hover:text-white"
          >
            View complete list <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <article key={item.title} className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-2xl font-bold text-white">{item.metric}</p>
              <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-300">
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
              <figure key={testimonial.name} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm">
                <blockquote className="text-base text-slate-300">“{testimonial.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-white">
                  {testimonial.name} <span className="block text-xs font-normal text-slate-300">{testimonial.role}</span>
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
              <details key={faq.question} className="group rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-300 shadow-sm">
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
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-white shadow-xl">
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
                className="rounded-2xl border border-slate-800 px-4 py-3 text-base text-white placeholder:text-slate-300 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <input
                name="phone"
                placeholder="Phone / WhatsApp"
                required
                className="rounded-2xl border border-slate-800 px-4 py-3 text-base text-white placeholder:text-slate-300 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <input
                name="city"
                placeholder="City"
                className="rounded-2xl border border-slate-800 px-4 py-3 text-base text-white placeholder:text-slate-300 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <textarea
                name="message"
                placeholder="Share roof size, load profile or questions"
                rows="4"
                className="rounded-2xl border border-slate-800 px-4 py-3 text-base text-white placeholder:text-slate-300 focus:border-[#147B3E] focus:outline-none focus:ring-2 focus:ring-[#147B3E]/40"
              />
              <button
                type="submit"
                className="rounded-full bg-[#147B3E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/30 transition hover:bg-[#126736]"
              >
                Send request
              </button>
              <p className="text-xs text-slate-300">
                Prefer WhatsApp? Message us instantly at{" "}
                <a
                  href="https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20a%20solar%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#147B3E]"
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
    <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-left text-slate-300 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800/80 text-slate-200">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{title}</p>
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

