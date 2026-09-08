export const site = {
 name: "Mister IA 64",
 origin: process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
 review: true,
 description: "Diagnostic IA à 99 €, automatisation, formation et SEO/GEO pour les TPE et PME de Bayonne, Anglet, Biarritz et du Pays Basque.",
};
export const absolute = (path: string) => new URL(path, site.origin).href;
