/**
 * Guides gratuits téléchargeables (ressources liées aux articles).
 *
 * Tout est modifiable ici : titres, descriptions, contenu de l'encadré,
 * fichier associé et statut. Les fichiers sont stockés dans un bucket PRIVÉ
 * (`guides`) : le champ `filePath` est un chemin interne, jamais une URL
 * publique. Le lien de téléchargement est généré temporairement côté serveur.
 */

export type GuideStatus = "available" | "coming_soon";

export interface FreeGuide {
  /** Slug utilisé dans l'URL /telecharger/[slug]. */
  slug: string;
  /** Titre du guide gratuit. */
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
  /** Contenu de l'encadré « Dans ce guide, tu trouveras » (à adapter). */
  contents: string[];
}

export const freeGuides: FreeGuide[] = [
  {
    slug: "choisir-son-tissu",
    title: "Fiche atelier : choisir son tissu sans s'emmêler les fils",
    subtitle: "La fiche à garder près de la machine",
    description:
      "Une fiche atelier claire et pratique pour t'aider à choisir un tissu adapté à ton projet couture.",
    image: null,
    imageAlt: "Aperçu de la fiche atelier « choisir son tissu »",
    fileName: "fiche-choisir-son-tissu.pdf",
    filePath: "choisir-son-tissu/fiche-choisir-son-tissu.pdf",
    format: "PDF imprimable",
    buttonLabel: "Télécharger le guide gratuit",
    category: "Tissus et matières",
    level: "Débutant",
    status: "available",
    contents: [
      "Les points clés expliqués dans l'article",
      "Une checklist avant l'achat du tissu",
      "Une fiche à imprimer pour tes projets",
      "Un espace de notes pour tes essais",
    ],
  },
  {
    slug: "checklist-premier-projet-couture",
    title: "Checklist : préparer son projet couture",
    subtitle: "Pour démarrer sans rien oublier",
    description:
      "Une checklist simple pour préparer ton projet couture étape par étape, du patron aux finitions.",
    image: null,
    imageAlt: "Aperçu de la checklist « préparer son projet couture »",
    fileName: "checklist-premier-projet-couture.pdf",
    filePath: "checklist-premier-projet-couture/checklist-premier-projet-couture.pdf",
    format: "PDF imprimable",
    buttonLabel: "Télécharger la checklist gratuite",
    category: "Organisation",
    level: "Débutant",
    status: "available",
    contents: [
      "Les étapes de préparation dans l'ordre",
      "Une checklist à cocher",
      "Des conseils pratiques d'atelier",
      "Un espace de notes",
    ],
  },
  {
    slug: "fiche-mesures-couture",
    title: "Fiche de mesures couture à imprimer",
    subtitle: "Tes mesures toujours à portée de main",
    description:
      "Une fiche à imprimer pour noter tes mesures et choisir la bonne taille de patron.",
    image: null,
    imageAlt: "Aperçu de la fiche de mesures couture",
    fileName: "fiche-mesures-couture.pdf",
    filePath: "fiche-mesures-couture/fiche-mesures-couture.pdf",
    format: "PDF imprimable",
    buttonLabel: "Télécharger la fiche gratuite",
    category: "Débuter la couture",
    level: "Tout niveau",
    status: "available",
    contents: [
      "Les mesures essentielles à relever",
      "Une fiche à imprimer et à compléter",
      "Des conseils pour mesurer juste",
      "Un espace de notes",
    ],
  },
];

/**
 * Association article → guide gratuit.
 * Un article sans entrée ici n'affiche AUCUNE bannière.
 */
export const articleGuideMap: Record<string, string> = {
  "choisir-son-tissu-premier-vetement": "choisir-son-tissu",
  "premiers-pas-en-couture-plan-en-5-etapes": "checklist-premier-projet-couture",
  "20-mots-de-couture-a-connaitre": "fiche-mesures-couture",
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
  eyebrow: "Ressource gratuite",
  title: "Un petit coup de pouce pour continuer ?",
  text: "Télécharge gratuitement le guide lié à cet article pour garder les conseils essentiels sous la main et avancer plus sereinement dans ton projet couture.",
  note: "Accès gratuit après indication de ton adresse e-mail.",
  comingSoon: "Bientôt disponible",
};
