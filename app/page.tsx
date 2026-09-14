import Image from "next/image";
import Link from "@/components/site-link";
import { WhatsAppButton } from "@/components/whatsapp";
import { WebsiteButton } from "@/components/website-offer";
import { AuditButton } from "@/components/audit-button";
import { LocalServiceLinks } from "@/components/local-service-links";
import { ArrowUpRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import styles from "./home.module.css";

export const metadata = pageMetadata(
  "/",
  "Sites web et accompagnement IA au Pays Basque",
  "Création de sites internet, SEO local, automatisation et accompagnement IA pour les entreprises du Pays Basque."
);

const frictions = [
  {
    title: "Le travail continue après la journée.",
    text: "Un devis à finir, un client à rappeler, une information à retrouver. Le problème n’est pas votre métier : ce sont les petites frictions autour qui finissent par prendre toute la place."
  },
  {
    title: "Votre savoir-faire reste trop discret.",
    text: "Vous faites du bon travail, mais votre site, votre présence Google ou vos contenus ne le montrent pas encore suffisamment. La visibilité devient une tâche de plus au lieu de soutenir l’activité."
  },
  {
    title: "Votre équipe répète ce qui pourrait être simplifié.",
    text: "Copier, classer, relancer, répondre aux mêmes questions ou ressaisir des données : certaines tâches peuvent être mieux organisées sans transformer votre entreprise en laboratoire technologique."
  }
];

const services = [
  {
    title: "Créer une présence qui donne confiance.",
    text: "Sites internet rapides, lisibles et préparés pour le référencement naturel et local. L’objectif n’est pas d’avoir un site de plus, mais un outil qui explique votre métier et aide vos futurs clients à vous choisir.",
    href: "/services/creation-site-web",
    label: "Création de site web"
  },
  {
    title: "Retirer du travail inutile de vos journées.",
    text: "Automatisation, assistants IA et intégrations entre vos outils : nous partons d’un processus réel et nous cherchons le moyen le plus simple de réduire les ressaisies, les oublis et les allers-retours.",
    href: "/services/automatisation-ia",
    label: "Automatisation & IA"
  },
  {
    title: "Rendre votre équipe autonome.",
    text: "Formation et accompagnement pour comprendre les outils, leurs limites et les bonnes pratiques. Une solution utile doit pouvoir être comprise, adoptée et pilotée par les personnes qui travaillent avec elle.",
    href: "/services/formation-ia",
    label: "Formation & accompagnement"
  }
];

const cases = [
  {
    category: "E-commerce · migration de catalogue",
    name: "Bela Lugosi",
    title: "Sortir 15 000 références de Rakuten sans tout ressaisir.",
    text: "Un bot récupère annonces, images et descriptions, puis prépare le catalogue pour la boutique indépendante et les autres canaux de vente.",
    metric: "15 000",
    metricLabel: "références transférées",
    href: "/guides/cas-client-bela-lugosi"
  },
  {
    category: "Artisanat · accueil téléphonique",
    name: "Société AMINA",
    title: "Continuer le chantier sans laisser les prospects sans réponse.",
    text: "Un assistant vocal accueille les appels, recueille les informations du projet et peut préparer une visite pendant que le dirigeant travaille.",
    metric: "≈ 10",
    metricLabel: "appels manqués par semaine au départ",
    href: "/guides/cas-client-amina"
  },
  {
    category: "E-commerce · contenus marketing",
    name: "NOXVAULT Ltd",
    title: "Préparer les prochaines créations avant le début de la journée.",
    text: "Le système analyse les contenus performants, prépare de nouvelles variantes et organise la production de contenus à valider.",
    metric: "Image + vidéo",
    metricLabel: "production préparée pour validation",
    href: "/guides/cas-client-noxvault"
  },
  {
    category: "Service public · parcours administratif",
    name: "Pomas",
    title: "Simplifier les démarches après la tempête.",
    text: "À partir d’une adresse, le parcours aide à retrouver des références utiles et à préparer les documents nécessaires sans multiplier les recherches.",
    metric: "1 adresse",
    metricLabel: "comme point de départ du parcours",
    href: "/guides/cas-client-pomas"
  }
];

const questions = [
  [
    "Concrètement, que signifie votre accompagnement ?",
    "Nous commençons par votre métier, vos outils et une situation réelle. Ensuite seulement nous regardons si un site, une automatisation, une formation ou une autre solution peut réellement améliorer le quotidien."
  ],
  [
    "Que comprend le site à partir de 299 € HT ?",
    "Un site vitrine de 10 pages, un affichage adapté aux mobiles, la préparation du référencement naturel et local, un blog SEO et une formation pour vous ou votre équipe. Le domaine et les éventuels services tiers sont précisés au devis."
  ],
  [
    "Dois-je commander un audit avant mon site ?",
    "Non. Le site web et l’audit IA sont deux offres indépendantes. Vous pouvez demander directement un site ou commencer par l’audit si votre priorité est d’améliorer un processus interne."
  ],
  [
    "Est-ce adapté à une petite entreprise ?",
    "Oui. Nous cherchons un premier projet utile et proportionné à vos moyens : visibilité locale, devis, appels, relances, contenus, organisation ou autre tâche concrète."
  ],
  [
    "Faut-il déjà savoir utiliser l’IA ?",
    "Non. Vous expliquez votre fonctionnement avec vos mots. Notre rôle est de traduire les possibilités techniques en choix compréhensibles, avec leurs limites et leur coût."
  ]
];

export default function Home() {
  return (
    <main id="main" className={styles.page}>
      <section className={`wrap ${styles.hero}`} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Studio numérique local · Pays Basque</p>
          <h1 id="home-title">
            Votre métier mérite mieux que <span className={styles.editorial}>du bricolage numérique.</span>
          </h1>
          <p className={styles.heroIntro}>
            Je crée des sites internet et des outils IA pour les entreprises qui veulent être plus visibles, mieux organisées et moins dépendantes des tâches répétitives — sans jargon et sans usine à gaz.
          </p>
          <div className={styles.heroActions}>
            <WhatsAppButton className={styles.primaryAction}>Parlons de votre activité</WhatsAppButton>
            <Link className={styles.textAction} href="#realisations">
              Voir des réalisations <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <p className={styles.heroNote}>Un interlocuteur local, de Saint-Jean-de-Luz au BAB · Sites web · SEO local · automatisation · formation IA.</p>
        </div>

        <aside className={styles.heroStudio} aria-label="Méthode de travail Mister IA 64">
          <div className={styles.studioTop}>
            <span>UNE MÉTHODE SIMPLE</span>
            <span>64</span>
          </div>
          <div className={styles.workSteps}>
            <div className={styles.workStep}>
              <span>01</span>
              <div><strong>Comprendre votre métier.</strong><p>Vos clients, vos contraintes, vos habitudes et ce qui vous prend trop de temps.</p></div>
            </div>
            <div className={styles.workStep}>
              <span>02</span>
              <div><strong>Choisir le bon levier.</strong><p>Site, référencement, automatisation ou formation : uniquement ce qui sert le besoin réel.</p></div>
            </div>
            <div className={styles.workStep}>
              <span>03</span>
              <div><strong>Construire puis transmettre.</strong><p>Une solution claire, testée, documentée et compréhensible par votre équipe.</p></div>
            </div>
          </div>
          <div className={styles.studioResult}>
            <span>Le résultat recherché</span>
            <strong>Moins de friction. Plus de métier.</strong>
          </div>
        </aside>
      </section>

      <section className={styles.proofBand} aria-label="Repères Mister IA 64">
        <div className={`wrap ${styles.proofInner}`}>
          <div className={styles.proofLead}><strong>Du concret avant la technologie.</strong><span>Chaque projet part d’un besoin métier identifiable.</span></div>
          <div className={styles.proofItem}><strong>Pays Basque</strong><span>accompagnement local et à distance</span></div>
          <div className={styles.proofItem}><strong>299 € HT</strong><span>site vitrine à partir de</span></div>
          <div className={styles.proofItem}><strong>99 €</strong><span>audit IA personnalisé</span></div>
        </div>
      </section>

      <section className={`wrap ${styles.section}`} aria-labelledby="frictions-title">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionKicker}>Votre quotidien d’abord</p>
            <h2 id="frictions-title">Le numérique doit vous faire gagner de la place.</h2>
          </div>
          <p>Pas vous rajouter une nouvelle compétence à gérer le soir. Nous cherchons les endroits où la technologie peut réellement soutenir votre activité.</p>
        </div>
        <div className={styles.frictionList}>
          {frictions.map((item, index) => (
            <article className={styles.frictionItem} key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div className={`wrap ${styles.section}`}>
          <div className={styles.sectionHead}>
            <div>
              <p className={styles.sectionKicker}>Ce que nous pouvons construire</p>
              <h2 id="services-title">Une présence forte dehors. Une organisation plus légère dedans.</h2>
            </div>
            <p>Les services sont complémentaires, mais jamais imposés en bloc. Chaque intervention doit pouvoir expliquer clairement ce qu’elle améliore.</p>
          </div>
          <div className={styles.serviceStack}>
            {services.map((service, index) => (
              <article className={styles.serviceRow} key={service.title}>
                <span className={styles.serviceIndex}>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link className={styles.textAction} href={service.href}>{service.label} <ArrowUpRight size={18} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="realisations" className={`wrap ${styles.section}`} aria-labelledby="cases-title">
        <div className={styles.sectionHead}>
          <div className={styles.casesIntro}>
            <p className={styles.sectionKicker}>Réalisations</p>
            <h2 id="cases-title">Des situations réelles. Pas des démos inventées.</h2>
          </div>
          <p>Catalogue e-commerce, appels d’un artisan, production marketing ou démarches administratives : les usages changent, la méthode reste la même.</p>
        </div>
        <div className={styles.caseList}>
          {cases.map((project, index) => (
            <article className={styles.caseRow} key={project.name}>
              <span className={styles.caseIndex}>0{index + 1}</span>
              <div className={styles.caseBody}>
                <p className={styles.sectionKicker}>{project.category} · {project.name}</p>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
              <div className={styles.caseMeta}>
                <div><strong className={styles.caseMetric}>{project.metric}</strong><small>{project.metricLabel}</small></div>
                <Link className={styles.textAction} href={project.href}>Lire le cas <ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.humanSection} aria-labelledby="human-title">
        <div className={`wrap ${styles.humanGrid}`}>
          <div className={styles.humanMedia}>
            <Image
              src="/images/accompagnement-organisation-960.webp"
              alt="Illustration d’un parcours de travail organisé avec Mister IA 64"
              width={960}
              height={640}
              sizes="(max-width: 980px) 100vw, 48vw"
            />
            <p className={styles.humanCaption}>Comprendre, organiser, puis construire. Illustration conceptuelle du processus d’accompagnement.</p>
          </div>
          <div className={styles.humanCopy}>
            <p className={styles.sectionKicker}>Derrière Mister IA 64, il y a Selimkhan</p>
            <h2 id="human-title">Une approche d’artisan pour vos outils numériques.</h2>
            <p>Je ne commence pas par vous montrer une technologie. Je commence par vous demander comment fonctionne votre entreprise. C’est ce qui permet de construire quelque chose qui vous ressemble et que votre équipe peut réellement utiliser.</p>
            <div className={styles.humanPoints}>
              <div className={styles.humanPoint}><span>01</span><strong>Un besoin concret avant un choix technique.</strong></div>
              <div className={styles.humanPoint}><span>02</span><strong>Des explications claires sur le travail, le prix et les limites.</strong></div>
              <div className={styles.humanPoint}><span>03</span><strong>Une vraie prise en main pour ne pas rester dépendant.</strong></div>
            </div>
            <div className={styles.sectionActions}><Link className={styles.textAction} href="/a-propos">Découvrir l’approche <ArrowUpRight size={18} /></Link></div>
          </div>
        </div>
      </section>

      <section id="audit" className={styles.auditSection} aria-labelledby="audit-title">
        <div className={`wrap ${styles.auditGrid}`}>
          <div className={styles.auditCopy}>
            <p className={styles.sectionKicker}>Un premier pas concret</p>
            <h2 id="audit-title">Prenons une tâche qui vous pèse. Regardons comment l’alléger.</h2>
            <p>Vous me montrez comment une situation se passe aujourd’hui. Je repère avec vous les blocages, les ressaisies et les possibilités réalistes d’amélioration. Vous repartez avec des priorités et un premier projet recommandé.</p>
          </div>
          <div className={styles.auditOffer}>
            <div className={styles.auditPrice}><span>AUDIT IA PERSONNALISÉ</span><strong>99 €</strong></div>
            <ul className={styles.auditList}>
              {["Un processus prioritaire analysé.", "3 à 5 pistes classées par intérêt.", "Un premier projet recommandé.", "Un budget estimatif et les prochaines étapes."].map(item => <li key={item}><Check size={17} aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
            <AuditButton className={styles.primaryAction}>Demander mon audit</AuditButton>
            <p className={styles.auditNote}>Demande sur WhatsApp · Aucun engagement sur la mise en place après l’audit.</p>
          </div>
        </div>
      </section>

      <section id="site-web" className={`wrap ${styles.siteOffer}`} aria-labelledby="site-title">
        <div className={styles.siteOfferGrid}>
          <div className={styles.siteOfferCopy}>
            <p className={styles.sectionKicker}>Création de site internet</p>
            <h2 id="site-title">Votre savoir-faire mérite d’être <span className={styles.editorial}>vu et compris.</span></h2>
            <p>Pour une création d’entreprise ou une présence web à reprendre, je construis un site vitrine clair, rapide et pensé pour le référencement local. Vous repartez aussi avec la formation nécessaire pour modifier vos contenus.</p>
            <div className={styles.sectionActions}>
              <Link className={styles.textAction} href="/services/creation-site-web">Voir l’offre site web <ArrowUpRight size={18} /></Link>
            </div>
          </div>
          <div className={styles.sitePricePanel}>
            <p className={styles.sectionKicker}>SITE VITRINE · 10 PAGES</p>
            <p className={styles.sitePrice}>299 € <small>HT · À PARTIR DE</small></p>
            <div className={styles.siteIncludes}>
              <div><span>Structure</span><strong>10 pages</strong></div>
              <div><span>Visibilité</span><strong>SEO naturel + local</strong></div>
              <div><span>Contenu</span><strong>Blog SEO préparé</strong></div>
              <div><span>Autonomie</span><strong>Formation incluse</strong></div>
              <div><span>Responsive</span><strong>Mobile + ordinateur</strong></div>
            </div>
            <div className={styles.sectionActions}><WebsiteButton className={styles.primaryAction}>Parlons de mon site</WebsiteButton></div>
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.faq}`} aria-labelledby="faq-title">
        <div className={styles.faqGrid}>
          <div className={styles.faqIntro}>
            <p className={styles.sectionKicker}>Questions fréquentes</p>
            <h2 id="faq-title">Comprendre avant de décider.</h2>
          </div>
          <div className={styles.faqList}>
            {questions.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className={`wrap ${styles.localLinks}`}><LocalServiceLinks /></div>

      <section className={`wrap ${styles.section}`} aria-labelledby="final-title">
        <div className={styles.finalCta}>
          <div>
            <p className={styles.localTag}>Mister IA 64 · Pays Basque</p>
            <h2 id="final-title">Parlons de votre métier avant de parler d’IA.</h2>
            <p>Dites-moi ce que vous faites, ce que vous voulez développer et ce qui vous prend trop de temps. Nous verrons quel premier pas a réellement du sens.</p>
          </div>
          <WhatsAppButton className={styles.lightAction}>Démarrer la conversation</WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
