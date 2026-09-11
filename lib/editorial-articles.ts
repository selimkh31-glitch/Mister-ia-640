import type { ContentPage } from "./content";

export const editorialArticles: ContentPage[] = [
  {
    path: "/guides/automatiser-relances-devis",
    kicker: "GUIDE PRATIQUE · RELANCES COMMERCIALES",
    title: "Comment automatiser les relances de devis sans harceler vos prospects ?",
    lead: "Une bonne relance reprend le contexte, facilite la réponse et s’arrête au bon moment. Voici comment organiser le suivi de vos devis avant de le confier à un outil.",
    kind: "guide", price: null, sources: [],
    sections: [
      { title: "Commencer par savoir quels devis attendent une réponse", paragraphs: [
        "Le problème commence souvent avant le message de relance. Le devis est envoyé depuis un logiciel, la réponse arrive par email et une précision est donnée au téléphone. Si personne ne rapproche ces informations, une relance automatique peut repartir alors que le client a déjà répondu.",
        "Choisissez un endroit où le statut du devis fait référence : votre logiciel commercial, votre CRM ou un tableau suivi régulièrement. Pour chaque devis, conservez un identifiant, une date d’envoi, le contact, le statut et la prochaine action. Le statut doit pouvoir changer dès qu’une réponse arrive."
      ], items: ["En attente : aucune réponse reçue.", "En discussion : une question ou une modification à traiter.", "Accepté, refusé ou reporté : arrêter le scénario initial."] },
      { title: "Fixer une cadence adaptée à votre cycle de vente", paragraphs: [
        "Un petit dépannage et un chantier de plusieurs mois ne se décident pas au même rythme. Définissez le calendrier selon la prestation, la date évoquée avec le prospect et les échanges déjà réalisés. Si le client vous a demandé de le rappeler dans deux semaines, cette information doit primer.",
        "Exemple de départ à adapter : un premier message quelques jours après l’envoi pour vérifier la réception, puis un second après le délai de réflexion convenu. En l’absence de réponse, le dossier peut passer à une revue manuelle au lieu de recevoir une série de messages identiques."
      ], items: [] },
      { title: "Rédiger un message qui aide le client à avancer", paragraphs: [
        "La première relance peut rester très simple : « Bonjour, avez-vous bien reçu le devis pour votre projet ? Je reste disponible si un point mérite d’être précisé. » Une référence au projet et une question claire sont souvent plus utiles qu’un long argumentaire.",
        "Pour la suivante : « Bonjour, souhaitez-vous avancer sur ce projet, ajuster le devis ou le reporter ? Votre retour me permettra d’organiser la suite. » Ce sont des exemples de rédaction, à personnaliser avec votre ton et la situation du client.",
        "Évitez de laisser un système inventer une réduction, une date de disponibilité ou une urgence commerciale. Les prix et les engagements doivent venir de vos informations validées."
      ], items: [] },
      { title: "Automatiser le suivi avec des règles d’arrêt", paragraphs: [
        "Le scénario vérifie d’abord que le devis attend toujours une réponse. Il prépare ou envoie le message sur le canal prévu, consigne l’action, puis calcule l’étape suivante. Une réponse, un refus ou une acceptation doit suspendre le circuit.",
        "Prévoyez également les doublons, les contacts incomplets et les échanges téléphoniques. Votre équipe doit pouvoir mettre une relance en pause sans modifier tout le système. Lors du démarrage, une validation des premiers messages permet de corriger le ton et les règles."
      ], items: ["Vérifier le statut juste avant l’envoi.", "Suspendre dès qu’un échange reprend.", "Ne pas relancer deux fois le même devis à la même étape.", "Transmettre les réponses à la personne responsable."] },
      { title: "Mesurer les réponses utiles et le travail réellement évité", paragraphs: [
        "Suivez le nombre de dossiers oubliés, les réponses obtenues et le temps consacré au suivi. Le nombre de messages envoyés n’indique pas à lui seul que le système aide à vendre. Regardez aussi les relances inappropriées et les corrections demandées à votre équipe.",
        "Vous souhaitez savoir si vos outils permettent ce fonctionnement ? L’audit personnalisé à 99 € examine un processus prioritaire, ses points de blocage et les améliorations envisageables. La mise en place est ensuite chiffrée séparément."
      ], items: [] }
    ],
    faq: [{q:"Faut-il utiliser l’IA pour envoyer une relance ?",a:"Pas forcément. Une règle de délai et un modèle de message peuvent suffire. L’IA peut aider à préparer un texte adapté au contexte, à condition de disposer d’informations fiables."},{q:"Et si le client répond par téléphone ?",a:"La personne qui prend l’appel doit pouvoir mettre à jour le statut ou suspendre le suivi. Sans cette étape, le système ne peut pas connaître l’échange."}],
    links: ["/solutions/automatiser-relances", "/services/facturation-relances", "/guides/preparer-audit-ia", "/services/audit-ia"]
  },
  {
    path: "/guides/cas-client-bela-lugosi",
    kicker: "CAS CLIENT · BELA LUGOSI",
    title: "Bela Lugosi : transférer 15 000 références depuis Rakuten et continuer à vendre",
    lead: "Un catalogue important à récupérer, une boutique à recréer et des images à associer. Pour Bela Lugosi, l’automatisation a permis d’organiser la transition sans reprendre chaque annonce à la main.",
    kind: "guide", price: null, sources: [],
    sections: [
      { title: "Le problème : une activité dépendante d’un catalogue à reprendre", paragraphs: [
        "Bela Lugosi exploitait une boutique Rakuten dont la fermeture était prévue en fin d’année. Il devait récupérer 15 000 fiches produits et ne disposait pas d’un export exploitable pour son projet. Reprendre les annonces une par une signifiait aussi récupérer les photos, les descriptions et les informations de vente.",
        "Le besoin dépassait donc la simple copie de textes. Il fallait conserver un ensemble cohérent : chaque référence avec ses bonnes images et ses données, puis préparer sa présence dans une nouvelle boutique. Pendant ce travail, le client devait pouvoir poursuivre son activité."
      ], items: [] },
      { title: "La récupération des annonces et de leurs contenus", paragraphs: [
        "Nous avons créé un bot qui a récupéré les annonces, leurs descriptions et leurs photos. Le catalogue est ainsi devenu une base réutilisable pour la suite du projet, au lieu d’une succession de fiches à ouvrir et à ressaisir manuellement.",
        "L’association entre les références et les images était un élément central. Une photo récupérée ne sert pas à grand-chose si elle n’est plus rattachée au bon article : l’import devait préserver cette correspondance."
      ], items: ["Récupération des annonces et descriptions.", "Récupération des photos liées aux produits.", "Préparation des références pour leur import."] },
      { title: "Une boutique indépendante et un import sur Amazon", paragraphs: [
        "Nous avons ensuite créé sa propre boutique et automatisé l’import des 15 000 références. Le projet comprenait l’association des images, une tarification assistée et un import sur Amazon.",
        "Ces étapes répondaient à une continuité précise : récupérer l’existant, le rendre exploitable dans une nouvelle boutique et préparer un autre canal de vente. Les conditions d’un transfert comparable dépendent du catalogue, des accès disponibles et des exigences de la plateforme de destination."
      ], items: [] },
      { title: "Le résultat pour le client", paragraphs: [
        "Le client estime le travail manuel évité à deux années de saisie. Cette estimation vient de son appréciation du travail qu’aurait demandé une reprise manuelle. Le bénéfice opérationnel est aussi de pouvoir continuer à vendre pendant la transition.",
        "La leçon de ce projet : un grand volume de tâches répétitives mérite d’être examiné avant d’organiser leur exécution manuelle. L’audit permet d’identifier les informations disponibles, les obstacles au transfert et le premier périmètre à traiter."
      ], items: [] }
    ],
    faq: [{q:"Cela veut-il dire que Rakuten ne propose aucun export ?",a:"Ce cas décrit la situation de Bela Lugosi, qui ne disposait pas d’un export exploitable pour son projet. Les possibilités doivent être vérifiées pour chaque compte et chaque besoin."},{q:"Peut-on prévoir le même gain pour un autre catalogue ?",a:"Le volume, les variantes, les images et la qualité des informations changent fortement le travail nécessaire. Une estimation doit partir du catalogue concerné."}],
    links: ["/guides/migration-catalogue-ecommerce", "/services/automatisation-ia", "/services/audit-ia"]
  },
  {
    path: "/guides/cas-client-amina",
    kicker: "CAS CLIENT · SOCIÉTÉ AMINA",
    title: "AMINA : accueillir les appels et prendre rendez-vous pendant les chantiers",
    lead: "Souvent sur chantier dans une zone mal couverte, le dirigeant ratait environ dix appels par semaine. Un assistant vocal IA a été mis en place pour qualifier les demandes et organiser les visites.",
    kind: "guide", price: null, sources: [],
    sections: [
      { title: "Quand rappeler ne suffit plus", paragraphs: [
        "Le dirigeant d’AMINA passait l’essentiel de son temps sur chantier. Dans une zone avec une faible couverture cellulaire, il estimait manquer environ dix appels par semaine. Lorsqu’il rappelait, certains prospects avaient déjà contacté un autre artisan qui leur avait répondu.",
        "Le problème n’était pas seulement de conserver un numéro dans une liste d’appels manqués. Il fallait accueillir le prospect au moment de sa demande, comprendre son projet et lui donner une prochaine étape."
      ], items: [] },
      { title: "Un assistant pour recueillir une demande exploitable", paragraphs: [
        "Nous avons mis en place un assistant vocal IA utilisant la voix du dirigeant. Il accueille les appels et recueille le nom, le prénom et les précisions utiles sur le projet. Il peut ainsi préparer une demande qualifiée pendant que l’artisan travaille.",
        "La qualification donne un contexte au prochain échange : qui appelle et quel besoin motive l’appel. Elle évite de limiter le suivi à un numéro inconnu qu’il faudra rappeler sans savoir ce que la personne attend."
      ], items: ["Accueil de l’appel.", "Recueil de l’identité et des informations sur le projet.", "Préparation de la prochaine étape avec le prospect."] },
      { title: "Passer de la conversation à une visite de chantier", paragraphs: [
        "L’assistant s’appuie sur les disponibilités du calendrier du dirigeant pour proposer et réserver une visite de chantier. L’agenda devient le point de référence pour l’organisation du rendez-vous.",
        "Dans un autre projet, le cadrage doit préciser la durée des visites, les déplacements et les règles de confirmation. Le rendez-vous permet de faire avancer la demande ; il ne remplace pas le jugement de l’artisan sur les travaux à réaliser."
      ], items: [] },
      { title: "Ce que cela change dans le quotidien du dirigeant", paragraphs: [
        "Les demandes peuvent être qualifiées et les visites organisées pendant les interventions. Selon l’estimation du dirigeant, un seul client gagné suffit à couvrir le coût de sa solution. Cette appréciation concerne son activité et son installation.",
        "Pour évaluer l’intérêt chez vous, le point de départ est votre parcours réel : nombre d’appels manqués, type de demandes, agenda et mode de transfert téléphonique. L’audit personnalisé aide à examiner ces étapes avant de construire un assistant."
      ], items: [] }
    ],
    faq: [{q:"L’assistant améliore-t-il la couverture mobile ?",a:"Non. Le mode de réception ou de transfert des appels doit être vérifié avec la configuration téléphonique. C’est une condition préalable au fonctionnement du service."},{q:"Les dix appels correspondent-ils à des clients récupérés ?",a:"Non. Il s’agit du nombre d’appels manqués par semaine estimé par le dirigeant avant la mise en place, et non d’un nombre de ventes obtenues."}],
    links: ["/guides/assistant-vocal-ia-artisan", "/services/agents-ia", "/services/gestion-plannings", "/services/audit-ia"]
  },
  {
    path: "/guides/cas-client-noxvault",
    kicker: "CAS CLIENT · NOXVAULT LTD",
    title: "NOXVAULT : des publicités images et vidéos prêtes à valider le matin",
    lead: "Pour cette société britannique de e-commerce, la création des fiches produits et des publicités occupait une grande partie du quotidien. Nous avons créé un système qui prépare le travail à partir de ses campagnes.",
    kind: "guide", price: null, sources: [],
    sections: [
      { title: "Le problème : produire sans cesse de nouvelles créations", paragraphs: [
        "NOXVAULT consacrait beaucoup de temps à rédiger ses fiches produits, créer ses pages de vente et préparer les publicités. Chaque nouveau produit demandait des contenus, puis chaque campagne nécessitait de nouvelles idées et de nouvelles déclinaisons.",
        "Le besoin était de relier ces tâches : partir de ce qui fonctionnait déjà dans les publicités, identifier des pistes à explorer et préparer les créations suivantes avec une cohérence de marque."
      ], items: [] },
      { title: "Analyser les publicités pour préparer les prochaines variantes", paragraphs: [
        "Nous avons créé un système qui récupère les publicités les plus performantes de la société et les analyse. Il identifie des angles à retravailler, puis prépare de nouvelles variantes pour les campagnes.",
        "L’analyse sert ici de point de départ à la création. Une idée issue d’une publicité performante reste une piste à examiner : sa déclinaison ne garantit pas qu’une nouvelle campagne obtiendra le même résultat."
      ], items: [] },
      { title: "Préparer les produits et les contenus de la boutique", paragraphs: [
        "L’agent recherche également des produits adaptés à la boutique et prépare leur intégration avec le travail de marque nécessaire. Le projet associe ainsi la préparation du catalogue et celle des contenus marketing.",
        "Cette liaison permet de travailler sur le produit et sur sa présentation dans le même ensemble. Les choix de marque et la validation du dirigeant restent déterminants pour décider de ce qui sera utilisé."
      ], items: [] },
      { title: "Le matin : examiner, valider, puis publier", paragraphs: [
        "Au réveil, le dirigeant retrouve des publicités images et vidéos préparées pour validation. Après son accord, leur publication est automatisée sur les canaux publicitaires utilisés.",
        "Le changement porte sur l’organisation de la production : le dirigeant dispose de propositions à examiner et à corriger, au lieu de démarrer chaque création depuis une page vide. Il peut concentrer son attention sur les propositions à retenir et les corrections à demander."
      ], items: ["Analyse des campagnes existantes.", "Préparation des angles et des créations.", "Validation par le dirigeant.", "Publication après accord."] },
      { title: "Par où commencer pour une autre boutique ?", paragraphs: [
        "Avant de reproduire ce type de système, choisissez un périmètre : préparer les fiches, produire des variantes d’images ou organiser le passage de la création à la publication. Identifiez les informations de marque disponibles et les décisions qui demandent votre accord.",
        "Un audit ciblé permet de comparer ces pistes et de choisir un premier projet. Le développement, les connexions aux canaux et les coûts des outils sont ensuite définis dans un devis distinct."
      ], items: [] }
    ],
    faq: [{q:"Les publicités sont-elles publiées sans validation ?",a:"Dans le fonctionnement décrit, le dirigeant valide les créations avant leur publication automatisée."},{q:"Le système garantit-il des campagnes rentables ?",a:"Non. Il prépare et organise le travail marketing. La performance d’une campagne doit être évaluée avec les données réelles de diffusion et de vente."}],
    links: ["/services/marketing-reseaux-sociaux", "/services/formation-ia#images-videos", "/services/audit-ia"]
  },
  {
    path: "/guides/cas-client-pomas",
    kicker: "RÉALISATION · POMAS",
    title: "Pomas : simplifier la préparation des dossiers après la tempête",
    lead: "Un site a été créé pour aider les sinistrés à préparer leurs documents et formulaires, avec récupération des références cadastrales à partir de leur adresse.",
    kind: "guide", price: null, sources: [],
    sections: [
      { title: "Un besoin concret dans une période difficile", paragraphs: [
        "Après la tempête, les habitants sinistrés de Pomas devaient préparer des documents, renseigner leurs informations et retrouver leurs références cadastrales. Pour les personnes peu à l’aise avec les démarches numériques, ces recherches ajoutaient de la difficulté à une situation déjà éprouvante.",
        "Le besoin concernait aussi bien des personnes âgées que des habitants plus jeunes : disposer d’un parcours compréhensible pour préparer les informations demandées, sans multiplier les recherches entre différents outils."
      ], items: [] },
      { title: "Un parcours à partir des informations de l’habitant", paragraphs: [
        "Nous avons créé un site où les sinistrés renseignent leurs informations pour préparer les documents et formulaires Cerfa. Le parcours réunit la saisie des données personnelles et la préparation des éléments du dossier.",
        "L’objectif était de rendre cette préparation plus accessible. L’habitant part des informations qu’il connaît, plutôt que de devoir commencer par comprendre le fonctionnement de plusieurs outils administratifs."
      ], items: [] },
      { title: "Retrouver les références cadastrales avec l’adresse", paragraphs: [
        "L’outil récupère les références cadastrales à partir de l’adresse renseignée. Cette étape évite à l’habitant d’entreprendre une recherche séparée pour retrouver les références associées à son bien.",
        "Les informations ainsi préparées restent à vérifier avant l’envoi aux organismes concernés. Le site facilite la constitution du dossier ; il ne décide ni de sa recevabilité ni d’une indemnisation."
      ], items: ["Renseigner les informations de l’habitant.", "Retrouver les références cadastrales à partir de l’adresse.", "Préparer les documents.", "Vérifier le dossier avant son envoi."] },
      { title: "Ce que cette réalisation montre", paragraphs: [
        "La valeur d’un outil peut venir d’une recherche ou d’une ressaisie qu’il évite à la personne qui l’utilise. Dans ce projet, le bénéfice décrit est un parcours plus simple pour préparer les dossiers et retrouver les informations nécessaires.",
        "La même démarche d’analyse peut s’appliquer à un parcours d’entreprise : identifier ce que l’utilisateur connaît, les informations qu’il doit retrouver et les étapes qui demandent une vérification. Un audit permet de choisir la partie utile à simplifier."
      ], items: [] }
    ],
    faq: [{q:"Le site remplace-t-il les organismes qui traitent les dossiers ?",a:"Non. Il aide à préparer les documents et les informations. Le contrôle et le traitement du dossier relèvent des organismes destinataires."},{q:"Faut-il vérifier les informations préremplies ?",a:"Oui. L’utilisateur doit vérifier que les informations et les références correspondent à sa situation avant l’envoi."}],
    links: ["/services/automatisation-ia", "/guides/preparer-audit-ia", "/services/audit-ia"]
  }
];
