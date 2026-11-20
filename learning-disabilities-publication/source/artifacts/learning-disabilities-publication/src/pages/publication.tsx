import { useEffect } from "react";
import { ChapterNav, useReveal } from "@/components/pub/chapter-nav";
import { ChapterOne, ChapterThree, ChapterTwo, Cover } from "@/components/pub/chapters-a";
import { ChapterFive, ChapterFour, ChapterSix, Closing, Footer } from "@/components/pub/chapters-b";

export default function Publication() {
  useReveal();

  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="a11y-shell pub-root flex min-h-[100dvh] flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:inline-flex focus:items-center focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <ChapterNav />
      <main id="main" tabIndex={-1} className="flex-1">
        <article aria-labelledby="cover-title">
          <Cover />
          <ChapterOne />
          <ChapterTwo />
          <ChapterThree />
          <ChapterFour />
          <ChapterFive />
          <ChapterSix />
        </article>
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
