/**
 * Fiches pratiques gratuites : UNE fiche par article de blog.
 *
 * Règle : chaque fiche correspond exactement au sujet de l'article qui la
 * propose. Aucune fiche n'est réutilisée d'un article à l'autre, et aucune
 * ressource déjà vendue sur le site (templates, guides, formations) n'est
 * proposée ici.
 *
 * Les fichiers sont stockés dans un bucket PRIVÉ (`guides`) : `filePath` est un
 * chemin interne, jamais une URL publique. Le lien de téléchargement est signé
 * temporairement côté serveur.
 *
 * Tant que le PDF n'est pas déposé dans le bucket, laisser `status: "coming_soon"` :
 * la bannière affiche alors « Bientôt disponible » sans lien cassé.
 */

export type GuideStatus = "available" | "coming_soon";

export interface FreeGuide {
  /** Slug utilisé dans l'URL /telecharger/[slug]. */
  slug: string;
  /** Titre de la fiche pratique. */
  title: string;
  /** Sous-titre court. */
  subtitle: string;
  /** Description : ce que la personne va recevoir. */
  description: string;
  /** Illustration / aperçu (null = placeholder dessiné). */
  image: string | null;
  imageAlt: string;
  /** Nom du fichier affiché à la personne. */
  fileName: string;
  /** Chemin dans le bucket privé `guides` (jamais exposé publiquement). */
  filePath: string;
  /** Format affiché, ex. « PDF imprimable ». */
  format: string;
  /** Texte du bouton de la bannière. */
  buttonLabel: string;
  category: string;
  level: string;
  status: GuideStatus;
  /** Contenu de l'encadré « Dans cette fiche, tu trouveras » (à adapter). */
  contents: string[];
}

const sheet = (
  slug: string,
  title: string,
  subtitle: string,
  description: string,
  category: string,
  contents: string[],
  status: GuideStatus = "coming_soon",
): FreeGuide => ({
  slug,
  title,
  subtitle,
  description,
  image: null,
  imageAlt: `Aperçu de la fiche pratique « ${title} »`,
  fileName: `${slug}.pdf`,
  filePath: `${slug}/${slug}.pdf`,
  format: "PDF imprimable",
  buttonLabel: "Télécharger la fiche pratique",
  category,
  level: "Tout niveau",
  status,
  contents,
});

/**
 * Une fiche par article. Le slug de la fiche reprend le sujet de l'article.
 */
export const freeGuides: FreeGuide[] = [
  sheet(
    "fiche-fournitures-indispensables",
    "Fiche pratique : les fournitures indispensables pour débuter",
    "La liste à emporter en mercerie",
    "La liste des fournitures essentielles présentées dans l'article, à cocher avant tes achats.",
    "Débuter la couture",
    [
      "La liste des fournitures de base",
      "Les repères pour ne pas acheter en trop",
      "Un espace de notes pour tes achats",
    ],
  ),
  sheet(
    "fiche-choisir-son-tissu",
    "Fiche pratique : choisir son tissu pour un premier vêtement",
    "La fiche à garder près de la machine",
    "Les critères de choix du tissu expliqués dans l'article, réunis sur une fiche à imprimer.",
    "Tissus et matières",
    [
      "Les critères de choix pas à pas",
      "Une checklist avant l'achat du tissu",
      "Un espace de notes pour tes essais",
    ],
  ),
  sheet(
    "fiche-erreurs-frequentes-debut",
    "Fiche pratique : les 7 erreurs fréquentes du début",
    "Les pièges à éviter en un coup d'œil",
    "Les sept erreurs de l'article et leur correction, résumées sur une fiche mémo.",
    "Débuter la couture",
    [
      "Les 7 erreurs et comment les éviter",
      "Les réflexes à prendre à la place",
      "Un espace de notes",
    ],
  ),
  sheet(
    "fiche-choisir-ses-livres-de-couture",
    "Fiche pratique : bien choisir ses livres de couture",
    "Les bons critères avant d'acheter",
    "La grille de lecture de l'article pour évaluer un livre de couture avant de l'acheter.",
    "Ressources",
    [
      "Les critères à vérifier",
      "Une grille de comparaison à remplir",
      "Un espace de notes",
    ],
  ),
  sheet(
    "fiche-ou-acheter-tissus-fournitures",
    "Fiche pratique : où acheter ses tissus et fournitures",
    "Ton carnet d'adresses couture",
    "La fiche pour noter et comparer tes points d'achat, dans le prolongement de l'article.",
    "Organisation",
    [
      "Les types de fournisseurs à connaître",
      "Une fiche pour noter tes adresses",
      "Les questions à poser avant d'acheter",
    ],
  ),
  sheet(
    "fiche-creer-sa-tissutheque",
    "Fiche pratique : créer sa tissuthèque",
    "Pour classer tes coupons sans t'y perdre",
    "La méthode de l'article sous forme de fiche à compléter pour inventorier tes tissus.",
    "Organisation",
    [
      "Les informations à noter par coupon",
      "Une fiche d'inventaire à imprimer",
      "Un espace de notes",
    ],
  ),
  sheet(
    "fiche-reglages-machine-a-coudre",
    "Fiche pratique : les réglages de machine à coudre",
    "Les repères à garder près de la machine",
    "Les réglages expliqués dans l'article (longueur, largeur, tension) réunis sur une fiche.",
    "Machine à coudre",
    [
      "Les réglages de base et leurs valeurs",
      "Un tableau d'essais à compléter",
      "Un espace de notes",
    ],
  ),
  sheet(
    "fiche-20-mots-de-couture",
    "Fiche pratique : 20 mots de couture à connaître",
    "Le lexique à garder sous la main",
    "Le lexique de l'article en version imprimable, pour retrouver chaque terme rapidement.",
    "Vocabulaire",
    [
      "Les 20 termes et leurs définitions",
      "Un format à imprimer et à afficher",
      "Un espace de notes",
    ],
  ),
  sheet(
    "fiche-premiers-pas-plan-5-etapes",
    "Fiche pratique : premiers pas en couture, le plan en 5 étapes",
    "Ton plan de démarrage",
    "Les cinq étapes de l'article sous forme de plan à cocher pour démarrer sereinement.",
    "Débuter la couture",
    [
      "Les 5 étapes dans l'ordre",
      "Une checklist à cocher",
      "Un espace de notes",
    ],
  ),
];

/**
 * Association article → fiche pratique dédiée (relation 1 pour 1).
 * Un article sans entrée ici n'affiche AUCUNE bannière.
 */
export const articleGuideMap: Record<string, string> = {
  "fournitures-indispensables-debuter-couture": "fiche-fournitures-indispensables",
  "choisir-son-tissu-premier-vetement": "fiche-choisir-son-tissu",
  "erreurs-frequentes-quand-on-debute-la-couture": "fiche-erreurs-frequentes-debut",
  "bien-choisir-ses-livres-de-couture": "fiche-choisir-ses-livres-de-couture",
  "ou-acheter-ses-tissus-et-fournitures": "fiche-ou-acheter-tissus-fournitures",
  "creer-sa-tissutheque-methode-simple": "fiche-creer-sa-tissutheque",
  "reglages-machine-a-coudre-les-bases": "fiche-reglages-machine-a-coudre",
  "20-mots-de-couture-a-connaitre": "fiche-20-mots-de-couture",
  "premiers-pas-en-couture-plan-en-5-etapes": "fiche-premiers-pas-plan-5-etapes",
};

export const getGuide = (slug: string) => freeGuides.find((g) => g.slug === slug);

export const getGuideForArticle = (articleSlug: string) => {
  const guideSlug = articleGuideMap[articleSlug];
  return guideSlug ? getGuide(guideSlug) : undefined;
};

/** Sources possibles pour la traçabilité des demandes. */
export const guideDownloadSources = [
  "article_banner",
  "pinterest",
  "espace_debutant",
  "landing_page",
  "footer",
] as const;

export type GuideDownloadSource = (typeof guideDownloadSources)[number];

/** Version du texte de consentement newsletter (à incrémenter si le texte change). */
export const GUIDE_NEWSLETTER_CONSENT_VERSION = "2026-08-v1";

export const GUIDE_NEWSLETTER_CONSENT_TEXT =
  "Je souhaite aussi recevoir les conseils couture, ressources gratuites et nouveautés de Grisette Académie par e-mail. Je peux me désinscrire à tout moment.";

/** Textes par défaut de la bannière (modifiables). */
export const guideBannerCopy = {
  eyebrow: "Fiche pratique gratuite",
  title: "La fiche pratique de cet article",
  text: "Télécharge gratuitement la fiche pratique correspondant exactement au sujet que tu viens de lire, pour garder les repères essentiels sous la main.",
  note: "Accès gratuit après indication de ton adresse e-mail.",
  comingSoon: "Bientôt disponible",
};
