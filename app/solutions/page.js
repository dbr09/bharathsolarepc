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
