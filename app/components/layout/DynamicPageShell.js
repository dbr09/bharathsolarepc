"use client";

import { useEffect, useMemo, useState } from "react";

const accentPalette = {
  emerald: {
    glow: "rgba(16, 185, 129, 0.28)",
    halo: "rgba(5, 150, 105, 0.55)",
  },
  cyan: {
    glow: "rgba(56, 189, 248, 0.26)",
    halo: "rgba(59, 130, 246, 0.5)",
  },
  amber: {
    glow: "rgba(251, 191, 36, 0.28)",
    halo: "rgba(245, 158, 11, 0.58)",
  },
  violet: {
    glow: "rgba(167, 139, 250, 0.26)",
    halo: "rgba(129, 140, 248, 0.52)",
  },
};

export default function DynamicPageShell({ children, accent = "emerald" }) {
  const palette = useMemo(() => accentPalette[accent] ?? accentPalette.emerald, [accent]);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.3 });
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handlePointer = (event) => {
      const nextX = event.clientX / window.innerWidth;
      const nextY = event.clientY / window.innerHeight;
      setPointer({ x: nextX, y: nextY });
    };

    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const ratio = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
      setScroll(ratio);
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const accentX = 18 + pointer.x * 64;
  const accentY = 22 + pointer.y * 46;
  const gradient = `radial-gradient(circle at ${accentX}% ${accentY}%, ${palette.glow}, transparent 62%)`;
  const halo = `radial-gradient(circle at ${36 + scroll * 40}% ${68 - scroll * 24}%, ${palette.halo}, transparent 74%)`;
  const base = "radial-gradient(circle at 20% 15%, rgba(148, 163, 184, 0.08), transparent 60%), radial-gradient(circle at 80% 10%, rgba(14, 165, 233, 0.12), transparent 50%), linear-gradient(140deg, rgba(2, 6, 23, 0.9), rgba(15, 23, 42, 0.85))";

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-30" style={{ background: base }} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 transition duration-700"
        style={{ background: gradient }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 opacity-70 transition duration-700"
        style={{ background: halo }}
      />
      <div aria-hidden className="noise-overlay" />
      <div className="relative z-10">{children}</div>
    </main>
  );
}
