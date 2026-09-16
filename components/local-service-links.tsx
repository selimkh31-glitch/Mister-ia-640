import Link from "@/components/site-link";

const localLinks = [
  { href: "/pays-basque", label: "Consultant IA au Pays Basque" },
  { href: "/services/audit-ia", label: "Audit IA local — diagnostic 99 €" },
  { href: "/services/creation-site-web", label: "Créer votre site internet au Pays Basque" },
  { href: "/services/seo-geo", label: "SEO et visibilité locale au Pays Basque" },
  { href: "/services/automatisation-ia", label: "Automatisation IA pour TPE et PME" },
  { href: "/services/formation-ia", label: "Formation IA au Pays Basque" },
] as const;

export function LocalServiceLinks({ currentPath }: { currentPath?: string } = {}) {
  const links = localLinks.filter((item) => item.href !== currentPath);
  return <section className="local-service-links" aria-labelledby="local-service-title">
    <p className="eyebrow">UN ACCOMPAGNEMENT DE PROXIMITÉ</p>
    <h2 id="local-service-title">Votre métier, vos outils, votre territoire.</h2>
    <p>De Saint-Jean-de-Luz et Ciboure à Hendaye, Bayonne, Anglet et Biarritz, nous définissons ensemble le format utile : échange à distance, atelier avec l’équipe ou intervention sur place selon le projet.</p>
    <nav aria-label="Services et accompagnement local">
      {links.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
    </nav>
  </section>;
}
