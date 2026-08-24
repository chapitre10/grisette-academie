import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink, Faq, Section, SectionHeading } from "@/components/Ui";
import { ZigzagDivider } from "@/components/ZigzagDivider";
import { allFaqItems, faqGroups } from "@/data/faq";

const title = "FAQ couture — templates, guides et cours — Grisette Académie";
const description =
  "Questions fréquentes sur les templates et guides couture à télécharger, les formations courtes en ligne et les cours de couture en présentiel.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section tone="blush" className="!py-6 md:!py-8">
        <SectionHeading
          as="h1"
          eyebrow="Questions fréquentes"
          title="FAQ"
          intro="Les réponses aux questions les plus posées sur les templates et guides, les formations courtes et les cours en présentiel."
          titleClassName="text-2xl leading-tight text-brand md:text-3xl"
        />
      </Section>

      {faqGroups.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          tone={index % 2 === 0 ? "ivory" : "mist"}
          className="!py-6 md:!py-8"
        >
          <SectionHeading
            title={group.title}
            titleClassName="text-xl leading-tight text-brand md:text-2xl"
            {...(group.intro ? { intro: group.intro } : {})}
          />
          <div className="mt-3 grid gap-x-6 gap-y-3 md:grid-cols-2">
            <Faq items={group.items.slice(0, Math.ceil(group.items.length / 2))} />
            {group.items.length > 1 ? (
              <Faq items={group.items.slice(Math.ceil(group.items.length / 2))} />
            ) : null}
          </div>
        </Section>
      ))}

      <ZigzagDivider />

      <Section tone="ivory" className="!py-6 md:!py-8">
        <div className="text-center">
          <h2 className="font-display text-xl text-brand">Une question sans réponse ici ?</h2>
          <p className="mx-auto mt-1.5 max-w-xl text-sm leading-snug text-brand/80">
            Écris-moi via le formulaire de contact en précisant le type de demande : je réponds
            personnellement à chaque message.
          </p>
          <div className="mt-3 flex justify-center">
            <ButtonLink to="/contact">Poser ma question</ButtonLink>
          </div>
        </div>
      </Section>

    </>
  );
}