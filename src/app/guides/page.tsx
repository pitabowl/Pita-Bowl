import type { Metadata } from "next";
import { guides } from "@/data/guides";
import { JsonLd, pageGraph, pageMetadata } from "@/lib/seo";
import { Section, Container } from "@/components/Section";
import { LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

const TITLE = "Guides to Shawarma, Falafel & Mediterranean Food";
const DESCRIPTION =
  "Plain-English guides to shawarma, falafel, hummus, tahini, baklava, seed oils and building a high-protein bowl, from Pita Bowl in Mission Beach, San Diego.";
const crumbs = [{ name: "Guides", path: "/guides" }];

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/guides" });

export default function GuidesHub() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/guides", title: TITLE, description: DESCRIPTION, crumbs, type: "CollectionPage" })} />
      <PageHero crumbs={crumbs} title="Guides">
        <Prose
          paragraphs={[
            "Short, practical answers about the food we make: what's in it, where it comes from, and how to order it the way you like.",
          ]}
        />
      </PageHero>
      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-4xl">
          <LinkGrid title="All guides" links={guides.map((g) => ({ href: `/guides/${g.slug}`, title: g.title, detail: g.summary }))} />
        </Container>
      </Section>
    </>
  );
}
