"use client";

import { useEffect, useState } from "react";
import { FOOTER_LINKS, NAV_LINKS, SITE, type NavLink } from "../content";
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
        <div className="flex items-baseline gap-6 font-mono text-[14px] tracking-[0.08em]">
          <span className="font-semibold text-ink">{SITE.name}</span>
          <span className="hidden text-muted sm:inline">{SITE.title}</span>
        </div>
        <div className="flex items-center justify-end md:justify-between">
          <nav className="hidden items-center gap-10 font-mono text-[14px] tracking-[0.08em] md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                className={
                  link.href === activeHref
                    ? "text-accent"
                    : "text-ink/80 transition-colors hover:text-accent"
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
            className="-m-3 flex items-center p-3 text-faint transition-colors hover:text-ink"
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
          <nav className="flex flex-col items-start gap-6">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                download={link.download}
                onClick={() => setOpen(false)}
                style={stagger(index)}
                className="nav-panel-item font-mono text-[26px] tracking-[0.04em] text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 font-mono text-[13px] tracking-[0.12em] text-faint">
            {FOOTER_LINKS.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                style={stagger(links.length + index)}
                className="nav-panel-item transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
