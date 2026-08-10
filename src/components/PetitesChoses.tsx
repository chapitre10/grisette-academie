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
        "group relative rounded-[0.9rem] border border-paper-border px-5 py-6 text-brand",
        "shadow-[0_10px_24px_-16px_rgba(93,57,67,0.55)]",
        "transition-transform duration-300 ease-out motion-reduce:transition-none",
        "rotate-0 md:hover:rotate-0 md:hover:-translate-y-1 md:hover:z-20",
        toneClasses[item.tone],
        collage[index % collage.length],
        item.featured ? "md:z-10 md:scale-[1.06] md:px-6 md:py-8" : "",
      ].join(" ")}
    >
      {/* petit sticker / tampon décoratif */}
      <span
        aria-hidden
        className={[
          "absolute -top-2 left-5 h-4 w-12 rotate-[-4deg] rounded-[2px] opacity-70",
          item.featured ? "bg-fuchsia-accent/40" : "bg-raspberry/25",
        ].join(" ")}
      />
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-raspberry">
        {item.label}
      </p>
      <p
        className={[
          "mt-3 leading-relaxed text-brand",
          item.featured ? "text-lg md:text-xl" : "text-base",
        ].join(" ")}
      >
        {item.text}
      </p>
      {/* ligne dessinée à la main */}
      <svg
        aria-hidden
        viewBox="0 0 120 8"
        className="mt-4 h-2 w-24 text-raspberry/60"
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