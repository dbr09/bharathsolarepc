import Link from "next/link";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Subsidy — Bharath Solar EPC",
  description: "Understand eligibility, paperwork and our support for MNRE/DISCOM rooftop solar subsidies.",
};

const requirements = [
  "Residential consumer category",
  "Registered vendor / installer with net-metering",
  "Approved modules and inverters as per current lists",
  "DISCOM application, inspection and commissioning",
];

const support = [
  "End-to-end paperwork and portal assistance",
  "Site survey, technical drawings and installation",
  "Net-metering coordination and subsidy disbursal follow-up",
];

export default function SubsidyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.18), transparent 55%), radial-gradient(circle at 80% 30%, rgba(16, 185, 129, 0.14), transparent 60%)",
        }}
      />
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Residential rooftop"
        title="Subsidy assistance across DISCOMs"
        description="Subsidy programmes evolve by state and national portal updates. Share your address and latest bill—we’ll confirm eligibility, timelines and documentation before your installation begins."
      />

      <section className="relative z-10 px-6 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <InfoPanel title="Typical requirements" items={requirements} />
          <InfoPanel title="How we help" items={support} />
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-[0_25px_80px_-45px_rgba(45,212,191,0.6)] backdrop-blur">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Start your subsidy-ready proposal</h2>
          <p className="mt-3 max-w-3xl text-base text-slate-300">
            Message us your address and last electricity bill; we’ll confirm current subsidy options and documentation for your DISCOM.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://wa.me/918977310017?text=Hi%20Bharath,%20please%20guide%20me%20on%20current%20rooftop%20subsidy%20for%20my%20home."
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-22px_rgba(16,185,129,0.8)] transition hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:bg-white/10"
            >
              Get a free quote
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            We stay aligned with MNRE’s National Portal updates and DISCOM circulars so your paperwork doesn’t stall.
          </p>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}

function InfoPanel({ title, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-sm shadow-emerald-500/5">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-base text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-400/80" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
