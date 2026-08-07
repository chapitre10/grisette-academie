import { Image } from "lucide-react";

/**
 * Emplacement d'image facile à remplacer.
 * Fournir `src` (import ES6 ou chemin public) pour afficher la vraie image.
 */
export function ImagePlaceholder({
  src,
  alt,
  hint,
  className = "aspect-[4/3]",
}: {
  src?: string | null;
  alt: string;
  hint?: string;
  className?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full rounded-md border border-border object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-raspberry/50 bg-mist/70 px-4 text-center ${className}`}
    >
      <Image aria-hidden className="size-6 text-raspberry" />
      <p className="text-xs font-medium uppercase tracking-widest text-raspberry">
        Emplacement image
      </p>
      {hint ? <p className="max-w-xs text-xs text-brand/70">{hint}</p> : null}
    </div>
  );
}