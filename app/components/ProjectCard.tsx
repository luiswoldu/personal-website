import Link from "next/link";
import type { Project } from "../content";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <figure>
        {project.image ? (
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
    </Link>
  );
}
