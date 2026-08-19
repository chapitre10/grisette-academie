/**
 * Cours de couture en présentiel.
 *
 * NOTE INTERNE (non affichée sur le site) :
 * Ajouter uniquement des recommandations et photos réelles après vérification
 * et obtention de l'autorisation de publication.
 */
import type { InfoValue } from "./site";

export interface CourseFormat {
  slug: string;
  title: string;
  description: string;
  city: InfoValue;
  area: InfoValue;
  duration: InfoValue;
  price: InfoValue;
  availability: InfoValue;
  providedMaterial: InfoValue;
  requiredLevel: InfoValue;
}

export const courseFormats: CourseFormat[] = [
  {
    slug: "cours-individuel",
    title: "Cours individuel",
    description: "Un accompagnement personnalisé adapté à ton niveau et à ton projet.",
    city: null,
    area: null,
    duration: "Entre 2h et 4h",
    price: null,
    availability: null,
    providedMaterial: null,
    requiredLevel: null,
  },
  {
    slug: "cours-petit-groupe",
    title: "Cours en petit groupe",
    description: "Une progression conviviale dans un cadre propice à la pratique.",
    city: null,
    area: null,
    duration: "Entre 2h et 4h",
    price: null,
    availability: null,
    providedMaterial: null,
    requiredLevel: null,
  },
  {
    slug: "accompagnement-projet",
    title: "Accompagnement sur projet",
    description:
      "Un soutien pour avancer sur une création précise, de la préparation aux finitions.",
    city: null,
    area: null,
    duration: "Entre 2h et 4h",
    price: null,
    availability: null,
    providedMaterial: null,
    requiredLevel: null,
  },
];

/** Recommandations réelles uniquement. Laisser le tableau vide sans autorisation. */
export interface Testimonial {
  displayName: string;
  photo: string | null;
  text: string;
  date: string | null;
  courseType: string;
  publicationAllowed: boolean;
  published: boolean;
}

export const testimonials: Testimonial[] = [];

/** Réalisations d'élèves. Photos réelles uniquement, avec autorisation. */
export interface StudentProject {
  image: string | null;
  imageAlt: string;
  description?: string;
  courseType: string;
  studentFirstName?: string;
  publicationAllowed: boolean;
  published: boolean;
}

export const studentProjects: StudentProject[] = [];

export const visibleTestimonials = () =>
  testimonials.filter((t) => t.publicationAllowed && t.published);

export const visibleStudentProjects = () =>
  studentProjects.filter((p) => p.publicationAllowed && p.published);

export const coursesFaq = [
  {
    question: "Faut-il déjà savoir coudre pour participer ?",
    answer:
      "Non. Les cours accueillent les débutantes complètes comme les couturières souhaitant se perfectionner.",
  },
  {
    question: "Dois-je apporter ma machine à coudre ?",
    answer: "Informations à venir : les modalités de matériel seront précisées prochainement.",
  },
  {
    question: "Où se déroulent les cours ?",
    answer: "Informations à venir. La ville et la zone exactes seront indiquées ici.",
  },
  {
    question: "Puis-je venir avec mon propre projet ?",
    answer:
      "Oui, l'accompagnement sur projet est prévu pour cela : nous travaillons sur ta création, de la préparation aux finitions.",
  },
  {
    question: "Comment réserver un cours ?",
    answer:
      "En envoyant une demande via la page Contact. Je réponds avec les disponibilités et les modalités.",
  },
];