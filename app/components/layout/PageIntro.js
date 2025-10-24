export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="pb-12 pt-20 sm:pt-24 lg:pt-28">
      <div className="site-container">
        {eyebrow ? (
          <p className="text-sm uppercase tracking-[0.3em] text-[#F16921]">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 text-3xl font-bold text-slate-900 text-balance sm:text-4xl lg:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-3xl text-base text-slate-600 text-balance sm:text-lg">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
