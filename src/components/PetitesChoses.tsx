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

function PaperCard({ item, index }: { item: PetiteChose; index: number }) {
  return (
    <li
      className={[
        "group relative rounded-[0.9rem] border border-paper-border px-6 py-7 text-brand",
        "shadow-[0_12px_26px_-16px_rgba(93,57,67,0.6)]",
        "transition-transform duration-300 ease-out motion-reduce:transition-none",
        "rotate-0 md:hover:rotate-0 md:hover:-translate-y-1 md:hover:z-20",
        toneClasses[item.tone],
        collage[index % collage.length],
        item.featured ? "md:z-10 md:scale-[1.06] md:px-7 md:py-9" : "",
      ].join(" ")}
    >
      {/* petit sticker / tampon décoratif */}
      <span
        aria-hidden
        className={[
          "absolute -top-2 left-5 h-4 w-12 rotate-[-4deg] rounded-[2px] opacity-70",
          item.featured || item.accentSticker
            ? "bg-fuchsia-accent/40"
            : "bg-raspberry/25",
        ].join(" ")}
      />
      <p className="font-hand text-base uppercase tracking-[0.18em] text-raspberry">
        {item.label}
      </p>
      <p
        className={[
          "font-hand mt-3 leading-[1.45] text-brand [text-shadow:0_1px_0_rgba(255,250,247,0.7)]",
          item.featured ? "text-[1.8rem] md:text-[2rem]" : "text-2xl md:text-[1.6rem]",
        ].join(" ")}
      >
        {item.text}
      </p>
      {/* ligne dessinée à la main */}
      <svg
        aria-hidden
        viewBox="0 0 120 8"
        className="mt-5 h-2 w-24 text-raspberry/70"
        fill="none"
      >
        <path
          d="M1 5c8-4 16 2 24-1s16-5 24-1 16 5 24 2 16-4 24-1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </li>
  );
}

export function PetitesChoses() {
  return (
    <div className="relative">
      <ul className="mt-6 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-x-5 md:gap-y-8">
        {petitesChoses.map((item, index) => (
          <PaperCard key={item.text} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}