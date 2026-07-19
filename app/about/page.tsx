import Header from "../components/Header";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header activeHref="/about" />
      <main className="flex-1">
        <AboutHero />
      </main>
      <Footer />
    </div>
  );
}
