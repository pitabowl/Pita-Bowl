import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileOrderBar } from "@/components/MobileOrderBar";
import { JsonLdRestaurant } from "@/components/JsonLdRestaurant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Pita Bowl | Seed Oil Free • Fresh Daily • San Diego",
    template: "%s | Pita Bowl",
  },
  description:
    "Pita Bowl is a health- and wellness-forward restaurant in San Diego focused on clean, flavorful shawarma, customizable meals — made with fresh, daily-prepped ingredients and absolutely no seed oils.",
  keywords: [
    "pita bowl",
    "san diego",
    "seed oil free",
    "mediterranean",
    "shawarma",
    "healthy food",
    "custom bowls",
    "mission blvd",
  ],
  openGraph: {
    title: "Pita Bowl | Seed Oil Free • Fresh Daily • San Diego",
    description:
      "Pita Bowl is a health- and wellness-forward restaurant in San Diego focused on clean, flavorful shawarma and customizable bowls & wraps.",
    type: "website",
    locale: "en_US",
    siteName: "Pita Bowl",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pita Bowl | Seed Oil Free • Fresh Daily",
    description: "Clean, flavorful shawarma and customizable bowls in San Diego.",
  },
  metadataBase: new URL("https://pitabowlsd.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <JsonLdRestaurant />
        <Header />
        <main className="flex-1 pb-24 lg:pb-0">{children}</main>
        <Footer />
        <MobileOrderBar />
      </body>
    </html>
  );
}
