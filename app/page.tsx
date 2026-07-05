const NAV_LINKS = [
  { label: "WORK", href: "#work", active: true },
  { label: "FUN", href: "#fun", active: false },
  { label: "ABOUT", href: "#about", active: false },
  { label: "RESUME", href: "#resume", active: false },
];

const WORK_HISTORY = [
  { year: "2026", company: "Notion", role: "Design Engineering Intern" },
  { year: "2025", company: "Bloomberg", role: "Software Engineering Intern" },
  { year: "2025", company: "1Password", role: "Product Design Intern" },
  { year: "2024", company: "Royal Bank of Canada", role: "Software Engineering Intern" },
  { year: "2023", company: "Onova", role: "Product Design + Engineering Intern" },
];

type Project = {
  title: string;
  meta: string;
  bg: string;
  aspect: string;
};

const PROJECTS_LEFT: Project[] = [
  {
    title: "Mobile-first for Figma",
    meta: "FIGMA · CONCEPT 2025",
    bg: "bg-[#dcdcdc]",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Patent-pending AI",
    meta: "ROYAL BANK OF CANADA · HANDED OFF 2024",
    bg: "bg-[#9a9896]",
    aspect: "aspect-[16/9]",
  },
];

const PROJECTS_RIGHT: Project[] = [
  {
    title: "Reimagining team workspaces",
    meta: "NOTION · SHIPPED 2026",
    bg: "bg-accent",
    aspect: "aspect-[4/3]",
  },
  {
    title: "Bringing autofill to macOS",
    meta: "1PASSWORD · SHIPPED 2025",
    bg: "bg-teal-card",
    aspect: "aspect-[16/10]",
  },
  {
    title: "Innovation management for Fortune 500s",
    meta: "EARTH · SHIPPED 2023",
    bg: "bg-amber-card",
    aspect: "aspect-[16/9]",
  },
];

const FOOTER_LINKS = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "EMAIL", href: "mailto:luiswoldu@googlemail.com" },
  { label: "X", href: "https://x.com" },
  { label: "GITHUB", href: "https://github.com" },
  { label: "DEVPOST", href: "https://devpost.com" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <figure>
      <div className={`w-full ${project.aspect} ${project.bg}`} />
      <figcaption className="mt-5 flex items-baseline justify-between gap-6">
        <span className="font-serif text-[21px] leading-snug text-ink">
          {project.title}
        </span>
        <span className="shrink-0 font-mono text-[13px] tracking-[0.12em] text-muted">
          {project.meta}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="grid h-[68px] grid-cols-1 items-center border-b border-line px-7 md:grid-cols-2">
        <div className="flex items-baseline gap-6 font-mono text-[14px] tracking-[0.08em]">
          <span className="font-semibold text-ink">LUIS WOLDU</span>
          <span className="hidden text-muted sm:inline">
            PRODUCT DESIGNER + ENGINEER
          </span>
        </div>
        <div className="hidden items-center justify-between md:flex">
          <nav className="flex items-center gap-10 font-mono text-[14px] tracking-[0.08em]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  link.active
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
            <svg
              aria-hidden
              className="h-[13px] w-[13px] text-ink"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z" />
            </svg>
            LUISLM
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="grid grid-cols-1 gap-16 px-7 pt-40 pb-12 md:grid-cols-2 md:pt-[15rem]">
          <h1 className="font-serif text-[clamp(2.25rem,3.75vw,3.75rem)] leading-[1.12] font-medium tracking-[-0.01em] text-ink">
            I&apos;m Luis, a product
            <br />
            designer who <em>engineers</em>.
            <span
              aria-hidden
              className="ml-4 inline-block h-3 w-3 rounded-full bg-accent"
            />
          </h1>
          <ul className="flex flex-col gap-3 self-start md:pt-3">
            {WORK_HISTORY.map((job) => (
              <li
                key={job.year + job.company}
                className="grid grid-cols-[4rem_1fr] gap-x-6 text-[15px] sm:grid-cols-[4.5rem_1fr_1.6fr]"
              >
                <span className="font-mono text-muted">{job.year}</span>
                <span className="text-ink">{job.company}</span>
                <span className="col-start-2 text-faint sm:col-start-3">
                  {job.role}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section
          id="work"
          className="grid grid-cols-1 items-start gap-x-7 gap-y-12 px-7 md:grid-cols-2"
        >
          <div className="flex flex-col gap-12">
            {PROJECTS_LEFT.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="flex flex-col gap-12">
            {PROJECTS_RIGHT.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-28 border-t border-line px-7 py-7">
        <div className="flex flex-col gap-5 font-mono text-[13px] tracking-[0.12em] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            DESIGNED + CODED WITH
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
            BY LUIS
          </p>
          <nav className="flex flex-wrap items-center gap-x-10 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noreferrer" : undefined
                }
                className="transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
