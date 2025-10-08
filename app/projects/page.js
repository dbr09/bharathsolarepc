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
    <main className="mx-auto max-w-7xl px-6 py-14 bg-white text-black text-lg">
      <h1 className="text-4xl font-extrabold">Our Projects</h1>
      <p className="mt-3 text-zinc-700">Selected references. Photos available on request.</p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-200">
        <table className="min-w-full text-base">
          <thead className="bg-zinc-50">
            <tr className="text-left">
              <th className="p-4 font-semibold">#</th>
              <th className="p-4 font-semibold">Name of Customer</th>
              <th className="p-4 font-semibold">Solar Plant Details</th>
              <th className="p-4 font-semibold">Year</th>
            </tr>
          </thead>
          <tbody>
            {DATA.map((r, i) => (
              <tr key={i} className="border-t odd:bg-white even:bg-zinc-50">
                <td className="p-4">{i + 1}</td>
                <td className="p-4">{r.name}</td>
                <td className="p-4">{r.size}</td>
                <td className="p-4">{r.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-zinc-800 font-medium">
        In collaboration with <span className="font-bold">SUVAHIK</span>.
      </p>
    </main>
  );
}
