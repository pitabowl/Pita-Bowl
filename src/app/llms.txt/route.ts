import { SITE_URL } from "@/config/links";
import { dishes } from "@/data/dishes";
import { menuCategories } from "@/data/menu";
import { BUSINESS } from "@/lib/seo";
import { cateringCopy, dietCopy } from "@/data/landing-copy";
import { guides } from "@/data/guides";

export const dynamic = "force-static";

/** /llms.txt — a plain-text summary of the restaurant for AI assistants (llmstxt.org). */
export function GET() {
  const items = new Map(menuCategories.flatMap((c) => c.items.map((i) => [i.id, i])));
  const hours = BUSINESS.hours
    .map((h) => `${h.days.join(", ")}: ${h.opens}–${h.closes}`)
    .join("; ");

  const body = `# ${BUSINESS.name}

> ${BUSINESS.description}

- Address: ${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postalCode} (${BUSINESS.neighborhood})
- Phone: ${BUSINESS.phone}
- Email: ${BUSINESS.email}
- Hours: ${hours}
- Cooking oils: olive oil and avocado oil only — no seed oils (canola, soybean, etc.) in anything
- Service: takeout and pickup; order online at ${SITE_URL}/menu
- Catering: available for groups and events (${SITE_URL}/catering)
- Offers: FIT members get 15% off (${SITE_URL}/offers)

## Main pages

- [Menu](${SITE_URL}/menu): full menu with prices
- [Location & hours](${SITE_URL}/location)
- [Catering](${SITE_URL}/catering)
- [About](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)

## Dishes

${dishes
  .map((d) => {
    const item = items.get(d.itemId)!;
    return `- [${item.name}](${SITE_URL}/menu/${d.slug})${item.price ? ` — $${item.price}` : ""}: ${item.description}`;
  })
  .join("\n")}

## Dietary options

${dietCopy.map((d) => `- [${d.h1}](${SITE_URL}/dietary/${d.slug}): ${d.metaDescription}`).join("\n")}

## Catering

${cateringCopy.map((c) => `- [${c.h1}](${SITE_URL}/catering/${c.slug}): ${c.metaDescription}`).join("\n")}

## Guides

${guides.map((g) => `- [${g.title}](${SITE_URL}/guides/${g.slug}): ${g.summary}`).join("\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
