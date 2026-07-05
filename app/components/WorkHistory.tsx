import type { WorkItem } from "../content";

type WorkHistoryProps = {
  items: WorkItem[];
  className?: string;
};

export default function WorkHistory({ items, className }: WorkHistoryProps) {
  return (
    <ul className={`flex flex-col gap-3 ${className ?? ""}`}>
      {items.map((job) => (
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
  );
}
