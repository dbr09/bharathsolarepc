"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const navLinks = [
  { label: "Overview", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Calculator", href: "/calculator" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Payments", href: "/payments" },
  { label: "Contact", href: "/contact" },
];

export function BackgroundDecorations() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="backdrop-orb absolute left-[-10%] top-[8%] h-[420px] w-[420px] blur-[60px] opacity-80" />
      <div className="backdrop-orb absolute right-[-12%] top-[-18%] h-[520px] w-[520px] blur-[80px] opacity-70" data-variant="emerald" />
      <div className="backdrop-orb absolute bottom-[-22%] left-[20%] h-[560px] w-[560px] blur-[90px] opacity-70" data-variant="amber" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.6),_transparent_65%)]" />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-slate-200">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_25px_50px_-12px_rgba(15,118,110,0.45)] ring-1 ring-white/30">
            <Image src="/logo.png" alt="Bharath Solar EPC" fill className="object-contain p-1" sizes="48px" priority />
          </span>
          <div className="hidden sm:block">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Bharath Solar EPC</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className="text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+918977310017"
            className="whitespace-nowrap rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
          >
            +91 89773 10017
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-18px_rgba(16,185,129,0.7)] transition hover:brightness-110"
          >
            Talk to an expert
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 text-slate-100">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-slate-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+918977310017"
              className="whitespace-nowrap text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              +91 89773 10017
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full justify-center rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 px-4 py-2 text-sm font-semibold text-slate-950"
              onClick={() => setOpen(false)}
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">© {year} Bharath Solar EPC</p>
          <p>Dodlapati Bharath Reddy • Hyderabad, Telangana • India</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="/panels" className="transition hover:text-white">
            Panels
          </Link>
          <Link href="/systems" className="transition hover:text-white">
            Systems
          </Link>
          <Link href="/payments" className="transition hover:text-white">
            Payments
          </Link>
          <Link href="/subsidy" className="transition hover:text-white">
            Subsidy support
          </Link>
        </div>
      </div>
    </footer>
  );
}
