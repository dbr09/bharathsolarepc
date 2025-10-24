import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import { ProjectsHighlightsSection, TestimonialsFaqSection } from "../components/marketing/sections";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Testimonials & FAQs — Bharath Solar EPC",
  description: "Hear from our solar clients and review answers to the most common project questions.",
};

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.18), transparent 55%), radial-gradient(circle at 80% 30%, rgba(16, 185, 129, 0.14), transparent 60%)",
        }}
      />
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Client stories"
        title="Confidence from the field"
        description="Discover how manufacturers, hospitals and homeowners rely on Bharath Solar EPC, and get quick answers to frequent questions."
      />
      <TestimonialsFaqSection />
      <ProjectsHighlightsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
