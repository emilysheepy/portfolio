import type { CSSProperties, ReactNode } from "react";
import { Plus } from "lucide-react";

/* Large irregular colour fields. Decorative only; never receive focus. */
const paths = {
  sweep: "M0,220 C140,40 420,-30 640,90 C820,190 900,360 1000,330 L1000,620 C760,700 520,560 330,600 C170,630 60,560 0,500 Z",
  pebble: "M210,30 C360,-10 520,60 560,210 C600,360 500,520 330,540 C160,560 20,470 10,310 C0,170 70,70 210,30 Z",
  ribbon: "M0,120 C220,20 380,260 600,170 C780,95 880,10 1000,60 L1000,150 C880,110 790,190 610,265 C380,360 210,120 0,215 Z",
  field: "M60,80 C260,0 620,30 860,120 C990,170 1010,330 930,450 C820,610 520,640 300,590 C110,545 -20,420 10,260 C25,180 20,110 60,80 Z",
  arc: "M40,500 A460,460 0 0 1 960,500 L880,500 A380,380 0 0 0 120,500 Z",
} as const;

type ShapeKind = keyof typeof paths;

export function Shape({
  kind,
  color,
  opacity = 1,
  className = "",
  style,
  viewBox,
}: {
  kind: ShapeKind | "circle";
  color: string;
  opacity?: number;
  className?: string;
  style?: CSSProperties;
  viewBox?: string;
}) {
  const vb = viewBox ?? (kind === "pebble" ? "0 0 580 560" : kind === "circle" ? "0 0 100 100" : "0 0 1000 650");
  return (
    <div className="shape-layer" aria-hidden="true">
      <svg className={`shape ${className}`} style={style} viewBox={vb} focusable="false" preserveAspectRatio="none">
        {kind === "circle" ? (
          <circle cx="50" cy="50" r="50" fill={color} opacity={opacity} />
        ) : (
          <path d={paths[kind]} fill={color} opacity={opacity} />
        )}
      </svg>
    </div>
  );
}

const illustrationSizes = {
  conversation: [800, 1000],
  "digital-learning": [1000, 667],
  discussion: [1000, 667],
  jane: [1000, 914],
  najeeb: [1000, 914],
  plan: [1000, 667],
  timer: [1000, 667],
} as const;

export function Illustration({
  name,
  alt,
  className = "",
  eager = false,
}: {
  name: keyof typeof illustrationSizes;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/${name}.webp`}
      width={illustrationSizes[name][0]}
      height={illustrationSizes[name][1]}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`illus ${className}`}
      data-testid={`img-${name}`}
    />
  );
}

export function Disclosure({
  summary,
  children,
  testId,
  defaultOpen = false,
}: {
  summary: ReactNode;
  children: ReactNode;
  testId: string;
  defaultOpen?: boolean;
}) {
  return (
    <details className="disc" open={defaultOpen} data-testid={testId}>
      <summary>
        <span className="font-display text-[1.35rem] font-medium leading-snug sm:text-[1.5rem]">{summary}</span>
        <Plus className="chev h-6 w-6 text-primary" aria-hidden="true" />
      </summary>
      <div className="disc-body">{children}</div>
    </details>
  );
}

export function ChapterOpener({
  n,
  kicker,
  title,
  id,
}: {
  n: number;
  kicker: string;
  title: string;
  id: string;
}) {
  return (
    <header className="layer reveal">
      <div className="flex items-end gap-5">
        <span className="chapter-num" aria-hidden="true">
          {n}
        </span>
        <p className="kicker pb-3">{kicker}</p>
      </div>
      <h2 id={`${id}-title`} className="display-xl mt-4 min-w-0 max-w-[16ch]">
        <span className="sr-only">Chapter {n}: </span>
        {title}
      </h2>
    </header>
  );
}
