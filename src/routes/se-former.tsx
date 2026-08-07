import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Sparkles } from "lucide-react";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge, ButtonLink, Card, Section, SectionHeading } from "@/components/Ui";
import { ZigzagDivider } from "@/components/ZigzagDivider";
import { courseFormats } from "@/data/cours";
import { formations } from "@/data/formations";
import { method } from "@/data/pedagogie";

const title = "Se former à la couture — Grisette Académie";
const description =
  "Deux façons de se former à la couture avec Grisette Académie : des formations courtes en ligne courtes et ciblées, ou des cours en présentiel accompagnés.";

export const Route = createFileRoute("/se-former")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/se-former" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/se-former" }],
  }),
  component: SeFormerPage,
});

function SeFormerPage() {
  return (
    <>
      <Section tone="blush">
        <SectionHeading
          as="h1"
          eyebrow="Se former"
          title="Se former à la couture avec moi"
          intro="Deux chemins complémentaires : apprendre en ligne à ton rythme avec les formations courtes, ou être accompagnée en direct lors d'un cours en présentiel."
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Pédagogie"
          title="Une méthode en quatre temps"
          intro="La même progression structure les cours en présentiel, les guides et les formations courtes."
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

      <ZigzagDivider />

      <Section tone="ivory" className="!py-8 md:!py-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <Badge tone="gold">En ligne</Badge>
            <h2 className="mt-3 font-display text-2xl text-brand md:text-3xl">Formations courtes</h2>
            <div className="rule-thin mt-3" />
            <p className="mt-3 text-sm leading-relaxed text-brand/85 md:text-base">
              Des modules courts et ciblés pour débloquer une technique précise : droit-fil, prise de
              mesures, choix du tissu, préparation, finitions. On avance à son rythme, sans y passer
              des heures.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-brand/80">
              {formations.slice(0, 3).map((formation) => (
                <li key={formation.slug} className="flex gap-2">
                  <Sparkles aria-hidden className="mt-0.5 size-4 shrink-0 text-raspberry" />
                  <span>{formation.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <ButtonLink to="/micro-formations">Voir les formations courtes</ButtonLink>
            </div>
          </div>
          <ImagePlaceholder
            src={null}
            alt="Formations courtes couture en ligne"
            hint="Visuel formations courtes (à ajouter)"
            className="aspect-[16/9] lg:aspect-[3/2]"
          />
        </div>
      </Section>

      <Section tone="ivory" className="!pt-0 !pb-8 md:!pb-10">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <ImagePlaceholder
            src={null}
            alt="Cours de couture en présentiel"
            hint="Visuel cours en présentiel (à ajouter)"
            className="aspect-[16/9] lg:order-last lg:aspect-[3/2]"
          />
          <div>
            <Badge tone="neutral">En présentiel</Badge>
            <h2 className="mt-3 font-display text-2xl text-brand md:text-3xl">
              Cours en présentiel
            </h2>
            <div className="rule-thin mt-3" />
            <p className="mt-3 text-sm leading-relaxed text-brand/85 md:text-base">
              Un accompagnement direct, en petit groupe ou en individuel : on corrige les gestes sur
              le moment, on adapte le rythme à ton niveau et on repart avec un projet abouti.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-brand/80">
              {courseFormats.slice(0, 3).map((format) => (
                <li key={format.title} className="flex gap-2">
                  <GraduationCap aria-hidden className="mt-0.5 size-4 shrink-0 text-raspberry" />
                  <span>{format.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <ButtonLink to="/cours-presentiel">Découvrir les cours</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="peach" className="bg-peach/40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-brand md:text-4xl">
            Tu hésites entre les deux ?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand/85">
            Dis-moi où tu en es dans ton apprentissage : je t'orienterai vers le format le plus
            adapté.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink to="/contact" variant="flame">
              Me poser une question
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
