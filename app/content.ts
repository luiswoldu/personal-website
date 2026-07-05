export type NavLink = {
  label: string;
  href: string;
};

export type WorkItem = {
  year: string;
  company: string;
  role: string;
};

export type Project = {
  title: string;
  meta: string;
  bg: string;
  aspect: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export const SITE = {
  name: "LUIS WOLDU",
  title: "PRODUCT DESIGNER + ENGINEER",
  lmLabel: "LUISLM",
  footerCredit: "BY LUIS",
};

export const NAV_LINKS: NavLink[] = [
  { label: "WORK", href: "#work" },
  { label: "FUN", href: "#fun" },
  { label: "ABOUT", href: "#about" },
  { label: "RESUME", href: "#resume" },
];

export const WORK_HISTORY: WorkItem[] = [
  { year: "2026", company: "You&Company Consulting", role: "Design Engineer" },
  { year: "2025", company: "Company", role: "Software Engineering Intern" },
  { year: "2025", company: "Pulse Advertising", role: "Software Engineering Intern" },
  { year: "2024", company: "Company", role: "Software Engineering Intern" },
  { year: "2023", company: "Company", role: "Cut role ?" },
];

export const PROJECTS_LEFT: Project[] = [
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

export const PROJECTS_RIGHT: Project[] = [
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

export const FOOTER_LINKS: FooterLink[] = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "EMAIL", href: "mailto:luiswoldu@gmail.com" },
  { label: "X", href: "https://x.com" },
  { label: "GITHUB", href: "https://github.com" },
];
