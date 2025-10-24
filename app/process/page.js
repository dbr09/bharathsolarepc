import DynamicPageShell from "../components/layout/DynamicPageShell";
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
    <DynamicPageShell accent="amber">
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
    </DynamicPageShell>
  );
}
