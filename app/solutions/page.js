import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import { SolutionsSection, ValueHighlightsSection } from "../components/marketing/sections";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Solar Solutions — Bharath Solar EPC",
  description: "Discover residential, commercial and institutional solar EPC offerings tailored to every roof.",
};

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Solar EPC"
        title="Segmented solutions for every rooftop"
        description="Whether you manage a villa, manufacturing plant or institutional campus, our engineering and O&M programmes are tuned to your load profile and compliance needs."
      />
      <ValueHighlightsSection />
      <SolutionsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
