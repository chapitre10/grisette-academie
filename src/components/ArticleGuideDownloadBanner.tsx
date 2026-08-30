/**
 * Bannière « ressource gratuite » affichée à la FIN d'un article.
 *
 * Si aucun guide n'est associé (ou s'il n'est pas disponible), le composant
 * ne rend rien : pas de bouton fictif, pas de lien cassé.
 */
import { Link } from "@tanstack/react-router";

import { buttonStyles } from "@/components/Ui";
import { NeedleIcon, PinIcon, SpoolIcon, StitchIcon } from "@/components/sewing/SewingIcons";
import { guideBannerCopy, type FreeGuide } from "@/data/guides";

export function ArticleGuideDownloadBanner({
  guide,
  articleTitle,
  className = "",
}: {
  guide: FreeGuide | undefined;
  articleTitle?: string | undefined;
  className?: string | undefined;
}) {
  if (!guide) return null;

  const available = guide.status === "available";

  return (
    <aside
      className={`relative overflow-hidden rounded-xl border border-paper-border bg-mist p-5 md:p-7 ${className}`}
      aria-labelledby={`guide-banner-${guide.slug}`}
    >
      <SpoolIcon
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-2 size-16 rotate-12 text-peach"
      />
      <NeedleIcon
        aria-hidden
        className="pointer-events-none absolute bottom-2 left-2 size-10 text-gold"
      />

      <div className="relative grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-center">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
            <PinIcon aria-hidden className="size-4 -rotate-12" />
            {guideBannerCopy.eyebrow}
          </p>
          <h2
            id={`guide-banner-${guide.slug}`}
            className="mt-2 font-display text-2xl leading-tight text-brand md:text-3xl"
          >
            {guideBannerCopy.title}
          </h2>
          <StitchIcon aria-hidden className="mt-2 h-1 w-24 text-raspberry/60" />
          <p className="mt-3 text-sm leading-relaxed text-brand/85">{guideBannerCopy.text}</p>
          {articleTitle ? (
            <p className="mt-2 text-sm text-raspberry">
              Fiche liée à cet article : <span className="font-semibold">{guide.title}</span>
            </p>
          ) : null}

          <div className="mt-4">
            {available ? (
              <Link
                to="/telecharger/$slug"
                params={{ slug: guide.slug }}
                className={`${buttonStyles.primary} w-full sm:w-auto`}
              >
                {guide.buttonLabel}
              </Link>
            ) : (
              <span className="inline-flex items-center rounded-full bg-card px-3 py-1 text-sm font-semibold text-brand">
                {guideBannerCopy.comingSoon}
              </span>
            )}
          </div>
          {available ? (
            <p className="mt-2 text-sm text-raspberry">{guideBannerCopy.note}</p>
          ) : null}
        </div>

        <div className="rounded-lg border border-paper-border bg-white p-4 shadow-[0_1px_3px_rgba(93,57,67,0.08)] md:rotate-1">
          {guide.image ? (
            <img
              src={guide.image}
              alt={guide.imageAlt}
              loading="lazy"
              className="aspect-[3/4] w-full rounded-md object-cover"
            />
          ) : (
            <div className="flex aspect-[3/4] w-full flex-col justify-between rounded-md border border-dashed border-paper-border bg-background p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-raspberry">
                  Grisette Académie
                </p>
                <p className="mt-2 font-display text-lg leading-tight text-brand">{guide.title}</p>
                <p className="mt-1 text-sm text-raspberry">{guide.subtitle}</p>
              </div>
              <ul className="space-y-1 text-sm text-brand/80">
                {guide.contents.slice(0, 3).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-gold">
                      ✶
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-brand">{guide.format}</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
