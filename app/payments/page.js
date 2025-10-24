import Link from "next/link";
import DynamicPageShell from "../components/layout/DynamicPageShell";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import { ContactSection } from "../components/marketing/sections";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Digital Payments — Bharath Solar EPC",
  description: "Preview the Razorpay payment experience launching next week for Bharath Solar EPC clients.",
};

const paymentHighlights = [
  {
    title: "Advance & milestone links",
    description: "Issue secure Razorpay links for mobilisation advances, delivery milestones and O&M renewals with a single click.",
  },
  {
    title: "Automated paperwork",
    description: "Receipts carry GST invoice references and customer IDs so your finance records stay in sync without spreadsheets.",
  },
  {
    title: "Multiple payment modes",
    description: "Accept UPI, cards, net banking and NEFT/RTGS with automated reminders for pending dues.",
  },
];

const integrationTimeline = [
  {
    phase: "Gateway configuration",
    detail: "Complete Razorpay KYC, webhook setup and test transactions.",
    window: "Days 1–2",
  },
  {
    phase: "Pilot collections",
    detail: "Send early access links to existing clients and reconcile settlements via dashboards.",
    window: "Days 3–4",
  },
  {
    phase: "Full launch",
    detail: "Open the payment page for all new EPC engagements with automated receipt emails.",
    window: "Day 5",
  },
];

const supportBlocks = [
  {
    title: "Smart reminders",
    description: "Automated WhatsApp and email nudges keep milestone payments on schedule without manual follow-up.",
  },
  {
    title: "Escrow-ready",
    description: "For utility projects, hold payments in escrow accounts and release them once inspections close.",
  },
  {
    title: "Exportable ledgers",
    description: "Download Razorpay settlement reports aligned to your accounting period in CSV or Tally formats.",
  },
];

export default function PaymentsPage() {
  return (
    <DynamicPageShell accent="emerald">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Payments"
        title="Razorpay-powered collections are almost here"
        description="We are finalising a digital payment experience so you can approve EPC proposals, pay advances and renew O&M contracts online without paperwork."
      />
      <PaymentOverview />
      <IntegrationTimeline />
      <SupportHighlights />
      <ContactCta />
      <ContactSection />
      <SiteFooter />
      <WhatsAppFloat />
    </DynamicPageShell>
  );
}

function PaymentOverview() {
  return (
    <section className="relative z-10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_-45px_rgba(16,185,129,0.8)] backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">What to expect</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Built for finance teams and project owners</h2>
            <p className="mt-4 text-base text-slate-300">
              Every payment request includes scope summaries, GST breakdowns and links to supporting documents. Your clients get the transparency they need, and you get real-time dashboards for settlements.
            </p>
            <div className="mt-6 grid gap-4">
              {paymentHighlights.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-base text-slate-200"
                >
                  <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/10 p-6 text-slate-50">
            <div>
              <p className="text-sm font-semibold text-emerald-200">Live ETA</p>
              <p className="mt-2 text-4xl font-bold text-white">Week of {getNextWeekLabel()}</p>
              <p className="mt-3 text-sm text-emerald-100/80">
                We are running compliance checks and sandbox flows now. Share your invoicing workflow to be part of the pilot batch.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-22px_rgba(16,185,129,0.8)] transition hover:scale-105"
            >
              Join the pilot
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegrationTimeline() {
  return (
    <section className="relative z-10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Launch timeline</h2>
        <p className="mt-3 max-w-2xl text-base text-slate-300">
          Here’s how we roll out Razorpay across every engagement over the next few days.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {integrationTimeline.map((item) => (
            <div
              key={item.phase}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-emerald-500/5"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">{item.window}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.phase}</h3>
                <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-200">
                Razorpay sandbox → production
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SupportHighlights() {
  return (
    <section className="relative z-10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Beyond collections</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Finance, compliance and customer support ready</h2>
          <p className="mt-3 text-base text-slate-300">
            Each digital payment step is backed by documentation workflows so your auditors, procurement teams and customers stay aligned.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {supportBlocks.map((block) => (
            <div
              key={block.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200 shadow-sm shadow-emerald-500/5"
            >
              <h3 className="text-lg font-semibold text-white">{block.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="relative z-10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-[0_25px_80px_-45px_rgba(45,212,191,0.6)] backdrop-blur md:flex md:items-center md:justify-between md:gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Need a payment walkthrough?</p>
            <h2 className="mt-4 text-3xl font-bold text-white">Schedule a Razorpay demo for your finance team</h2>
            <p className="mt-3 text-base text-slate-300">
              We’ll showcase the payment links, receipts, reconciliations and reporting so you know exactly what launches next week.
            </p>
          </div>
          <div className="mt-6 flex gap-4 md:mt-0">
            <Link
              href="tel:+918977310017"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/10"
            >
              Call us
              <PhoneIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-300 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-22px_rgba(16,185,129,0.8)] transition hover:scale-105"
            >
              Request a demo
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function getNextWeekLabel() {
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  return nextWeek.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
}

function CheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 12.5l3.5 3.5 9-9" />
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

function PhoneIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.2 3h3.4L10.8 7.5 8.5 9.2c1.1 2.1 2.9 3.9 5 5l1.7-2.3L19 15.4v3.4c0 .9-.7 1.6-1.6 1.6A14.4 14.4 0 0 1 3 5.2C3 4.3 3.7 3.6 4.6 3.6H5.2z" />
    </svg>
  );
}
