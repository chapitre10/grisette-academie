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
  area: InfoValue;
  duration: InfoValue;
  price: InfoValue;
  availability: InfoValue;
  requiredLevel: InfoValue;
}

export const courseFormats: CourseFormat[] = [
  {
    slug: "cours-individuel",
    title: "Cours individuel",
    description: "Un accompagnement personnalisé adapté à ton niveau et à ton projet.",
    area: "Paris et ses alentours",
    duration: "Entre 2h et 4h",
    price: "25€/h (voir section Tarifs)",
    availability: "Du Lundi au Dimanche",
    requiredLevel: "Tout niveau",
  },
  {
    slug: "cours-petit-groupe",
    title: "Cours en petit groupe",
    description: "Une progression conviviale dans un cadre propice à la pratique.",
    area: "Paris et ses alentours",
    duration: "Entre 2h et 4h",
    price: "25€/h (voir section Tarifs)",
    availability: "Du Lundi au Dimanche",
    requiredLevel: "Tout niveau",
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
    answer: "Sur demande : les modalités de matériel seront précisées prochainement.",
  },
  {
    question: "Où se déroulent les cours ?",
    answer: "Les cours se déroulent à Paris et ses alentours. La zone exacte sera précisée lors de la prise de contact.",
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