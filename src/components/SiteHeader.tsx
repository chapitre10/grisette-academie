import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinks, site } from "@/data/site";
import { buttonStyles } from "./Ui";

/** Les chemins sont validés à la main dans src/data/site.ts. */
const path = (to: string) => to as unknown as "/";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3 font-display text-xl leading-none text-brand transition-colors hover:text-fuchsia-ink md:text-2xl"
        >
          {/* Emplacement réservé au logo — remplacer par <img src={...} alt="Grisette Académie" /> */}
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-border bg-card text-[0.6rem] uppercase tracking-wide text-muted-foreground md:h-12 md:w-12"
          >
            logo
          </span>
          <span className="block truncate">{site.name}</span>
        </Link>


        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-5 lg:flex"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpenGroup(null);
          }}
        >
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(link.label)}
                onMouseLeave={() => setOpenGroup(null)}
                onFocus={() => setOpenGroup(link.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenGroup(null);
                }}
              >
                <Link
                  to={path(link.to)}
                  aria-expanded={openGroup === link.label}
                  onClick={() => setOpenGroup(null)}
                  activeProps={{ className: "text-fuchsia-ink" }}
                  className="text-sm font-medium text-brand transition-colors hover:text-fuchsia-ink"
                >
                  {link.label}
                </Link>
                {openGroup === link.label ? (
                  <div className="absolute left-0 top-full z-50 min-w-56 rounded-md border border-border bg-background p-2 shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={path(child.to)}
                        onClick={() => setOpenGroup(null)}
                        activeProps={{ className: "text-fuchsia-ink" }}
                        className="block rounded px-3 py-2 text-sm font-medium text-brand transition-colors hover:bg-muted hover:text-fuchsia-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.to}
                to={path(link.to)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-fuchsia-ink" }}
                className="text-sm font-medium text-brand transition-colors hover:text-fuchsia-ink"
              >
                {link.label}
              </Link>
            ),
          )}
          <Link to="/espace-debutant" className={buttonStyles.primary}>
            Espace débutant
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="inline-flex size-11 items-center justify-center rounded-md border border-brand text-brand lg:hidden"
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        </button>
      </div>

      {open ? (
        <div id="menu-mobile" className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Navigation mobile" className="container-page flex flex-col py-3">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="border-b border-border py-3 last:border-0">
                  <Link
                    to={path(link.to)}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "text-fuchsia-ink" }}
                    className="block text-base font-medium text-brand"
                  >
                    {link.label}
                  </Link>
                  <div className="mt-1 flex flex-col">
                    {link.children
                      .filter((child) => child.to !== link.to)
                      .map((child) => (
                      <Link
                        key={child.to}
                        to={path(child.to)}
                        onClick={() => setOpen(false)}
                        activeProps={{ className: "text-fuchsia-ink" }}
                        className="py-2 pl-4 text-sm font-medium text-raspberry transition-colors hover:text-fuchsia-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={path(link.to)}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-fuchsia-ink" }}
                  className="border-b border-border py-3 text-base font-medium text-brand last:border-0"
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link
              to="/espace-debutant"
              onClick={() => setOpen(false)}
              className={`${buttonStyles.primary} my-4`}
            >
              Espace débutant
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}