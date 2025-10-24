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
