/**
 * Informations globales du site — à remplacer par les vraies données.
 */
export const site = {
  name: "Grisette Académie",
  tagline: "Apprendre la couture avec méthode, créativité et confiance",
  description:
    "Grisette Académie accompagne les passionnées de couture grâce à des ressources pratiques, des cours accessibles et des formations pensées pour progresser à son rythme.",
  // TODO : remplacer par la vraie URL Pinterest
  pinterestUrl: "https://www.pinterest.com/",
  // TODO : remplacer par la vraie adresse e-mail de contact
  email: "contact@grisette-academy.fr",
  legalName: "Grisette Académie", // TODO : raison sociale exacte
};

export type InfoValue = string | null;

/** Affiche « Informations à venir » tant que la donnée n'est pas renseignée. */
export const infoOrPending = (value: InfoValue) => value ?? "Informations à venir";

export type NavLink = {
  label: string;
  to: string;
  children?: { label: string; to: string }[];
};

export const navLinks: NavLink[] = [
  { label: "Accueil", to: "/" },
  { label: "Guides", to: "/guides" },
  {
    label: "Se former",
    to: "/se-former",
    children: [
      { label: "Cours en présentiel", to: "/cours-presentiel" },
      { label: "Formations courtes", to: "/micro-formations" },
    ],
  },
  { label: "À propos", to: "/a-propos" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];