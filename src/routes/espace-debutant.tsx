import { createFileRoute, Link } from "@tanstack/react-router";
import { NotebookPen, Scissors, Sparkles } from "lucide-react";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge, ButtonLink, Card, Section, SectionHeading, buttonStyles } from "@/components/Ui";
import { articles, formatDateFr } from "@/data/articles";
import {
  articlesDebutant,
  basesCouture,
  cartesDepart,
  parcours,
  pourAllerPlusLoin,
  type LienInterne,
} from "@/data/espaceDebutant";
import { PinIcon, SpoolIcon, ThreadIcon } from "@/components/sewing/SewingIcons";

const title = "Espace débutant couture | Grisette Académie";
const description =
  "Découvre les bases de la couture, le matériel essentiel, les premiers gestes et les ressources gratuites pour débuter sereinement avec Grisette Académie.";

export const Route = createFileRoute("/espace-debutant")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/espace-debutant" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "pinterest:description",
        content:
          "Débuter la couture sereinement : matériel essentiel, premiers gestes, bases à connaître et ressources gratuites — Grisette Académie.",
      },
    ],
    links: [{ rel: "canonical", href: "/espace-debutant" }],
  }),
  component: EspaceDebutantPage,
});

const icons = {
  scissors: Scissors,
  sparkles: Sparkles,
  notebook: NotebookPen,
};

/** Rend un lien interne (ou un état « bientôt disponible »). */
function RessourceLink({
  link,
  label,
  variant = "secondary",
}: {
  link: LienInterne | null;
  label: string;
  variant?: "primary" | "secondary";
}) {
  if (!link) {
    return (
      <span className="inline-flex items-center rounded-md bg-mist px-4 py-2 text-sm font-semibold text-brand/70">
        Bientôt disponible
      </span>
    );
  }
  return (
    <ButtonLink to={link.to} params={link.params} variant={variant}>
      {label}
    </ButtonLink>
  );
}

const featured = articlesDebutant
  .map((slug) => articles.find((a) => a.slug === slug))
  .filter((a): a is (typeof articles)[number] => Boolean(a));

function EspaceDebutantPage() {
  return (
    <>
      <Section tone="ivory" className="!py-8 md:!py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              as="h1"
              title="Ton espace pour débuter la couture"
              intro="Tu ne sais pas par où commencer ? Retrouve ici les ressources essentielles pour apprendre les bases, t'organiser et avancer pas à pas dans tes premiers projets couture."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#les-bases" className={buttonStyles.primary}>
                Commencer par les bases
              </a>
              <ButtonLink to="/blog" variant="flame">
                Découvrir les ressources gratuites
              </ButtonLink>
            </div>
          </div>
          <ImagePlaceholder
            alt="Matériel de couture, carnet de projet, tissus et machine à coudre préparés pour un premier projet"
            hint="Illustration ou photo à remplacer : matériel de couture, carnet, tissus, machine à coudre, premier projet"
            className="aspect-[4/3]"
          />
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          title="Commence par ici"
          intro="Si tu débutes, tu n'as pas besoin de tout apprendre en même temps. Commence par les bases, découvre le matériel essentiel et avance étape par étape."
        />
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {cartesDepart.map((carte) => {
            const Icon = icons[carte.icon];
            return (
              <li key={carte.title}>
                <Card>
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-blush/60">
                    <Icon aria-hidden className="size-5 text-brand" />
                  </span>
                  <h3 className="mt-4 text-xl text-brand">{carte.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand/80">
                    {carte.description}
                  </p>
                  <div className="mt-5">
                    <RessourceLink link={carte.link} label={carte.cta} />
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </Section>


      <Section tone="ivory" id="les-bases">
        <SectionHeading
          title="Les bases à connaître"
          intro="Dix repères pour comprendre ce que tu fais, dans l'ordre qui te convient. Certains contenus arrivent bientôt."
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {basesCouture.map((base) => (
            <li key={base.title}>
              <Card className="!p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="gold">{base.level}</Badge>
                  {base.link ? null : <Badge tone="neutral">Bientôt disponible</Badge>}
                </div>
                <h3 className="mt-3 text-lg text-brand">{base.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand/80">
                  {base.description}
                </p>
                <div className="mt-4">
                  <RessourceLink link={base.link} label={base.linkLabel} />
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <SectionHeading
          title="Des ressources gratuites pour t'aider"
          intro="Des articles à lire librement, choisis pour les premiers pas en couture."
        />
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((article) => (
            <li key={article.slug}>
              <Card>
                <ImagePlaceholder src={article.image} alt={article.imageAlt} />
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge tone="neutral">{article.category}</Badge>
                  <span className="text-xs text-brand/65">{formatDateFr(article.date)}</span>
                </div>
                <h3 className="mt-3 text-xl text-brand">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: article.slug }}
                    className="hover:text-fuchsia-ink"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand/80">
                  {article.excerpt}
                </p>
                <div className="mt-5">
                  <ButtonLink to="/blog/$slug" params={{ slug: article.slug }} variant="secondary">
                    Lire l'article
                  </ButtonLink>
                </div>
              </Card>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink to="/blog" variant="ghost">
            Voir toutes les ressources gratuites
          </ButtonLink>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading
          title="Un parcours simple pour commencer"
          intro="Rien d'obligatoire ici : c'est un chemin possible, à suivre à ton rythme."
        />
        {/* Ligne de progression décorative inspirée d'un fil de couture */}
        <div aria-hidden className="mt-8 flex items-center gap-2">
          <SpoolIcon className="size-5 shrink-0 text-gold" />
          <ThreadIcon className="h-2 flex-1 text-fuchsia-accent/45" />
          <PinIcon className="size-4 shrink-0 -rotate-12 text-raspberry" />
        </div>
        <ol className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {parcours.map((etape, index) => (
            <li key={etape.step}>
              <Card className="!p-5">
                <span className="flex items-center gap-2">
                  {index % 2 === 0 ? (
                    <SpoolIcon aria-hidden className="size-5 shrink-0 text-gold" />
                  ) : (
                    <PinIcon aria-hidden className="size-5 shrink-0 -rotate-12 text-raspberry" />
                  )}
                  <span className="font-display text-2xl text-fuchsia-ink">{etape.step}</span>
                </span>
                <h3 className="mt-2 text-lg text-brand">{etape.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand/80">{etape.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="mist">
        <SectionHeading
          title="Pour aller plus loin"
          intro="Des supports et des formats d'accompagnement, avec leur niveau et leur statut."
        />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pourAllerPlusLoin.map((item) => (
            <li key={item.title}>
              <Card className="!p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone="gold">{item.level}</Badge>
                  <Badge tone="neutral">
                    {item.statut === "bientot" ? "Bientôt disponible" : "Disponible"}
                  </Badge>
                </div>
                <h3 className="mt-3 text-lg text-brand">{item.title}</h3>
                <dl className="mt-2 flex-1 space-y-1 text-sm text-raspberry">
                  <div className="flex gap-2">
                    <dt className="font-medium">Format :</dt>
                    <dd>{item.format}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium">Prix :</dt>
                    <dd>{item.price ?? "à venir"}</dd>
                  </div>
                </dl>
                <div className="mt-4">
                  <RessourceLink link={item.link} label={item.linkLabel} />
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="peach" className="!py-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl text-brand md:text-3xl">
            Tu ne sais toujours pas par où commencer ?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-brand/85">
            Écris à Grisette Académie et explique-moi ce que tu aimerais apprendre. Je pourrai
            t'orienter vers la ressource la plus adaptée.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink to="/contact">Me contacter</ButtonLink>
            <ButtonLink to="/blog" variant="secondary">
              Voir les ressources gratuites
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
