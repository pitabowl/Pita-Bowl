import Link from "next/link";
import type { Place } from "@/data/content";
import { areaPages, attractionPages } from "@/data/content";
import { dishCard, guideCard, isCard } from "@/data/landing";
import { SITE_URL } from "@/config/links";
import { BUSINESS, JsonLd, pageGraph } from "@/lib/seo";
import { OrderButton } from "@/components/OrderButton";
import { Section, Container } from "@/components/Section";
import { BulletList, FaqList, LinkGrid, PageHero, Prose } from "@/components/content/PageParts";

const base = (p: Place) => (p.kind === "area" ? "/areas" : "/near");
export const placeTitle = (p: Place) => (p.kind === "area" ? `Pita Bowl near ${p.name}` : `Food near ${p.name}`);

/** Great-circle distance in km, for "nearby" links. */
function km(a: Place, b: Place) {
  const r = (d: number) => (d * Math.PI) / 180;
  const h =
    Math.sin(r(b.lat - a.lat) / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(r(b.lng - a.lng) / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(h));
}

export function PlacePage({ place }: { place: Place }) {
  const path = `${base(place)}/${place.slug}`;
  const crumbs = [
    place.kind === "area" ? { name: "Neighborhoods", path: "/areas" } : { name: "Near attractions", path: "/near" },
    { name: place.name, path },
  ];
  const others = [...areaPages, ...attractionPages].filter((p) => p.slug !== place.slug || p.kind !== place.kind);
  const nearby = others
    .map((p) => ({ p, d: km(place, p) }))
    .sort((a, b) => a.d - b.d)
    .slice(0, 6)
    .map(({ p }) => ({ href: `${base(p)}/${p.slug}`, title: placeTitle(p), detail: `${p.driveMiles} mi from Pita Bowl` }));
  // Places with a similar drive time, so outlying places still get inbound links
  const sameKind = place.kind === "area" ? areaPages : attractionPages;
  const k = sameKind.findIndex((p) => p.slug === place.slug);
  const similar = [1, 2, -1, -2]
    .map((o) => sameKind[(k + o + sameKind.length) % sameKind.length])
    .filter((p) => !nearby.some((n) => n.href === `${base(p)}/${p.slug}`))
    .map((p) => ({ href: `${base(p)}/${p.slug}`, title: placeTitle(p), detail: `About ${Math.max(1, p.driveMinutes)} min drive` }));
  const directions = `https://www.google.com/maps/dir/?api=1&origin=${place.lat},${place.lng}&destination=${encodeURIComponent(
    `${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postalCode}`
  )}`;

  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          title: place.seoTitle,
          description: place.metaDescription,
          crumbs,
          faqs: place.faqs,
          mainEntity: {
            "@type": "Place",
            "@id": `${SITE_URL}${path}#place`,
            name: place.name,
            geo: { "@type": "GeoCoordinates", latitude: place.lat, longitude: place.lng },
            containedInPlace: { "@type": "City", name: "San Diego" },
          },
        })}
      />
      <PageHero crumbs={crumbs} title={placeTitle(place)}>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-border/50 bg-card px-4 py-2 text-sm font-medium">
            {place.driveMiles} miles by car
          </span>
          <span className="rounded-full border border-border/50 bg-card px-4 py-2 text-sm font-medium">
            About {Math.max(1, place.driveMinutes)} min drive without traffic
          </span>
        </div>
        <Prose paragraphs={place.intro} />
        <div className="flex flex-col sm:flex-row gap-4">
          <OrderButton location="menu-top" size="xl" />
        </div>
      </PageHero>

      <Section className="bg-background py-12 md:py-20">
        <Container className="max-w-4xl space-y-14">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">Getting to Pita Bowl from {place.name}</h2>
            <BulletList items={place.gettingHere} />
            <p className="text-sm text-muted-foreground">
              Distance and drive time are estimates from OpenStreetMap routing to {BUSINESS.street}; traffic and summer
              crowds can add time.{" "}
              <a href={directions} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Get live directions
              </a>
              .
            </p>
          </div>
          <LinkGrid title="What to order" links={place.whatToOrder.map((w) => dishCard(w.dish, w.why)).filter(isCard)} />
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">About {place.name}</h2>
            <Prose paragraphs={place.aboutPlace} />
          </div>
          <FaqList title="Questions" faqs={place.faqs} />
          <LinkGrid title="Nearby" links={nearby} />
          <LinkGrid title="Similar drive time" links={similar} />
          <LinkGrid
            title="Helpful guides"
            links={["food-near-belmont-park", "how-to-order-ahead-for-pickup", "what-is-shawarma"].map(guideCard).filter(isCard)}
          />
          <p className="text-muted-foreground">
            Pita Bowl is at <Link href="/location" className="text-primary hover:underline">{BUSINESS.street}</Link> in
            Mission Beach. Open Sunday–Thursday 11 AM–8 PM and Friday–Saturday 11 AM–9 PM. See the{" "}
            <Link href="/menu" className="text-primary hover:underline">full menu</Link>.
          </p>
        </Container>
      </Section>
    </>
  );
}
