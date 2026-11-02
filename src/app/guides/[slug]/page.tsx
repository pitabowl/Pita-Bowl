import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuide, guides } from "@/data/guides";
import { dishCard, guideCard, isCard } from "@/data/landing";
import { SITE_URL } from "@/config/links";
import { BUSINESS, JsonLd, SCHEMA_IDS, pageGraph, pageMetadata } from "@/lib/seo";
import { OrderButton } from "@/components/OrderButton";
import { Section, Container } from "@/components/Section";
import { FaqList, LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

/** Bump when guide copy changes meaningfully (used for dateModified). */
const PUBLISHED = "2026-11-02";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = getGuide(params.slug);
  if (!g) return {};
  const meta = pageMetadata({ title: g.seoTitle, description: g.metaDescription, path: `/guides/${g.slug}` });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: PUBLISHED } };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = getGuide(params.slug);
  if (!g) notFound();
  const path = `/guides/${g.slug}`;
  const crumbs = [
    { name: "Guides", path: "/guides" },
    { name: g.title, path },
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          title: g.seoTitle,
          description: g.metaDescription,
          crumbs,
          faqs: g.faqs,
          mainEntity: {
            "@type": "Article",
            "@id": `${SITE_URL}${path}#article`,
            headline: g.title,
            description: g.summary,
            image: `${SITE_URL}${BUSINESS.image}`,
            datePublished: PUBLISHED,
            dateModified: PUBLISHED,
            author: { "@id": SCHEMA_IDS.restaurant },
            publisher: { "@id": SCHEMA_IDS.restaurant },
            inLanguage: "en-US",
          },
        })}
      />
      <PageHero crumbs={crumbs} title={g.title}>
        <p className="text-xl leading-relaxed text-foreground">{g.summary}</p>
      </PageHero>

      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-3xl space-y-14">
          <article className="space-y-12">
            {g.sections.map((s) => (
              <section key={s.heading} className="space-y-5">
                <h2 className="text-3xl font-bold">{s.heading}</h2>
                <Prose paragraphs={s.paragraphs} />
              </section>
            ))}
          </article>
          <FaqList title="Quick answers" faqs={g.faqs} />
          <LinkGrid title="Try it at Pita Bowl" links={g.relatedDishes.map((s) => dishCard(s)).filter(isCard)} />
          <LinkGrid title="Related guides" links={g.relatedGuides.map(guideCard).filter(isCard)} />
          <div className="rounded-3xl border border-border/50 bg-card p-8 text-center shadow-sm">
            <p className="text-lg text-muted-foreground mb-6">
              Pita Bowl is at <Link href="/location" className="text-primary hover:underline">3833 Mission Blvd</Link> in
              Mission Beach. Everything is made fresh daily with no seed oils.
            </p>
            <OrderButton location="menu-bottom" size="xl" />
          </div>
        </Container>
      </Section>
    </>
  );
}
