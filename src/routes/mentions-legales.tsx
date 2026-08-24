import { createFileRoute } from "@tanstack/react-router";

import { LegalBlock, LegalPage, Pending } from "@/components/LegalPage";
import { site } from "@/data/site";

const title = "Mentions légales — Grisette Académie";
const description =
  "Mentions légales du site Grisette Académie : éditeur, hébergement, propriété intellectuelle et contact.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mentions-legales" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Informations légales"
      title="Mentions légales"
      intro="Informations relatives à l'éditeur du site Grisette Académie et à son hébergement."
    >
      <LegalBlock title="Éditeur du site">
        <p>Nom, Prénom / Raison sociale : Blanc Charlotte</p>
        <p>Adresse : 8 allée du miradou 34980 Combaillaux</p>
        <p>
          SIREN / SIRET : <Pending label="numéro d'immatriculation" />
        </p>
        <p>
          Contact :{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
        </p>
      </LegalBlock>

      <LegalBlock title="Hébergement">
        <p>
          Hébergeur : <Pending label="nom de l'hébergeur" />
        </p>
        <p>
          Adresse et contact de l'hébergeur : <Pending label="coordonnées de l'hébergeur" />
        </p>
      </LegalBlock>

      <LegalBlock title="Propriété intellectuelle">
        <p>
          L'ensemble des contenus présents sur ce site (textes, visuels, templates, guides,
          supports pédagogiques) est protégé par le droit d'auteur. Toute reproduction, diffusion ou
          revente, totale ou partielle, sans autorisation écrite préalable est interdite.
        </p>
        <p>
          Les templates et guides achetés sont destinés à un usage personnel, sauf mention contraire
          indiquée dans la licence du produit.
        </p>
      </LegalBlock>

      <LegalBlock title="Liens externes">
        <p>
          Ce site peut contenir des liens vers des sites tiers, notamment Pinterest. Grisette
          Academy n'est pas responsable du contenu ni des pratiques de confidentialité de ces sites.
        </p>
      </LegalBlock>

      <LegalBlock title="Médiation et litiges">
        <p>
          Médiateur de la consommation : <Pending label="organisme de médiation" />
        </p>
        <p>Droit applicable : droit français.</p>
      </LegalBlock>
    </LegalPage>
  ),
});