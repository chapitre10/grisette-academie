import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge, ButtonLink, Card, Faq, InfoRow, Section, SectionHeading } from "@/components/Ui";
import { formationFaq, formations, getFormation, type Formation } from "@/data/formations";
import { products } from "@/data/products";

export const Route = createFileRoute("/micro-formations/$slug")({
  loader: ({ params }) => {
    const formation = getFormation(params.slug);
    if (!formation) throw notFound();
    return { formation };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Micro-formation indisponible — Grisette Académie" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { formation } = loaderData;
    return {
      meta: [
        { title: formation.seo.title },
        { name: "description", content: formation.seo.description },
        { property: "og:title", content: formation.seo.title },
        { property: "og:description", content: formation.seo.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/micro-formations/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/micro-formations/${params.slug}` }],
    };
  },
  component: FormationPage,
});

function FormationPage() {
  const { formation } = Route.useLoaderData() as { formation: Formation };
  const related = formation.related
    .map((slug) => formations.find((f) => f.slug === slug))
    .filter((f): f is Formation => Boolean(f));

  return (
    <>
      <div className="border-b border-border bg-mist">
        <nav aria-label="Fil d'Ariane" className="container-page py-4 text-sm text-brand/75">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-fuchsia-accent">
                Accueil
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/micro-formations" className="hover:text-fuchsia-accent">
                Micro-formations
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="font-medium text-brand">
              {formation.title}
            </li>
          </ol>
        </nav>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <ImagePlaceholder
            src={formation.image}
            alt={formation.imageAlt}
            hint="Visuel de la micro-formation (à remplacer)"
            className="aspect-[4/3]"
          />
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="neutral">{formation.difficulty}</Badge>
              <Badge tone="gold">Bientôt disponible</Badge>
            </div>
            <h1 className="mt-4 text-3xl leading-tight text-brand md:text-4xl">
              {formation.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-brand/85">{formation.objective}</p>

            <dl className="mt-6 rounded-lg border border-border bg-card p-5">
              <InfoRow label="Durée" value={formation.duration} />
              <InfoRow label="Format" value={formation.format} />
              <InfoRow label="Niveau" value={formation.level} />
              <InfoRow label="Prix" value={formation.price ?? "Bientôt disponible"} />
            </dl>

            <button
              type="button"
              disabled
              className="mt-6 w-full rounded-md bg-mist px-5 py-3 text-sm font-semibold text-brand/70 sm:w-auto"
            >
              Bientôt disponible
            </button>
            <p className="mt-2 text-xs text-brand/65">
              Les inscriptions ne sont pas encore ouvertes.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="peach">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-brand">Objectifs pédagogiques</h2>
            <ul className="mt-4 space-y-2 text-sm text-brand/85">
              {formation.goals.map((g) => (
                <li key={g} className="flex gap-2">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-raspberry" />
                  {g}
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-2xl text-brand">Prérequis</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-brand/85">
              {formation.prerequisites.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-brand">Contenu des modules</h2>
            <ol className="mt-4 space-y-2 text-sm text-brand/85">
              {formation.modules.map((m, i) => (
                <li key={m} className="rounded-md border border-border bg-background px-4 py-3">
                  <span className="mr-2 font-semibold text-raspberry">{i + 1}.</span>
                  {m}
                </li>
              ))}
            </ol>
            <h2 className="mt-8 text-2xl text-brand">Matériel nécessaire</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-brand/85">
              {formation.material.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Compléter son apprentissage" title="Ressources complémentaires" />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <li key={item.slug}>
              <Card>
                <Badge tone="neutral">Micro-formation</Badge>
                <h3 className="mt-3 text-xl text-brand">{item.title}</h3>
                <p className="mt-2 text-sm text-brand/80">{item.objective}</p>
                <div className="mt-5">
                  <ButtonLink
                    to="/micro-formations/$slug"
                    params={{ slug: item.slug }}
                    variant="secondary"
                  >
                    Découvrir
                  </ButtonLink>
                </div>
              </Card>
            </li>
          ))}
          {products.slice(0, 2).map((item) => (
            <li key={item.slug}>
              <Card>
                <Badge tone="gold">Template — exemple à remplacer</Badge>
                <h3 className="mt-3 text-xl text-brand">{item.title}</h3>
                <p className="mt-2 text-sm text-brand/80">{item.shortDescription}</p>
                <div className="mt-5">
                  <ButtonLink to="/guides/$slug" params={{ slug: item.slug }} variant="secondary">
                    Découvrir
                  </ButtonLink>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Questions fréquentes" title="Avant de t'inscrire" />
        <div className="mt-8">
          <Faq items={formationFaq} />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to="/contact">Poser une question</ButtonLink>
          <ButtonLink to="/micro-formations" variant="secondary">
            Toutes les micro-formations
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}