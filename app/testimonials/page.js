import DynamicPageShell from "../components/layout/DynamicPageShell";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import { ProjectsHighlightsSection } from "../components/marketing/sections";
import { faqs, testimonials } from "../data/testimonials";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Testimonials & FAQs — Bharath Solar EPC",
  description: "Hear from our solar clients and review answers to the most common project questions.",
};

export default function TestimonialsPage() {
  return (
    <DynamicPageShell accent="violet">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Client stories"
        title="Confidence from the field"
        description="Discover how manufacturers, hospitals and homeowners rely on Bharath Solar EPC. Browse detailed quotes and quick answers curated from recent engagements."
      />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">Testimonials</p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">What our partners share</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-200/90">
                Every testimonial is captured after commissioning reviews and performance audits. These are the voices shaping how we design, execute and support projects across Telangana.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-100 shadow-[0_35px_90px_-55px_rgba(16,185,129,0.45)]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/15 via-transparent to-sky-400/15"
                />
                <blockquote className="relative text-lg leading-relaxed text-white">
                  “{item.quote}”
                </blockquote>
                <figcaption className="relative mt-auto space-y-1 text-sm">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-slate-300">{item.role}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">{item.rating}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F16921]/80">FAQs</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Clarity before you start</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-200/90">
              We have compiled the recurring questions from procurement heads, facility managers and homeowners to simplify the first consultation.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-sm"
              >
                <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                <p className="mt-4 leading-relaxed text-slate-200/90">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectsHighlightsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </DynamicPageShell>
  );
}
