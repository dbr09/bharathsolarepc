'use client';

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "./components/layout/SiteChrome";
import { ProjectsHighlightsSection } from "./components/marketing/sections";
import WhatsAppFloat from "./components/WhatsAppFloat";

const heroStats = [
  { label: "Rooftop Systems Delivered", value: 300, suffix: "+", decimals: 0 },
  { label: "Commercial & Industrial MWp", value: 18, suffix: " MWp", decimals: 0 },
  { label: "Average Client Payback", value: 3.2, suffix: " yrs", decimals: 1 },
];

const heroBadges = ["Tier-1 modules", "Smart O&M", "Finance-ready"];

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

const marqueeItems = [
  {
    title: "Hospitals & pharma",
    description: "Sterile rooftops with HVAC resilience and EMI compliance.",
  },
  {
    title: "Manufacturing",
    description: "High-span sheds, lightweight structures and DG sync upgrades.",
  },
  {
    title: "Institutions",
    description: "Auditorium shading, net-metering approvals and smart kiosks.",
  },
  {
    title: "Premium residences",
    description: "Design-led pergolas, battery-ready wiring and EV-ready circuits.",
  },
];

const LIVE_SNAPSHOT_INTERVAL_MS = 4800;
const CASE_STUDY_CYCLE_MS = 6800;

const caseStudyMilestones = [
  {
    label: "Feasibility",
    detail: "Digital twin of the campus, load profiling and ROI narrative in 4 days.",
    status: "complete",
    owner: "Solutions lab",
    duration: "4 days",
    insights: [
      "Digital twin ready within 96 hours",
      "Load flow flagged two circuits for reinforcement",
      "Financial story circulated to leadership for go-ahead",
    ],
  },
  {
    label: "Engineering",
    detail: "PE-stamped designs, wind tunnel validation and tier-1 BOM within 10 days.",
    status: "complete",
    owner: "Engineering desk",
    duration: "10 days",
    insights: [
      "Structural checks cleared with 1.8 safety factor",
      "Wind tunnel validation completed with action log",
      "Tier-1 BOM locked with warranty trackers",
    ],
  },
  {
    label: "Execution",
    detail: "Zero-shutdown installation with night-time crane operations and QA sign-offs.",
    status: "active",
    owner: "Project delivery",
    duration: "21 days",
    insights: [
      "Night crane slots reserved to avoid production loss",
      "Sterile zone cable trays sealed and audited",
      "QA punch list cleared stage-by-stage",
    ],
  },
  {
    label: "Handover",
    detail: "Performance dashboards, O&M playbooks and DISCOM coordination done for you.",
    status: "upcoming",
    owner: "Performance desk",
    duration: "Go-live week",
    insights: [
      "Live dashboards configured with alert routing",
      "DISCOM net-metering file submitted",
      "O&M sprint calendar shared with client team",
    ],
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
      <PartnerMarquee />
      <SectionDirectory scrollProgress={scrollProgress} />
      <CaseStudySpotlight />
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
  const [liveSnapshot, setLiveSnapshot] = useState(() => ({
    generation: 4.8,
    planDelta: 0.12,
    irradiance: 0.92,
    availability: 0.998,
    health: 0.98,
    carbon: 3.9,
    trend: createTrend(4.6),
    insights: buildInsights(0.12, 0.92, 0.998, 0.98),
  }));
  const [statsRef, statsInView] = useInView({ threshold: 0.35, once: true });

  useEffect(() => () => frameRef.current && window.cancelAnimationFrame(frameRef.current), []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLiveSnapshot((prev) => produceLiveSnapshot(prev));
    }, LIVE_SNAPSHOT_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

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

  const planDeltaClass = liveSnapshot.planDelta >= 0 ? "text-emerald-200" : "text-amber-200";
  const trendDelta = liveSnapshot.trend.length > 1 ? liveSnapshot.trend[liveSnapshot.trend.length - 1] - liveSnapshot.trend[liveSnapshot.trend.length - 2] : 0;
  const trendBadgeClass = trendDelta >= 0 ? "text-emerald-200" : "text-amber-200";
  const refreshLabel = `${(LIVE_SNAPSHOT_INTERVAL_MS / 1000).toFixed(1)}s`;

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden pb-20 pt-20 sm:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute left-1/2 top-[-18%] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl transition-transform duration-700"
          style={{ transform: `translate3d(${floatingShiftX}px, ${floatingShiftY}px, 0)` }}
        />
        <div
          className="absolute left-[8%] top-[28%] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl transition-transform duration-700"
          style={{ transform: `translate3d(${floatingShiftX * 0.4}px, ${floatingShiftY * -0.2}px, 0)` }}
        />
        <div
          className="absolute right-[10%] top-[12%] h-56 w-56 rounded-full bg-amber-400/30 blur-[120px]"
          style={{ transform: `translate3d(${floatingShiftX * -0.2}px, ${floatingShiftY * 0.4}px, 0)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.6)_0%,rgba(2,6,23,0.2)_50%,transparent_85%)]" />
        <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />
        <div className="absolute inset-x-0 bottom-8 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200 shadow-[0_25px_45px_-28px_rgba(16,185,129,0.6)]">
            MNRE empanelled • Tier-1 components • EPC & O&M
          </div>
          <h1 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-emerald-300 via-white to-amber-200 bg-clip-text text-transparent">
              Empowering India with clean solar energy
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
            We design, build and maintain high-performance solar PV plants across Telangana, Andhra Pradesh and pan-India.
            Slide through the experience, explore the section that matters to you and feel the momentum of a future-ready EPC partner.
          </p>
          <div className="flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span key={badge} className="tag-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/calculator"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_25px_50px_-20px_rgba(16,185,129,0.7)] transition hover:scale-105 sm:px-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <span className="relative z-10">Estimate your savings</span>
              <ArrowIcon className="relative z-10 h-4 w-4" />
              <span className="absolute inset-0 translate-x-[-120%] bg-white/30 transition duration-500 group-hover:translate-x-[120%]" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/10 sm:px-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Explore solar solutions
            </Link>
          </div>
          <dl ref={statsRef} className="grid gap-6 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <AnimatedStat key={stat.label} index={index} active={statsInView} {...stat} />
            ))}
          </dl>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-black/45 p-6 shadow-[0_55px_130px_-55px_rgba(16,185,129,0.7)] backdrop-blur-xl sm:p-8"
            style={{ transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10" aria-hidden />
            <div className="pointer-events-none absolute inset-[18px] rounded-[24px] border border-white/10 opacity-40" aria-hidden />
            <div className="relative flex items-center justify-between text-sm font-semibold text-emerald-200/90">
              <span className="flex items-center gap-2">
                <SparkIcon className="h-4 w-4" /> Real-time monitoring
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-100">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" aria-hidden /> Live
              </span>
            </div>
            <div className="relative mt-6 space-y-5 text-slate-100" aria-live="polite">
              <div className="rounded-2xl border border-white/10 bg-white/6 p-5">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Today&apos;s generation</p>
                <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-4xl font-semibold leading-none">
                      {`${formatNumber(liveSnapshot.generation, 1)} MWh`}
                    </p>
                    <p className={`mt-2 text-sm ${planDeltaClass}`}>
                      {`${formatDelta(liveSnapshot.planDelta * 100, 0, "%")} vs plan`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-xs text-slate-200/80">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Irradiance</span>
                      <span className="text-sm font-semibold text-slate-100">{`${formatPercent(liveSnapshot.irradiance, 0)} optimal`}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Availability</span>
                      <span className="text-sm font-semibold text-slate-100">{`${formatPercent(liveSnapshot.availability, 1)}`}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  <Sparkline values={liveSnapshot.trend} className="h-20 w-full" />
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className={`font-semibold ${trendBadgeClass}`}>
                      {`${trendDelta >= 0 ? "+" : "-"}${Math.abs(trendDelta).toFixed(2)} MWh this cycle`}
                    </span>
                    <span>{`Auto-updating every ${refreshLabel}`}</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/6 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Health score</p>
                  <p className="mt-3 text-3xl font-semibold">{formatPercent(liveSnapshot.health, 0)}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/80">All inverters are online and dispatch ready.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/6 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Carbon avoided</p>
                  <p className="mt-3 text-3xl font-semibold">{`${formatNumber(liveSnapshot.carbon, 1)} tCO₂e`}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200/80">Equal to planting 176 mature trees this week.</p>
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-sm text-emerald-100">
                <p className="font-semibold">Performance desk on watch</p>
                <p className="mt-1 opacity-80">
                  Engineers review every anomaly, push insights to WhatsApp, and dispatch crews before yield dips.
                </p>
              </div>
              <ul className="grid gap-3 text-xs text-slate-300">
                {liveSnapshot.insights.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                    <span className="text-sm text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="pointer-events-none absolute -right-12 -top-12 hidden h-32 w-32 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl sm:block"
              style={{ transform: `translate3d(${floatingShiftX * 0.25}px, ${floatingShiftY * 0.25}px, 0)` }}
            >
              <Image src="/globe.svg" alt="Solar network" fill className="p-6 opacity-80" />
            </div>
            <div className="pointer-events-none absolute -left-10 bottom-12 hidden h-24 w-24 rounded-full bg-emerald-400/20 blur-3xl sm:block" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionDirectory({ scrollProgress }) {
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Quick access</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Navigate to the details you need</h2>
          <p className="mt-3 text-slate-300">
            Each section of the site focuses on a single outcome—solutions, pricing, process, success stories, payments or contacting our experts. Glide through the cards to dive into what matters to you.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {sectionCards.map((card, index) => {
            const wave = Math.sin(scrollProgress * Math.PI * 2 + index * 0.6) * 12;
            return (
              <Link
                key={card.title}
                href={card.href}
                style={{ transform: `translate3d(0, ${wave}px, 0)` }}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_-40px_rgba(15,118,110,0.75)] transition duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_45px_120px_-40px_rgba(15,118,110,0.9)] sm:p-6"
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

function PartnerMarquee() {
  const duplicated = [...marqueeItems, ...marqueeItems];

  return (
    <section className="py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="marquee relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6 shadow-[0_45px_120px_-50px_rgba(56,189,248,0.55)] sm:p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_65%)] opacity-80" aria-hidden />
          <div className="pointer-events-none absolute inset-0 border border-white/10" aria-hidden />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-sky-300/80">Trusted by teams that demand uptime</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Industrial-grade design with lifestyle-grade finish</h2>
              <p className="text-slate-300">From smart hospitals and precision factories to premium homes, our experiential EPC blends performance engineering with immersive storytelling.</p>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/10"
            >
              Explore projects
              <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/40 sm:mt-10">
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950/90 to-transparent" aria-hidden />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950/90 to-transparent" aria-hidden />
            <div className="marquee-track gap-6 px-4 py-5 sm:gap-8 sm:px-6">
              {duplicated.map((item, index) => (
                <div key={`${item.title}-${index}`} className="flex min-w-[200px] flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 sm:min-w-[220px] sm:px-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">{item.title}</span>
                  <span className="text-sm text-slate-200">{item.description}</span>
                </div>
              ))}
            </div>
            <div className="marquee-track gap-6 px-4 py-5 sm:gap-8 sm:px-6" data-direction="reverse">
              {duplicated.map((item, index) => (
                <div key={`reverse-${item.title}-${index}`} className="flex min-w-[200px] flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 sm:min-w-[220px] sm:px-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300/90">{item.title}</span>
                  <span className="text-sm text-slate-400">{item.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudySpotlight() {
  const statusStyles = {
    complete: "border-emerald-400/40 bg-emerald-400/10 text-emerald-100",
    active: "border-sky-400/40 bg-sky-400/10 text-sky-100",
    upcoming: "border-white/10 bg-white/5 text-slate-200",
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [stageProgress, setStageProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const pauseTimeoutRef = useRef(null);
  const activeMilestone = caseStudyMilestones[activeIndex];
  const progressThroughTimeline = ((activeIndex + stageProgress) / caseStudyMilestones.length) * 100;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || prefersReducedMotion) return undefined;
    let animationFrame = 0;
    let lastTimestamp;

    const step = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      setStageProgress((prev) => {
        const next = prev + delta / CASE_STUDY_CYCLE_MS;
        if (next >= 1) {
          setActiveIndex((current) => (current + 1) % caseStudyMilestones.length);
          return 0;
        }
        return next;
      });

      animationFrame = window.requestAnimationFrame(step);
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [paused, prefersReducedMotion]);

  useEffect(
    () => () => {
      if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    },
    []
  );

  const handleUserPause = useCallback(() => {
    if (prefersReducedMotion) return;
    setPaused(true);
    if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => setPaused(false), 10000);
  }, [prefersReducedMotion]);

  const handleResume = useCallback(() => {
    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }
    if (!prefersReducedMotion) setPaused(false);
  }, [prefersReducedMotion]);

  const handleActivate = useCallback(
    (index, shouldPause = false) => {
      setActiveIndex(index);
      setStageProgress(0);
      if (shouldPause) handleUserPause();
    },
    [handleUserPause]
  );

  const handleMilestoneKeyDown = useCallback(
    (event, index) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        handleActivate((index + 1) % caseStudyMilestones.length, true);
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        handleActivate((index - 1 + caseStudyMilestones.length) % caseStudyMilestones.length, true);
      }
    },
    [handleActivate]
  );

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 via-slate-900/30 to-slate-950/60 p-6 shadow-[0_55px_140px_-60px_rgba(16,185,129,0.75)] sm:p-10">
          <div className="pointer-events-none absolute inset-0 border border-white/10" aria-hidden />
          <div className="pointer-events-none absolute inset-6 rounded-[28px] border border-white/5 opacity-40" aria-hidden />
          <div className="pointer-events-none absolute -right-12 top-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" aria-hidden />
          <div className="relative space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Spotlight case study</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Pharma campus powering critical loads round the clock</h2>
            <p className="max-w-2xl text-slate-200">
              A 650 kWp rooftop and carport system for a Hyderabad-based pharmaceutical major integrates rapid shutdown, sterile zone routing and predictive maintenance for zero disruptions.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Capacity</p>
                <p className="mt-2 text-2xl font-semibold text-white">650 kWp rooftop</p>
                <p className="text-sm text-emerald-300">+18% yield vs baseline</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Carbon savings</p>
                <p className="mt-2 text-2xl font-semibold text-white">812 tCO₂e</p>
                <p className="text-sm text-slate-300">Equivalent to 37,000 trees</p>
              </div>
            </div>
            <div className="relative mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  <SparkIcon className="h-4 w-4" /> Digital twin validated
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                  <SparkIcon className="h-4 w-4" /> GMP compliant routing
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Payback</p>
                  <p className="mt-1 text-xl font-semibold text-white">3.1 years</p>
                  <p className="text-xs text-emerald-300">Locked financing with SBI</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Availability</p>
                  <p className="mt-1 text-xl font-semibold text-white">99.4%</p>
                  <p className="text-xs text-slate-300">24/7 command centre monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_45px_120px_-50px_rgba(14,116,144,0.55)] sm:p-8"
          onMouseLeave={handleResume}
        >
          <div className="flex items-center gap-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Quality gates</p>
            <div className="flex flex-1 items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-sky-400 to-amber-300"
                  style={{ width: `${progressThroughTimeline}%` }}
                />
              </div>
              <span className="text-xs text-slate-400">{`${activeIndex + 1}/${caseStudyMilestones.length}`}</span>
            </div>
          </div>
          <div className="relative mt-2 flex flex-col gap-5">
            <div className="absolute left-[10px] top-3 bottom-3 w-px bg-gradient-to-b from-emerald-400/60 via-sky-400/40 to-transparent" aria-hidden />
            {caseStudyMilestones.map((milestone, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={milestone.label}
                  type="button"
                  onMouseEnter={() => handleActivate(index, true)}
                  onFocus={() => handleActivate(index, true)}
                  onClick={() => handleActivate(index, true)}
                  onKeyDown={(event) => handleMilestoneKeyDown(event, index)}
                  className={`relative overflow-hidden rounded-2xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${statusStyles[milestone.status]} ${isActive ? "shadow-[0_25px_60px_-35px_rgba(56,189,248,0.65)]" : ""} sm:p-5`}
                  aria-pressed={isActive}
                >
                  <span
                    className={`absolute left-[-22px] top-5 h-3 w-3 rounded-full border border-white/20 shadow-[0_0_0_4px_rgba(30,41,59,0.85)] ${isActive ? "bg-emerald-300" : "bg-white/40"}`}
                    aria-hidden
                  />
                  {isActive ? (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/15 via-sky-400/15 to-transparent opacity-90" aria-hidden />
                  ) : null}
                  <div className="relative flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em]">{milestone.label}</p>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200/80">{milestone.duration}</span>
                  </div>
                  <p className="relative mt-2 text-sm leading-relaxed">{milestone.detail}</p>
                  {isActive ? (
                    <div className="relative mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-sky-400 to-amber-300"
                        style={{ width: `${Math.min(stageProgress * 100, 100)}%` }}
                      />
                    </div>
                  ) : null}
                  {milestone.status === "upcoming" ? (
                    <span className="relative mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
                      Next
                    </span>
                  ) : null}
                  {milestone.status === "active" && !prefersReducedMotion ? (
                    <span className="relative mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                      In progress
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
          <div className="rounded-[28px] border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-200 sm:p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">Stage insights</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{activeMilestone.label}</h3>
            <p className="mt-2 text-sm text-slate-200/90">{activeMilestone.detail}</p>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Stage lead</dt>
                <dd className="text-sm font-semibold text-white">{activeMilestone.owner}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Duration</dt>
                <dd className="text-sm font-semibold text-white">{activeMilestone.duration}</dd>
              </div>
            </dl>
            <ul className="mt-4 space-y-2 text-sm text-slate-200/85">
              {activeMilestone.insights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => handleActivate((activeIndex + 1) % caseStudyMilestones.length, true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Advance timeline <ArrowIcon className="h-3.5 w-3.5" />
            </button>
            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-900/50 p-4 text-sm text-slate-200 sm:p-5">
              <p className="font-semibold text-white">“Commissioned in 41 days with zero downtime”</p>
              <p className="mt-2 text-sm text-slate-300">Facilities Head, Medlife Pharmaceuticals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaymentsTeaser() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_50px_120px_-40px_rgba(56,189,248,0.45)] transition duration-500 hover:border-white/20 sm:p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_60%)] opacity-80" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
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
              className="relative flex shrink-0 flex-col items-start gap-4 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 text-slate-100 shadow-[0_30px_80px_-45px_rgba(56,189,248,0.55)] transition duration-500 hover:border-white/20 sm:p-6"
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

function AnimatedStat({ label, value, suffix = "", decimals = 0, active, index }) {
  const animatedValue = useAnimatedNumber(value, { active, duration: 1200 + index * 120 });
  const displayValue = useMemo(() => formatNumber(animatedValue, decimals), [animatedValue, decimals]);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/6 p-5 shadow-[0_24px_70px_-40px_rgba(148,163,184,0.7)] backdrop-blur transition duration-500"
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: active ? 1 : 0,
        transform: active ? "translate3d(0,0,0)" : "translate3d(0,20px,0)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(16,185,129,0.25))" }}
        aria-hidden
      />
      <div className="relative flex items-start justify-between">
        <dd className="text-2xl font-semibold text-white">{`${displayValue}${suffix}`}</dd>
        <span className="mt-1 inline-flex h-2 w-6 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 opacity-70" />
      </div>
      <dt className="relative mt-2 text-sm text-slate-300/80">{label}</dt>
    </div>
  );
}

function Sparkline({ values = [], className }) {
  const gradientId = useId();
  const safeValues = values.length > 1 ? values : [0, 0];
  const max = Math.max(...safeValues);
  const min = Math.min(...safeValues);
  const range = max - min || 1;
  const points = safeValues.map((value, index) => {
    const x = (index / (safeValues.length - 1 || 1)) * 100;
    const y = ((max - value) / range) * 36 + 2;
    return `${x},${y}`;
  });
  const polylinePoints = points.join(" ");
  const areaPoints = `${polylinePoints} 100,40 0,40`;
  const [lastX, lastY] = points[points.length - 1]?.split(",").map(Number) ?? [100, 20];

  return (
    <svg viewBox="0 0 100 40" preserveAspectRatio="none" className={className} role="presentation">
      <defs>
        <linearGradient id={`${gradientId}-stroke`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(56,189,248,0.85)" />
          <stop offset="100%" stopColor="rgba(16,185,129,0.85)" />
        </linearGradient>
        <linearGradient id={`${gradientId}-fill`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(56,189,248,0.28)" />
          <stop offset="100%" stopColor="rgba(16,185,129,0.08)" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradientId}-fill)`} />
      <polyline
        points={polylinePoints}
        fill="none"
        stroke={`url(#${gradientId}-stroke)`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="2.8" fill="#22c55e" stroke="rgba(15,23,42,0.9)" strokeWidth="1.2" />
    </svg>
  );
}

function useAnimatedNumber(target, { duration = 1200, active = true } = {}) {
  const [value, setValue] = useState(0);
  const previousTargetRef = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!active) {
      previousTargetRef.current = 0;
      setValue(0);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      return;
    }

    const startValue = previousTargetRef.current;
    const delta = target - startValue;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeOutCubic(progress);
      const nextValue = startValue + delta * eased;
      setValue(nextValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        previousTargetRef.current = target;
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => frameRef.current && cancelAnimationFrame(frameRef.current);
  }, [active, duration, target]);

  return active ? value : 0;
}

function useInView(options = {}) {
  const { rootMargin = "0px", threshold = 0.1, once = false } = options;
  const [node, setNode] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [node, rootMargin, threshold, once]);

  const callbackRef = useCallback((element) => {
    setNode(element);
  }, []);

  return [callbackRef, inView];
}

function formatNumber(value, decimals = 0) {
  const numeric = Number.isFinite(value) ? value : 0;
  return numeric.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function formatPercent(value, decimals = 0) {
  return `${formatNumber(value * 100, decimals)}%`;
}

function formatDelta(value, decimals = 0, suffix = "") {
  const sign = value >= 0 ? "+" : "−";
  return `${sign}${formatNumber(Math.abs(value), decimals)}${suffix}`;
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomStep(value, variance) {
  return value + (Math.random() * 2 - 1) * variance;
}

function createTrend(seed = 4.6, length = 12) {
  const trend = [];
  let current = seed;
  for (let index = 0; index < length; index += 1) {
    current = clamp(randomStep(current, 0.18), seed - 0.6, seed + 0.6);
    trend.push(Number(current.toFixed(2)));
  }
  return trend;
}

function buildInsights(planDelta, irradiance, availability, health) {
  const planPercent = Math.round(planDelta * 100);
  const irradiancePercent = Math.round(irradiance * 100);
  const availabilityPercent = Math.round(availability * 100);
  const healthPercent = Math.round(health * 100);

  const planMessage =
    planPercent >= 0
      ? `Yield running ${planPercent}% ahead of plan`
      : `Yield ${Math.abs(planPercent)}% below plan — recovery sweep scheduled`;
  const irradianceMessage =
    irradiancePercent >= 90
      ? `Irradiance steady at ${irradiancePercent}% — modules in the sweet spot`
      : `Irradiance at ${irradiancePercent}% — shading sweep queued`;
  const reliabilityMessage =
    availabilityPercent >= 99
      ? `Availability ${availabilityPercent}% • health index ${healthPercent}%`
      : `Availability ${availabilityPercent}% • health index ${healthPercent}% — crew mobilised`;

  return [planMessage, irradianceMessage, reliabilityMessage];
}

function produceLiveSnapshot(previous) {
  const generation = Number(clamp(randomStep(previous.generation, 0.22), 4.2, 5.4).toFixed(2));
  const planDelta = Number(clamp(randomStep(previous.planDelta, 0.05), -0.12, 0.18).toFixed(3));
  const irradiance = Number(clamp(randomStep(previous.irradiance, 0.02), 0.86, 0.97).toFixed(3));
  const availability = Number(clamp(randomStep(previous.availability, 0.008), 0.97, 1).toFixed(3));
  const health = Number(clamp(randomStep(previous.health, 0.012), 0.94, 0.99).toFixed(3));
  const carbon = Number(clamp(randomStep(previous.carbon, 0.22), 3.0, 4.8).toFixed(2));
  const trend = [...previous.trend.slice(-11), generation];

  return {
    generation,
    planDelta,
    irradiance,
    availability,
    health,
    carbon,
    trend,
    insights: buildInsights(planDelta, irradiance, availability, health),
  };
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
