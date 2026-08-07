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
          <li key={item.id} className="w-64 shrink-0 snap-start sm:w-72">
            <figure>
              <ImagePlaceholder
                src={item.src}
                alt={item.alt}
                hint={item.hint}
                className="aspect-[4/5]"
              />
              <figcaption className="mt-3">
                <span className="block font-display text-lg text-brand">{item.caption}</span>
                <span className="mt-1 block text-sm leading-relaxed text-brand/80">
                  {item.description}
                </span>
                {item.src === null ? (
                  <span className="mt-2 block rounded-md border border-dashed border-raspberry/40 bg-blush/20 px-2 py-1 text-xs text-brand/80">
                    Texte alternatif prévu : « {item.alt} »
                  </span>
                ) : null}
              </figcaption>
            </figure>
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
