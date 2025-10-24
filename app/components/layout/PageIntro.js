export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="relative z-10 overflow-hidden px-6 pb-16 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-x-6 top-8 h-[460px] rounded-[48px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_rgba(15,23,42,0))] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" aria-hidden />
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="tag-pill inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
            {eyebrow}
          </p>
        ) : null}
        <div className="mt-6 max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-emerald-200 via-white to-amber-200 bg-clip-text text-transparent">{title}</span>
          </h1>
          {description ? <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">{description}</p> : null}
        </div>
        <div className="mt-10 grid gap-4 text-xs uppercase tracking-[0.4em] text-slate-500 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">Precision engineering</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">Obsessive detailing</div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">Human-first experience</div>
        </div>
      </div>
    </section>
  );
}
