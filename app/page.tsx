import Link from "@/components/site-link";
import { CaseSpotlight, ClientCases } from "@/components/client-cases";
import { WebsiteOffer } from "@/components/website-offer";
import { AuditButton } from "@/components/audit-button";
import { ArrowUpRight, Check, PhoneMissed, FileText, Clock3 } from "lucide-react";
import { absolute } from "@/lib/site";

export const metadata = {
  title: "Site web dès 299 € HT et audit IA au Pays Basque",
  description: "Site vitrine de 10 pages dès 299 € HT, SEO local, blog et formation inclus. Audit IA personnalisé à 99 € pour alléger votre quotidien.",
  openGraph: { title: "Site web et audit IA au Pays Basque — Mister IA 64", description: "Site vitrine dès 299 € HT avec SEO local, blog et formation. Audit IA personnalisé à 99 €.", url: absolute("/") },
  twitter: { card: "summary", title: "Site web et audit IA au Pays Basque — Mister IA 64", description: "Un site pour vous lancer. Un audit pour savoir quoi automatiser. Découvrez nos deux offres." },
  alternates: { canonical: absolute("/") }
};
const questions = [
  ["Que comprend le site à partir de 299 € HT ?", "Un site vitrine de 10 pages, la préparation du référencement naturel et local, un blog et une formation pour vous ou vos employés. Les pages et les éventuels coûts du domaine, de l’hébergement et des services tiers sont précisés au devis."],
  ["Dois-je commander un audit avant mon site ?", "Non. Les deux offres sont indépendantes. Vous pouvez demander directement votre site vitrine, ou choisir un audit à 99 € pour examiner un processus de votre entreprise."],
  ["Est-ce adapté à une petite entreprise ?", "Oui. L’audit part de votre fonctionnement réel et d’un processus prioritaire : appels, devis, relances, contenus ou gestion. Les pistes sont évaluées en fonction de vos moyens et de vos outils."],
  ["Faut-il déjà savoir utiliser l’IA ?", "Non. Vous expliquez votre métier et ce qui vous ralentit. Nous traduisons les possibilités techniques en choix concrets, avec leurs limites et les interventions qui restent à votre charge."],
  ["Est-ce que les outils sont inclus dans les 99 € ?", "Les 99 € couvrent le diagnostic personnalisé et sa restitution. La création des outils, les licences éventuelles et la formation font l’objet d’un devis distinct si vous souhaitez poursuivre."],
  ["Dois-je vous confier la mise en place ensuite ?", "Non. Vous pouvez vous arrêter après l’audit. Vous repartez avec les pistes priorisées, une recommandation de pilote et un budget estimatif pour décider de la suite."],
  ["Comment se passe la demande ?", "Le bouton ouvre WhatsApp avec un message que vous pouvez compléter avant de l’envoyer. Nous précisons ensemble le processus à analyser et l’organisation de l’audit. Cliquer ne déclenche aucun paiement ni réservation automatique."]
];
export default function Home() {
  return <main id="main" className="home-page audit-funnel">
    <section className="wrap hero">
      <div className="hero-copy">
        <p className="eyebrow">DIRIGEANTS, INDÉPENDANTS & PME · PAYS BASQUE ET À DISTANCE</p>
        <h1>Lancez votre activité.<br/>Allégez votre <span className="serif-word">quotidien.</span></h1>
        <p className="hero-intro">Un site pour présenter votre entreprise et être trouvé localement. Un audit pour identifier les tâches à automatiser. Choisissez le point de départ qui correspond à votre activité.</p>
        <div className="hero-actions entry-offer-actions"><Link className="button" href="#site-web">Mon site web dès 299 € HT <ArrowUpRight size={18}/></Link><Link className="button entry-secondary" href="#audit">Mon audit IA — 99 € <ArrowUpRight size={18}/></Link></div>
        <p className="hero-note">Site : 10 pages, SEO local, blog et formation · Audit : un processus et un plan d’action</p>
      </div>
      <CaseSpotlight/>
    </section>
    <WebsiteOffer/>
    <section className="wrap section funnel-pain" aria-labelledby="pain-title">
      <div className="section-heading"><div><p className="eyebrow">VOUS RECONNAISSEZ VOTRE QUOTIDIEN ?</p><h2 id="pain-title">La journée finit.<br/>Les petites tâches restent.</h2></div><p>Chacune paraît gérable.<br/>Ensemble, elles prennent la place du reste.</p></div>
      <div className="problem-grid">{[
        { Icon: FileText, title: "Vous refaites ce qui existe déjà.", text: "Recopier une fiche produit, reprendre un devis, chercher une information entre deux logiciels." },
        { Icon: PhoneMissed, title: "Les demandes arrivent au mauvais moment.", text: "Un appel manqué pendant une intervention. Une relance oubliée. Un prospect qui attend une réponse." },
        { Icon: Clock3, title: "Votre développement attend.", text: "La communication, le suivi client ou les nouveaux projets passent après les urgences du jour." }
      ].map(({Icon,title,text})=><article className="problem-card" key={title}><Icon size={25}/><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="funnel-bridge">La première question : <strong>quelle tâche mérite une <Link href="/services/automatisation-ia">automatisation IA</Link> chez vous, avec vos contraintes ?</strong></p>
    </section>
    <ClientCases auditFocus/>
    <section className="dark-section" id="audit" aria-labelledby="audit-title"><div className="wrap section funnel-offer">
      <div><p className="eyebrow">VOTRE POINT DE DÉPART</p><h2 id="audit-title">Savoir quoi automatiser.<br/>Et par quoi commencer.</h2><p className="funnel-lead">Votre audit part d’un processus réel de votre entreprise. Nous regardons les étapes, les outils et les points de blocage, puis nous vous aidons à choisir une première action utile.</p><p className="funnel-lead">Vous repartez avec une réponse à trois questions : qu’est-ce qui peut changer, qu’est-ce que cela demande et quel budget prévoir ?</p></div>
      <div className="funnel-audit-card"><p className="eyebrow">AUDIT IA PERSONNALISÉ</p><p className="funnel-price">99 €</p><p>Un processus prioritaire, analysé en détail.</p><ul>{[
        "Une lecture claire des tâches et des blocages.",
        "3 à 5 pistes classées par intérêt.",
        "Un premier projet recommandé, adapté à vos moyens.",
        "Un budget estimatif et les prochaines étapes."
      ].map(item=><li key={item}><Check size={18}/><span>{item}</span></li>)}</ul><AuditButton/><p className="funnel-reassurance">Demande sur WhatsApp · Mise en place sur devis distinct · Libre de vous arrêter après l’audit</p></div>
    </div></section>
    <section className="wrap section" aria-labelledby="steps-title"><div className="section-heading"><div><p className="eyebrow">CONCRÈTEMENT</p><h2 id="steps-title">Vous connaissez votre métier.<br/>Partons de là.</h2></div></div><div className="funnel-steps">{[
      ["01", "Vous nous racontez votre quotidien.", "Votre activité, une tâche qui vous ralentit et les outils que vous utilisez. Nous précisons ensemble le périmètre de l’audit."],
      ["02", "Nous examinons un cas réel.", "Nous suivons le processus, repérons les ressaisies et évaluons les possibilités d’automatisation avec vos contraintes."],
      ["03", "Vous décidez avec un plan clair.", "Nous vous présentons les priorités, un pilote recommandé et son budget estimatif. Vous choisissez si vous souhaitez poursuivre."]
    ].map(([number,title,text])=><article key={number}><span className="eyebrow">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="wrap section funnel-faq" aria-labelledby="faq-title"><div className="section-heading"><div><p className="eyebrow">AVANT DE VOUS LANCER</p><h2 id="faq-title">Vos questions,<br/>des réponses claires.</h2></div></div>{questions.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <section className="wrap funnel-final" aria-labelledby="final-title"><div className="cta-panel"><div><p className="eyebrow">COMMENÇONS PAR VOTRE ENTREPRISE</p><h2 id="final-title">Quelle tâche aimeriez-vous<br/>ne plus refaire demain ?</h2><p>Parlez-nous de votre activité. Nous cadrerons votre audit personnalisé à 99 €.</p></div><div><AuditButton/><p className="funnel-reassurance">Vous complétez le message avant de l’envoyer.</p></div></div></section>
    <section className="wrap funnel-explore" aria-labelledby="explore-title">
      <p className="eyebrow">SELON VOTRE BESOIN</p>
      <h2 id="explore-title" className="funnel-explore-title">Les interventions possibles</h2>
      <p>Une fois les priorités claires, nous pouvons relier vos outils, clarifier votre présence en ligne ou former l’équipe.</p>
      <div className="funnel-explore-links"><Link href="/services/creation-site-web">Site vitrine dès 299 € HT <ArrowUpRight size={16}/></Link>
        <Link href="/services/audit-ia">Audit IA — 99 € <ArrowUpRight size={16}/></Link>
        <Link href="/services/automatisation-ia">Automatisation IA <ArrowUpRight size={16}/></Link>
        <Link href="/services/seo-geo">SEO/GEO <ArrowUpRight size={16}/></Link>
        <Link href="/services/formation-ia">Formation IA <ArrowUpRight size={16}/></Link>
        <Link href="/pays-basque">Au Pays Basque et à distance <ArrowUpRight size={16}/></Link>
      </div>
    </section>
  </main>;
}
