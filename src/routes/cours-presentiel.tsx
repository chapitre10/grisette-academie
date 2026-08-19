import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import {
  Badge,
  ButtonLink,
  Card,
  EmptyState,
  Faq,
  InfoRow,
  Section,
  SectionHeading,
} from "@/components/Ui";
import {
  courseFormats,
  coursesFaq,
  visibleStudentProjects,
  visibleTestimonials,
} from "@/data/cours";
import { infoOrPending } from "@/data/site";
import { SafetyPinIcon, SpoolIcon } from "@/components/sewing/SewingIcons";

/*
 * NOTE INTERNE (non affichée sur le site) :
 * Ajouter uniquement des recommandations et photos réelles après vérification
 * et obtention de l'autorisation de publication.
 */

const title = "Cours de couture en présentiel — Grisette Académie";
const description =
  "Cours de couture en présentiel : accompagnement personnalisé, cours individuels, petits groupes et suivi de projet pour progresser à son rythme.";

export const Route = createFileRoute("/cours-presentiel")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cours-presentiel" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cours-presentiel" }],
  }),
  component: CoursPage,
});

const pedagogy = [
  {
    title: "Comprendre avant d'exécuter",
    text: "Chaque geste est expliqué pour que tu puisses le reproduire seule, chez toi, sur d'autres projets.",
  },
  {
    title: "Avancer à son rythme",
    text: "La progression s'adapte à ton niveau, à ton temps disponible et à tes envies de création.",
  },
  {
    title: "Apprendre par le projet",
    text: "On travaille sur une réalisation concrète : la technique s'ancre par la pratique.",
  },
  {
    title: "Un cadre bienveillant",
    text: "Poser des questions, se tromper et recommencer font partie de l'apprentissage.",
  },
];

function CoursPage() {
  const testimonials = visibleTestimonials();
  const projects = visibleStudentProjects();
  const contactSearch = { sujet: "Demande concernant un cours de couture en présentiel" };

  return (
    <>
      <Section tone="blush" className="!py-8 md:!py-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              as="h1"
              eyebrow="Atelier"
              title="Cours de couture en présentiel"
              intro="Apprendre, pratiquer et progresser avec un accompagnement personnalisé."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/contact" search={contactSearch}>
                Demander des informations
              </ButtonLink>
              <ButtonLink to="/micro-formations" variant="secondary">
                Voir les formations courtes
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-brand/20 bg-background p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
              Informations pratiques
            </p>
            <dl className="mt-4">
              <InfoRow label="Ville" value={infoOrPending(null)} />
              <InfoRow label="Zone / adresse" value={infoOrPending(null)} />
              <InfoRow label="Durée d'une séance" value="Entre 2h et 4h" />
              <InfoRow label="Tarif" value="25€/h (voir section Tarifs)" />
              <InfoRow label="Disponibilités" value="Du Lundi au Dimanche" />
              <InfoRow label="Matériel fourni" value={infoOrPending(null)} />
              <InfoRow label="Niveau requis" value="Tout niveau" />
            </dl>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Ma pédagogie"
          title="Une démarche pensée pour rendre autonome"
          intro="L'objectif n'est pas seulement de terminer un vêtement, mais de comprendre comment il se construit."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {pedagogy.map((item) => (
            <li key={item.title}>
              <Card className="bg-peach/40">
                <h3 className="text-xl text-brand">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand/85">{item.text}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Formats" title="Trois façons d'être accompagnée" />
        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {courseFormats.map((format, index) => (
            <li key={format.slug}>
              <Card>
                <div className="flex items-center gap-2">
                  {index === 1 ? (
                    <SafetyPinIcon aria-hidden className="size-5 shrink-0 text-raspberry" />
                  ) : (
                    <SpoolIcon aria-hidden className="size-5 shrink-0 text-gold" />
                  )}
                  <h3 className="text-xl text-brand">{format.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brand/85">{format.description}</p>
                <dl className="mt-5">
                  <InfoRow label="Ville" value={infoOrPending(format.city)} />
                  <InfoRow label="Durée" value={infoOrPending(format.duration)} />
                  <InfoRow label="Tarif" value={infoOrPending(format.price)} />
                  <InfoRow label="Disponibilités" value={infoOrPending(format.availability)} />
                  <InfoRow label="Matériel fourni" value={infoOrPending(format.providedMaterial)} />
                  <InfoRow label="Niveau requis" value={infoOrPending(format.requiredLevel)} />
                </dl>
                <div className="mt-5">
                  <ButtonLink to="/contact" search={contactSearch} variant="secondary">
                    Demander des informations
                  </ButtonLink>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-brand">Pour qui et à quel niveau ?</h2>
            <ul className="mt-4 space-y-2 text-sm text-brand/85">
              {[
                "Débutantes complètes qui souhaitent acquérir de bonnes bases",
                "Couturières intermédiaires souhaitant se perfectionner",
                "Personnes reprenant la couture après une longue pause",
                "Couturières souhaitant mieux organiser leurs projets",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-raspberry" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-brand">Déroulement et projets abordés</h2>
            <ul className="mt-4 space-y-2 text-sm text-brand/85">
              {[
                "Point de départ : ton niveau, ton projet et tes objectifs",
                "Préparation : mesures, patron, tissu et plan de coupe",
                "Pratique guidée : coupe, assemblage, essayage",
                "Finitions et bilan de progression",
                "Projets possibles : accessoires, jupes, hauts, robes, retouches",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-raspberry" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-brand/70">
              Matériel : {infoOrPending(null)}
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ivory">
        <SectionHeading eyebrow="Retours d'expérience" title="Elles parlent de leur expérience" />
        <div className="mt-8">
          {testimonials.length === 0 ? (
            <EmptyState title="Les recommandations de nos élèves seront bientôt disponibles." />
          ) : (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <li key={t.displayName + (t.date ?? "")}>
                  <Card>
                    <p className="text-sm leading-relaxed text-brand/85">{t.text}</p>
                    <p className="mt-4 text-sm font-semibold text-brand">{t.displayName}</p>
                    <p className="text-xs text-brand/65">{t.courseType}</p>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Galerie" title="Les projets de nos élèves" />
        <div className="mt-8">
          {projects.length === 0 ? (
            <EmptyState title="Les réalisations de nos élèves seront bientôt présentées ici." />
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <li key={project.imageAlt}>
                  <Card>
                    <img
                      src={project.image ?? ""}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="aspect-[4/5] w-full rounded-md border border-border object-cover"
                    />
                    {project.description ? (
                      <p className="mt-3 text-sm text-brand/85">{project.description}</p>
                    ) : null}
                    <p className="mt-2 text-xs text-brand/65">{project.courseType}</p>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section tone="mist" className="!py-10 md:!py-12">
        <SectionHeading title="Questions fréquentes" />
        <div className="mt-4 max-w-4xl">
          <Faq items={coursesFaq} columns={2} />
        </div>
      </Section>

      <Section tone="brand">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div>
            <Badge tone="gold">Prise de contact</Badge>
            <h2 className="mt-4 font-display text-3xl text-ivory">
              Envie de coudre accompagnée ?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ivory/85">
              Écris-moi pour connaître les disponibilités, les tarifs et le format le plus adapté à
              ton projet.
            </p>
          </div>
          <ButtonLink to="/contact" search={contactSearch}>
            Demander des informations
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}