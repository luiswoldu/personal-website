"use client";

import { useEffect, useState } from "react";
import { ABOUT } from "../content";

/**
 * Scroll-driven header: the image never scales. A fixed-size <img> sits centered
 * inside an overflow-hidden container whose dimensions animate, so the container
 * acts as a crop window closing over a stationary image. Desktop only — below the
 * md breakpoint the CSS ignores the crop vars and the image renders normally.
 */
const MAX_SCROLL = 700;
const START_WIDTH = 805;
const START_HEIGHT = 330;
const STRIP_HEIGHT = 124;

/** Fires just before the collapse completes at 0.75 so the fade overlaps its tail. */
const PARAGRAPH_THRESHOLD = 0.7;

const lerp = (from: number, to: number, t: number) => from + (to - from) * t;

export default function AboutHero() {
  const [paragraphVisible, setParagraphVisible] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const crop = document.getElementById("about-crop");
    const intro = document.getElementById("about-intro");
    if (!crop || !intro) return;

    let frame = 0;

    // Mobile has no timeline to read from, and the page may be too short to
    // scroll at all — so the paragraph reveals as it enters the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => setParagraphVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    const render = () => {
      frame = 0;
      if (!desktop.matches) return; // the observer owns the reveal below md

      const progress = Math.min(window.scrollY / MAX_SCROLL, 1);
      const full = window.innerWidth;

      let width: number;
      let height: number;

      if (progress <= 0.5) {
        // Phase 1 — grow to full bleed while flattening into a letterbox strip.
        const t = progress * 2;
        width = lerp(START_WIDTH, full, t);
        height = lerp(START_HEIGHT, STRIP_HEIGHT, t);
      } else {
        // Phase 2 — the strip closes, finishing early at 0.75. The remaining
        // scroll is deliberate dead space that lets the paragraph breathe.
        const t = Math.min((progress - 0.5) * 4, 1);
        width = full;
        height = Math.max(0, lerp(STRIP_HEIGHT, 0, t));
      }

      crop.style.setProperty("--crop-w", `${width}px`);
      crop.style.setProperty("--crop-h", `${height}px`);
      setParagraphVisible(progress >= PARAGRAPH_THRESHOLD);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    // Only one of the two mechanisms drives the reveal at a time.
    const sync = () => {
      if (desktop.matches) observer.unobserve(intro);
      else observer.observe(intro);
      render();
    };

    sync();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    desktop.addEventListener("change", sync);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      desktop.removeEventListener("change", sync);
    };
  }, []);

  return (
    <section className="px-7 pt-16 md:h-[200vh] md:px-0 md:pt-0">
      <div className="md:sticky md:top-0 md:flex md:h-screen md:items-center md:justify-center">
        <div
          id="about-crop"
          className="about-crop overflow-hidden rounded-xl md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-none"
        >
          <img
            src={ABOUT.heroImage}
            alt={ABOUT.heroAlt}
            className="about-crop-image aspect-[21/9] w-full object-cover"
          />
        </div>

        <p
          id="about-intro"
          className={`about-intro mt-[70vh] mb-24 max-w-[600px] font-serif text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.6] text-ink md:absolute md:top-1/2 md:right-0 md:left-0 md:z-20 md:mx-auto md:mt-0 md:mb-0 md:-translate-y-1/2 md:px-7 md:py-6 ${
            paragraphVisible ? "is-visible" : ""
          }`}
        >
          Hi, I&apos;m Luis.
          <br />
          <br />
          I&apos;m building{" "}
          <a
            href="https://handsforu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-opacity hover:opacity-70"
          >
            Hands
          </a>
          , your AI personal chef.
          <br />
          <br />
          This website is a creative outlet of my love for design, art,
          engineering, filmmaking, Ai and writing.
          <br />
          <br />
          Connect with me on instagram, x, linkedin, or at luiswoldu at gmail dot
          com!
        </p>
      </div>
    </section>
  );
}
