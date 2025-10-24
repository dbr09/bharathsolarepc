import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import { ContactSection, ProjectsHighlightsSection } from "../components/marketing/sections";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ProcessExperience from "./ProcessExperience";

export const metadata = {
  title: "Solar EPC Process — Bharath Solar EPC",
  description: "Understand our discovery, engineering, procurement, installation and O&M workflow for solar projects.",
};

export default function ProcessPage() {
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
        eyebrow="How we work"
        title="A proven EPC playbook from discovery to performance"
        description="Track the milestones that take your plant from feasibility to stable generation, with transparent communication at every step."
      />
      <ProcessExperience />
      <ProjectsHighlightsSection />
      <ContactSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
