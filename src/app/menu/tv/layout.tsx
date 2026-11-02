import type { Metadata } from "next";

/** In-store TV display — keep it out of search results. */
export const metadata: Metadata = {
  title: "TV Menu",
  robots: { index: false, follow: false },
};

export default function TVMenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
