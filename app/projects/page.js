import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = { title: "Our Projects — Bharath Solar EPC" };

const DATA = [
  { name: "Regenesis Industries Pvt Ltd, Bommalaramaram", size: "300 kW", year: "2018" },
  { name: "Regenesis Industries Pvt Ltd, Bommalaramaram", size: "600 kW", year: "2022" },
  { name: "Salvo Explosives & Chemicals Pvt Ltd, Ankireddy Palli", size: "500 kW", year: "2020" },
  { name: "Salvo Explosives & Chemicals Pvt Ltd, Ankireddy Palli", size: "50 kW",  year: "2020" },
  { name: "Ideal Industrial Explosives Ltd, Chityala", size: "250 kW", year: "2019" },
  { name: "Ideal Industrial Explosives Ltd, Chityala", size: "160 kW", year: "2022" },
  { name: "Ideal Industrial Explosives Ltd, Kothagudem", size: "60 kW",  year: "2023" },
  { name: "JV Poultry Farms", size: "100 kW", year: "2023" },
  { name: "Valigonda, Nalgonda Dist", size: "100 kW", year: "2024" },
  { name: "Nithisha Poultry Farms, Gandicheruvu", size: "100 kW", year: "2024" },
  { name: "Tulasi Hospitals, ECIL Cross Roads", size: "120 kW", year: "2018" },
  { name: "Samskruti College of Engineering, Ghatkesar", size: "70 kW", year: "2017" },
  { name: "Sri Indu Engineering College, Mangalapalli", size: "50 kW", year: "2019" },
  { name: "Radhika Multi Speciality Hospital, Balapur", size: "40 kW", year: "2020" },
  { name: "Nightingale Hospital", size: "30 kW", year: "2016" },
  { name: "Kavya Medicare, Balapur", size: "10 kW", year: "2020" },
  { name: "Hotel Ridhika Inn, Suryapet", size: "40 kW", year: "2022" },
  { name: "Darwin Ayur Pharma, Vijayawada", size: "40 kW", year: "2020" },
  { name: "Ratna Hospital, IS Sadan", size: "20 kW", year: "2017" },
  { name: "Srinivasa Junior College, IS Sadan", size: "20 kW", year: "2019" },
  { name: "Different Customers (On-grid) — 5 Nos", size: "10 kW each", year: "2016–Till Date" },
  { name: "Different Customers (Off-grid) — 80 Nos", size: "1 kW each", year: "2017–Till Date" },
  { name: "Different Customers — 134 Nos", size: "2 kW each", year: "2015–Till Date" },
  { name: "Different Customers — 58 Nos", size: "3 kW each", year: "2015–Till Date" },
  { name: "Different Customers — 26 Nos", size: "5 kW each", year: "2016–Till Date" },
];

export default function Projects() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Project references"
        title="Installations delivering dependable generation"
        description="A snapshot of commercial, industrial, institutional and residential solar assets we have engineered and maintained. Detailed photos and performance reports are available on request."
      />

      <section className="py-14 sm:py-16 md:py-20">
        <div className="site-container-wide">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <div className="hidden overflow-x-auto rounded-2xl border border-slate-200 md:block">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-slate-700">
                    <th className="px-4 py-3 font-semibold">#</th>
                    <th className="px-4 py-3 font-semibold">Name of customer</th>
                    <th className="px-4 py-3 font-semibold">Plant details</th>
                    <th className="px-4 py-3 font-semibold">Year</th>
                  </tr>
                </thead>
                <tbody>
                  {DATA.map((r, i) => (
                    <tr key={i} className="border-t border-slate-100 odd:bg-white even:bg-slate-50">
                      <td className="px-4 py-3 text-slate-600">{i + 1}</td>
                      <td className="px-4 py-3 text-slate-900">{r.name}</td>
                      <td className="px-4 py-3 text-slate-700">{r.size}</td>
                      <td className="px-4 py-3 text-slate-700">{r.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4 md:hidden">
              {DATA.map((r, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                    <span>Project {i + 1}</span>
                    <span>{r.year}</span>
                  </div>
                  <p className="mt-3 text-base font-semibold text-slate-900">{r.name}</p>
                  <p className="mt-1 text-sm text-slate-600">{r.size}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-slate-600">
              In collaboration with <span className="font-semibold text-slate-900">SUVAHIK</span>.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
