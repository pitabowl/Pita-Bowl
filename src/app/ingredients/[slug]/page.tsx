import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIngredient, ingredientPages } from "@/data/content";
import { dishCard, guideCard, isCard } from "@/data/landing";
import { JsonLd, pageGraph, pageMetadata } from "@/lib/seo";
import { Section, Container } from "@/components/Section";
import { FaqList, LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

export const dynamicParams = false;

export function generateStaticParams() {
  return ingredientPages.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getIngredient(params.slug);
  if (!page) return {};
  return pageMetadata({ title: page.seoTitle, description: page.metaDescription, path: `/ingredients/${page.slug}` });
}

export default function IngredientPage({ params }: { params: { slug: string } }) {
  const page = getIngredient(params.slug);
  if (!page) notFound();
  const path = `/ingredients/${page.slug}`;
  const crumbs = [
    { name: "Ingredients", path: "/ingredients" },
    { name: page.name, path },
  ];
  // Alphabetical neighbors, so every ingredient page is linked from a few others
  const sorted = [...ingredientPages].sort((a, b) => a.name.localeCompare(b.name));
  const i = sorted.findIndex((x) => x.slug === page.slug);
  const neighbors = [-2, -1, 1, 2]
    .map((o) => sorted[(i + o + sorted.length) % sorted.length])
    .map((x) => ({ href: `/ingredients/${x.slug}`, title: x.name }));

  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          title: page.seoTitle,
          description: page.metaDescription,
          crumbs,
          faqs: page.faqs,
          mainEntity: { "@type": "DefinedTerm", name: page.name, description: page.summary, inDefinedTermSet: "https://www.thepitabowl.com/ingredients" },
        })}
      />
      <PageHero crumbs={crumbs} title={page.name}>
        <p className="text-xl leading-relaxed text-foreground">{page.summary}</p>
      </PageHero>
      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-3xl space-y-14">
          <article className="space-y-12">
            {page.sections.map((s) => (
              <section key={s.heading} className="space-y-5">
                <h2 className="text-3xl font-bold">{s.heading}</h2>
                <Prose paragraphs={s.paragraphs} />
              </section>
            ))}
          </article>
          <FaqList title="Quick answers" faqs={page.faqs} />
          <LinkGrid title="On our menu" links={page.onTheMenu.map((s) => dishCard(s)).filter(isCard)} />
          <LinkGrid title="Related guides" links={page.relatedGuides.map(guideCard).filter(isCard)} />
          <LinkGrid title="More ingredients" links={neighbors} />
        </Container>
      </Section>
    </>
  );
}
