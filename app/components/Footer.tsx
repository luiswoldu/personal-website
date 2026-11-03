import { FOOTER_LINKS, type FooterLink } from "../content";

type FooterProps = {
  links?: FooterLink[];
};

export default function Footer({ links = FOOTER_LINKS }: FooterProps) {
  return (
    <footer className="mt-28 border-t border-line px-7 py-7">
      <div className="flex items-center text-[13px] tracking-[0.12em] text-secondary-grey sm:justify-end">
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
