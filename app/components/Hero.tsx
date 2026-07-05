import { WORK_HISTORY, type WorkItem } from "../content";
import WorkHistory from "./WorkHistory";

type HeroProps = {
  workHistory?: WorkItem[];
};

export default function Hero({ workHistory = WORK_HISTORY }: HeroProps) {
  return (
    <section className="grid grid-cols-1 gap-16 px-7 pt-40 pb-12 md:grid-cols-2 md:pt-[15rem]">
      <h1 className="font-serif text-[clamp(2.25rem,3.75vw,3.75rem)] leading-[1.12] font-medium tracking-[-0.02em] text-ink">
        I&apos;m Luis, a product
        <br />
        designer who <em>engineers</em>.
      </h1>
      <WorkHistory items={workHistory} className="self-start md:pt-3" />
    </section>
  );
}
