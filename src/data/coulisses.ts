/**
 * Galerie « Les coulisses ».
 * Aucune photo fictive : chaque entrée reste un emplacement à remplacer
 * par tes vraies photos (renseigner `src` avec un import ES6 ou un chemin).
 */
export type CoulissePhoto = {
  /** Identifiant stable, utile pour retrouver l'emplacement à remplacer. */
  id: string;
  src: string | null;
  /** Texte de remplacement (alt) : décrit la photo pour les lecteurs d'écran. */
  alt: string;
  /** Indication affichée dans l'emplacement vide. */
  hint: string;
  /** Légende visible sous la photo. */
  caption: string;
  /** Courte description affichée sous la légende. */
  description: string;
};

export const coulisses: CoulissePhoto[] = [
  {
    id: "atelier",
    src: null,
    alt: "Vue de l'atelier de couture",
    hint: "Photo de l'atelier (à ajouter)",
    caption: "L'atelier au quotidien",
    description: "Vue d'ensemble de l'espace de travail, entre machines, table de coupe et rangements.",
  },
  {
    id: "poste-de-travail",
    src: null,
    alt: "Machine à coudre en cours d'utilisation",
    hint: "Photo machine / poste de travail (à ajouter)",
    caption: "Le poste de travail",
    description: "Gros plan sur la machine en action : pied-de-biche, aiguille et tissu en cours.",
  },
  {
    id: "matieres",
    src: null,
    alt: "Tissus et matières sélectionnées",
    hint: "Photo tissus & matières (à ajouter)",
    caption: "Le choix des matières",
    description: "Coupons, échantillons et fils réunis avant de démarrer un projet.",
  },
  {
    id: "patron",
    src: null,
    alt: "Étape de préparation d'un patron",
    hint: "Photo préparation de patron (à ajouter)",
    caption: "La préparation d'un patron",
    description: "Traçage, épinglage et repères : l'étape qui conditionne la réussite du vêtement.",
  },
  {
    id: "cours",
    src: null,
    alt: "Élèves pendant un cours en présentiel",
    hint: "Photo cours en présentiel (à ajouter)",
    caption: "Pendant un cours",
    description: "Un moment d'atelier collectif, en accompagnement individualisé.",
  },
  {
    id: "projet-fini",
    src: null,
    alt: "Projet de couture terminé",
    hint: "Photo projet fini (à ajouter)",
    caption: "Un projet abouti",
    description: "Le résultat final, porté ou mis en scène, une fois les finitions terminées.",
  },
];
