import Link from "next/link";

export const metadata = { title: "Subsidy — Bharath Solar EPC" };

export default function Subsidy() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14 bg-slate-950 text-slate-100 text-lg">
      <h1 className="text-4xl font-extrabold text-white">Residential Rooftop Subsidy</h1>

      <p className="mt-3 text-zinc-300">
        Subsidy programs change by state/DISCOM and national schemes. We’ll confirm the latest eligibility,
        portal workflow, and documents for your address.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-zinc-700 bg-slate-900/80 p-7 shadow-lg shadow-slate-950/40">
          <h3 className="text-2xl font-semibold text-white">Typical Requirements</h3>
          <ul className="mt-2 list-disc pl-5 text-zinc-200">
            <li>Residential consumer category</li>
            <li>Registered vendor/installer & net-metering</li>
            <li>Approved modules/inverters as per current lists</li>
            <li>DISCOM application and inspection</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-700 bg-slate-900/80 p-7 shadow-lg shadow-slate-950/40">
          <h3 className="text-2xl font-semibold text-white">How We Help</h3>
          <ul className="mt-2 list-disc pl-5 text-zinc-200">
            <li>End-to-end paperwork & portal assistance</li>
            <li>Site survey, technical drawing & installation</li>
            <li>Net-metering & commissioning support</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-zinc-700 bg-slate-900/80 p-7 shadow-lg shadow-slate-950/40">
        <h3 className="text-2xl font-semibold text-white">Start Your Subsidy-Ready Proposal</h3>
        <p className="text-zinc-200 mt-2">
          Message us your address and last electricity bill; we’ll confirm current subsidy options for your DISCOM.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="https://wa.me/918977310017?text=Hi%20Bharath,%20please%20guide%20me%20on%20current%20rooftop%20subsidy%20for%20my%20home."
            className="px-6 py-3 rounded-xl bg-[#147B3E] text-white font-semibold hover:opacity-90"
            target="_blank" rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
          <Link href="/#contact" className="px-6 py-3 rounded-xl border border-zinc-600 text-slate-200 hover:border-[#147B3E]">
            Get Free Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
