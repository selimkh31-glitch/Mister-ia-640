import Image from "next/image";

const flows: Record<string, { caption: string; steps: string[] }> = {
  "/guides/automatiser-relances-devis": { caption: "Exemple de suivi : une réponse du prospect suspend les relances.", steps: ["Devis envoyé", "Statut vérifié", "Relance adaptée", "Réponse : suivi suspendu"] },
  "/guides/cas-client-bela-lugosi": { caption: "Bela Lugosi : de la récupération du catalogue à sa nouvelle boutique.", steps: ["15 000 références", "Annonces et photos", "Boutique indépendante", "Import sur Amazon"] },
  "/guides/cas-client-amina": { caption: "AMINA : le parcours de la demande pendant les interventions.", steps: ["Appel reçu", "Projet qualifié", "Agenda consulté", "Visite réservée"] },
  "/guides/cas-client-noxvault": { caption: "NOXVAULT : la validation du dirigeant précède la publication.", steps: ["Publicités analysées", "Images et vidéos préparées", "Validation du dirigeant", "Publication"] },
  "/guides/cas-client-pomas": { caption: "Pomas : préparer les informations, puis vérifier le dossier avant l’envoi.", steps: ["Adresse renseignée", "Références cadastrales", "Documents préparés", "Vérification par l’habitant"] },
  "/guides/preparer-audit-ia": { caption: "Les éléments à réunir pour examiner un processus réel.", steps: ["Une tâche précise", "Un exemple réel", "Vos outils et volumes", "Des priorités à décider"] },
  "/guides/assistant-vocal-ia-artisan": { caption: "Le circuit à cadrer : la réception des appels dépend de votre installation téléphonique.", steps: ["Appel transféré", "Demande recueillie", "Disponibilités vérifiées", "Prochaine étape confirmée"] },
};
export function ArticleVisual({ path }: { path: string }) {
  const flow = flows[path];
  if (!flow) return null;
  return <figure className="article-visual">
    <ol>{flow.steps.map((step, i)=><li key={step}><span aria-hidden="true">0{i+1}</span><strong>{step}</strong></li>)}</ol>
    {path === "/guides/cas-client-bela-lugosi" && <div className="article-platforms" aria-label="Plateformes concernées"><Image src="/logos/rakuten.svg" width={105} height={32} alt="Rakuten"/><Image src="/logos/amazon.svg" width={96} height={32} alt="Amazon"/></div>}
    <figcaption>{flow.caption}</figcaption>
  </figure>;
}
