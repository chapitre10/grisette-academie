/**
 * Galerie « Les coulisses ».
 * Aucune photo fictive : chaque entrée reste un emplacement à remplacer
 * par tes vraies photos (renseigner `src` avec un import ES6 ou un chemin).
 */
export type CoulissePhoto = {
  src: string | null;
  alt: string;
  hint: string;
  caption: string;
};

export const coulisses: CoulissePhoto[] = [
  {
    src: null,
    alt: "Vue de l'atelier de couture",
    hint: "Photo de l'atelier (à ajouter)",
    caption: "L'atelier au quotidien",
  },
  {
    src: null,
    alt: "Machine à coudre en cours d'utilisation",
    hint: "Photo machine / poste de travail (à ajouter)",
    caption: "Le poste de travail",
  },
  {
    src: null,
    alt: "Tissus et matières sélectionnées",
    hint: "Photo tissus & matières (à ajouter)",
    caption: "Le choix des matières",
  },
  {
    src: null,
    alt: "Étape de préparation d'un patron",
    hint: "Photo préparation de patron (à ajouter)",
    caption: "La préparation d'un patron",
  },
  {
    src: null,
    alt: "Élèves pendant un cours en présentiel",
    hint: "Photo cours en présentiel (à ajouter)",
    caption: "Pendant un cours",
  },
  {
    src: null,
    alt: "Projet de couture terminé",
    hint: "Photo projet fini (à ajouter)",
    caption: "Un projet abouti",
  },
];
