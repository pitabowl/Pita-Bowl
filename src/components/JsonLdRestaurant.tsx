/**
 * JSON-LD LocalBusiness / Restaurant schema for SEO.
 * Update address, phone, hours when real data is available.
 */
export function JsonLdRestaurant() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Pita Bowl",
    description:
      "Pita Bowl is a health- and wellness-forward restaurant in San Diego focused on clean, flavorful shawarma, customizable meals — made with fresh, daily-prepped ingredients and absolutely no seed oils.",
    url: "https://pitabowlsd.com",
    image: "https://pitabowlsd.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3833 Mission Blvd",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92109",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7700,
      longitude: -117.2514,
    },
    telephone: "+1-858-210-9524",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Thursday", "Sunday", "Monday", "Tuesday", "Wednesday"],
        opens: "11:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:00",
        closes: "21:00",
      },
    ],
    servesCuisine: "Mediterranean",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
