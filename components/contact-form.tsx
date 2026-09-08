import Link from "@/components/site-link";
export default function ContactForm({ initialNeed = "diagnostic" }: { initialNeed?: string }) {
  return <section className="form-box" aria-labelledby="contact-status">
    <p className="eyebrow">VERSION DE PRÉSENTATION</p>
    <h2 id="contact-status">La prise de contact ouvre bientôt.</h2>
    <p className="form-note">Le formulaire n’est pas encore activé. Aucune demande, réservation ou donnée personnelle n’est collectée par ce formulaire.</p>
    <p className="form-note">{initialNeed === "diagnostic" ? "Diagnostic IA : 99 €." : "Prestations sur devis."} Les coordonnées de contact seront ajoutées avant le lancement commercial.</p>
    <Link href="/diagnostic" className="button">Estimer mon potentiel</Link>
  </section>;
}
