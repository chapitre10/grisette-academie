import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ButtonLink, Section, SectionHeading, buttonStyles } from "@/components/Ui";
import { site } from "@/data/site";
import {
  clearContactSubmission,
  readContactSubmission,
  type ContactSubmission,
} from "@/lib/contactSubmission";

const title = "Demande envoyée — Grisette Académie";
const description =
  "Confirmation de ta demande de contact adressée à Grisette Académie, avec le récapitulatif des informations saisies.";

export const Route = createFileRoute("/demande-envoyee")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/demande-envoyee" }],
  }),
  component: ContactConfirmationPage,
});

function ContactConfirmationPage() {
  const navigate = useNavigate();
  const [submission, setSubmission] = useState<ContactSubmission | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSubmission(readContactSubmission());
    setReady(true);
  }, []);

  const rows = submission
    ? [
        { label: "Prénom", value: submission.firstName },
        { label: "Nom", value: submission.lastName },
        { label: "Adresse e-mail", value: submission.email },
        { label: "Sujet", value: submission.subject },
        { label: "Type de demande", value: submission.requestType },
      ].filter((row) => row.value.trim().length > 0)
    : [];

  return (
    <>
      <Section tone="blush">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Ta demande est enregistrée"
          intro="Merci pour ton message. Voici le récapitulatif des informations que tu viens de saisir."
        />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {!ready ? (
              <p className="text-sm text-brand/70">Chargement du récapitulatif…</p>
            ) : submission ? (
              <div role="status" className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-xl text-brand">Récapitulatif de ta demande</h2>
                <dl className="mt-5 divide-y divide-border">
                  {rows.map((row) => (
                    <div key={row.label} className="grid gap-1 py-3 sm:grid-cols-[200px_minmax(0,1fr)]">
                      <dt className="text-sm font-medium text-brand">{row.label}</dt>
                      <dd className="text-sm text-brand/85">{row.value}</dd>
                    </div>
                  ))}
                  <div className="grid gap-1 py-3 sm:grid-cols-[200px_minmax(0,1fr)]">
                    <dt className="text-sm font-medium text-brand">Message</dt>
                    <dd className="whitespace-pre-line text-sm leading-relaxed text-brand/85">
                      {submission.message}
                    </dd>
                  </div>
                </dl>

                <p className="mt-6 rounded-md border border-raspberry/40 bg-peach/50 p-4 text-sm leading-relaxed text-brand/85">
                  L'envoi automatique n'est pas encore activé : aucun service e-mail n'est connecté
                  pour le moment. Pour être sûre que ta demande me parvienne, écris-moi directement à{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold underline">
                    {site.email}
                  </a>{" "}
                  en reprenant ce récapitulatif.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      clearContactSubmission();
                      navigate({ to: "/contact", search: {} });
                    }}
                    className={buttonStyles.secondary}
                  >
                    Écrire un autre message
                  </button>
                  <ButtonLink to="/faq">Consulter la FAQ</ButtonLink>
                </div>
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card p-6">
                <h2 className="text-xl text-brand">Aucun récapitulatif à afficher</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand/85">
                  Cette page affiche le récapitulatif juste après l'envoi du formulaire. Il n'est plus
                  disponible (page rouverte ou session terminée).
                </p>
                <div className="mt-5">
                  <ButtonLink to="/contact">Retourner au formulaire</ButtonLink>
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-blush/40 p-6">
              <h2 className="text-xl text-brand">Et ensuite ?</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand/85">
                Je réponds personnellement à chaque demande. En attendant, tu peux explorer les{" "}
                <Link to="/guides" className="font-semibold underline">
                  guides
                </Link>{" "}
                ou les{" "}
                <Link to="/se-former" className="font-semibold underline">
                  formats pour se former
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}