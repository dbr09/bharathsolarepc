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
  { label: "Subsidy", href: "/subsidy" },
];

export function BackgroundDecorations() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-[-320px] h-[620px] bg-[radial-gradient(circle_at_top,_rgba(20,123,62,0.18),_transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-[-360px] h-[620px] bg-[radial-gradient(circle_at_bottom,_rgba(241,105,33,0.15),_transparent_70%)]" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#147B3E]/10 blur-3xl" />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-slate-700">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-200/80 ring-1 ring-slate-200">
            <Image src="/logo.png" alt="Bharath Solar EPC" fill className="object-contain p-1" sizes="48px" priority />
          </span>
          <div className="hidden sm:block">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Bharath Solar EPC</p>
            <p className="text-lg font-semibold text-slate-900">Energy that pays for itself</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((item) => (
            <Link key={item.label} href={item.href} className="text-slate-600 transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+918977310017"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
          >
            +91 89773 10017
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-[#147B3E] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/40 transition hover:bg-[#126736]"
          >
            Talk to an expert
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-300 text-slate-700 md:hidden"
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
        <div className="border-t border-slate-200 bg-white/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 text-slate-700">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-slate-600 hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+918977310017" className="text-base font-semibold text-slate-900" onClick={() => setOpen(false)}>
              +91 89773 10017
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full justify-center rounded-full bg-[#147B3E] px-4 py-2 text-sm font-semibold text-white"
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
    <footer className="border-t border-slate-200 bg-slate-50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-900">© {year} Bharath Solar EPC</p>
          <p>Dodlapati Bharath Reddy • Hyderabad, Telangana • India</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="hover:text-slate-900">
            Projects
          </Link>
          <Link href="/panels" className="hover:text-slate-900">
            Panels
          </Link>
          <Link href="/systems" className="hover:text-slate-900">
            Systems
          </Link>
          <Link href="/payments" className="hover:text-slate-900">
            Payments
          </Link>
          <Link href="/subsidy" className="hover:text-slate-900">
            Subsidy support
          </Link>
        </div>
      </div>
    </footer>
  );
}
