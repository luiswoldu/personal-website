import Link from "next/link";
import type { Project } from "../content";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const figure = (
    <figure>
      {project.video ? (
        <video
          src={project.video}
          className={`w-full object-cover ${project.aspect}`}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : project.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt=""
          className={`w-full object-cover ${project.aspect}`}
        />
      ) : (
        <div className={`w-full ${project.aspect} ${project.bg}`} />
      )}
      <figcaption className="mt-5 flex items-baseline justify-between gap-6">
        <span className="font-serif text-[21px] leading-snug text-ink group-hover:text-accent transition-colors">
          {project.title}
        </span>
        <span className="shrink-0 font-mono text-[13px] tracking-[0.12em] text-muted">
          {project.meta}
        </span>
      </figcaption>
    </figure>
  );

  // Projects with an `href` link straight out; the rest open the detail view.
  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {figure}
      </a>
    );
  }

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {figure}
    </Link>
  );
}
