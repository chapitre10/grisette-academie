import { useState } from "react";
import {
  ButtonIcon,
  PinIcon,
  SpoolIcon,
  TagIcon,
  ThreadIcon,
} from "@/components/sewing/SewingIcons";
import {
  petitesChoses,
  type PetiteChose,
  type PetiteChoseTone,
} from "@/data/petitesChoses";

const toneClasses: Record<PetiteChoseTone, string> = {
  paper: "bg-card",
  mist: "bg-mist",
  rose: "bg-rose-pale",
  peach: "bg-peach/70",
  gold: "bg-blush/50",
};

/** Rotations / décalages du collage (desktop uniquement) */
const collage = [
  "md:-rotate-3 md:translate-y-2",
  "md:rotate-2 md:-translate-y-3",
  "md:-rotate-1 md:translate-y-0",
  "md:rotate-3 md:translate-y-4",
  "md:-rotate-2 md:-translate-y-2",
  "md:rotate-1 md:translate-y-3",
];

/** Ligne dessinée à la main : un petit bout de fil */
function HandLine() {
  return <ThreadIcon className="mt-4 h-2 w-24 text-raspberry/60" />;
}

/**
 * Petite illustration couture posée dans un coin de carte (décorative).
 * Une seule par carte, en rotation avec l'index pour rester lisible.
 */
function CardTrinket({ index }: { index: number }) {
  const trinkets = [
    <PinIcon key="pin" className="size-7 -rotate-[25deg] text-brand" />,
    <SpoolIcon key="spool" className="size-7 text-raspberry" />,
    <TagIcon key="tag" className="size-7 -rotate-6 text-raspberry" />,
    <ButtonIcon key="button" className="size-6 text-brand" />,
    <SpoolIcon key="spool2" className="size-7 text-raspberry" />,
    <PinIcon key="pin2" className="size-7 rotate-[15deg] text-brand" />,
  ];
  return (
    <span aria-hidden className="absolute bottom-3 right-4">
      {trinkets[index % trinkets.length]}
    </span>
  );
}

/** Flèche « il y a quelque chose au dos » */
function FlipHint({ flipped }: { flipped: boolean }) {
  return (
    <span className="font-hand mt-4 flex items-center gap-1.5 text-base text-raspberry">
      <svg
        aria-hidden
        viewBox="0 0 32 20"
        className={[
          "h-4 w-6 transition-transform duration-300 motion-reduce:transition-none",
          flipped ? "-scale-x-100" : "",
        ].join(" ")}
        fill="none"
      >
        <path
          d="M2 12c6-9 17-11 25-7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M21 2l6 3-4 5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {flipped ? "Retour" : "Clique, c'est écrit au dos"}
    </span>
  );
}

function PaperCard({ item, index }: { item: PetiteChose; index: number }) {
  const [flipped, setFlipped] = useState(false);

  const face = [
    "absolute inset-0 flex flex-col rounded-[0.9rem] border border-paper-border px-5 py-6 text-left text-brand",
    "shadow-[0_10px_24px_-16px_rgba(93,57,67,0.55)] backface-hidden",
    toneClasses[item.tone],
    item.featured ? "md:px-6 md:py-8" : "",
  ].join(" ");

  return (
    <li
      className={[
        "group relative",
        "transition-transform duration-300 ease-out motion-reduce:transition-none",
        "rotate-0 md:hover:rotate-0 md:hover:-translate-y-1 md:hover:z-20",
        collage[index % collage.length],
        item.featured ? "md:z-10 md:scale-[1.06]" : "",
      ].join(" ")}
    >
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        aria-expanded={flipped}
        className="perspective-card block w-full cursor-pointer rounded-[0.9rem] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-raspberry"
      >
        <span className="sr-only">
          {item.question} — {flipped ? "" : "Cliquez pour voir la réponse. "}
          {item.answer}
        </span>
        <span
          aria-hidden
          className={[
            "relative block min-h-[15rem] w-full preserve-3d",
            "transition-transform duration-500 ease-out motion-reduce:transition-none",
            flipped ? "flip-y" : "",
          ].join(" ")}
        >
          {/* Recto : la question */}
          <span className={face}>
            {/* petit sticker / tampon décoratif */}
            <span
              className={[
                "absolute -top-2 left-5 h-4 w-12 rotate-[-4deg] rounded-[2px] opacity-70",
                item.featured || item.accentSticker
                  ? "bg-fuchsia-accent/40"
                  : "bg-raspberry/25",
              ].join(" ")}
            />
            <span className="font-hand block text-sm uppercase tracking-[0.14em] text-raspberry">
              {item.label}
            </span>
            <span
              className={[
                "font-hand mt-2 block leading-snug text-brand",
                item.featured ? "text-2xl md:text-[1.7rem]" : "text-xl",
              ].join(" ")}
            >
              {item.question}
            </span>
            <HandLine />
            <span className="mt-auto">
              <FlipHint flipped={false} />
            </span>
            <CardTrinket index={index} />
          </span>

          {/* Verso : la réponse */}
          <span className={[face, "flip-y"].join(" ")}>
            <span
              className={[
                "absolute -top-2 right-5 h-4 w-12 rotate-[4deg] rounded-[2px] opacity-70",
                item.featured || item.accentSticker
                  ? "bg-fuchsia-accent/40"
                  : "bg-raspberry/25",
              ].join(" ")}
            />
            <span className="font-hand block text-sm uppercase tracking-[0.14em] text-raspberry">
              {item.label} · au dos
            </span>
            <span className="font-hand mt-2 block text-xl leading-snug text-brand">
              {item.answer}
            </span>
            <span className="mt-auto">
              <FlipHint flipped />
            </span>
          </span>
        </span>
      </button>
    </li>
  );
}

export function PetitesChoses() {
  return (
    <div className="relative">
      <ul className="mt-6 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-5 md:gap-y-8">
        {petitesChoses.map((item, index) => (
          <PaperCard key={item.question} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}