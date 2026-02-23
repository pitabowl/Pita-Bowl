import type { Metadata } from "next";
import { menuCategories } from "@/data/menu";
import { OrderButton } from "@/components/OrderButton";
import { MenuCategoryNav } from "@/components/MenuCategoryNav";
import { MenuItemCard } from "@/components/MenuItemCard";
import { Section, Container } from "@/components/Section";
import { ValuePropBadges } from "@/components/Badge";

export const metadata: Metadata = {
  title: "Menu | Pita Bowl — Bowls, Wraps, Sides & Sauces",
  description:
    "Build your bowl or wrap: choose base, dip, protein, toppings, sauce. Bowls & wraps, sides, sauces, and drinks. Seed oil free, fresh daily.",
  openGraph: {
    title: "Menu | Pita Bowl",
    description: "Bowls, wraps, sides, sauces, and drinks. Seed oil free, fresh daily.",
  },
};

export default function MenuPage() {
  return (
    <>
      <Section className="border-b border-border/50 bg-gradient-to-br from-muted/20 via-background to-accent/10">
        <Container>
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
              Our Menu
            </h1>
            <p className="max-w-3xl text-xl text-muted-foreground leading-relaxed">
              Build your bowl or wrap: choose base, dip, protein, toppings, and sauce. All made
              fresh daily with no seed oils.
            </p>
            <ValuePropBadges />
            <OrderButton location="menu-top" size="xl" />
          </div>
        </Container>
      </Section>

      <MenuCategoryNav categories={menuCategories} />

      <Section className="bg-background">
        <Container>
          {menuCategories.map((category, idx) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-32 pb-20 last:pb-0"
            >
              <div className="mb-10">
                <h2 className="text-4xl font-bold mb-3">{category.name}</h2>
                {category.description && (
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{category.description}</p>
                )}
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} showPrice={!!item.price} />
                ))}
              </div>
              {idx < menuCategories.length - 1 && (
                <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              )}
            </section>
          ))}
        </Container>
      </Section>

      <Section className="border-t border-border/50 bg-gradient-to-b from-muted/20 to-accent/10">
        <Container className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to order?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose pickup or takeout and build your perfect bowl or wrap.
          </p>
          <OrderButton location="menu-bottom" size="xl" />
        </Container>
      </Section>
    </>
  );
}
