import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Sparkles } from "lucide-react";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge, ButtonLink, Card, Section, SectionHeading } from "@/components/Ui";
import { courseFormats } from "@/data/cours";
import { formations } from "@/data/formations";

const title = "Se former à la couture — Grisette Académie";
const description =
  "Deux façons de se former à la couture avec Grisette Académie : des micro-formations en ligne courtes et ciblées, ou des cours en présentiel accompagnés.";

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
          intro="Deux chemins complémentaires : apprendre en ligne à ton rythme avec les micro-formations, ou être accompagnée en direct lors d'un cours en présentiel."
        />
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge tone="gold">En ligne</Badge>
            <h2 className="mt-4 font-display text-3xl text-brand md:text-4xl">Micro-formations</h2>
            <div className="rule-thin mt-5" />
            <p className="mt-5 text-base leading-relaxed text-brand/85">
              Des modules courts et ciblés pour débloquer une technique précise : droit-fil, prise de
              mesures, choix du tissu, préparation, finitions. On avance à son rythme, sans y passer
              des heures.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-brand/80">
              {formations.slice(0, 3).map((formation) => (
                <li key={formation.slug} className="flex gap-2">
                  <Sparkles aria-hidden className="mt-0.5 size-4 shrink-0 text-raspberry" />
                  <span>{formation.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink to="/micro-formations">Voir les micro-formations</ButtonLink>
            </div>
          </div>
          <ImagePlaceholder
            src={null}
            alt="Micro-formations couture en ligne"
            hint="Visuel micro-formations (à ajouter)"
            className="aspect-[4/3]"
          />
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ImagePlaceholder
            src={null}
            alt="Cours de couture en présentiel"
            hint="Visuel cours en présentiel (à ajouter)"
            className="aspect-[4/3] lg:order-last"
          />
          <div>
            <Badge tone="neutral">En présentiel</Badge>
            <h2 className="mt-4 font-display text-3xl text-brand md:text-4xl">
              Cours en présentiel
            </h2>
            <div className="rule-thin mt-5" />
            <p className="mt-5 text-base leading-relaxed text-brand/85">
              Un accompagnement direct, en petit groupe ou en individuel : on corrige les gestes sur
              le moment, on adapte le rythme à ton niveau et on repart avec un projet abouti.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-brand/80">
              {courseFormats.slice(0, 3).map((format) => (
                <li key={format.title} className="flex gap-2">
                  <GraduationCap aria-hidden className="mt-0.5 size-4 shrink-0 text-raspberry" />
                  <span>{format.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink to="/cours-presentiel">Découvrir les cours</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-ivory md:text-4xl">
            Tu hésites entre les deux ?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ivory/85">
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
