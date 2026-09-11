import Link from "@/components/site-link";

export function LocalServiceLinks() {
  return <section className="local-service-links" aria-labelledby="local-service-title">
    <p className="eyebrow">UN ACCOMPAGNEMENT DE PROXIMITÉ</p>
    <h2 id="local-service-title">Votre métier, vos outils, votre territoire.</h2>
    <p>De Saint-Jean-de-Luz et Ciboure à Hendaye, Bayonne, Anglet et Biarritz, nous définissons ensemble le format utile : échange à distance, atelier avec l’équipe ou intervention sur place selon le projet.</p>
    <nav aria-label="Services et accompagnement local">
      <Link href="/pays-basque">Comment se déroule l’accompagnement au Pays Basque</Link>
      <Link href="/services/creation-site-web">Créer votre site internet</Link>
      <Link href="/services/seo-geo">Travailler votre référencement local</Link>
      <Link href="/services/automatisation-ia">Relier vos outils et automatiser</Link>
      <Link href="/services/formation-ia">Former votre équipe à l’IA</Link>
    </nav>
  </section>;
}
