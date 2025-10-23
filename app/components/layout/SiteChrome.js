"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solar Plans", href: "/solutions" },
  { label: "Savings Tool", href: "/calculator" },
  { label: "Our Work", href: "/projects" },
  { label: "Support", href: "/contact" },
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
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/75 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/30 ring-1 ring-white/60">
            <Image src="/logo.png" alt="Bharath Solar EPC" fill className="object-contain p-1.5" sizes="44px" priority />
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">Bharath Solar</p>
            <p className="text-xs text-white/60">Bright power made simple</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="tel:+918977310017"
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#147B3E]/30 text-xs text-[#147B3E]">📞</span>
            +91 89773 10017
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#147B3E] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#147B3E]/40 transition hover:bg-[#126736]"
          >
            Let&apos;s talk
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
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
        <div className="border-t border-white/5 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
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
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#147B3E]/30 text-sm text-[#147B3E]">📞</span>
              +91 89773 10017
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full justify-center rounded-full bg-[#147B3E] px-4 py-2 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Let&apos;s talk
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
