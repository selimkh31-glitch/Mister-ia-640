// Canonicals must never point to a generated deployment or preview URL.
const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const configuredOrigin = process.env.SITE_URL || (productionDomain ? `https://${productionDomain}` : undefined);
const origin = new URL(configuredOrigin || "http://localhost:3000").origin;
const production = process.env.VERCEL_ENV === "production" || (!process.env.VERCEL_ENV && process.env.NODE_ENV === "production" && Boolean(configuredOrigin));
if (production && (!configuredOrigin || !origin.startsWith("https://") || new URL(origin).hostname === "localhost")) {
 throw new Error("Indexable production requires an HTTPS SITE_URL or VERCEL_PROJECT_PRODUCTION_URL.");
}
export const site = {
 name: "Mister IA 64",
 origin,
 review: !production,
 description: "Sites internet, SEO local et accompagnement IA pour les dirigeants et leurs équipes au Pays Basque. Un interlocuteur humain, des outils adaptés à votre métier.",
};
export const serviceAreas = ['Saint-Jean-de-Luz', 'Bayonne', 'Biarritz', 'Anglet', 'Hendaye', 'Ciboure', 'Pays Basque'];
export const absolute = (path: string) => new URL(path, site.origin).href;
