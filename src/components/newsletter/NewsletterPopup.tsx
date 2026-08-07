import { Link } from "@tanstack/react-router";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { CONSENT_TEXT, newsletterMessages } from "@/lib/newsletter";
import { useNewsletterForm } from "./useNewsletterForm";

export function NewsletterPopup({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const form = useNewsletterForm("popup", () => {
    window.setTimeout(() => onOpenChange(false), 2500);
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fabric-roll-panel max-w-md overflow-hidden rounded-2xl border-peach bg-ivory p-0 text-brand !animate-none data-[state=closed]:!animate-none">
        <span
          aria-hidden
          className="fabric-roll-bar relative block h-3 w-full rounded-t-2xl bg-blush shadow-[0_2px_10px_rgba(93,57,67,0.25)] after:absolute after:inset-x-6 after:top-1/2 after:h-px after:-translate-y-1/2 after:bg-brand/20"
        />
        <span aria-hidden className="fabric-weave pointer-events-none absolute inset-0" />
        <div className="fabric-roll-content p-6 sm:p-8">
          <span
            aria-hidden
            className="absolute -right-10 -top-6 h-28 w-28 rounded-full bg-peach/40"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
              Newsletter
            </p>
            <DialogTitle className="mt-2 font-display text-2xl leading-tight text-brand sm:text-3xl">
              Reçois les nouvelles de Grisette Académie
            </DialogTitle>
            <DialogDescription className="mt-3 text-sm leading-relaxed text-brand/85">
              Inscris-toi à la newsletter pour recevoir des conseils couture, des ressources
              gratuites, des nouveautés et les actualités des cours et formations de Grisette
              Académie.
            </DialogDescription>

            {form.status === "success" ? (
              <p
                role="status"
                className="mt-6 rounded-lg bg-peach/50 px-4 py-3 text-sm text-brand"
              >
                {newsletterMessages.success}
              </p>
            ) : (
              <form onSubmit={form.handleSubmit} className="mt-6 space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="newsletter-popup-email"
                    className="block text-sm font-semibold text-brand"
                  >
                    Adresse e-mail
                  </label>
                  <input
                    id="newsletter-popup-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    maxLength={255}
                    required
                    value={form.email}
                    onChange={(e) => form.setEmail(e.target.value)}
                    placeholder="ton@email.fr"
                    className="mt-1.5 w-full rounded-lg border border-raspberry/40 bg-white px-4 py-3 text-base text-brand placeholder:text-brand/40 focus:border-fuchsia-accent focus:outline-none focus:ring-2 focus:ring-fuchsia-accent/40"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-brand/90">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={(e) => form.setConsent(e.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-raspberry/50 accent-fuchsia-accent"
                  />
                  <span>{CONSENT_TEXT}</span>
                </label>

                <p
                  role={form.status === "error" ? "alert" : "status"}
                  className={
                    form.status === "error"
                      ? "text-sm font-semibold text-flame-ink"
                      : "text-sm text-brand/70"
                  }
                >
                  {form.message ?? newsletterMessages.initial}
                </p>

                <button
                  type="submit"
                  disabled={form.status === "submitting"}
                  className="w-full rounded-full bg-fuchsia-accent px-6 py-3.5 text-base font-semibold text-ivory transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {form.status === "submitting" ? "Envoi…" : "Je m'inscris"}
                </button>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <DialogClose className="inline-flex min-h-11 items-center rounded-full px-3 py-2 text-sm text-brand/70 underline transition-colors hover:text-brand">
                    Plus tard
                  </DialogClose>
                  <Link
                    to="/politique-confidentialite"
                    onClick={() => onOpenChange(false)}
                    className="inline-flex min-h-11 items-center text-sm text-raspberry underline hover:text-fuchsia-ink"
                  >
                    Politique de confidentialité
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
