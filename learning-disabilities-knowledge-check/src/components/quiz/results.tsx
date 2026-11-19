import { useEffect, useRef } from "react";
import { Printer, RotateCcw } from "lucide-react";
import "./results-print.css";
import { questions, isCorrect, type Answer } from "@/data/questions";
import { AnswerFeedback } from "@/components/quiz/answer-feedback";
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = { answers: Record<number, Answer>; onRetry: () => void };

export function Results({ answers, onRetry }: Props) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => { headingRef.current?.focus(); }, []);
  const graded = questions.filter((q) => q.kind !== "reflection");
  const score = graded.filter((q) => isCorrect(q, answers[q.id])).length;
  const completedReflections = questions.filter((q) => q.kind === "reflection" && !!answers[q.id]?.response?.trim()).length;

  return (
    <div className="answer-review-print pt-6 md:pt-12">
      <section className="review-summary rounded-[2rem] bg-primary p-8 text-primary-foreground sm:p-12">
        <h1 ref={headingRef} tabIndex={-1} className="text-3xl font-semibold leading-tight">Review your learning</h1>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <dt className="order-2 text-xl leading-[1.6]">Knowledge questions answered correctly</dt>
            <dd className="text-5xl font-semibold" data-testid="text-score">{score} of {graded.length}</dd>
          </div>
          <div className="flex flex-col gap-3">
            <dt className="order-2 text-xl leading-[1.6]">Written responses completed</dt>
            <dd className="text-5xl font-semibold" data-testid="text-written-completed">{completedReflections} of 2</dd>
          </div>
        </dl>
        <p className="mt-8 max-w-[65ch] text-xl leading-[1.6]">Review your answers and feedback to identify areas where you could strengthen your understanding of workplace accommodations.</p>
        <button type="button" onClick={() => window.print()} data-testid="button-print-review" className="mt-6 mr-4 inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full border-2 border-primary-foreground px-6 py-3 text-lg font-semibold text-primary-foreground">
          <Printer className="h-5 w-5 shrink-0" aria-hidden="true" />Print answer review
        </button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button type="button" data-testid="button-retry" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent min-h-[2.75rem] px-6 py-3 text-lg font-semibold text-accent-foreground">
              <RotateCcw className="h-4 w-4" aria-hidden="true" />Start over
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className="w-[calc(100%-2rem)] max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl p-6 text-xl leading-[1.6] [overflow-wrap:anywhere]">
            <AlertDialogHeader className="text-left">
              <AlertDialogTitle className="text-2xl leading-[1.25]">Restart self-assessment?</AlertDialogTitle>
              <AlertDialogDescription className="text-xl leading-[1.6]">Your current responses and progress will be cleared.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="gap-3">
              <AlertDialogCancel className="min-h-12 text-xl focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-primary">Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onRetry} className="min-h-12 text-xl focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-primary">Restart</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>
      <h2 className="mt-12 text-2xl font-semibold">Answer review</h2>
      <ol className="mt-6 space-y-5">
        {questions.map((q) => (
          <li key={q.id} data-testid={`card-review-${q.id}`} className="rounded-2xl border border-card-border bg-card p-5 sm:p-6 text-xl">
            <p className="text-base font-semibold text-primary">{q.source} · {q.kind === "reflection" ? "Reflection" : isCorrect(q, answers[q.id]) ? "Correct" : "Incorrect"}</p>
            <h3 className="mt-3 text-left text-xl font-semibold leading-[1.25] whitespace-normal break-normal [letter-spacing:normal] [word-spacing:normal] [text-wrap:wrap] [overflow-wrap:break-word]">{q.prompt}</h3>
            {q.scenario && <p className="mt-4 leading-[1.6] max-w-[65ch] whitespace-pre-wrap">{q.scenario}</p>}
            <p className="mt-5 font-semibold">Your response</p>
            <p className="mt-2 leading-[1.6] max-w-[65ch] whitespace-pre-wrap">{q.kind === "reflection" ? answers[q.id]?.response : q.choices.filter((c) => answers[q.id]?.selected.includes(c.id)).map((c) => c.text).join("\n")}</p>
            <AnswerFeedback question={q} answer={answers[q.id]} headingLevel={4} />
          </li>
        ))}
      </ol>
    </div>
  );
}
