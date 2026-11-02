import type { Metadata } from "next";
import { dietCopy } from "@/data/landing-copy";
import { dietDishes } from "@/data/landing";
import { JsonLd, pageGraph, pageMetadata } from "@/lib/seo";
import { Section, Container } from "@/components/Section";
import { LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

const TITLE = "Vegan, Vegetarian & High-Protein Options";
const DESCRIPTION =
  "Find vegan, vegetarian, high-protein, gluten-friendly and kid-friendly dishes at Pita Bowl in Mission Beach, San Diego. Everything is made with no seed oils.";
const crumbs = [{ name: "Dietary options", path: "/dietary" }];

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/dietary" });

export default function DietaryHub() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/dietary", title: TITLE, description: DESCRIPTION, crumbs, type: "CollectionPage" })} />
      <PageHero crumbs={crumbs} title="Dietary options at Pita Bowl">
        <Prose
          paragraphs={[
            "Every bowl and wrap at Pita Bowl is built from parts, so it's easy to eat around a diet or an allergy. Nothing we make is cooked in seed oils, and the guides below show which dishes fit and what to ask for when you order.",
          ]}
        />
      </PageHero>
      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-4xl">
          <LinkGrid
            title="Browse by diet"
            links={dietCopy.map((d) => ({
              href: `/dietary/${d.slug}`,
              title: d.h1,
              detail: `${dietDishes(d.slug).length} dishes`,
            }))}
          />
        </Container>
      </Section>
    </>
  );
}
