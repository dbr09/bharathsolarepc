export const metadata = { title: "On-grid, Off-grid & Hybrid — Bharath Solar EPC" };

export default function Systems() {
  const items = [
    { name: "On-grid (Grid-Tie)", bestFor: "Bill reduction with net-metering; no batteries.", notes: "Shuts down during power cuts for safety (anti-islanding)." },
    { name: "Off-grid", bestFor: "Remote areas/no grid; full battery backup.", notes: "Higher upfront cost due to batteries; careful sizing needed." },
    { name: "Hybrid", bestFor: "Grid + battery backup (essential loads during outages).", notes: "Flexible; some models let you add batteries later." },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-14 bg-white text-black text-lg">
      <h1 className="text-4xl font-extrabold">System Types</h1>
      <p className="mt-3 text-zinc-700">Choose based on power-cut situation, budget, and goals.</p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((s, i) => (
          <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-7">
            <h3 className="text-2xl font-semibold">{s.name}</h3>
            <p className="mt-2 text-zinc-800"><b>Best for:</b> {s.bestFor}</p>
            <p className="mt-1 text-zinc-700">{s.notes}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
