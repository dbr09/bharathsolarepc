"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "./components/layout/SiteChrome";
import { ProjectsHighlightsSection } from "./components/marketing/sections";

const WhatsAppFloat = dynamic(() => import("./components/WhatsAppFloat"), { ssr: false });

const heroStats = [
  { label: "Happy rooftops", value: 300, suffix: "+", decimals: 0 },
  { label: "Megawatts running", value: 18, suffix: " MWp", decimals: 0 },
  { label: "Payback time", value: 3.2, suffix: " yrs", decimals: 1 },
];

const experienceHighlights = [
  "Quick rooftop check",
  "Daily project tracker",
  "Weekly smile updates",
  "Safety team on call",
  "Top-tier panels & parts",
  "Cleaning reminders",
  "Friendly local crew",
  "Subsidy help made easy",
];

const capabilitySpotlight = [
  {
    eyebrow: "Step 01 — Plan",
    title: "Draw your solar story",
    description:
      "We map your roof in 3D, check shadows and pick strong mounts so every panel fits like a puzzle and every rupee is ready to work.",
    background:
      "radial-gradient(circle at 18% 24%, rgba(241,105,33,0.45), transparent 65%), radial-gradient(circle at 82% 76%, rgba(20,123,62,0.28), transparent 60%)",
    badges: ["Shade & strength check", "Money math desk"],
    highlights: [
      { label: "72 hrs", detail: "to send colourful drawings" },
      { label: "1% wiggle room", detail: "between plan and real power" },
    ],
    link: { href: "/process", label: "See our planning room" },
  },
  {
    eyebrow: "Step 02 — Build",
    title: "Safe hands on your roof",
    description:
      "Site teams bring helmets, harnesses and daily photo logs so everyone sees steady progress without scary surprises.",
    background:
      "radial-gradient(circle at 20% 30%, rgba(20,123,62,0.45), transparent 60%), radial-gradient(circle at 78% 70%, rgba(56,189,248,0.28), transparent 60%)",
    badges: ["Daily photo log", "Pan-India helpers"],
    highlights: [
      { label: "5 safety checks", detail: "structure, wires & worker gear" },
      { label: "48 hr fix", detail: "for any on-site hiccup" },
    ],
    link: { href: "/projects", label: "Visit build journey" },
  },
  {
    eyebrow: "Step 03 — Care",
    title: "Happy power every day",
    description:
      "After switch-on we watch the app, clean panels and share simple payment buttons so your energy and savings stay bright.",
    background:
      "radial-gradient(circle at 24% 80%, rgba(241,105,33,0.45), transparent 60%), radial-gradient(circle at 72% 24%, rgba(139,92,246,0.28), transparent 58%)",
    badges: ["WhatsApp help desk", "Generation promises"],
    highlights: [
      { label: "99.5% uptime", detail: "with gentle predictive care" },
      { label: "Easy collections", detail: "UPI, cards and invoices in one place" },
    ],
    link: { href: "/payments", label: "Explore care plans" },
  },
];

const sectionCards = [
  {
    title: "Solar plans",
    description: "See rooftop and campus plans ready for homes, schools and factories.",
    href: "/solutions",
    icon: SunIcon,
    accent: "bg-[#F16921]/15 text-[#F16921]",
  },
  {
    title: "Savings tool",
    description: "Type your bill and learn how much sunshine money you can keep.",
    href: "/calculator",
    icon: CalculatorIcon,
    accent: "bg-[#147B3E]/15 text-[#147B3E]",
  },
  {
    title: "Build journey",
    description: "Follow our simple five-step build story with photos and checks.",
    href: "/process",
    icon: ProcessIcon,
    accent: "bg-blue-500/15 text-blue-300",
  },
  {
    title: "Happy stories",
    description: "Hospitals, factories and families already smiling with solar.",
    href: "/testimonials",
    icon: QuoteIcon,
    accent: "bg-amber-500/15 text-amber-300",
  },
  {
    title: "Easy payments",
    description: "Pay in the way you like with gentle reminders and clear receipts.",
    href: "/payments",
    icon: CreditCardIcon,
    accent: "bg-violet-500/15 text-violet-300",
  },
  {
    title: "Chat with us",
    description: "Share your idea and our friendly guides call you right back.",
    href: "/contact",
    icon: EnvelopeIcon,
    accent: "bg-emerald-500/15 text-emerald-300",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <DynamicBackground />
      <BackgroundDecorations />
      <SiteHeader />
      <Hero />
      <ExperienceRail />
      <SectionDirectory />
      <CapabilityShowcase />
      <PaymentsTeaser />
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            Solar made easy for every family
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Bright solar power for homes, schools and factories
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            We plan, build and look after solar panels across Telangana, Andhra Pradesh and beyond. Choose what you need and we
            guide you step by step.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/70">
              <SparkIcon className="h-4 w-4 text-[#F16921]" /> Friendly guides at every step
            </div>
            <div className="inline-flex items-center gap-3 text-sm text-white/60">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                24×7
              </span>
              Watchful team, day and night
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/calculator"
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
            >
              Start your savings
            </Link>
            <Link
              href="/solutions"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/60"
            >
              See solar plans
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
            >
              Talk to our team
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
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                <span className="inline-flex items-center gap-2 text-sm tracking-[0.25em]">
                  <SparkIcon className="h-4 w-4" /> Easy view
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em]">Live</span>
              </div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                One screen for sun power and money
              </h2>
              <p className="text-sm text-white/70">
                See how your panels shine, get help tickets, and follow payments on one friendly board that anyone can read.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Green power</p>
                  <p className="mt-2 text-lg font-semibold text-white">Smart alerts</p>
                  <p className="text-sm text-white/60">We tap you gently before energy drops so cleaning or checks happen fast.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Payments</p>
                  <p className="mt-2 text-lg font-semibold text-white">Milestone cards</p>
                  <p className="text-sm text-white/60">Simple cards show what was paid, what is next, and share receipts instantly.</p>
                </div>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 self-start rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:bg-white"
              >
                Peek at live projects
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="pointer-events-none absolute -right-10 top-10 hidden w-32 rounded-3xl border border-white/10 bg-[#147B3E]/35 p-4 text-sm text-white shadow-xl shadow-[#147B3E]/30 backdrop-blur md:flex animate-float-slow">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">Alert</p>
                <p className="mt-2 text-sm font-semibold">String 08 cleaned</p>
                <p className="text-[11px] text-white/60">Crew closed ticket 12 mins ago.</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -left-10 bottom-12 hidden w-36 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-sm text-white shadow-2xl shadow-slate-950/40 backdrop-blur lg:flex animate-float-fast">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Yield today</p>
                <p className="mt-2 text-xl font-semibold">+12%</p>
                <p className="text-[11px] text-white/60">vs 10-day weather average</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 hidden h-28 w-28 rounded-3xl border border-white/15 bg-white/10 backdrop-blur sm:block animate-float-fast">
              <Image src="/globe.svg" alt="Solar network" fill className="p-6 opacity-80" />
            </div>
          </div>
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
            <p className="text-xs uppercase tracking-[0.3em] text-[#F16921]">How we help</p>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">We stay with you from hello to sunshine</h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Simple notes, colourful trackers and cheerful calls keep every parent, principal or plant head relaxed and ready.
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
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Pick a path</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Choose what you want to see</h2>
          <p className="mt-3 text-white/70">
            Tap a colourful card to jump straight to plans, savings, build steps, stories, payments or friendly help.
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
                Open section <ArrowIcon className="ml-2 h-4 w-4" />
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
          <p className="text-xs uppercase tracking-[0.3em] text-[#F16921]">Step-by-step care</p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Three easy steps from idea to sunshine</h2>
          <p className="text-white/70">
            Hover or tap to see how we plan, build and care for your solar family with colourful updates and gentle support.
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

function PaymentsTeaser() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-[1fr_0.85fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F16921]">Easy payments</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Pay, track and smile in one place</h2>
              <p className="text-white/70">
                Use UPI, cards or bank transfers with instant receipts and gentle reminders. Every family member or finance lead sees the same clear timeline.
              </p>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Tap a secure link to pay when each step is ready.
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Instant SMS and email receipts for your records.
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Share payment buttons with your finance team or family.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-200">
                <CreditCardIcon className="h-5 w-5" />
              </span>
              <p className="text-lg font-semibold text-white">Try the flow with us</p>
              <p className="text-sm text-white/70">
                We walk you through a sample checkout so you know exactly what to expect on billing day.
              </p>
              <Link
                href="/payments"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:bg-slate-100"
              >
                Explore payment options
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
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

function CreditCardIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M7 14h4" />
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

function CheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 12.5l3.5 3.5 9-9" />
    </svg>
  );
}
