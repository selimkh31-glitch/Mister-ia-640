import Link from "@/components/site-link";
import { ArrowUpRight } from "lucide-react";
import styles from "@/app/design-lab/lab.module.css";

type Mode = "editorial" | "signal" | "kinetic";

const concepts: Record<Mode, { code:string; name:string; strap:string; headline:React.ReactNode; intro:string }> = {
  editorial: {
    code:"A",
    name:"Editorial Brutal",
    strap:"Studio numérique indépendant · Pays Basque",
    headline:<>Votre métier.<br/><em>Sans l’enrober.</em></>,
    intro:"Une direction radicalement éditoriale : du vide, une typographie expressive et des preuves réelles. L’IA reste en coulisses ; le métier du client prend toute la place."
  },
  signal: {
    code:"B",
    name:"Swiss Signal",
    strap:"WEB / SEO / AUTOMATION / IA · 64",
    headline:<>VISIBLE.<br/>UTILE.<br/><em>LOCAL.</em></>,
    intro:"Un système graphique très précis, presque signalétique. La grille, les chiffres et le contraste portent la crédibilité. Plus direct, plus commercial, plus mémorisable."
  },
  kinetic: {
    code:"C",
    name:"Kinetic Atelier",
    strap:"MISTER IA 64 — OUTILS NUMÉRIQUES POUR ENTREPRISES RÉELLES",
    headline:<>Moins de friction.<br/><em>Plus de métier.</em></>,
    intro:"Un atelier numérique sombre et cinétique : grands contrastes, rythme horizontal, contenu en mouvement contrôlé. La sensation est plus tech, mais jamais futuriste-générique."
  }
};

const cases = [
  ["01","Bela Lugosi","15 000 références","Migration e-commerce sans tout ressaisir"],
  ["02","Société AMINA","≈ 10 appels / semaine","Accueil téléphonique pendant les chantiers"],
  ["03","NOXVAULT Ltd","Image + vidéo","Créations marketing prêtes à valider"],
  ["04","Pomas","1 adresse","Démarches simplifiées après la tempête"]
];

const services = [
  ["01","Sites internet","Une présence qui explique clairement votre métier et donne confiance avant le premier appel."],
  ["02","SEO local","Être trouvable là où vos clients vous cherchent réellement : Google, local et contenus utiles."],
  ["03","Automatisation & IA","Retirer les ressaisies, les oublis et les tâches répétitives de vos journées."],
  ["04","Formation","Rendre votre équipe autonome au lieu de créer une nouvelle dépendance technique."]
];

export function DesignLabConcept({ mode }: { mode:Mode }) {
  const concept = concepts[mode];
  return <main className={`${styles.lab} ${styles[mode]}`}>
    <nav className={styles.switcher} aria-label="Changer de direction visuelle">
      <Link href="/design-lab/editorial">A</Link><Link href="/design-lab/signal">B</Link><Link href="/design-lab/kinetic">C</Link><span>{concept.name}</span>
    </nav>

    <section className={styles.hero}>
      <div className={styles.heroTop}><span>{concept.strap}</span><span>SAINT-JEAN-DE-LUZ → BAB</span></div>
      <div className={styles.heroMain}>
        <p className={styles.heroCode}>{concept.code}</p>
        <div><h1>{concept.headline}</h1><p className={styles.heroIntro}>{concept.intro}</p></div>
      </div>
      <div className={styles.heroBottom}>
        <Link href="#cases" className={styles.primary}>Voir les réalisations <ArrowUpRight size={18}/></Link>
        <span>Sites web · SEO local · automatisation · accompagnement IA</span>
      </div>
    </section>

    <section className={styles.statement}>
      <p className={styles.eyebrow}>POSITIONNEMENT</p>
      <p className={styles.statementText}>Pas d’IA spectacle. <strong>Des outils numériques qui améliorent une situation réelle.</strong> On part du métier, puis on choisit la technologie.</p>
    </section>

    <section className={styles.services}>
      <div className={styles.sectionHead}><p className={styles.eyebrow}>EXPERTISES</p><h2>Ce qu’on construit.</h2></div>
      <div className={styles.serviceList}>{services.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight size={20}/></article>)}</div>
    </section>

    <section className={styles.cases} id="cases">
      <div className={styles.sectionHead}><p className={styles.eyebrow}>PREUVES</p><h2>Pas de démos inventées.</h2></div>
      <div className={styles.caseGrid}>{cases.map(([n,name,metric,title])=><article key={n}><div className={styles.caseIndex}>{n}</div><div><p className={styles.caseName}>{name}</p><h3>{title}</h3></div><strong>{metric}</strong></article>)}</div>
    </section>

    <section className={styles.offer}>
      <div><p className={styles.eyebrow}>PREMIER PROJET</p><h2>On commence petit.<br/>Mais utile.</h2></div>
      <div className={styles.offerChoices}>
        <article><span>AUDIT IA</span><strong>99 €</strong><p>Une situation réelle, des priorités claires, un premier projet recommandé.</p></article>
        <article><span>SITE VITRINE</span><strong>299 € HT</strong><p>À partir de 10 pages, SEO local, blog et formation inclus.</p></article>
      </div>
    </section>

    <section className={styles.finalCta}>
      <p>MISTER IA 64</p><h2>Votre prochain outil doit servir votre métier.</h2><Link href="/contact">Parler de mon besoin <ArrowUpRight size={22}/></Link>
    </section>
  </main>;
}
