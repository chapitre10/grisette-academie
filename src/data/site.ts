/**
 * Informations globales du site — à remplacer par les vraies données.
 */
export const site = {
  name: "Grisette Academy",
  tagline: "Apprendre la couture avec méthode, créativité et confiance",
  description:
    "Grisette Academy accompagne les passionnées de couture grâce à des ressources pratiques, des cours accessibles et des formations pensées pour progresser à son rythme.",
  // TODO : remplacer par la vraie URL Pinterest
  pinterestUrl: "https://www.pinterest.com/",
  // TODO : remplacer par la vraie adresse e-mail de contact
  email: "contact@grisette-academy.fr",
  legalName: "Grisette Academy", // TODO : raison sociale exacte
};

export type InfoValue = string | null;

/** Affiche « Informations à venir » tant que la donnée n'est pas renseignée. */
export const infoOrPending = (value: InfoValue) => value ?? "Informations à venir";

export const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Boutique", to: "/boutique" },
  { label: "Ressources gratuites", to: "/blog" },
  { label: "Cours en présentiel", to: "/cours-presentiel" },
  { label: "Micro-formations", to: "/micro-formations" },
  { label: "À propos", to: "/a-propos" },
  { label: "Contact", to: "/contact" },
] as const;