import type { ContentPage } from "./content";

export const acquisitionGuides: ContentPage[] = [
  {
    path: "/guides/preparer-audit-ia",
    kicker: "GUIDE DIRIGEANT · AUDIT IA",
    title: "Comment préparer un audit IA dans une petite entreprise ?",
    lead: "Un exemple réel, les étapes suivies et quelques volumes suffisent pour commencer. Voici comment préparer un audit utile, même si vous n’utilisez pas encore l’IA.",
    kind: "guide", price: null, sources: [],
    sections: [
      { title: "Choisir une tâche avec un début et une fin", paragraphs: [
        "Commencez par un circuit que votre équipe connaît : de la demande de devis à son envoi, de l’appel client à la prise de rendez-vous, ou de la réception d’une fiche fournisseur à sa publication. Une demande comme « automatiser toute l’entreprise » ne permet pas de comparer les options ni de vérifier un résultat.",
        "Notez ce qui déclenche le travail, la personne qui s’en occupe et ce qui permet de dire qu’il est terminé. Si plusieurs difficultés se croisent, retenez d’abord celle qui revient régulièrement et dont les informations sont accessibles."
      ], items: ["Le déclencheur : email reçu, appel, commande ou échéance.", "Le résultat attendu : devis validé, rendez-vous confirmé ou fiche publiée.", "La personne qui décide lorsque le cas sort de l’ordinaire."] },
      { title: "Préparer un exemple courant et une exception", paragraphs: [
        "Un modèle vide décrit rarement tout le travail. Préparez un cas terminé, avec les étapes intermédiaires : recherche d’information, copie dans un tableau, vérification, correction et validation. Ajoutez un cas plus difficile, par exemple une adresse incomplète ou une demande ambiguë.",
        "Masquez les noms, coordonnées et informations commerciales qui ne sont pas nécessaires à la démonstration. Un premier échange ne nécessite pas de transmettre les mots de passe ou l’intégralité de votre base clients."
      ], items: [] },
      { title: "Mesurer le travail avant de parler de gains", paragraphs: [
        "Relevez le nombre de dossiers traités sur une semaine représentative et le temps passé sur quelques exemples. Séparez la durée de travail de la durée d’attente : un devis envoyé trois jours plus tard n’a pas forcément demandé trois jours de préparation.",
        "Exemple de calcul, sans lien avec un résultat client : 20 dossiers à 12 minutes représentent 4 heures de traitement. Si la vérification humaine reste nécessaire, son temps doit être déduit du gain potentiel. Le calcul doit aussi intégrer les corrections et les coûts récurrents."
      ], items: ["Volume et variations selon la saison.", "Temps de préparation, validation et reprise.", "Erreurs fréquentes et coût des outils déjà utilisés."] },
      { title: "Ce qu’une restitution doit vous permettre de décider", paragraphs: [
        "Une recommandation utile précise le premier processus à améliorer, les connexions nécessaires, les étapes conservées par l’équipe et un budget estimatif. Elle peut aussi recommander de mieux utiliser une fonction de votre logiciel actuel.",
        "Chez Mister IA 64, le diagnostic personnalisé à 99 € analyse un processus prioritaire et restitue 3 à 5 pistes classées avec un pilote recommandé. Le développement, les licences et une éventuelle formation sont cadrés séparément. Vous pouvez décider de vous arrêter après l’audit."
      ], items: [] }
    ],
    faq: [{q:"Qui doit participer à l’audit ?",a:"Le dirigeant pour les priorités et la personne qui réalise la tâche pour les étapes réelles. Dans une petite structure, il peut s’agir de la même personne."},{q:"Faut-il changer de logiciel ?",a:"Pas nécessairement. Nous examinons d’abord les fonctions et les possibilités de connexion des outils existants."}],
    links: ["/services/audit-ia", "/guides/calculer-roi-automatisation", "/diagnostic"]
  },
  {
    path: "/guides/assistant-vocal-ia-artisan",
    kicker: "GUIDE ARTISAN · APPELS & RENDEZ-VOUS",
    title: "Artisan : vous ratez des appels sur chantier, quelles solutions ?",
    lead: "Un assistant vocal peut accueillir un appel, qualifier une demande et proposer une visite de chantier. Son utilité dépend surtout du routage téléphonique, de vos règles et de votre agenda.",
    kind: "guide", price: null, sources: [],
    sections: [
      { title: "Le besoin : accueillir les demandes pendant les interventions", paragraphs: [
        "Lorsque vous êtes sur chantier, répondre immédiatement n’est pas toujours possible. L’objectif d’un assistant est de recueillir une demande exploitable : qui appelle, pour quel travail, à quelle adresse et avec quelles disponibilités. Il doit aussi préciser ce qui sera confirmé par vous.",
        "Dans le cas de la société AMINA, le dirigeant nous a décrit environ dix appels manqués par semaine. Nous avons mis en place un assistant vocal qui qualifie les demandes et organise les visites selon son calendrier. Ce volume décrit sa situation de départ ; il ne constitue pas une prévision de résultat pour un autre artisan."
      ], items: [] },
      { title: "Répondeur, créneaux de rappel ou assistant : choisir selon le besoin", paragraphs: [
        "Si les appels manqués sont peu nombreux, commencez par un message d’accueil précis et des créneaux de rappel que vous pouvez tenir. Demandez au prospect de laisser son nom, sa commune et la nature du projet : ces informations facilitent le retour d’appel.",
        "Si vous devez dialoguer immédiatement avec chaque personne, examinez la possibilité d’un accueil par votre équipe ou d’une permanence. Un assistant vocal est une autre piste lorsque les premières questions et la prise de rendez-vous suivent des règles claires. Le choix dépend du volume, de la complexité des demandes et de la personne disponible pour reprendre les cas particuliers."
      ], items: [] },
      { title: "La connexion téléphonique se vérifie avant le scénario", paragraphs: [
        "Un assistant ne répare pas la couverture mobile. Il faut vérifier comment les appels lui parviennent : numéro dédié, standard ou renvoi géré par votre opérateur. Le fonctionnement quand le téléphone est éteint, occupé ou hors réseau doit être testé dans votre configuration.",
        "Prévoyez un message de secours et un moyen de retrouver les demandes si un service devient indisponible. Un projet doit inclure ces cas réels, et pas seulement une démonstration où tous les outils répondent."
      ], items: ["Vérifier le numéro conservé et le mode de transfert.", "Tester un appel hors couverture et un appel interrompu.", "Définir qui reçoit le compte rendu et par quel canal."] },
      { title: "Qualifier sans promettre un prix ou un délai", paragraphs: [
        "Le scénario pose quelques questions ciblées : nature des travaux, localisation, contexte et coordonnées de rappel. Il confirme les informations sensibles, notamment un nom, un numéro ou une adresse mal entendus. Une demande complexe doit pouvoir revenir à une personne.",
        "Pour proposer une visite, l’agenda doit tenir compte des déplacements, de la durée prévue et des plages réservées. Une visite de chantier n’est ni un devis accepté ni un engagement sur une date de réalisation des travaux. Le langage de l’assistant doit conserver cette distinction."
      ], items: [] },
      { title: "Évaluer l’intérêt avec vos propres données", paragraphs: [
        "Relevez les appels manqués, les demandes réellement pertinentes, les rendez-vous obtenus et ceux qui aboutissent à une vente. Comparez ensuite la marge attribuable aux nouveaux dossiers avec l’installation, les communications et le suivi. Le chiffre d’affaires seul ne mesure pas la rentabilité.",
        "Le diagnostic examine ce parcours avant de recommander une solution. La voix, les messages d’accueil, les informations conservées et les modalités de reprise humaine sont définis dans le cadrage."
      ], items: [] }
    ],
    faq: [{q:"Peut-il prendre rendez-vous directement ?",a:"Oui si la connexion à l’agenda et les règles de disponibilité le permettent. Sinon, il peut recueillir les créneaux souhaités pour une confirmation humaine."},{q:"Peut-il remplacer toutes les conversations ?",a:"Non. Les demandes inhabituelles, les engagements commerciaux et les situations qui nécessitent votre jugement doivent être orientés vers vous."}],
    links: ["/guides/cas-client-amina", "/services/agents-ia", "/services/gestion-plannings", "/#amina", "/services/audit-ia"]
  },
  {
    path: "/guides/migration-catalogue-ecommerce",
    kicker: "GUIDE E-COMMERCE · MIGRATION DE CATALOGUE",
    title: "Migrer un catalogue e-commerce sans ressaisir toutes les fiches",
    lead: "Une migration réussie conserve les références, les bonnes images et les informations de vente. Voici les points à cadrer avant de transférer un catalogue vers une nouvelle boutique.",
    kind: "guide", price: null, sources: [],
    sections: [
      { title: "Faire l’inventaire avant l’extraction", paragraphs: [
        "Comptez les produits, les variantes et les annonces séparément. Une fiche avec plusieurs tailles n’est pas forcément une seule référence dans la boutique cible. Repérez les identifiants qui permettront d’associer le produit à ses images, son stock et son prix.",
        "Listez les moyens d’accès disponibles dans votre compte : export, API ou autre récupération autorisée. Vérifiez aussi quels contenus vous pouvez réutiliser. Le fait qu’une annonce soit visible ne dispense pas de vérifier les conditions d’accès et les droits sur ses images."
      ], items: ["Identifiants source et référence de destination.", "Titre, description, catégorie, variantes et état.", "Images, prix, devise et stock disponible."] },
      { title: "Préparer la correspondance entre les deux catalogues", paragraphs: [
        "Le format de la source correspond rarement exactement à celui de la destination. Définissez une table de correspondance : quel champ devient le titre, comment les variantes sont regroupées et quelles catégories reçoivent les produits. Les informations absentes doivent être signalées.",
        "Une image doit être associée à une référence stable, pas simplement à la position d’une ligne dans un fichier. Conservez également une trace des références déjà importées pour relancer une opération sans créer de doublons."
      ], items: [] },
      { title: "Ce qui a été mis en place pour Bela Lugosi", paragraphs: [
        "Bela Lugosi devait reprendre 15 000 références de sa boutique Rakuten et ne disposait pas d’un export exploitable pour son projet. Nous avons créé un bot de récupération des annonces, photos et descriptions, puis sa propre boutique avec import des références, association des images, tarification assistée et import sur Amazon.",
        "Le client estime le travail manuel évité à deux années de saisie. L’intérêt opérationnel était aussi de poursuivre les ventes pendant la transition. Ce retour décrit ce projet ; le temps nécessaire pour un autre catalogue dépend de ses données et des plateformes concernées."
      ], items: [] },
      { title: "Tester un échantillon, puis contrôler la bascule", paragraphs: [
        "Choisissez un lot qui représente les difficultés du catalogue : variantes, photos multiples, informations manquantes et catégories particulières. Comparez les fiches importées aux sources avant de généraliser. Vérifiez les descriptions, les images, les prix et les statuts de publication.",
        "Si les ventes continuent sur la boutique initiale, définissez comment reprendre les variations de stock et les modifications intervenues pendant le transfert. Un import de catalogue ne suffit pas à garantir une synchronisation des stocks ou la publication sur toutes les places de marché."
      ], items: ["Comparer les nombres de références et les erreurs d’import.", "Contrôler les prix et les images sur un lot représentatif.", "Prévoir une reprise après erreur et la conservation des exports.", "Vérifier les exigences propres à chaque canal de vente."] }
    ],
    faq: [{q:"Peut-on importer automatiquement sur Amazon ?",a:"Cela dépend du compte, des catégories, des identifiants produits et des exigences de publication. Ces conditions doivent être vérifiées pour votre catalogue."},{q:"L’audit à 99 € comprend-il la migration ?",a:"Non. Il peut cadrer un processus prioritaire lié au catalogue. L’extraction, la nouvelle boutique, les imports et la synchronisation éventuelle font l’objet d’un devis distinct."}],
    links: ["/guides/cas-client-bela-lugosi", "/services/automatisation-ia", "/#bela-lugosi", "/services/audit-ia"]
  }
];
