import { BackgroundDecorations, SiteFooter, SiteHeader } from "../components/layout/SiteChrome";
import PageIntro from "../components/layout/PageIntro";
import { ContactSection, ProjectsHighlightsSection } from "../components/marketing/sections";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata = {
  title: "Contact Bharath Solar EPC",
  description: "Book a solar consultation, request a proposal or schedule a site visit with Bharath Solar EPC.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <BackgroundDecorations />
      <SiteHeader />
      <PageIntro
        eyebrow="Start a conversation"
        title="Talk to solar engineers who stay with you for the long term"
        description="Call, WhatsApp or email us with your latest electricity bill and project goals. We schedule site assessments within 48 hours."
      />
      <ContactSection />
      <ProjectsHighlightsSection />
      <SiteFooter />
      <WhatsAppFloat />
    </main>
  );
}
