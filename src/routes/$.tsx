import { createFileRoute, notFound } from "@tanstack/react-router";

import { NotFoundContent } from "@/components/NotFoundContent";

const title = "Page introuvable — Grisette Académie";
const description =
  "Cette page n'existe plus ou l'adresse est incorrecte. Reprends le fil avec les guides, les ressources gratuites et les cours de couture.";

export const Route = createFileRoute("/$")({
  // Déclenche une véritable réponse 404 côté serveur.
  loader: () => {
    throw notFound();
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  notFoundComponent: NotFoundContent,
  component: NotFoundContent,
});
