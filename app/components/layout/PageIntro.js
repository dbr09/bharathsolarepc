export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="relative z-10 overflow-hidden px-6 pb-16 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-4 top-6 h-[480px] rounded-[52px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_rgba(15,23,42,0))] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-10 h-40 bg-gradient-to-r from-emerald-400/5 via-transparent to-sky-400/10 blur-2xl" aria-hidden />
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/90 shadow-[0_18px_40px_-30px_rgba(56,189,248,0.8)]">
            {eyebrow}
          </p>
        ) : null}
        <div className="mt-6 max-w-4xl space-y-7">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-emerald-200 via-white to-amber-200 bg-clip-text text-transparent drop-shadow-[0_16px_40px_rgba(34,197,94,0.15)]">
              {title}
            </span>
          </h1>
          {description ? (
            <p className="text-lg leading-relaxed text-slate-200/90 sm:text-xl">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-12 grid gap-4 text-[0.7rem] uppercase tracking-[0.4em] text-slate-400 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center shadow-[0_18px_45px_-35px_rgba(59,130,246,0.8)]">
            Precision engineering
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center shadow-[0_18px_45px_-35px_rgba(34,197,94,0.8)]">
            Obsessive detailing
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center shadow-[0_18px_45px_-35px_rgba(251,191,36,0.6)]">
            Human-first experience
          </div>
        </div>
      </div>
    </section>
  );
}
