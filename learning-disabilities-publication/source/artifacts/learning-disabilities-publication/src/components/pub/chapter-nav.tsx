import { useEffect, useRef, useState } from "react";
import { chapters } from "@/data/publication";

function revealNavFocus(link: HTMLAnchorElement) {
  requestAnimationFrame(() => {
    const nav = link.closest("nav");
    if (!nav) return;
    const item = link.getBoundingClientRect();
    const frame = nav.getBoundingClientRect();
    const gutter = 16;
    const left = item.left - frame.left - gutter;
    const right = item.right - frame.right + gutter;
    const delta = left < 0 ? left : right > 0 ? right : 0;
    // Scroll only the navigation, never the page beneath the sticky header.
    if (delta) nav.scrollBy({ left: delta, behavior: "instant" });
  });
}

export function ChapterNav() {
  const barRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = Math.max(0, doc.scrollHeight - doc.clientHeight);
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      barRef.current?.parentElement?.setAttribute("aria-valuenow", String(Math.round(p * 100)));

      const navHeight = barRef.current?.parentElement?.parentElement?.getBoundingClientRect().height ?? 0;
      const threshold = navHeight + Math.min(96, window.innerHeight * 0.16);
      let current = "";
      chapters.forEach((chapter) => {
        const element = document.getElementById(chapter.id);
        if (element && element.getBoundingClientRect().top <= threshold) current = chapter.id;
      });
      setActive((previous) => (previous === current ? previous : current));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("orientationchange", onScroll, { passive: true });
    window.visualViewport?.addEventListener("resize", onScroll, { passive: true });
    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(onScroll) : undefined;
    resizeObserver?.observe(document.documentElement);
    if (document.body) resizeObserver?.observe(document.body);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
      window.visualViewport?.removeEventListener("resize", onScroll);
      resizeObserver?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full min-w-0 max-w-full border-b border-border/70 bg-background/92 backdrop-blur-md">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl items-center gap-4 px-4 sm:px-8">
        <a href="#cover" className="hidden shrink-0 items-center gap-2 py-2 font-display text-lg font-medium md:inline-flex" data-testid="link-home">
          <Mark />
          <span>Learning Disabilities in the Workplace</span>
        </a>
        <nav aria-label="Chapters" className="nav-scroll w-0 min-w-0 max-w-full flex-1 overflow-x-auto" data-testid="chapter-navigation">
          <ol className="flex w-max min-w-full items-center gap-1 px-4 py-2 md:justify-end">
            {chapters.map((c) => {
              const isActive = active === c.id;
              return (
                <li key={c.id} className="shrink-0">
                  <a
                    href={`#${c.id}`}
                    onFocus={(event) => revealNavFocus(event.currentTarget)}
                    aria-current={isActive ? "location" : undefined}
                    data-testid={`link-nav-${c.n}`}
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-base font-semibold transition-colors ${
                      isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span className="font-display tabular-nums" aria-hidden="true">{c.n}</span>
                    <span>
                      <span className="sr-only">Chapter {c.n}{isActive ? ", current chapter: " : ": "}</span>
                      {c.short}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
      <div
        className="h-1 w-full bg-secondary"
        role="progressbar"
        aria-label="Reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
      >
        <div ref={barRef} className="h-full origin-left bg-accent" style={{ transform: "scaleX(0)" }} />
      </div>
    </header>
  );
}

export function Mark() {
  return (
    <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="12" cy="16" r="9" fill="hsl(var(--primary))" />
      <circle cx="20" cy="16" r="9" fill="hsl(var(--accent))" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}

/** Adds .is-in to .reveal elements as they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".pub-root");
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    let io: IntersectionObserver | undefined;
    let fallbackTimer: number | undefined;
    try {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px" },
      );
      els.forEach((el) => io?.observe(el));
      root.classList.add("reveal-ready");
      fallbackTimer = window.setTimeout(() => {
        els.forEach((el) => el.classList.add("is-in"));
        root.classList.remove("reveal-ready");
      }, 1800);
    } catch {
      els.forEach((el) => el.classList.add("is-in"));
      root.classList.remove("reveal-ready");
    }
    return () => {
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
      io?.disconnect();
      root.classList.remove("reveal-ready");
      els.forEach((el) => el.classList.add("is-in"));
    };
  }, []);
}
