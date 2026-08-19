import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { ButtonLink, Card, Section, SectionHeading, buttonStyles } from "@/components/Ui";
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
      { property: "og:url", content: "/demande-envoyee" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/demande-envoyee" }],
  }),
  component: ContactConfirmationPage,
});

const quickLinks = [
  { label: "Voir les guides", to: "/guides" },
  { label: "Lire les ressources gratuites", to: "/blog" },
  { label: "Découvrir les cours", to: "/cours-presentiel" },
];

const suggestions = [
  {
    title: "Guides pratiques",
    description: "Des templates et fiches pour avancer sereinement dans tes projets.",
    to: "/guides",
  },
  {
    title: "Ressources gratuites",
    description: "Des articles et conseils pour apprendre la couture à ton rythme.",
    to: "/blog",
  },
  {
    title: "Cours de couture",
    description: "Un accompagnement personnalisé pour progresser plus vite.",
    to: "/cours-presentiel",
  },
];

/** Illustration couture : fil qui forme une coche, aiguille et bouton. */
function SuccessIllustration() {
  return (
    <svg
      viewBox="0 0 320 90"
      role="img"
      aria-label="Illustration : un fil de couture forme une coche, avec une aiguille et un bouton"
      className="h-20 w-full max-w-sm"
    >
      <path
        d="M12 50l24 24 40-48"
        stroke="var(--color-raspberry)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="168" cy="45" r="18" fill="var(--color-peach)" />
      <circle cx="160" cy="41" r="3" fill="var(--color-brand)" />
      <circle cx="168" cy="51" r="3" fill="var(--color-brand)" />
      <circle cx="176" cy="41" r="3" fill="var(--color-brand)" />
      <circle cx="176" cy="51" r="3" fill="var(--color-brand)" />
      <path
        d="M200 45c20-10 40-10 60 0s40 8 54-8"
        stroke="var(--color-raspberry)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="8 6"
      />
      <path
        d="M270 28l44 22"
        stroke="var(--color-brand)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="314" cy="50" r="4" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" />
    </svg>
  );
}

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
      <Section tone="mist" className="!py-8 md:!py-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-5xl leading-none text-raspberry md:text-6xl">
            C’est envoyé !
          </p>
          <h1 className="mt-4 text-3xl text-brand md:text-4xl">
            Ta demande est bien passée entre mes mains
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand/85">
            Merci pour ton message. Je le lis avec attention et je te réponds personnellement dès
            que possible.
          </p>
          <p className="mt-3 text-sm italic text-brand/75">
            En attendant, pas de fil qui s’emmêle : tu peux continuer à explorer l’atelier.
          </p>

          <div className="mt-6 flex justify-center">
            <SuccessIllustration />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/">Retourner à l’accueil</ButtonLink>
            <ButtonLink to="/guides" variant="flame">
              Voir les guides
            </ButtonLink>
            <ButtonLink to="/blog" variant="secondary">
              Lire les ressources
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to as never}
                  className="inline-flex min-h-11 items-center text-brand underline underline-offset-4 hover:text-fuchsia-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
                  L’envoi automatique n’est pas encore activé : aucun service e-mail n’est connecté
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
                      navigate({ to: "/contact", search: {} as never });
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
                  Cette page affiche le récapitulatif juste après l’envoi du formulaire. Il n’est plus
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

      <Section tone="ivory">
        <SectionHeading title="Tu peux peut-être trouver ton bonheur ici" align="center" />
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {suggestions.map((item) => (
            <li key={item.to}>
              <Card className="h-full">
                <h3 className="text-xl text-brand">
                  <Link
                    to={item.to as never}
                    className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand/80">{item.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
