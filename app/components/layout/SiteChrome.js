"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
      <div className="backdrop-orb absolute left-[-8%] top-[12%] h-[420px] w-[420px] blur-[70px] opacity-90" />
      <div className="backdrop-orb absolute right-[-12%] top-[-16%] h-[540px] w-[540px] blur-[90px] opacity-70" data-variant="emerald" />
      <div className="backdrop-orb absolute bottom-[-24%] left-[24%] h-[580px] w-[580px] blur-[100px] opacity-70" data-variant="amber" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.65),_transparent_65%)]" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent" />
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollable = document.body.scrollHeight - window.innerHeight;
      const ratio = maxScrollable > 0 ? Math.min(window.scrollY / maxScrollable, 1) : 0;
      setScrolled(window.scrollY > 24);
      setProgress(ratio);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`group sticky top-0 z-40 border-b transition-all duration-500 ${
        scrolled ? "border-white/10 bg-slate-950/80 shadow-[0_18px_60px_-40px_rgba(15,118,110,0.75)] backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/30 opacity-90 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-slate-200">
        <Link href="/" className="relative flex items-center gap-3">
          <span className="glow-border relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white/95 shadow-[0_25px_50px_-12px_rgba(15,118,110,0.45)] ring-1 ring-white/30">
            <Image src="/logo.png" alt="Bharath Solar EPC" fill className="object-contain p-1" sizes="48px" priority />
          </span>
          <div className="hidden sm:block">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-300">Bharath Solar EPC</p>
            <p className="mt-1 hidden text-xs text-slate-500 sm:block">Premier EPC partner for industrial & residential solar</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative inline-flex items-center rounded-full px-3 py-2 text-sm transition ${
                  isActive ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full bg-white/10 opacity-0 blur-sm transition group-hover:opacity-60 ${
                    isActive ? "opacity-80" : ""
                  }`}
                />
                <span className={`absolute inset-0 rounded-full border border-white/5 transition ${isActive ? "border-white/40" : "group-hover:border-white/10"}`} />
                <span className="relative z-10 font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+918977310017"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <PhoneIcon className="h-4 w-4" /> +91 89773 10017
          </a>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-18px_rgba(16,185,129,0.7)] transition hover:scale-[1.03] hover:shadow-[0_25px_60px_-24px_rgba(16,185,129,0.8)]"
          >
            <span className="relative z-10">Talk to an expert</span>
            <span className="relative z-10 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <ArrowIcon className="h-3 w-3" />
            </span>
            <span className="absolute inset-0 translate-x-[-120%] bg-white/25 transition duration-500 group-hover:translate-x-[120%]" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-100 transition hover:border-white/20 hover:bg-white/10 md:hidden"
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
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 text-slate-100">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-xl border border-white/5 px-4 py-3 text-base font-medium transition hover:border-white/20 hover:bg-white/5 ${
                    isActive ? "bg-white/5 text-white" : "text-slate-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="tel:+918977310017"
              className="inline-flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              <PhoneIcon className="h-4 w-4" /> +91 89773 10017
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full justify-center rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-18px_rgba(16,185,129,0.7)]"
              onClick={() => setOpen(false)}
            >
              Talk to an expert
            </Link>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 h-[1.5px] w-full overflow-hidden" aria-hidden>
        <span
          className="block h-full origin-left scale-x-0 bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400 transition-transform duration-500"
          style={{ transform: `scaleX(${Math.max(progress, 0)})` }}
        />
      </div>
    </header>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-slate-950/70 py-12 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 text-sm text-slate-400 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/80">Bharath Solar EPC</p>
          <p className="text-2xl font-semibold text-white">Designing experiences that make solar feel inevitable.</p>
          <p>Dodlapati Bharath Reddy • Hyderabad, Telangana • India</p>
          <a href="tel:+918977310017" className="inline-flex items-center gap-2 text-emerald-300 transition hover:text-emerald-200">
            <PhoneIcon className="h-4 w-4" /> +91 89773 10017
          </a>
        </div>
        <div className="grid flex-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">Navigate</p>
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">Services</p>
            <div className="flex flex-col gap-2">
              <span>Turnkey EPC delivery</span>
              <span>Operations & maintenance</span>
              <span>Energy analytics & monitoring</span>
              <span>Financing & subsidies</span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">Connect</p>
            <div className="flex flex-col gap-2 text-slate-300">
              <Link href="mailto:hello@bharathsolarepc.com" className="transition hover:text-white">
                hello@bharathsolarepc.com
              </Link>
              <span>Mon – Sat • 9:30am – 7:30pm IST</span>
              <Link href="https://maps.google.com/?q=Hyderabad,+Telangana" target="_blank" rel="noreferrer" className="transition hover:text-white">
                Hyderabad, Telangana, India
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-start gap-3 px-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Bharath Solar EPC. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <span>Privacy</span>
          <span>Terms</span>
          <span>CSR</span>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5C4 4.12 5.12 3 6.5 3h1.02c.62 0 1.16.38 1.37.96l1.05 2.8a1.5 1.5 0 01-.54 1.73l-1.12.82a12.1 12.1 0 005.89 5.89l.82-1.12a1.5 1.5 0 011.73-.54l2.8 1.05c.58.21.96.75.96 1.37V17.5c0 1.38-1.12 2.5-2.5 2.5H17C10.37 20 4 13.63 4 7z" />
    </svg>
  );
}

function ArrowIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
