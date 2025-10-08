export const metadata = { title: "DCR vs Non-DCR — Bharath Solar EPC" };

export default function DCR() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14 bg-white text-black text-lg">
      <h1 className="text-4xl font-extrabold">DCR vs Non-DCR Modules</h1>

      <p className="mt-3 text-zinc-700">
        <b>DCR (Domestic Content Requirement)</b> modules are made in India to meet certain government
        program requirements. <b>Non-DCR</b> modules may be imported or use imported cells.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-200 bg-white p-7">
          <h3 className="text-2xl font-semibold">DCR</h3>
          <ul className="mt-2 list-disc pl-5 text-zinc-800">
            <li>Eligible for specific government schemes/tenders</li>
            <li>Supports Make-in-India ecosystem</li>
            <li>Availability/wattages can be limited</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-7">
          <h3 className="text-2xl font-semibold">Non-DCR</h3>
          <ul className="mt-2 list-disc pl-5 text-zinc-800">
            <li>Wider options (TOPCon/HJT/bifacial etc.) and wattages</li>
            <li>Often lower cost per Wp</li>
            <li>May not qualify for DCR-mandated programs</li>
          </ul>
        </div>
      </div>

      <p className="mt-6 text-zinc-700">
        We’ll recommend DCR or Non-DCR based on eligibility, budget, and performance goals.
      </p>
    </main>
  );
}
