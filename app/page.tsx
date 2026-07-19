import { PROJECTS_LEFT, PROJECTS_RIGHT } from "./content";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header activeHref="/#work" />
      <main className="flex-1">
        <Hero />
        <ProjectGrid id="work" columns={[PROJECTS_LEFT, PROJECTS_RIGHT]} />
      </main>
      <Footer />
    </div>
  );
}
