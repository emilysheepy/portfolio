import { cn } from "@/lib/utils";

type Props = { total: number; current: number; results: (boolean | null)[] };

export function ProgressTrack({ total, current, results }: Props) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-base">
        <span className="font-medium" data-testid="text-progress">
          Question {current + 1} <span className="text-muted-foreground">of {total}</span>
        </span>
        <span className="text-muted-foreground">{results.filter((r) => r !== null).length} answered</span>
      </div>
      <ol className="mt-3 grid gap-1.5" style={{ gridTemplateColumns: `repeat(${total}, 1fr)` }} aria-hidden="true">
        {Array.from({ length: total }).map((_, i) => (
          <li
            key={i}
            className={cn(
              "h-2 rounded-full transition-colors duration-500",
              results[i] !== null ? "bg-primary" : i === current ? "bg-accent" : "bg-[hsl(var(--input)/0.45)]",
            )}
          />
        ))}
      </ol>
    </div>
  );
}
