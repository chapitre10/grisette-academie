import { createFileRoute } from "@tanstack/react-router";

import { LegalBlock, LegalPage, Pending } from "@/components/LegalPage";
import { site } from "@/data/site";

const title = "Politique de confidentialité — Grisette Academy";
const description =
  "Politique de confidentialité de Grisette Academy : données collectées, finalités, durée de conservation et droits RGPD.";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/politique-confidentialite" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/politique-confidentialite" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Données personnelles"
      title="Politique de confidentialité"
      intro="Comment les données transmises via ce site sont collectées, utilisées et protégées."
    >
      <LegalBlock title="Responsable du traitement">
        <p>
          {site.legalName} — contact :{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
        </p>
      </LegalBlock>

      <LegalBlock title="Données collectées">
        <ul className="list-disc space-y-1 pl-5">
          <li>Formulaire de contact : prénom, nom, adresse e-mail, sujet et message.</li>
          <li>Newsletter (si activée) : adresse e-mail.</li>
          <li>
            Commandes de templates ou guides (si activées) : informations nécessaires à la
            facturation. <Pending label="prestataire de paiement" />
          </li>
        </ul>
      </LegalBlock>

      <LegalBlock title="Finalités">
        <p>
          Les données servent uniquement à répondre aux demandes, gérer les inscriptions aux cours
          ou formations, livrer les produits achetés et, avec consentement, envoyer des informations
          sur les nouveautés.
        </p>
      </LegalBlock>

      <LegalBlock title="Base légale">
        <p>
          Consentement pour les demandes de contact et la newsletter, exécution du contrat pour les
          achats et inscriptions, obligation légale pour la conservation comptable.
        </p>
      </LegalBlock>

      <LegalBlock title="Durée de conservation">
        <p>
          Demandes de contact : <Pending label="durée à préciser" />. Données de facturation :
          conservation légale de 10 ans. Newsletter : jusqu'au retrait du consentement.
        </p>
      </LegalBlock>

      <LegalBlock title="Destinataires et sous-traitants">
        <p>
          Aucune donnée n'est revendue. Les prestataires techniques éventuels (hébergement, envoi
          d'e-mails, paiement) sont listés ici : <Pending label="liste des sous-traitants" />
        </p>
      </LegalBlock>

      <LegalBlock title="Cookies et mesure d'audience">
        <p>
          Ce site n'utilise pas de cookie publicitaire. Si un outil de mesure d'audience est ajouté,
          il sera mentionné ici : <Pending label="outil de statistiques" />
        </p>
      </LegalBlock>

      <LegalBlock title="Tes droits">
        <p>
          Conformément au RGPD, tu disposes d'un droit d'accès, de rectification, d'effacement, de
          limitation, d'opposition et de portabilité. Ces droits s'exercent par e-mail à{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          . Une réclamation peut être adressée à la CNIL (www.cnil.fr).
        </p>
      </LegalBlock>
    </LegalPage>
  ),
});