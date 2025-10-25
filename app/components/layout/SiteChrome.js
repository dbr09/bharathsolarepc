"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.75),_transparent_65%)]" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent" />
      <div className="backdrop-orb absolute left-[-10%] top-[10%] h-[520px] w-[520px] blur-[80px] opacity-95" />
      <div className="backdrop-orb absolute right-[-18%] top-[-14%] h-[620px] w-[620px] blur-[100px] opacity-80" data-variant="emerald" />
      <div className="backdrop-orb absolute bottom-[-26%] left-[30%] h-[640px] w-[640px] blur-[110px] opacity-70" data-variant="amber" />
      <div className="aurora-grid" />
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(72);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const updateHeight = () => {
      if (!headerRef.current) return;
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    setHeaderHeight(headerRef.current.getBoundingClientRect().height);
  }, [open]);

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
      ref={headerRef}
      className={`group sticky top-0 z-40 border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-slate-950/80 shadow-[0_24px_65px_-40px_rgba(15,118,110,0.8)] backdrop-blur-xl"
          : "border-transparent"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/70 to-slate-950/35 opacity-95 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-0.5 overflow-hidden bg-white/10" aria-hidden>
        <span
          className="block h-full origin-left bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-300 transition-transform duration-500"
          style={{ transform: `scaleX(${Math.max(progress, 0.03)})` }}
        />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-slate-100">
        <Link href="/" className="relative flex items-center gap-3">
          <span className="glow-border relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_25px_50px_-12px_rgba(15,118,110,0.45)] ring-1 ring-white/30 sm:h-12 sm:w-12">
            <Image
              src="/logo.png"
              alt="Bharath Solar EPC"
              fill
              className="object-contain p-1"
              priority
              sizes="(min-width: 640px) 48px, 44px"
            />
          </span>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white">Bharath Solar EPC</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 md:flex">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  isActive ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full bg-white/10 opacity-0 blur-sm transition group-hover:opacity-60 ${
                    isActive ? "opacity-80" : ""
                  }`}
                />
                <span className={`absolute inset-0 rounded-full border border-white/5 transition ${isActive ? "border-white/40" : "group-hover:border-white/15"}`} />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300/80">
            <span className="hidden sm:inline-flex items-center gap-2 text-[0.85rem] normal-case tracking-normal text-white">
              <PhoneIcon className="h-4 w-4 text-emerald-200" />
              <a
                href="tel:+918977310017"
                className="font-semibold text-white drop-shadow-[0_0_8px_rgba(15,118,110,0.45)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                +91 89773 10017
              </a>
            </span>
            <span className="hidden h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.75)] sm:block" aria-hidden />
            <span className="text-[0.7rem] tracking-[0.42em] text-emerald-200/80">Talk today</span>
          </div>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_20px_45px_-18px_rgba(16,185,129,0.75)] transition hover:scale-[1.04] hover:shadow-[0_26px_70px_-24px_rgba(16,185,129,0.85)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span className="relative z-10 whitespace-nowrap">Talk to an expert</span>
            <span className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
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
        <div className="md:hidden">
          <div
            className="fixed inset-x-0 bottom-0 z-30 bg-slate-950/80 backdrop-blur-sm"
            style={{ top: headerHeight }}
            aria-hidden
          />
          <div
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-slate-950/95"
            style={{ top: headerHeight }}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-6 pb-10 text-slate-100">
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
                className="inline-flex items-center gap-3 whitespace-nowrap rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                <PhoneIcon className="h-4 w-4" /> +91 89773 10017
              </a>
              <Link
                href="/contact"
                className="inline-flex w-full justify-center rounded-full bg-gradient-to-r from-emerald-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_40px_-18px_rgba(16,185,129,0.7)]"
                onClick={() => setOpen(false)}
              >
                Talk to an expert
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full overflow-hidden" aria-hidden>
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
