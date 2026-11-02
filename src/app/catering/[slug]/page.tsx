import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cateringCopy } from "@/data/landing-copy";
import { dishCard, getCateringCopy, guideCard, isCard } from "@/data/landing";
import { JsonLd, SCHEMA_IDS, pageGraph, pageMetadata } from "@/lib/seo";
import { Section, Container } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { BulletList, FaqList, LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

export const dynamicParams = false;

export function generateStaticParams() {
  return cateringCopy.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const copy = getCateringCopy(params.slug);
  if (!copy) return {};
  return pageMetadata({ title: copy.seoTitle, description: copy.metaDescription, path: `/catering/${copy.slug}` });
}

export default function CateringOccasionPage({ params }: { params: { slug: string } }) {
  const copy = getCateringCopy(params.slug);
  if (!copy) notFound();
  const path = `/catering/${copy.slug}`;
  const crumbs = [
    { name: "Catering", path: "/catering" },
    { name: copy.h1, path },
  ];
  const orderLinks = copy.whatToOrder.map((w) => dishCard(w.dish, w.why)).filter(isCard);
  const otherOccasions = cateringCopy
    .filter((c) => c.slug !== copy.slug)
    .map((c) => ({ href: `/catering/${c.slug}`, title: c.h1 }));

  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          title: copy.seoTitle,
          description: copy.metaDescription,
          crumbs,
          faqs: copy.faqs,
          mainEntity: {
            "@type": "Service",
            name: copy.h1,
            serviceType: "Catering",
            provider: { "@id": SCHEMA_IDS.restaurant },
            areaServed: { "@type": "City", name: "San Diego" },
          },
        })}
      />
      <PageHero crumbs={crumbs} title={copy.h1}>
        <Prose paragraphs={copy.intro} />
        <div>
          <Button size="xl" asChild>
            <Link href="/catering#quote">Request a catering quote</Link>
          </Button>
        </div>
      </PageHero>

      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-4xl space-y-14">
          <LinkGrid title="What to order" links={orderLinks} />
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">Planning tips</h2>
            <BulletList items={copy.planningTips} />
          </div>
          <FaqList title="Questions" faqs={copy.faqs} />
          <LinkGrid title="Further reading" links={copy.relatedGuides.map(guideCard).filter(isCard)} />
          <LinkGrid title="Other catering occasions" links={otherOccasions} />
          <p className="text-muted-foreground">
            Ready to plan? <Link href="/catering#quote" className="text-primary hover:underline">Request a quote</Link>{" "}
            and tell us your date, headcount and any dietary needs.
          </p>
        </Container>
      </Section>
    </>
  );
}
