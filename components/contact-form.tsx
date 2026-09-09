import Link from "@/components/site-link";
import { WhatsAppButton } from "@/components/whatsapp";
export default function ContactForm({ initialNeed = "diagnostic" }: { initialNeed?: string }) {
  return <section className="form-box" aria-labelledby="contact-status">
    <p className="eyebrow">VERSION DE PRÉSENTATION</p>
    <h2 id="contact-status">Parlons de votre projet sur WhatsApp.</h2>
    <p className="form-note">Le formulaire n’est pas encore activé. Aucune demande, réservation ou donnée personnelle n’est collectée par ce formulaire.</p>
    <p className="form-note">{initialNeed === "diagnostic" ? "Diagnostic IA : 99 €." : "Prestations sur devis."} Écrivez-nous au 06 01 99 80 10 en précisant votre activité et ce que vous souhaitez améliorer.</p>
    <WhatsAppButton/>
    <p className="form-note"><Link href="/diagnostic" className="text-link">D’abord, estimer mon potentiel</Link></p>
  </section>;
}
