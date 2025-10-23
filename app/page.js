import Image from "next/image";
import Link from "next/link";
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
    title: "Payments & finance",
    description: "See how Razorpay will simplify advance, milestone and O&M collections for you.",
    href: "/payments",
    icon: CreditCardIcon,
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

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <BackgroundDecorations />
      <SiteHeader />
      <Hero />
      <SectionDirectory />
      <PaymentsTeaser />
      <ProjectsHighlightsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-20">
      <div className="absolute inset-x-6 bottom-0 top-32 rounded-3xl border border-slate-200/60 bg-slate-100 blur-3xl" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            MNRE empanelled • Tier-1 components • EPC & O&M
          </div>
          <h1
            className="mt-6 bg-gradient-to-r from-[#FF671F] via-white to-[#046A38] bg-clip-text text-4xl font-extrabold leading-tight text-transparent drop-shadow-[0_1px_1px_rgba(15,23,42,0.25)] sm:text-5xl lg:text-6xl"
          >
            Empowering India with clean solar energy
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            We design, build and maintain high-performance solar PV plants across Telangana, Andhra Pradesh and pan-India.
            Explore the section that matters to you and get to the right answers faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/calculator"
              className="rounded-full bg-[#147B3E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/30 transition hover:bg-[#126736]"
            >
              Estimate your savings
            </Link>
            <Link
              href="/solutions"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Explore solar solutions
            </Link>
          </div>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <dd className="text-2xl font-bold text-slate-900">{stat.value}</dd>
                <dt className="text-sm text-slate-500">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 shadow-2xl shadow-slate-200/60">
            <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                <SparkIcon className="h-4 w-4" /> Real-time monitoring
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-500">24/7</span>
            </div>
            <div className="mt-6 grid gap-4 text-slate-900">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">This week</p>
                <p className="mt-1 text-3xl font-bold">4.8 MWh generated</p>
                <p className="text-sm text-emerald-600">+12% vs. weather-adjusted forecast</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-sm text-slate-500">Carbon avoided</p>
                <p className="mt-1 text-3xl font-bold">3.9 tCO₂e</p>
                <p className="text-sm text-slate-600">Equivalent to planting 176 mature trees</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-[#147B3E]/20 bg-[#147B3E]/10 p-4 text-sm text-[#0F5132]">
              <p className="font-semibold">Dedicated performance desk</p>
              <p className="opacity-80">
                Get alerts before your DISCOM bill does. Our engineers review dashboards daily and dispatch crews before yield drops.
              </p>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-24 w-24 rounded-2xl border border-slate-200 bg-white backdrop-blur-lg sm:block">
              <Image src="/globe.svg" alt="Solar network" fill className="p-6 opacity-70" />
            </div>
          </div>
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
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Navigate to the details you need</h2>
          <p className="mt-3 text-slate-600">
            Each section of the site focuses on a single outcome—solutions, pricing, process, success stories, payments or contacting our experts.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sectionCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.accent}`}>
                  <card.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{card.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                Go to section <ArrowIcon className="ml-2 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PaymentsTeaser() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F16921]">Razorpay integration</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Digital payments go live next week</h2>
              <p className="mt-3 text-slate-600">
                We are configuring a Razorpay-powered checkout so you can lock in designs, pay mobilisation advances and manage O&M renewals without paperwork or manual reconciliations.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Secure payment links for proposals and milestone invoices.
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Auto-generated receipts with GST-compliant billing references.
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1 h-4 w-4 text-[#147B3E]" /> Support for UPI, credit/debit cards and net banking from day one.
                </li>
              </ul>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <CreditCardIcon className="h-5 w-5" />
              </span>
              <p className="text-sm text-slate-600">
                Want early access for your project? Share your billing workflow and we’ll include you in the pilot run.
              </p>
              <Link
                href="/payments"
                className="inline-flex items-center gap-2 rounded-full bg-[#147B3E] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/30 transition hover:bg-[#126736]"
              >
                View payment plans
                <ArrowIcon className="h-4 w-4" />
              </Link>
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
