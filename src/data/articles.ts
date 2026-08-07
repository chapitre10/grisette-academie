/**
 * Articles du blog / ressources gratuites.
 * Contenu d'exemple rédigé pour être remplacé par tes vrais textes.
 */
export interface ArticleBlock {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string; // ISO
  readingTime: string;
  intro: string;
  blocks: ArticleBlock[];
  keyTakeaways: string[];
  cta: { label: string; to: string; params?: Record<string, string>; text: string };
  image: string | null;
  imageAlt: string;
  seo: {
    title: string;
    description: string;
    pinterestTitle: string;
    pinterestDescription: string;
    pinterestImage: string | null; // image verticale 1000x1500
  };
}

export const articleCategories = [
  "Débuter la couture",
  "Organisation",
  "Techniques",
  "Tissus et matières",
  "Création de vêtements",
  "Conseils de professeure de couture",
];

export const articles: Article[] = [
  {
    slug: "fournitures-indispensables-debuter-couture",
    title: "Les fournitures indispensables pour débuter la couture",
    excerpt:
      "Le matériel réellement utile pour commencer à coudre, sans multiplier les achats inutiles.",
    category: "Débuter la couture",
    tags: ["matériel", "débutante", "fournitures"],
    date: "2026-05-12",
    readingTime: "5 min",
    intro:
      "Quand on débute la couture, la liste de matériel peut vite devenir décourageante. En réalité, quelques outils bien choisis suffisent pour réaliser ses premiers projets dans de bonnes conditions.",
    blocks: [
      {
        heading: "Le matériel de mesure et de tracé",
        paragraphs: [
          "Un mètre ruban souple reste l'outil de base : il sert à prendre ses mesures et à vérifier les longueurs sur le tissu.",
          "Ajoute une règle plate, une craie tailleur ou un crayon effaçable, et de quoi épingler. Ces trois éléments couvrent l'essentiel de la préparation.",
        ],
      },
      {
        heading: "Les outils de coupe",
        paragraphs: [
          "Une bonne paire de ciseaux réservée au tissu change la précision de la coupe. Garde une seconde paire pour le papier afin de ne pas l'émousser.",
          "Un découd-vite est également très utile : reprendre une couture fait partie de l'apprentissage.",
        ],
      },
      {
        heading: "Le fil, les aiguilles et le repassage",
        paragraphs: [
          "Choisis un fil polyester polyvalent et adapte l'aiguille de machine à ton tissu. Une aiguille inadaptée explique une grande partie des points irréguliers.",
          "Enfin, le fer à repasser est un véritable outil de couture : repasser au fur et à mesure donne des finitions beaucoup plus nettes.",
        ],
      },
    ],
    keyTakeaways: [
      "Quelques outils bien choisis suffisent pour débuter.",
      "Réserve tes ciseaux de couture au tissu uniquement.",
      "Le repassage progressif améliore immédiatement le rendu.",
    ],
    cta: {
      label: "Découvrir la checklist couture",
      to: "/boutique/$slug",
      params: { slug: "checklist-couture-debutante" },
      text: "Pour ne rien oublier avant de commencer, une checklist imprimable peut t'aider à préparer ton matériel.",
    },
    image: null,
    imageAlt: "Fournitures de couture posées sur une table d'atelier",
    seo: {
      title: "Fournitures indispensables pour débuter la couture — Grisette Academy",
      description:
        "Quel matériel de couture acheter quand on débute ? La liste des fournitures réellement utiles pour bien commencer.",
      pinterestTitle: "Le matériel indispensable pour débuter la couture",
      pinterestDescription:
        "Mesure, coupe, fil, aiguilles, repassage : les fournitures vraiment utiles pour commencer à coudre.",
      pinterestImage: null,
    },
  },
  {
    slug: "organiser-projet-couture-de-a-a-z",
    title: "Comment organiser un projet couture de A à Z ?",
    excerpt:
      "Une méthode simple pour passer de l'idée au vêtement terminé, sans se disperser.",
    category: "Organisation",
    tags: ["organisation", "méthode", "projet"],
    date: "2026-04-28",
    readingTime: "6 min",
    intro:
      "Un projet couture réussi se joue en grande partie avant la première couture. Voici une manière d'organiser les étapes pour avancer avec clarté.",
    blocks: [
      {
        heading: "1. Clarifier l'intention du projet",
        paragraphs: [
          "Note ce que tu veux obtenir : la pièce, la saison, l'usage. Cette étape évite de choisir un tissu qui ne correspondra pas au vêtement imaginé.",
        ],
      },
      {
        heading: "2. Préparer les mesures et le patron",
        paragraphs: [
          "Relève tes mesures, compare-les au tableau du patron, puis note les ajustements éventuels. Ce travail écrit se réutilise pour tous tes projets suivants.",
        ],
      },
      {
        heading: "3. Rassembler tissus et fournitures",
        paragraphs: [
          "Liste le métrage, la laize, les fils, les fermetures et les éventuelles doublures. Vérifie tout avant la coupe.",
        ],
      },
      {
        heading: "4. Planifier les étapes de couture",
        paragraphs: [
          "Découpe le projet en séances courtes : préparation, coupe, assemblage, essayage, finitions. Progresser par étapes rend le projet beaucoup moins intimidant.",
        ],
      },
    ],
    keyTakeaways: [
      "La préparation représente une grande partie de la réussite.",
      "Écrire ses mesures et ses ajustements fait gagner du temps.",
      "Découper le projet en séances courtes évite le découragement.",
    ],
    cta: {
      label: "Voir le template d'organisation",
      to: "/boutique/$slug",
      params: { slug: "template-organiser-projet-couture" },
      text: "Le template d'organisation reprend ces étapes sur un seul document à compléter.",
    },
    image: null,
    imageAlt: "Carnet de couture ouvert avec échantillons de tissu",
    seo: {
      title: "Organiser un projet couture de A à Z — Grisette Academy",
      description:
        "Une méthode en quatre étapes pour organiser un projet couture : intention, mesures, fournitures et planification des séances.",
      pinterestTitle: "Organiser un projet couture en 4 étapes",
      pinterestDescription:
        "De l'idée au vêtement terminé : la méthode pour préparer un projet couture sans se disperser.",
      pinterestImage: null,
    },
  },
  {
    slug: "choisir-son-tissu-premier-vetement",
    title: "Comment choisir son tissu pour un premier vêtement ?",
    excerpt: "Les critères qui rendent un tissu plus facile à coudre quand on apprend.",
    category: "Tissus et matières",
    tags: ["tissus", "débutante", "matières"],
    date: "2026-04-10",
    readingTime: "5 min",
    intro:
      "Tous les tissus ne se comportent pas de la même façon sous l'aiguille. Pour un premier vêtement, certaines matières rendent l'apprentissage beaucoup plus agréable.",
    blocks: [
      {
        heading: "Privilégier des matières stables",
        paragraphs: [
          "Un tissu stable, qui ne glisse pas et ne s'étire pas, permet de se concentrer sur la couture plutôt que sur la maîtrise de la matière.",
        ],
      },
      {
        heading: "Lire les recommandations du patron",
        paragraphs: [
          "Le patron indique les matières adaptées et le métrage nécessaire. Respecter ces indications évite un rendu très différent du modèle.",
        ],
      },
      {
        heading: "Penser à l'entretien et au tombé",
        paragraphs: [
          "Le tombé du tissu détermine l'allure du vêtement. Manipule le métrage en boutique : la façon dont il se plie t'indique déjà beaucoup.",
        ],
      },
    ],
    keyTakeaways: [
      "Les matières stables sont plus faciles à coudre.",
      "Le patron reste la meilleure référence pour le choix du tissu.",
      "Le tombé influence directement l'allure finale.",
    ],
    cta: {
      label: "Voir la micro-formation",
      to: "/micro-formations/$slug",
      params: { slug: "choisir-un-tissu-adapte" },
      text: "Une micro-formation est prévue pour approfondir le choix des tissus selon le projet.",
    },
    image: null,
    imageAlt: "Coupons de tissus empilés dans un atelier de couture",
    seo: {
      title: "Choisir son tissu pour un premier vêtement — Grisette Academy",
      description:
        "Quels tissus choisir pour coudre son premier vêtement ? Stabilité, recommandations du patron, tombé et entretien.",
      pinterestTitle: "Quel tissu choisir pour son premier vêtement cousu ?",
      pinterestDescription:
        "Les critères pour choisir un tissu facile à coudre quand on débute la couture.",
      pinterestImage: null,
    },
  },
  {
    slug: "prendre-ses-mesures-avant-de-choisir-un-patron",
    title: "Pourquoi prendre ses mesures avant de choisir un patron ?",
    excerpt: "Les mesures, et non la taille du prêt-à-porter, déterminent la taille du patron.",
    category: "Techniques",
    tags: ["mesures", "patron", "ajustement"],
    date: "2026-03-22",
    readingTime: "4 min",
    intro:
      "Choisir sa taille de patron d'après sa taille habituelle en magasin conduit souvent à un vêtement mal ajusté. Les mesures restent la seule référence fiable.",
    blocks: [
      {
        heading: "Chaque patron a son propre tableau de tailles",
        paragraphs: [
          "Les tableaux varient d'une marque à l'autre. Comparer ses mesures au tableau du patron évite les mauvaises surprises à l'essayage.",
        ],
      },
      {
        heading: "Mesurer au bon endroit",
        paragraphs: [
          "Tour de poitrine, de taille, de bassin, longueur de dos : le mètre doit rester horizontal et sans serrer. Se faire aider améliore nettement la précision.",
        ],
      },
      {
        heading: "Noter et conserver ses mesures",
        paragraphs: [
          "Garder ses mesures écrites permet de choisir plus vite ses tailles et de repérer les ajustements récurrents.",
        ],
      },
    ],
    keyTakeaways: [
      "La taille du prêt-à-porter n'est pas la taille du patron.",
      "Chaque marque possède son propre tableau de mesures.",
      "Des mesures écrites se réutilisent d'un projet à l'autre.",
    ],
    cta: {
      label: "Découvrir la fiche de mesures",
      to: "/boutique/$slug",
      params: { slug: "fiche-mesures-couture" },
      text: "La fiche de mesures permet de tout consigner au même endroit.",
    },
    image: null,
    imageAlt: "Mètre ruban et patron de couture posés sur une table",
    seo: {
      title: "Prendre ses mesures avant de choisir un patron — Grisette Academy",
      description:
        "Pourquoi et comment prendre ses mesures avant de choisir la taille de son patron de couture.",
      pinterestTitle: "Prendre ses mesures avant de choisir un patron",
      pinterestDescription:
        "La taille du patron se choisit d'après les mesures, pas d'après la taille du prêt-à-porter.",
      pinterestImage: null,
    },
  },
  {
    slug: "erreurs-frequentes-quand-on-debute-la-couture",
    title: "7 erreurs fréquentes quand on débute la couture",
    excerpt: "Des maladresses très courantes, faciles à corriger dès les premiers projets.",
    category: "Conseils de professeure de couture",
    tags: ["débutante", "conseils", "erreurs"],
    date: "2026-03-05",
    readingTime: "6 min",
    intro:
      "Ces erreurs reviennent régulièrement en cours. Les connaître à l'avance permet de progresser plus vite et avec moins de frustration.",
    blocks: [
      {
        heading: "Sauter la préparation",
        paragraphs: [
          "Commencer sans avoir vérifié ses mesures, son métrage et ses fournitures allonge finalement le projet.",
          "Un tissu non prélavé peut aussi rétrécir après la première lessive.",
        ],
      },
      {
        heading: "Négliger le droit-fil et le repassage",
        paragraphs: [
          "Couper sans respecter le droit-fil déforme le vêtement. Et repasser seulement à la fin fige les défauts d'assemblage.",
        ],
      },
      {
        heading: "Viser un projet trop ambitieux",
        paragraphs: [
          "Choisir un premier projet simple permet de terminer, donc de progresser. Les finitions soignées viennent avec la pratique, pas avec la précipitation.",
        ],
      },
    ],
    keyTakeaways: [
      "La préparation évite la majorité des difficultés.",
      "Droit-fil et repassage conditionnent le rendu final.",
      "Un projet terminé apprend plus qu'un projet abandonné.",
    ],
    cta: {
      label: "Voir la micro-formation droit-fil",
      to: "/micro-formations/$slug",
      params: { slug: "comprendre-le-droit-fil" },
      text: "Le droit-fil mérite un temps d'apprentissage à part entière.",
    },
    image: null,
    imageAlt: "Détail d'une couture en cours sur une machine à coudre",
    seo: {
      title: "7 erreurs fréquentes quand on débute la couture — Grisette Academy",
      description:
        "Préparation, droit-fil, repassage, choix du projet : les erreurs les plus courantes des débutantes en couture et comment les éviter.",
      pinterestTitle: "7 erreurs fréquentes quand on débute la couture",
      pinterestDescription:
        "Les maladresses classiques des débutantes en couture, et les réflexes simples pour les éviter.",
      pinterestImage: null,
    },
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const formatDateFr = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });