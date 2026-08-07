import { createFileRoute } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ButtonLink, Card, Section, SectionHeading } from "@/components/Ui";
import { site } from "@/data/site";

const title = "À propos de Grisette Academy — la couture apprise avec méthode";
const description =
  "Découvre l'histoire, la mission et la pédagogie de Grisette Academy : apprendre la couture pas à pas, avec des ressources claires et bienveillantes.";

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

const method = [
  {
    step: "01",
    title: "Comprendre avant de coudre",
    text: "On commence par le tissu, le matériel et le vocabulaire, pour que chaque geste ait un sens.",
  },
  {
    step: "02",
    title: "Pratiquer par petits projets",
    text: "Des exercices courts et concrets pour ancrer les gestes essentiels sans se décourager.",
  },
  {
    step: "03",
    title: "Adapter à sa morphologie",
    text: "Ajustements, mesures et modifications de patron : coudre pour soi, pas pour une taille standard.",
  },
  {
    step: "04",
    title: "Créer en confiance",
    text: "Le passage aux projets personnels, avec les repères nécessaires pour choisir et progresser seule.",
  },
];

function AboutPage() {
  return (
    <>
      <Section tone="mist">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="À propos"
              title="Grisette Academy, l'apprentissage de la couture rendu accessible"
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
            alt="Portrait de la fondatrice de Grisette Academy"
            hint="Portrait / photo d'atelier (à ajouter)"
            className="aspect-[4/5]"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-brand">L'histoire</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-brand/85">
              <p>
                Grisette Academy est née d'un constat simple : beaucoup de personnes achètent une
                machine à coudre, puis la laissent dormir dans un placard. Non par manque d'envie,
                mais par manque de repères clairs pour démarrer.
              </p>
              <p>
                L'activité s'est construite autour de l'idée qu'un apprentissage bien structuré vaut
                mieux qu'une accumulation de tutoriels. D'abord des cours en présentiel, puis des
                ressources écrites, des templates et des micro-formations pour prolonger
                l'accompagnement au-delà de l'atelier.
              </p>
              <p className="text-sm italic text-brand/70">
                Cette section est un contenu de départ : elle pourra être remplacée par ton texte
                définitif.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-brand">La mission</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-brand/85">
              <p>
                Transmettre une couture comprise, pas seulement reproduite. Chaque ressource vise à
                rendre autonome : savoir choisir un tissu, lire un patron, ajuster un vêtement et
                finir proprement une pièce.
              </p>
              <p>
                Grisette Academy s'adresse aux débutantes complètes comme aux couturières
                intermédiaires qui souhaitent combler des lacunes techniques précises.
              </p>
            </div>
          </div>
        </div>
      </Section>

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

      <Section>
        <SectionHeading
          eyebrow="Pédagogie"
          title="Une méthode en quatre temps"
          intro="La même progression structure les cours en présentiel, les templates et les micro-formations."
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {method.map((item) => (
            <li key={item.step}>
              <Card>
                <span className="font-display text-3xl text-raspberry">{item.step}</span>
                <h3 className="mt-3 text-lg text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand/80">{item.text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="brand">
        <div className="max-w-2xl">
          <h2 className="text-3xl text-ivory md:text-4xl">Envie d'échanger ?</h2>
          <p className="mt-4 text-base leading-relaxed text-ivory/85">
            Une question sur les cours, une envie de collaboration ou simplement besoin d'un conseil
            pour choisir ta prochaine étape : écris-moi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/contact">Me contacter</ButtonLink>
            <ButtonLink to="/micro-formations" variant="soft">
              Voir les micro-formations
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}