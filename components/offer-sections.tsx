import Link from "@/components/site-link";
import { ArrowUpRight, CalendarDays, FileText, MessageSquare, Megaphone, Receipt, Wrench, Image as ImageIcon, Monitor, NotebookPen, Workflow } from "lucide-react";
import { businessOffers, trainingTracks } from "@/lib/offers";
const offerIcons = { marketing: Megaphone, calendar: CalendarDays, blog: FileText, agent: MessageSquare, invoice: Receipt };
const trainingIcons = { tools: Wrench, image: ImageIcon, web: Monitor, daily: NotebookPen, automation: Workflow };

export function BusinessOffers() {
  return <section className="wrap section offer-section" aria-labelledby="offers-title">
    <div className="section-heading"><div><p className="eyebrow">04 / DANS VOTRE QUOTIDIEN</p><h2 id="offers-title">Des besoins précis.<br/>Des solutions qui suivent.</h2></div><p>On part de vos outils et de votre rythme.<br/>Chaque mise en place est chiffrée sur devis.</p></div>
    <div className="offer-grid">{businessOffers.map(offer => { const Icon = offerIcons[offer.icon]; return <Link className="offer-card" href={offer.href} key={offer.href}><Icon size={25}/><h3>{offer.title}</h3><p>{offer.text}</p><span className="card-link">Découvrir le service <ArrowUpRight size={18}/></span></Link>; })}</div>
  </section>;
}

export function TrainingPrograms({ compact = false }: { compact?: boolean }) {
  return <section className={compact ? "wrap section training-section" : "section training-section"} aria-labelledby="training-title">
    <div className="section-heading"><div><p className="eyebrow">FORMATIONS PRATIQUES · SUR DEVIS</p><h2 id="training-title">Apprendre sur votre métier.<br/>Repartir en sachant faire.</h2></div>{compact ? <Link className="text-link" href="/services/formation-ia">Voir les programmes <ArrowUpRight size={18}/></Link> : <p>Un parcours adapté à votre niveau.<br/>Un exercice concret à chaque atelier.</p>}</div>
    <div className="training-grid">{trainingTracks.map((track, i) => { const Icon = trainingIcons[track.icon]; return <article id={track.id} className="training-card" key={track.id}><div className="card-top"><Icon size={24}/><span>0{i + 1}</span></div><h3>{track.title}</h3><p>{track.text}</p>{compact ? <Link className="text-link" href={`/services/formation-ia#${track.id}`}>Explorer ce parcours <ArrowUpRight size={16}/></Link> : <><p className="training-audience">{track.audience}</p><div className="training-exercise"><strong>En pratique</strong><p>{track.exercise}</p></div></>}</article>; })}</div>
    {!compact && <p className="training-note">Programme, durée, prérequis et licences précisés au devis. La prise en main d’un outil livré est cadrée avec le projet ; elle n’est pas présentée comme incluse sans accord.</p>}
  </section>;
}
