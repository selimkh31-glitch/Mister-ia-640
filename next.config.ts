import type { NextConfig } from "next";

const permanentRedirects = [
  { source: "/bayonne", destination: "/pays-basque" },
  { source: "/bayonne/audit-ia", destination: "/services/audit-ia" },
  { source: "/bayonne/automatisation-ia", destination: "/services/automatisation-ia" },
  { source: "/bayonne/formation-ia", destination: "/services/formation-ia" },
  { source: "/bayonne/visibilite-ia", destination: "/services/seo-geo" },
  { source: "/politique-confidentialite", destination: "/confidentialite" },
  { source: "/politique-de-confidentialite", destination: "/confidentialite" },
  { source: "/visibilite-ia", destination: "/services/seo-geo" },
  { source: "/formation", destination: "/services/formation-ia" },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return permanentRedirects.map(({ source, destination }) => ({
      source,
      destination,
      statusCode: 301 as const,
    }));
  },
};

export default nextConfig;
