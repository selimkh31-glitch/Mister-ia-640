import type { Metadata } from "next";
import { absolute, site } from "./site";
import { hiddenFromSearch, searchDescriptions, searchTitles } from "./seo";

export function pageMetadata(path: string, fallbackTitle: string, fallbackDescription: string, article = false): Metadata {
  const title = searchTitles[path] || fallbackTitle;
  const description = searchDescriptions[path] || (fallbackDescription.length > 165 ? fallbackDescription.slice(0, 162).replace(/\s+\S*$/, "") + "…" : fallbackDescription);
  return {
    title, description,
    alternates: { canonical: absolute(path) },
    robots: { index: !site.review && !hiddenFromSearch.has(path), follow: !site.review },
    openGraph: { title, description, url: absolute(path), type: article ? "article" : "website", locale: "fr_FR", siteName: site.name },
    twitter: { card: "summary", title, description },
  };
}
