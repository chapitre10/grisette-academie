import { Link } from "@tanstack/react-router";

import { CONSENT_TEXT, newsletterMessages } from "@/lib/newsletter";
import { useNewsletterForm } from "./useNewsletterForm";

export function NewsletterFooterForm() {
  const form = useNewsletterForm("footer");

  return (
    <section aria-labelledby="newsletter-footer-title" className="max-w-md">
      <h2 id="newsletter-footer-title" className="font-display text-xl text-ivory">
        Les nouvelles de Grisette Académie
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ivory/90">
        Reçois des conseils couture, des ressources gratuites et les actualités de Grisette
        Académie directement dans ta boîte mail.
      </p>

      {form.status === "success" ? (
        <p role="status" className="mt-4 rounded-lg bg-ivory/10 px-4 py-3 text-sm text-ivory">
          {newsletterMessages.success}
        </p>
      ) : (
        <form onSubmit={form.handleSubmit} className="mt-4 space-y-3" noValidate>
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
            className="w-full rounded-lg border border-ivory/30 bg-ivory px-4 py-3 text-base text-brand placeholder:text-brand/40 focus:border-fuchsia-accent focus:outline-none focus:ring-2 focus:ring-fuchsia-accent/50"
          />

          <label className="flex items-start gap-3 text-sm leading-relaxed text-ivory/90">
            <input
              type="checkbox"
              name="consent"
              checked={form.consent}
              onChange={(e) => form.setConsent(e.target.checked)}
              className="mt-0.5 h-6 w-6 shrink-0 rounded accent-fuchsia-accent"
            />
            <span>{CONSENT_TEXT}</span>
          </label>

          <p
            role={form.status === "error" ? "alert" : "status"}
            className={
              form.status === "error"
                ? "text-sm font-semibold text-gold"
                : "text-sm text-ivory/90"
            }
          >
            {form.message ?? newsletterMessages.initial}
          </p>

          <button
            type="submit"
            disabled={form.status === "submitting"}
            className="w-full rounded-full bg-fuchsia-ink px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
          >
            {form.status === "submitting" ? "Envoi…" : "S'inscrire"}
          </button>

          <p className="text-sm">
            <Link
              to="/politique-confidentialite"
              className="text-peach underline transition-colors hover:text-gold"
            >
              Politique de confidentialité
            </Link>
          </p>
        </form>
      )}
    </section>
  );
}
