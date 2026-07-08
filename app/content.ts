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
  slug: string;
  title: string;
  meta: string;
  bg: string;
  aspect: string;
};

export type DetailBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; bg: string; aspect: string; caption?: string }
  | { type: "statement"; text: string };

export type ProjectDetail = {
  slug: string;
  meta: string;
  title: string;
  subtitle: string;
  link?: { label: string; href: string };
  blocks: DetailBlock[];
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
    slug: "mobile-first-for-figma",
    title: "Mobile-first for Figma",
    meta: "FIGMA · CONCEPT 2025",
    bg: "bg-[#dcdcdc]",
    aspect: "aspect-[4/5]",
  },
  {
    slug: "patent-pending-ai",
    title: "Patent-pending AI",
    meta: "ROYAL BANK OF CANADA · HANDED OFF 2024",
    bg: "bg-[#9a9896]",
    aspect: "aspect-[16/9]",
  },
];

export const PROJECTS_RIGHT: Project[] = [
  {
    slug: "reimagining-team-workspaces",
    title: "Reimagining team workspaces",
    meta: "NOTION · SHIPPED 2026",
    bg: "bg-accent",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "bringing-autofill-to-macos",
    title: "Bringing autofill to macOS",
    meta: "1PASSWORD · SHIPPED 2025",
    bg: "bg-teal-card",
    aspect: "aspect-[16/10]",
  },
  {
    slug: "innovation-management-for-fortune-500s",
    title: "Innovation management for Fortune 500s",
    meta: "EARTH · SHIPPED 2023",
    bg: "bg-amber-card",
    aspect: "aspect-[16/9]",
  },
];

const PLACEHOLDER_BODY =
  "LifeSciBench measures whether AI systems can support realistic life science research tasks, not just answer biology questions. To define the benchmark taxonomy, we surveyed practising life scientists about the workflows they use most often in applied research settings. Then, we grouped their responses into seven recurring categories: evidence handling, analysis, design and optimization, scientific reasoning, validation and operations, translation, and scientific communication.";

const PLACEHOLDER_BLOCKS: DetailBlock[] = [
  {
    type: "paragraph",
    text: "Agentic AI systems are becoming increasingly capable of performing scientific tasks. However, their usefulness to life science researchers depends on how well they handle the complexity of real research. That work rarely looks like a single fact-recall question or a clean prediction problem, researchers interpret incomplete protein sequences.",
  },
  { type: "heading", text: "What LifeSciBench measures" },
  { type: "paragraph", text: PLACEHOLDER_BODY },
  {
    type: "paragraph",
    text: "Each task is structured like a request a scientist might give to a knowledgeable collaborator: scientific prompt, any relevant context or artifacts, and a free-response answer. Expert-written rubrics evaluate whether a model can produce the right answer for a specific problem, with the right level of detail, justification, caveats, and formatting a scientist would expect.",
  },
  { type: "heading", text: "Dataset construction" },
  { type: "paragraph", text: PLACEHOLDER_BODY },
  {
    type: "image",
    bg: "bg-[#a8a8a8]",
    aspect: "aspect-[16/9]",
    caption: "GPT-5.5 Instant responses was rated higher than",
  },
  {
    type: "statement",
    text: "Physicians rated GPT-5.5 Instant responses as having fewer failure modes than",
  },
];

// Live deployments get a "View project" button; static case studies don't.
const LIVE_PROJECT_LINKS: Record<string, string> = {
  "mobile-first-for-figma": "#",
  "bringing-autofill-to-macos": "#",
};

export const PROJECT_DETAILS: ProjectDetail[] = [
  ...PROJECTS_LEFT,
  ...PROJECTS_RIGHT,
].map((project) => ({
  slug: project.slug,
  meta: project.meta,
  title: project.title,
  subtitle:
    "An expert written, expert-reviewed benchmark grounded in real-world life science research",
  ...(LIVE_PROJECT_LINKS[project.slug] && {
    link: { label: "View project", href: LIVE_PROJECT_LINKS[project.slug] },
  }),
  blocks: PLACEHOLDER_BLOCKS,
}));

export const FOOTER_LINKS: FooterLink[] = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "EMAIL", href: "mailto:luiswoldu@gmail.com" },
  { label: "X", href: "https://x.com" },
  { label: "GITHUB", href: "https://github.com" },
];
