import { FOOTER_LINKS, SITE, type FooterLink } from "../content";

function HeartIcon() {
  return (
    <svg
      aria-label="love"
      className="h-[15px] w-[15px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

type FooterProps = {
  links?: FooterLink[];
};

export default function Footer({ links = FOOTER_LINKS }: FooterProps) {
  return (
    <footer className="mt-28 border-t border-line px-7 py-7">
      <div className="flex flex-col gap-5 font-mono text-[13px] tracking-[0.12em] text-faint sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2">
          DESIGNED + CODED WITH
          <HeartIcon />
          {SITE.footerCredit}
        </p>
        <nav className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
