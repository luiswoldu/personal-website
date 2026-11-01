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
          alt={project.name || project.title}
          className={`w-full object-cover ${project.aspect}`}
        />
      ) : (
        <div className={`w-full ${project.aspect} ${project.bg}`} />
      )}
      <figcaption className="mt-4 flex items-baseline gap-2 text-[17px] leading-snug md:text-[18px]">
        <span className="text-ink transition-colors group-hover:text-secondary-grey">
          {project.name}
        </span>
        <span className="text-line">/</span>
        <span className="text-secondary-grey">{project.status}</span>
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
