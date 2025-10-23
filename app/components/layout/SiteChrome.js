"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Calculator", href: "/calculator" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function BackgroundDecorations() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-x-0 top-[-320px] h-[620px] bg-[radial-gradient(circle_at_top,_rgba(20,123,62,0.45),_transparent_65%)]" />
      <div className="absolute inset-x-0 bottom-[-360px] h-[620px] bg-[radial-gradient(circle_at_bottom,_rgba(241,105,33,0.35),_transparent_70%)]" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#147B3E]/20 blur-3xl" />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-3 pb-3 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/85 px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.6)] backdrop-blur md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/30 ring-1 ring-white/60">
              <Image src="/logo.png" alt="Bharath Solar EPC" fill className="object-contain p-1" sizes="48px" priority />
            </span>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white">Bharath Solar EPC</span>
              <span className="text-xs text-white/70">Solar made simple</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1.5 text-sm font-semibold md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="tel:+918977310017"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-sm font-semibold text-white/75 transition hover:border-white/40 hover:text-white"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                ☎
              </span>
              +91 89773 10017
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F16921] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#F16921]/40 transition hover:bg-[#d45613]"
            >
              Plan my system
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
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
          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full bg-white/5 px-4 py-2 text-base font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+918977310017"
                className="rounded-full bg-white/5 px-4 py-2 text-base font-semibold text-white/90"
                onClick={() => setOpen(false)}
              >
                Call +91 89773 10017
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full justify-center rounded-full bg-[#F16921] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[#F16921]/40"
                onClick={() => setOpen(false)}
              >
                Plan my system
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">© {year} Bharath Solar EPC</p>
          <p>Dodlapati Bharath Reddy • Hyderabad, Telangana • India</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/panels" className="hover:text-white">
            Panels
          </Link>
          <Link href="/systems" className="hover:text-white">
            Systems
          </Link>
          <Link href="/payments" className="hover:text-white">
            Payments
          </Link>
          <Link href="/subsidy" className="hover:text-white">
            Subsidy support
          </Link>
        </div>
      </div>
    </footer>
  );
}
