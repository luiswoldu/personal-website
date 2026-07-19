import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import { PROJECT_DETAILS, type DetailBlock } from "../../content";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return PROJECT_DETAILS.map((detail) => ({ slug: detail.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = PROJECT_DETAILS.find((d) => d.slug === slug);
  return { title: detail ? `${detail.title} — Luis Woldu` : "Luis Woldu" };
}

function Block({ block }: { block: DetailBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="mx-auto mt-24 max-w-2xl text-[32px] font-semibold tracking-[-0.015em] text-neutral-900">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p
          className={`mx-auto mt-8 max-w-2xl text-[19px] leading-[1.65] text-neutral-900 ${block.bold ? "font-semibold" : ""}`}
        >
          {block.text}
        </p>
      );
    case "image":
      return (
        <figure className="mx-auto mt-28 max-w-6xl">
          {block.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={block.src}
              alt={block.caption ?? ""}
              className={`w-full object-cover ${block.aspect ?? ""}`}
            />
          ) : (
            <div className={`w-full ${block.aspect ?? ""} ${block.bg ?? ""}`} />
          )}
          {block.caption && (
            <figcaption className="mt-6 text-[16px] italic text-neutral-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "video":
      return (
        <figure className="mx-auto mt-28 max-w-6xl">
          <video
            src={block.src}
            className={`w-full object-cover ${block.aspect ?? ""}`}
            autoPlay
            loop
            muted
            playsInline
          />
          {block.caption && (
            <figcaption className="mt-6 text-[16px] italic text-neutral-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "list":
      return (
        <ul className="mx-auto mt-8 max-w-2xl list-disc space-y-2 pl-6 text-[19px] leading-[1.65] text-neutral-900">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "statement":
      return (
        <p className="mx-auto mt-28 max-w-2xl text-center text-[22px] font-semibold leading-snug text-neutral-900">
          {block.text}
        </p>
      );
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = PROJECT_DETAILS.find((d) => d.slug === slug);
  if (!detail) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <Header activeHref="#work" />
      <main className="flex-1 px-7 pb-32">
        <div className="mx-auto max-w-6xl pt-10">
          <a
            href="/#work"
            className="inline-flex items-center gap-1 text-[14px] text-faint transition-colors hover:text-ink"
          >
            <ChevronLeft className="h-8 w-8" aria-hidden />
          </a>
        </div>
        <section className="mx-auto max-w-3xl pt-14 text-center">
          <p className="text-[15px] tracking-[0.02em] text-faint">
            {detail.meta}
          </p>
          <h1 className="mt-5 text-[44px] font-semibold leading-[1.05] tracking-[-0.02em] text-neutral-900 md:text-[60px]">
            {detail.title}
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-[21px] leading-[1.55] text-neutral-900">
            {detail.subtitle}
          </p>
          {detail.link && (
            <a
              href={detail.link.href}
              className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-[#414141] px-7 py-3.5 text-[16px] text-white transition-colors hover:bg-neutral-700"
            >
              {detail.link.label}
              <ArrowUpRight className="h-[18px] w-[18px]" aria-hidden />
            </a>
          )}
        </section>
        <article className="pt-22 [&>*:first-child]:mt-0">
          {detail.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}
