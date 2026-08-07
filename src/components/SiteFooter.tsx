import { Link } from "@tanstack/react-router";

import { site } from "@/data/site";
import { NewsletterFooterForm } from "@/components/newsletter/NewsletterFooterForm";
import { useNewsletter } from "@/components/newsletter/NewsletterProvider";

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
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-ivory">{site.name}</p>
          <span aria-hidden className="mt-3 block h-px w-12 bg-gold" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/85">
            Ressources, cours et formations pour apprendre la couture avec méthode, créativité et
            confiance.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-peach transition-colors hover:text-fuchsia-ink"
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
                    className="text-sm text-peach underline-offset-2 transition-colors hover:text-fuchsia-ink hover:underline"
                  >
                    Newsletter
                  </button>
                </li>
              ) : null}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container-page border-t border-ivory/20 py-10">
        <NewsletterFooterForm />
      </div>

      <div className="container-page flex flex-col gap-3 border-t border-ivory/20 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ivory/75">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </p>
        <a
          href={site.pinterestUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm text-peach transition-colors hover:text-fuchsia-ink"
        >
          Suivre Grisette Académie sur Pinterest
        </a>
      </div>
    </footer>
  );
}