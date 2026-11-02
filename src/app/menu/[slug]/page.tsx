import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dishes, getDish, type Dish } from "@/data/dishes";
import { menuCategories, type MenuItem } from "@/data/menu";
import { LOCATION_URL, MENU_URL, SITE_URL } from "@/config/links";
import { OrderButton } from "@/components/OrderButton";
import { JsonLd, SCHEMA_IDS, pageMetadata } from "@/lib/seo";
import { dietsForDish } from "@/data/landing";
import { guides } from "@/data/guides";
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
    item.categoryId === "desserts"
      ? {
          q: `What's in the ${item.name}?`,
          a: "It's one of our housemade desserts. If you need the full ingredient list for an allergy or diet, ask us when you order and we'll check for you.",
        }
      : {
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
  return pageMetadata({
    title: dish.seoTitle,
    description: dish.metaDescription,
    path: `/menu/${dish.slug}`,
    image: item.image,
  });
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

  // Other dishes in the same menu section, for the "More …" links
  const siblings = dishes
    .filter((d) => d.slug !== dish.slug && !dish.pairsWith.includes(d.slug))
    .map((d) => ({ dish: d, ...menuEntry(d) }))
    .filter(({ category: c }) => c.id === category.id);

  const guidesForDish = guides.filter((g) => g.relatedDishes.includes(dish.slug));

  const diets = [
    item.tags.includes("vegan") && "https://schema.org/VeganDiet",
    item.tags.includes("vegetarian") && "https://schema.org/VegetarianDiet",
  ].filter(Boolean);

  const pageUrl = `${SITE_URL}/menu/${dish.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
    {
      "@type": "MenuItem",
      "@id": `${pageUrl}#item`,
      name: item.name,
      description: item.description,
      url: pageUrl,
      image: item.image ? `${SITE_URL}${item.image}` : undefined,
      ...(item.price && {
        offers: { "@type": "Offer", price: item.price, priceCurrency: "USD" },
      }),
      ...(diets.length > 0 && { suitableForDiet: diets }),
    },
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: `${item.name} | Pita Bowl`,
      description: dish.metaDescription,
      isPartOf: { "@id": SCHEMA_IDS.website },
      about: { "@id": SCHEMA_IDS.restaurant },
      mainEntity: { "@id": `${pageUrl}#item` },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      primaryImageOfPage: item.image ? `${SITE_URL}${item.image}` : undefined,
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Menu", item: `${SITE_URL}${MENU_URL}` },
        { "@type": "ListItem", position: 3, name: item.name, item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

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

          {siblings.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">More {category.name.toLowerCase()}</h2>
              <ul className="flex flex-wrap gap-3">
                {siblings.map(({ dish: d, item: s }) => (
                  <li key={d.slug}>
                    <Link
                      href={`/menu/${d.slug}`}
                      className="inline-block rounded-full border border-border/50 bg-card px-4 py-2 text-sm font-medium hover:border-primary/30 hover:text-primary"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(dietsForDish(dish.slug).length > 0 || guidesForDish.length > 0) && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Learn more</h2>
              <ul className="flex flex-wrap gap-3">
                {dietsForDish(dish.slug).map((d) => (
                  <li key={d.slug}>
                    <Link href={`/dietary/${d.slug}`} className="inline-block rounded-full border border-border/50 bg-card px-4 py-2 text-sm font-medium hover:border-primary/30 hover:text-primary">
                      {d.h1}
                    </Link>
                  </li>
                ))}
                {guidesForDish.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="inline-block rounded-full border border-border/50 bg-card px-4 py-2 text-sm font-medium hover:border-primary/30 hover:text-primary">
                      {g.title}
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
