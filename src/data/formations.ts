/**
 * Formations courtes. Aucune n'est présentée comme disponible.
 */
export interface Formation {
  slug: string;
  title: string;
  objective: string;
  difficulty: string;
  duration: string;
  format: string;
  level: string;
  prerequisites: string[];
  goals: string[];
  modules: string[];
  material: string[];
  price: string | null;
  status: "bientot" | "exemple" | "disponible";
  image: string | null;
  imageAlt: string;
  related: string[];
  seo: {
    title: string;
    description: string;
    pinterestTitle: string;
    pinterestDescription: string;
    pinterestImage: string | null;
  };
}

export const formationFaq = [
  {
    question: "Quand les formations courtes seront-elles disponibles ?",
    answer:
      "Elles sont en préparation. Aucune date n'est annoncée pour le moment afin de ne rien promettre d'incertain.",
  },
  {
    question: "Combien de temps dure une formation courte ?",
    answer: "Le format est court et ciblé sur une technique. La durée exacte sera précisée à l'ouverture.",
  },
  {
    question: "Faut-il un niveau minimum ?",
    answer: "Chaque formation courte indique son niveau et ses prérequis sur sa page.",
  },
  {
    question: "Puis-je poser des questions pendant la formation ?",
    answer: "Les modalités d'accompagnement seront précisées avant l'ouverture des inscriptions.",
  },
];

const base = {
  difficulty: "Débutante",
  duration: "Informations à venir",
  format: "Format en ligne — informations à venir",
  level: "Débutante à intermédiaire",
  price: null,
  status: "bientot" as const,
  image: null,
  material: ["Matériel de couture habituel", "Un mètre ruban"],
};

export const formations: Formation[] = [
  {
    ...base,
    slug: "comprendre-le-droit-fil",
    title: "Comprendre et utiliser le droit-fil",
    objective: "Savoir repérer le droit-fil et placer correctement son patron sur le tissu.",
    prerequisites: ["Aucun prérequis technique"],
    goals: [
      "Identifier le droit-fil sur différents tissus",
      "Placer un patron en respectant le sens du tissu",
      "Comprendre l'impact du droit-fil sur le tombé",
    ],
    modules: [
      "Ce qu'est le droit-fil",
      "Repérer le sens du tissu",
      "Placer et épingler son patron",
      "Erreurs fréquentes et vérifications",
    ],
    imageAlt: "Tissu plié avec un patron placé dans le sens du droit-fil",
    related: ["preparer-son-projet-avant-de-couper"],
    seo: {
      title: "Formation courte : comprendre le droit-fil — Grisette Académie",
      description:
        "Une formation courte courte pour repérer le droit-fil et placer correctement son patron sur le tissu.",
      pinterestTitle: "Comprendre le droit-fil en couture",
      pinterestDescription: "Repérer le droit-fil et bien placer son patron pour un vêtement qui tombe juste.",
      pinterestImage: null,
    },
  },
  {
    ...base,
    slug: "prendre-correctement-ses-mesures",
    title: "Prendre correctement ses mesures",
    objective: "Relever ses mesures avec précision pour choisir la bonne taille de patron.",
    prerequisites: ["Un mètre ruban"],
    goals: [
      "Connaître les points de mesure essentiels",
      "Relever ses mesures sans les fausser",
      "Comparer ses mesures au tableau d'un patron",
    ],
    modules: [
      "Les points de mesure essentiels",
      "La bonne posture et les bons gestes",
      "Lire un tableau de tailles",
      "Noter et réutiliser ses mesures",
    ],
    imageAlt: "Mètre ruban utilisé pour relever un tour de taille",
    related: ["comprendre-le-droit-fil"],
    seo: {
      title: "Formation courte : prendre ses mesures — Grisette Académie",
      description:
        "Apprendre à relever ses mesures couture avec précision pour choisir la bonne taille de patron.",
      pinterestTitle: "Prendre ses mesures en couture, correctement",
      pinterestDescription: "Les points de mesure essentiels et les gestes justes pour choisir sa taille de patron.",
      pinterestImage: null,
    },
  },
  {
    ...base,
    slug: "choisir-un-tissu-adapte",
    title: "Choisir un tissu adapté à son projet",
    objective: "Savoir sélectionner une matière cohérente avec le vêtement souhaité.",
    prerequisites: ["Aucun prérequis technique"],
    goals: [
      "Reconnaître les grandes familles de tissus",
      "Associer une matière à un type de vêtement",
      "Anticiper l'entretien et le tombé",
    ],
    modules: [
      "Familles de tissus et comportements",
      "Lire les recommandations d'un patron",
      "Métrage, laize et sens du tissu",
      "Entretien et prélavage",
    ],
    imageAlt: "Échantillons de tissus variés présentés côte à côte",
    related: ["preparer-son-projet-avant-de-couper"],
    seo: {
      title: "Formation courte : choisir son tissu — Grisette Académie",
      description:
        "Une formation courte pour choisir un tissu adapté à son projet couture : familles de matières, tombé et entretien.",
      pinterestTitle: "Choisir le bon tissu pour son projet couture",
      pinterestDescription: "Familles de tissus, tombé, métrage et entretien : bien choisir sa matière.",
      pinterestImage: null,
    },
  },
  {
    ...base,
    slug: "preparer-son-projet-avant-de-couper",
    title: "Préparer son projet avant de couper",
    objective: "Mettre en place toutes les vérifications utiles avant la coupe du tissu.",
    difficulty: "Débutante à intermédiaire",
    prerequisites: ["Avoir un patron et un tissu"],
    goals: [
      "Préparer son tissu et son patron",
      "Vérifier ses mesures et ses ajustements",
      "Organiser sa coupe pour éviter les erreurs",
    ],
    modules: [
      "Prélavage et repassage du tissu",
      "Vérification du patron et des marges",
      "Plan de coupe",
      "Dernière checklist avant la coupe",
    ],
    imageAlt: "Tissu préparé et patron épinglé avant la coupe",
    related: ["comprendre-le-droit-fil", "choisir-un-tissu-adapte"],
    seo: {
      title: "Formation courte : préparer son projet avant de couper — Grisette Académie",
      description:
        "Les vérifications à effectuer avant de couper son tissu : prélavage, patron, marges et plan de coupe.",
      pinterestTitle: "Avant de couper : la préparation d'un projet couture",
      pinterestDescription: "Prélavage, patron, marges et plan de coupe : tout vérifier avant de couper.",
      pinterestImage: null,
    },
  },
  {
    ...base,
    slug: "ameliorer-la-qualite-de-ses-finitions",
    title: "Améliorer la qualité de ses finitions",
    objective: "Obtenir des finitions plus nettes et plus durables sur ses vêtements.",
    difficulty: "Intermédiaire",
    level: "Intermédiaire",
    prerequisites: ["Savoir assembler un vêtement simple"],
    goals: [
      "Choisir une finition adaptée au tissu",
      "Soigner ourlets et surpiqûres",
      "Utiliser le repassage comme outil de finition",
    ],
    modules: [
      "Finitions de bords selon les matières",
      "Ourlets réguliers",
      "Surpiqûres et sous-piqûres",
      "Repassage et mise en forme",
    ],
    imageAlt: "Détail d'un ourlet et d'une surpiqûre soignée",
    related: ["preparer-son-projet-avant-de-couper"],
    seo: {
      title: "Formation courte : réussir ses finitions couture — Grisette Académie",
      description:
        "Améliorer la qualité de ses finitions couture : bords, ourlets, surpiqûres et repassage.",
      pinterestTitle: "Réussir ses finitions couture",
      pinterestDescription: "Bords, ourlets, surpiqûres et repassage : les clés de finitions nettes.",
      pinterestImage: null,
    },
  },
];

export const getFormation = (slug: string) => formations.find((f) => f.slug === slug);