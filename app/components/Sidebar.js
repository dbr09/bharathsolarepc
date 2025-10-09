"use client";

import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const NavLinks = ({ onClick }) => (
    <nav className="mt-5 space-y-1 text-[15px]">
      <Item href="/" label="Home" onClick={onClick} />
      <Item href="/#calculator" label="Calculator" onClick={onClick} />
      <Item href="/#services" label="Services" onClick={onClick} />
      <Item href="/#why" label="Why Us" onClick={onClick} />
      <Item href="/projects" label="Our Projects" onClick={onClick} />
      <Item href="/panels" label="Types of Panels" onClick={onClick} />
      <Item href="/dcr" label="DCR vs Non-DCR" onClick={onClick} />
      <Item href="/systems" label="Systems (On/Off/Hybrid)" onClick={onClick} />
      <Item href="/subsidy" label="Subsidy" onClick={onClick} />
      <div className="pt-3">
        <a
          href="https://wa.me/918977310017?text=Hi%20Bharath,%20I%27d%20like%20a%20solar%20quote."
          target="_blank" rel="noopener noreferrer"
          className="block w-full rounded-xl bg-[#147B3E] px-4 py-2.5 text-center font-semibold text-white hover:opacity-90"
        >
          WhatsApp Us
        </a>
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop / tablet */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 z-40 w-64 border-r border-zinc-200 bg-white px-5 py-6">
        <div className="w-full">
          <Brand />
          <NavLinks />
          <div className="mt-6 text-xs text-zinc-500">
            Dodlapati Bharath Reddy<br />
            <a href="mailto:dbr@bharathsolarepc.com" className="underline">dbr@bharathsolarepc.com</a><br />
            +91 89773 10017
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-50 bg-white border-b border-zinc-200">
        <div className="px-4 py-3 flex items-center justify-between">
          <Brand small />
          <button
            className="rounded-lg border px-3 py-1.5"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >☰ Menu</button>
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
            <NavLinks onClick={() => setOpen(false)} />
          </aside>
        </div>
      )}
    </>
  );
}

function Brand({ small = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-9 w-9 rounded-full bg-zinc-100 border ${small ? "hidden" : ""}`} />
      <div className="leading-tight font-extrabold text-[18px]">
        <div>BHARATH</div>
        <div className="text-zinc-600">SOLAR EPC</div>
      </div>
    </div>
  );
}

function Item({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-lg px-3 py-2 hover:bg-zinc-100"
    >
      {label}
    </Link>
  );
}
