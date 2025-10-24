import DynamicPageShell from "../components/layout/DynamicPageShell";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import { CalculatorSection } from "../components/marketing/sections";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Solar Calculator — Bharath Solar EPC",
  description: "Estimate solar plant sizing, CAPEX, savings and CO₂ offsets for your site in minutes.",
};

export default function CalculatorPage() {
  return (
    <DynamicPageShell accent="emerald">
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
    </DynamicPageShell>
  );
}
