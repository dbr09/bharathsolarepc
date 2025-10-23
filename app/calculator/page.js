import dynamic from "next/dynamic";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import { CalculatorSection } from "../components/marketing/sections";

export const metadata = {
  title: "Solar Calculator — Bharath Solar EPC",
  description: "Estimate solar plant sizing, CAPEX, savings and CO₂ offsets for your site in minutes.",
};

const WhatsAppFloat = dynamic(() => import("../components/WhatsAppFloat"), { ssr: false });

export default function CalculatorPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Plan your plant"
        title="Solar sizing calculator"
        description="Enter your monthly electricity consumption and tariff to estimate the right solar capacity, roof area and payback period."
      />
      <CalculatorSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
