/**
 * Section « Qui se cache vraiment derrière Grisette Académie ? »
 * Contenu 100 % modifiable à la main : édite simplement les questions/réponses
 * ci-dessous (6 entrées, affichées en deux colonnes de 3 dans l'ordre indiqué).
 */
export type AProposFaqItem = {
  question: string;
  answer: string;
};

export const aProposFaqItems: AProposFaqItem[] = [
  {
    question: "Qui es-tu, en quelques mots ?",
    answer:
      "À compléter : ton prénom, ta ville, ton rapport à la couture et ce que tu aimes transmettre.",
  },
  {
    question: "Comment la couture est-elle entrée dans ta vie ?",
    answer:
      "À compléter : le déclic, la personne ou le projet qui t'a donné envie de coudre.",
  },
  {
    question: "Pourquoi avoir créé Grisette Académie ?",
    answer:
      "À compléter : le manque que tu as constaté et la promesse que tu fais à celles et ceux qui apprennent.",
  },
  {
    question: "À qui s'adressent tes contenus ?",
    answer:
      "À compléter : niveaux, envies et situations des personnes que tu accompagnes le mieux.",
  },
  {
    question: "Qu'est-ce qui rend ta pédagogie différente ?",
    answer:
      "À compléter : ta façon d'expliquer, ton rythme, la place laissée aux erreurs et aux questions.",
  },
  {
    question: "D'où vient le nom « Grisette » ?",
    answer:
      "À compléter : l'origine du nom et ce qu'il raconte de ton univers.",
  },
];
