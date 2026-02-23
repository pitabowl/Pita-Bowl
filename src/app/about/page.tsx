import type { Metadata } from "next";
import { Section, Container } from "@/components/Section";
import { ValuePropBadges } from "@/components/Badge";
import { OrderButton } from "@/components/OrderButton";
import { FAQ } from "@/components/FAQ";

export const metadata: Metadata = {
  title: "About | Pita Bowl — Seed Oil Free, Fresh Daily, San Diego",
  description:
    "Pita Bowl is a wellness-forward, Mediterranean-inspired restaurant in San Diego. Seed oil free, fresh daily prep, customizable bowls and wraps.",
  openGraph: {
    title: "About | Pita Bowl",
    description: "Wellness-forward Mediterranean-inspired. Seed oil free, fresh daily.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border/50 bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              About Pita Bowl
            </h1>
            <p className="max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Health- and wellness-forward Mediterranean-inspired food in San Diego.
            </p>
            <ValuePropBadges />
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container className="max-w-4xl">
          <div className="space-y-16">
            <div className="rounded-3xl border border-border/50 bg-card p-10 md:p-14 shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pita Bowl is a health- and wellness-forward restaurant in San Diego focused on clean,
                flavorful shawarma, customizable meals — made with fresh, daily-prepped ingredients and
                absolutely no seed oils. Guests can build bowls and wraps around high-protein choices
                and Mediterranean-inspired flavors.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-card to-accent/10 p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Seed Oil Free</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We proudly cook with olive oil and avocado oil. We&apos;re
                  not here to lecture — we just believe in simpler, quality ingredients and less
                  processing. You get great flavor and ingredients you can feel good about.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-card to-accent/10 p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Fresh Daily</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Proteins, dips, and veggies are prepped in-house every day. We aim to serve food that
                  tastes as fresh as it is, without shortcuts.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-card to-accent/10 p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">High Protein</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build your bowl or wrap your way with high-protein options. Our proteins are lean meats: chicken, beef, and falafel.
                </p>
              </div>

              <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-card to-accent/10 p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Fully Customizable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose your base, dip, protein, toppings, and sauce. Plenty of choices for different diets and preferences.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-border/50 bg-card p-10 md:p-14 shadow-xl">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <FAQ />
            </div>

            <div className="flex justify-center">
              <OrderButton location="footer" size="xl" />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
