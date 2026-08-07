/**
 * Stockage temporaire (session) du récapitulatif de la demande de contact,
 * afin de l'afficher sur la page de confirmation. Aucune donnée fictive :
 * seules les informations réellement saisies sont conservées.
 */
export interface ContactSubmission {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  requestType: string;
  message: string;
  submittedAt: string;
}

const STORAGE_KEY = "grisette:contact-submission";

export function saveContactSubmission(submission: ContactSubmission) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(submission));
  } catch {
    // stockage indisponible : la confirmation s'affichera sans récapitulatif
  }
}

export function readContactSubmission(): ContactSubmission | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ContactSubmission>;
    if (!parsed.email || !parsed.message) return null;
    return {
      firstName: parsed.firstName ?? "",
      lastName: parsed.lastName ?? "",
      email: parsed.email,
      subject: parsed.subject ?? "",
      requestType: parsed.requestType ?? "",
      message: parsed.message,
      submittedAt: parsed.submittedAt ?? "",
    };
  } catch {
    return null;
  }
}

export function clearContactSubmission() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // rien à faire
  }
}