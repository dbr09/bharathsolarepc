// at top of app/page.js
import dynamic from "next/dynamic";
const WhatsAppFloat = dynamic(() => import("./components/WhatsAppFloat"), { ssr: false });
// then render <WhatsAppFloat /> at end of <main>
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black text-lg">
      {/* HERO */}
      <section className="px-6 py-14 md:py-18">
        <div className="mx-auto max-w-5xl text-center">
          {/* BIG CENTER LOGO (≈4x) */}
          <div className="mx-auto w-80 h-80 relative">
            <Image
              src="/logo.png"
              alt="Bharath Solar EPC Logo"
              fill
              className="object-contain drop-shadow-sm"
              priority
            />
          </div>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Powering <span className="text-[#F16921]">India</span> with{" "}
            <span className="text-[#147B3E]">Clean Solar Energy</span>
          </h1>

          <p className="mt-5 text-zinc-700 max-w-3xl mx-auto">
            Design • Supply • Installation • O&amp;M for Residential, Commercial &amp; Industrial solar projects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="#contact" className="px-7 py-3 rounded-2xl bg-[#147B3E] text-white font-semibold hover:opacity-90">
              Get Free Quote
            </Link>
            <a
              href="https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20a%20solar%20quote."
              target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 rounded-2xl border border-zinc-300 hover:border-[#147B3E]"
            >
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-5 max-w-2xl mx-auto">
            <Stat k="MNRE" v="Compliant Docs" />
            <Stat k="Tier-1" v="Modules & Inverters" />
            <Stat k="ROI" v="Transparent Payback" />
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="px-6 py-14 bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold">Solar kW Calculator</h2>
          <p className="mt-3 text-zinc-700">
            Rule of thumb: <b>1 kW ≈ 5 units/day</b> → ~<b>150 units/month</b>. Enter your monthly consumption.
          </p>
          <div className="mt-7 grid md:grid-cols-2 gap-7">
            <Calculator />
            <div className="rounded-2xl border border-zinc-200 bg-white p-7">
              <h3 className="text-2xl font-semibold">Notes</h3>
              <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-1">
                <li>Actual output varies by location, tilt, shade & seasons.</li>
                <li>Typical roof space: ~<b>100 sq.ft per kW</b> (≈ 9.3 m²).</li>
                <li>Contact us for a detailed on-site survey and proposal.</li>
              </ul>
              <a
                href="https://wa.me/918977310017?text=Hi%20Bharath,%20please%20help%20me%20size%20a%20solar%20plant%20for%20my%20home."
                target="_blank" rel="noopener noreferrer"
                className="inline-block mt-5 px-6 py-3 rounded-xl bg-[#147B3E] text-white font-semibold hover:opacity-90"
              >
                WhatsApp Sizing Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold">Our Services</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card title="Residential Rooftop" desc="1–10 kW turnkey rooftop systems with net-metering support." />
            <Card title="Commercial & Industrial" desc="High-efficiency plants, detailed ROI & payback analysis." />
            <Card title="O&M & Monitoring" desc="AMC, cleaning, performance checks & remote monitoring." />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="px-6 py-14 bg-zinc-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold">Why Choose Us</h2>
          <ul className="mt-6 grid md:grid-cols-2 gap-4 text-zinc-800">
            <li>✅ BIS-approved components & safe installation practices</li>
            <li>✅ Discom documentation & net-metering assistance</li>
            <li>✅ Clean workmanship, timely delivery, fair pricing</li>
            <li>✅ Hyderabad-based support team</li>
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-extrabold">Get a Free Solar Proposal</h2>
            <p className="mt-3 text-zinc-700">
              Share your roof size, location & last electricity bill. We’ll send a customized savings report.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow border border-zinc-200">
            <form
              action="https://formsubmit.co/dbr@bharathsolarepc.com"
              method="POST"
              className="grid gap-3"
            >
              <input type="hidden" name="_subject" value="New Lead - Bharath Solar EPC" />
              <input type="hidden" name="_captcha" value="false" />
              <input className="input" name="name" placeholder="Your Name" required />
              <input className="input" name="phone" placeholder="Phone / WhatsApp" required />
              <input className="input" name="city" placeholder="City" />
              <textarea className="input min-h-[110px]" name="message" placeholder="Tell us about your roof / load"></textarea>
              <button className="rounded-xl bg-[#147B3E] text-white px-5 py-3 font-semibold hover:opacity-90">
                Submit
              </button>
              <p className="text-sm text-zinc-700">
                Or WhatsApp:{" "}
                <a className="underline" href="https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20a%20solar%20quote." target="_blank" rel="noopener noreferrer">
                  +91 89773 10017
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 border-t border-zinc-200">
        <div className="mx-auto max-w-6xl flex items-center justify-between text-base">
          <p>© {new Date().getFullYear()} Bharath Solar EPC. All rights reserved.</p>
          <p className="text-zinc-600">Dodlapati Bharath Reddy • Hyderabad, Telangana • India</p>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Components ---------- */

function Calculator() {
  const [unitsMonth, setUnitsMonth] = useState("");
  const [tariff, setTariff] = useState("8"); // ₹ per unit

  const unitsPerKWPerMonth = 150; // 1 kW ≈ 150 units/month
  const roofSqftPerKW = 100;

  const u = parseFloat(unitsMonth || "0");
  const t = parseFloat(tariff || "0");

  const kwNeeded = u > 0 ? u / unitsPerKWPerMonth : 0;
  const kwRounded = Math.ceil(kwNeeded * 100) / 100;
  const genUnits = kwRounded * unitsPerKWPerMonth;
  const roofSqft = kwRounded * roofSqftPerKW;
  const estSavings = Math.min(u, genUnits) * t;

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-7">
      <h3 className="text-2xl font-semibold">Estimate Your Required kW</h3>
      <div className="mt-4 grid gap-3">
        <label className="text-zinc-700">Monthly consumption (units / kWh)</label>
        <input
          className="input"
          type="number"
          min="0"
          placeholder="e.g. 450"
          value={unitsMonth}
          onChange={(e) => setUnitsMonth(e.target.value)}
        />
        <label className="text-zinc-700">Tariff per unit (₹)</label>
        <input
          className="input"
          type="number"
          min="0"
          step="0.1"
          placeholder="e.g. 8"
          value={tariff}
          onChange={(e) => setTariff(e.target.value)}
        />
      </div>

      {u > 0 && (
        <div className="mt-5 grid gap-3">
          <Info label="Required System Size" value={`${kwRounded} kW`} />
          <Info label="Est. Monthly Generation" value={`${Math.round(genUnits)} units (≈ 150 units/kW/month)`} />
          <Info label="Approx. Roof Area Needed" value={`${Math.round(roofSqft)} sq.ft`} />
          <Info label="Potential Bill Offset/Savings" value={`₹${estSavings.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`} />
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/918977310017?text=${encodeURIComponent(
                `Hi Bharath, I consume about ${u} units/month. Calculator suggests ~${kwRounded} kW. Please help with a site survey & proposal.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#147B3E] text-white font-semibold hover:opacity-90"
            >
              Send to WhatsApp
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl border border-zinc-300 hover:border-[#147B3E]">
              Get Detailed Quote
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-lg bg-zinc-50 p-3">
      <b>{label}:</b> <span className="text-zinc-700">{value}</span>
    </div>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-xl border border-zinc-200 p-5 text-center bg-white">
      <div className="text-2xl font-extrabold">{k}</div>
      <div className="text-sm text-zinc-600">{v}</div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-zinc-700">{desc}</p>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="px-6 sm:px-8 lg:px-12 pt-6 pb-10 border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              MNRE compliant • Tier-1 modules • Transparent ROI
            </div>
            <h1 className="mb-4">
              Powering <span className="text-[#F16921]">India</span> with <span className="text-[#147B3E]">Clean Solar</span>
            </h1>
            <p className="text-zinc-700 text-lg leading-7 mb-6">
              Design • Supply • Installation • O&amp;M for Residential, Commercial &amp; Industrial projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#calculator" className="rounded-xl bg-[#147B3E] px-5 py-3 text-white font-semibold hover:opacity-90">
                Estimate Your kW
              </Link>
              <a
                href="https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20a%20solar%20quote."
                target="_blank" rel="noopener noreferrer"
                className="rounded-xl border border-zinc-300 px-5 py-3 font-semibold hover:bg-zinc-50"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
            <Image
              src="/hero.jpg" alt="Solar installation"
              width={1200} height={800} priority
              className="h-[300px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Anchor sections below (use your existing content) */}
      <section id="calculator" className="px-6 sm:px-8 lg:px-12 py-10">
        <h2 className="mb-3">Solar kW Calculator</h2>
        <p className="text-zinc-700 mb-6">Rule of thumb: <b>1 kW ≈ 5 units/day</b> (~150 units/month).</p>
        {/* keep your calculator UI here */}
      </section>

      <section id="services" className="px-6 sm:px-8 lg:px-12 py-10">
        <h2 className="mb-3">Our Services</h2>
        {/* your services cards */}
      </section>

      <section id="why" className="px-6 sm:px-8 lg:px-12 py-10">
        <h2 className="mb-3">Why Choose Us</h2>
        {/* your why-us content */}
      </section>

      <section id="contact" className="px-6 sm:px-8 lg:px-12 py-10 border-t border-zinc-200">
        <h2 className="mb-3">Contact</h2>
        <p className="text-zinc-700 mb-4">Dodlapati Bharath Reddy — <a className="underline" href="mailto:dbr@bharathsolarepc.com">dbr@bharathsolarepc.com</a> • +91 89773 10017</p>
        <a
          href="https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20a%20solar%20quote."
          target="_blank" rel="noopener noreferrer"
          className="inline-block rounded-xl bg-[#147B3E] px-5 py-3 text-white font-semibold hover:opacity-90"
        >
          WhatsApp for a Free Site Visit
        </a>
      </section>
    </main>
  );
}
