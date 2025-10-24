import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = { title: "DCR vs Non-DCR — Bharath Solar EPC" };

export default function DCR() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Module choices"
        title="DCR vs Non-DCR modules at a glance"
        description="Understand how domestically manufactured modules compare to imported options so you can align procurement with subsidy eligibility, performance and budget."
      />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="site-container-wide space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-2xl font-semibold text-slate-900">DCR</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Eligible for domestic content and select MNRE/DISCOM subsidy schemes.</li>
                <li>Supports Make-in-India manufacturing ecosystems and local jobs.</li>
                <li>Availability and higher wattage options can be limited compared to imports.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="text-2xl font-semibold text-slate-900">Non-DCR</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Broader portfolio including TOPCon, HJT, bifacial and high-wattage modules.</li>
                <li>Typically offers sharper ₹/Wp pricing for commercial and industrial plants.</li>
                <li>May not qualify for DCR-mandated tenders or subsidy-linked programmes.</li>
              </ul>
            </div>
          </div>

          <p className="text-base text-slate-600 text-balance sm:text-lg">
            Our proposals recommend DCR or Non-DCR modules based on the eligibility of your project, payback targets and desired technology stack.
          </p>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
