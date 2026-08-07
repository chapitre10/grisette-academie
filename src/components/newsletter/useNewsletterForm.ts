import { useState } from "react";

import {
  buildSubscription,
  isValidEmail,
  newsletterMessages,
  submitNewsletterSignup,
  type NewsletterSource,
} from "@/lib/newsletter";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export function useNewsletterForm(source: NewsletterSource, onSuccess?: () => void) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage(newsletterMessages.invalidEmail);
      return;
    }
    if (!consent) {
      setStatus("error");
      setMessage(newsletterMessages.consentRequired);
      return;
    }

    setStatus("submitting");
    setMessage(null);
    const result = await submitNewsletterSignup(buildSubscription(email, source));
    if (result.ok) {
      setStatus("success");
      setMessage(newsletterMessages.success);
      setEmail("");
      setConsent(false);
      onSuccess?.();
    } else {
      setStatus("error");
      setMessage(newsletterMessages.error);
    }
  };

  return {
    email,
    setEmail,
    consent,
    setConsent,
    status,
    message,
    handleSubmit,
  };
}
