import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge, ButtonLink, Section } from "@/components/Ui";
import { formatDateFr, getArticle, type Article } from "@/data/articles";
import { site } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article indisponible — Grisette Academy" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: article.seo.title },
        { name: "description", content: article.seo.description },
        { property: "og:title", content: article.seo.title },
        { property: "og:description", content: article.seo.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.seo.description,
            datePublished: article.date,
            articleSection: article.category,
            author: { "@type": "Organization", name: "Grisette Academy" },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Article };

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
              <Link to="/blog" className="hover:text-fuchsia-accent">
                Ressources gratuites
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="font-medium text-brand">
              {article.title}
            </li>
          </ol>
        </nav>
      </div>

      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="neutral">{article.category}</Badge>
            <time dateTime={article.date} className="text-xs text-brand/65">
              {formatDateFr(article.date)}
            </time>
            <span className="text-xs text-brand/65">· {article.readingTime} de lecture</span>
          </div>

          <h1 className="mt-4 text-3xl leading-tight text-brand md:text-4xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-brand/85">{article.intro}</p>

          <div className="mt-8">
            <ImagePlaceholder
              src={article.image}
              alt={article.imageAlt}
              hint="Image principale de l'article (à remplacer)"
              className="aspect-[16/9]"
            />
          </div>

          <div className="mt-10 space-y-8">
            {article.blocks.map((block) => (
              <section key={block.heading ?? block.paragraphs[0]}>
                {block.heading ? (
                  <h2 className="text-2xl text-brand">{block.heading}</h2>
                ) : null}
                <div className="mt-3 space-y-4">
                  {block.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-brand/85">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="mt-10 rounded-lg border border-raspberry/35 bg-peach/45 p-6">
            <h2 className="text-xl text-brand">À retenir</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand/85">
              {article.keyTakeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </aside>

          <div className="mt-10 rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl text-brand">Pour aller plus loin</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand/80">{article.cta.text}</p>
            <div className="mt-4">
              <ButtonLink to={article.cta.to} params={article.cta.params}>
                {article.cta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10 grid gap-6 rounded-lg border border-border bg-mist p-6 md:grid-cols-[minmax(0,1fr)_14rem]">
            <div>
              <h2 className="text-xl text-brand">Épingler cet article</h2>
              <p className="mt-2 text-sm text-brand/80">
                Titre Pinterest : <strong>{article.seo.pinterestTitle}</strong>
              </p>
              <p className="mt-1 text-sm text-brand/80">{article.seo.pinterestDescription}</p>
              <a
                href={site.pinterestUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center justify-center rounded-md bg-flame px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Partager sur Pinterest
              </a>
            </div>
            <ImagePlaceholder
              src={article.seo.pinterestImage}
              alt={`Épingle Pinterest verticale — ${article.title}`}
              hint="Image verticale Pinterest 1000 × 1500 px"
              className="aspect-[2/3]"
            />
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <li key={t} className="rounded-md bg-mist px-3 py-1 text-xs text-brand">
                #{t}
              </li>
            ))}
          </ul>
        </article>
      </Section>

      <Section tone="blush">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-2xl text-brand">Continuer à apprendre</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/blog" variant="secondary">
              Toutes les ressources
            </ButtonLink>
            <ButtonLink to="/boutique">Voir la boutique</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}