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
    { label: "guide débutant couture", to: "/guides/$slug", params: { slug: "guide-debutant" } },
    { label: "choisir son tissu quand on débute", to: "/blog/$slug", params: { slug: "choisir-son-tissu-premier-vetement" } },
  ],
  "choisir-son-tissu-premier-vetement": [
    { label: "choisir un tissu adapté à son projet", to: "/micro-formations/$slug", params: { slug: "choisir-un-tissu-adapte" } },
    { label: "comprendre le droit-fil", to: "/micro-formations/$slug", params: { slug: "comprendre-le-droit-fil" } },
    { label: "fournitures pour débuter la couture", to: "/blog/$slug", params: { slug: "fournitures-indispensables-debuter-couture" } },
  ],

  "erreurs-frequentes-quand-on-debute-la-couture": [
    { label: "conseils couture débutante", to: "/blog/$slug", params: { slug: "fournitures-indispensables-debuter-couture" } },
    { label: "réussir ses finitions couture", to: "/micro-formations/$slug", params: { slug: "ameliorer-la-qualite-de-ses-finitions" } },
    { label: "cours de couture en présentiel", to: "/cours-presentiel" },
  ],

  // Guides

  // Formations courtes
  "comprendre-le-droit-fil": [
    { label: "sens du tissu en couture", to: "/blog/$slug", params: { slug: "choisir-son-tissu-premier-vetement" } },
    { label: "placer son patron sur le tissu", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
    { label: "choisir un tissu adapté", to: "/micro-formations/$slug", params: { slug: "choisir-un-tissu-adapte" } },
  ],
  "prendre-correctement-ses-mesures": [
    { label: "premiers pas en couture", to: "/blog/$slug", params: { slug: "premiers-pas-en-couture-plan-en-5-etapes" } },
    { label: "lexique de la couturière", to: "/guides/$slug", params: { slug: "lexique-de-la-couturiere" } },
    { label: "préparer son projet couture", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
  ],

  "choisir-un-tissu-adapte": [
    { label: "quel tissu pour un premier vêtement", to: "/blog/$slug", params: { slug: "choisir-son-tissu-premier-vetement" } },
    { label: "comprendre le droit-fil", to: "/micro-formations/$slug", params: { slug: "comprendre-le-droit-fil" } },
    { label: "entretien et prélavage du tissu", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
  ],
  "preparer-son-projet-avant-de-couper": [
    { label: "premiers pas en couture", to: "/blog/$slug", params: { slug: "premiers-pas-en-couture-plan-en-5-etapes" } },
    { label: "marges de couture patron", to: "/micro-formations/$slug", params: { slug: "comprendre-le-droit-fil" } },
    { label: "guide débutant couture", to: "/guides/$slug", params: { slug: "guide-debutant" } },
  ],


  "ameliorer-la-qualite-de-ses-finitions": [
    { label: "ourlet régulier couture", to: "/blog/$slug", params: { slug: "erreurs-frequentes-quand-on-debute-la-couture" } },
    { label: "surpiqûres et repassage", to: "/micro-formations/$slug", params: { slug: "preparer-son-projet-avant-de-couper" } },
    { label: "cours de couture accompagnés", to: "/cours-presentiel" },
  ],

  // Guides et ressources gratuites associées
  "les-livres-essentiels": [
    { label: "choisir un livre de couture", to: "/blog/$slug", params: { slug: "bien-choisir-ses-livres-de-couture" } },
    { label: "lexique de la couturière", to: "/guides/$slug", params: { slug: "lexique-de-la-couturiere" } },
    { label: "guide débutant couture", to: "/guides/$slug", params: { slug: "guide-debutant" } },
  ],
  "liste-des-fournisseurs": [
    { label: "où acheter ses tissus", to: "/blog/$slug", params: { slug: "ou-acheter-ses-tissus-et-fournitures" } },
    { label: "créer sa tissuthèque", to: "/guides/$slug", params: { slug: "tissutheque" } },
    { label: "comprendre les tissages", to: "/guides/$slug", params: { slug: "difference-entre-tissus-et-tissage" } },
  ],
  "difference-entre-tissus-et-tissage": [
    { label: "choisir son tissu pour un premier vêtement", to: "/blog/$slug", params: { slug: "choisir-son-tissu-premier-vetement" } },
    { label: "choisir un tissu adapté", to: "/micro-formations/$slug", params: { slug: "choisir-un-tissu-adapte" } },
    { label: "tissuthèque à imprimer", to: "/guides/$slug", params: { slug: "tissutheque" } },
  ],

  "tissutheque": [
    { label: "créer sa tissuthèque", to: "/blog/$slug", params: { slug: "creer-sa-tissutheque-methode-simple" } },
    { label: "liste des fournisseurs couture", to: "/guides/$slug", params: { slug: "liste-des-fournisseurs" } },
    { label: "tissu ou tissage", to: "/guides/$slug", params: { slug: "difference-entre-tissus-et-tissage" } },
  ],
  "machines-apprendre-et-comprendre": [
    { label: "réglages de machine à coudre", to: "/blog/$slug", params: { slug: "reglages-machine-a-coudre-les-bases" } },
    { label: "guide débutant couture", to: "/guides/$slug", params: { slug: "guide-debutant" } },
    { label: "améliorer ses finitions", to: "/micro-formations/$slug", params: { slug: "ameliorer-la-qualite-de-ses-finitions" } },
  ],
  "lexique-de-la-couturiere": [
    { label: "20 mots de couture", to: "/blog/$slug", params: { slug: "20-mots-de-couture-a-connaitre" } },
    { label: "lexique de la modéliste", to: "/guides/$slug", params: { slug: "lexique-de-la-modeliste" } },
    { label: "comprendre le droit-fil", to: "/micro-formations/$slug", params: { slug: "comprendre-le-droit-fil" } },
  ],
  "lexique-de-la-modeliste": [
    { label: "vocabulaire du patronage", to: "/blog/$slug", params: { slug: "vocabulaire-du-patronage-premiers-reperes" } },
    { label: "lexique de la couturière", to: "/guides/$slug", params: { slug: "lexique-de-la-couturiere" } },
    { label: "livres de modélisme", to: "/guides/$slug", params: { slug: "les-livres-essentiels" } },
  ],
  "guide-debutant": [
    { label: "débuter la couture en 5 étapes", to: "/blog/$slug", params: { slug: "premiers-pas-en-couture-plan-en-5-etapes" } },
    { label: "fournitures indispensables", to: "/blog/$slug", params: { slug: "fournitures-indispensables-debuter-couture" } },
    { label: "comprendre sa machine", to: "/guides/$slug", params: { slug: "machines-apprendre-et-comprendre" } },
  ],
  "bien-choisir-ses-livres-de-couture": [
    { label: "livres essentiels de couture", to: "/guides/$slug", params: { slug: "les-livres-essentiels" } },
    { label: "lexique de la couturière", to: "/guides/$slug", params: { slug: "lexique-de-la-couturiere" } },
    { label: "cours de couture en présentiel", to: "/cours-presentiel" },
  ],
  "ou-acheter-ses-tissus-et-fournitures": [
    { label: "liste des fournisseurs", to: "/guides/$slug", params: { slug: "liste-des-fournisseurs" } },
    { label: "créer sa tissuthèque", to: "/guides/$slug", params: { slug: "tissutheque" } },
    { label: "choisir un tissu adapté", to: "/micro-formations/$slug", params: { slug: "choisir-un-tissu-adapte" } },
  ],
  "creer-sa-tissutheque-methode-simple": [
    { label: "fiches de tissuthèque", to: "/guides/$slug", params: { slug: "tissutheque" } },
    { label: "où acheter ses tissus", to: "/blog/$slug", params: { slug: "ou-acheter-ses-tissus-et-fournitures" } },
    { label: "fournitures indispensables", to: "/blog/$slug", params: { slug: "fournitures-indispensables-debuter-couture" } },
  ],


  "reglages-machine-a-coudre-les-bases": [
    { label: "comprendre sa machine", to: "/guides/$slug", params: { slug: "machines-apprendre-et-comprendre" } },
    { label: "améliorer ses finitions", to: "/micro-formations/$slug", params: { slug: "ameliorer-la-qualite-de-ses-finitions" } },
    { label: "erreurs fréquentes en couture", to: "/blog/$slug", params: { slug: "erreurs-frequentes-quand-on-debute-la-couture" } },
  ],
  "20-mots-de-couture-a-connaitre": [
    { label: "lexique de la couturière", to: "/guides/$slug", params: { slug: "lexique-de-la-couturiere" } },
    { label: "guide débutant couture", to: "/guides/$slug", params: { slug: "guide-debutant" } },
    { label: "comprendre le droit-fil", to: "/micro-formations/$slug", params: { slug: "comprendre-le-droit-fil" } },
  ],
  "vocabulaire-du-patronage-premiers-reperes": [
    { label: "lexique de la modéliste", to: "/guides/$slug", params: { slug: "lexique-de-la-modeliste" } },
    { label: "prendre ses mesures", to: "/micro-formations/$slug", params: { slug: "prendre-correctement-ses-mesures" } },
    { label: "livres essentiels de couture", to: "/guides/$slug", params: { slug: "les-livres-essentiels" } },
  ],
  "premiers-pas-en-couture-plan-en-5-etapes": [
    { label: "guide débutant couture", to: "/guides/$slug", params: { slug: "guide-debutant" } },
    { label: "fournitures indispensables", to: "/blog/$slug", params: { slug: "fournitures-indispensables-debuter-couture" } },
    { label: "cours de couture en présentiel", to: "/cours-presentiel" },
  ],
};

export const getRelatedSearches = (slug: string): RelatedSearch[] => map[slug] ?? [];