"use client";

import { useEffect, useMemo, useState } from "react";

const accentPalette = {
  emerald: {
    glow: "rgba(16, 185, 129, 0.2)",
    halo: "rgba(5, 150, 105, 0.5)",
  },
  cyan: {
    glow: "rgba(56, 189, 248, 0.18)",
    halo: "rgba(59, 130, 246, 0.45)",
  },
  amber: {
    glow: "rgba(251, 191, 36, 0.22)",
    halo: "rgba(245, 158, 11, 0.5)",
  },
  violet: {
    glow: "rgba(167, 139, 250, 0.2)",
    halo: "rgba(129, 140, 248, 0.45)",
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

  const accentX = 20 + pointer.x * 60;
  const accentY = 20 + pointer.y * 40;
  const gradient = `radial-gradient(circle at ${accentX}% ${accentY}%, ${palette.glow}, transparent 60%)`;
  const halo = `radial-gradient(circle at ${40 + scroll * 40}% ${70 - scroll * 20}%, ${palette.halo}, transparent 70%)`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
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
      <div className="relative z-10">{children}</div>
    </main>
  );
}
