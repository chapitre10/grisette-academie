import type { ReactNode } from "react";

import { NeedleIcon, PinIcon, SpoolIcon } from "@/components/sewing/SewingIcons";

/**
 * Encadré « À retenir » : fond violine brumeux, bordure fine, épingle en
 * illustration. L'épingle est décorative, le titre porte le sens.
 */
export function ARetenir({
  title = "À retenir",
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <aside className={`rounded-lg border border-paper-border bg-mist p-6 ${className}`}>
      <div className="flex items-center gap-2">
        <PinIcon className="size-5 shrink-0 -rotate-12 text-brand" />
        <h2 className="text-xl text-brand">{title}</h2>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-brand/85">{children}</div>
    </aside>
  );
}

/**
 * Encadré « Astuce couture » : fond pêche, bobine ou aiguille en illustration.
 */
export function AstuceCouture({
  title = "Astuce couture",
  icon = "spool",
  children,
  className = "",
}: {
  title?: string;
  icon?: "spool" | "needle";
  children: ReactNode;
  className?: string;
}) {
  const Icon = icon === "needle" ? NeedleIcon : SpoolIcon;
  return (
    <aside className={`rounded-lg border border-paper-border bg-peach p-6 ${className}`}>
      <div className="flex items-center gap-2">
        <Icon className="size-5 shrink-0 text-brand" />
        <h2 className="text-xl text-brand">{title}</h2>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-brand">{children}</div>
    </aside>
  );
}