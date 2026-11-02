import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { CateringForm } from "./CateringForm";
import { OrderButton } from "@/components/OrderButton";
import { Section, Container } from "@/components/Section";
import { ValuePropBadges } from "@/components/Badge";
import { cateringCopy } from "@/data/landing-copy";
import { LinkGrid } from "@/components/content/PageParts";

export const metadata: Metadata = pageMetadata({
  title: "Catering in San Diego — Seed-Oil-Free Group Orders",
  description:
    "Catering for offices, parties and events in San Diego. Shawarma, falafel and Mediterranean bowls and wraps, made fresh daily with no seed oils. Request a quote.",
  path: "/catering",
});

export default function CateringPage() {
  return (
    <>
      <Section className="border-b border-border/50 bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              Catering
            </h1>
            <p className="max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Feed your group with fresh, customizable bowls and wraps. No seed oils, daily prep,
              and options for every diet.
            </p>
            <ValuePropBadges />
            <div className="flex flex-col sm:flex-row gap-4">
              <OrderButton location="catering" size="xl" />
              <OrderButton location="catering" variant="secondary" size="xl">
                Order Individual Meals
              </OrderButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-background pb-0 md:pb-0">
        <Container className="max-w-4xl">
          <LinkGrid
            title="Catering by occasion"
            links={cateringCopy.map((c) => ({ href: `/catering/${c.slug}`, title: c.h1 }))}
          />
        </Container>
      </Section>

      <Section id="quote" className="bg-background scroll-mt-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-3xl border border-border/50 bg-card p-10 md:p-14 shadow-xl">
              <h2 className="text-3xl font-bold mb-3">Request a Quote</h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Tell us about your event and we&apos;ll get back to you with details and pricing.
              </p>
              <CateringForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
