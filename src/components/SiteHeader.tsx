import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinks, site } from "@/data/site";
import { buttonStyles } from "./Ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <Link
          to="/"
          className="min-w-0 font-display text-xl leading-none text-brand transition-colors hover:text-fuchsia-accent md:text-2xl"
        >
          <span className="block truncate">{site.name}</span>
          <span className="mt-1 block text-[0.6rem] font-sans uppercase tracking-[0.28em] text-raspberry">
            Atelier &amp; apprentissage de la couture
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-fuchsia-accent" }}
              className="text-sm font-medium text-brand transition-colors hover:text-fuchsia-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/blog" className={buttonStyles.primary}>
            Découvrir les ressources
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
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-fuchsia-accent" }}
                className="border-b border-border py-3 text-base font-medium text-brand last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              className={`${buttonStyles.primary} my-4`}
            >
              Découvrir les ressources
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}