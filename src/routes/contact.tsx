import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Section, SectionHeading, buttonStyles } from "@/components/Ui";
import { site } from "@/data/site";

const title = "Contacter Grisette Académie — cours, templates, formations";
const description =
  "Une question sur les cours de couture, les templates ou les formations courtes Grisette Académie ? Écris-moi via le formulaire de contact.";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>) => ({
    sujet: typeof search['sujet'] === "string" ? (search['sujet'] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const requestTypes = [
  "Question sur un template",
  "Question sur un guide",
  "Cours en présentiel",
  "Formation courte",
  "Collaboration",
  "Autre",
];

type FormErrors = Partial<Record<keyof FormState, string>>;

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  requestType: string;
  message: string;
  consent: boolean;
  honeypot: string;
}

function ContactPage() {
  const { sujet } = Route.useSearch();
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    subject: sujet ?? "",
    requestType: sujet ? "Cours en présentiel" : "",
    message: "",
    consent: false,
    honeypot: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    const next: FormErrors = {};
    if (form.firstName.trim().length < 2) next.firstName = "Merci d'indiquer ton prénom.";
    if (form.lastName.trim().length < 2) next.lastName = "Merci d'indiquer ton nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "Merci d'indiquer une adresse e-mail valide.";
    if (form.subject.trim().length < 3) next.subject = "Merci d'indiquer un sujet.";
    if (!form.requestType) next.requestType = "Merci de choisir un type de demande.";
    if (form.message.trim().length < 20)
      next.message = "Merci d'écrire un message de 20 caractères minimum.";
    if (!form.consent) next.consent = "Le consentement est nécessaire pour traiter ta demande.";
    return next;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.honeypot) return; // protection anti-spam basique
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // Aucun envoi réel : brancher un service e-mail ou une base de données plus tard.
    setSent(true);
  };

  const fieldClass = (key: keyof FormState) =>
    `w-full rounded-md border bg-card px-4 py-2.5 text-sm text-brand placeholder:text-brand/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
      errors[key] ? "border-destructive" : "border-input"
    }`;

  return (
    <>
      <Section tone="blush">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Contacte Grisette Académie"
          intro="Une question sur les cours, les templates ou les formations courtes ? Écris-moi et je te répondrai dès que possible."
        />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {sent ? (
              <div
                role="status"
                className="rounded-lg border border-raspberry/40 bg-peach/50 p-6"
              >
                <h2 className="text-xl text-brand">Merci, ta demande est bien préparée.</h2>
                <p className="mt-2 text-sm leading-relaxed text-brand/85">
                  Le formulaire fonctionne, mais l'envoi réel n'est pas encore activé : aucun
                  service e-mail n'est connecté pour le moment. En attendant, tu peux écrire
                  directement à{" "}
                  <a href={`mailto:${site.email}`} className="font-semibold underline">
                    {site.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className={`${buttonStyles.secondary} mt-5`}
                >
                  Écrire un autre message
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-brand">
                      Prénom *
                    </label>
                    <input
                      id="firstName"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      aria-invalid={Boolean(errors.firstName)}
                      className={fieldClass("firstName")}
                    />
                    {errors.firstName ? (
                      <p className="mt-1 text-xs text-destructive">{errors.firstName}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-brand">
                      Nom *
                    </label>
                    <input
                      id="lastName"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      aria-invalid={Boolean(errors.lastName)}
                      className={fieldClass("lastName")}
                    />
                    {errors.lastName ? (
                      <p className="mt-1 text-xs text-destructive">{errors.lastName}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand">
                    Adresse e-mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    className={fieldClass("email")}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-brand">
                    Sujet *
                  </label>
                  <input
                    id="subject"
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    aria-invalid={Boolean(errors.subject)}
                    className={fieldClass("subject")}
                  />
                  {errors.subject ? (
                    <p className="mt-1 text-xs text-destructive">{errors.subject}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="requestType" className="mb-2 block text-sm font-medium text-brand">
                    Type de demande *
                  </label>
                  <select
                    id="requestType"
                    value={form.requestType}
                    onChange={(e) => update("requestType", e.target.value)}
                    aria-invalid={Boolean(errors.requestType)}
                    className={fieldClass("requestType")}
                  >
                    <option value="">Choisir…</option>
                    {requestTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.requestType ? (
                    <p className="mt-1 text-xs text-destructive">{errors.requestType}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    className={fieldClass("message")}
                  />
                  {errors.message ? (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  ) : null}
                </div>

                {/* Champ piège anti-spam, masqué aux utilisateurs */}
                <div className="hidden" aria-hidden>
                  <label htmlFor="societe">Société</label>
                  <input
                    id="societe"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => update("honeypot", e.target.value)}
                  />
                </div>

                <div className="flex gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => update("consent", e.target.checked)}
                    aria-invalid={Boolean(errors.consent)}
                    className="mt-1 size-4 accent-[oklch(0.656_0.272_352.3)]"
                  />
                  <div>
                    <label htmlFor="consent" className="text-sm text-brand">
                      J'accepte que mes données soient utilisées pour traiter ma demande. *
                    </label>
                    {errors.consent ? (
                      <p className="mt-1 text-xs text-destructive">{errors.consent}</p>
                    ) : null}
                  </div>
                </div>

                <button type="submit" className={buttonStyles.primary}>
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-blush/40 p-6">
              <h2 className="text-xl text-brand">Pinterest</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand/85">
                Tu peux également suivre Grisette Académie sur Pinterest pour découvrir les ressources
                gratuites, les conseils couture et les nouvelles publications.
              </p>
              <a
                href={site.pinterestUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`${buttonStyles.flame} mt-4`}
              >
                Suivre sur Pinterest
              </a>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-xl text-brand">Bon à savoir</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand/85">
                Le formulaire n'envoie pas encore de message : aucun service e-mail ni base de
                données n'est connecté. Cette étape sera activée sur ta demande.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}