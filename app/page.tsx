import Image from "next/image";
import Link from "@/components/site-link";
import { WhatsAppButton } from "@/components/whatsapp";
import { WebsiteButton } from "@/components/website-offer";
import { AuditButton } from "@/components/audit-button";
import { LocalServiceLinks } from "@/components/local-service-links";
import { ArrowDownRight, ArrowUpRight, Check, MoveRight } from "lucide-react";
import { pageMetadata } from "@/lib/page-metadata";
import styles from "./home.module.css";

export const metadata = pageMetadata(
  "/",
  "Sites web, SEO local & IA au Pays Basque",
  "Mister IA 64 crée des sites internet, automatise les tâches répétitives et accompagne les entreprises du Pays Basque dans l’usage concret de l’IA."
);

const services = [
  {
    index: "01",
    kicker: "Visibilité",
    title: "Un site qui donne envie de vous appeler.",
    text: "Une présence claire, rapide et locale, pensée pour Google autant que pour les personnes qui découvrent votre entreprise. Pas un template de plus : un site qui explique pourquoi vous choisir.",
    href: "/services/creation-site-web",
    cta: "Création de site web"
  },
  {
    index: "02",
    kicker: "Organisation",
    title: "Moins de copier-coller. Moins d’oubli. Plus de métier.",
    text: "Nous partons d’une vraie tâche — appels, devis, relances, contenus, catalogue, suivi — puis nous construisons l’automatisation la plus simple qui ait du sens.",
    href: "/services/automatisation-ia",
    cta: "Automatisation & IA"
  },
  {
    index: "03",
    kicker: "Autonomie",
    title: "Des outils que votre équipe comprend vraiment.",
    text: "Formation, documentation et accompagnement pour que l’IA reste un levier utile, pas une boîte noire supplémentaire dans votre entreprise.",
    href: "/services/formation-ia",
    cta: "Formation & accompagnement"
  }
];

const cases = [
  {
    number: "01",
    client: "Bela Lugosi",
    category: "E-commerce · migration",
    statement: "15 000 références sorties de Rakuten sans deux années de ressaisie.",
    detail: "Extraction des annonces, récupération des images et descriptions, préparation de la boutique indépendante et des autres canaux de vente.",
    metric: "15 000",
    unit: "références",
    href: "/guides/cas-client-bela-lugosi"
  },
  {
    number: "02",
    client: "Société AMINA",
    category: "Artisanat · appels",
    statement: "Le dirigeant reste sur le chantier. Les prospects, eux, obtiennent une réponse.",
    detail: "Un assistant vocal recueille le besoin, les coordonnées et prépare la prise de rendez-vous pendant que l’artisan travaille.",
    metric: "≈ 10",
    unit: "appels manqués / semaine au départ",
    href: "/guides/cas-client-amina"
  },
  {
    number: "03",
    client: "NOXVAULT Ltd",
    category: "E-commerce · marketing",
    statement: "Les prochaines créations sont déjà prêtes quand la journée commence.",
    detail: "Analyse des contenus performants, préparation de nouvelles variantes et organisation de la production image + vidéo à valider.",
    metric: "Image + vidéo",
    unit: "production préparée",
    href: "/guides/cas-client-noxvault"
  },
  {
    number: "04",
    client: "Pomas",
    category: "Parcours administratif",
    statement: "Après la tempête, une adresse suffit pour commencer les démarches.",
    detail: "Le parcours aide les habitants à retrouver les références utiles et à préparer leurs documents sans multiplier les recherches.",
    metric: "1 adresse",
    unit: "comme point de départ",
    href: "/guides/cas-client-pomas"
  }
];

const questions = [
  ["Vous travaillez uniquement avec des entreprises du Pays Basque ?", "Le Pays Basque est notre ancrage local, mais certains projets peuvent aussi être menés à distance. Pour les missions locales, l’avantage est simple : nous pouvons comprendre le terrain, les clients et l’activité sans tout faire par écran interposé."],
  ["Que comprend le site à partir de 299 € HT ?", "Un site vitrine de 10 pages, adapté au mobile, avec une base SEO naturel et local, un blog prêt à publier et une formation pour vous ou votre équipe. Le nom de domaine et les éventuels services tiers restent séparés."],
  ["Faut-il commencer par l’audit IA à 99 € ?", "Non. L’audit est utile quand vous voulez d’abord comprendre où l’IA ou l’automatisation peuvent vous faire gagner du temps. Pour un besoin clair de site internet, nous pouvons commencer directement par le projet web."],
  ["Je ne connais rien à l’IA, c’est un problème ?", "Non. Vous connaissez votre entreprise ; c’est l’essentiel. Nous nous chargeons de traduire les possibilités techniques en choix concrets, compréhensibles et proportionnés à vos moyens."],
  ["Est-ce que je reste dépendant de vous ensuite ?", "L’objectif est l’inverse. Quand c’est pertinent, nous prévoyons la prise en main, la documentation et la formation pour que vous puissiez gérer ce qui doit l’être sans nous appeler pour chaque modification."]
];

export default function Home() {
  return (
    <main id="main" className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroEyebrow}>
            <span>Mister IA 64</span>
            <span>Pays Basque · France</span>
          </div>

          <div className={styles.heroMain}>
            <h1 id="home-title">
              Votre entreprise n’a pas besoin de <em>plus de tech.</em>
              <span>Elle a besoin de mieux.</span>
            </h1>
            <div className={styles.heroSideCopy}>
              <p>Sites web, visibilité locale et automatisations utiles pour les entreprises qui veulent avancer sans transformer leur métier en projet informatique.</p>
              <div className={styles.heroActions}>
                <WhatsAppButton className={styles.heroCta}>Parler de mon entreprise</WhatsAppButton>
                <Link href="#work" className={styles.heroTextLink}>Voir le travail <ArrowDownRight size={18}/></Link>
              </div>
            </div>
          </div>

          <div className={styles.heroFooter}>
            <div><strong>299 € HT</strong><span>Site vitrine · à partir de</span></div>
            <div><strong>99 €</strong><span>Audit IA personnalisé</span></div>
            <div><strong>Local</strong><span>Saint-Jean-de-Luz · BAB · Pays Basque</span></div>
            <div className={styles.heroScroll}><span>Descendre</span><MoveRight size={18}/></div>
          </div>
        </div>
      </section>

      <section className={styles.statement} aria-labelledby="statement-title">
        <div className="wrap">
          <p className={styles.microLabel}>Notre rôle</p>
          <h2 id="statement-title">Faire disparaître la technique derrière une expérience <em>claire, utile et humaine.</em></h2>
          <div className={styles.statementGrid}>
            <p>Vous connaissez vos clients, votre métier et vos contraintes. C’est notre point de départ. Nous intervenons là où le numérique peut vraiment aider : être trouvé, mieux présenter votre travail, répondre plus vite ou retirer des tâches répétitives.</p>
            <p>On ne vous vend pas “de l’IA”. On construit quelque chose qui doit pouvoir se résumer en une phrase simple : <strong>voilà ce que ça change pour votre entreprise.</strong></p>
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div className="wrap">
          <div className={styles.sectionLead}>
            <p className={styles.microLabel}>03 leviers</p>
            <h2 id="services-title">Visible dehors.<br/>Plus léger dedans.</h2>
          </div>
          <div className={styles.serviceList}>
            {services.map((service) => (
              <article key={service.index} className={styles.serviceItem}>
                <div className={styles.serviceNumber}>{service.index}</div>
                <div className={styles.serviceTitle}>
                  <p>{service.kicker}</p>
                  <h3>{service.title}</h3>
                </div>
                <div className={styles.serviceCopy}>
                  <p>{service.text}</p>
                  <Link href={service.href}>{service.cta} <ArrowUpRight size={17}/></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className={styles.work} aria-labelledby="work-title">
        <div className="wrap">
          <div className={styles.workHeader}>
            <div>
              <p className={styles.microLabel}>Travail réel</p>
              <h2 id="work-title">Pas de démo fictive.<br/><em>Des problèmes résolus.</em></h2>
            </div>
            <p>Quatre contextes très différents, une même règle : partir du terrain avant de choisir la technologie.</p>
          </div>

          <div className={styles.caseStack}>
            {cases.map((item, index) => (
              <article key={item.client} className={`${styles.case} ${index % 2 ? styles.caseAlt : ""}`}>
                <div className={styles.caseTop}>
                  <span>{item.number}</span>
                  <span>{item.category}</span>
                  <span>{item.client}</span>
                </div>
                <div className={styles.caseMain}>
                  <h3>{item.statement}</h3>
                  <div className={styles.caseInfo}>
                    <div className={styles.caseMetric}><strong>{item.metric}</strong><span>{item.unit}</span></div>
                    <p>{item.detail}</p>
                    <Link href={item.href}>Voir le cas <ArrowUpRight size={17}/></Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.human} aria-labelledby="human-title">
        <div className={`wrap ${styles.humanGrid}`}>
          <div className={styles.humanImage}>
            <Image src="/images/accompagnement-organisation-960.webp" width={960} height={640} sizes="(max-width: 900px) 100vw, 48vw" alt="Illustration du travail d’organisation et d’accompagnement proposé par Mister IA 64"/>
            <div className={styles.imageStamp}>MIA / 64</div>
          </div>
          <div className={styles.humanCopy}>
            <p className={styles.microLabel}>Derrière le nom</p>
            <h2 id="human-title">Un interlocuteur.<br/><em>Pas une agence fantôme.</em></h2>
            <p>Je m’appelle Selimkhan. Mon travail est de comprendre votre activité assez bien pour construire des outils qui paraissent évidents à utiliser. Vous n’avez pas besoin de parler technique pour travailler avec moi.</p>
            <div className={styles.principles}>
              <div><span>01</span><p>On part d’un besoin réel, jamais d’un outil à placer.</p></div>
              <div><span>02</span><p>Le prix, les limites et ce qui reste à votre charge sont expliqués.</p></div>
              <div><span>03</span><p>Quand c’est pertinent, votre équipe apprend à reprendre la main.</p></div>
            </div>
            <Link className={styles.inlineLink} href="/a-propos">Découvrir l’approche <ArrowUpRight size={17}/></Link>
          </div>
        </div>
      </section>

      <section className={styles.audit} id="audit" aria-labelledby="audit-title">
        <div className={`wrap ${styles.auditGrid}`}>
          <div>
            <p className={styles.microLabel}>Audit IA · 99 €</p>
            <h2 id="audit-title">Montrez-moi une tâche qui vous fait perdre du temps.</h2>
          </div>
          <div className={styles.auditOffer}>
            <p>Nous prenons un processus réel, nous regardons où ça coince et vous repartez avec les pistes prioritaires, un premier projet recommandé et une estimation de la suite.</p>
            <ul>
              <li><Check size={18}/> 1 processus analysé en détail</li>
              <li><Check size={18}/> 3 à 5 pistes classées par intérêt</li>
              <li><Check size={18}/> budget et prochaines étapes</li>
            </ul>
            <AuditButton className={styles.darkCta}>Demander mon audit — 99 €</AuditButton>
          </div>
        </div>
      </section>

      <section className={styles.website} aria-labelledby="website-title">
        <div className={`wrap ${styles.websiteGrid}`}>
          <div className={styles.websiteLead}>
            <p className={styles.microLabel}>Création de site</p>
            <h2 id="website-title">Votre savoir-faire mérite mieux qu’une page Facebook abandonnée.</h2>
            <p>Pour les indépendants, artisans et petites entreprises : un site vitrine clair, rapide, local et suffisamment simple pour être repris ensuite.</p>
            <Link className={styles.inlineLink} href="/services/creation-site-web">Voir l’offre complète <ArrowUpRight size={17}/></Link>
          </div>
          <div className={styles.websitePrice}>
            <p>À partir de</p>
            <strong>299 €</strong>
            <span>HT · 10 pages</span>
            <div className={styles.websiteIncludes}>
              <span>SEO naturel + local</span>
              <span>Blog prêt à publier</span>
              <span>Mobile + ordinateur</span>
              <span>Formation incluse</span>
            </div>
            <WebsiteButton className={styles.heroCta}>Parler de mon site</WebsiteButton>
          </div>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <div className="wrap">
          <div className={styles.faqHeader}><p className={styles.microLabel}>Questions fréquentes</p><h2 id="faq-title">Avant de commencer.</h2></div>
          <div className={styles.faqList}>
            {questions.map(([q, a], i) => (
              <details key={q} className={styles.faqItem}>
                <summary><span>0{i + 1}</span>{q}<ArrowDownRight size={19}/></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-title">
        <div className={`wrap ${styles.finalGrid}`}>
          <h2 id="final-title">Vous connaissez votre métier.<br/><em>Parlons du reste.</em></h2>
          <div>
            <p>Expliquez-moi simplement ce que vous faites et ce que vous aimeriez améliorer. On partira de là.</p>
            <WhatsAppButton className={styles.lightCta}>Écrire sur WhatsApp</WhatsAppButton>
          </div>
        </div>
      </section>

      <div className={styles.localLinks}><div className="wrap"><LocalServiceLinks/></div></div>
    </main>
  );
}
