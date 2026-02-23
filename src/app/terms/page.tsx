import type { Metadata } from "next";
import { Section, Container } from "@/components/Section";

export const metadata: Metadata = {
  title: "Terms of Use | Pita Bowl",
  description: "Terms of use for Pita Bowl website and ordering.",
};

export default function TermsPage() {
  return (
    <Section className="bg-background">
      <Container className="max-w-4xl">
        <div className="rounded-3xl border border-border/50 bg-card p-10 md:p-16 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-8">Last updated: placeholder date</p>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Placeholder terms. By using this website and our ordering services, you agree to these
              terms. Orders are subject to availability. We reserve the right to update these terms;
              continued use constitutes acceptance.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
