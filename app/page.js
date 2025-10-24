import Link from "next/link";

import DynamicHero from "./components/home/DynamicHero";
import {
  ArrowIcon,
  CalculatorIcon,
  CheckIcon,
  CreditCardIcon,
  EnvelopeIcon,
  ProcessIcon,
  QuoteIcon,
  SunIcon,
} from "./components/icons";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "./components/layout/SiteChrome";
import { ProjectsHighlightsSection } from "./components/marketing/sections";
import WhatsAppFloat from "./components/WhatsAppFloat";

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
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <BackgroundDecorations />
      <SiteHeader />
      <DynamicHero />
      <SectionDirectory />
      <PaymentsTeaser />
      <ProjectsHighlightsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

function SectionDirectory() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Quick access</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Navigate to the details you need</h2>
          <p className="mt-3 text-slate-300">
            Each section of the site focuses on a single outcome—solutions, pricing, process, success stories, payments or contacting our experts.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sectionCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/40 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-2xl"
            >
              <div>
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.accent}`}>
                  <card.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{card.description}</p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-slate-300 group-hover:text-white">
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
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#F16921]">Razorpay integration</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Digital payments go live next week</h2>
              <p className="mt-3 text-slate-300">
                We are configuring a Razorpay-powered checkout so you can lock in designs, pay mobilisation advances and manage O&M renewals without paperwork or manual reconciliations.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
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
            <div className="flex shrink-0 flex-col items-start gap-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 text-slate-200 shadow-lg shadow-slate-950/40">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                <CreditCardIcon className="h-5 w-5" />
              </span>
              <p className="text-sm text-slate-300">
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

