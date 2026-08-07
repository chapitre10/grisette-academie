import { Link } from "@tanstack/react-router";
import { getRelatedSearches } from "@/data/recherchesAssociees";

export function RelatedSearches({ slug }: { slug: string }) {
  const searches = getRelatedSearches(slug);
  if (searches.length === 0) return null;

  return (
    <section aria-labelledby="recherches-associees" className="border-t border-border pt-6">
      <h2 id="recherches-associees" className="font-display text-lg text-brand">
        Recherches associées
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {searches.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              params={item.params as never}
              className="inline-flex min-h-11 items-center rounded-full border border-raspberry/35 bg-card px-4 text-sm text-brand transition-colors hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}