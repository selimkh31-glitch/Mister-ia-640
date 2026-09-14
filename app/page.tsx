import Link from "@/components/site-link";
import { WhatsAppButton } from "@/components/whatsapp";
import { AuditButton } from "@/components/audit-button";
import { LocalServiceLinks } from "@/components/local-service-links";
import { ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import styles from "./home.module.css";

export const metadata = pageMetadata(
  "/",
  "Sites web, SEO local et IA au Pays Basque",
  "Mister IA 64 crée des sites internet, améliore votre visibilité locale et automatise les tâches répétitives des entreprises du Pays Basque."
);

const services = [
  ["01", "Sites internet", "Un site clair, rapide et crédible qui explique votre métier avant même le premier appel.", "/services/creation-site-web"],
  ["02", "SEO local", "Être trouvable à Saint-Jean-de-Luz, Bayonne, Biarritz, Anglet, Hendaye et autour.", "/services/seo-geo"],
  ["03", "Automatisation & IA", "Retirer les ressaisies, les oublis et les tâches répétitives qui encombrent vos journées.", "/services/automatisation-ia"],
  ["04", "Formation", "Comprendre les outils, leurs limites et rendre votre équipe réellement autonome.", "/services/formation-ia"]
];

const cases = [
  { id:"bela-lugosi", no:"01", name:"Bela Lugosi", metric:"15 000", label:"références", title:"Sortir un catalogue de Rakuten sans tout ressaisir.", text:"Un bot récupère annonces, images et descriptions, puis prépare le catalogue pour une boutique indépendante et d’autres canaux de vente.", href:"/guides/cas-client-bela-lugosi" },
  { id:"amina", no:"02", name:"Société AMINA", metric:"≈ 10", label:"appels / semaine", title:"Continuer le chantier sans laisser les prospects sans réponse.", text:"Un assistant vocal accueille les appels, recueille les informations utiles et prépare une visite pendant que le dirigeant travaille.", href:"/guides/cas-client-amina" },
  { id:"noxvault", no:"03", name:"NOXVAULT Ltd", metric:"Image + vidéo", label:"production préparée", title:"Préparer les prochaines créations avant le début de la journée.", text:"Le système analyse les contenus performants, prépare des variantes et organise la production marketing à valider.", href:"/guides/cas-client-noxvault" },
  { id:"pomas", no:"04", name:"Pomas", metric:"1 adresse", label:"comme point de départ", title:"Simplifier les démarches après la tempête.", text:"Le parcours aide à retrouver des références utiles et à préparer les documents nécessaires sans multiplier les recherches.", href:"/guides/cas-client-pomas" }
];

const faqs = [
  ["Est-ce réservé aux entreprises qui connaissent déjà l’IA ?", "Non. Vous expliquez votre métier avec vos mots. Nous traduisons ensuite les possibilités techniques en choix compréhensibles."],
  ["Que comprend le site à partir de 299 € HT ?", "Un site vitrine de 10 pages, responsive, préparé pour le SEO local, avec un blog et une formation pour vous ou votre équipe."],
  ["Faut-il commencer par l’audit IA ?", "Non. L’audit et le site sont indépendants. L’audit est utile si votre priorité est d’identifier où vous perdez du temps ou de l’information."],
  ["Vous intervenez uniquement au Pays Basque ?", "Le positionnement est local, mais certains projets peuvent aussi être menés à distance selon le besoin."],
  ["Vous remplacez nos outils actuels ?", "Pas forcément. Nous cherchons d’abord à mieux utiliser et relier ce que vous avez déjà avant d’ajouter de nouveaux outils."]
];

export default function Home() {
  return <main id="main" className={styles.page}>
    <section className={styles.hero} aria-labelledby="home-title">
      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroMeta}><span>MISTER IA 64</span><span>WEB / SEO / AUTOMATION / IA</span><span>PAYS BASQUE</span></div>
        <div className={styles.heroGrid}>
          <p className={styles.heroNumber}>64</p>
          <div className={styles.heroCopy}>
            <h1 id="home-title">VISIBLE.<br/>UTILE.<br/><em>LOCAL.</em></h1>
            <p>Des sites internet et des outils IA pour les entreprises qui veulent être mieux trouvées, mieux organisées et moins dépendantes des tâches répétitives.</p>
            <div className={styles.heroActions}><WhatsAppButton className={styles.darkButton}>Parler de mon activité</WhatsAppButton><Link className={styles.arrowLink} href="#realisations">Voir les preuves <ArrowUpRight size={18}/></Link></div>
          </div>
        </div>
        <div className={styles.heroFoot}><span>Saint-Jean-de-Luz → Bayonne → Biarritz</span><span>Pas d’IA spectacle. Du travail utile.</span></div>
      </div>
    </section>

    <section className={styles.proofStrip} aria-label="Repères Mister IA 64"><div className="wrap"><div><strong>299 € HT</strong><span>site vitrine à partir de</span></div><div><strong>99 €</strong><span>audit IA personnalisé</span></div><div><strong>15 000</strong><span>références migrées sur un cas client</span></div><div><strong>64</strong><span>ancrage local Pays Basque</span></div></div></section>

    <section className={`wrap ${styles.manifesto}`}><p className={styles.kicker}>01 — POSITIONNEMENT</p><h2>La technologie n’est pas le sujet.<br/><em>Votre activité, oui.</em></h2><p>On commence par une friction concrète : un site qui ne convainc pas, des appels manqués, un catalogue impossible à reprendre, du temps perdu à copier-coller. Ensuite seulement on choisit l’outil.</p></section>

    <section className={styles.services} aria-labelledby="services-title"><div className="wrap"><div className={styles.sectionIntro}><p className={styles.kicker}>02 — EXPERTISES</p><h2 id="services-title">CE QU’ON<br/>CONSTRUIT.</h2></div><div className={styles.serviceList}>{services.map(([n,t,d,h])=><Link href={h} className={styles.serviceRow} key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight size={22}/></Link>)}</div></div></section>

    <section className={`wrap ${styles.cases}`} id="realisations" aria-labelledby="cases-title"><div className={styles.sectionIntro}><p className={styles.kicker}>03 — PREUVES</p><h2 id="cases-title">PAS DE DÉMOS<br/><em>INVENTÉES.</em></h2></div><div className={styles.caseList}>{cases.map(c=><article id={c.id} className={styles.caseRow} key={c.id}><span className={styles.caseNo}>{c.no}</span><div className={styles.caseCopy}><p>{c.name}</p><h3>{c.title}</h3><span>{c.text}</span><Link href={c.href}>Lire le cas <ArrowUpRight size={17}/></Link></div><div className={styles.caseMetric}><strong>{c.metric}</strong><span>{c.label}</span></div></article>)}</div></section>

    <section className={styles.method} aria-labelledby="method-title"><div className={`wrap ${styles.methodGrid}`}><div className={styles.big64}>64</div><div><p className={styles.kicker}>04 — MÉTHODE</p><h2 id="method-title">Une approche d’artisan.<br/><em>Pour des outils numériques.</em></h2><p>Un interlocuteur, un besoin réel, une solution compréhensible. L’objectif est que l’outil reste au service de votre entreprise — pas l’inverse.</p><ol><li><span>01</span>Comprendre votre métier et vos contraintes.</li><li><span>02</span>Choisir le levier le plus utile.</li><li><span>03</span>Construire, tester et vous transmettre la main.</li></ol><Link href="/methode" className={styles.arrowLink}>Voir la méthode <ArrowUpRight size={18}/></Link></div></div></section>

    <section className={`wrap ${styles.offers}`} aria-labelledby="offers-title"><div className={styles.sectionIntro}><p className={styles.kicker}>05 — COMMENCER</p><h2 id="offers-title">UN PREMIER PROJET.<br/><em>PAS UNE USINE.</em></h2></div><div className={styles.offerGrid}><article><p>AUDIT IA</p><strong>99 €</strong><ul><li><Check size={18}/>Une situation réelle analysée</li><li><Check size={18}/>Les frictions prioritaires</li><li><Check size={18}/>Un premier projet recommandé</li></ul><AuditButton className={styles.darkButton}>Demander mon audit</AuditButton></article><article><p>SITE VITRINE · 10 PAGES</p><strong>299 € <small>HT</small></strong><ul><li><Check size={18}/>Responsive mobile & desktop</li><li><Check size={18}/>SEO naturel et local préparé</li><li><Check size={18}/>Blog + formation inclus</li></ul><WhatsAppButton className={styles.limeButton}>Parler de mon site</WhatsAppButton></article></div></section>

    <div className={`wrap ${styles.localWrap}`}><LocalServiceLinks/></div>

    <section className={styles.faq} aria-labelledby="faq-title"><div className="wrap"><div className={styles.sectionIntro}><p className={styles.kicker}>06 — QUESTIONS</p><h2 id="faq-title">CLAIR<br/>AVANT DE<br/><em>COMMENCER.</em></h2></div><div className={styles.faqList}>{faqs.map(([q,a],i)=><details key={q}><summary><span>0{i+1}</span>{q}</summary><p>{a}</p></details>)}</div></div></section>

    <section className={styles.finalCta}><div className="wrap"><p>MISTER IA 64 · PAYS BASQUE</p><h2>Votre prochain outil doit servir votre métier.</h2><WhatsAppButton className={styles.darkButton}>On en parle</WhatsAppButton></div></section>
  </main>;
}
