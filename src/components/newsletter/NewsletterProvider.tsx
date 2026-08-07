import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { newsletterPopupConfig } from "@/lib/newsletter";
import { NewsletterPopup } from "./NewsletterPopup";

type NewsletterContextValue = {
  isOpen: boolean;
  /** Ouverture volontaire (lien « Newsletter » du footer) : toujours autorisée. */
  openNewsletter: () => void;
  closeNewsletter: () => void;
};

const NewsletterContext = createContext<NewsletterContextValue | null>(null);

export function useNewsletter() {
  const ctx = useContext(NewsletterContext);
  if (!ctx) throw new Error("useNewsletter doit être utilisé dans NewsletterProvider");
  return ctx;
}

const markAutoShown = () => {
  try {
    sessionStorage.setItem(newsletterPopupConfig.storageKey, "1");
  } catch {
    /* stockage indisponible : on n'affiche simplement pas de nouveau */
  }
};

const wasAutoShown = () => {
  try {
    return sessionStorage.getItem(newsletterPopupConfig.storageKey) === "1";
  } catch {
    return true;
  }
};

export function NewsletterProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openNewsletter = useCallback(() => setIsOpen(true), []);
  const closeNewsletter = useCallback(() => setIsOpen(false), []);

  // Ouverture automatique : une seule fois par session, après un délai.
  useEffect(() => {
    if (!newsletterPopupConfig.enabled) return;
    if (newsletterPopupConfig.frequency === "session" && wasAutoShown()) return;

    const timer = window.setTimeout(() => {
      markAutoShown();
      setIsOpen((open) => open || true);
    }, newsletterPopupConfig.delayMs);

    return () => window.clearTimeout(timer);
  }, []);

  const value = useMemo(
    () => ({ isOpen, openNewsletter, closeNewsletter }),
    [isOpen, openNewsletter, closeNewsletter],
  );

  return (
    <NewsletterContext.Provider value={value}>
      {children}
      <NewsletterPopup
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) markAutoShown();
          setIsOpen(open);
        }}
      />
    </NewsletterContext.Provider>
  );
}
