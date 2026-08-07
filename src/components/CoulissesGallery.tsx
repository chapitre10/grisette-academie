import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { coulisses } from "@/data/coulisses";

export function CoulissesGallery() {
  const trackRef = useRef<HTMLUListElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * Math.round(track.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative mt-8">
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        tabIndex={0}
        aria-label="Galerie des coulisses, défilement horizontal"
      >
        {coulisses.map((item) => (
          <li key={item.alt} className="w-64 shrink-0 snap-start sm:w-72">
            <ImagePlaceholder
              src={item.src}
              alt={item.alt}
              hint={item.hint}
              className="aspect-[4/5]"
            />
            <p className="mt-2 text-sm text-brand/80">{item.caption}</p>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="Voir les photos précédentes"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-brand transition-colors hover:bg-blush/40"
        >
          <ChevronLeft aria-hidden className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="Voir les photos suivantes"
          className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-brand transition-colors hover:bg-blush/40"
        >
          <ChevronRight aria-hidden className="size-5" />
        </button>
      </div>
    </div>
  );
}
