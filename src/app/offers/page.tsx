import type { Metadata } from "next";
import { OrderButton } from "@/components/OrderButton";
import { Section, Container } from "@/components/Section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Offers | Pita Bowl — FIT 15% Off",
  description: "FIT members get 15% off at checkout. Pita Bowl San Diego.",
  openGraph: {
    title: "Offers | Pita Bowl",
    description: "FIT 15% off at checkout.",
  },
};

const OFFERS = [
  {
    id: "fit",
    title: "FIT Members: 15% Off",
    description: "Show your FIT membership at checkout to receive 15% off your order.",
    cta: "Order Online",
    isPrimary: true,
  },
] as const;

// Only show FIT Members promo; any other offers are hidden
const VISIBLE_OFFERS = OFFERS.filter((o) => o.id === "fit");

export default function OffersPage() {
  return (
    <>
      <Section className="border-b border-border/50 bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              Offers
            </h1>
            <p className="max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Save with FIT membership at checkout. Fresh, customizable meals just got even better.
            </p>
            <OrderButton location="offers" size="xl" />
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            {VISIBLE_OFFERS.map((offer, idx) => (
              <article
                key={offer.id}
                className={cn(
                  "rounded-2xl border border-border/50 bg-card p-10 shadow-lg hover:shadow-2xl transition-all duration-300",
                  idx === 0 && "md:col-span-2 lg:col-span-1 bg-gradient-to-br from-primary/5 to-transparent border-primary/20"
                )}
              >
                {idx === 0 && (
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wide mb-4">
                    Featured
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-4">{offer.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{offer.description}</p>
                <div className="mt-8">
                  {offer.isPrimary ? (
                    <OrderButton location="offers" size="lg" />
                  ) : (
                    <OrderButton location="offers" variant="outline" size="lg" />
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
