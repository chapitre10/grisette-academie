import { Link } from "@tanstack/react-router";

import { ButtonLink, Card, Section, SectionHeading } from "@/components/Ui";

const quickLinks = [
  { label: "Voir les templates et guides", to: "/guides" },
  { label: "Lire les ressources gratuites", to: "/blog" },
  { label: "Découvrir les cours de couture", to: "/cours-presentiel" },
];

const suggestions = [
  {
    title: "Templates et guides",
    description: "Des outils pratiques pour organiser tes projets couture.",
    to: "/guides",
  },
  {
    title: "Ressources gratuites",
    description: "Des conseils et astuces pour apprendre à ton rythme.",
    to: "/blog",
  },
  {
    title: "Cours de couture",
    description: "Un accompagnement pour avancer sur tes projets.",
    to: "/cours-presentiel",
  },
];

/** Illustration couture : fil interrompu, bobine et aiguille. Remplaçable par un autre SVG. */
function SewingIllustration() {
  return (
    <svg
      viewBox="0 0 320 90"
      role="img"
      aria-label="Illustration : une ligne de couture interrompue, une bobine de fil et une aiguille"
      className="h-20 w-full max-w-sm"
    >
      <path
        d="M8 55h60"
        stroke="var(--color-raspberry)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="10 8"
        fill="none"
      />
      <rect x="80" y="28" width="34" height="46" rx="6" fill="var(--color-peach)" />
      <rect x="74" y="24" width="46" height="9" rx="4" fill="var(--color-blush)" />
      <rect x="74" y="69" width="46" height="9" rx="4" fill="var(--color-blush)" />
      <path
        d="M120 50c26 18 46-18 70 0s44 14 62-6"
        stroke="var(--color-raspberry)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M252 44l52-26"
        stroke="var(--color-brand)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="304" cy="18" r="4" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" />
    </svg>
  );
}

export function NotFoundContent() {
  return (
    <>
      <Section tone="mist">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-6xl leading-none text-raspberry md:text-7xl">
            <span className="sr-only">Erreur </span>404
          </p>
          <h1 className="mt-4 text-3xl text-brand md:text-4xl">
            Oups, ce point de couture s'est défait
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand/85">
            La page que tu recherches semble avoir disparu de l'atelier ou l'adresse n'est peut-être
            pas tout à fait correcte. Pas d'inquiétude, on peut reprendre le fil.
          </p>
          <p className="mt-3 text-sm italic text-brand/75">
            Même les meilleurs projets couture ont parfois besoin d'un petit découd-vite.
          </p>

          <div className="mt-6 flex justify-center">
            <SewingIllustration />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/">Retourner à l'accueil</ButtonLink>
            <ButtonLink to="/blog" variant="flame">
              Découvrir les ressources
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Me contacter
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
        <SectionHeading title="Tu peux peut-être trouver ton bonheur ici" />
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
