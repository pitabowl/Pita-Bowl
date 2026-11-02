import type { Metadata } from "next";
import { areaPages } from "@/data/content";
import { JsonLd, pageGraph, pageMetadata } from "@/lib/seo";
import { Section, Container } from "@/components/Section";
import { LinkGrid, PageHero, Prose } from "@/components/content/PageParts";
import { placeTitle } from "@/components/places/PlacePage";

const TITLE = "San Diego Neighborhoods Near Pita Bowl";
const DESCRIPTION =
  "How far Pita Bowl in Mission Beach is from San Diego neighborhoods, with real drive times, directions and what to order for pickup.";
const crumbs = [{ name: "Neighborhoods", path: "/areas" }];

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/areas" });

export default function Hub() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/areas", title: TITLE, description: DESCRIPTION, crumbs, type: "CollectionPage" })} />
      <PageHero crumbs={crumbs} title="Neighborhoods">
        <Prose paragraphs={["Real drive times from San Diego neighborhoods to Pita Bowl at 3833 Mission Blvd, closest first, plus what travels well for the trip home."]} />
      </PageHero>
      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-4xl">
          <LinkGrid
            title="Closest first"
            links={areaPages.map((p) => ({
              href: `/areas/${p.slug}`,
              title: placeTitle(p),
              detail: `${p.driveMiles} mi · about ${Math.max(1, p.driveMinutes)} min drive`,
            }))}
          />
        </Container>
      </Section>
    </>
  );
}
