import type { Metadata } from "next";
import { ingredientPages } from "@/data/content";
import { JsonLd, pageGraph, pageMetadata } from "@/lib/seo";
import { Section, Container } from "@/components/Section";
import { LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

const TITLE = "Mediterranean & Middle Eastern Ingredients";
const DESCRIPTION =
  "A plain-English glossary of Mediterranean and Middle Eastern ingredients and spices, from sumac and za'atar to tahini and saffron, by Pita Bowl in San Diego.";
const crumbs = [{ name: "Ingredients", path: "/ingredients" }];

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/ingredients" });

export default function IngredientsHub() {
  const sorted = [...ingredientPages].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <JsonLd data={pageGraph({ path: "/ingredients", title: TITLE, description: DESCRIPTION, crumbs, type: "CollectionPage" })} />
      <PageHero crumbs={crumbs} title="Ingredients glossary">
        <Prose paragraphs={["What the spices, herbs, grains and pantry staples of Mediterranean and Middle Eastern cooking are, how they taste, and how they're used."]} />
      </PageHero>
      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-4xl">
          <LinkGrid title="A to Z" links={sorted.map((i) => ({ href: `/ingredients/${i.slug}`, title: i.name }))} />
        </Container>
      </Section>
    </>
  );
}
