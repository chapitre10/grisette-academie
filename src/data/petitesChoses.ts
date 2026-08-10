/**
 * Section « 6 petites choses sur moi » (page À propos).
 * Cartes retournables : `question` au recto, `answer` au verso.
 * Contenu 100 % modifiable à la main.
 */
export type PetiteChoseTone = "paper" | "mist" | "rose" | "peach" | "gold";

export type PetiteChose = {
  /** Petite étiquette manuscrite en haut de la carte */
  label: string;
  /** Question affichée au recto */
  question: string;
  /** Réponse affichée au verso */
  answer: string;
  /** Couleur du papier */
  tone: PetiteChoseTone;
  /** Carte mise en avant (plus grande, au premier plan) */
  featured?: boolean;
  /** Scotch décoratif en fuchsia (comme la carte mise en avant) */
  accentSticker?: boolean;
};

export const petitesChosesTitle = "6 petites choses sur moi";
export const petitesChosesIntro =
  "Cliquez sur une carte pour découvrir la réponse au dos.";

export const petitesChoses: PetiteChose[] = [
  {
    label: "Le matin",
    question: "Café ou thé pour bien démarrer ?",
    answer:
      "Café, toujours, dans ma tasse ébréchée préférée. Et une playlist un peu trop forte avant d'ouvrir l'atelier.",
    tone: "paper",
  },
  {
    label: "Ailleurs",
    question: "Un endroit où vous rêvez de partir ?",
    answer:
      "Le Japon, pour les papeteries, les merceries minuscules et l'obsession du détail bien fait.",
    tone: "mist",
  },
  {
    label: "Atelier",
    question: "À quoi ressemble votre atelier ?",
    answer:
      "Lumineux, un peu trop rempli : des chutes de tissu partout, des carnets ouverts et jamais assez de ciseaux.",
    tone: "peach",
    featured: true,
  },
  {
    label: "Plaisirs",
    question: "Votre petit plaisir coupable ?",
    answer:
      "Acheter un tissu « au cas où ». Il attend sagement son projet… parfois plusieurs années.",
    tone: "rose",
    accentSticker: true,
  },
  {
    label: "Ratés",
    question: "Votre pire loupé en couture ?",
    answer:
      "Une robe cousue à l'envers, entièrement, sans m'en rendre compte. J'ai beaucoup appris ce jour-là.",
    tone: "gold",
  },
  {
    label: "Confiance",
    question: "Ce qui vous rend le plus fière ?",
    answer:
      "Voir quelqu'un dire « je ne suis pas manuelle » puis repartir avec son premier vêtement sur le dos.",
    tone: "paper",
  },
];