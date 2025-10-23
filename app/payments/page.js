import Link from "next/link";
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
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
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
    </main>
  );
}

function PaymentOverview() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/70 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#F16921]">What to expect</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Built for finance teams and project owners</h2>
            <p className="mt-4 text-slate-600">
              Every payment request includes scope summaries, GST breakdowns and links to supporting documents. Your clients get the transparency they need, and you get real-time dashboards for settlements.
            </p>
            <div className="mt-6 grid gap-4">
              {paymentHighlights.map((item) => (
                <div key={item.title} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                  <span className="mt-1 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#147B3E]/15 text-[#147B3E]">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-1 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-white p-6 text-slate-900">
            <div>
              <p className="text-sm font-semibold text-slate-600">Live ETA</p>
              <p className="mt-2 text-4xl font-bold">Week of {getNextWeekLabel()}</p>
              <p className="mt-3 text-sm text-slate-600">
                We are running compliance checks and sandbox flows now. Share your invoicing workflow to be part of the pilot batch.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#147B3E] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/40 transition hover:bg-[#126736]"
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
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Launch timeline</h2>
        <p className="mt-3 text-slate-600">Here’s how we roll out Razorpay across every engagement over the next few days.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {integrationTimeline.map((item) => (
            <div key={item.phase} className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.window}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.phase}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.detail}</p>
              </div>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-slate-600">
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
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Beyond collections</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Finance, compliance and customer support ready</h2>
          <p className="mt-3 text-slate-600">Each digital payment step is backed by documentation workflows so your auditors, procurement teams and customers stay aligned.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {supportBlocks.map((block) => (
            <div key={block.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
              <h3 className="text-lg font-semibold">{block.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-800 shadow-xl md:flex md:items-center md:justify-between md:gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">Need a payment walkthrough?</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Schedule a Razorpay demo for your finance team</h2>
            <p className="mt-3 text-slate-600">
              We’ll showcase the payment links, receipts, reconciliations and reporting so you know exactly what launches next week.
            </p>
          </div>
          <div className="mt-6 flex gap-4 md:mt-0">
            <Link
              href="tel:+918977310017"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              Call us
              <PhoneIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#147B3E] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/40 transition hover:bg-[#126736]"
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
