/**
 * Produits numériques (templates & guides).
 * Contenu d'EXEMPLE : remplacer par les vrais produits, prix et images.
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
}

export const productCategories = [
  "Organisation couture",
  "Couture débutante",
  "Prise de mesures",
  "Techniques de couture",
  "Inspiration et création",
  "Guides pratiques",
];

const commonFaq = [
  {
    question: "Que vais-je recevoir après mon achat ?",
    answer:
      "Le paiement n'est pas encore activé. Une fois la boutique ouverte, tu recevras un fichier numérique à télécharger immédiatement après ta commande.",
  },
  {
    question: "Les templates sont-ils imprimables ?",
    answer: "Oui, ils sont pensés pour être imprimés au format A4 ou utilisés à l'écran.",
  },
  {
    question: "Puis-je utiliser le template pour mon organisation personnelle ?",
    answer:
      "Oui, l'usage est personnel. La revente et la rediffusion du fichier ne sont pas autorisées.",
  },
];

export const products: Product[] = [
  {
    slug: "template-organiser-projet-couture",
    title: "Template pour organiser un projet couture",
    shortDescription:
      "Un support pratique pour réunir inspiration, mesures, tissus, fournitures, étapes et notes au même endroit.",
    category: "Organisation couture",
    format: "PDF imprimable",
    level: "Débutante à intermédiaire",
    price: null,
    status: "exemple",
    benefits: [
      "Rassembler toutes les informations d'un projet sur un seul document",
      "Préparer ses fournitures avant de commencer",
      "Suivre l'avancement étape par étape",
    ],
    content: [
      "Page d'inspiration et croquis",
      "Fiche tissus et fournitures",
      "Rappel des mesures utiles",
      "Plan des étapes de réalisation",
      "Espace de notes et d'ajustements",
    ],
    material: ["Une imprimante (facultatif)", "Un stylo ou un crayon", "Un mètre ruban"],
    usage: [
      "Usage personnel uniquement",
      "Impression libre pour tes propres projets",
      "Revente et partage du fichier interdits",
    ],
    image: null,
    imageAlt: "Aperçu du template d'organisation de projet couture",
    gallery: [
      { src: null, alt: "Aperçu de la page inspiration du template couture" },
      { src: null, alt: "Aperçu de la fiche tissus et fournitures" },
      { src: null, alt: "Aperçu du plan des étapes de réalisation" },
    ],
    seo: {
      title: "Template d'organisation de projet couture (PDF) — Grisette Academy",
      description:
        "Un template PDF imprimable pour organiser un projet couture : inspiration, mesures, tissus, fournitures et étapes réunis au même endroit.",
      pinterestTitle: "Organiser un projet couture : le template à imprimer",
      pinterestDescription:
        "Un support simple pour préparer un projet couture de A à Z : inspiration, tissus, fournitures, mesures et étapes.",
      pinterestImage: null,
    },
    related: ["checklist-couture-debutante", "fiche-mesures-couture"],
    faq: commonFaq,
  },
  {
    slug: "checklist-couture-debutante",
    title: "Checklist couture pour débutante",
    shortDescription:
      "Une checklist simple pour préparer son matériel et éviter les oublis avant de commencer un projet.",
    category: "Couture débutante",
    format: "PDF imprimable",
    level: "Débutante",
    price: null,
    status: "exemple",
    benefits: [
      "Savoir exactement quoi préparer avant de coudre",
      "Éviter les allers-retours en mercerie",
      "Démarrer un projet plus sereinement",
    ],
    content: [
      "Liste du matériel de base",
      "Fournitures spécifiques au projet",
      "Vérifications avant la coupe",
      "Points de contrôle avant l'assemblage",
    ],
    material: ["Une imprimante (facultatif)", "Ton matériel de couture habituel"],
    usage: ["Usage personnel uniquement", "Revente et partage du fichier interdits"],
    image: null,
    imageAlt: "Aperçu de la checklist couture pour débutante",
    gallery: [
      { src: null, alt: "Aperçu de la liste du matériel de base" },
      { src: null, alt: "Aperçu des points de contrôle avant la coupe" },
    ],
    seo: {
      title: "Checklist couture débutante à imprimer — Grisette Academy",
      description:
        "Une checklist PDF pour préparer son matériel et ses fournitures avant de commencer un projet couture quand on débute.",
      pinterestTitle: "La checklist à imprimer avant de commencer à coudre",
      pinterestDescription:
        "Matériel, fournitures et vérifications : la checklist des débutantes en couture.",
      pinterestImage: null,
    },
    related: ["template-organiser-projet-couture", "fiche-mesures-couture"],
    faq: commonFaq,
  },
  {
    slug: "fiche-mesures-couture",
    title: "Fiche de mesures couture",
    shortDescription:
      "Une fiche claire pour noter et conserver ses mesures importantes avant de choisir un patron.",
    category: "Prise de mesures",
    format: "PDF",
    level: "Tous niveaux",
    price: null,
    status: "exemple",
    benefits: [
      "Conserver ses mesures au même endroit",
      "Comparer ses mesures aux tableaux des patrons",
      "Suivre l'évolution de ses mesures dans le temps",
    ],
    content: [
      "Schéma des points de mesure",
      "Tableau de relevé des mesures",
      "Colonne de comparaison avec le patron",
      "Espace de notes d'ajustement",
    ],
    material: ["Un mètre ruban", "Un stylo"],
    usage: ["Usage personnel uniquement", "Revente et partage du fichier interdits"],
    image: null,
    imageAlt: "Aperçu de la fiche de mesures couture",
    gallery: [
      { src: null, alt: "Aperçu du schéma des points de mesure" },
      { src: null, alt: "Aperçu du tableau de relevé des mesures" },
    ],
    seo: {
      title: "Fiche de mesures couture à imprimer — Grisette Academy",
      description:
        "Une fiche PDF pour relever, noter et conserver ses mesures couture avant de choisir la taille de son patron.",
      pinterestTitle: "La fiche de mesures à garder avant de choisir un patron",
      pinterestDescription:
        "Note et conserve tes mesures couture pour choisir la bonne taille de patron.",
      pinterestImage: null,
    },
    related: ["template-organiser-projet-couture", "checklist-couture-debutante"],
    faq: commonFaq,
  },
];

export const shopFaq = [
  ...commonFaq.slice(0, 2),
  {
    question: "Quel format est utilisé ?",
    answer: "Les ressources sont proposées en PDF, prévues pour une impression A4 ou un usage à l'écran.",
  },
  {
    question: "Les produits sont-ils adaptés aux débutantes ?",
    answer:
      "Oui. Chaque ressource indique le niveau conseillé, et plusieurs sont pensées spécifiquement pour les débutantes.",
  },
  {
    question: "Puis-je utiliser les templates pour mon organisation personnelle ?",
    answer:
      "Oui, l'usage est personnel. La revente et la rediffusion du fichier ne sont pas autorisées.",
  },
  {
    question: "Comment contacter Grisette Academy en cas de question ?",
    answer:
      "Via la page Contact : le formulaire permet de choisir le type de demande pour une réponse plus rapide.",
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);