"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { CreditCardIcon, SparkIcon } from "../icons";

const heroPhrases = [
  "clean solar energy",
  "bankable performance",
  "real-time visibility",
  "delighted EPC clients",
];

const heroStats = [
  { label: "Rooftop systems delivered", value: 320, suffix: "+", duration: 1800 },
  { label: "Commercial & industrial MWp", value: 18.6, precision: 1, suffix: " MWp", duration: 2000 },
  { label: "Average client payback", value: 3.2, precision: 1, suffix: " yrs", duration: 2200 },
];

const heroMomentum = [
  { label: "Proposals issued this week", value: "17" },
  { label: "Plants under active O&M", value: "54" },
  { label: "Average daily uptime", value: "99.2%" },
  { label: "Energy simulated for bids", value: "8.4 MWp" },
];

const energySnapshots = [
  {
    timestamp: "08:40 IST",
    site: "120 kW hospital • Hyderabad",
    yield: "412 kWh today",
    delta: "+11% vs plan",
    carbon: "0.34 tCO₂e avoided",
    uptime: "99.8% uptime",
    focus: "String 3B recovered after inverter reboot at 07:20.",
    action: "Irradiance improving after early fog — cleaning crew rescheduled for tomorrow morning.",
  },
  {
    timestamp: "11:05 IST",
    site: "600 kW factory • Bommalaramaram",
    yield: "1.62 MWh today",
    delta: "+8% vs plan",
    carbon: "1.31 tCO₂e avoided",
    uptime: "99.5% uptime",
    focus: "Performance desk flagged a 2% soiling drift on String 5C.",
    action: "Robotic cleaning cycle triggered at 14:00 to maintain weekend throughput.",
  },
  {
    timestamp: "14:20 IST",
    site: "35 kW villa cluster • Nallagandla",
    yield: "126 kWh today",
    delta: "+6% vs plan",
    carbon: "0.10 tCO₂e avoided",
    uptime: "99.9% uptime",
    focus: "Battery SOC peaked at 93% with surplus exported to grid.",
    action: "Homeowner notified via WhatsApp to shift EV charging to 16:30 for maximum solar usage.",
  },
];

const marqueeItems = [...heroMomentum, ...heroMomentum];

export default function DynamicHero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % energySnapshots.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activePhrase = heroPhrases[phraseIndex];
  const nextPhrase = heroPhrases[(phraseIndex + 1) % heroPhrases.length];
  const activeSnapshot = energySnapshots[tickerIndex];
  const nextSnapshot = energySnapshots[(tickerIndex + 1) % energySnapshots.length];

  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-20">
      <div
        aria-hidden
        className="absolute inset-x-0 top-12 mx-auto h-[560px] max-w-5xl rounded-[48px] border border-emerald-500/10 bg-emerald-500/5 blur-3xl"
      />
      <div aria-hidden className="hero-dynamic-orb" />
      <div aria-hidden className="hero-dynamic-orb hero-dynamic-orb--secondary" />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
            MNRE empanelled • Tier-1 components • EPC & O&M
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white drop-shadow-[0_1px_1px_rgba(2,6,23,0.65)] sm:text-5xl lg:text-6xl">
            Engineering solar assets for
            <span key={activePhrase} className="block dynamic-phrase animate-fade">
              {activePhrase}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            We blend design-led engineering with proactive monitoring so every kilowatt keeps compounding your savings. Tap into
            live performance data and instantly route to the section you need most.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/calculator"
              className="rounded-full bg-[#147B3E] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/30 transition hover:bg-[#126736]"
            >
              Estimate your savings
            </Link>
            <Link
              href="/solutions"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              Explore solar solutions
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Operations desk pushes the next live update at <span className="font-semibold text-slate-200">{nextSnapshot.timestamp}</span>.
            Stay ahead of every milestone.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Upcoming focus: <span className="font-semibold text-slate-200">{nextPhrase}</span>.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <HeroStatCard key={stat.label} {...stat} />
            ))}
          </dl>

          <div className="mt-10 overflow-hidden rounded-full border border-slate-800/70 bg-slate-900/80">
            <div className="motion-marquee flex min-w-max items-center gap-8 px-6 py-3 text-[0.7rem] uppercase tracking-[0.32em] text-slate-300">
              {marqueeItems.map((item, index) => (
                <span key={`${item.label}-${index}`} className="flex items-center gap-2 whitespace-nowrap">
                  <SparkIcon className="h-3.5 w-3.5 text-[#F16921]" />
                  {item.label}
                  <span className="font-semibold text-white">{item.value}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/60">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <SparkIcon className="h-4 w-4 text-emerald-300" /> Live operations desk
              </span>
              <span className="rounded-full border border-slate-700/60 bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {activeSnapshot.timestamp}
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Active site</p>
              <p className="mt-2 text-lg font-semibold text-white">{activeSnapshot.site}</p>
              <p className="mt-2 text-sm text-emerald-300">{activeSnapshot.uptime}</p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Today&apos;s yield</p>
                <p className="mt-2 text-2xl font-semibold text-white">{activeSnapshot.yield}</p>
                <p className="text-sm text-emerald-300">{activeSnapshot.delta}</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">CO₂ offset</p>
                <p className="mt-2 text-2xl font-semibold text-white">{activeSnapshot.carbon}</p>
                <p className="text-sm text-slate-300">Performance desk certified</p>
              </div>
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-100 sm:col-span-2">
                <p className="font-semibold text-white">Operations note</p>
                <p className="opacity-90">{activeSnapshot.action}</p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-200">
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
                <CreditCardIcon className="h-4 w-4 text-violet-300" /> Focus alert
              </p>
              <p className="mt-2 text-sm text-slate-200">{activeSnapshot.focus}</p>
            </div>

            <div className="mt-6">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/60">
                <div key={tickerIndex} className="progress-bar h-full w-full" />
              </div>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">
                Next update queues at {nextSnapshot.timestamp}
              </p>
            </div>

            <div className="pointer-events-none absolute -right-10 top-10 hidden h-32 w-32 animate-float-slow rounded-3xl border border-slate-800/60 bg-slate-900/60 backdrop-blur sm:block">
              <Image src="/globe.svg" alt="Solar network" fill className="p-6 opacity-70" />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function HeroStatCard({ label, value, suffix = "", precision = 0, duration = 1600 }) {
  const animatedValue = useAnimatedNumber(value, duration);
  const formatted = useMemo(
    () => `${formatNumber(animatedValue, precision)}${suffix}`,
    [animatedValue, precision, suffix],
  );

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-slate-950/40">
      <dd className="text-2xl font-bold text-white">{formatted}</dd>
      <dt className="text-sm text-slate-400">{label}</dt>
    </div>
  );
}

function useAnimatedNumber(target, duration) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame;
    let start;

    const step = (timestamp) => {
      if (!start) {
        start = timestamp;
      }
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [target, duration]);

  return value;
}

function formatNumber(input, precision) {
  return Number(input).toLocaleString("en-IN", {
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
  });
}
