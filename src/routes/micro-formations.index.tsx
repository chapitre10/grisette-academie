import { createFileRoute, Link } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge, ButtonLink, Card, Faq, Section, SectionHeading } from "@/components/Ui";
import { formationFaq, formations } from "@/data/formations";

const title = "Formations courtes couture en ligne — Grisette Académie";
const description =
  "Des formations courtes couture courtes et ciblées pour apprendre une technique à la fois : droit-fil, mesures, choix du tissu, préparation et finitions.";

export const Route = createFileRoute("/micro-formations/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/micro-formations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/micro-formations" }],
  }),
  component: FormationsPage,
});

function FormationsPage() {
  return (
    <>
      <Section tone="blush">
        <SectionHeading
          as="h1"
          eyebrow="Formations courtes"
          title="Formations courtes couture"
          intro="Des formations courtes et ciblées pour apprendre une technique à la fois."
        />
        <p className="mt-6 inline-block rounded-md border border-brand/25 bg-background px-4 py-3 text-sm text-brand">
          Les formations courtes sont en préparation : aucune n'est encore disponible à l'inscription.
        </p>
      </Section>

      <Section>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {formations.map((formation) => (
            <li key={formation.slug}>
              <Card>
                <ImagePlaceholder
                  src={formation.image}
                  alt={formation.imageAlt}
                  hint="Visuel de la formation courte (à remplacer)"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge tone="neutral">{formation.difficulty}</Badge>
                  <Badge tone="gold">Bientôt disponible</Badge>
                </div>
                <h2 className="mt-3 text-xl text-brand">
                  <Link
                    to="/micro-formations/$slug"
                    params={{ slug: formation.slug }}
                    className="hover:text-fuchsia-accent"
                  >
                    {formation.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-brand/80">{formation.objective}</p>
                <dl className="mt-4 space-y-1 text-sm text-brand/75">
                  <div className="flex gap-2">
                    <dt className="font-medium">Durée :</dt>
                    <dd>{formation.duration}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium">Niveau :</dt>
                    <dd>{formation.level}</dd>
                  </div>
                </dl>
                <div className="mt-5">
                  <ButtonLink
                    to="/micro-formations/$slug"
                    params={{ slug: formation.slug }}
                    variant="secondary"
                  >
                    Découvrir
                  </ButtonLink>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Questions fréquentes" title="Les formations courtes en pratique" />
        <div className="mt-8">
          <Faq items={formationFaq} />
        </div>
      </Section>
    </>
  );
}