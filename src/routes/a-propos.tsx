import { createFileRoute } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink, Card, Section, SectionHeading } from "@/components/Ui";
import { ZigzagDivider } from "@/components/ZigzagDivider";
import { storyBlocks } from "@/data/about";
import { site } from "@/data/site";

const title = "À propos de Grisette Académie — la couture apprise avec méthode";
const description =
  "Découvre l'histoire, la mission et la pédagogie de Grisette Académie : apprendre la couture pas à pas, avec des ressources claires et bienveillantes.";

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
  return (
    <>
      <Section tone="blush">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="À propos"
              title="Grisette Académie, l'apprentissage de la couture rendu accessible"
              intro={site.description}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/cours-presentiel">Découvrir les cours</ButtonLink>
              <ButtonLink to="/blog" variant="secondary">
                Ressources gratuites
              </ButtonLink>
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

      <Section>
        <SectionHeading
          eyebrow="Mon parcours"
          title="Mon histoire"
          intro="Un espace à compléter avec ton propre récit : d'où tu viens, ce que tu couds, ce que tu enseignes."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {storyBlocks.map((block) => (
            <Card key={block.title}>
              <h3 className="text-xl text-brand">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand/80">{block.prompt}</p>
              <ul className="mt-4 space-y-2 text-sm text-brand/70">
                {block.items.map((item) => (
                  <li key={item} className="rounded-md border border-dashed border-raspberry/40 bg-blush/20 px-3 py-2">
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
      </Section>

      <ZigzagDivider />

      <Section tone="blush">
        <SectionHeading eyebrow="Valeurs" title="Ce qui guide chaque contenu" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((value) => (
            <li key={value.title}>
              <Card>
                <h3 className="text-xl text-brand">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand/80">{value.text}</p>
              </Card>
            </li>
          ))}
        </ul>
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
            <ButtonLink to="/micro-formations" variant="secondary">
              Voir les formations courtes
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}