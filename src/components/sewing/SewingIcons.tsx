/**
 * Illustrations couture — trait fin, légèrement dessiné à la main.
 *
 * Toutes les illustrations utilisent `currentColor` : la couleur se règle
 * avec une classe Tailwind (`text-brand`, `text-gold`, `text-fuchsia-ink`…),
 * la taille avec `size-*` / `h-* w-*`, la position depuis le composant parent.
 *
 * Par défaut elles sont décoratives (`aria-hidden`). Passer `title` pour
 * les rendre porteuses de sens (ajoute un <title> et role="img").
 */
import type { SVGProps } from "react";

export type SewingIconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  /** Texte alternatif : à renseigner uniquement si l'illustration porte du sens. */
  title?: string;
};

const STROKE = 1.3;

function Svg({
  title,
  viewBox,
  className = "size-5",
  children,
  ...rest
}: SewingIconProps & { viewBox: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={STROKE}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...(title ? { role: "img" } : { "aria-hidden": true, focusable: false })}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

/** Épingle de couturière (tête ronde + tige inclinée). */
export function PinIcon(props: SewingIconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M7.6 6.4c-1 1.1-.7 2.6.6 3.4l6.4 3.9" />
      <path d="M14.6 13.7 20.5 19.6" />
      <circle cx="6.2" cy="5" r="2.1" />
    </Svg>
  );
}

/** Épingle à nourrice, très simplifiée. */
export function SafetyPinIcon(props: SewingIconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M7.4 4.6v11.2a3.1 3.1 0 0 0 5.3 2.2l6.1-6.3" />
      <path d="M11 4.6v11.4c0 1.5-1.1 2.6-2.5 2.6-1.6 0-2.7-1.2-2.7-2.7" />
      <path d="M6.2 4.3h6.2a1.6 1.6 0 0 1 0 3.2H8.6" />
    </Svg>
  );
}

/** Bobine de fil. */
export function SpoolIcon(props: SewingIconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M6.4 4.2h11.2M6.4 19.8h11.2" />
      <path d="M8.2 4.2v15.6M15.8 4.2v15.6" />
      <path d="M8.4 8.4h7.2M8.4 12h7.2M8.4 15.6h7.2" />
    </Svg>
  );
}

/** Aiguille avec son chas. */
export function NeedleIcon(props: SewingIconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M4.2 19.8 17.6 5.4" />
      <path d="M17 4.9c1.4-1 2.8.4 1.9 1.9" />
      <path d="M13.6 8.2c1 .6 1.6 1.3 2 2.3" />
    </Svg>
  );
}

/** Petit bouton à quatre trous. */
export function ButtonIcon(props: SewingIconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="9.6" cy="9.6" r="1" />
      <circle cx="14.4" cy="9.6" r="1" />
      <circle cx="9.6" cy="14.4" r="1" />
      <circle cx="14.4" cy="14.4" r="1" />
    </Svg>
  );
}

/** Ciseaux très simplifiés. */
export function ScissorsIcon(props: SewingIconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="6.4" cy="18" r="2.4" />
      <circle cx="17.6" cy="18" r="2.4" />
      <path d="M8.2 16.2 17.4 4.2M15.8 16.2 6.6 4.2" />
    </Svg>
  );
}

/** Étiquette d'atelier (petite étiquette percée). */
export function TagIcon(props: SewingIconProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M4.6 9.4 9.4 4.6h8.2a1.8 1.8 0 0 1 1.8 1.8v8.2l-4.8 4.8a1.5 1.5 0 0 1-2.1 0L4.6 11.5a1.5 1.5 0 0 1 0-2.1Z" />
      <circle cx="9.2" cy="9.2" r="1.2" />
    </Svg>
  );
}

/** Fil ondulé, longueur libre (s'étire à la largeur du parent). */
export function ThreadIcon({ className = "h-2 w-24", ...rest }: SewingIconProps) {
  return (
    <Svg
      viewBox="0 0 120 8"
      className={className}
      preserveAspectRatio="none"
      vectorEffect="non-scaling-stroke"
      {...rest}
    >
      <path d="M1 5c8-4 16 2 24-1s16-5 24-1 16 5 24 2 16-4 24-1" />
    </Svg>
  );
}

/** Ligne de couture (point piqué). */
export function StitchIcon({ className = "h-1 w-full", ...rest }: SewingIconProps) {
  return (
    <Svg
      viewBox="0 0 120 2"
      className={className}
      preserveAspectRatio="none"
      strokeDasharray="6 5"
      {...rest}
    >
      <path d="M0 1h120" vectorEffect="non-scaling-stroke" />
    </Svg>
  );
}

export const sewingIcons = {
  pin: PinIcon,
  safetyPin: SafetyPinIcon,
  spool: SpoolIcon,
  needle: NeedleIcon,
  button: ButtonIcon,
  scissors: ScissorsIcon,
  tag: TagIcon,
  thread: ThreadIcon,
  stitch: StitchIcon,
};

export type SewingIconName = keyof typeof sewingIcons;