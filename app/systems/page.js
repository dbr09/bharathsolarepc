import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = { title: "On-grid, Off-grid & Hybrid — Bharath Solar EPC" };

export default function Systems() {
  const items = [
    { name: "On-grid (Grid-Tie)", bestFor: "Bill reduction with net-metering; no batteries.", notes: "Shuts down during power cuts for safety (anti-islanding)." },
    { name: "Off-grid", bestFor: "Remote areas/no grid; full battery backup.", notes: "Higher upfront cost due to batteries; careful sizing needed." },
    { name: "Hybrid", bestFor: "Grid + battery backup (essential loads during outages).", notes: "Flexible; some models let you add batteries later." },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="System architectures"
        title="Choose on-grid, off-grid or hybrid configurations"
        description="Each architecture balances budget, outage coverage and regulatory requirements. We tailor designs to your load profile and power-cut patterns."
      />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="site-container-wide space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {items.map((s, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-2xl font-semibold text-slate-900">{s.name}</h3>
                <p className="mt-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Best for:</span> {s.bestFor}
                </p>
                <p className="mt-2 text-sm text-slate-600">{s.notes}</p>
              </div>
            ))}
          </div>

          <p className="text-base text-slate-600 text-balance sm:text-lg">
            Unsure which option suits your operations? We assess outage history, critical loads and ROI targets before recommending the architecture and inverter topology.
          </p>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
