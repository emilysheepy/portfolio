import { ArrowRight, Clock, ListChecks, MessageSquareText } from "lucide-react";
import { questions } from "@/data/questions";

export function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="grid gap-x-12 pt-6 md:pt-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
      <div className="rise mb-6 min-w-0 lg:col-span-2 lg:col-start-1 lg:row-start-1">
        <p className="text-base font-semibold uppercase tracking-[0.12em] text-primary">
          Check your understanding
        </p>
        <h1
          className="font-display mt-4 text-[2.25rem] font-medium leading-[1.15] sm:text-5xl lg:text-[3.25rem] break-words"
          data-testid="text-intro-title"
        >
          Supporting employees with{" "}
          <span className="hero-highlight italic sm:whitespace-nowrap">learning disabilities</span>
        </h1>
      </div>
      <div className="rise min-w-0 lg:col-start-1 lg:row-start-2">
        <p className="max-w-xl text-xl leading-[1.6] text-muted-foreground max-w-[60ch]">
          As a manager, you play an important role in helping employees with learning disabilities succeed in the workplace.
        </p>
        <p className="mt-5 text-xl leading-[1.6] text-muted-foreground max-w-[60ch]">
          Test your knowledge and apply it to realistic workplace situations. This self-assessment gives you an opportunity to:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-xl leading-[1.6] text-muted-foreground max-w-[60ch]">
          <li>Check your understanding of learning disabilities and the legal protections afforded to employees.</li>
          <li>Review the steps involved in identifying workplace barriers.</li>
          <li>Recommend and evaluate workplace accommodations.</li>
          <li>Reflect on your responsibilities to protect employees from discrimination and respect their privacy.</li>
        </ul>
      </div>
      <div className="rise min-w-0 lg:col-start-1 lg:row-start-3">
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-base">
          <li className="flex items-center gap-2"><ListChecks className="h-4 w-4 text-primary" aria-hidden="true" />{questions.length} questions</li>
          <li className="flex items-center gap-2"><MessageSquareText className="h-4 w-4 text-primary" aria-hidden="true" />Feedback provided</li>
          <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" aria-hidden="true" />Self-paced</li>
        </ul>
      </div>
      <div className="rise min-w-0 lg:col-start-1 lg:row-start-4">
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
      <div className="rise relative mx-auto mt-10 w-full max-w-lg lg:col-start-2 lg:[grid-row:2/4] lg:mt-0 lg:min-h-0 lg:max-w-none lg:self-stretch" style={{ animationDelay: "120ms" }}>
        <img
          src={`${import.meta.env.BASE_URL}images/warm-office-conversation.webp`}
          alt="Two colleagues discussing their work together at a table in a warm, sunlit office."
          width={800}
          height={1000}
          fetchPriority="high"
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_-25px_hsl(228_32%_17%/.3)] lg:absolute lg:inset-0 lg:h-full! lg:aspect-auto"
        />
      </div>
    </div>
  );
}
