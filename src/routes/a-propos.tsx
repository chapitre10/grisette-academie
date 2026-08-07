import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { CoulissesGallery } from "@/components/CoulissesGallery";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink, Card, Section, SectionHeading } from "@/components/Ui";
import { storyBlocks } from "@/data/about";
import { aProposFaqItems } from "@/data/aProposFaq";
import { site } from "@/data/site";

const title = "À propos — professeure de couture | Grisette Académie";
const description =
  "Parcours, diplômes et valeurs derrière Grisette Académie : une professeure de couture qui enseigne les bases pas à pas, en cours et en formations courtes.";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/a-propos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          description: site.description,
          url: "/a-propos",
          sameAs: [site.pinterestUrl],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Clarté",
    text: "Chaque explication va droit au but : des étapes numérotées, un vocabulaire expliqué et aucune zone d'ombre.",
  },
  {
    title: "Bienveillance",
    text: "Apprendre la couture demande du temps. Les erreurs font partie du chemin et sont toujours accompagnées.",
  },
  {
    title: "Autonomie",
    text: "L'objectif final n'est pas de suivre un patron, mais de comprendre pourquoi une couture tient et comment l'adapter.",
  },
  {
    title: "Créativité",
    text: "La technique libère l'imagination : une fois les bases posées, chaque projet devient un terrain d'expression.",
  },
];

function AboutPage() {
  const [openTab, setOpenTab] = useState<"parcours" | "valeurs" | null>(null);
  const [renderedTab, setRenderedTab] = useState<"parcours" | "valeurs" | null>(null);

  useEffect(() => {
    if (openTab) setRenderedTab(openTab);
  }, [openTab]);

  const tabs = [
    { id: "parcours" as const, label: "Mon parcours" },
    { id: "valeurs" as const, label: "Mes valeurs" },
  ];

  return (
    <>
      <Section tone="blush" className="!py-0">
        <div className="grid items-center gap-10 py-12 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              title="Grisette Académie, l'apprentissage de la couture rendu accessible"
              intro={site.description}
            />
          <div role="tablist" aria-label="En savoir plus" className="mt-8 flex flex-wrap gap-3">
            {tabs.map((tab) => {
              const active = openTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={active}
                  aria-expanded={active}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setOpenTab(active ? null : tab.id)}
                  className={`min-h-11 rounded-md border px-5 py-2.5 font-display text-lg transition-colors ${
                    active
                      ? "border-brand bg-brand text-background"
                      : "border-border bg-card text-brand hover:bg-blush/40"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          </div>
          <ImagePlaceholder
            src={null}
            alt="Portrait de la fondatrice de Grisette Académie"
            hint="Portrait / photo d'atelier (à ajouter)"
            className="aspect-[4/5]"
          />
        </div>
      </Section>

      <div
        aria-hidden={!openTab}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out motion-reduce:transition-none ${
          openTab ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
      <Section className={openTab ? "" : "!py-0"}>
        {renderedTab === "parcours" ? (
          <div
            role="tabpanel"
            id="panel-parcours"
            aria-labelledby="tab-parcours"
            className="transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: openTab ? "translateY(0)" : "translateY(-0.5rem)" }}
          >
            <SectionHeading
              eyebrow="Mon parcours"
              title="Mon histoire"
              intro="Un espace à compléter avec ton propre récit : d'où tu viens, ce que tu couds, ce que tu enseignes."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {storyBlocks.map((block) => (
                <Card key={block.title}>
                  <h3 className="text-xl text-brand">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand/80">{block.prompt}</p>
                  <ul className="mt-4 space-y-2 text-sm text-brand/70">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-dashed border-raspberry/40 bg-blush/20 px-3 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
            <p className="mt-6 max-w-3xl text-sm italic text-brand/70">
              Contenu de départ : remplace chaque ligne par tes informations réelles (dates, lieux,
              intitulés exacts des diplômes).
            </p>
          </div>
        ) : null}

        {renderedTab === "valeurs" ? (
          <div
            role="tabpanel"
            id="panel-valeurs"
            aria-labelledby="tab-valeurs"
            className="transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: openTab ? "translateY(0)" : "translateY(-0.5rem)" }}
          >
            <SectionHeading eyebrow="Valeurs" title="Ce qui guide chaque contenu" />
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <li key={value.title}>
                  <Card>
                    <h3 className="text-xl text-brand">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand/80">{value.text}</p>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>
        </div>
      </div>

      <Section tone="mist">
        <SectionHeading
          title="Les coulisses"
          intro="Un aperçu de l'atelier, des matières et des projets en cours. Les emplacements ci-dessous attendent tes vraies photos."
        />
        <CoulissesGallery />
      </Section>

      <Section>
        <SectionHeading title="Qui se cache vraiment derrière Grisette Académie ?" />
        <div className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
          {[aProposFaqItems.slice(0, 3), aProposFaqItems.slice(3, 6)].map((column, index) => (
            <div key={index} className="space-y-3">
              {column.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-lg border border-raspberry/30 bg-ivory/60 px-4 py-3"
                >
                  <summary className="cursor-pointer list-none text-base font-medium text-brand marker:hidden">
                    <span className="flex items-start justify-between gap-3">
                      {item.question}
                      <span aria-hidden className="mt-0.5 text-raspberry transition-transform group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-brand/80">{item.answer}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="peach" className="bg-peach/40 !py-8 md:!py-10">
        <div className="max-w-2xl">
          <h2 className="text-2xl text-brand md:text-3xl">Envie d'échanger ?</h2>
          <p className="mt-2 text-sm leading-relaxed text-brand/85">
            Une question sur les cours, une envie de collaboration ou simplement besoin d'un conseil
            pour choisir ta prochaine étape : écris-moi.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <ButtonLink to="/contact">Me contacter</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}