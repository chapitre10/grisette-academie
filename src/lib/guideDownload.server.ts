/**
 * Traitement serveur des demandes de téléchargement de guide gratuit.
 *
 * - validation et nettoyage de l'e-mail côté serveur ;
 * - anti-spam : honeypot + limitation par empreinte d'IP ;
 * - enregistrement sécurisé (table verrouillée par RLS, accès service_role) ;
 * - génération d'un lien de téléchargement temporaire (bucket privé).
 *
 * AUCUN outil d'e-mailing n'est connecté : rien n'est envoyé par e-mail.
 * Quand un outil sera branché (Brevo / MailerLite / Mailchimp / ConvertKit…),
 * il suffira de compléter `sendGuideEmail` ci-dessous.
 */
import { createHash } from "node:crypto";

import {
  GUIDE_NEWSLETTER_CONSENT_VERSION,
  getGuide,
  guideDownloadSources,
  type GuideDownloadSource,
} from "@/data/guides";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const RATE_LIMIT_MAX = 8;
const RATE_LIMIT_WINDOW_MINUTES = 15;
const SIGNED_URL_TTL_SECONDS = 600;

export type GuideDownloadInput = {
  guideSlug: string;
  email: string;
  newsletterOptIn: boolean;
  articleSlug?: string | undefined;
  articleTitle?: string | undefined;
  source?: string | undefined;
  /** Champ honeypot : doit rester vide. */
  trap?: string | undefined;
};

export type GuideDownloadResult =
  | {
      ok: true;
      downloadUrl: string;
      fileName: string;
      expiresInMinutes: number;
    }
  | { ok: false; error: "invalid_email" | "unknown_guide" | "rate_limited" | "server_error" };

export function normalizeEmail(value: unknown): string {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .slice(0, 255);
}

export function hashIp(ip: string | null): string | null {
  if (!ip) return null;
  return createHash("sha256").update(`grisette:${ip}`).digest("hex").slice(0, 64);
}

function normalizeSource(value: string | undefined): GuideDownloadSource {
  return guideDownloadSources.includes(value as GuideDownloadSource)
    ? (value as GuideDownloadSource)
    : "article_banner";
}

export async function processGuideDownload(
  input: GuideDownloadInput,
  ip: string | null,
): Promise<GuideDownloadResult> {
  // Honeypot : requête silencieusement rejetée.
  if (input.trap && input.trap.trim() !== "") {
    return { ok: false, error: "server_error" };
  }

  const email = normalizeEmail(input.email);
  if (!EMAIL_RE.test(email)) return { ok: false, error: "invalid_email" };

  const guide = getGuide(input.guideSlug);
  if (!guide || guide.status !== "available") return { ok: false, error: "unknown_guide" };

  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const ipHash = hashIp(ip);

    if (ipHash) {
      const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60_000).toISOString();
      const { count } = await supabaseAdmin
        .from("guide_download_requests")
        .select("id", { count: "exact", head: true })
        .eq("ip_hash", ipHash)
        .gte("created_at", since);
      if ((count ?? 0) >= RATE_LIMIT_MAX) return { ok: false, error: "rate_limited" };
    }

    const { data: signed, error: signedError } = await supabaseAdmin.storage
      .from("guides")
      .createSignedUrl(guide.filePath, SIGNED_URL_TTL_SECONDS, { download: guide.fileName });

    if (signedError || !signed?.signedUrl) {
      console.error("[guide-download] signed url", signedError);
      return { ok: false, error: "server_error" };
    }

    const { error: insertError } = await supabaseAdmin.from("guide_download_requests").insert({
      email,
      guide_slug: guide.slug,
      guide_title: guide.title,
      article_slug: input.articleSlug ?? null,
      article_title: input.articleTitle ?? null,
      source: normalizeSource(input.source),
      newsletter_opt_in: Boolean(input.newsletterOptIn),
      consent_text_version: input.newsletterOptIn ? GUIDE_NEWSLETTER_CONSENT_VERSION : null,
      ip_hash: ipHash,
      status: "delivered",
      download_completed_at: new Date().toISOString(),
    });

    if (insertError) {
      console.error("[guide-download] insert", insertError);
      return { ok: false, error: "server_error" };
    }

    await sendGuideEmail();

    return {
      ok: true,
      downloadUrl: signed.signedUrl,
      fileName: guide.fileName,
      expiresInMinutes: SIGNED_URL_TTL_SECONDS / 60,
    };
  } catch (error) {
    console.error("[guide-download]", error);
    return { ok: false, error: "server_error" };
  }
}

/**
 * TODO (uniquement après validation) : brancher l'outil d'e-mailing.
 * - envoyer un e-mail transactionnel avec le lien du guide (même sans opt-in) ;
 * - ajouter à la liste newsletter seulement si newsletter_opt_in est vrai.
 */
async function sendGuideEmail(): Promise<void> {
  return;
}
