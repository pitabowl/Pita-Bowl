import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dietCopy } from "@/data/landing-copy";
import { dietDishes, dishCard, getDietCopy, guideCard, isCard, DIET_LABELS } from "@/data/landing";
import { JsonLd, pageGraph, pageMetadata } from "@/lib/seo";
import { OrderButton } from "@/components/OrderButton";
import { Section, Container } from "@/components/Section";
import { BulletList, FaqList, LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

export const dynamicParams = false;

export function generateStaticParams() {
  return dietCopy.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const copy = getDietCopy(params.slug);
  if (!copy) return {};
  return pageMetadata({ title: copy.seoTitle, description: copy.metaDescription, path: `/dietary/${copy.slug}` });
}

export default function DietPage({ params }: { params: { slug: string } }) {
  const copy = getDietCopy(params.slug);
  if (!copy) notFound();
  const path = `/dietary/${copy.slug}`;
  const crumbs = [
    { name: "Dietary options", path: "/dietary" },
    { name: DIET_LABELS[copy.slug], path },
  ];
  const dishLinks = dietDishes(copy.slug).map((d) => dishCard(d.slug)).filter(isCard);
  const otherDiets = dietCopy
    .filter((d) => d.slug !== copy.slug)
    .map((d) => ({ href: `/dietary/${d.slug}`, title: d.h1 }));

  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          title: copy.seoTitle,
          description: copy.metaDescription,
          crumbs,
          faqs: copy.faqs,
          type: "CollectionPage",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: dishLinks.map((l, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `https://www.thepitabowl.com${l.href}`,
              name: l.title,
            })),
          },
        })}
      />
      <PageHero crumbs={crumbs} title={copy.h1}>
        <Prose paragraphs={copy.intro} />
        <div>
          <OrderButton location="menu-top" size="xl" />
        </div>
      </PageHero>

      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-4xl space-y-14">
          <LinkGrid title={`${DIET_LABELS[copy.slug]} dishes on our menu`} links={dishLinks} />

          <div className="space-y-5">
            <h2 className="text-3xl font-bold">How to order</h2>
            <BulletList items={copy.howToOrder} />
          </div>

          <FaqList title="Questions" faqs={copy.faqs} />
          <LinkGrid title="Further reading" links={copy.relatedGuides.map(guideCard).filter(isCard)} />
          <LinkGrid title="Other dietary options" links={otherDiets} />

          <p className="text-muted-foreground">
            See the <Link href="/menu" className="text-primary hover:underline">full menu</Link> or{" "}
            <Link href="/location" className="text-primary hover:underline">find us at 3833 Mission Blvd</Link>.
          </p>
        </Container>
      </Section>
    </>
  );
}
