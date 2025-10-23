"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "./components/layout/SiteChrome";
import { ProjectsHighlightsSection } from "./components/marketing/sections";

const WhatsAppFloat = dynamic(() => import("./components/WhatsAppFloat"), { ssr: false });

const heroStats = [
  { label: "Happy rooftops powered", value: 300, suffix: "+", decimals: 0 },
  { label: "Mega-watts delivered", value: 18, suffix: " MWp", decimals: 0 },
  { label: "Average payback", value: 3.2, suffix: " yrs", decimals: 1 },
];

const experienceHighlights = [
  "Quick rooftop sketches",
  "Friendly project updates",
  "24/7 automated alerting",
  "Tier-1 modules & inverters",
  "O&M crews across Telangana & AP",
  "EV-ready infrastructure planning",
  "Net metering & subsidy guidance",
  "Lifetime service hotline",
];

const capabilitySpotlight = [
  {
    eyebrow: "Phase 01 — Design",
    title: "Design automation studio",
    description:
      "Our engineering desk builds a digital twin of your facility so shading, structural loads and ROI are validated before the first panel ships.",
    background:
      "radial-gradient(circle at 18% 24%, rgba(241,105,33,0.45), transparent 65%), radial-gradient(circle at 82% 76%, rgba(20,123,62,0.28), transparent 60%)",
    badges: ["Shade & structure simulation", "Financial modelling desk"],
    highlights: [
      { label: "≤ 72 hrs", detail: "to deliver 3D-validated proposals" },
      { label: "Sub 1% variance", detail: "between forecast and generation" },
    ],
    link: { href: "/process", label: "See rooftop design workflow" },
  },
  {
    eyebrow: "Phase 02 — Execution",
    title: "Execution without surprises",
    description:
      "Procurement, safety and compliance are orchestrated through daily dashboards so every stakeholder stays ahead of the construction curve.",
    background:
      "radial-gradient(circle at 20% 30%, rgba(20,123,62,0.45), transparent 60%), radial-gradient(circle at 78% 70%, rgba(56,189,248,0.28), transparent 60%)",
    badges: ["DG sync & HT expertise", "Pan-India logistics"],
    highlights: [
      { label: "5-stage QA", detail: "covering structure, electrical & safety" },
      { label: "48 hr recovery", detail: "for on-site issue resolution" },
    ],
    link: { href: "/projects", label: "Browse execution playbook" },
  },
  {
    eyebrow: "Phase 03 — Care",
    title: "Lifelong performance care",
    description:
      "After commissioning, our monitoring desk and friendly care team keep your energy and savings on track.",
    background:
      "radial-gradient(circle at 24% 80%, rgba(241,105,33,0.45), transparent 60%), radial-gradient(circle at 72% 24%, rgba(139,92,246,0.28), transparent 58%)",
    badges: ["WhatsApp help desk", "Quarterly health checks"],
    highlights: [
      { label: "99.5% uptime", detail: "achieved with predictive maintenance" },
      { label: "Clear reminders", detail: "automatic updates and visit logs" },
    ],
    link: { href: "/contact", label: "Talk to our care team" },
  },
];

const sectionCards = [
  {
    title: "Solar solutions",
    description: "Segment-wise EPC coverage with a design-first approach for rooftops and campuses.",
    href: "/solutions",
    icon: SunIcon,
    accent: "bg-[#F16921]/15 text-[#F16921]",
  },
  {
    title: "Savings calculator",
    description: "Find the ideal plant size, investment and payback for your property in minutes.",
    href: "/calculator",
    icon: CalculatorIcon,
    accent: "bg-[#147B3E]/15 text-[#147B3E]",
  },
  {
    title: "Delivery process",
    description: "Review our five-stage execution model with quality gates and weekly checkpoints.",
    href: "/process",
    icon: ProcessIcon,
    accent: "bg-blue-500/15 text-blue-300",
  },
  {
    title: "Client success",
    description: "Hospitals, factories and homes that trust our engineering and O&M programmes.",
    href: "/testimonials",
    icon: QuoteIcon,
    accent: "bg-amber-500/15 text-amber-300",
  },
  {
    title: "Service & care",
    description: "Book cleaning, checks and fixes with a friendly support team.",
    href: "/contact",
    icon: CareIcon,
    accent: "bg-violet-500/15 text-violet-300",
  },
  {
    title: "Talk to our team",
    description: "Share your bill, roof details or RFP to receive a customised EPC proposal.",
    href: "/contact",
    icon: EnvelopeIcon,
    accent: "bg-emerald-500/15 text-emerald-300",
  },
];

const journeySteps = [
  {
    title: "Plan it together",
    description: "Share your bill or roof photo. We draw the best fit in simple 3D sketches.",
    icon: CompassIcon,
    accent: "bg-sky-500/15 text-sky-300",
  },
  {
    title: "Build it safely",
    description: "Our crew installs tidy panels with daily photo updates and neat wiring.",
    icon: BuildIcon,
    accent: "bg-emerald-500/15 text-emerald-300",
  },
  {
    title: "Enjoy clean power",
    description: "Watch your energy, savings and service visits on one friendly dashboard.",
    icon: SmileIcon,
    accent: "bg-amber-500/15 text-amber-300",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <DynamicBackground />
      <BackgroundDecorations />
      <SiteHeader />
      <Hero />
      <SimpleJourney />
      <ExperienceRail />
      <SectionDirectory />
      <CapabilityShowcase />
      <ProjectsHighlightsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

function Hero() {
  const cardRef = useRef(null);
  const frameRef = useRef();
  const baseTransform = "perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  const [cardTransform, setCardTransform] = useState(baseTransform);
  const [glowStyle, setGlowStyle] = useState({
    opacity: 0,
    background: "radial-gradient(circle at 50% 50%, rgba(241,105,33,0.35), transparent 60%)",
  });

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  const handlePointerMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rotateX = ((y - rect.height / 2) / rect.height) * -12;
      const rotateY = ((x - rect.width / 2) / rect.width) * 12;
      const clampedX = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      const clampedY = Math.min(Math.max((y / rect.height) * 100, 0), 100);

      setCardTransform(
        `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`
      );
      setGlowStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${clampedX}% ${clampedY}%, rgba(241,105,33,0.35), transparent 60%)`,
      });
    });
  };

  const handlePointerLeave = () => {
    cancelAnimationFrame(frameRef.current);
    setCardTransform(baseTransform);
    setGlowStyle((current) => ({ ...current, opacity: 0 }));
  };

  return (
    <section className="relative overflow-hidden pb-24 pt-24 sm:pt-28">
      <div className="absolute inset-x-6 bottom-0 top-20 rounded-3xl border border-white/5 bg-white/5 blur-3xl" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-white/80">
            <SparkIcon className="h-3.5 w-3.5 text-[#F16921]" /> Solar made easy for everyone
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Sunshine savings made simple
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            We design, build and care for rooftop solar across Telangana and Andhra Pradesh so every family and facility can enjoy clean power.
          </p>
          <ul className="mt-6 space-y-3 text-base text-white/75">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#F16921]" aria-hidden />
              Friendly engineers explain every step in plain words.
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#147B3E]" aria-hidden />
              Daily photo updates while we install your panels.
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" aria-hidden />
              Lifetime monitoring so your system keeps shining.
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
            >
              Start my solar plan
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              See real projects
            </Link>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
              >
                <dd className="text-2xl font-bold text-white">
                  <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </dd>
                <dt className="mt-1 text-sm text-white/60">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div
            ref={cardRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative isolate overflow-hidden rounded-[32px] border border-white/15 bg-white/5 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.6)] transition-transform duration-200 ease-out"
            style={{ transform: cardTransform }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 transition duration-200" style={glowStyle} />
            <div className="relative flex flex-col gap-6 text-white">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                <SparkIcon className="h-4 w-4" /> Solar dashboard
              </div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">See your solar story live</h2>
              <p className="text-sm text-white/70">
                Colourful tiles show today&rsquo;s energy, savings and upcoming care visits in one friendly view.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Today&rsquo;s energy</p>
                  <p className="mt-2 text-2xl font-semibold text-white">+12%</p>
                  <p className="text-sm text-white/60">Better than the usual sunshine this week.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Next care visit</p>
                  <p className="mt-2 text-2xl font-semibold text-white">Thu, 4 PM</p>
                  <p className="text-sm text-white/60">We bring cleaning kits and tiny repairs.</p>
                </div>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 self-start rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:bg-white"
              >
                Peek at a sample dashboard
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimpleJourney() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Three easy steps</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">See how simple solar can be</h2>
          <p className="mt-3 text-white/70">
            From first hello to glowing panels, we stay beside you with friendly updates and easy guidance.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {journeySteps.map((step) => (
            <div
              key={step.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_20px_50px_rgba(15,23,42,0.45)] backdrop-blur"
            >
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${step.accent}`}>
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceRail() {
  return (
    <section className="relative border-y border-white/5 bg-slate-950/70 py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent" aria-hidden />
      <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#F16921]">What you&rsquo;ll feel</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Updates you&rsquo;ll love to follow</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            We share pictures, charts and reminders so everyone stays calm and excited during the build.
          </p>
        </div>
      </div>
      <div className="mt-8 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-6 px-6">
          {[...experienceHighlights, ...experienceHighlights].map((item, index) => (
            <span
              key={`rail-top-${index}-${item}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 shadow-[0_12px_32px_rgba(15,23,42,0.45)] backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#F16921]" aria-hidden />
              {item}
            </span>
          ))}
        </div>
        <div className="marquee-track marquee-track--reverse mt-6 flex w-max items-center gap-6 px-6">
          {[...experienceHighlights, ...experienceHighlights].map((item, index) => (
            <span
              key={`rail-bottom-${index}-${item}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80 shadow-[0_12px_32px_rgba(15,23,42,0.45)] backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionDirectory() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Quick access</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Navigate to the details you need</h2>
          <p className="mt-3 text-white/70">
            Each section of the site focuses on a single outcome—solutions, pricing, process, success stories, payments or contacting our experts.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sectionCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
            >
              <div>
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.accent}`}>
                  <card.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-white/70">{card.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-white/80 group-hover:text-white">
                Go to section <ArrowIcon className="ml-2 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCapability = capabilitySpotlight[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % capabilitySpotlight.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-x-0 top-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.65fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#F16921]">Full-stack EPC</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Dynamic teams across the project lifecycle</h2>
          <p className="text-white/70">
            Pick a focus below to see how we combine software, engineering and service for compounding returns on your solar investment.
          </p>
          <div className="flex flex-wrap gap-3">
            {capabilitySpotlight.map((item, index) => (
              <button
                type="button"
                key={item.title}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  index === activeIndex
                    ? "border-white/60 bg-white/15 text-white shadow-[0_12px_30px_rgba(15,23,42,0.45)]"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/40 hover:text-white"
                }`}
                aria-pressed={index === activeIndex}
                aria-label={`View ${item.title}`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-slate-950/60">
            <div key={activeCapability.title} className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 animate-fade-in" style={{ background: activeCapability.background }} />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/30 via-transparent to-slate-950/60" />
            </div>
            <div className="relative space-y-6 p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">{activeCapability.eyebrow}</p>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">{activeCapability.title}</h3>
              <p className="text-sm text-white/75">{activeCapability.description}</p>
              <div className="flex flex-wrap gap-2">
                {activeCapability.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F16921]" aria-hidden />
                    {badge}
                  </span>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {activeCapability.highlights.map((highlight) => (
                  <div key={highlight.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-lg font-semibold text-white">{highlight.label}</p>
                    <p className="mt-1 text-sm text-white/70">{highlight.detail}</p>
                  </div>
                ))}
              </div>
              <Link
                href={activeCapability.link.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#F16921]"
              >
                {activeCapability.link.label}
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div
            className="pointer-events-none absolute -right-12 -top-12 hidden h-32 w-32 rounded-full border border-white/10 bg-white/10 backdrop-blur lg:block animate-float-slow"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}

function DynamicBackground() {
  const orbRef = useRef(null);
  const frameRef = useRef();

  useEffect(() => {
    let frame = 0;

    const animate = () => {
      frame += 0.015;
      if (orbRef.current) {
        const x = Math.sin(frame) * 80;
        const y = Math.cos(frame / 1.5) * 60;
        const scale = 1.05 + Math.sin(frame / 2) * 0.06;
        orbRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
      }
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,23,42,0.9),_rgba(15,23,42,0.65)_35%,_rgba(15,23,42,0.9)_70%)]" />
      <div className="animate-grid-pulse absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_0),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_0)] bg-[size:160px_160px] opacity-60" />
      <div
        ref={orbRef}
        className="absolute left-1/2 top-1/3 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(241,105,33,0.4),_rgba(15,23,42,0))] opacity-80 blur-3xl transition-transform duration-700"
      />
      <div className="absolute inset-x-0 bottom-[-360px] h-[620px] bg-[radial-gradient(circle_at_bottom,_rgba(20,123,62,0.28),_transparent_70%)]" />
    </div>
  );
}

function AnimatedCounter({ value, decimals = 0, suffix = "", prefix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    const duration = 900;
    const target = value;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(target * eased);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameRef.current);
  }, [value]);

  return (
    <span suppressHydrationWarning>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function SparkIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 5.5H19l-4.5 3.4L16.5 19 12 15.6 7.5 19l1.5-7.1L4 8.5h5.2L12 3z" />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
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

function CalculatorIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9h8M10 13v4M8 15h4M14 13h2M14 17h2" />
    </svg>
  );
}

function ProcessIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    </svg>
  );
}

function QuoteIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M5 11h5v6H5zm9 0h5v6h-5z" />
    </svg>
  );
}

function CareIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-5.2-3-7.4-6.2c-1.6-2.4-0.3-5.8 2.3-6.4 1.6-.3 3.3.6 4.7 2.2 1.4-1.6 3.1-2.5 4.7-2.2 2.6.6 3.9 4 2.3 6.4C17.2 18 12 21 12 21z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.2 14.4 5 16.1M16.8 14.4l2.2 1.7" />
    </svg>
  );
}

function EnvelopeIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m22 7-10 6L2 7" />
    </svg>
  );
}

function CompassIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 6-2-2 6-6 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </svg>
  );
}

function BuildIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 10a4 4 0 0 0-6.6-2.8l-6.4 6.4 1.4 1.4 6.3-6.3A4 4 0 0 0 14 14l3.6 3.6 1.4-1.4z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.5 14.5 4 4" />
    </svg>
  );
}

function SmileIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15c.7 1.2 2 2 3 2s2.3-.8 3-2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 10h.01M15 10h.01" />
    </svg>
  );
}
