import { useEffect, useRef } from "react";
import { RotateCcw } from "lucide-react";
import { questions, isCorrect, type Answer } from "@/data/questions";

type Props = { answers: Record<number, Answer>; onRetry: () => void };

export function Results({ answers, onRetry }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => { headingRef.current?.focus(); }, []);
  const graded = questions.filter((q) => q.kind !== "reflection");
  const score = graded.filter((q) => isCorrect(q, answers[q.id])).length;

  return (
    <div className="pt-6 md:pt-12">
      <section className="rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12">
        <h1 ref={headingRef} tabIndex={-1} className="text-3xl font-semibold leading-tight">Self-assessment results</h1>
        <p className="mt-5 text-6xl font-semibold" data-testid="text-score">{score}/{graded.length}</p>
        <p className="mt-4 max-w-[65ch] text-xl leading-[1.6]">Questions 1–3 are scored using the guide’s answers. Questions 4–5 are written reflections for comparison with the original sample responses and comments; they are not automatically graded.</p>
        <button type="button" onClick={onRetry} data-testid="button-retry" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent min-h-[2.75rem] px-6 py-3 text-lg font-semibold text-accent-foreground">
          <RotateCcw className="h-4 w-4" aria-hidden="true" />Start over
        </button>
      </section>
      <h2 className="mt-12 text-2xl font-semibold">Answer review</h2>
      <ol className="mt-6 space-y-5">
        {questions.map((q) => (
          <li key={q.id} data-testid={`card-review-${q.id}`} className="rounded-2xl border border-card-border bg-card p-5 sm:p-6 text-xl">
            <p className="text-base font-semibold text-primary">{q.source} · {q.kind === "reflection" ? "Reflection" : isCorrect(q, answers[q.id]) ? "Correct" : "Incorrect"}</p>
            <h3 className="mt-3 text-xl font-semibold leading-snug">{q.prompt}</h3>
            {q.scenario && <p className="mt-4 leading-[1.6] max-w-[65ch] whitespace-pre-wrap">{q.scenario}</p>}
            <p className="mt-5 font-semibold">Your response</p>
            <p className="mt-2 leading-[1.6] max-w-[65ch] whitespace-pre-wrap">{q.kind === "reflection" ? answers[q.id]?.response : q.choices.filter((c) => answers[q.id]?.selected.includes(c.id)).map((c) => c.text).join("\n")}</p>
            <h4 className="mt-6 font-semibold">{q.kind === "reflection" ? "Sample responses, with comments:" : "Feedback on your response"}</h4>
            {q.choices.filter((choice) => q.kind === "reflection" || answers[q.id]?.selected.includes(choice.id)).map((choice) => <section key={choice.id} className="mt-4 border-t border-border pt-4">
              <p className="font-medium leading-[1.6] max-w-[65ch] whitespace-pre-wrap">{choice.text}</p>
              <p className="mt-3 leading-[1.6] max-w-[65ch] whitespace-pre-wrap">{choice.feedback}</p>
            </section>)}
          </li>
        ))}
      </ol>
    </div>
  );
}
