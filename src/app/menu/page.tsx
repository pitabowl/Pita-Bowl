import type { Metadata } from "next";
import { JsonLd, SCHEMA_IDS, pageMetadata } from "@/lib/seo";
import { dishSlugForItem } from "@/data/dishes";
import { SITE_URL } from "@/config/links";
import { menuCategories } from "@/data/menu";
import { OrderButton } from "@/components/OrderButton";
import { MenuCategoryNav } from "@/components/MenuCategoryNav";
import { MenuItemCard } from "@/components/MenuItemCard";
import { Section, Container } from "@/components/Section";
import { ValuePropBadges } from "@/components/Badge";

export const metadata: Metadata = pageMetadata({
  title: "Menu — Shawarma, Bowls & Falafel in Mission Beach",
  description:
    "Full Pita Bowl menu: chicken and steak shawarma bowls, wraps, falafel, shawarma fries, baklava and more. Seed-oil-free and fresh daily in Mission Beach.",
  path: "/menu",
});

/** Menu structured data; the Restaurant node (layout) points here via hasMenu. */
const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": SCHEMA_IDS.menu,
  name: "Pita Bowl Menu",
  url: `${SITE_URL}/menu`,
  inLanguage: "en-US",
  hasMenuSection: menuCategories
    .map((c) => ({
      ...c,
      // "Featured" repeats items listed in other sections; keep only ones that aren't
      items:
        c.id === "featured"
          ? c.items.filter(
              (item) => !menuCategories.some((o) => o.id !== c.id && o.items.some((i) => i.name === item.name))
            )
          : c.items,
    }))
    .filter((c) => c.items.length > 0)
    .map((c) => ({
      "@type": "MenuSection",
      name: c.name,
      description: c.description,
      hasMenuItem: c.items.map((item) => {
        const slug = dishSlugForItem(item.id);
        return {
          "@type": "MenuItem",
          ...(slug && { "@id": `${SITE_URL}/menu/${slug}#item`, url: `${SITE_URL}/menu/${slug}` }),
          name: item.name,
          description: item.description,
          ...(item.price && { offers: { "@type": "Offer", price: item.price, priceCurrency: "USD" } }),
        };
      }),
    })),
};

export default function MenuPage() {
  return (
    <>
      <JsonLd data={menuSchema} />
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
