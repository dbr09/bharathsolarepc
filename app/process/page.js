import dynamic from "next/dynamic";
import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import { ContactSection, ProcessSection, ProjectsHighlightsSection } from "../components/marketing/sections";

export const metadata = {
  title: "Solar EPC Process — Bharath Solar EPC",
  description: "Understand our discovery, engineering, procurement, installation and O&M workflow for solar projects.",
};

const WhatsAppFloat = dynamic(() => import("../components/WhatsAppFloat"), { ssr: false });

export default function ProcessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-900">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="How we work"
        title="A proven EPC playbook from discovery to performance"
        description="Track the milestones that take your plant from feasibility to stable generation, with transparent communication at every step."
      />
      <ProcessSection />
      <ProjectsHighlightsSection />
      <ContactSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
