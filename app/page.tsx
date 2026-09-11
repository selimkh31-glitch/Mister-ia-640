import Link from "@/components/site-link";
import { ClientCases } from "@/components/client-cases";
import { WhatsAppButton } from "@/components/whatsapp";
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
  ["Concrètement, que signifie votre accompagnement ?", "D’abord vous écouter, comprendre votre métier et les besoins de votre équipe. Puis définir ensemble un premier pas utile. Si vous souhaitez poursuivre après l’audit, la mise en place, la prise en main et les modalités de suivi sont précisées au devis. Vous savez ce qui est inclus et vous gardez le choix à chaque étape."],
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
        <h1>Vous aimez votre métier.<br/>Pas les soirées à <span className="serif-word">tout rattraper.</span></h1>
        <p className="hero-intro">Les clients, les imprévus, les questions de l’équipe… Et quand la journée se termine, il reste les devis, les messages, les papiers. Vous aimeriez consacrer moins de temps à tout gérer, et plus à ce qui vous a donné envie d’entreprendre.</p>
        <div className="hero-actions"><WhatsAppButton>Parlons de ce qui vous pèse</WhatsAppButton><Link className="text-link" href="#votre-quotidien">Ça vous parle ? <ArrowUpRight size={18}/></Link></div>
        <p className="hero-note">Un accompagnement humain et local, avec Selimkhan. Pour vous et votre équipe, un besoin à la fois.</p>
      </div>
      <aside className="human-day" aria-label="Ce qui prolonge parfois la journée"><p className="eyebrow">« JE FINIS JUSTE ÇA… »</p><h2>Un devis à envoyer.<br/>Un client à rappeler.<br/>Une information à retrouver.</h2><p>Parfois, ce sont ces petites choses qui prennent toute la place.</p><div><strong>Et votre métier, dans tout ça ?</strong><p>C’est à lui qu’on veut redonner de la place.</p></div></aside>
    </section>
    <section className="wrap section funnel-pain" id="votre-quotidien" aria-labelledby="pain-title">
      <div className="section-heading"><div><p className="eyebrow">VOUS RECONNAISSEZ VOTRE QUOTIDIEN ?</p><h2 id="pain-title">Vous tenez la boutique.<br/>Mais vous ne pouvez pas être partout.</h2></div><p>Vous comme vos employés avez mieux à faire<br/>que chercher, recopier et recommencer.</p></div>
      <div className="problem-grid">{[
        { Icon: FileText, title: "Vous gardez tout dans un coin de la tête.", text: "Le devis promis, le rappel à faire, le planning à ajuster. Même ailleurs, une partie de vous reste au travail." },
        { Icon: PhoneMissed, title: "Votre équipe fait de son mieux avec ce qu’elle a.", text: "Une information introuvable, une double saisie, une interruption pour demander confirmation. Du temps pris sur le travail bien fait." },
        { Icon: Clock3, title: "Vos projets passent après les urgences.", text: "Montrer vos réalisations, lancer votre site, soigner le suivi client… Vous savez ce qui compte, mais vous manquez de place pour le faire." }
      ].map(({Icon,title,text})=><article className="problem-card" key={title}><Icon size={25}/><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="funnel-bridge">Un bon accompagnement commence par vous écouter : <strong>qu’est-ce qui vous ferait du bien, à vous et à votre équipe, dans une journée de travail ?</strong></p>
    </section>
    <section className="wrap section human-intro" aria-labelledby="human-title"><div><p className="eyebrow">DERRIÈRE MISTER IA 64, IL Y A SELIMKHAN</p><h2 id="human-title">Un accompagnement humain.<br/>Une approche d’artisan.</h2><p>Je suis votre interlocuteur au Pays Basque. Mon travail commence par une conversation sur le vôtre : ce que vous faites, ce qui coince, ce que vous aimeriez pouvoir laisser de côté.</p><p>Vous n’avez pas besoin de savoir parler « IA ». Mon accompagnement part d’un exemple concret de votre quotidien. On regarde ensemble ce qui peut être simplifié, avec vos outils et vos moyens.</p><Link className="text-link" href="/a-propos">Faire connaissance <ArrowUpRight size={18}/></Link></div><div className="human-promises"><h3>Vous accompagner, vous et votre équipe.</h3><p>Votre équipe connaît les clients, les habitudes et les exceptions. C’est avec elle qu’on repère les tâches à alléger et les décisions à garder.</p><ul><li>Un besoin concret avant un choix technique.</li><li>Des explications claires sur le travail et le prix.</li><li>Un accompagnement à la prise en main, pour vous et vos employés.</li></ul><p>L’objectif : des outils qui vous aident à travailler, sans vous rajouter un métier à apprendre.</p></div></section>
    <ClientCases auditFocus/>
    <section className="dark-section" id="audit" aria-labelledby="audit-title"><div className="wrap section funnel-offer">
      <div><p className="eyebrow">UN PREMIER PAS DANS VOTRE ACCOMPAGNEMENT</p><h2 id="audit-title">On prend une tâche qui vous pèse.<br/>On regarde comment l’alléger.</h2><p className="funnel-lead">Vous me montrez comment ça se passe aujourd’hui : un devis, une demande client, un dossier. Je regarde avec vous les allers-retours et les tâches qui pourraient être simplifiées.</p><p className="funnel-lead">Vous repartez avec des priorités concrètes et une idée du budget pour les mettre en place. Vous choisissez ensuite la suite, sans obligation de me confier la réalisation.</p></div>
      <div className="funnel-audit-card"><p className="eyebrow">AUDIT IA PERSONNALISÉ</p><p className="funnel-price">99 €</p><p>Un processus prioritaire, analysé en détail.</p><ul>{[
        "Une lecture claire des tâches et des blocages.",
        "3 à 5 pistes classées par intérêt.",
        "Un premier projet recommandé, adapté à vos moyens.",
        "Un budget estimatif et les prochaines étapes."
      ].map(item=><li key={item}><Check size={18}/><span>{item}</span></li>)}</ul><AuditButton/><p className="funnel-reassurance">Demande sur WhatsApp · Mise en place sur devis distinct · Libre de vous arrêter après l’audit</p></div>
    </div></section>
    <WebsiteOffer/>
    <section className="wrap section" aria-labelledby="steps-title"><div className="section-heading"><div><p className="eyebrow">COMMENT COMMENCE VOTRE ACCOMPAGNEMENT</p><h2 id="steps-title">Vous connaissez votre métier.<br/>Partons de là.</h2></div></div><div className="funnel-steps">{[
      ["01", "Vous nous racontez votre quotidien.", "Votre activité, une tâche qui vous ralentit et les outils que vous utilisez. Nous précisons ensemble le périmètre de l’audit."],
      ["02", "Nous examinons un cas réel.", "Nous suivons le processus, repérons les ressaisies et évaluons les possibilités d’automatisation avec vos contraintes."],
      ["03", "Vous décidez avec un plan clair.", "Nous vous présentons les priorités, un pilote recommandé et son budget estimatif. Vous choisissez si vous souhaitez poursuivre."]
    ].map(([number,title,text])=><article key={number}><span className="eyebrow">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="wrap section funnel-faq" aria-labelledby="faq-title"><div className="section-heading"><div><p className="eyebrow">AVANT DE VOUS LANCER</p><h2 id="faq-title">Vos questions,<br/>des réponses claires.</h2></div></div>{questions.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <section className="wrap funnel-final" aria-labelledby="final-title"><div className="cta-panel"><div><p className="eyebrow">COMMENÇONS PAR VOTRE ENTREPRISE</p><h2 id="final-title">Vous n’avez pas à tout porter seul.<br/>Parlons de votre accompagnement.</h2><p>Dites-moi ce que vous faites et ce qui vous prend trop de place. Nous verrons ensemble quel premier pas a du sens pour vous.</p></div><div><WhatsAppButton>Parlons de mon accompagnement</WhatsAppButton><p className="funnel-reassurance">Une première conversation. Aucun paiement ni réservation automatique.</p></div></div></section>
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
