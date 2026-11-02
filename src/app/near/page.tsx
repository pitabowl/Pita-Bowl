import type { Metadata } from "next";
import { attractionPages } from "@/data/content";
import { JsonLd, pageGraph, pageMetadata } from "@/lib/seo";
import { Section, Container } from "@/components/Section";
import { LinkGrid, PageHero, Prose } from "@/components/content/PageParts";
import { placeTitle } from "@/components/places/PlacePage";

const TITLE = "Food Near San Diego Attractions";
const DESCRIPTION =
  "Seed-oil-free shawarma and bowls near Belmont Park, Mission Bay, SeaWorld, Ocean Beach and more, with real drive times from each spot to Pita Bowl.";
const crumbs = [{ name: "Near attractions", path: "/near" }];

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/near" });

export default function Hub() {
  return (
    <>
      <JsonLd data={pageGraph({ path: "/near", title: TITLE, description: DESCRIPTION, crumbs, type: "CollectionPage" })} />
      <PageHero crumbs={crumbs} title="Near San Diego attractions">
        <Prose paragraphs={["Beaches, parks and landmarks around San Diego, closest first, with drive times to Pita Bowl and tips for grabbing food on the way."]} />
      </PageHero>
      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-4xl">
          <LinkGrid
            title="Closest first"
            links={attractionPages.map((p) => ({
              href: `/near/${p.slug}`,
              title: placeTitle(p),
              detail: `${p.driveMiles} mi · about ${Math.max(1, p.driveMinutes)} min drive`,
            }))}
          />
        </Container>
      </Section>
    </>
  );
}
