import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import {
  Badge,
  ButtonLink,
  Card,
  EmptyState,
  Faq,
  Section,
  SectionHeading,
} from "@/components/Ui";
import { productCategories, products, shopFaq } from "@/data/products";
import { PinIcon, TagIcon } from "@/components/sewing/SewingIcons";

const title = "Templates et guides couture à télécharger — Grisette Académie";
const description =
  "Des templates et guides couture numériques pour organiser ses projets, préparer ses créations et progresser sereinement en couture.";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/guides" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: GuidesPage,
});

function GuidesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCategory = category === "Toutes" || p.category === category;
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  return (
    <>
      <Section tone="blush" className="!py-8 md:!py-10">
        <SectionHeading
          as="h1"
          eyebrow="Guides"
          title="Templates et guides couture à télécharger"
          intro="Retrouve des ressources numériques conçues spécialment pour t'aider à préparer tes créations et progresser plus sereinement en couture."
        />
        <p className="mt-6 inline-block rounded-md border border-brand/25 bg-background px-4 py-3 text-sm text-brand">
          Ressources <strong>100 % numériques</strong> : aucun envoi postal.
        </p>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <label htmlFor="recherche" className="mb-2 block text-sm font-medium text-brand">
              Rechercher une ressource
            </label>
            <div className="relative">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-raspberry"
              />
              <input
                id="recherche"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Template, checklist, mesures…"
                className="w-full rounded-md border border-input bg-card py-2.5 pl-10 pr-3 text-sm text-brand placeholder:text-brand/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>
          <p className="text-sm text-brand/70">
            {filtered.length} ressource{filtered.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filtrer par catégorie">
          <PinIcon aria-hidden className="mr-1 size-5 -rotate-12 text-raspberry" />
          {["Toutes", ...productCategories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              aria-pressed={category === cat}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                category === cat
                  ? "border-brand bg-brand text-ivory"
                  : "border-border bg-card text-brand hover:bg-mist"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <EmptyState
              title="Aucune ressource ne correspond à ta recherche"
              description="Essaie un autre mot-clé ou sélectionne la catégorie « Toutes »."
            />
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <li key={product.slug}>
                  <Card>
                    <ImagePlaceholder
                      src={product.image}
                      alt={product.imageAlt}
                      hint="Aperçu du template (visuel à remplacer)"
                    />
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <TagIcon aria-hidden className="size-4 shrink-0 text-raspberry" />
                      <Badge tone="neutral">{product.category}</Badge>
                      <span className="inline-flex items-center gap-1">
                        <PinIcon aria-hidden className="size-4 shrink-0 -rotate-12 text-brand" />
                        <Badge tone="gold">Exemple à remplacer</Badge>
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl text-brand">
                      <Link
                        to="/guides/$slug"
                        params={{ slug: product.slug }}
                        className="hover:text-fuchsia-ink"
                      >
                        {product.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-brand/80">
                      {product.shortDescription}
                    </p>
                    <dl className="mt-4 space-y-1 text-sm text-brand/75">
                      <div className="flex gap-2">
                        <dt className="font-medium">Format :</dt>
                        <dd>{product.format}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="font-medium">Niveau :</dt>
                        <dd>{product.level}</dd>
                      </div>
                    </dl>
                    <p className="mt-4 font-display text-lg text-brand">
                      {product.price ?? "Bientôt disponible"}
                    </p>
                    <div className="mt-5 pt-1">
                      <ButtonLink
                        to="/guides/$slug"
                        params={{ slug: product.slug }}
                        variant="secondary"
                      >
                        Découvrir
                      </ButtonLink>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section tone="mist" className="!py-10 md:!py-12">
        <div className="text-center">
          <h2 className="font-display text-2xl text-brand md:text-3xl">Une question ?</h2>
          <div className="rule-thin mx-auto mt-3" />
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand/80">
            Formats, usages et modalités des templates et guides : tout est dans la FAQ.
          </p>
          <div className="mt-5 flex justify-center">
            <ButtonLink to="/faq">Consulter la FAQ</ButtonLink>
          </div>
        </div>
      </Section>

    </>
  );
}