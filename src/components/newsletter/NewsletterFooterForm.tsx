import { Link } from "@tanstack/react-router";

import { CONSENT_TEXT, newsletterMessages } from "@/lib/newsletter";
import { useNewsletterForm } from "./useNewsletterForm";

export function NewsletterFooterForm() {
  const form = useNewsletterForm("footer");

  return (
    <section
      aria-labelledby="newsletter-footer-title"
      className="grid w-full gap-4 lg:grid-cols-[1fr_1.2fr] lg:items-center"
    >
      <div>
        <h2 id="newsletter-footer-title" className="font-display text-lg text-ivory">
          Les nouvelles de Grisette Académie
        </h2>
        <p className="mt-1 text-sm leading-snug text-ivory/90">
          Reçois des conseils couture, des ressources gratuites et les actualités de Grisette
          Académie directement dans ta boîte mail.
        </p>
      </div>

      {form.status === "success" ? (
        <p role="status" className="rounded-lg bg-ivory/10 px-4 py-2 text-sm text-ivory">
          {newsletterMessages.success}
        </p>
      ) : (
        <form onSubmit={form.handleSubmit} className="w-full" noValidate>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <label htmlFor="newsletter-footer-email" className="sr-only">
              Adresse e-mail
            </label>
            <input
              id="newsletter-footer-email"
              type="email"
              name="email"
              autoComplete="email"
              maxLength={255}
              required
              value={form.email}
              onChange={(e) => form.setEmail(e.target.value)}
              placeholder="ton@email.fr"
              className="w-full flex-1 rounded-full border border-ivory/30 bg-ivory px-4 py-2.5 text-base text-brand placeholder:text-brand/40 focus:border-fuchsia-accent focus:outline-none focus:ring-2 focus:ring-fuchsia-accent/50"
            />
            <button
              type="submit"
              disabled={form.status === "submitting"}
              className="shrink-0 rounded-full bg-fuchsia-accent px-6 py-2.5 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {form.status === "submitting" ? "Envoi…" : "S'inscrire"}
            </button>
          </div>

          <label className="mt-2 flex items-start gap-2 text-xs leading-snug text-ivory/90">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={(e) => form.setConsent(e.target.checked)}
              className="mt-0.5 h-5 w-5 shrink-0 rounded accent-fuchsia-accent"
            />
            <span>
              {CONSENT_TEXT}{" "}
              <Link
                to="/politique-confidentialite"
                className="text-peach underline transition-colors hover:text-gold"
              >
                Politique de confidentialité
              </Link>
            </span>
          </label>

          <p
            role={form.status === "error" ? "alert" : "status"}
            className={
              form.status === "error"
                ? "mt-1 text-xs font-semibold text-gold"
                : "mt-1 text-xs text-ivory/90"
            }
          >
            {form.message ?? newsletterMessages.initial}
          </p>
        </form>
      )}
    </section>
  );
}
