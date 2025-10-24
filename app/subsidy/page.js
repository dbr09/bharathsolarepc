import Link from "next/link";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = { title: "Subsidy — Bharath Solar EPC" };

export default function Subsidy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Residential rooftop"
        title="Subsidy support from application to commissioning"
        description="Eligibility, portal workflows and documentation change by DISCOM. We stay on top of every update so your project qualifies without delays."
      />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="site-container-wide space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-2xl font-semibold text-slate-900">Typical requirements</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Residential consumer category with sanctioned load aligned to scheme.</li>
                <li>Registered vendor/installer, net-metering and DISCOM inspections.</li>
                <li>Modules and inverters approved under current MNRE/DISCOM lists.</li>
                <li>Accurate documentation uploads and completion photographs.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-2xl font-semibold text-slate-900">How we help</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>End-to-end paperwork, portal management and inspection scheduling.</li>
                <li>Site survey, technical drawings, installation and commissioning.</li>
                <li>Net-metering coordination, payment milestones and O&M onboarding.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="text-2xl font-semibold text-slate-900">Start your subsidy-ready proposal</h3>
            <p className="mt-2 text-sm text-slate-600 text-balance sm:text-base">
              Message us your address and latest electricity bill. We will confirm current subsidy availability with your DISCOM and share the checklist to get started.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/918977310017?text=Hi%20Bharath,%20please%20guide%20me%20on%20current%20rooftop%20subsidy%20for%20my%20home."
                className="rounded-full bg-[#147B3E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/30 transition hover:bg-[#126736]"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
              <Link href="/contact" className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900">
                Get free quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
