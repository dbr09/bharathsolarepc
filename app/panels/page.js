export const metadata = { title: "Types of Panels — Bharath Solar EPC" };

export default function Panels() {
  const types = [
    { name: "Monocrystalline (PERC / TOPCon)", pros: "High efficiency; best when roof area is limited.", cons: "Slightly higher cost." },
    { name: "Bifacial Mono", pros: "Rear-side gain on reflective roofs; higher yield.", cons: "Needs spacing and reflective surface." },
    { name: "HJT / N-type", pros: "Excellent temperature performance; premium efficiency.", cons: "Highest cost; availability varies." },
    { name: "Polycrystalline (legacy)", pros: "Lower cost (older tech).", cons: "Lower efficiency; being phased out." },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-14 bg-white text-black text-lg">
      <h1 className="text-4xl font-extrabold">Types of Solar Panels</h1>
      <p className="mt-3 text-zinc-700">
        We usually recommend Tier-1 mono PERC / TOPCon modules for Indian rooftops based on budget and roof space.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {types.map((t, i) => (
          <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-7">
            <h3 className="text-2xl font-semibold">{t.name}</h3>
            <p className="mt-2 text-zinc-800"><b>Pros:</b> {t.pros}</p>
            <p className="mt-1 text-zinc-800"><b>Cons:</b> {t.cons}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-zinc-800 font-medium">
        In collaboration with <span className="font-bold">SUVAHIK</span>.
      </p>
    </main>
  );
}
