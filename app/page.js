'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "./components/layout/SiteChrome";
import { ProjectsHighlightsSection } from "./components/marketing/sections";
import WhatsAppFloat from "./components/WhatsAppFloat";

const heroStats = [
  { label: "Rooftop Systems Delivered", value: "300+" },
  { label: "Commercial & Industrial MWp", value: "18" },
  { label: "Average Client Payback", value: "3.2 yrs" },
];

const sectionCards = [
  {
    title: "Solar solutions",
    description: "Segment-wise EPC coverage with a design-first approach for rooftops and campuses.",
    href: "/solutions",
    icon: SunIcon,
    accent: "bg-[#F16921]/25 text-[#F16921]",
    glow: "from-[#F16921]/20 via-transparent to-transparent",
  },
  {
    title: "Savings calculator",
    description: "Find the ideal plant size, investment and payback for your property in minutes.",
    href: "/calculator",
    icon: CalculatorIcon,
    accent: "bg-[#22C55E]/20 text-emerald-300",
    glow: "from-emerald-400/20 via-transparent to-transparent",
  },
  {
    title: "Delivery process",
    description: "Review our five-stage execution model with quality gates and weekly checkpoints.",
    href: "/process",
    icon: ProcessIcon,
    accent: "bg-sky-500/20 text-sky-300",
    glow: "from-sky-400/20 via-transparent to-transparent",
  },
  {
    title: "Client success",
    description: "Hospitals, factories and homes that trust our engineering and O&M programmes.",
    href: "/testimonials",
    icon: QuoteIcon,
    accent: "bg-amber-400/20 text-amber-200",
    glow: "from-amber-400/25 via-transparent to-transparent",
  },
  {
    title: "Payments & finance",
    description: "See how Razorpay will simplify advance, milestone and O&M collections for you.",
    href: "/payments",
    icon: CreditCardIcon,
    accent: "bg-violet-500/20 text-violet-200",
    glow: "from-violet-400/25 via-transparent to-transparent",
  },
  {
    title: "Talk to our team",
    description: "Share your bill, roof details or RFP to receive a customised EPC proposal.",
    href: "/contact",
    icon: EnvelopeIcon,
    accent: "bg-emerald-500/20 text-emerald-200",
    glow: "from-emerald-400/20 via-transparent to-transparent",
  },
];

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      const maxScrollable = document.body.scrollHeight - window.innerHeight;
      const next = maxScrollable > 0 ? Math.min(window.scrollY / maxScrollable, 1) : 0;
      setScrollProgress(next);
      frame = 0;
    };

    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const accentPosition = `${50 + scrollProgress * 35}% ${35 + scrollProgress * 20}%`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at ${accentPosition}, rgba(16, 185, 129, 0.18), transparent 60%)`,
          opacity: 0.4 + scrollProgress * 0.4,
        }}
      />
      <BackgroundDecorations />
      <SiteHeader />
      <Hero scrollProgress={scrollProgress} />
      <SectionDirectory scrollProgress={scrollProgress} />
      <PaymentsTeaser />
      <ProjectsHighlightsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

function Hero({ scrollProgress }) {
  const sectionRef = useRef(null);
  const frameRef = useRef(0);
  const [cursor, setCursor] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => () => frameRef.current && window.cancelAnimationFrame(frameRef.current), []);

  const updateCursor = (x, y) => {
    setCursor({ x: Math.min(Math.max(x, 0), 1), y: Math.min(Math.max(y, 0), 1) });
  };

  const handlePointerMove = (event) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nextX = (event.clientX - rect.left) / rect.width;
    const nextY = (event.clientY - rect.top) / rect.height;

    if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(() => updateCursor(nextX, nextY));
  };

  const handlePointerLeave = () => {
    if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(() => updateCursor(0.5, 0.5));
  };

  const tiltX = (cursor.y - 0.5) * -10;
  const tiltY = (cursor.x - 0.5) * 12;
  const floatingShiftX = (cursor.x - 0.5) * 40;
  const floatingShiftY = (cursor.y - 0.5) * 30 - scrollProgress * 40;

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden pb-24 pt-24 sm:pt-28"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-18%] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl transition-transform duration-700"
          style={{ transform: `translate3d(${floatingShiftX}px, ${floatingShiftY}px, 0)` }}
        />
        <div
          className="absolute left-[8%] top-[28%] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl transition-transform duration-700"
          style={{ transform: `translate3d(${floatingShiftX * 0.4}px, ${floatingShiftY * -0.2}px, 0)` }}
        />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">
            MNRE empanelled • Tier-1 components • EPC & O&M
          </div>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-emerald-300 via-white to-amber-200 bg-clip-text text-transparent">
              Empowering India with immersive solar experiences
            </span>
          </h1>
          <p className="max-w-xl text-lg text-slate-300">
            We design, build and maintain high-performance solar PV plants across Telangana, Andhra Pradesh and pan-India.
            Slide through the experience, explore the section that matters to you and feel the momentum of a future-ready EPC partner.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/calculator"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_25px_50px_-20px_rgba(16,185,129,0.7)] transition hover:scale-105"
            >
              <span className="relative z-10">Estimate your savings</span>
              <ArrowIcon className="relative z-10 h-4 w-4" />
              <span className="absolute inset-0 translate-x-[-120%] bg-white/30 transition duration-500 group-hover:translate-x-[120%]" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/10"
            >
              Explore solar solutions
            </Link>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_50px_-32px_rgba(148,163,184,0.8)]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
                  style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(16,185,129,0.25))" }}
                />
                <dd className="relative text-2xl font-semibold text-white">{stat.value}</dd>
                <dt className="relative text-sm text-slate-300">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/30 to-black/40 p-8 shadow-[0_45px_100px_-40px_rgba(16,185,129,0.75)]"
            style={{ transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` }}
          >
            <div className="flex items-center justify-between text-sm font-semibold text-emerald-200/80">
              <span className="flex items-center gap-2">
                <SparkIcon className="h-4 w-4" /> Real-time monitoring
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">24/7</span>
            </div>
            <div className="mt-6 grid gap-4 text-slate-100">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-slate-300">This week</p>
                <p className="mt-1 text-3xl font-semibold">4.8 MWh generated</p>
                <p className="text-sm text-emerald-300">+12% vs. weather-adjusted forecast</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="text-sm text-slate-300">Carbon avoided</p>
                <p className="mt-1 text-3xl font-semibold">3.9 tCO₂e</p>
                <p className="text-sm text-slate-300">Equivalent to planting 176 mature trees</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-emerald-400/40 bg-emerald-400/15 p-4 text-sm text-emerald-100">
              <p className="font-semibold">Dedicated performance desk</p>
              <p className="opacity-80">
                Get alerts before your DISCOM bill does. Our engineers review dashboards daily and dispatch crews before yield drops.
              </p>
            </div>
            <div
              className="pointer-events-none absolute -right-10 -top-10 hidden h-32 w-32 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl sm:block"
              style={{ transform: `translate3d(${floatingShiftX * 0.25}px, ${floatingShiftY * 0.25}px, 0)` }}
            >
              <Image src="/globe.svg" alt="Solar network" fill className="p-6 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionDirectory({ scrollProgress }) {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Quick access</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Navigate to the details you need</h2>
          <p className="mt-3 text-slate-300">
            Each section of the site focuses on a single outcome—solutions, pricing, process, success stories, payments or contacting our experts. Glide through the cards to dive into what matters to you.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sectionCards.map((card, index) => {
            const wave = Math.sin(scrollProgress * Math.PI * 2 + index * 0.6) * 12;
            return (
              <Link
                key={card.title}
                href={card.href}
                style={{ transform: `translate3d(0, ${wave}px, 0)` }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_-40px_rgba(15,118,110,0.75)] transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_45px_120px_-40px_rgba(15,118,110,0.9)]"
              >
                <div className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br ${card.glow}`} />
                <div className="relative">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 ${card.accent}`}>
                    <card.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{card.description}</p>
                </div>
                <span className="relative mt-6 inline-flex items-center text-sm font-semibold text-slate-200 group-hover:text-white">
                  Go to section <ArrowIcon className="ml-2 h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PaymentsTeaser() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_50px_120px_-40px_rgba(56,189,248,0.45)] transition duration-500 hover:border-white/20 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)] opacity-80" />
          <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300/80">Razorpay integration</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Digital payments go live next week</h2>
              <p className="text-slate-200">
                We are configuring a Razorpay-powered checkout so you can lock in designs, pay mobilisation advances and manage O&M renewals without paperwork or manual reconciliations.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-emerald-300" /> Secure payment links for proposals and milestone invoices.
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-emerald-300" /> Auto-generated receipts with GST-compliant billing references.
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-emerald-300" /> Support for UPI, credit/debit cards and net banking from day one.
                </li>
              </ul>
            </div>
            <div
              className="relative flex shrink-0 flex-col items-start gap-4 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 text-slate-100 shadow-[0_30px_80px_-45px_rgba(56,189,248,0.55)] transition duration-500 hover:border-white/20"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-200">
                <CreditCardIcon className="h-5 w-5" />
              </span>
              <p className="text-sm text-slate-200">
                Want early access for your project? Share your billing workflow and we’ll include you in the pilot run.
              </p>
              <Link
                href="/payments"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_20px_60px_-30px_rgba(56,189,248,0.65)] transition hover:scale-105"
              >
                <span className="relative z-10">View payment plans</span>
                <ArrowIcon className="relative z-10 h-4 w-4" />
                <span className="absolute inset-0 translate-x-[-120%] bg-white/30 transition duration-500 group-hover:translate-x-[120%]" />
              </Link>
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-500"
                style={{ opacity: hovered ? 1 : 0, background: "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(16,185,129,0.25))" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
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
