import { Link } from "@tanstack/react-router";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.to ? { item: item.to } : {}),
    })),
  };

  return (
    <div className="border-b border-border bg-mist">
      <nav aria-label="Fil d'Ariane" className="container-page py-3 text-xs text-brand/75 sm:text-sm">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden>/</span>}
              {item.to && index < items.length - 1 ? (
                <Link to={item.to} className="rounded hover:text-fuchsia-ink">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-brand">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
