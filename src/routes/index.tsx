import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, GraduationCap, ScissorsLineDashed, Sparkles } from "lucide-react";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge, ButtonLink, Card, Section, SectionHeading } from "@/components/Ui";
import { articles, formatDateFr } from "@/data/articles";
import { formations } from "@/data/formations";
import { site } from "@/data/site";

const title = "Grisette Académie — apprendre la couture pas à pas";
const description =
  "Grisette Académie : cours de couture en présentiel, templates et guides numériques, micro-formations en ligne et ressources gratuites pour progresser avec méthode.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          description: site.description,
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

const pillarColumns = [
  {
    label: "En théorie",
    items: [
      {
        icon: BookOpen,
        title: "Ressources gratuites",
        text: "Des articles clairs sur le matériel, les tissus, les finitions et les erreurs à éviter.",
        to: "/blog",
        cta: "Lire les ressources",
      },
      {
        icon: ScissorsLineDashed,
        title: "Guides de couture",
        text: "Des fiches, plannings et guides imprimables pour organiser tes projets et gagner en précision.",
        to: "/guides",
        cta: "Voir les guides",
      },
    ],
  },
  {
    label: "En pratique",
    items: [
      {
        icon: Sparkles,
        title: "Micro-formations",
        text: "Des modules courts et ciblés pour débloquer une technique précise, à ton rythme.",
        to: "/micro-formations",
        cta: "Voir les modules",
      },
      {
        icon: GraduationCap,
        title: "Cours en présentiel",
        text: "Un accompagnement direct, en petit groupe ou en individuel, adapté à ton niveau.",
        to: "/cours-presentiel",
        cta: "Découvrir les cours",
      },
    ],
  },
];

function Index() {
  const featuredArticles = articles.slice(0, 3);
  const nextFormations = formations.slice(0, 2);

  return (
    <>
      <section className="bg-blush/40">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <Badge tone="gold">Apprentissage de la couture</Badge>
            <h1 className="mt-5 font-display text-4xl leading-[1.1] text-brand md:text-6xl">
              Apprendre la couture avec méthode, créativité et confiance
            </h1>
            <div className="rule-thin mt-6" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand/85">
              Grisette Académie réunit des cours en présentiel, des templates imprimables, des guides
              pratiques et des micro-formations pour progresser étape par étape — sans se perdre dans
              les tutoriels.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/cours-presentiel">Se former avec moi</ButtonLink>
            </div>
          </div>
          <ImagePlaceholder
            src={null}
            alt="Atelier de couture Grisette Académie"
            hint="Visuel d'accueil : atelier, tissus, machine à coudre (à ajouter)"
            className="aspect-[4/3]"
          />
        </div>
      </section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow="Quatre façons d'apprendre"
          title="Choisis le format qui te correspond"
          intro="Chaque univers suit la même pédagogie : comprendre, pratiquer, ajuster, créer."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 md:divide-x md:divide-border">
          {pillarColumns.map((column) => (
            <div key={column.label} className="md:px-6 md:first:pl-0 md:last:pr-0">
              <h3 className="text-center font-display text-2xl text-brand">{column.label}</h3>
              <div className="rule-thin mx-auto mt-4" />
              <ul className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {column.items.map((pillar) => (
                  <li key={pillar.title}>
                    <Card>
                      <pillar.icon aria-hidden className="size-7 text-raspberry" />
                      <h4 className="mt-4 text-xl text-brand">{pillar.title}</h4>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand/80">
                        {pillar.text}
                      </p>
                      <div className="mt-5">
                        <ButtonLink to={pillar.to} variant="ghost">
                          {pillar.cta}
                        </ButtonLink>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          align="center"
          eyebrow="Les nouveautés"
          title="Les nouveautés"
          intro="Les derniers articles publiés et les prochaines micro-formations, réunis au même endroit."
        />

        <div className="mt-12 flex flex-wrap items-end justify-between gap-4">
          <h3 className="font-display text-2xl text-brand">Derniers articles du blog</h3>
          <ButtonLink to="/blog" variant="secondary">
            Tous les articles
          </ButtonLink>
        </div>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article) => (
            <li key={article.slug}>
              <Card>
                <Badge tone="neutral">{article.category}</Badge>
                <h4 className="mt-3 text-xl text-brand">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: article.slug }}
                    className="hover:text-fuchsia-accent"
                  >
                    {article.title}
                  </Link>
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand/80">
                  {article.excerpt}
                </p>
                <p className="mt-4 text-xs text-brand/65">{formatDateFr(article.date)}</p>
              </Card>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-4">
          <h3 className="font-display text-2xl text-brand">Micro-formations à venir</h3>
          <ButtonLink to="/micro-formations" variant="secondary">
            Tout voir
          </ButtonLink>
        </div>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
              {nextFormations.map((formation) => (
                <li key={formation.slug}>
                  <Card className="p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="gold">Bientôt disponible</Badge>
                      <span className="text-xs text-brand/65">{formation.duration}</span>
                    </div>
                    <h4 className="mt-3 text-lg text-brand">
                      <Link
                        to="/micro-formations/$slug"
                        params={{ slug: formation.slug }}
                        className="hover:text-fuchsia-accent"
                      >
                        {formation.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-brand/80">
                      {formation.objective}
                    </p>
                  </Card>
                </li>
              ))}
        </ul>
      </Section>

      <Section tone="brand">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-3xl text-ivory md:text-4xl">
              Retrouve Grisette Académie sur Pinterest
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/85">
              Épingles de conseils, inspirations de projets et ressources gratuites : Pinterest est
              le meilleur endroit pour suivre les nouveautés.
            </p>
          </div>
          <a
            href={site.pinterestUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center justify-center rounded-md bg-flame px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-fuchsia-accent md:justify-self-end"
          >
            Suivre sur Pinterest
          </a>
        </div>
      </Section>
    </>
  );
}
