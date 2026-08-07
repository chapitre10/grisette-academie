import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Badge, ButtonLink, Card, Faq, Section, SectionHeading } from "@/components/Ui";
import { getProduct, products, type Product } from "@/data/products";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Ressource indisponible — Grisette Académie" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: product.seo.title },
        { name: "description", content: product.seo.description },
        { property: "og:title", content: product.seo.title },
        { property: "og:description", content: product.seo.description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/guides/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/guides/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.title,
            description: product.seo.description,
            category: product.category,
            brand: { "@type": "Brand", name: "Grisette Académie" },
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const related = product.related
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <div className="border-b border-border bg-mist">
        <nav aria-label="Fil d'Ariane" className="container-page py-4 text-sm text-brand/75">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-fuchsia-accent">
                Accueil
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/guides" className="hover:text-fuchsia-accent">
                Guides
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="font-medium text-brand">
              {product.title}
            </li>
          </ol>
        </nav>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <ImagePlaceholder
              src={product.image}
              alt={product.imageAlt}
              hint="Image principale du produit (à remplacer)"
              className="aspect-[4/5]"
            />
            <ul className="mt-4 grid grid-cols-3 gap-3">
              {product.gallery.map((item) => (
                <li key={item.alt}>
                  <ImagePlaceholder
                    src={item.src}
                    alt={item.alt}
                    className="aspect-square"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="neutral">{product.category}</Badge>
              <Badge tone="gold">Exemple à remplacer</Badge>
            </div>
            <h1 className="mt-4 text-3xl leading-tight text-brand md:text-4xl">{product.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-brand/80">
              {product.shortDescription}
            </p>

            <div className="mt-6 rounded-lg border border-border bg-peach/40 p-5">
              <h2 className="text-lg text-brand">Bénéfices principaux</h2>
              <ul className="mt-3 space-y-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-brand/85">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-raspberry" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-6 rounded-lg border border-border bg-card p-5">
              <div className="flex justify-between border-b border-border py-2">
                <dt className="text-sm text-brand/70">Format</dt>
                <dd className="text-sm font-semibold text-brand">{product.format}</dd>
              </div>
              <div className="flex justify-between py-2">
                <dt className="text-sm text-brand/70">Niveau</dt>
                <dd className="text-sm font-semibold text-brand">{product.level}</dd>
              </div>
            </dl>

            <p className="mt-6 font-display text-2xl text-brand">
              {/* Prix modifiable : renseigner `price` dans src/data/products.ts */}
              {product.price ?? "Bientôt disponible"}
            </p>
            <button
              type="button"
              disabled
              className="mt-4 w-full rounded-md bg-mist px-5 py-3 text-sm font-semibold text-brand/70 sm:w-auto"
            >
              Bientôt disponible
            </button>
            <p className="mt-2 text-xs text-brand/65">
              Le paiement n'est pas encore connecté. Pour être informée de l'ouverture, utilise la
              page contact.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-brand">Contenu détaillé</h2>
            <ul className="mt-4 space-y-2 text-sm text-brand/85">
              {product.content.map((c) => (
                <li key={c} className="rounded-md border border-border bg-card px-4 py-3">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl text-brand">Matériel nécessaire</h2>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-brand/85">
                {product.material.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl text-brand">Conditions d'utilisation</h2>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-brand/85">
                {product.usage.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="À découvrir aussi" title="Ressources associées" />
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Card>
                  <Badge tone="neutral">{item.category}</Badge>
                  <h3 className="mt-3 text-xl text-brand">{item.title}</h3>
                  <p className="mt-2 text-sm text-brand/80">{item.shortDescription}</p>
                  <div className="mt-5">
                    <ButtonLink
                      to="/guides/$slug"
                      params={{ slug: item.slug }}
                      variant="secondary"
                    >
                      Découvrir
                    </ButtonLink>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section tone="blush">
        <SectionHeading eyebrow="Questions fréquentes" title="Avant de télécharger" />
        <div className="mt-8">
          <Faq items={product.faq} />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink to="/contact">Poser une question</ButtonLink>
          <ButtonLink to="/guides" variant="secondary">
            Retour aux guides
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}