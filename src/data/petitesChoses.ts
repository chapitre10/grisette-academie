/**
 * Section « 6 petites choses sur moi » (page À propos).
 * Contenu 100 % modifiable à la main : change simplement `text`, `label`
 * et éventuellement `tone` (couleur du papier) ci-dessous.
 */
export type PetiteChoseTone = "paper" | "mist" | "rose" | "peach" | "gold";

export type PetiteChose = {
  /** Petite étiquette manuscrite en haut de la carte */
  label: string;
  /** Phrase courte, vivante et personnelle */
  text: string;
  /** Couleur du papier */
  tone: PetiteChoseTone;
  /** Carte mise en avant (plus grande, au premier plan) */
  featured?: boolean;
  /** Scotch décoratif en fuchsia (comme la carte mise en avant) */
  accentSticker?: boolean;
};

export const petitesChosesTitle = "6 petites choses sur moi";
export const petitesChosesIntro =
  "Quelques réponses pour mieux me connaître et comprendre l'univers de Grisette Académie.";

export const petitesChoses: PetiteChose[] = [
  { label: "Créer", text: "J'aime transformer une idée en vêtement.", tone: "paper" },
  { label: "Matières", text: "J'aime les belles matières et les finitions soignées.", tone: "mist" },
  {
    label: "Atelier",
    text: "J'explique la couture simplement, sans jargon inutile.",
    tone: "peach",
    featured: true,
  },
  {
    label: "Patience",
    text: "Je crois beaucoup aux petits progrès.",
    tone: "rose",
    accentSticker: true,
  },
  { label: "Détails", text: "J'adore les gestes précis, les tissus et les détails.", tone: "gold" },
  {
    label: "Confiance",
    text: "J'ai envie de créer un espace rassurant pour apprendre et oser.",
    tone: "paper",
  },
];