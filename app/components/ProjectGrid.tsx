import type { Project } from "../content";
import ProjectCard from "./ProjectCard";

type ProjectGridProps = {
  /** Each inner array renders as one independently-stacked column, preserving the staggered layout. */
  columns: Project[][];
  id?: string;
};

export default function ProjectGrid({ columns, id }: ProjectGridProps) {
  return (
    <section
      id={id}
      className="grid grid-cols-1 items-start gap-x-7 gap-y-12 px-7 md:grid-cols-2"
    >
      {columns.map((projects, i) => (
        <div key={i} className="flex flex-col gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ))}
    </section>
  );
}
