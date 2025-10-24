export const metadata = { title: "DCR vs Non-DCR — Bharath Solar EPC" };

export default function DCR() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14 bg-slate-950 text-slate-100 text-lg">
      <h1 className="text-4xl font-extrabold text-white">DCR vs Non-DCR Modules</h1>

      <p className="mt-3 text-zinc-300">
        <b>DCR (Domestic Content Requirement)</b> modules are made in India to meet certain government
        program requirements. <b>Non-DCR</b> modules may be imported or use imported cells.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-700 bg-slate-900/80 p-7 shadow-lg shadow-slate-950/40">
          <h3 className="text-2xl font-semibold text-white">DCR</h3>
          <ul className="mt-2 list-disc pl-5 text-zinc-200">
            <li>Eligible for specific government schemes/tenders</li>
            <li>Supports Make-in-India ecosystem</li>
            <li>Availability/wattages can be limited</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-700 bg-slate-900/80 p-7 shadow-lg shadow-slate-950/40">
          <h3 className="text-2xl font-semibold text-white">Non-DCR</h3>
          <ul className="mt-2 list-disc pl-5 text-zinc-200">
            <li>Wider options (TOPCon/HJT/bifacial etc.) and wattages</li>
            <li>Often lower cost per Wp</li>
            <li>May not qualify for DCR-mandated programs</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-zinc-200">
        We’ll recommend DCR or Non-DCR based on eligibility, budget, and performance goals.
      </p>
    </main>
  );
}
