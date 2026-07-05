import { NAV_LINKS, SITE, type NavLink } from "../content";

function StarIcon() {
  return (
    <svg
      aria-hidden
      className="h-[13px] w-[13px] text-ink"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z" />
    </svg>
  );
}

type HeaderProps = {
  links?: NavLink[];
  activeHref?: string;
};

export default function Header({
  links = NAV_LINKS,
  activeHref = "#work",
}: HeaderProps) {
  return (
    <header className="grid h-[68px] grid-cols-1 items-center border-b border-line px-7 md:grid-cols-2">
      <div className="flex items-baseline gap-6 font-mono text-[14px] tracking-[0.08em]">
        <span className="font-semibold text-ink">{SITE.name}</span>
        <span className="hidden text-muted sm:inline">{SITE.title}</span>
      </div>
      <div className="hidden items-center justify-between md:flex">
        <nav className="flex items-center gap-10 font-mono text-[14px] tracking-[0.08em]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
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
        <a
          href="#"
          className="flex items-center gap-2 font-mono text-[14px] tracking-[0.08em] text-faint transition-colors hover:text-ink"
        >
          <StarIcon />
          {SITE.lmLabel}
        </a>
      </div>
    </header>
  );
}
