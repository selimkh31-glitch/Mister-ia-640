export type ContentPage = {path:string;kicker:string;title:string;lead:string;sections:{title:string;paragraphs:string[];items:string[]}[];faq:{q:string;a:string}[];links:string[];price:string|null;kind:string;sources:string[][]};
import { additionalServices } from "./offers";
import { acquisitionGuides } from "./acquisition-guides";
import { editorialArticles } from "./editorial-articles";
import { websiteService } from "./website-service";
export const pages:ContentPage[] = [
  websiteService,
  ...editorialArticles,
  ...acquisitionGuides,
  ...additionalServices,
  {
    "path": "/services/audit-ia",
    "kicker": "DIAGNOSTIC EXPRESS · 99 €",
    "title": "Audit IA personnalisé pour votre entreprise.",
    "lead": "Avant d’ajouter un outil, regardons comment votre entreprise travaille. À Bayonne et au Pays Basque, nous analysons un processus prioritaire pour identifier des améliorations utiles, faisables et mesurables.",
    "sections": [
      {
        "title": "Un seul processus, observé en détail",
        "paragraphs": [
          "Vous perdez du temps sur les devis, la qualification des demandes ou les relances ? Le diagnostic commence par choisir un circuit précis, avec un début, une fin et une personne qui le connaît. Nous vous demandons de nous montrer un exemple réel, anonymisé si nécessaire.",
          "Nous relevons les étapes, les outils et les exceptions. Une information manquante, un copier-coller répété ou une validation floue peut compter davantage que le choix d’un modèle d’IA. Le volume traité et le temps réellement passé servent de point de départ."
        ],
        "items": [
          "Entretien de cadrage et observation du processus.",
          "Revue des outils, des accès et de la qualité des données.",
          "Repérage des ressaisies, erreurs, attentes et points de validation."
        ]
      },
      {
        "title": "Ce que vous recevez",
        "paragraphs": [
          "Vous repartez avec un document de restitution utilisable pour décider. Les gains sont des estimations fondées sur vos observations, avec les hypothèses explicites. Nous distinguons le temps potentiellement libéré d’une économie financière effectivement réalisable."
        ],
        "items": [
          "Schéma du fonctionnement actuel et principales frictions.",
          "3 à 5 opportunités classées par impact, faisabilité et risque.",
          "Un pilote recommandé, son périmètre et un budget estimatif.",
          "Les indicateurs à relever avant et après la mise en place."
        ]
      },
      {
        "title": "Comment se déroule le rendez-vous ?",
        "paragraphs": [
          "Un premier échange permet de vérifier que le format correspond à votre besoin. L’entretien de travail se fait avec la personne qui exécute le processus, dans vos locaux sur le BAB ou à distance. Nous préparons ensuite la restitution et discutons des choix possibles.",
          "Le diagnostic à 99 € couvre ce périmètre ciblé. Une cartographie de plusieurs services, une mise en conformité juridique, une formation ou le développement du système nécessitent un devis distinct. Le devis précise le traitement fiscal du prix avant tout engagement."
        ],
        "items": []
      },
      {
        "title": "Et après le diagnostic ?",
        "paragraphs": [
          "Vous choisissez d’arrêter, d’améliorer votre organisation vous-même ou de nous confier un pilote. Nous vérifions d’abord si vos outils actuels disposent déjà de la fonction nécessaire. Le développement sur mesure se justifie seulement si le besoin l’exige.",
          "Aucun abonnement ni achat d’outil n’est déclenché par cette demande. Une éventuelle déduction du diagnostic sur l’implémentation doit être écrite dans le devis ; elle n’est pas automatique."
        ],
        "items": []
      }
    ],
    "faq": [
      {
        "q": "Faut-il déjà utiliser ChatGPT ?",
        "a": "Non. Nous partons de votre fonctionnement actuel. Un processus clair et des exemples représentatifs sont plus utiles qu’une longue liste d’outils IA."
      },
      {
        "q": "Le diagnostic comprend-il l’automatisation ?",
        "a": "Non. Il comprend l’analyse et la restitution d’un processus. L’implémentation fait l’objet d’un périmètre et d’un devis séparés."
      },
      {
        "q": "Que préparer ?",
        "a": "Un exemple anonymisé, les étapes suivies, les outils utilisés, un ordre de grandeur du volume et la présence de la personne qui réalise la tâche."
      }
    ],
    "links": [
      "/services/automatisation-ia",
      "/diagnostic",
      "/methode"
    ],
    "price": "99 €",
    "kind": "service",
    "sources": []
  },
  {
    "path": "/services/automatisation-ia",
    "kicker": "AUTOMATISATION MÉTIER",
    "title": "Automatisation et intégrations IA : vos outils travaillent ensemble.",
    "lead": "Nous relions vos emails, documents et outils commerciaux pour réduire les ressaisies et les tâches répétitives. Chaque système suit vos règles et laisse une place claire à la validation humaine.",
    "sections": [
      {
        "title": "Partir du travail, pas du logiciel",
        "paragraphs": [
          "Une automatisation utile résout une friction précise : créer une fiche client à partir d’une demande, préparer un document ou déclencher un rappel après une échéance. Nous commençons par vérifier les fonctions déjà disponibles dans vos logiciels.",
          "Une règle simple suffit souvent. L’IA intervient lorsqu’il faut comprendre un texte, extraire une information ou préparer une réponse. Nous séparons ces étapes des décisions sensibles : prix, engagement commercial ou traitement d’un litige."
        ],
        "items": [
          "Devis et documents préparés à partir d’informations structurées.",
          "Demandes qualifiées et transmises au bon interlocuteur.",
          "CRM synchronisé avec détection des doublons.",
          "Relances arrêtées dès qu’une réponse ou une signature arrive."
        ]
      },
      {
        "title": "Un pilote avant de généraliser",
        "paragraphs": [
          "Le pilote couvre un processus borné. Nous définissons les déclencheurs, les données nécessaires, les exceptions et les conditions d’arrêt. Des exemples représentatifs servent à tester les cas courants et les cas difficiles.",
          "Le passage en production intervient après une recette convenue. Si un outil tiers devient indisponible ou si l’information est incertaine, le système doit alerter et permettre une reprise manuelle plutôt que continuer silencieusement."
        ],
        "items": []
      },
      {
        "title": "Ce qui fait partie de la livraison",
        "paragraphs": [
          "Vous devez pouvoir comprendre ce qui tourne et qui intervient en cas de problème. Les accès sont organisés dans vos comptes lorsque c’est possible. La documentation précise les dépendances, les coûts des outils et les opérations de maintenance."
        ],
        "items": [
          "Périmètre et critères de réussite écrits.",
          "Scénario configuré, testé et documenté.",
          "Journal des exécutions et circuit de traitement des erreurs.",
          "Prise en main par votre équipe et modalités de suivi."
        ]
      },
      {
        "title": "Budget et mesure des résultats",
        "paragraphs": [
          "Repères de cadrage : environ 3 900 € pour un pilote simple, 6 900 € et plus pour un système impliquant plusieurs flux. Ce sont des ordres de grandeur issus de notre offre de départ, pas un tarif garanti. Les licences, volumes, intégrations et conditions fiscales sont précisés au devis.",
          "Nous suivons le temps de traitement, les erreurs, les reprises manuelles et l’usage réel. Le temps libéré ne constitue pas automatiquement une économie de trésorerie : il peut surtout permettre de mieux servir vos clients."
        ],
        "items": []
      }
    ],
    "faq": [
      {
        "q": "Faut-il changer mon CRM ?",
        "a": "Pas forcément. Nous étudions les possibilités de connexion de votre outil avant d’envisager une migration."
      },
      {
        "q": "Que se passe-t-il si le système tombe en panne ?",
        "a": "Le pilote prévoit les alertes, les conditions de suspension et une procédure de reprise. Les engagements de maintenance sont définis dans le contrat."
      },
      {
        "q": "Puis-je reprendre le système ?",
        "a": "La livraison prévoit la documentation et l’organisation des accès. Les droits sur le code, les comptes et les composants tiers sont précisés au devis."
      }
    ],
    "links": [
      "/services/audit-ia",
      "/services/agents-ia",
      "/solutions/automatiser-relances"
    ],
    "price": null,
    "kind": "service",
    "sources": []
  },

  {
    "path": "/services/agents-ia",
    "kicker": "CHATBOTS & AGENTS VOCAUX · SUR DEVIS",
    "title": "Un premier accueil utile. Une équipe qui garde la main.",
    "lead": "Par écrit ou par la voix, un agent IA peut répondre aux questions courantes, qualifier une demande et préparer un rendez-vous. Nous construisons un périmètre précis, avec un relais vers votre équipe.",
    "sections": [
      {
        "title": "Un chatbot ou un agent vocal selon votre besoin",
        "paragraphs": [
          "Un chatbot peut accueillir les visiteurs du site et répondre à partir de vos informations validées. Un agent vocal peut prendre en charge un premier échange téléphonique, recueillir le motif d’appel et orienter la demande. Il se présente comme un assistant automatisé, et un relais humain est prévu.",
          "Si une suite de règles déterministes suffit, une automatisation classique est souvent plus simple à maintenir. Nous évaluons le besoin d’IA avant de choisir l’architecture."
        ],
        "items": []
      },
      {
        "title": "Les sources et les droits d’abord",
        "paragraphs": [
          "La qualité des réponses dépend des documents disponibles, de leur fraîcheur et des droits d’accès. Nous identifions une source de référence, les documents obsolètes et les sujets hors périmètre.",
          "Un document consulté n’est pas une instruction à exécuter. Les entrées et les réponses sont traitées comme des contenus potentiellement non fiables. Les actions autorisées sont limitées, et les opérations à conséquence demandent une validation."
        ],
        "items": [
          "Sources sélectionnées et traçables.",
          "Accès limités au besoin de chaque usage.",
          "Possibilité de répondre « information insuffisante ».",
          "Escalade vers une personne sur les sujets sensibles."
        ]
      },
      {
        "title": "Tester avant de confier une tâche",
        "paragraphs": [
          "Nous préparons des questions représentatives, des cas ambigus et des tentatives de faire sortir l’assistant de son périmètre. Nous mesurons les réponses correctes, les références utiles et les renvois vers un humain.",
          "Le premier pilote évite les décisions autonomes de prix, les paiements ou les promesses contractuelles. Le suivi doit permettre de comprendre une erreur et de désactiver une action sans arrêter toute l’entreprise."
        ],
        "items": []
      },
      {
        "title": "Ce que nous cadrons ensemble",
        "paragraphs": [
          "Le devis décrit l’usage, les intégrations, les limites, les coûts d’usage et la maintenance. Aucun gain ou taux de réponse n’est garanti avant une évaluation sur vos propres exemples."
        ],
        "items": []
      }
    ],
    "faq": [
      {
        "q": "L’agent répond-il toujours juste ?",
        "a": "Non. Il peut se tromper, mal interpréter une demande ou manquer d’information. Les sources, les tests et la validation réduisent le risque sans le supprimer."
      },
      {
        "q": "Peut-il lire tous nos documents ?",
        "a": "Seulement les sources explicitement prévues et autorisées. Nous privilégions un périmètre restreint et des documents maintenus à jour."
      }
    ],
    "links": [
      "/services/automatisation-ia",
      "/securite",
      "/services/audit-ia"
    ],
    "price": null,
    "kind": "service",
    "sources": []
  },
  {
    "path": "/services/formation-ia",
    "kicker": "FORMATION IA EN ENTREPRISE",
    "title": "Formation IA : accompagner votre équipe jusqu’à la prise en main.",
    "lead": "Prendre en main vos outils livrés, créer des images et vidéos marketing, construire un site avec l’IA ou automatiser une tâche : des ateliers sur votre métier pour savoir refaire, vérifier et faire évoluer.",
    "sections": [
      {
        "title": "Une formation autour de vos usages",
        "paragraphs": [
          "Le programme part du niveau de l’équipe et de deux ou trois situations de travail. Un atelier pour une équipe administrative ne suit pas le même parcours qu’un atelier pour des commerciaux.",
          "Nous choisissons des exemples anonymisés et des outils auxquels vous avez réellement accès. L’objectif est que chacun puisse refaire les exercices dans son environnement habituel."
        ],
        "items": [
          "Formuler une demande avec le contexte et le résultat attendu.",
          "Créer un brouillon, une synthèse ou une structure de document.",
          "Repérer les affirmations à vérifier et consulter les sources.",
          "Identifier les données qui ne doivent pas être partagées."
        ]
      },
      {
        "title": "Formats et déroulé",
        "paragraphs": [
          "Une demi-journée permet de prendre en main quelques usages ciblés. Une journée laisse davantage de place à la pratique et à la construction de modèles de travail. Un atelier métier peut accompagner la livraison d’une automatisation.",
          "Chaque session alterne démonstration, exercice individuel et reprise collective. Le nombre de participants, les prérequis, les outils et le tarif sont arrêtés au devis."
        ],
        "items": []
      },
      {
        "title": "Ce que l’équipe conserve",
        "paragraphs": [
          "Nous préparons des consignes réutilisables, une liste de vérification des réponses et des repères de confidentialité. Un exercice final permet de vérifier que les participants savent réaliser et contrôler une tâche.",
          "Le suivi porte sur l’usage réel : qui réutilise l’outil, sur quelle tâche, avec quelles difficultés ? Une collection de prompts ne remplace pas une méthode de vérification."
        ],
        "items": []
      },
      {
        "title": "Financement et accessibilité",
        "paragraphs": [
          "Aucune certification Qualiopi ni éligibilité OPCO ou CPF n’est revendiquée. Si un financement est recherché, ses conditions doivent être vérifiées avant l’inscription.",
          "Signalez les besoins d’adaptation dès le cadrage pour vérifier les possibilités d’accueil et de participation. Les modalités sont convenues en amont."
        ],
        "items": []
      }
    ],
    "faq": [
      {
        "q": "Faut-il une licence payante ?",
        "a": "Cela dépend du programme. Les outils et licences nécessaires sont précisés avant la session ; nous ne présumons pas que chaque participant dispose d’un abonnement."
      },
      {
        "q": "Peut-on travailler sur nos propres documents ?",
        "a": "Oui, après sélection et anonymisation appropriée. Les données confidentielles ne doivent pas être déposées dans un outil sans vérifier le cadre d’utilisation."
      }
    ],
    "links": [
      "/methode",
      "/securite",
      "/services/audit-ia"
    ],
    "price": null,
    "kind": "service",
    "sources": []
  },

  {
    "path": "/services/seo-geo",
    "kicker": "VISIBILITÉ GOOGLE & IA",
    "title": "SEO local au Pays Basque : être trouvé et donner envie de vous contacter.",
    "lead": "Vos clients cherchent une prestation près de chez eux. Nous vous accompagnons pour clarifier votre site, travailler votre visibilité locale et relier les visites à des demandes utiles.",
    "sections": [
      {
        "title": "SEO et GEO : une base commune",
        "paragraphs": [
          "Le SEO améliore la compréhension et l’accès à vos pages dans les moteurs de recherche. Le GEO désigne le travail sur la visibilité dans les réponses génératives. Les deux reposent largement sur une présence claire et des contenus que l’on peut consulter et vérifier.",
          "Google indique qu’aucun balisage spécial n’est nécessaire pour ses fonctionnalités IA. Une page techniquement éligible n’a toutefois aucune garantie d’être indexée ou citée."
        ],
        "items": []
      },
      {
        "title": "Votre site et votre fiche Google racontent-ils la même activité ?",
        "paragraphs": [
          "Nous vérifions que vos prestations, votre numéro et votre zone d’intervention sont cohérents entre le site et vos profils publics. Si vous disposez d’une fiche Google Business Profile éligible, son contenu et son lien vers le site font partie des points à examiner avec vous.",
          "Une page par besoin, des réalisations autorisées et des réponses précises valent mieux qu’une série de pages où seul le nom de ville change. Nous choisissons les contenus selon vos services et les questions de vos clients, puis observons les impressions, clics et demandes lorsque les accès de mesure sont disponibles."
        ],
        "items": [
          "Contrôle technique : indexation, canonical, sitemap et liens.",
          "Contenus : prestations, zone réelle, questions et preuves.",
          "Accompagnement : priorités, corrections et suivi définis au devis."
        ]
      },
      {
        "title": "L’audit : établir un point de départ",
        "paragraphs": [
          "Nous examinons l’exploration, les URL, les contenus, les informations d’entreprise et les liens internes. Nous recherchons les incohérences entre votre site et vos profils publics, puis les questions auxquelles votre site ne répond pas encore.",
          "Pour les réponses IA, un protocole décrit les questions testées, la date, l’interface et les sources citées. Un résultat isolé n’est pas un classement stable."
        ],
        "items": [
          "Contrôle de l’indexabilité, des métadonnées et des pages importantes.",
          "Carte des intentions et contenus existants.",
          "Vérification de l’identité et des informations factuelles.",
          "Échantillon daté de réponses génératives, avec ses limites."
        ]
      },
      {
        "title": "L’implémentation : rendre les preuves accessibles",
        "paragraphs": [
          "Nous corrigeons les freins techniques, clarifions les offres et construisons un maillage cohérent. Les données structurées reflètent uniquement les informations visibles. Les cas clients sont publiés lorsque leurs données et leur diffusion sont autorisées.",
          "La présence locale se construit avec une fiche d’établissement éligible, des coordonnées cohérentes et des sources externes pertinentes. Multiplier des pages identiques par ville ne crée pas de valeur."
        ],
        "items": []
      },
      {
        "title": "Mesurer sans promettre une première place",
        "paragraphs": [
          "Le suivi associe impressions, clics, pages d’entrée et demandes commerciales. Les observations de mentions IA sont conservées comme un échantillon variable, pas comme une part de marché exhaustive.",
          "Audit et accompagnement sont chiffrés sur devis selon le site et le périmètre. Nous ne garantissons ni une position dans Google ni une recommandation dans ChatGPT, Gemini ou Perplexity."
        ],
        "items": []
      }
    ],
    "faq": [
      {
        "q": "Pouvez-vous garantir que ChatGPT nous recommande ?",
        "a": "Non. Les réponses varient avec la question, le contexte et le moteur. Nous travaillons la qualité des informations et leur accessibilité, puis observons les résultats."
      },
      {
        "q": "Faut-il un fichier llms.txt ?",
        "a": "Ce fichier ne remplace ni l’indexabilité ni des contenus utiles. Google ne demande pas de fichier IA spécifique pour apparaître dans ses fonctionnalités génératives."
      }
    ],
    "links": [
      "/services/creation-site-web",
      "/guides/seo-geo-differences",
      "/pays-basque",
      "/contact"
    ],
    "price": null,
    "kind": "service",
    "sources": [
      [
        "Google Search Central — fonctionnalités IA",
        "https://developers.google.com/search/docs/appearance/ai-features"
      ]
    ]
  },

  {
    "path": "/solutions/automatiser-devis",
    "kicker": "SOLUTION / DEVIS",
    "title": "Des devis préparés plus vite. Validés par vous.",
    "lead": "Une demande arrive avec des informations éparpillées. Nous organisons leur collecte et la préparation du devis pour réduire la ressaisie, sans laisser l’IA décider de vos prix.",
    "sections": [
      {
        "title": "Reconnaître le vrai point de blocage",
        "paragraphs": [
          "Le problème peut se situer avant la rédaction : adresse manquante, photos dans un autre fil, tarifs à retrouver ou passage obligé par une seule personne. Nous suivons un devis complet, de la demande à l’envoi, pour repérer les attentes et les doublons.",
          "Si chaque devis exige une visite et une estimation métier originale, automatiser le chiffrage complet n’est pas le bon premier chantier. Préparer les informations et le document peut déjà alléger le travail."
        ],
        "items": []
      },
      {
        "title": "Un circuit possible",
        "paragraphs": [
          "Exemple illustratif, à adapter à vos logiciels. La demande est enregistrée, les champs disponibles sont extraits, puis les informations manquantes sont signalées. Le système prépare un brouillon à partir d’un modèle approuvé."
        ],
        "items": [
          "Centraliser la demande et rattacher les pièces au bon dossier.",
          "Vérifier les champs indispensables et signaler les manques.",
          "Préparer le document à partir de références autorisées.",
          "Faire valider les quantités, les prix et les engagements par une personne.",
          "Enregistrer l’envoi et la prochaine action dans l’outil commercial."
        ]
      },
      {
        "title": "Ce que nous ne laissons pas au hasard",
        "paragraphs": [
          "Les références tarifaires doivent être identifiées et maintenues à jour. Un montant absent n’est pas inventé. Les conditions commerciales et les documents joints sont vérifiés avant l’envoi.",
          "Il faut également gérer la nouvelle version d’un devis : qui l’a modifié, quelle version a été envoyée et laquelle le client a acceptée ? Le pilote intègre ces règles avant d’accélérer le volume."
        ],
        "items": []
      },
      {
        "title": "Comment vérifier l’intérêt du projet",
        "paragraphs": [
          "Relevez le nombre de devis, les minutes réellement consacrées à la préparation et la part des demandes incomplètes. Après le pilote, comparez les mêmes étapes. Une hausse des signatures ne peut pas être attribuée automatiquement à l’automatisation.",
          "Le diagnostic à 99 € permet de cadrer ce processus et de décider si une fonction existante, une connexion entre outils ou un développement est justifié."
        ],
        "items": []
      }
    ],
    "faq": [
      {
        "q": "L’IA va-t-elle fixer mes prix ?",
        "a": "Non. Le scénario proposé utilise vos références et conserve la validation du chiffrage par une personne."
      },
      {
        "q": "Mon logiciel de devis est-il compatible ?",
        "a": "Nous vérifions ses fonctions d’import, d’export et de connexion. Sans accès fiable, le périmètre doit être adapté."
      }
    ],
    "links": [
      "/solutions/automatiser-relances",
      "/services/automatisation-ia",
      "/services/audit-ia"
    ],
    "price": null,
    "kind": "solution",
    "sources": []
  },
  {
    "path": "/solutions/automatiser-relances",
    "kicker": "SOLUTION / SUIVI COMMERCIAL",
    "title": "La bonne relance, sans oublier le contexte.",
    "lead": "Un devis envoyé ne devrait pas disparaître dans une boîte mail. Organisez les rappels, les prochaines actions et les conditions d’arrêt pour garder un suivi commercial cohérent.",
    "sections": [
      {
        "title": "Distinguer les relances",
        "paragraphs": [
          "Une relance de devis, un rappel de rendez-vous et une facture échue n’ont ni le même objectif ni les mêmes règles. Le premier pilote se concentre sur une seule catégorie et un segment clairement défini.",
          "Pour un devis, nous vérifions la date d’envoi, la validité, le statut et l’existence d’une réponse. Pour une facture, le statut du paiement et les éventuelles contestations doivent être fiables avant tout message."
        ],
        "items": []
      },
      {
        "title": "Une séquence qui sait s’arrêter",
        "paragraphs": [
          "Le système prépare une relance selon vos règles. Il peut créer une tâche pour votre équipe ou préparer un message à valider. L’envoi automatique n’est envisagé que lorsque les données et le cadre sont suffisamment fiables."
        ],
        "items": [
          "Déclencher un rappel sur une échéance définie.",
          "Vérifier qu’il n’y a ni réponse, ni signature, ni paiement pertinent.",
          "Exclure les dossiers en litige, clôturés ou mis en pause.",
          "Limiter la fréquence et éviter les doublons.",
          "Transmettre les réponses et arrêter la séquence immédiatement."
        ]
      },
      {
        "title": "Conserver votre relation client",
        "paragraphs": [
          "Les messages reprennent le contexte du dossier et proposent une prochaine étape utile. Nous évitons de déduire une intention d’achat ou de multiplier les envois à partir d’une absence de réponse.",
          "Une automatisation de suivi n’autorise pas à envoyer des campagnes de prospection sans vérifier leur cadre. Les règles de contact et d’opposition doivent être établies avant la mise en service."
        ],
        "items": []
      },
      {
        "title": "Les indicateurs à observer",
        "paragraphs": [
          "Suivez les dossiers sans prochaine action, le taux de relances incorrectes, les réponses reçues et le temps de préparation. Le nombre de messages envoyés n’est pas, à lui seul, un indicateur de réussite.",
          "Le diagnostic permet de vérifier si votre CRM possède déjà les fonctions nécessaires avant d’ajouter un nouveau système."
        ],
        "items": []
      }
    ],
    "faq": [
      {
        "q": "Peut-on garder la main avant l’envoi ?",
        "a": "Oui. Une première version peut uniquement créer des tâches ou des brouillons, avec validation humaine."
      },
      {
        "q": "Comment éviter de relancer un client qui a répondu ?",
        "a": "Il faut une source de statut fiable et une vérification juste avant l’envoi. Si les outils ne permettent pas cette vérification, nous privilégions une validation manuelle."
      }
    ],
    "links": [
      "/solutions/automatiser-devis",
      "/services/automatisation-ia",
      "/services/audit-ia"
    ],
    "price": null,
    "kind": "solution",
    "sources": []
  },
  {
    "path": "/solutions/automatiser-emails",
    "kicker": "SOLUTION / EMAILS",
    "title": "Une boîte mail qui retrouve ses priorités.",
    "lead": "Classer les demandes, extraire les informations utiles et préparer des brouillons : nous organisons un traitement des emails qui aide l’équipe sans envoyer des réponses hasardeuses.",
    "sections": [
      {
        "title": "Commencer par une famille de messages",
        "paragraphs": [
          "Un premier périmètre peut couvrir les demandes de devis, les questions récurrentes ou les pièces à classer. Nous évitons de donner immédiatement accès à l’ensemble des boîtes et des archives.",
          "Un échantillon anonymisé permet d’observer les langues, les formats, les pièces jointes et les exceptions. Le système doit reconnaître ce qu’il ne sait pas classer."
        ],
        "items": []
      },
      {
        "title": "Un fonctionnement à définir ensemble",
        "paragraphs": [
          "À la réception, le message est classé selon des catégories utiles au travail. Les éléments nécessaires peuvent être extraits et rattachés à un dossier. Un brouillon s’appuie sur vos réponses validées et votre documentation."
        ],
        "items": [
          "Trier et transmettre au bon interlocuteur.",
          "Extraire les champs nécessaires, avec contrôle des valeurs.",
          "Préparer une réponse ou une tâche dans votre outil.",
          "Faire vérifier les engagements et les cas incertains.",
          "Tracer le traitement sans dupliquer inutilement les contenus."
        ]
      },
      {
        "title": "Traiter les emails comme des entrées non fiables",
        "paragraphs": [
          "Un message peut contenir des instructions malveillantes, une pièce suspecte ou de fausses informations. Son contenu ne doit pas pouvoir changer les règles du système, ouvrir des accès ou déclencher une action sensible.",
          "Les permissions, les types de pièces et les actions autorisées sont limités. Les messages confidentiels ou hors périmètre restent dans un circuit humain."
        ],
        "items": []
      },
      {
        "title": "Vérifier le gain et la qualité",
        "paragraphs": [
          "Le pilote compare le temps de tri, la bonne orientation des demandes et les corrections nécessaires sur les brouillons. Il ne promet pas de vider votre boîte de réception sans intervention.",
          "La compatibilité avec votre messagerie et la gestion des droits sont vérifiées avant tout devis d’implémentation."
        ],
        "items": []
      }
    ],
    "faq": [
      {
        "q": "Les réponses partent-elles automatiquement ?",
        "a": "Pas dans le scénario de départ. Nous privilégions les brouillons et la validation, puis évaluons si certains cas simples peuvent être automatisés."
      },
      {
        "q": "Faut-il donner accès à toute la messagerie ?",
        "a": "Non. Nous recherchons le périmètre minimal : boîte dédiée, dossier ou règles de transfert, selon les possibilités de votre fournisseur."
      }
    ],
    "links": [
      "/services/agents-ia",
      "/securite",
      "/services/audit-ia"
    ],
    "price": null,
    "kind": "solution",
    "sources": []
  },
  {
    "path": "/pays-basque",
    "kicker": "PAYS BASQUE · ACCOMPAGNEMENT DE PROXIMITÉ",
    "title": "Sites internet et accompagnement IA au Pays Basque.",
    "lead": "Dirigeant, artisan ou commerçant : vous avez besoin d’être trouvé et de garder du temps pour vos clients. Selimkhan vous accompagne sur votre site, votre visibilité locale et les outils de votre équipe.",
    "sections": [
      {
        "title": "Saint-Jean-de-Luz, Ciboure et Hendaye : être trouvé dans votre zone réelle",
        "paragraphs": [
          "Pour une activité de proximité, un site utile précise ce que vous faites, où vous intervenez et comment vous joindre. Nous préparons avec vous les informations que vos clients cherchent avant de vous appeler : prestations, exemples de travail, modalités de rendez-vous et zone de déplacement.",
          "Si votre activité accueille une clientèle de passage, les périodes d’ouverture et les demandes dans plusieurs langues peuvent faire partie du cadrage. Ce sont des besoins à vérifier avec vous, pas des fonctionnalités à ajouter systématiquement."
        ],
        "items": [
          "Site vitrine : 10 pages à partir de 299 € HT, SEO local, blog et formation inclus.",
          "Référencement local : travailler vos pages et la cohérence de vos informations publiques.",
          "Un contact accessible sur mobile, sans obliger le visiteur à chercher votre numéro."
        ]
      },
      {
        "title": "Bayonne, Anglet et Biarritz : relier visibilité et suivi des demandes",
        "paragraphs": [
          "Sur le BAB, votre site peut être le point de départ d’un parcours qui continue par un appel, un devis ou un rendez-vous. Le travail ne s’arrête donc pas à la mise en ligne : nous regardons aussi comment la demande arrive à la bonne personne et comment elle est suivie.",
          "Pour votre équipe, une automatisation peut préparer une fiche client, regrouper les pièces d’un devis ou rappeler une prochaine action. Le choix dépend de vos logiciels et du temps réellement consacré à ces tâches."
        ],
        "items": []
      },
      {
        "title": "Présentiel, à distance : choisir le format qui sert le projet",
        "paragraphs": [
          "Une première conversation permet de préciser votre activité, votre ville et votre priorité. Un site ou un travail de contenu peut avancer à distance ; observer une tâche avec l’équipe peut justifier un rendez-vous dans vos locaux.",
          "Le lieu, les déplacements éventuels et les modalités d’accompagnement sont convenus au devis. Pour le Sud Landes, nous vérifions ensemble la pertinence d’une intervention sur place ou d’un accompagnement à distance. Aucune adresse d’agence ni permanence locale n’est annoncée dans ces communes."
        ],
        "items": []
      },
      {
        "title": "Que préparer pour notre premier échange ?",
        "paragraphs": [
          "Pour un site : votre activité, votre zone réelle, les prestations à présenter et les contenus dont vous disposez. Pour le référencement : l’adresse de votre site et, si vous en avez une, votre fiche Google Business Profile. Ne transmettez pas vos mots de passe.",
          "Pour une automatisation ou une formation : un exemple anonymisé de la tâche, les outils utilisés et les personnes concernées. Nous pouvons alors définir une première étape adaptée à votre budget."
        ],
        "items": [
          "Créer votre présence en ligne : l’offre site vitrine est accessible sans audit préalable.",
          "Clarifier une tâche répétitive : l’audit personnalisé à 99 € porte sur un processus.",
          "Accompagner votre équipe : programme de formation et suivi définis ensemble."
        ]
      }
    ],
    "faq": [
      {
        "q": "Avez-vous une agence dans chaque ville ?",
        "a": "Non. Les villes citées décrivent une zone d’intervention. Vous échangez avec Selimkhan ; le lieu et les modalités d’un éventuel rendez-vous sont définis ensemble."
      },
      {
        "q": "Pouvez-vous travailler sur mon site existant ?",
        "a": "Oui, après examen de sa structure, des accès disponibles et du besoin. Il n’est pas nécessaire de tout refaire si des améliorations ciblées suffisent."
      }
    ],
    "links": [
      "/services/creation-site-web",
      "/services/seo-geo",
      "/services/automatisation-ia",
      "/services/formation-ia",
      "/contact"
    ],
    "price": null,
    "kind": "page",
    "sources": []
  },

  {
    "path": "/methode",
    "kicker": "LA MÉTHODE MISTER IA 64",
    "title": "Comprendre. Construire. Vérifier.",
    "lead": "Un projet commence par une tâche qui coûte du temps ou crée des erreurs. Notre méthode transforme ce constat en une décision, puis en un système dont l’usage peut être observé.",
    "sections": [
      {
        "title": "01 — Diagnostic : regarder le travail réel",
        "paragraphs": [
          "Nous choisissons un processus prioritaire et le parcourons avec la personne qui le réalise. Les volumes, les temps, les outils et les exceptions sont consignés. Les données incertaines sont marquées comme telles.",
          "Le livrable distingue le problème d’organisation, l’automatisation simple et le besoin d’IA. Il est possible de conclure qu’un développement n’est pas justifié."
        ],
        "items": []
      },
      {
        "title": "02 — Cadrer : choisir un pilote",
        "paragraphs": [
          "Nous comparons les pistes selon leur impact attendu, leur faisabilité, leur coût et leur risque. Une recommandation décrit ce qui sera fait, ce qui restera manuel et comment décider si le pilote fonctionne."
        ],
        "items": [
          "Un responsable métier et une source de données identifiés.",
          "Un périmètre écrit avec ses exclusions.",
          "Des critères de recette observables.",
          "Un budget qui distingue construction, licences et suivi."
        ]
      },
      {
        "title": "03 — Construire avec des garde-fous",
        "paragraphs": [
          "Le système est testé sur des exemples représentatifs. Les erreurs, doublons, données manquantes et indisponibilités sont traités avant le lancement. L’équipe vérifie les résultats sur les cas convenus.",
          "La livraison comprend la documentation et une prise en main. La mise en production se fait après validation des critères, avec une procédure de suspension et de reprise."
        ],
        "items": []
      },
      {
        "title": "04 — Suivre ce qui change",
        "paragraphs": [
          "Nous comparons le temps de traitement, la qualité et les reprises humaines à la situation initiale. Un système peu utilisé ou qui crée de nouvelles tâches doit être corrigé.",
          "Les modalités de maintenance sont écrites : interlocuteur, limites, évolutions d’outils et conditions de suivi. Le résultat s’évalue sur votre fonctionnement, pas sur le nombre d’automatisations installées."
        ],
        "items": []
      }
    ],
    "faq": [],
    "links": [
      "/services/audit-ia",
      "/securite",
      "/guides/calculer-roi-automatisation"
    ],
    "price": null,
    "kind": "page",
    "sources": []
  },
  {
    "path": "/a-propos",
    "kicker": "À PROPOS",
    "title": "La technologie au service du travail bien fait.",
    "lead": "Je suis Selimkhan, votre interlocuteur chez Mister IA 64. J’accompagne les dirigeants et leurs équipes au Pays Basque pour simplifier leur quotidien et rendre leur savoir-faire plus visible.",
    "sections": [
      {
        "title": "Pourquoi « Mister IA 64 » ?",
        "paragraphs": [
          "Mon approche est celle d’un artisan du numérique : comprendre votre métier, choisir les outils utiles, construire avec vous et vous expliquer comment les prendre en main.",
          "Création de site internet, SEO local, automatisation ou formation IA : l’accompagnement part de votre besoin et de vos moyens, pas d’un catalogue de logiciels."
        ],
        "items": []
      },
      {
        "title": "Ce que vous pouvez attendre",
        "paragraphs": [
          "Un discours compréhensible, un périmètre explicite et une distinction entre résultats observés et gains estimés. Nous expliquons également les limites des outils et les tâches qui doivent rester sous contrôle humain."
        ],
        "items": [
          "Observer votre travail avant de recommander un logiciel.",
          "Privilégier les fonctions déjà disponibles lorsqu’elles suffisent.",
          "Définir les accès, les responsabilités et les coûts.",
          "Documenter pour que votre équipe puisse reprendre la main."
        ]
      },
      {
        "title": "Des réalisations à découvrir, pas seulement des promesses",
        "paragraphs": [
          "Le site présente notamment la migration du catalogue de Bela Lugosi, l’assistant vocal d’AMINA, la préparation de contenus pour NOXVAULT et l’outil d’aide aux démarches réalisé pour les sinistrés de Pomas.",
          "Chaque récit distingue le problème de départ, le système mis en place et les résultats décrits. Les estimations propres à un client ne deviennent pas une promesse pour votre entreprise."
        ],
        "items": []
      }
    ],
    "faq": [],
    "links": [
      "/guides/cas-client-bela-lugosi",
      "/guides/cas-client-amina",
      "/guides/cas-client-noxvault",
      "/guides/cas-client-pomas",
      "/methode",
      "/pays-basque",
      "/contact"
    ],
    "price": null,
    "kind": "page",
    "sources": []
  },

  {
    "path": "/securite",
    "kicker": "DONNÉES & RESPONSABILITÉS",
    "title": "Des accès limités. Des décisions maîtrisées.",
    "lead": "La confidentialité se prépare dans le périmètre du projet : quelles données sont nécessaires, qui y accède, quels outils les traitent et comment reprendre la main.",
    "sections": [
      {
        "title": "Limiter la collecte",
        "paragraphs": [
          "Le premier échange ne nécessite ni fichier client ni document confidentiel. Pour l’analyse, nous privilégions des exemples anonymisés et les seules informations utiles au processus étudié."
        ],
        "items": []
      },
      {
        "title": "Choisir les fournisseurs en connaissance de cause",
        "paragraphs": [
          "Avant d’utiliser un service tiers, nous examinons ses possibilités d’accès, ses paramètres de conservation et le cadre contractuel applicable. Un nom d’outil ne suffit pas à conclure qu’un traitement est adapté ou conforme.",
          "Les choix d’hébergement, les sous-traitants et les éventuels transferts sont documentés selon la solution retenue. Aucune promesse générale de souveraineté ou de conformité intégrale n’est faite sur ce site."
        ],
        "items": []
      },
      {
        "title": "Prévoir le contrôle et la reprise",
        "paragraphs": [
          "Les comptes sont séparés lorsque nécessaire, les droits limités au besoin et les secrets conservés hors du code. Les actions sensibles demandent une validation. Un journal utile évite d’enregistrer des documents complets sans nécessité."
        ],
        "items": [
          "Définir qui peut consulter, modifier et valider.",
          "Documenter les erreurs, alertes et conditions d’arrêt.",
          "Prévoir la révocation des accès et la fin de mission.",
          "Tester les données manquantes et les entrées malveillantes."
        ]
      },
      {
        "title": "Sur ce site",
        "paragraphs": [
          "L’estimateur fonctionne dans votre navigateur sans transmettre ses réponses. Aucun traceur publicitaire ni outil de mesure d’audience tiers n’est activé. La prise de contact se fait sur WhatsApp ; le formulaire du site reste désactivé."
        ],
        "items": []
      }
    ],
    "faq": [],
    "links": [
      "/confidentialite",
      "/services/agents-ia",
      "/methode"
    ],
    "price": null,
    "kind": "page",
    "sources": []
  },
  {
    "path": "/guides/calculer-roi-automatisation",
    "kicker": "GUIDE / DÉCISION · 6 MIN",
    "title": "Calculer l’intérêt d’une automatisation, sans gonfler les gains.",
    "lead": "Avant d’investir, séparez le temps potentiellement libéré, les coûts du système et les économies réellement réalisables. Une estimation utile montre aussi les hypothèses qui pourraient être fausses.",
    "sections": [
      {
        "title": "1. Mesurer une situation de départ",
        "paragraphs": [
          "Choisissez une tâche précise et observez plusieurs dossiers représentatifs. Relevez le volume, le temps de travail actif et les reprises. Le délai total n’est pas toujours du temps humain : attendre une réponse pendant deux jours ne représente pas deux jours de travail.",
          "Utilisez une fourchette lorsque les dossiers varient. Documentez la période, les personnes et les cas exclus. Un seul dossier très simple ne suffit pas à représenter toute l’activité."
        ],
        "items": []
      },
      {
        "title": "2. Calculer le temps libérable",
        "paragraphs": [
          "Temps mensuel actuel = volume mensuel × minutes actives par dossier ÷ 60. Temps libérable = temps actuel × part réellement supprimable, moins le temps de contrôle et de maintenance ajouté.",
          "Exemple fictif : 80 dossiers × 15 minutes = 20 heures par mois. Si le pilote enlève 40 % du travail et ajoute 2 heures de contrôle, le temps net estimé est de 6 heures. Ce calcul illustre une méthode, pas un résultat client."
        ],
        "items": []
      },
      {
        "title": "3. Ajouter tous les coûts",
        "paragraphs": [
          "Incluez la construction, les licences, les appels aux services tiers, la formation et le suivi. Répartir le coût initial sur douze mois peut aider à comparer, mais ne change pas la trésorerie nécessaire au départ.",
          "À titre illustratif, 6 heures valorisées à 35 € représentent 210 € de capacité mensuelle. Avec 80 € de coût récurrent, la valeur nette théorique est de 130 €. Un investissement de 3 900 € demanderait alors 30 mois pour couvrir cette valeur, si toutes les hypothèses se vérifient."
        ],
        "items": []
      },
      {
        "title": "4. Ne pas confondre capacité et trésorerie",
        "paragraphs": [
          "Si les heures libérées sont réaffectées au service client, le gain peut être réel sans réduire les charges. Parler de rentabilité financière exige de montrer comment cette capacité produit une marge ou évite un coût.",
          "Testez un scénario prudent, un scénario central et un scénario favorable. Si seul le scénario favorable justifie le projet, réduisez le pilote ou attendez de meilleures données."
        ],
        "items": []
      },
      {
        "title": "5. Décider après un pilote",
        "paragraphs": [
          "Comparez les mêmes tâches avant et après. Relevez aussi les erreurs et les corrections. Un pilote réussi améliore le fonctionnement sans déplacer toute la charge vers la surveillance.",
          "Notre estimateur applique une hypothèse simple de part libérable et affiche la formule. Le diagnostic humain vérifie ensuite les exceptions, les accès et la faisabilité."
        ],
        "items": []
      }
    ],
    "faq": [],
    "links": [
      "/diagnostic",
      "/services/audit-ia",
      "/services/automatisation-ia"
    ],
    "price": null,
    "kind": "guide",
    "sources": []
  },
  {
    "path": "/guides/seo-geo-differences",
    "kicker": "GUIDE / VISIBILITÉ · 5 MIN",
    "title": "SEO et GEO : que faut-il vraiment travailler ?",
    "lead": "Être présent dans une réponse IA commence par une entreprise identifiable et des contenus consultables. Les nouvelles interfaces ne suppriment pas les fondamentaux de la recherche.",
    "sections": [
      {
        "title": "Deux interfaces, une exigence de clarté",
        "paragraphs": [
          "Le SEO concerne la visibilité dans les moteurs de recherche. Le GEO désigne les efforts pour être mentionné ou cité dans leurs interfaces génératives. Une mention de marque sans lien, une citation et une visite sont trois observations différentes."
        ],
        "items": []
      },
      {
        "title": "Ce que Google confirme",
        "paragraphs": [
          "Google conserve ses exigences fondamentales pour ses fonctions IA : une page accessible et éligible à l’indexation, un contenu utile et des données structurées cohérentes avec ce qui est visible. Aucun fichier IA ni schéma spécifique n’est exigé.",
          "L’éligibilité ne garantit pas l’apparition. Les résultats peuvent varier selon les questions et les systèmes. Ces indications concernent Google et ne constituent pas une description exhaustive du fonctionnement de tous les assistants."
        ],
        "items": []
      },
      {
        "title": "Le travail utile pour une entreprise locale",
        "paragraphs": [
          "Commencez par expliquer clairement votre activité, votre zone et vos modalités de contact. Chaque offre mérite un périmètre, une méthode et des réponses aux questions d’un prospect.",
          "Ajoutez des preuves autorisées : réalisation expliquée, résultat avec sa méthode de calcul, auteur identifié. Faites correspondre les informations du site avec les profils publics. Évitez les dizaines de pages qui changent seulement le nom d’une ville."
        ],
        "items": []
      },
      {
        "title": "Comment observer la visibilité générative",
        "paragraphs": [
          "Définissez un petit ensemble de questions commerciales représentatives. Conservez leur formulation, la date, l’interface, les marques mentionnées et les sources citées. Répétez le protocole pour voir les variations.",
          "Ce suivi est un échantillon. Il ne mesure pas tous les utilisateurs, et une hausse des mentions ne prouve pas une hausse des ventes. Complétez-le par les visites et demandes effectivement reçues."
        ],
        "items": []
      },
      {
        "title": "Ce qu’il faut demander à un prestataire",
        "paragraphs": [
          "Demandez le point de départ, les actions précises, les preuves attendues et la façon de mesurer. Une promesse de première position dans ChatGPT n’est pas un objectif vérifiable de la même manière qu’une correction technique livrée."
        ],
        "items": []
      }
    ],
    "faq": [],
    "links": [
      "/services/seo-geo",
      "/pays-basque",
      "/contact"
    ],
    "price": null,
    "kind": "guide",
    "sources": [
      [
        "Google Search Central — AI features and your website",
        "https://developers.google.com/search/docs/appearance/ai-features"
      ]
    ]
  },
  {
    "path": "/mentions-legales",
    "kicker": "VERSION PRIVÉE / AVANT PUBLICATION",
    "title": "Mentions légales à finaliser.",
    "lead": "Cette version est réservée à la revue du projet. L’identité juridique complète et les coordonnées professionnelles de l’éditeur doivent être confirmées avant l’ouverture au public.",
    "sections": [
      {
        "title": "Éditeur",
        "paragraphs": [
          "Marque : Mister IA 64. Porteur du projet : Selimkhan. Informations à compléter : nom légal de l’éditeur, forme juridique, adresse professionnelle, identifiant d’immatriculation, coordonnées de contact, directeur de publication et régime de TVA applicable."
        ],
        "items": []
      },
      {
        "title": "Hébergement et exploitation",
        "paragraphs": [
          "Cette version est préparée pour un hébergement Vercel. Les mentions complètes de l’hébergeur et les coordonnées légales doivent être renseignées avant le lancement commercial."
        ],
        "items": []
      },
      {
        "title": "Prix et engagement",
        "paragraphs": [
          "Le diagnostic est présenté à 99 €. La qualification fiscale du prix reste à confirmer. Aucun paiement, commande ferme ou réservation de créneau n’est réalisé sur cette version. Un devis précis doit précéder tout engagement."
        ],
        "items": []
      },
      {
        "title": "Contenu et propriété",
        "paragraphs": [
          "Les exemples sont illustratifs. Aucun avis, label ou résultat client n’est inventé. Les conditions d’utilisation et les droits sur les prestations seront précisés dans les documents contractuels."
        ],
        "items": []
      }
    ],
    "faq": [],
    "links": [
      "/confidentialite",
      "/contact"
    ],
    "price": null,
    "kind": "page",
    "sources": []
  },
  {
    "path": "/confidentialite",
    "kicker": "VERSION DE PRÉSENTATION / DONNÉES",
    "title": "Confidentialité et fonctionnement de cette version.",
    "lead": "L’estimateur ne transmet pas vos réponses. Le formulaire reste désactivé. Le bouton WhatsApp ouvre un service externe pour échanger directement avec Mister IA 64.",
    "sections": [
      {
        "title": "Données du formulaire",
        "paragraphs": [
          "Cette version ne propose aucun champ de saisie pour les demandes commerciales. L’API refuse les soumissions sans les enregistrer ni envoyer d’email. Un clic sur WhatsApp ouvre le service externe ; les messages que vous choisissez ensuite d’envoyer y sont traités pour répondre à votre demande. Évitez d’y transmettre des documents sensibles.",
          "Le formulaire de collecte commerciale reste fermé. Pour une question concernant vos échanges avec Mister IA 64, vous pouvez nous joindre au +33 6 01 99 80 10. Le fonctionnement de WhatsApp dépend aussi de ses propres conditions et paramètres de confidentialité."
        ],
        "items": []
      },
      {
        "title": "Aucun stockage de demandes",
        "paragraphs": [
          "Aucune base de prospects n’est connectée à cette version. L’hébergeur peut traiter des journaux techniques de connexion selon ses propres paramètres et règles, à vérifier avant le lancement commercial."
        ],
        "items": []
      },
      {
        "title": "Estimateur et mesure d’audience",
        "paragraphs": [
          "Les réponses de l’estimateur restent en mémoire dans votre navigateur et disparaissent au rechargement. Aucun résultat n’est envoyé au formulaire. Aucun pixel publicitaire, cookie marketing ni service tiers de mesure d’audience n’est activé.",
          "Les journaux techniques relèvent de la plateforme d’hébergement. L’absence d’indexation dans les moteurs de recherche n’est pas une protection d’accès au site."
        ],
        "items": []
      },
      {
        "title": "Avant la collecte de vrais prospects",
        "paragraphs": [
          "Le responsable de traitement, la finalité commerciale, la base légale adaptée, les destinataires, les durées de conservation et le contact pour les droits doivent être renseignés. Les conditions des prestataires et des éventuels transferts doivent être vérifiées.",
          "Cette page décrit la version de présentation ; elle ne constitue pas une déclaration de conformité du futur service commercial."
        ],
        "items": []
      }
    ],
    "faq": [],
    "links": [
      "/securite",
      "/mentions-legales"
    ],
    "price": null,
    "kind": "page",
    "sources": [
      [
        "CNIL — exemples de mentions d’information",
        "https://www.cnil.fr/fr/passer-laction/rgpd-exemples-de-mentions-dinformation"
      ]
    ]
  }
];
export const findPage=(path:string)=>pages.find(p=>p.path===path);
