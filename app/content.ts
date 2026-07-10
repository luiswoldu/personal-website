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
  image?: string;
};

export type DetailBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string; bold?: boolean }
  | { type: "image"; src?: string; bg?: string; aspect?: string; caption?: string }
  | { type: "list"; items: string[] }
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
    title: "Building the first AI chef",
    meta: "HANDS · IN PROGRESS",
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
    slug: "personalizing-how-you-cook",
    title: "Personalizing how you cook",
    meta: "CHEF+ · SHIPPED 2023",
    bg: "bg-amber-card",
    aspect: "aspect-[1400/1094]",
    image: "/projects/chef-plus/1-chef-plus-overview.png",
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

const CHEF_PLUS_BLOCKS: DetailBlock[] = [
  { type: "paragraph", text: "What’s for dinner?" },
  {
    type: "paragraph",
    text: "You’ve probably answered this question hundreds of times. And somehow, every day, it’s still hard. You scroll. You save recipes you’ll never make. You open five tabs, close four, and order takeout anyway.",
  },
  { type: "heading", text: "The idea" },
  {
    type: "paragraph",
    text: "What if the right recipe found you instead of you hunting for it?",
  },
  {
    type: "paragraph",
    text: "Today’s cooking apps know almost nothing about the person holding the phone. They serve everyone the same catalog, in the same order, whether you’re a vegan in a hurry or a weekend baker with all afternoon. They’re digital cookbooks with underwhelming technical sophistication.",
  },
  {
    type: "paragraph",
    text: "Chef+ is an app for discovering recipes and learning what you like, quietly getting better at feeding you.",
  },
  {
    type: "image",
    src: "/projects/chef-plus/1-chef-plus-overview.png",
    aspect: "aspect-[1400/1094]",
  },
  { type: "heading", text: "Competitive landscape" },
  { type: "paragraph", text: "Finding something to cook is broken." },
  {
    type: "paragraph",
    text: "The recipe you want is buried under a thousand-word story about someone’s grandmother. Search returns the same twelve results everyone else gets. And the apps that do exist are built for passionate foodies, not for the millions of people who just want a good dinner without turning it into a research project.",
  },
  {
    type: "paragraph",
    text: "Worse, there’s no market leader. The category is crowded with apps like New York Times Cooking, Buzzfeed’s Tasty, and Kitchen Stories. All of these platforms are:",
  },
  {
    type: "list",
    items: [
      "more digital cookbook than service,",
      "made for hobbyists, not everyday cooks,",
      "stocked with the static content, not the viral videos people actually end up making",
    ],
  },
  {
    type: "paragraph",
    text: "Meanwhile, the people we actually trust with food, the content creators we already follow, watch, and cook alongside, live somewhere else entirely, on platforms that were never built for cooking.",
  },
  {
    type: "paragraph",
    text: "Chef+ is an attempt to close that gap. An app where the recipes come from creators you’d choose to follow, and the app learns enough about you to make cooking feel personal.",
  },
  {
    type: "image",
    src: "/projects/chef-plus/2-chef-plus-UIs.png",
    aspect: "aspect-[2398/1184]",
  },
  { type: "heading", text: "A better feed" },
  { type: "paragraph", text: "Content", bold: true },
  {
    type: "paragraph",
    text: "You already watch people cook. You just do it on platforms that forget everything the moment the video ends.",
  },
  {
    type: "paragraph",
    text: "Chef+ turns watching into cooking. Every recipe is a short Show from a creator. Creative, beautifully shot, and worth watching on its own. The moment you’re inspired, the full recipe is right there: ingredients, instructions, and a step-by-step mode that walks you through it hands-free.",
  },
  {
    type: "paragraph",
    text: "No jumping to a blog. No scrolling past ads and life stories. The video and the recipe are instantly accessible.",
  },
  {
    type: "image",
    src: "/projects/chef-plus/3-chef-plus-feed.webp",
    aspect: "aspect-[1280/804]",
  },
  { type: "paragraph", text: "Personalization", bold: true },
  {
    type: "paragraph",
    text: "Most apps treat every cook the same. Chef+ learns from you.",
  },
  {
    type: "paragraph",
    text: "As you cook, it tracks what you make, what you skip, what you come back to and uses that to curate a catalog that is relevant and useful. Over time, the feed is ranked by what you’re likely to love and likely to actually make. The goal isn’t more recipes. It’s the right ones, when you need them.",
  },
  { type: "paragraph", text: "Plant-Based", bold: true },
  {
    type: "paragraph",
    text: "The future of food is whole-food, plant-based. We wanted to deliberately featuring health-forward food. It nudges toward plant-based versions, introduces combinations you might not have tried, and makes eating a little greener feel like a discovery instead of a sacrifice. Good for you, and good for the planet.",
  },
  {
    type: "paragraph",
    text: "We wanted people to understand the science behind what they eat, and to actually enjoy the shift.",
  },
  { type: "heading", text: "Chef+ Artists" },
  {
    type: "paragraph",
    text: "Early on, we discussed letting anyone upload recipes. More content, faster growth. But Chef+ would not have any differentiation if it becomes an open dumping ground. If we’re going to ask people to pay every month, the content has to be worth paying for.",
  },
  {
    type: "paragraph",
    text: "So every recipe on Chef+ comes from a professional creator. Fewer contributors, higher standards, a catalog you can trust.",
  },
  {
    type: "paragraph",
    text: "And it points at the bigger bet underneath the whole project: the future of cooking is powered by great software, not just recipe development.",
  },
  {
    type: "image",
    src: "/projects/chef-plus/4-chef-plus-content.jpg",
    aspect: "aspect-[4320/3780]",
  },
  { type: "heading", text: "Branding" },
  {
    type: "paragraph",
    text: "The brand had to feel like the mission: confident about food, but never preachy.",
  },
  {
    type: "paragraph",
    text: "Every surface leans on bold typography, fluid gradients, and gentle curves. This language formed the basis of social media content as well.",
  },
  {
    type: "image",
    src: "/projects/chef-plus/5-chef-plus-health.jpg",
    aspect: "aspect-[4320/2715]",
  },
  { type: "heading", text: "Reflections" },
  {
    type: "paragraph",
    text: "People are paramount. It was during the pandemic when I began writing code and designing the first draft of an app. Thankfully, I admitted that I wasn’t able to solve this problem on my own, so I started from scratch. Equipped with a new direction, I pitched Alaa the idea the same week we became friends in our first year of university. He was on board by that night and we’ve built the app together. In September 2023, we even applied to Y Combinator.",
  },
  {
    type: "image",
    src: "/projects/chef-plus/6-chef-plus-outro.jpg",
    aspect: "aspect-[7302/3594]",
  },
  {
    type: "paragraph",
    text: "Chef+ was a concept built on the belief that cooking should feel personal. Just like Spotify, TikTok, and Instagram have unlocked tremendous value for their users by refining their algorithm to hyper-personalize every feed, we wanted to bring some of that intelligent ranking to everyday tasks like cooking.",
  },
  {
    type: "paragraph",
    text: "If that resonated, I’d love to hear what you think about this project.",
  },
];

// Live deployments get a "View project" button; static case studies don't.
const LIVE_PROJECT_LINKS: Record<string, string> = {
  "mobile-first-for-figma": "#",
  "bringing-autofill-to-macos": "#",
};

// Real case-study content, keyed by slug; projects without an entry keep placeholders.
const DETAIL_OVERRIDES: Record<string, Partial<ProjectDetail>> = {
  "personalizing-how-you-cook": {
    subtitle:
      "A new service that personalizes recipe discovery cookbook-quality recipes from real content creators",
    blocks: CHEF_PLUS_BLOCKS,
  },
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
  ...DETAIL_OVERRIDES[project.slug],
}));

export const FOOTER_LINKS: FooterLink[] = [
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "EMAIL", href: "mailto:luiswoldu@gmail.com" },
  { label: "X", href: "https://x.com" },
  { label: "GITHUB", href: "https://github.com" },
];
