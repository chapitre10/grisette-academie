/**
 * Contenu de l'Espace débutant — textes et liens modifiables à la main.
 */
export type Statut = "disponible" | "bientot";

export type LienInterne = {
  to: string;
  params?: Record<string, string>;
};

export type CarteDepart = {
  icon: "scissors" | "sparkles" | "notebook";
  title: string;
  description: string;
  cta: string;
  link: LienInterne | null; // null => bientôt disponible
};

export const cartesDepart: CarteDepart[] = [
  {
    icon: "scissors",
    title: "Comprendre le matériel de couture",
    description:
      "Découvre les outils indispensables pour commencer sans acheter tout l'atelier d'un coup.",
    cta: "Voir le matériel essentiel",
    link: { to: "/blog/$slug", params: { slug: "fournitures-indispensables-debuter-couture" } },
  },
  {
    icon: "sparkles",
    title: "Apprendre les premiers gestes",
    description:
      "Familiarise-toi avec les gestes et notions essentielles avant de te lancer dans un projet.",
    cta: "Découvrir les premiers pas",
    link: { to: "/blog/$slug", params: { slug: "premiers-pas-en-couture-plan-en-5-etapes" } },
  },
  {
    icon: "notebook",
    title: "Organiser ton premier projet",
    description: "Prépare ton tissu, ton matériel et tes étapes pour commencer plus sereinement.",
    cta: "Organiser mon projet",
    link: { to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
  },

];

export type BaseCouture = {
  title: string;
  description: string;
  level: string;
  linkLabel: string;
  link: LienInterne | null; // null => bientôt disponible
};

export const basesCouture: BaseCouture[] = [
  {
    title: "Le vocabulaire de la couture",
    description: "Les mots que tu croiseras dans tous les patrons et tutoriels.",
    level: "Débutant",
    linkLabel: "Lire la ressource",
    link: { to: "/blog/$slug", params: { slug: "20-mots-de-couture-a-connaitre" } },
  },
  {
    title: "Les différents types de tissus",
    description: "Fibres, armures et tombé : comprendre ce que tu as entre les mains.",
    level: "Débutant",
    linkLabel: "Lire la ressource",
    link: { to: "/blog/$slug", params: { slug: "choisir-son-tissu-premier-vetement" } },
  },

  {
    title: "Le droit-fil, la lisière et le biais",
    description: "Trois repères sur le tissu qui changent tout au moment de couper.",
    level: "Débutant",
    linkLabel: "Voir la formation courte",
    link: { to: "/micro-formations/$slug", params: { slug: "comprendre-le-droit-fil" } },
  },
  {
    title: "La prise de mesures",
    description: "Où placer le mètre ruban et comment noter ses mesures sans se tromper.",
    level: "Débutant",
    linkLabel: "Lire la ressource",
    link: { to: "/blog/$slug", params: { slug: "prendre-ses-mesures-avant-de-choisir-un-patron" } },
  },
  {
    title: "Le choix d'un patron",
    description: "Repérer un patron adapté à son niveau et à son tissu.",
    level: "Débutant",
    linkLabel: "Bientôt disponible",
    link: null,
  },
  {
    title: "La préparation du tissu",
    description: "Lavage, repassage et placement : les étapes avant la coupe.",
    level: "Débutant",
    linkLabel: "Voir la formation courte",
    link: { to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
  },
  {
    title: "La coupe",
    description: "Couper droit, sans décaler ses pièces ni déformer le tissu.",
    level: "Débutant",
    linkLabel: "Bientôt disponible",
    link: null,
  },
  {
    title: "Les marges de couture",
    description: "À quoi elles servent et comment les respecter tranquillement.",
    level: "Débutant",
    linkLabel: "Bientôt disponible",
    link: null,
  },
  {
    title: "Les finitions",
    description: "Les gestes simples qui rendent un projet plus net et plus solide.",
    level: "Débutant à intermédiaire",
    linkLabel: "Voir la formation courte",
    link: { to: "/micro-formations/$slug", params: { slug: "ameliorer-la-qualite-de-ses-finitions" } },
  },
  {
    title: "L'utilisation d'une machine à coudre",
    description: "Enfilage, réglages de base et premiers essais sur chutes de tissu.",
    level: "Débutant",
    linkLabel: "Lire la ressource",
    link: { to: "/blog/$slug", params: { slug: "reglages-machine-a-coudre-les-bases" } },
  },
];

/** Articles gratuits mis en avant pour les débutantes (slugs du blog). */
export const articlesDebutant = [
  "fournitures-indispensables-debuter-couture",
  "choisir-son-tissu-premier-vetement",
  "erreurs-frequentes-quand-on-debute-la-couture",
  "prendre-ses-mesures-avant-de-choisir-un-patron",
  "20-mots-de-couture-a-connaitre",
];


export const parcours = [
  {
    step: "01",
    title: "Découvrir le matériel essentiel",
    text: "Quelques outils suffisent pour démarrer : on fait simple, et on complète plus tard.",
  },
  {
    step: "02",
    title: "Comprendre les bases",
    text: "Le vocabulaire, le tissu, les repères : tu avances beaucoup plus sereinement ensuite.",
  },
  {
    step: "03",
    title: "Choisir un premier projet adapté",
    text: "Un projet simple et utile vaut mieux qu'un projet ambitieux abandonné en route.",
  },
  {
    step: "04",
    title: "Préparer son tissu et ses fournitures",
    text: "Laver, repasser, placer : cette étape évite la plupart des mauvaises surprises.",
  },
  {
    step: "05",
    title: "Coudre progressivement",
    text: "Étape par étape, sans se presser. Tu peux découdre : ça fait partie du chemin.",
  },
  {
    step: "06",
    title: "Recommencer et progresser",
    text: "Refaire un projet déjà connu est l'un des meilleurs moyens de gagner en aisance.",
  },
];

export type RessourceAvancee = {
  title: string;
  level: string;
  format: string;
  statut: Statut;
  price: string | null;
  linkLabel: string;
  link: LienInterne | null;
};

export const pourAllerPlusLoin: RessourceAvancee[] = [
  {
    title: "Template d'organisation de projet couture",
    level: "Débutant",
    format: "PDF imprimable",
    statut: "bientot",
    price: null,
    linkLabel: "Voir les guides",
    link: { to: "/guides" },
  },
  {
    title: "Checklist couture pour débutant",
    level: "Débutant",
    format: "PDF imprimable",
    statut: "bientot",
    price: null,
    linkLabel: "Voir les guides",
    link: { to: "/guides" },
  },
  {
    title: "Fiche de mesures",
    level: "Débutant",
    format: "PDF imprimable",
    statut: "bientot",
    price: null,
    linkLabel: "Voir les guides",
    link: { to: "/guides" },
  },
  {
    title: "Formation courte : prendre correctement ses mesures",
    level: "Débutant",
    format: "Formation courte en ligne",
    statut: "bientot",
    price: null,
    linkLabel: "Voir la formation courte",
    link: { to: "/micro-formations/$slug", params: { slug: "prendre-correctement-ses-mesures" } },
  },
  {
    title: "Cours de couture en présentiel",
    level: "Débutant à intermédiaire",
    format: "En atelier",
    statut: "bientot",
    price: null,
    linkLabel: "Découvrir les cours",
    link: { to: "/cours-presentiel" },
  },
];
