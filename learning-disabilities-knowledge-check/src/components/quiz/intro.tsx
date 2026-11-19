import { useEffect, useRef } from "react";
import { ArrowRight, Clock, ListChecks, MessageSquareText } from "lucide-react";
import { questions } from "@/data/questions";

export function Intro({ onStart }: { onStart: () => void }) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="grid items-center gap-10 pt-6 md:pt-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-12">
      <div className="rise min-w-0">
        <p className="text-base font-semibold uppercase tracking-[0.12em] text-primary">
          Check your understanding
        </p>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="font-display mt-4 text-[2.25rem] font-medium leading-[1.15] sm:text-5xl lg:text-[3.25rem] break-words"
          data-testid="text-intro-title"
        >
          Supporting employees with{" "}
          <span className="hero-highlight italic">learning disabilities</span>
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-[1.6] text-muted-foreground max-w-[60ch]">
          As a manager, you play an important role in helping employees with learning disabilities perform at their best.
        </p>
        <p className="mt-5 text-xl leading-[1.6] text-muted-foreground max-w-[60ch]">
          In this self-assessment, you'll apply your knowledge to workplace situations and assess your ability to:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-xl leading-[1.6] text-muted-foreground max-w-[60ch]">
          <li>Recognize when an employee may need additional support.</li>
          <li>Respond to accommodation needs effectively and lawfully.</li>
          <li>Work with employees to develop accommodation plans while respecting their privacy.</li>
        </ul>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-base">
          <li className="flex items-center gap-2"><ListChecks className="h-4 w-4 text-primary" aria-hidden="true" />{questions.length} questions</li>
          <li className="flex items-center gap-2"><MessageSquareText className="h-4 w-4 text-primary" aria-hidden="true" />Feedback provided</li>
          <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" aria-hidden="true" />Self-paced</li>
        </ul>

        <button
          type="button"
          onClick={onStart}
          data-testid="button-start"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-primary min-h-[2.75rem] px-7 py-4 text-lg font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_hsl(236_38%_30%/.6)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Get Started
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </div>
      <div className="rise mx-auto w-full max-w-lg lg:max-w-none" style={{ animationDelay: "120ms" }}>
        <img
          src={`${import.meta.env.BASE_URL}images/workplace-conversation.webp`}
          alt="Two colleagues discussing their work together at a table in a warm, sunlit office."
          width={800}
          height={1000}
          fetchPriority="high"
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_-25px_hsl(228_32%_17%/.3)]"
        />
      </div>
    </div>
  );
}
