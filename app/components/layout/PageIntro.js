export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="px-6 pb-12 pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">{title}</h1>
        {description ? <p className="mt-4 max-w-3xl text-lg text-slate-600">{description}</p> : null}
      </div>
    </section>
  );
}
