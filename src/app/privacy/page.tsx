import type { Metadata } from "next";
import { Section, Container } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | Pita Bowl",
  description: "Privacy policy for Pita Bowl website and services.",
};

export default function PrivacyPage() {
  return (
    <Section className="bg-background">
      <Container className="max-w-4xl">
        <div className="rounded-3xl border border-border/50 bg-card p-10 md:p-16 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-8">Last updated: placeholder date</p>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Placeholder privacy policy. Pita Bowl respects your privacy. We collect information you
              provide when ordering or contacting us, and use it to fulfill orders and improve our
              service. We do not sell your personal information. For questions, contact us via the
              Contact page.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
