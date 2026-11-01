"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { NAV_LINKS, PANEL_LINKS, SITE, type NavLink } from "../content";
import NavMark from "./NavMark";

type HeaderProps = {
  links?: NavLink[];
  activeHref?: string;
};

/** Position in the panel's entrance sequence; read by .nav-panel-item's delay. */
const stagger = (index: number) =>
  ({ "--stagger": index }) as React.CSSProperties;

export default function Header({
  links = NAV_LINKS,
  activeHref = "#work",
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    // data-nav-open drives the mark's morph; it has to sit on an ancestor of it.
    <div className="relative" data-nav-open={open || undefined}>
      <header className="grid h-[68px] grid-cols-[1fr_auto] items-center border-b border-line px-7 md:grid-cols-2">
        <div className="flex items-baseline gap-6 text-[14px] tracking-[0.08em]">
          <span className="font-semibold text-ink">{SITE.name}</span>
          <span className="hidden text-secondary-grey sm:inline">{SITE.title}</span>
        </div>
        <div className="flex items-center justify-end md:justify-between">
          <nav className="hidden items-center gap-10 text-[14px] tracking-[0.08em] md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                className={
                  link.href === activeHref
                    ? "text-ink font-semibold"
                    : "text-secondary-grey transition-colors hover:text-ink"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Icon-only, so the label moves to aria-label. Padded out to a
              comfortable tap target, then pulled back so the 14px mark still
              lines up with the header's right edge. */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="site-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            className="-m-3 flex items-center p-3 text-secondary-grey transition-colors hover:text-ink"
          >
            <NavMark />
          </button>
        </div>
      </header>
      <div
        id="site-nav-panel"
        inert={!open}
        className="nav-panel absolute inset-x-0 top-[68px] z-20 bg-page"
      >
        <div className="px-7 pt-10">
          <h2
            id="site-nav-panel-heading"
            style={stagger(0)}
            className="nav-panel-item text-[13px] tracking-[0.12em] text-secondary-grey"
          >
            PROJECTS
          </h2>
          {/* Rows stretch full-width below md so the chevron pins to the edge
              and the whole row is a tap target. From md they shrink to their
              label, which brings the chevron in beside the text. */}
          <nav
            aria-labelledby="site-nav-panel-heading"
            className="mt-5 flex flex-col gap-6 md:items-start"
          >
            {PANEL_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                style={stagger(index + 1)}
                className="nav-panel-item group flex items-center justify-between text-[26px] tracking-[0.04em] text-ink transition-colors hover:text-secondary-grey md:gap-2"
              >
                {link.label}
                {/* Tailwind scopes hover: to devices that have it, so on touch
                    the chevron rides in on focus instead of sticking after a tap. */}
                <ChevronRight
                  aria-hidden
                  className="h-6 w-6 -translate-x-1 opacity-0 transition duration-150 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
