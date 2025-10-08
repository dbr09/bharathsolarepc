"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <nav className="mt-4 space-y-1 text-base text-black">
      <Section title="Home" href="/" onClick={() => setOpen(false)} />
      <Section title="Calculator" href="/#calculator" onClick={() => setOpen(false)} />
      <Section title="Services" href="/#services" onClick={() => setOpen(false)} />
      <Section title="Why Us" href="/#why" onClick={() => setOpen(false)} />
      <Section title="Contact" href="/#contact" onClick={() => setOpen(false)} />
      <Divider />
      <Section title="Our Projects" href="/projects" onClick={() => setOpen(false)} />
      <Section title="Types of Panels" href="/panels" onClick={() => setOpen(false)} />
      <Section title="DCR vs Non-DCR" href="/dcr" onClick={() => setOpen(false)} />
      <Section title="Systems (On/Off/Hybrid)" href="/systems" onClick={() => setOpen(false)} />
      <Section title="Subsidy" href="/subsidy" onClick={() => setOpen(false)} />
      <Divider />
      <a
        className="block rounded-lg px-3 py-2 bg-[#147B3E] text-white font-semibold text-center"
        href="https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20a%20solar%20quote."
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp Us
      </a>
    </nav>
  );

  return (
    <>
      {/* Desktop / tablet sidebar (visible from md and up) */}
      <aside
        className="hidden md:flex fixed inset-y-0 left-0 w-64 overflow-y-auto
                   z-40 border-r border-zinc-200 bg-white px-4 py-6 text-black shadow-sm"
      >
        <div className="w-full">
          <Brand />
          <NavLinks />
        </div>
      </aside>

      {/* Mobile top bar with menu button */}
      <div className="md:hidden sticky top-0 z-50 bg-white border-b border-zinc-200">
        <div className="px-4 py-3 flex items-center justify-between">
          <Brand small />
          <button
            className="rounded-lg border px-3 py-1.5 text-black"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            ☰ Menu
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white text-black border-r p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <Brand />
              <button className="rounded-lg border px-3 py-1.5" onClick={() => setOpen(false)}>✕</button>
            </div>
            <NavLinks />
          </aside>
        </div>
      )}
    </>
  );
}

function Brand({ small = false }) {
  return (
    <div className="flex items-center gap-3">
      {/* optional emblem */}
      <div className={`h-8 w-8 rounded-full bg-zinc-100 border ${small ? "hidden" : ""}`} />
      <div className="leading-tight font-extrabold text-black">
        <div>BHARATH</div>
        <div>SOLAR EPC</div>
      </div>
    </div>
  );
}

function Section({ title, href, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-3 py-2 hover:bg-zinc-100 text-black"
    >
      {title}
    </Link>
  );
}

function Divider() {
  return <div className="my-3 border-t border-zinc-200" />;
}
