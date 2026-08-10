import { PinIcon, SpoolIcon, ThreadIcon } from "@/components/sewing/SewingIcons";

/**
 * Séparateur de sections : un fil très fin, tendu entre une petite bobine
 * (à gauche) et une épingle (à droite). Purement décoratif.
 */
export function ThreadDivider({
  tone = "light",
  className = "",
}: {
  /** `light` : sur fond clair. `dark` : sur fond bordeaux. */
  tone?: "light" | "dark";
  className?: string;
}) {
  const colors =
    tone === "dark"
      ? { thread: "text-fuchsia-accent/70", spool: "text-gold", pin: "text-ivory" }
      : { thread: "text-fuchsia-accent/45", spool: "text-gold", pin: "text-raspberry" };

  return (
    <div aria-hidden className={`container-page py-6 ${className}`}>
      <div className="flex items-center gap-2">
        <SpoolIcon className={`size-5 shrink-0 ${colors.spool}`} />
        <ThreadIcon className={`h-2 flex-1 ${colors.thread}`} />
        <PinIcon className={`size-4 shrink-0 -rotate-12 ${colors.pin}`} />
      </div>
    </div>
  );
}

/** Fine ligne de couture (point piqué), à glisser sous une introduction. */
export function StitchRule({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <div className="h-2 w-full text-paper-border">
        <svg
          viewBox="0 0 120 2"
          preserveAspectRatio="none"
          className="h-full w-full"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeDasharray="6 5"
          strokeLinecap="round"
        >
          <path d="M0 1h120" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
}