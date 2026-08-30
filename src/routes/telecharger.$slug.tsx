import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge, Section, buttonStyles } from "@/components/Ui";
import { PinIcon, ScissorsIcon, SpoolIcon, StitchIcon } from "@/components/sewing/SewingIcons";
import {
  GUIDE_NEWSLETTER_CONSENT_TEXT,
  getGuide,
  type FreeGuide,
} from "@/data/guides";
import { requestGuideDownload } from "@/lib/guideDownload.functions";

export const Route = createFileRoute("/telecharger/$slug")({
  loader: ({ params }) => {
    const guide = getGuide(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `Télécharge ton guide gratuit — ${loaderData.guide.title} — Grisette Académie`
      : "Ressource indisponible — Grisette Académie";
    return {
      meta: [
        { title },
        { name: "robots", content: "noindex, follow" },
        {
          name: "description",
          content: loaderData
            ? loaderData.guide.description
            : "Cette ressource gratuite n'est pas disponible.",
        },
      ],
    };
  },
  component: TelechargerPage,
});

type Status = "idle" | "submitting" | "success" | "error";

const messages = {
  invalidEmail: "Merci d'indiquer une adresse e-mail valide.",
  error: "Une erreur est survenue. Réessaie dans quelques instants ou contacte Grisette Académie.",
  rateLimited:
    "Trop de demandes en peu de temps. Réessaie dans quelques minutes ou contacte Grisette Académie.",
  success: "C'est prêt ! Ton guide est disponible.",
};

function TelechargerPage() {
  const { guide } = Route.useLoaderData() as { guide: FreeGuide };
  const submit = useServerFn(requestGuideDownload);

  const [email, setEmail] = useState("");
  const [optIn, setOptIn] = useState(false);
  const [trap, setTrap] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [download, setDownload] = useState<{ url: string; fileName: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email.trim())) {
      setStatus("error");
      setMessage(messages.invalidEmail);
      return;
    }

    setStatus("submitting");
    setMessage(null);

    try {
      const result = await submit({
        data: {
          guideSlug: guide.slug,
          email: email.trim(),
          newsletterOptIn: optIn,
          source: "landing_page",
          trap,
        },
      });

      if (result.ok) {
        setStatus("success");
        setMessage(messages.success);
        setDownload({ url: result.downloadUrl, fileName: result.fileName });
      } else {
        setStatus("error");
        setMessage(
          result.error === "invalid_email"
            ? messages.invalidEmail
            : result.error === "rate_limited"
              ? messages.rateLimited
              : messages.error,
        );
      }
    } catch {
      setStatus("error");
      setMessage(messages.error);
    }
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Accueil", to: "/" },
          { label: "Ressources gratuites", to: "/blog" },
          { label: guide.title },
        ]}
      />

      <Section tone="mist" className="!py-10 md:!py-12">
        <div className="mx-auto max-w-5xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-raspberry">
            <PinIcon aria-hidden className="size-4 -rotate-12" />
            Ressource gratuite
          </p>
          <h1 className="mt-2 font-display text-3xl leading-tight text-brand md:text-4xl">
            Télécharge ton guide gratuit
          </h1>
          <StitchIcon aria-hidden className="mt-2 h-1 w-28 text-raspberry/60" />
          <p className="mt-3 text-base leading-relaxed text-brand/85">
            Tu es à deux pas de recevoir : <span className="font-semibold">{guide.title}</span>.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-start">
            {/* Aperçu du guide */}
            <div className="rounded-xl border border-paper-border bg-white p-5">
              {guide.image ? (
                <img
                  src={guide.image}
                  alt={guide.imageAlt}
                  className="aspect-[3/4] w-full rounded-md object-cover"
                />
              ) : (
                <div className="flex aspect-[3/4] w-full flex-col justify-between rounded-md border border-dashed border-paper-border bg-background p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-raspberry">
                      Grisette Académie
                    </p>
                    <p className="mt-2 font-display text-xl leading-tight text-brand">
                      {guide.title}
                    </p>
                    <p className="mt-1 text-sm text-raspberry">{guide.subtitle}</p>
                  </div>
                  <ScissorsIcon aria-hidden className="size-8 self-end text-peach" />
                </div>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge tone="neutral">{guide.category}</Badge>
                <Badge tone="gold">{guide.level}</Badge>
                <span className="text-sm text-brand/70">{guide.format}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-brand/85">{guide.description}</p>

              <div className="mt-4 rounded-lg border border-paper-border bg-background p-4">
                <p className="flex items-center gap-2 font-display text-lg text-brand">
                  <SpoolIcon aria-hidden className="size-5 text-gold" />
                  Dans ce guide, tu trouveras
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-brand/85">
                  {guide.contents.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulaire */}
            <div className="rounded-xl border border-paper-border bg-white p-5 md:p-6">
              {status === "success" && download ? (
                <div>
                  <h2 className="font-display text-2xl text-brand">{messages.success}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand/85">
                    Fichier : <span className="font-semibold">{download.fileName}</span>
                  </p>
                  <a
                    href={download.url}
                    className={`${buttonStyles.primary} mt-4 w-full sm:w-auto`}
                    download={download.fileName}
                  >
                    Télécharger mon guide
                  </a>
                  <p className="mt-3 text-sm leading-relaxed text-raspberry">
                    Le lien de téléchargement est temporaire. Un e-mail contenant le lien d'accès
                    pourra aussi t'être envoyé lorsque l'outil d'e-mailing sera connecté.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 className="font-display text-2xl text-brand">Accéder à la ressource</h2>

                  <label
                    htmlFor="guide-email"
                    className="mt-4 block text-sm font-medium text-brand"
                  >
                    Ton adresse e-mail
                  </label>
                  <input
                    id="guide-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="bonjour@exemple.fr"
                    aria-invalid={status === "error"}
                    aria-describedby="guide-form-message guide-form-info"
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-brand placeholder:text-brand/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />

                  {/* Honeypot anti-spam (invisible, ignoré des lecteurs d'écran) */}
                  <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                    <label htmlFor="guide-website">Site web</label>
                    <input
                      id="guide-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={trap}
                      onChange={(e) => setTrap(e.target.value)}
                    />
                  </div>

                  <label className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-brand/85">
                    <input
                      type="checkbox"
                      checked={optIn}
                      onChange={(e) => setOptIn(e.target.checked)}
                      className="mt-0.5 size-4 rounded border-input accent-[var(--fuchsia-accent,#ff00a1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <span>{GUIDE_NEWSLETTER_CONSENT_TEXT}</span>
                  </label>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={`${buttonStyles.primary} mt-5 w-full`}
                  >
                    {status === "submitting" ? "Envoi en cours…" : "Accéder à mon guide gratuit"}
                  </button>

                  <p
                    id="guide-form-message"
                    role="status"
                    aria-live="polite"
                    className={`mt-3 text-sm leading-relaxed ${
                      status === "error" ? "font-semibold text-flame-ink" : "text-brand/80"
                    }`}
                  >
                    {message ?? ""}
                  </p>

                  <p id="guide-form-info" className="mt-1 text-sm leading-relaxed text-brand/80">
                    Ton adresse e-mail est utilisée pour te donner accès à cette ressource gratuite.
                  </p>
                  <Link
                    to="/politique-confidentialite"
                    className="mt-1 inline-block text-sm font-semibold text-brand underline underline-offset-4 hover:text-fuchsia-ink"
                  >
                    Consulter la politique de confidentialité
                  </Link>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
