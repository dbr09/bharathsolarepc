import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = { title: "Types of Panels — Bharath Solar EPC" };

export default function Panels() {
  const types = [
    { name: "Monocrystalline (PERC / TOPCon)", pros: "High efficiency; best when roof area is limited.", cons: "Slightly higher cost." },
    { name: "Bifacial Mono", pros: "Rear-side gain on reflective roofs; higher yield.", cons: "Needs spacing and reflective surface." },
    { name: "HJT / N-type", pros: "Excellent temperature performance; premium efficiency.", cons: "Highest cost; availability varies." },
    { name: "Polycrystalline (legacy)", pros: "Lower cost (older tech).", cons: "Lower efficiency; being phased out." },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Module technology"
        title="Solar panel types we deploy across rooftops"
        description="Tier-1 mono PERC and emerging TOPCon/HJT modules deliver the best balance of efficiency, aesthetics and availability for Indian homes and industries."
      />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="site-container-wide space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {types.map((t, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-2xl font-semibold text-slate-900">{t.name}</h3>
                <p className="mt-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Pros:</span> {t.pros}
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Cons:</span> {t.cons}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base text-slate-600 text-balance sm:text-lg">
            Need help deciding? Share your roof photos and recent electricity bill and our engineers will shortlist the right technology mix for your goals.
          </p>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
