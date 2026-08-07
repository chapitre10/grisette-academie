import { createFileRoute } from "@tanstack/react-router";

import { LegalBlock, LegalPage, Pending } from "@/components/LegalPage";
import { site } from "@/data/site";

const title = "Conditions générales de vente — Grisette Académie";
const description =
  "CGV de Grisette Académie : produits numériques, cours en présentiel, paiement, livraison et droit de rétractation.";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cgv" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cgv" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Conditions de vente"
      title="Conditions générales de vente"
      intro="Conditions applicables aux templates, guides numériques, cours en présentiel et micro-formations."
    >
      <LegalBlock title="Vendeur">
        <p>
          {site.legalName} — <Pending label="statut juridique et adresse" /> — contact :{" "}
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
        </p>
      </LegalBlock>

      <LegalBlock title="Produits et services">
        <ul className="list-disc space-y-1 pl-5">
          <li>Templates et guides numériques téléchargeables.</li>
          <li>Cours de couture en présentiel.</li>
          <li>Micro-formations en ligne.</li>
        </ul>
        <p>
          Les descriptions, niveaux et formats sont indiqués sur chaque fiche produit. Les tarifs
          définitifs sont à préciser : <Pending label="grille tarifaire" />
        </p>
      </LegalBlock>

      <LegalBlock title="Commande et paiement">
        <p>
          Le processus de commande et le prestataire de paiement seront précisés lors de l'ouverture
          des guides : <Pending label="moyens de paiement" />. Les prix sont indiqués en euros.
        </p>
      </LegalBlock>

      <LegalBlock title="Livraison">
        <p>
          Les produits numériques sont mis à disposition par téléchargement ou lien d'accès après
          confirmation du paiement. Les cours en présentiel se déroulent aux dates et lieux indiqués
          lors de l'inscription.
        </p>
      </LegalBlock>

      <LegalBlock title="Droit de rétractation">
        <p>
          Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation de
          14 jours ne s'applique pas aux contenus numériques fournis immédiatement après l'achat,
          lorsque le client a expressément renoncé à ce droit.
        </p>
        <p>
          Pour les cours en présentiel et les micro-formations, les conditions d'annulation et de
          report sont les suivantes : <Pending label="conditions d'annulation" />
        </p>
      </LegalBlock>

      <LegalBlock title="Licence d'utilisation">
        <p>
          Les templates et guides sont vendus pour un usage personnel. La revente, le partage et la
          diffusion publique des fichiers sont interdits.
        </p>
      </LegalBlock>

      <LegalBlock title="Réclamations et litiges">
        <p>
          Toute réclamation peut être adressée par e-mail. À défaut d'accord, le médiateur de la
          consommation compétent est : <Pending label="médiateur" />. Droit applicable : droit
          français.
        </p>
      </LegalBlock>
    </LegalPage>
  ),
});