import { JsonLd, restaurantSchema, websiteSchema } from "@/lib/seo";

/** Site-wide Restaurant + WebSite structured data (business facts live in lib/seo). */
export function JsonLdRestaurant() {
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": [restaurantSchema(), websiteSchema()] }} />;
}
