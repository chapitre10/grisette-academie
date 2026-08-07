/**
 * Newsletter — logique partagée (pop-up + footer).
 *
 * AUCUN outil d'e-mailing n'est connecté et AUCUNE adresse n'est stockée.
 * Pour brancher Brevo / Mailchimp / MailerLite / ConvertKit plus tard :
 * remplacer uniquement `submitNewsletterSignup` par un appel vers une
 * server function sécurisée (voir TODO ci-dessous).
 */

/** Réglages facilement modifiables du pop-up. */
export const newsletterPopupConfig = {
  /** Passer à false pour désactiver complètement le pop-up automatique. */
  enabled: true,
  /** Délai avant affichage automatique (ms). */
  delayMs: 8000,
  /** Fréquence : "session" = une seule ouverture automatique par session. */
  frequency: "session" as "session" | "always",
  /** Clé de stockage de session. */
  storageKey: "grisetteAcademieNewsletterPopupShown",
};

/** Version du texte de consentement (à incrémenter si le texte change). */
export const CONSENT_TEXT_VERSION = "2026-08-v1";

export const CONSENT_TEXT =
  "J'accepte de recevoir la newsletter de Grisette Académie. Je peux me désinscrire à tout moment.";

export const newsletterMessages = {
  initial: "Inscris-toi à la newsletter de Grisette Académie.",
  invalidEmail: "Merci d'indiquer une adresse e-mail valide.",
  consentRequired: "Merci de confirmer ton accord pour recevoir la newsletter.",
  success:
    "Merci pour ton inscription ! Tu recevras bientôt les nouvelles de Grisette Académie.",
  error: "Une erreur est survenue. Réessaie plus tard ou contacte Grisette Académie.",
};

export type NewsletterSource = "popup" | "footer";

/** Structure prête pour un outil d'e-mailing. */
export type NewsletterSubscription = {
  email: string;
  source: NewsletterSource;
  consentAt: string;
  consentTextVersion: string;
  /** Statut de confirmation (double opt-in) : géré par l'outil d'e-mailing. */
  confirmationStatus: "pending" | "confirmed";
  /** Statut d'abonnement. */
  status: "subscribed" | "unsubscribed";
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export const isValidEmail = (value: string) => EMAIL_RE.test(value.trim());

export function buildSubscription(
  email: string,
  source: NewsletterSource,
): NewsletterSubscription {
  return {
    email: email.trim().toLowerCase().slice(0, 255),
    source,
    consentAt: new Date().toISOString(),
    consentTextVersion: CONSENT_TEXT_VERSION,
    confirmationStatus: "pending",
    status: "subscribed",
  };
}

export type SubmitResult = { ok: true } | { ok: false };

/**
 * Fonction TEMPORAIRE : ne stocke rien et n'envoie aucun e-mail.
 *
 * TODO (à faire uniquement après validation) : créer une server function
 * `subscribeToNewsletter` qui appelle l'API de l'outil d'e-mailing choisi
 * avec la clé API en secret, puis l'appeler ici à la place du no-op.
 */
export async function submitNewsletterSignup(
  subscription: NewsletterSubscription,
): Promise<SubmitResult> {
  try {
    // Simulation locale uniquement (aucun réseau, aucun stockage).
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (import.meta.env.DEV) {
      console.info("[newsletter] inscription simulée", {
        source: subscription.source,
        consentTextVersion: subscription.consentTextVersion,
      });
    }
    return { ok: true };
  } catch {
    return { ok: false };
  }
}
