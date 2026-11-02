import type { Metadata } from "next";
import { ORDER_ONLINE_URL, SITE_URL } from "@/config/links";

/** Business facts used by every page's metadata and structured data. */
export const BUSINESS = {
  name: "Pita Bowl",
  description:
    "Pita Bowl is a health- and wellness-forward restaurant in Mission Beach, San Diego, serving shawarma, falafel and customizable Mediterranean bowls and wraps — made with fresh, daily-prepped ingredients and absolutely no seed oils.",
  phone: "+1-858-210-9524",
  email: "orders@thepitabowl.com",
  street: "3833 Mission Blvd",
  city: "San Diego",
  neighborhood: "Mission Beach",
  region: "CA",
  postalCode: "92109",
  country: "US",
  // From OpenStreetMap geocoding of the street address
  lat: 32.78548,
  lng: -117.25295,
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"], opens: "11:00", closes: "20:00" },
    { days: ["Friday", "Saturday"], opens: "11:00", closes: "21:00" },
  ],
  image: "/images/hero-pita-bowl.jpg",
} as const;

/** Stable JSON-LD node ids so pages can reference each other. */
export const SCHEMA_IDS = {
  restaurant: `${SITE_URL}/#restaurant`,
  website: `${SITE_URL}/#website`,
  menu: `${SITE_URL}/menu#menu`,
};

interface PageMetaInput {
  /** Page title; the layout template appends "| Pita Bowl" */
  title: string;
  description: string;
  /** Path starting with "/" */
  path: string;
  image?: string;
  noindex?: boolean;
  /** Use the title as-is instead of appending "| Pita Bowl" (home page) */
  absoluteTitle?: boolean;
}

/**
 * Full metadata for a page. Next.js replaces (not merges) openGraph/twitter
 * from the layout, so every page sets all of them here.
 */
export function pageMetadata({ title, description, path, image, noindex, absoluteTitle }: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${BUSINESS.name}`;
  const images = [image ?? BUSINESS.image];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
      images,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

export function restaurantSchema() {
  return {
    "@type": "Restaurant",
    "@id": SCHEMA_IDS.restaurant,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: SITE_URL,
    image: `${SITE_URL}${BUSINESS.image}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${BUSINESS.name} ${BUSINESS.street} ${BUSINESS.city} ${BUSINESS.region} ${BUSINESS.postalCode}`
    )}`,
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    servesCuisine: ["Mediterranean", "Middle Eastern"],
    priceRange: "$$",
    acceptsReservations: false,
    paymentAccepted: "Cash, Credit Card, Debit Card, Apple Pay, Google Pay",
    currenciesAccepted: "USD",
    amenityFeature: ["Indoor seating", "Outdoor seating", "Free Wi-Fi", "Dogs allowed outdoors"].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    hasMenu: { "@id": SCHEMA_IDS.menu },
    potentialAction: {
      "@type": "OrderAction",
      target: { "@type": "EntryPoint", urlTemplate: ORDER_ONLINE_URL },
      deliveryMethod: "http://purl.org/goodrelations/v1#DeliveryModePickUp",
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    url: SITE_URL,
    name: BUSINESS.name,
    inLanguage: "en-US",
    publisher: { "@id": SCHEMA_IDS.restaurant },
  };
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export interface Crumb {
  name: string;
  /** Path starting with "/" */
  path: string;
}

/** WebPage + BreadcrumbList (+ FAQPage) nodes for a content page, linked to the site graph. */
export function pageGraph({
  path,
  title,
  description,
  crumbs,
  faqs,
  mainEntity,
  type = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  faqs?: { q: string; a: string }[];
  mainEntity?: object;
  type?: "WebPage" | "CollectionPage";
}) {
  const url = `${SITE_URL}${path}`;
  const nodes: object[] = [
    {
      "@type": type,
      "@id": url,
      url,
      name: `${title} | ${BUSINESS.name}`,
      description,
      inLanguage: "en-US",
      isPartOf: { "@id": SCHEMA_IDS.website },
      about: { "@id": SCHEMA_IDS.restaurant },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      ...(mainEntity && { mainEntity }),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [{ name: "Home", path: "" }, ...crumbs].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${c.path}`,
      })),
    },
  ];
  if (faqs?.length) {
    nodes.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": nodes };
}
