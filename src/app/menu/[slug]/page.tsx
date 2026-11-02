import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes, getDish, type Dish } from "@/data/dishes";
import { menuCategories, type MenuItem } from "@/data/menu";
import { LOCATION_URL, MENU_URL, SITE_URL } from "@/config/links";
import { OrderButton } from "@/components/OrderButton";
import { Badge } from "@/components/Badge";
import { Section, Container } from "@/components/Section";

const allItems = menuCategories.flatMap((c) => c.items.map((item) => ({ item, category: c })));

function menuEntry(dish: Dish) {
  const entry = allItems.find(({ item }) => item.id === dish.itemId);
  if (!entry) throw new Error(`Dish ${dish.slug} points to unknown menu item ${dish.itemId}`);
  return entry;
}

/** FAQs every dish gets, filled from its menu data. */
function standardFaqs(item: MenuItem) {
  const faqs = [
    {
      q: `Is the ${item.name} cooked with seed oils?`,
      a: "No. Pita Bowl doesn't use seed oils (canola, soybean and the like) in anything. We cook with olive oil and avocado oil.",
    },
    {
      q: `How do I order the ${item.name}?`,
      a: "Order online for pickup or takeout, or come by 3833 Mission Blvd in Mission Beach, San Diego.",
    },
  ];
  if (item.price) {
    faqs.unshift({ q: `How much is the ${item.name}?`, a: `The ${item.name} is $${item.price}.` });
  }
  return faqs;
}

export function generateStaticParams() {
  return dishes.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const dish = getDish(params.slug);
  if (!dish) return {};
  const { item } = menuEntry(dish);
  return {
    title: dish.seoTitle,
    description: dish.metaDescription,
    alternates: { canonical: `/menu/${dish.slug}` },
    openGraph: {
      title: `${item.name} | Pita Bowl`,
      description: dish.metaDescription,
      images: item.image ? [item.image] : undefined,
    },
  };
}

export default function DishPage({ params }: { params: { slug: string } }) {
  const dish = getDish(params.slug);
  if (!dish) notFound();
  const { item, category } = menuEntry(dish);
  const faqs = [...dish.faqs, ...standardFaqs(item)];
  const pairs = dish.pairsWith
    .map((slug) => getDish(slug))
    .filter((d): d is Dish => !!d)
    .map((d) => ({ dish: d, item: menuEntry(d).item }));

  const pageUrl = `${SITE_URL}/menu/${dish.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MenuItem",
      name: item.name,
      description: item.description,
      url: pageUrl,
      image: item.image ? `${SITE_URL}${item.image}` : undefined,
      ...(item.price && {
        offers: { "@type": "Offer", price: item.price, priceCurrency: "USD" },
      }),
      ...(item.tags.includes("vegan") && { suitableForDiet: "https://schema.org/VeganDiet" }),
      ...(item.tags.includes("vegetarian") && {
        suitableForDiet: "https://schema.org/VegetarianDiet",
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Menu", item: `${SITE_URL}${MENU_URL}` },
        { "@type": "ListItem", position: 3, name: item.name, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section className="border-b border-border/50 bg-gradient-to-br from-muted/20 via-background to-accent/10 py-12 md:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`${MENU_URL}#${category.id}`} className="hover:text-primary">{category.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{item.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {item.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted shadow-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{item.name}</h1>
              {item.price && <p className="text-2xl font-semibold text-primary">${item.price}</p>}
              <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
              {item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} type={tag} />
                  ))}
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <OrderButton location="menu-top" size="xl" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-3xl space-y-14">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">About the {item.name}</h2>
            {dish.intro.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">{p}</p>
            ))}
            {item.ingredients && (
              <p className="text-muted-foreground">
                <strong className="text-foreground">What&apos;s in it:</strong> {item.ingredients}
              </p>
            )}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Questions about the {item.name}</h2>
            <dl className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                  <dt className="font-semibold text-lg mb-2">{f.q}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          {pairs.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Goes well with</h2>
              <ul className="grid gap-4 sm:grid-cols-3">
                {pairs.map(({ dish: d, item: p }) => (
                  <li key={d.slug}>
                    <Link
                      href={`/menu/${d.slug}`}
                      className="block h-full rounded-2xl border border-border/50 bg-card p-5 shadow-sm transition hover:border-primary/30 hover:shadow-md"
                    >
                      <span className="font-semibold">{p.name}</span>
                      {p.price && <span className="block text-sm text-primary mt-1">${p.price}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-muted-foreground">
            Pita Bowl is at <Link href={LOCATION_URL} className="text-primary hover:underline">3833 Mission Blvd</Link> in
            Mission Beach, San Diego. See the <Link href={MENU_URL} className="text-primary hover:underline">full menu</Link>.
          </p>
        </Container>
      </Section>
    </>
  );
}
