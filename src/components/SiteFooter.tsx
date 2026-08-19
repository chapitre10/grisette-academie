import { Link } from "@tanstack/react-router";

import { site } from "@/data/site";
import { NewsletterFooterForm } from "@/components/newsletter/NewsletterFooterForm";
import { useNewsletter } from "@/components/newsletter/NewsletterProvider";
import { SpoolIcon, ThreadIcon } from "@/components/sewing/SewingIcons";

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Découvrir",
    links: [
      { label: "Guides", to: "/guides" },
      { label: "Ressources gratuites", to: "/blog" },
      { label: "Cours en présentiel", to: "/cours-presentiel" },
      { label: "Formations courtes", to: "/micro-formations" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "À propos", to: "/a-propos" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
      { label: "Mentions légales", to: "/mentions-legales" },
      { label: "Politique de confidentialité", to: "/politique-confidentialite" },
      { label: "Conditions générales de vente", to: "/cgv" },
    ],
  },
];

export function SiteFooter() {
  const { openNewsletter } = useNewsletter();

  return (
    <footer className="bg-brand text-ivory">
      <div aria-hidden className="container-page flex items-center gap-2 pt-4">
        <SpoolIcon className="size-5 shrink-0 text-gold" />
        <ThreadIcon className="h-2 flex-1 text-peach" />
      </div>
      <div className="container-page grid gap-4 py-5 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl text-ivory">{site.name}</p>
          <span aria-hidden className="mt-1.5 block h-px w-12 bg-gold" />
          <p className="mt-2 max-w-sm text-[13px] leading-snug text-ivory/85">
            Ressources, cours et formations pour apprendre la couture avec méthode, créativité et
            confiance.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{col.title}</p>
            <ul className="mt-1.5">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-8 items-center py-0.5 text-[13px] text-peach underline-offset-2 transition-colors hover:text-gold hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {col.title === "Informations" ? (
                <li>
                  <button
                    type="button"
                    onClick={openNewsletter}
                    className="inline-flex min-h-8 items-center py-0.5 text-[13px] text-peach underline-offset-2 transition-colors hover:text-gold hover:underline"
                  >
                    Newsletter
                  </button>
                </li>
              ) : null}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container-page border-t border-ivory/20 py-3.5">
        <NewsletterFooterForm />
      </div>

      <div className="container-page flex flex-col gap-1 border-t border-ivory/20 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] text-ivory/90">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
        <a
          href={site.pinterestUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center text-[11px] text-peach underline underline-offset-2 transition-colors hover:text-gold"
        >
          Suivre Grisette Académie sur Pinterest
        </a>
      </div>
    </footer>
  );
}