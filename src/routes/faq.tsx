import { createFileRoute } from "@tanstack/react-router";

import { ButtonLink, Faq, Section, SectionHeading } from "@/components/Ui";
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

      <Section tone="blush">
        <SectionHeading
          as="h1"
          eyebrow="Questions fréquentes"
          title="FAQ"
          intro="Les réponses aux questions les plus posées sur les templates et guides, les formations courtes et les cours en présentiel."
        />
        <nav aria-label="Sommaire de la FAQ" className="mt-8">
          <ul className="flex flex-wrap gap-3">
            {faqGroups.map((group) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  className="inline-block rounded-md border border-brand/25 bg-background px-4 py-2 text-sm text-brand transition hover:text-fuchsia-accent"
                >
                  {group.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Section>

      {faqGroups.map((group, index) => (
        <Section key={group.id} id={group.id} tone={index % 2 === 0 ? "default" : "mist"}>
          <SectionHeading title={group.title} intro={group.intro} />
          <div className="mt-8">
            <Faq items={group.items} />
          </div>
        </Section>
      ))}

      <Section tone="ivory">
        <div className="text-center">
          <h2 className="font-display text-3xl text-brand">Une question sans réponse ici ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand/80">
            Écris-moi via le formulaire de contact en précisant le type de demande : je réponds
            personnellement à chaque message.
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonLink to="/contact">Poser ma question</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}