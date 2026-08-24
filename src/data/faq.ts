import { coursesFaq } from "./cours";
import { formationFaq } from "./formations";
import { shopFaq } from "./products";

export type FaqGroup = {
  id: string;
  title: string;
  intro: string;
  items: { question: string; answer: string }[];
};

/**
 * Regroupe les questions déjà présentes sur les pages Guides,
 * Formations courtes et Cours en présentiel.
 */
export const faqGroups: FaqGroup[] = [
  {
    id: "templates-et-guides",
    title: "Templates et guides",
    items: shopFaq,
  },
    items: shopFaq,
  },
  {
    id: "formations-courtes",
    title: "Formations courtes",
    intro: "Durée, niveau et disponibilité des formations courtes en ligne.",
    items: formationFaq,
  },
  {
    id: "cours-en-presentiel",
    title: "Cours en présentiel",
    intro: "Niveau requis, matériel, lieu et réservation des cours en présentiel.",
    items: coursesFaq,
  },
];

export const allFaqItems = faqGroups.flatMap((group) => group.items);