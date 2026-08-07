/**
 * Recherches associées : quelques requêtes proches de chaque contenu,
 * reliées à une page existante du site.
 */
export interface RelatedSearch {
  label: string;
  to: string;
  params?: { slug: string };
}

const map: Record<string, RelatedSearch[]> = {
  // Articles
  "fournitures-indispensables-debuter-couture": [
    { label: "matériel de couture pour débutante", to: "/blog/$slug", params: { slug: "erreurs-frequentes-quand-on-debute-la-couture" } },
    { label: "checklist couture débutante", to: "/guides/$slug", params: { slug: "checklist-couture-debutante" } },
    { label: "choisir son tissu quand on débute", to: "/blog/$slug", params: { slug: "choisir-son-tissu-premier-vetement" } },
  ],
  "organiser-projet-couture-de-a-a-z": [
    { label: "organiser un projet couture", to: "/guides/$slug", params: { slug: "template-organiser-projet-couture" } },
    { label: "préparer son tissu avant de couper", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
    { label: "erreurs de débutante en couture", to: "/blog/$slug", params: { slug: "erreurs-frequentes-quand-on-debute-la-couture" } },
  ],
  "choisir-son-tissu-premier-vetement": [
    { label: "choisir un tissu adapté à son projet", to: "/micro-formations/$slug", params: { slug: "choisir-un-tissu-adapte" } },
    { label: "comprendre le droit-fil", to: "/micro-formations/$slug", params: { slug: "comprendre-le-droit-fil" } },
    { label: "fournitures pour débuter la couture", to: "/blog/$slug", params: { slug: "fournitures-indispensables-debuter-couture" } },
  ],
  "prendre-ses-mesures-avant-de-choisir-un-patron": [
    { label: "prendre ses mesures couture", to: "/micro-formations/$slug", params: { slug: "prendre-correctement-ses-mesures" } },
    { label: "fiche de mesures à imprimer", to: "/guides/$slug", params: { slug: "fiche-mesures-couture" } },
    { label: "choisir la bonne taille de patron", to: "/blog/$slug", params: { slug: "organiser-projet-couture-de-a-a-z" } },
  ],
  "erreurs-frequentes-quand-on-debute-la-couture": [
    { label: "conseils couture débutante", to: "/blog/$slug", params: { slug: "fournitures-indispensables-debuter-couture" } },
    { label: "réussir ses finitions couture", to: "/micro-formations/$slug", params: { slug: "ameliorer-la-qualite-de-ses-finitions" } },
    { label: "cours de couture en présentiel", to: "/cours-presentiel" },
  ],

  // Guides
  "template-organiser-projet-couture": [
    { label: "organiser un projet couture de A à Z", to: "/blog/$slug", params: { slug: "organiser-projet-couture-de-a-a-z" } },
    { label: "checklist couture débutante", to: "/guides/$slug", params: { slug: "checklist-couture-debutante" } },
    { label: "préparer son projet avant de couper", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
  ],
  "checklist-couture-debutante": [
    { label: "fournitures indispensables couture", to: "/blog/$slug", params: { slug: "fournitures-indispensables-debuter-couture" } },
    { label: "erreurs fréquentes en couture", to: "/blog/$slug", params: { slug: "erreurs-frequentes-quand-on-debute-la-couture" } },
    { label: "template d'organisation couture", to: "/guides/$slug", params: { slug: "template-organiser-projet-couture" } },
  ],
  "fiche-mesures-couture": [
    { label: "prendre ses mesures correctement", to: "/micro-formations/$slug", params: { slug: "prendre-correctement-ses-mesures" } },
    { label: "mesures et choix du patron", to: "/blog/$slug", params: { slug: "prendre-ses-mesures-avant-de-choisir-un-patron" } },
    { label: "checklist couture débutante", to: "/guides/$slug", params: { slug: "checklist-couture-debutante" } },
  ],

  // Formations courtes
  "comprendre-le-droit-fil": [
    { label: "sens du tissu en couture", to: "/blog/$slug", params: { slug: "choisir-son-tissu-premier-vetement" } },
    { label: "placer son patron sur le tissu", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
    { label: "choisir un tissu adapté", to: "/micro-formations/$slug", params: { slug: "choisir-un-tissu-adapte" } },
  ],
  "prendre-correctement-ses-mesures": [
    { label: "tableau de tailles patron", to: "/blog/$slug", params: { slug: "prendre-ses-mesures-avant-de-choisir-un-patron" } },
    { label: "fiche de mesures couture", to: "/guides/$slug", params: { slug: "fiche-mesures-couture" } },
    { label: "préparer son projet couture", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
  ],
  "choisir-un-tissu-adapte": [
    { label: "quel tissu pour un premier vêtement", to: "/blog/$slug", params: { slug: "choisir-son-tissu-premier-vetement" } },
    { label: "comprendre le droit-fil", to: "/micro-formations/$slug", params: { slug: "comprendre-le-droit-fil" } },
    { label: "entretien et prélavage du tissu", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
  ],
  "preparer-son-projet-avant-de-couper": [
    { label: "plan de coupe couture", to: "/blog/$slug", params: { slug: "organiser-projet-couture-de-a-a-z" } },
    { label: "marges de couture patron", to: "/micro-formations/$slug", params: { slug: "comprendre-le-droit-fil" } },
    { label: "template d'organisation de projet", to: "/guides/$slug", params: { slug: "template-organiser-projet-couture" } },
  ],
  "ameliorer-la-qualite-de-ses-finitions": [
    { label: "ourlet régulier couture", to: "/blog/$slug", params: { slug: "erreurs-frequentes-quand-on-debute-la-couture" } },
    { label: "surpiqûres et repassage", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
    { label: "cours de couture accompagnés", to: "/cours-presentiel" },
  ],
};

export const getRelatedSearches = (slug: string): RelatedSearch[] => map[slug] ?? [];