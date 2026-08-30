import { createFileRoute, notFound } from "@tanstack/react-router";

import { ArticleGuideDownloadBanner } from "@/components/ArticleGuideDownloadBanner";
import { Breadcrumbs } from "@/components/Breadcrumbs";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ReadingProgress } from "@/components/ReadingProgress";
import { RelatedSearches } from "@/components/RelatedSearches";
import { Badge, ButtonLink, Section } from "@/components/Ui";
import { ARetenir } from "@/components/sewing/Callouts";
import { formatDateFr, getArticle, type Article } from "@/data/articles";
import { getGuideForArticle } from "@/data/guides";


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

      <Section className="!py-10 md:!py-14">
        <article className="mx-auto max-w-3xl">
          <header>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-paper-border pb-2">
              <Badge tone="neutral">{article.category}</Badge>
              <span className="text-sm text-brand/65">·</span>
              <time dateTime={article.date} className="text-sm text-brand/65">
                {formatDateFr(article.date)}
              </time>
              <span className="text-sm text-brand/65">· {article.readingTime} de lecture</span>
            </div>

            <h1 className="mt-4 font-display text-2xl leading-[1.1] text-brand italic md:text-4xl">
              {article.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-brand/85">{article.intro}</p>
          </header>

          <div className="mt-6">
            <ImagePlaceholder
              src={article.image}
              alt={article.imageAlt}
              hint="Image principale de l'article (à remplacer)"
              className="aspect-[21/9]"
            />
          </div>

          <div className="mt-8 space-y-6">
            {article.blocks.map((block) => (
              <section key={block.heading ?? block.paragraphs[0]}>
                {block.heading ? (
                  <h2 className="text-xl text-brand">{block.heading}</h2>
                ) : null}
                <div className="mt-2 space-y-3">
                  {block.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-brand/85">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <ARetenir className="mt-8 !p-5">
            <ul className="list-disc space-y-1.5 pl-5">
              {article.keyTakeaways.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </ARetenir>

          <ArticleGuideDownloadBanner
            guide={getGuideForArticle(article.slug)}
            articleTitle={article.title}
            className="mt-8"
          />

          <div className="relative mt-8 rotate-[-1deg] rounded-[0.9rem] border border-paper-border bg-card p-5 shadow-[0_10px_24px_-16px_rgba(93,57,67,0.55)] md:rotate-[-1deg]">
            {/* effet scotch inspiré des cartes À propos */}
            <span
              aria-hidden
              className="absolute -top-2 left-6 h-4 w-14 -rotate-3 rounded-[2px] bg-fuchsia-accent/40 opacity-70"
            />
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div>
                <h2 className="font-hand text-2xl text-brand md:text-3xl">Pour aller plus loin</h2>
                <p className="mt-1.5 text-base leading-relaxed text-brand/85">{article.cta.text}</p>
              </div>
              <div className="md:shrink-0">
                <ButtonLink to={article.cta.to} params={article.cta.params}>
                  {article.cta.label}
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <RelatedSearches slug={article.slug} />
          </div>

        </article>
      </Section>

      <Section tone="blush" className="!py-10 md:!py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-xl text-brand">Continuer à apprendre</p>
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