import Link from "@/components/site-link";
import { CaseSpotlight, ClientCases } from "@/components/client-cases";
import { WhatsAppButton } from "@/components/whatsapp";
import { ArrowUpRight, Check } from "lucide-react";
import { CTA } from "@/components/site-shell";
import { absolute } from "@/lib/site";
import { BusinessOffers, TrainingPrograms } from "@/components/offer-sections";
export const metadata={alternates:{canonical:absolute('/')}};
export default function Home(){return <main id="main" className="home-page">
<section className="wrap hero"><div className="hero-copy"><p className="eyebrow"><span className="tiny-cross">+</span> CONSEIL & AUTOMATISATION IA · PAYS BASQUE</p><h1>Moins de tâches.<br/>Plus de <span className="serif-word">métier.</span></h1><p className="hero-intro">Appels clients, devis, contenus, gestion : nous créons des outils IA qui allègent votre quotidien. Vous gardez la main sur votre activité.</p><div className="hero-actions"><Link className="button" href="/services/audit-ia">Mon diagnostic IA — 99 € <ArrowUpRight size={19}/></Link><WhatsAppButton className="text-link whatsapp-button-secondary"/></div><p className="hero-note">Pour les indépendants, TPE & PME du Pays Basque et à distance.</p></div>
<CaseSpotlight/></section>
<div className="principles"><div className="wrap principles-inner"><span>Du concret, dès le départ.</span><span><Check size={16}/> Vos outils, connectés</span><span><Check size={16}/> Vos décisions, préservées</span><span><Check size={16}/> Des résultats, mesurés</span></div></div>
<ClientCases/>
<BusinessOffers/>
<section className="dark-section" id="methode"><div className="wrap section"><div className="section-heading"><div><p className="eyebrow">03 / NOTRE MÉTHODE</p><h2>On comprend avant<br/>de <span className="serif-word">construire.</span></h2></div><Link className="text-link" href="/methode">Notre méthode en détail <ArrowUpRight size={18}/></Link></div><div className="method-grid">{[['01','Comprendre','On observe un processus réel et on identifie ce qui vous ralentit.'],['02','Cadrer','On priorise les pistes et on chiffre un pilote adapté à vos moyens.'],['03','Construire','On teste avec votre équipe et on documente.'],['04','Suivre','On mesure l’usage, le temps gagné et les corrections nécessaires.']].map(x=><div key={x[0]}><span className="step-num">{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div><p className="dark-note">L’IA quand elle est utile. Une automatisation simple quand elle suffit.</p></div></section>
<TrainingPrograms compact/>
<section className="wrap home-start" aria-labelledby="start-title"><div><p className="eyebrow">05 / PAR OÙ COMMENCER ?</p><h2 id="start-title">Un diagnostic.<br/>Une direction claire.</h2><p>Pour 99 €, nous analysons un processus prioritaire. Vous repartez avec 3 à 5 pistes classées, un pilote recommandé et un budget estimatif. La mise en place fait ensuite l’objet d’un devis.</p><Link className="text-link" href="/services/audit-ia">Découvrir le diagnostic à 99 € <ArrowUpRight size={18}/></Link></div><div className="home-local"><p className="eyebrow">AU PAYS BASQUE & À DISTANCE</p><h3>Un interlocuteur.<br/>Vos réalités de terrain.</h3><p>Un atelier avec votre équipe, des outils adaptés à votre fonctionnement et un suivi après la mise en place.</p><Link className="text-link" href="/pays-basque">Voir notre zone d’intervention <ArrowUpRight size={18}/></Link></div></section>
<div className="wrap"><CTA/></div></main>}
