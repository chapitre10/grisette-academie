/**
 * Guides numériques (templates & guides téléchargeables).
 * Les titres sont définitifs ; les contenus, prix et images restent à compléter.
 */
export type ProductStatus = "exemple" | "bientot" | "disponible";

export interface Product {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  format: string;
  level: string;
  price: string | null; // null => « Bientôt disponible »
  status: ProductStatus;
  benefits: string[];
  content: string[];
  material: string[];
  usage: string[];
  faq: { question: string; answer: string }[];
  image: string | null; // TODO : image principale
  imageAlt: string;
  gallery: { src: string | null; alt: string }[];
  seo: {
    title: string;
    description: string;
    pinterestTitle: string;
    pinterestDescription: string;
    pinterestImage: string | null; // image verticale 1000x1500
  };
  related: string[];
  /** Ressource gratuite associée (slug d'article du blog). */
  freeResource?: string;
}

export const productCategories = [
  "Références et lectures",
  "Fournisseurs et achats",
  "Tissus et matières",
  "Machines et outils",
  "Vocabulaire couture",
  "Couture débutante",
];

const commonFaq = [
  {
    question: "Que vais-je recevoir après mon achat ?",
    answer:
      "Le paiement n'est pas encore activé. Une fois les guides en vente, tu recevras un fichier numérique à télécharger immédiatement après ta commande.",
  },
  {
    question: "Les guides sont-ils imprimables ?",
    answer: "Oui, ils sont pensés pour être imprimés au format A4 ou consultés à l'écran.",
  },
  {
    question: "Puis-je utiliser le guide pour mon organisation personnelle ?",
    answer:
      "Oui, l'usage est personnel. La revente et la rediffusion du fichier ne sont pas autorisées.",
  },
];

const baseUsage = [
  "Usage personnel uniquement",
  "Impression libre pour tes propres projets",
  "Revente et partage du fichier interdits",
];

export const products: Product[] = [
  {
    slug: "les-livres-essentiels",
    title: "Les livres essentiels",
    shortDescription:
      "Une sélection commentée d'ouvrages de couture et de modélisme à garder près de sa machine.",
    category: "Références et lectures",
    format: "PDF",
    level: "Tous niveaux",
    price: null,
    status: "bientot",
    benefits: [
      "Savoir quels ouvrages acheter en priorité selon son niveau",
      "Éviter les livres redondants ou trop théoriques",
      "Se constituer une bibliothèque couture utile au quotidien",
    ],
    content: [
      "Livres pour démarrer la couture",
      "Ouvrages de technique et de finitions",
      "Références de modélisme et de patronage",
      "Livres d'histoire du vêtement et d'inspiration",
      "Fiche de suivi de ses lectures",
    ],
    material: ["Aucun matériel particulier"],
    usage: baseUsage,
    image: null,
    imageAlt: "Aperçu du guide des livres essentiels de couture",
    gallery: [
      { src: null, alt: "Aperçu de la sélection de livres pour débuter" },
      { src: null, alt: "Aperçu des références de modélisme" },
    ],
    seo: {
      title: "Les livres essentiels de couture (guide PDF) — Grisette Académie",
      description:
        "Une sélection commentée des livres de couture et de modélisme vraiment utiles, classée par niveau et par usage.",
      pinterestTitle: "Les livres de couture à avoir chez soi",
      pinterestDescription:
        "Technique, modélisme, inspiration : les ouvrages de couture à garder près de sa machine.",
      pinterestImage: null,
    },
    related: ["lexique-de-la-couturiere", "guide-debutant"],
    freeResource: "bien-choisir-ses-livres-de-couture",
    faq: commonFaq,
  },
  {
    slug: "liste-des-fournisseurs",
    title: "Liste des fournisseurs",
    shortDescription:
      "Un carnet d'adresses de merceries, tissuthèques et fournisseurs, avec des critères pour comparer.",
    category: "Fournisseurs et achats",
    format: "PDF",
    level: "Tous niveaux",
    price: null,
    status: "bientot",
    benefits: [
      "Trouver rapidement où acheter tissus et fournitures",
      "Comparer les fournisseurs selon des critères clairs",
      "Garder ses bonnes adresses au même endroit",
    ],
    content: [
      "Merceries et tissuthèques physiques",
      "Boutiques en ligne et fournisseurs spécialisés",
      "Fournisseurs de mercerie technique et de matériel",
      "Critères de comparaison : qualité, délais, échantillons, prix",
      "Fiche vierge pour ajouter tes propres adresses",
    ],
    material: ["Aucun matériel particulier"],
    usage: baseUsage,
    image: null,
    imageAlt: "Aperçu de la liste des fournisseurs couture",
    gallery: [
      { src: null, alt: "Aperçu du carnet d'adresses de merceries" },
      { src: null, alt: "Aperçu de la grille de comparaison des fournisseurs" },
    ],
    seo: {
      title: "Liste des fournisseurs couture (guide PDF) — Grisette Académie",
      description:
        "Merceries, tissuthèques et fournisseurs de matériel : un carnet d'adresses couture avec des critères pour comparer.",
      pinterestTitle: "Où acheter ses tissus et fournitures de couture",
      pinterestDescription:
        "Un carnet d'adresses de merceries, tissuthèques et fournisseurs pour la couture.",
      pinterestImage: null,
    },
    related: ["tissutheque", "difference-entre-tissus-et-tissage"],
    freeResource: "ou-acheter-ses-tissus-et-fournitures",
    faq: commonFaq,
  },
  {
    slug: "difference-entre-tissus-et-tissage",
    title: "La différence entre tissus et tissage",
    shortDescription:
      "Comprendre ce qui distingue une matière d'une construction textile, pour mieux choisir ses tissus.",
    category: "Tissus et matières",
    format: "PDF",
    level: "Débutant à intermédiaire",
    price: null,
    status: "bientot",
    benefits: [
      "Distinguer fibre, matière, tissage et maille",
      "Anticiper le comportement d'un tissu avant l'achat",
      "Lire correctement une étiquette de tissu",
    ],
    content: [
      "Fibres naturelles, artificielles et synthétiques",
      "Les grandes familles de tissage : toile, sergé, satin",
      "Tissés et tricotés : ce qui change à la couture",
      "Armure, grammage, tombé et élasticité",
      "Tableau récapitulatif matière / tissage / usage",
    ],
    material: ["Quelques chutes de tissu pour observer les armures"],
    usage: baseUsage,
    image: null,
    imageAlt: "Aperçu du guide sur la différence entre tissus et tissage",
    gallery: [
      { src: null, alt: "Aperçu des schémas d'armures de tissage" },
      { src: null, alt: "Aperçu du tableau matière, tissage et usage" },
    ],
    seo: {
      title: "Tissu ou tissage : comprendre la différence — Grisette Académie",
      description:
        "Fibre, matière, armure, maille : un guide PDF pour comprendre la différence entre tissus et tissage et mieux choisir ses coupons.",
      pinterestTitle: "Tissu ou tissage : quelle différence ?",
      pinterestDescription:
        "Fibres, armures, tissés et tricotés : comprendre les tissus avant de les coudre.",
      pinterestImage: null,
    },
    related: ["tissutheque", "lexique-de-la-couturiere"],
    freeResource: "choisir-son-tissu-premier-vetement",
    faq: commonFaq,

  },
  {
    slug: "tissutheque",
    title: "Tissuthèque",
    shortDescription:
      "Un support pour constituer sa propre tissuthèque : échantillons, caractéristiques et projets possibles.",
    category: "Tissus et matières",
    format: "PDF imprimable",
    level: "Tous niveaux",
    price: null,
    status: "bientot",
    benefits: [
      "Garder une trace de chaque tissu acheté",
      "Retrouver la référence exacte d'un coupon apprécié",
      "Choisir un tissu adapté sans se déplacer",
    ],
    content: [
      "Fiche échantillon à remplir (matière, laize, grammage, prix)",
      "Emplacement pour coller un morceau de tissu",
      "Notes d'entretien et de prélavage",
      "Projets réalisés ou envisagés avec ce tissu",
      "Index de classement par famille de tissu",
    ],
    material: ["Une imprimante", "Des chutes de tissu", "De la colle ou de l'adhésif textile"],
    usage: baseUsage,
    image: null,
    imageAlt: "Aperçu des fiches de tissuthèque à imprimer",
    gallery: [
      { src: null, alt: "Aperçu d'une fiche échantillon de tissuthèque" },
      { src: null, alt: "Aperçu de l'index de classement des tissus" },
    ],
    seo: {
      title: "Tissuthèque à imprimer : fiches échantillons — Grisette Académie",
      description:
        "Des fiches PDF pour créer ta tissuthèque : échantillons, matière, laize, grammage, entretien et projets associés.",
      pinterestTitle: "Créer sa tissuthèque : les fiches à imprimer",
      pinterestDescription:
        "Classe tes échantillons de tissu avec leurs caractéristiques et leurs projets possibles.",
      pinterestImage: null,
    },
    related: ["difference-entre-tissus-et-tissage", "liste-des-fournisseurs"],
    freeResource: "creer-sa-tissutheque-methode-simple",
    faq: commonFaq,
  },
  {
    slug: "machines-apprendre-et-comprendre",
    title: "Machines : apprendre et comprendre",
    shortDescription:
      "Comprendre le fonctionnement de sa machine à coudre et de sa surjeteuse, du réglage au dépannage.",
    category: "Machines et outils",
    format: "PDF",
    level: "Débutant à intermédiaire",
    price: null,
    status: "bientot",
    benefits: [
      "Comprendre le rôle de chaque réglage",
      "Diagnostiquer seule un point irrégulier",
      "Entretenir sa machine pour la garder fiable",
    ],
    content: [
      "Anatomie de la machine à coudre",
      "Tension, longueur de point et pression du pied",
      "Choisir aiguille et fil selon le tissu",
      "Surjeteuse : principes et enfilage",
      "Tableau de dépannage des problèmes courants",
      "Routine d'entretien et de nettoyage",
    ],
    material: ["Ta machine à coudre", "Des chutes de tissu pour les essais"],
    usage: baseUsage,
    image: null,
    imageAlt: "Aperçu du guide sur les machines à coudre",
    gallery: [
      { src: null, alt: "Aperçu du schéma d'anatomie de la machine à coudre" },
      { src: null, alt: "Aperçu du tableau de dépannage des points irréguliers" },
    ],
    seo: {
      title: "Machines à coudre : apprendre et comprendre — Grisette Académie",
      description:
        "Un guide PDF pour comprendre sa machine à coudre et sa surjeteuse : réglages, aiguilles, tensions, entretien et dépannage.",
      pinterestTitle: "Comprendre sa machine à coudre",
      pinterestDescription:
        "Réglages, tension, aiguilles et entretien : tout comprendre au fonctionnement de sa machine.",
      pinterestImage: null,
    },
    related: ["guide-debutant", "lexique-de-la-couturiere"],
    freeResource: "reglages-machine-a-coudre-les-bases",
    faq: commonFaq,
  },
  {
    slug: "lexique-de-la-couturiere",
    title: "Lexique de la couturière",
    shortDescription:
      "Le vocabulaire de la couture expliqué simplement, des termes de patron aux gestes techniques.",
    category: "Vocabulaire couture",
    format: "PDF",
    level: "Tous niveaux",
    price: null,
    status: "bientot",
    benefits: [
      "Comprendre les instructions d'un patron sans blocage",
      "Mettre un mot juste sur chaque geste",
      "Progresser plus vite en cours et en tutoriel",
    ],
    content: [
      "Termes de patron et de coupe",
      "Vocabulaire des coutures et des finitions",
      "Mots liés aux tissus et aux fournitures",
      "Termes de repassage et de mise en forme",
      "Index alphabétique",
    ],
    material: ["Aucun matériel particulier"],
    usage: baseUsage,
    image: null,
    imageAlt: "Aperçu du lexique de la couturière",
    gallery: [
      { src: null, alt: "Aperçu des définitions de termes de couture" },
      { src: null, alt: "Aperçu de l'index alphabétique du lexique" },
    ],
    seo: {
      title: "Lexique de la couturière : le vocabulaire couture — Grisette Académie",
      description:
        "Un lexique PDF des termes de couture : patron, coupe, coutures, finitions, tissus et repassage, expliqués simplement.",
      pinterestTitle: "Le lexique de la couturière",
      pinterestDescription:
        "Tous les termes de couture expliqués simplement pour lire un patron sans hésiter.",
      pinterestImage: null,
    },
    related: ["lexique-de-la-modeliste", "guide-debutant"],
    freeResource: "20-mots-de-couture-a-connaitre",
    faq: commonFaq,
  },
  {
    slug: "lexique-de-la-modeliste",
    title: "Lexique de la modéliste",
    shortDescription:
      "Le vocabulaire du patronage et du modélisme, pour aborder la construction du vêtement.",
    category: "Vocabulaire couture",
    format: "PDF",
    level: "Intermédiaire à avancé",
    price: null,
    status: "bientot",
    benefits: [
      "Comprendre le vocabulaire du patronage",
      "Suivre un cours de modélisme plus sereinement",
      "Nommer précisément les transformations de patron",
    ],
    content: [
      "Termes de base du patronage",
      "Pinces, aisance et lignes de construction",
      "Transformations et évolutions de patron",
      "Vocabulaire du moulage et du prototype",
      "Index alphabétique",
    ],
    material: ["Aucun matériel particulier"],
    usage: baseUsage,
    image: null,
    imageAlt: "Aperçu du lexique de la modéliste",
    gallery: [
      { src: null, alt: "Aperçu des termes de patronage" },
      { src: null, alt: "Aperçu des schémas de lignes de construction" },
    ],
    seo: {
      title: "Lexique de la modéliste : vocabulaire du patronage — Grisette Académie",
      description:
        "Un lexique PDF des termes de modélisme et de patronage : pinces, aisance, lignes de construction, moulage et prototype.",
      pinterestTitle: "Le lexique de la modéliste",
      pinterestDescription:
        "Patronage, pinces, aisance, moulage : le vocabulaire du modélisme expliqué.",
      pinterestImage: null,
    },
    related: ["lexique-de-la-couturiere", "les-livres-essentiels"],
    freeResource: "20-mots-de-couture-a-connaitre",
    faq: commonFaq,
  },
  {
    slug: "guide-debutant",
    title: "Guide débutant",
    shortDescription:
      "Le guide complet pour démarrer la couture : matériel, premiers gestes, premier projet et organisation.",
    category: "Couture débutante",
    format: "PDF imprimable",
    level: "Débutant",
    price: null,
    status: "bientot",
    benefits: [
      "Savoir par où commencer sans se disperser",
      "Réaliser un premier projet jusqu'au bout",
      "Prendre de bonnes habitudes dès le départ",
    ],
    content: [
      "Le matériel vraiment nécessaire pour commencer",
      "Prendre ses mesures et choisir sa taille",
      "Lire un patron et préparer son tissu",
      "Les points et coutures de base",
      "Un premier projet guidé étape par étape",
      "Checklist et fiche de suivi de projet",
    ],
    material: ["Une machine à coudre", "Un mètre ruban", "Du tissu simple pour s'entraîner"],
    usage: baseUsage,
    image: null,
    imageAlt: "Aperçu du guide débutant en couture",
    gallery: [
      { src: null, alt: "Aperçu de la liste de matériel du guide débutant" },
      { src: null, alt: "Aperçu du premier projet guidé" },
      { src: null, alt: "Aperçu de la checklist de suivi de projet" },
    ],
    seo: {
      title: "Guide débutant couture (PDF) — Grisette Académie",
      description:
        "Un guide PDF pour débuter la couture : matériel, mesures, lecture de patron, points de base et premier projet guidé.",
      pinterestTitle: "Le guide pour débuter la couture",
      pinterestDescription:
        "Matériel, mesures, patron et premier projet : tout pour commencer la couture sereinement.",
      pinterestImage: null,
    },
    related: ["machines-apprendre-et-comprendre", "lexique-de-la-couturiere"],
    freeResource: "premiers-pas-en-couture-plan-en-5-etapes",
    faq: commonFaq,
  },
];

export const shopFaq = [
  ...commonFaq.slice(0, 2),
  {
    question: "Quel format est utilisé ?",
    answer:
      "Les ressources sont proposées en PDF, prévues pour une impression A4 ou un usage à l'écran.",
  },
  {
    question: "Les guides sont-ils adaptés aux débutants ?",
    answer:
      "Oui. Chaque guide indique le niveau conseillé, et plusieurs sont pensés spécifiquement pour les débutants.",
  },
  {
    question: "Existe-t-il une version gratuite ?",
    answer:
      "Chaque guide est accompagné d'une ressource gratuite sur le blog, qui en reprend les bases.",
  },
  {
    question: "Comment contacter Grisette Académie en cas de question ?",
    answer:
      "Via la page Contact : le formulaire permet de choisir le type de demande pour une réponse plus rapide.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
