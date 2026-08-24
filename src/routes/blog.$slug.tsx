import { createFileRoute, notFound } from "@tanstack/react-router";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ReadingProgress } from "@/components/ReadingProgress";
import { RelatedSearches } from "@/components/RelatedSearches";
import { Badge, ButtonLink, Section } from "@/components/Ui";
import { ARetenir, AstuceCouture } from "@/components/sewing/Callouts";
import { formatDateFr, getArticle, type Article } from "@/data/articles";

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
          { title: "Article indisponible — Grisette Académie" },
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
            author: { "@type": "Organization", name: "Grisette Académie" },
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
      <ReadingProgress />
      <Breadcrumbs
        items={[
          { label: "Accueil", to: "/" },
          { label: "Ressources gratuites", to: "/blog" },
          { label: article.title },
        ]}
      />

      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="neutral">{article.category}</Badge>
            <time dateTime={article.date} className="text-sm text-brand/65">
              {formatDateFr(article.date)}
            </time>
            <span className="text-sm text-brand/65">· {article.readingTime} de lecture</span>
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

          <ARetenir className="mt-10">
            <ul className="list-disc space-y-2 pl-5">
              {article.keyTakeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </ARetenir>

          <AstuceCouture className="mt-6" icon="needle">
            Garde ton matériel préparé avant de commencer : tissu détendu, épingles à portée de
            main et une chute pour tester ton point. Tu couds plus vite et plus juste.
          </AstuceCouture>

          <div className="mt-10 rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl text-brand">Pour aller plus loin</h2>
            <p className="mt-2 text-sm leading-relaxed text-brand/80">{article.cta.text}</p>
            <div className="mt-4">
              <ButtonLink to={article.cta.to} params={article.cta.params}>
                {article.cta.label}
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10">
            <RelatedSearches slug={article.slug} />
          </div>

        </article>
      </Section>

      <Section tone="blush">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-2xl text-brand">Continuer à apprendre</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/blog" variant="secondary">
              Toutes les ressources
            </ButtonLink>
            <ButtonLink to="/guides">Voir les guides</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}