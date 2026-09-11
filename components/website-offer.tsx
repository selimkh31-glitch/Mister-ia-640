import Link from "@/components/site-link";
import { ArrowUpRight, Check } from "lucide-react";
import { whatsappUrl } from "@/components/whatsapp";

export function WebsiteButton({ children = "Parlons de mon site web", className = "button" }: { children?: React.ReactNode; className?: string }) {
  const message = "Bonjour, je suis intéressé par votre site vitrine de 10 pages à partir de 299 € HT, avec SEO local, blog et formation inclus. Mon activité : … Ma ville : …";
  return <a href={whatsappUrl+"?text="+encodeURIComponent(message)} className={className} target="_blank" rel="noopener noreferrer" aria-label="Demander un devis pour un site web à partir de 299 euros HT sur WhatsApp, nouvelle fenêtre">{children}<ArrowUpRight size={18}/></a>;
}

export function WebsiteOffer() {
  return <section className="website-offer" id="site-web" aria-labelledby="website-title"><div className="wrap section website-offer-inner">
    <div><p className="eyebrow">VOUS DÉMARREZ VOTRE SOCIÉTÉ ?</p><h2 id="website-title">Votre premier site.<br/>Un budget qui vous laisse <span className="serif-word">démarrer.</span></h2><p className="website-intro">Présentez votre activité, vos services et votre zone d’intervention avec un site professionnel. Nous préparons votre visibilité locale et nous vous formons pour faire vivre le site vous-même.</p><h3>Pourquoi ce tarif ?</h3><p>Les outils de création assistée par l’IA nous permettent d’avancer plus vite sur la structure, les contenus et le développement. Nous répercutons ce temps gagné dans nos prix : un tarif adapté au travail nécessaire et au périmètre de votre projet.</p><Link className="text-link" href="/services/creation-site-web">Voir tout ce qui est inclus <ArrowUpRight size={18}/></Link></div>
    <div className="website-price-card"><p className="eyebrow">SITE VITRINE · 10 PAGES</p><p className="website-price"><span>À partir de</span>299 € <small>HT</small></p><ul>{["Un site vitrine de 10 pages.", "Un affichage adapté au mobile et à l’ordinateur.", "Le référencement naturel et local préparé.", "Un blog SEO prêt à accueillir vos articles.", "Une formation pour vous ou vos employés."].map(t=><li key={t}><Check size={18}/><span>{t}</span></li>)}</ul><WebsiteButton/><p className="website-note">Projet plus complexe ? Nous en discutons et préparons un devis adapté.</p></div>
  </div></section>;
}
