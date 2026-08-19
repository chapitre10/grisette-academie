/**
 * Articles du blog / ressources gratuites.
 * Contenu d'exemple rédigé pour être remplacé par tes vrais textes.
 */
export interface ArticleBlock {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  date: string; // ISO
  readingTime: string;
  intro: string;
  blocks: ArticleBlock[];
  keyTakeaways: string[];
  cta: { label: string; to: string; params?: Record<string, string>; text: string };
  image: string | null;
  imageAlt: string;
  seo: {
    title: string;
    description: string;
    pinterestTitle: string;
    pinterestDescription: string;
    pinterestImage: string | null; // image verticale 1000x1500
  };
}

export const articleCategories = [
  "Débuter la couture",
  "Organisation",
  "Techniques",
  "Tissus et matières",
  "Création de vêtements",
  "Conseils de professeure de couture",
];

export const articles: Article[] = [
  {
    slug: "fournitures-indispensables-debuter-couture",
    title: "Les fournitures indispensables pour débuter la couture",
    excerpt:
      "Le matériel réellement utile pour commencer à coudre, sans multiplier les achats inutiles.",
    category: "Débuter la couture",
    tags: ["matériel", "débutante", "fournitures"],
    date: "2026-05-12",
    readingTime: "5 min",
    intro:
      "Quand on débute la couture, la liste de matériel peut vite devenir décourageante. En réalité, quelques outils bien choisis suffisent pour réaliser ses premiers projets dans de bonnes conditions.",
    blocks: [
      {
        heading: "Le matériel de mesure et de tracé",
        paragraphs: [
          "Un mètre ruban souple reste l'outil de base : il sert à prendre ses mesures et à vérifier les longueurs sur le tissu.",
          "Ajoute une règle plate, une craie tailleur ou un crayon effaçable, et de quoi épingler. Ces trois éléments couvrent l'essentiel de la préparation.",
        ],
      },
      {
        heading: "Les outils de coupe",
        paragraphs: [
          "Une bonne paire de ciseaux réservée au tissu change la précision de la coupe. Garde une seconde paire pour le papier afin de ne pas l'émousser.",
          "Un découd-vite est également très utile : reprendre une couture fait partie de l'apprentissage.",
        ],
      },
      {
        heading: "Le fil, les aiguilles et le repassage",
        paragraphs: [
          "Choisis un fil polyester polyvalent et adapte l'aiguille de machine à ton tissu. Une aiguille inadaptée explique une grande partie des points irréguliers.",
          "Enfin, le fer à repasser est un véritable outil de couture : repasser au fur et à mesure donne des finitions beaucoup plus nettes.",
        ],
      },
    ],
    keyTakeaways: [
      "Quelques outils bien choisis suffisent pour débuter.",
      "Réserve tes ciseaux de couture au tissu uniquement.",
      "Le repassage progressif améliore immédiatement le rendu.",
    ],
    cta: {
      label: "Découvrir le guide débutant",
      to: "/guides/$slug",
      params: { slug: "guide-debutant" },
      text: "Pour ne rien oublier avant de commencer, une checklist imprimable peut t'aider à préparer ton matériel.",
    },
    image: null,
    imageAlt: "Fournitures de couture posées sur une table d'atelier",
    seo: {
      title: "Fournitures indispensables pour débuter la couture — Grisette Académie",
      description:
        "Quel matériel de couture acheter quand on débute ? La liste des fournitures réellement utiles pour bien commencer.",
      pinterestTitle: "Le matériel indispensable pour débuter la couture",
      pinterestDescription:
        "Mesure, coupe, fil, aiguilles, repassage : les fournitures vraiment utiles pour commencer à coudre.",
      pinterestImage: null,
    },
  },
  {
    slug: "choisir-son-tissu-premier-vetement",
    title: "Comment choisir son tissu pour un premier vêtement ?",
    excerpt: "Les critères qui rendent un tissu plus facile à coudre quand on apprend.",
    category: "Tissus et matières",
    tags: ["tissus", "débutante", "matières"],
    date: "2026-04-10",
    readingTime: "5 min",
    intro:
      "Tous les tissus ne se comportent pas de la même façon sous l'aiguille. Pour un premier vêtement, certaines matières rendent l'apprentissage beaucoup plus agréable.",
    blocks: [
      {
        heading: "Privilégier des matières stables",
        paragraphs: [
          "Un tissu stable, qui ne glisse pas et ne s'étire pas, permet de se concentrer sur la couture plutôt que sur la maîtrise de la matière.",
        ],
      },
      {
        heading: "Lire les recommandations du patron",
        paragraphs: [
          "Le patron indique les matières adaptées et le métrage nécessaire. Respecter ces indications évite un rendu très différent du modèle.",
        ],
      },
      {
        heading: "Penser à l'entretien et au tombé",
        paragraphs: [
          "Le tombé du tissu détermine l'allure du vêtement. Manipule le métrage en boutique : la façon dont il se plie t'indique déjà beaucoup.",
        ],
      },
    ],
    keyTakeaways: [
      "Les matières stables sont plus faciles à coudre.",
      "Le patron reste la meilleure référence pour le choix du tissu.",
      "Le tombé influence directement l'allure finale.",
    ],
    cta: {
      label: "Voir la formation courte",
      to: "/micro-formations/$slug",
      params: { slug: "choisir-un-tissu-adapte" },
      text: "Une formation courte est prévue pour approfondir le choix des tissus selon le projet.",
    },
    image: null,
    imageAlt: "Coupons de tissus empilés dans un atelier de couture",
    seo: {
      title: "Choisir son tissu pour un premier vêtement — Grisette Académie",
      description:
        "Quels tissus choisir pour coudre son premier vêtement ? Stabilité, recommandations du patron, tombé et entretien.",
      pinterestTitle: "Quel tissu choisir pour son premier vêtement cousu ?",
      pinterestDescription:
        "Les critères pour choisir un tissu facile à coudre quand on débute la couture.",
      pinterestImage: null,
    },
  },
  {
    slug: "erreurs-frequentes-quand-on-debute-la-couture",
    title: "7 erreurs fréquentes quand on débute la couture",
    excerpt: "Des maladresses très courantes, faciles à corriger dès les premiers projets.",
    category: "Conseils de professeure de couture",
    tags: ["débutante", "conseils", "erreurs"],
    date: "2026-03-05",
    readingTime: "6 min",
    intro:
      "Ces erreurs reviennent régulièrement en cours. Les connaître à l'avance permet de progresser plus vite et avec moins de frustration.",
    blocks: [
      {
        heading: "Sauter la préparation",
        paragraphs: [
          "Commencer sans avoir vérifié ses mesures, son métrage et ses fournitures allonge finalement le projet.",
          "Un tissu non prélavé peut aussi rétrécir après la première lessive.",
        ],
      },
      {
        heading: "Négliger le droit-fil et le repassage",
        paragraphs: [
          "Couper sans respecter le droit-fil déforme le vêtement. Et repasser seulement à la fin fige les défauts d'assemblage.",
        ],
      },
      {
        heading: "Viser un projet trop ambitieux",
        paragraphs: [
          "Choisir un premier projet simple permet de terminer, donc de progresser. Les finitions soignées viennent avec la pratique, pas avec la précipitation.",
        ],
      },
    ],
    keyTakeaways: [
      "La préparation évite la majorité des difficultés.",
      "Droit-fil et repassage conditionnent le rendu final.",
      "Un projet terminé apprend plus qu'un projet abandonné.",
    ],
    cta: {
      label: "Voir la formation courte droit-fil",
      to: "/micro-formations/$slug",
      params: { slug: "comprendre-le-droit-fil" },
      text: "Le droit-fil mérite un temps d'apprentissage à part entière.",
    },
    image: null,
    imageAlt: "Détail d'une couture en cours sur une machine à coudre",
    seo: {
      title: "7 erreurs fréquentes quand on débute la couture — Grisette Académie",
      description:
        "Préparation, droit-fil, repassage, choix du projet : les erreurs les plus courantes des débutantes en couture et comment les éviter.",
      pinterestTitle: "7 erreurs fréquentes quand on débute la couture",
      pinterestDescription:
        "Les maladresses classiques des débutantes en couture, et les réflexes simples pour les éviter.",
      pinterestImage: null,
    },
  },
  {
    slug: "bien-choisir-ses-livres-de-couture",
    title: "Bien choisir ses livres de couture",
    excerpt: "Comment sélectionner un ouvrage de couture utile plutôt qu'un beau livre qui reste sur l'étagère.",
    category: "Conseils de professeure de couture",
    tags: ["livres", "références", "apprendre"],
    date: "2026-06-02",
    readingTime: "4 min",
    intro: "Les livres de couture sont nombreux et se ressemblent souvent en apparence. Quelques critères simples permettent de repérer ceux qui serviront vraiment au quotidien.",
    blocks: [
      {
        heading: "Regarder la table des matières avant la couverture",
        paragraphs: [
          "Un bon ouvrage annonce clairement sa progression : matériel, gestes de base, puis techniques plus fines.",
          "Si la table des matières saute directement aux projets, le livre servira d'inspiration plutôt que d'apprentissage.",

        ],
      },
      {
        heading: "Distinguer les trois types d'ouvrages",
        paragraphs: [
          "Les livres de technique expliquent les gestes, les livres de modélisme la construction du vêtement, les livres de projets proposent des réalisations.",
          "Commencer par un livre de technique évite d'acheter trois ouvrages qui se répètent.",

        ],
      },
      {
        heading: "Vérifier la qualité des illustrations",
        paragraphs: [
          "Les schémas doivent montrer l'envers du travail, pas seulement le résultat fini.",
          "Un pas-à-pas photographié de près vaut souvent mieux qu'un long paragraphe.",

        ],
      },
    ],
    keyTakeaways: [
      "Lis la table des matières avant d'acheter.",
      "Un livre de technique d'abord, les projets ensuite.",
      "Les schémas d'envers sont le meilleur indice de sérieux.",
    ],
    cta: {
      label: "Voir la sélection complète",
      to: "/guides/$slug",
      params: { slug: "les-livres-essentiels" },
      text: "Pour aller plus loin, le guide « Les livres essentiels » réunit une sélection commentée classée par niveau.",
    },
    image: null,
    imageAlt: "Pile de livres de couture posés sur une table d'atelier",
    seo: {
      title: "Bien choisir ses livres de couture — Grisette Académie",
      description: "Quels critères pour choisir un livre de couture utile ? Table des matières, type d'ouvrage et qualité des schémas.",
      pinterestTitle: "Comment choisir un bon livre de couture",
      pinterestDescription: "Technique, modélisme ou projets : repérer l'ouvrage vraiment utile.",
      pinterestImage: null,
    },
  },
  {
    slug: "ou-acheter-ses-tissus-et-fournitures",
    title: "Où acheter ses tissus et ses fournitures",
    excerpt: "Merceries, tissuthèques, boutiques en ligne : comment comparer ses sources d'approvisionnement.",
    category: "Conseils de professeure de couture",
    tags: ["fournisseurs", "tissus", "mercerie"],
    date: "2026-06-09",
    readingTime: "4 min",
    intro: "Acheter du tissu à distance ou en boutique ne demande pas les mêmes précautions. Voici comment comparer ses fournisseurs sans mauvaise surprise.",
    blocks: [
      {
        heading: "En boutique : toucher, plier, observer",
        paragraphs: [
          "Le tombé se juge en laissant pendre le coupon, jamais à plat sur la table.",
          "Demande la laize et la composition : ce sont les deux informations qui conditionnent la quantité et l'entretien.",

        ],
      },
      {
        heading: "En ligne : les échantillons changent tout",
        paragraphs: [
          "Un fournisseur qui propose des échantillons payants reste plus économique qu'un coupon inutilisable.",
          "Note systématiquement la référence exacte du tissu commandé pour pouvoir en racheter.",

        ],
      },
      {
        heading: "Se constituer un carnet d'adresses",
        paragraphs: [
          "Classe tes fournisseurs par type de matière plutôt que par ordre alphabétique.",
          "Ajoute pour chacun le délai constaté et la qualité réelle reçue, pas seulement celle annoncée.",

        ],
      },
    ],
    keyTakeaways: [
      "Juge le tombé en laissant pendre le coupon.",
      "Commande des échantillons avant un grand métrage.",
      "Note toujours la référence du tissu acheté.",
    ],
    cta: {
      label: "Voir la liste des fournisseurs",
      to: "/guides/$slug",
      params: { slug: "liste-des-fournisseurs" },
      text: "Le guide « Liste des fournisseurs » réunit un carnet d'adresses et une grille de comparaison à remplir.",
    },
    image: null,
    imageAlt: "Rouleaux de tissus alignés dans une mercerie",
    seo: {
      title: "Où acheter ses tissus et fournitures de couture — Grisette Académie",
      description: "Comment comparer merceries, tissuthèques et boutiques en ligne pour acheter tissus et fournitures de couture.",
      pinterestTitle: "Où acheter ses tissus de couture",
      pinterestDescription: "Boutique ou en ligne : comparer ses fournisseurs de tissus et fournitures.",
      pinterestImage: null,
    },
  },
  {
    slug: "creer-sa-tissutheque-methode-simple",
    title: "Créer sa tissuthèque : une méthode simple",
    excerpt: "Classer ses échantillons de tissu pour ne plus racheter à l'aveugle.",
    category: "Organisation",
    tags: ["tissuthèque", "organisation", "échantillons"],
    date: "2026-06-23",
    readingTime: "4 min",
    intro: "Une tissuthèque n'est pas une collection décorative : c'est un outil de décision qui évite les achats regrettés.",
    blocks: [
      {
        heading: "Prélever un échantillon utile",
        paragraphs: [
          "Un carré de 5 à 10 cm suffit, à condition de couper un bord dans le droit-fil et un bord en biais pour observer les réactions.",
          "Note tout de suite la provenance : un échantillon sans référence perd la moitié de son intérêt.",

        ],
      },
      {
        heading: "Les informations à consigner",
        paragraphs: [
          "Composition, laize, grammage, prix au mètre et consignes d'entretien constatées après prélavage.",
          "Ajoute une ligne « projets possibles » : c'est elle que tu reliras avant d'acheter.",

        ],
      },
      {
        heading: "Classer par famille, pas par couleur",
        paragraphs: [
          "Un classement par type de tissu correspond à la façon dont on cherche réellement une matière pour un projet.",
          "Garde une section « à éviter » : les mauvaises expériences sont aussi des informations.",

        ],
      },
    ],
    keyTakeaways: [
      "Un échantillon sans référence est presque inutile.",
      "Consigne l'entretien réel après prélavage.",
      "Classe par famille de tissu, pas par couleur.",
    ],
    cta: {
      label: "Voir les fiches de tissuthèque",
      to: "/guides/$slug",
      params: { slug: "tissutheque" },
      text: "Le guide « Tissuthèque » propose des fiches prêtes à imprimer pour coller et documenter chaque échantillon.",
    },
    image: null,
    imageAlt: "Échantillons de tissus classés sur des fiches cartonnées",
    seo: {
      title: "Créer sa tissuthèque : méthode et fiches — Grisette Académie",
      description: "Comment constituer une tissuthèque utile : prélever ses échantillons, noter les caractéristiques et classer ses matières.",
      pinterestTitle: "Créer sa tissuthèque pas à pas",
      pinterestDescription: "Échantillons, caractéristiques et classement : la méthode simple.",
      pinterestImage: null,
    },
  },
  {
    slug: "reglages-machine-a-coudre-les-bases",
    title: "Les réglages de machine à coudre à connaître",
    excerpt: "Tension, longueur de point, aiguille : les réglages qui expliquent la plupart des points ratés.",
    category: "Techniques",
    tags: ["machine", "réglages", "dépannage"],
    date: "2026-06-30",
    readingTime: "5 min",
    intro: "Quand un point est irrégulier, la machine est rarement en cause. Trois réglages expliquent la grande majorité des problèmes.",
    blocks: [
      {
        heading: "L'aiguille avant tout",
        paragraphs: [
          "Une aiguille usée, tordue ou inadaptée au tissu provoque points sautés, fil cassé et trous.",
          "Change d'aiguille régulièrement et adapte le type au tissu : universelle, jersey, jean ou microtex.",

        ],
      },
      {
        heading: "La tension du fil",
        paragraphs: [
          "Des boucles sur l'envers indiquent le plus souvent un mauvais enfilage plutôt qu'un réglage de tension.",
          "Réenfile machine et canette pied relevé avant de toucher la molette de tension.",

        ],
      },
      {
        heading: "La longueur de point et l'entraînement",
        paragraphs: [
          "Un point plus long convient aux tissus épais et au bâti, un point plus court aux courbes et aux tissus fins.",
          "Fais toujours un essai sur une chute pliée en double, dans les mêmes conditions que ton projet.",

        ],
      },
    ],
    keyTakeaways: [
      "Commence par changer l'aiguille.",
      "Réenfile avant de modifier la tension.",
      "Teste toujours sur une chute identique au projet.",
    ],
    cta: {
      label: "Comprendre sa machine en détail",
      to: "/guides/$slug",
      params: { slug: "machines-apprendre-et-comprendre" },
      text: "Le guide « Machines : apprendre et comprendre » détaille l'anatomie, les réglages, l'entretien et un tableau de dépannage.",
    },
    image: null,
    imageAlt: "Détail d'une machine à coudre et de ses molettes de réglage",
    seo: {
      title: "Réglages de machine à coudre : les bases — Grisette Académie",
      description: "Aiguille, tension, longueur de point : les réglages de machine à coudre qui expliquent la plupart des points ratés.",
      pinterestTitle: "Les réglages de machine à connaître",
      pinterestDescription: "Aiguille, tension et longueur de point : réparer un point irrégulier.",
      pinterestImage: null,
    },
  },
  {
    slug: "20-mots-de-couture-a-connaitre",
    title: "20 mots de couture à connaître",
    excerpt: "Un mini-lexique pour lire un patron sans buter sur le vocabulaire.",
    category: "Débuter la couture",
    tags: ["lexique", "vocabulaire", "patron"],
    date: "2026-07-07",
    readingTime: "4 min",
    intro: "Beaucoup de blocages en couture ne viennent pas du geste mais du mot employé pour le décrire. Voici les termes qui reviennent le plus souvent.",
    blocks: [
      {
        heading: "Le vocabulaire du patron",
        paragraphs: [
          "Droit-fil, laize, marge de couture, cran de montage, pli d'aisance : ces cinq mots suffisent à lire la plupart des planches.",
          "Le droit-fil est la référence : mal placé, il déforme le vêtement dès le premier lavage.",

        ],
      },
      {
        heading: "Le vocabulaire des coutures",
        paragraphs: [
          "Surfiler, bâtir, cranter, dégarnir, rabattre : autant de gestes distincts souvent confondus.",
          "Bâtir n'est pas une perte de temps : c'est ce qui rend l'assemblage définitif plus précis.",

        ],
      },
      {
        heading: "Le vocabulaire des finitions",
        paragraphs: [
          "Ourlet, parementure, biais, sous-piqûre, thermocollant : le vocabulaire des finitions est celui qui change le rendu final.",
          "La sous-piqûre, souvent ignorée, empêche une parementure de rouler vers l'extérieur.",

        ],
      },
    ],
    keyTakeaways: [
      "Le droit-fil conditionne la tenue du vêtement.",
      "Bâtir améliore la précision de l'assemblage.",
      "Les finitions ont leur vocabulaire propre.",
    ],
    cta: {
      label: "Voir le lexique complet",
      to: "/guides/$slug",
      params: { slug: "lexique-de-la-couturiere" },
      text: "Le guide « Lexique de la couturière » réunit l'ensemble des termes avec définitions et index alphabétique.",
    },
    image: null,
    imageAlt: "Patron de couture annoté sur une table de coupe",
    seo: {
      title: "20 mots de couture à connaître — Grisette Académie",
      description: "Droit-fil, cran, surfilage, sous-piqûre : un mini-lexique des termes de couture pour lire un patron sans hésiter.",
      pinterestTitle: "20 mots de couture à connaître",
      pinterestDescription: "Le vocabulaire de base pour lire un patron sereinement.",
      pinterestImage: null,
    },
  },
  {
    slug: "vocabulaire-du-patronage-premiers-reperes",
    title: "Vocabulaire du patronage : premiers repères",
    excerpt: "Les termes de modélisme à comprendre avant de transformer un patron.",
    category: "Techniques",
    tags: ["modélisme", "patronage", "vocabulaire"],
    date: "2026-07-14",
    readingTime: "5 min",
    intro: "Le patronage a son propre vocabulaire, plus proche de la construction que de la couture. En connaître les bases rend les cours de modélisme beaucoup plus lisibles.",
    blocks: [
      {
        heading: "Les lignes de construction",
        paragraphs: [
          "Ligne de poitrine, de taille, de hanches et milieu devant : ce sont les repères sur lesquels tout le patron s'appuie.",
          "Une ligne mal tracée se répercute sur toutes les transformations suivantes.",

        ],
      },
      {
        heading: "Pinces et aisance",
        paragraphs: [
          "La pince met le tissu plat en volume ; l'aisance est la marge de confort ajoutée aux mesures du corps.",
          "Déplacer une pince ne change pas la taille du vêtement, seulement la répartition du volume.",

        ],
      },
      {
        heading: "Du patron au prototype",
        paragraphs: [
          "La toile ou prototype sert à vérifier le patron avant de couper le vrai tissu.",
          "On note les corrections directement sur la toile, puis on les reporte sur le patron papier.",

        ],
      },
    ],
    keyTakeaways: [
      "Les lignes de construction précèdent toute transformation.",
      "Aisance et mesures du corps ne se confondent pas.",
      "La toile évite de gâcher le tissu final.",
    ],
    cta: {
      label: "Voir le lexique de la modéliste",
      to: "/guides/$slug",
      params: { slug: "lexique-de-la-modeliste" },
      text: "Le guide « Lexique de la modéliste » détaille les termes de patronage, de moulage et de prototypage.",
    },
    image: null,
    imageAlt: "Patron de modélisme tracé sur papier avec règles et équerre",
    seo: {
      title: "Vocabulaire du patronage : premiers repères — Grisette Académie",
      description: "Lignes de construction, pinces, aisance, toile : les termes de modélisme à comprendre avant de transformer un patron.",
      pinterestTitle: "Le vocabulaire du patronage",
      pinterestDescription: "Lignes, pinces, aisance et toile : les bases du modélisme.",
      pinterestImage: null,
    },
  },
  {
    slug: "premiers-pas-en-couture-plan-en-5-etapes",
    title: "Premiers pas en couture : un plan en 5 étapes",
    excerpt: "Un chemin clair pour passer de la machine dans son carton au premier vêtement porté.",
    category: "Débuter la couture",
    tags: ["débutante", "méthode", "premier projet"],
    date: "2026-07-21",
    readingTime: "5 min",
    intro: "Débuter la couture devient beaucoup plus simple quand on suit un ordre. Voici les cinq étapes que je propose systématiquement en cours.",
    blocks: [
      {
        heading: "1. Apprivoiser la machine, sans projet",
        paragraphs: [
          "Coudre des lignes droites, des courbes et des angles sur des chutes, sans enjeu, installe la confiance.",
          "C'est aussi le moment d'apprendre à enfiler la machine et la canette de mémoire.",

        ],
      },
      {
        heading: "2. Prendre ses mesures et lire un patron",
        paragraphs: [
          "Les mesures se prennent sur les sous-vêtements portés, mètre ruban bien horizontal.",
          "On choisit ensuite sa taille sur le tableau du patron, jamais sur sa taille de prêt-à-porter.",

        ],
      },
      {
        heading: "3. Préparer le tissu, puis coudre",
        paragraphs: [
          "Prélavage, repassage, placement dans le droit-fil : la préparation détermine la qualité du résultat.",
          "Le premier projet gagne à rester simple : peu de pièces, pas de fermeture invisible.",

        ],
      },
      {
        heading: "4. Finir et porter",
        paragraphs: [
          "Un vêtement terminé, même imparfait, apprend plus que trois projets abandonnés.",
          "Note ce qui a coincé : c'est la base de ton prochain apprentissage.",

        ],
      },
    ],
    keyTakeaways: [
      "Manipule la machine avant tout projet.",
      "Choisis ta taille sur le tableau du patron.",
      "Termine le projet, même imparfait.",
    ],
    cta: {
      label: "Voir le guide débutant",
      to: "/guides/$slug",
      params: { slug: "guide-debutant" },
      text: "Le « Guide débutant » reprend ces étapes en détail, avec un premier projet guidé et une checklist de suivi.",
    },
    image: null,
    imageAlt: "Débutante en couture devant sa machine avec un tissu simple",
    seo: {
      title: "Débuter la couture : un plan en 5 étapes — Grisette Académie",
      description: "Un plan en 5 étapes pour débuter la couture : machine, mesures, patron, préparation du tissu et premier projet.",
      pinterestTitle: "Débuter la couture en 5 étapes",
      pinterestDescription: "De la machine au premier vêtement porté : un plan clair.",
      pinterestImage: null,
    },
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

export const formatDateFr = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });