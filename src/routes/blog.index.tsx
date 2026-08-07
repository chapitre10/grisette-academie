import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge, ButtonLink, Card, EmptyState, Section, SectionHeading } from "@/components/Ui";
import { articleCategories, articles, formatDateFr } from "@/data/articles";

const title = "Ressources gratuites pour apprendre la couture — Grisette Académie";
const description =
  "Conseils, méthodes et fiches pratiques pour mieux préparer ses projets couture et progresser à son rythme.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));

function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");
  const [tag, setTag] = useState<string | null>(null);
  const featured = sorted[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((a) => {
      const matchCategory = category === "Toutes" || a.category === category;
      const matchTag = !tag || a.tags.includes(tag);
      const matchQuery =
        !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q);
      return matchCategory && matchTag && matchQuery;
    });
  }, [query, category, tag]);

  return (
    <>
      <Section tone="mist">
        <SectionHeading
          as="h1"
          eyebrow="Ressources gratuites"
          title="Ressources gratuites pour apprendre la couture"
          intro="Conseils, méthodes et fiches pratiques pour mieux préparer ses projets et progresser en couture."
        />
      </Section>

      {featured ? (
        <Section>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
            Dernier article
          </p>
          <article className="grid gap-8 rounded-lg border border-border bg-card p-6 md:grid-cols-2 md:p-8">
            <ImagePlaceholder
              src={featured.image}
              alt={featured.imageAlt}
              hint="Image principale de l'article (à remplacer)"
              className="aspect-[4/3]"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="neutral">{featured.category}</Badge>
                <span className="text-xs text-brand/65">{formatDateFr(featured.date)}</span>
              </div>
              <h2 className="mt-3 text-2xl text-brand md:text-3xl">
                <Link
                  to="/blog/$slug"
                  params={{ slug: featured.slug }}
                  className="hover:text-fuchsia-accent"
                >
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand/80">{featured.excerpt}</p>
              <div className="mt-6">
                <ButtonLink to="/blog/$slug" params={{ slug: featured.slug }}>
                  Lire l'article
                </ButtonLink>
              </div>
            </div>
          </article>
        </Section>
      ) : null}

      <Section tone="ivory">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <label htmlFor="recherche-article" className="mb-2 block text-sm font-medium text-brand">
              Rechercher un article
            </label>
            <div className="relative">
              <Search
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-raspberry"
              />
              <input
                id="recherche-article"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tissu, mesures, organisation…"
                className="w-full rounded-md border border-input bg-card py-2.5 pl-10 pr-3 text-sm text-brand placeholder:text-brand/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>
          <p className="text-sm text-brand/70">
            {filtered.length} article{filtered.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
          {["Toutes", ...articleCategories].map((cat) => (
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

        <div className="mt-4 flex flex-wrap items-center gap-2" aria-label="Filtrer par tag">
          <span className="text-xs uppercase tracking-widest text-raspberry">Tags</span>
          {allTags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag(tag === t ? null : t)}
              aria-pressed={tag === t}
              className={`rounded-md px-3 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                tag === t ? "bg-fuchsia-accent text-white" : "bg-mist text-brand hover:bg-steel"
              }`}
            >
              #{t}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <EmptyState
              title="Aucun article ne correspond à ta recherche"
              description="Essaie un autre mot-clé, une autre catégorie ou retire le filtre par tag."
            />
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article) => (
                <li key={article.slug}>
                  <Card>
                    <ImagePlaceholder src={article.image} alt={article.imageAlt} />
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <Badge tone="neutral">{article.category}</Badge>
                      <span className="text-xs text-brand/65">{formatDateFr(article.date)}</span>
                    </div>
                    <h2 className="mt-3 text-xl text-brand">
                      <Link
                        to="/blog/$slug"
                        params={{ slug: article.slug }}
                        className="hover:text-fuchsia-accent"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-brand/80">{article.excerpt}</p>
                    <div className="mt-5">
                      <ButtonLink
                        to="/blog/$slug"
                        params={{ slug: article.slug }}
                        variant="secondary"
                      >
                        Lire la ressource
                      </ButtonLink>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section tone="peach">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl text-brand md:text-3xl">Recevoir les prochaines ressources</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand/80">
            Une newsletter est en préparation. Aucun outil d'e-mailing n'est encore connecté : ce
            formulaire est un emplacement prêt à être activé.
          </p>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="newsletter"
              type="email"
              disabled
              placeholder="ton@email.fr"
              className="w-full rounded-md border border-input bg-card px-4 py-2.5 text-sm text-brand placeholder:text-brand/40"
            />
            <button
              type="submit"
              disabled
              className="rounded-md bg-mist px-5 py-2.5 text-sm font-semibold text-brand/70"
            >
              Bientôt disponible
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}