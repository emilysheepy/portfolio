import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { type Answer, type Question } from "@/data/questions";
import { cn } from "@/lib/utils";
import { AnswerFeedback } from "@/components/quiz/answer-feedback";

type Props = {
  question: Question;
  index: number;
  total: number;
  onSubmit: (answer: Answer) => void;
  submittedAnswer?: Answer;
  onNext: () => void;
};

export function QuestionCard({ question, index, total, onSubmit, submittedAnswer, onNext }: Props) {
  const [selected, setSelected] = useState<string[]>(submittedAnswer?.selected ?? []);
  const [response, setResponse] = useState(submittedAnswer?.response ?? "");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const locked = !!submittedAnswer;
  const reflection = question.kind === "reflection";
  const ready = reflection ? !!response.trim() : selected.length > 0;

  useEffect(() => { headingRef.current?.focus(); }, [question.id]);
  useEffect(() => { if (locked) feedbackRef.current?.focus(); }, [locked]);

  return (
    <article className="rise mt-8">
      <p className="text-base font-semibold uppercase tracking-[0.1em] text-primary">
        {question.topic} · {question.source}
      </p>
      <h1 ref={headingRef} tabIndex={-1} className="mt-5 text-left text-2xl font-semibold leading-[1.25] whitespace-normal break-normal [letter-spacing:normal] [word-spacing:normal] [text-wrap:wrap] [overflow-wrap:break-word] sm:text-[2rem]" data-testid="text-question">
        {question.prompt}
      </h1>
      {question.scenario && <p className="mt-5 rounded-2xl border-l-4 border-accent bg-card p-5 leading-relaxed whitespace-pre-wrap">{question.scenario}</p>}
      <form onSubmit={(event) => {
        event.preventDefault();
        if (ready && !locked) onSubmit({ selected, ...(reflection ? { response } : {}) });
      }}>
        <fieldset className="mt-8 min-w-0">
          <legend className={reflection ? "mb-3 font-semibold" : "sr-only"}>
            {reflection ? "Your response" : question.prompt}
          </legend>
          {reflection ? (
            <>
              <label htmlFor={`response-${question.id}`} className="sr-only">Your response</label>
              <p id={`response-instructions-${question.id}`} className="mb-4 text-base leading-relaxed text-muted-foreground">Write a few sentences or use bullet points to explain your approach. Your response will not be graded.</p>
              <textarea id={`response-${question.id}`} aria-describedby={`response-instructions-${question.id} response-help-${question.id}`} placeholder="Enter your response here…" value={response} onChange={(event) => {
                const value = event.target.value;
                setResponse(value);
                if (locked) onSubmit({ selected, response: value });
              }}
                rows={7} className="block min-h-56 w-full min-w-0 resize-y rounded-2xl border-2 border-input bg-card p-5 font-sans text-xl leading-relaxed text-foreground"
                data-testid="input-reflection" />
              <p id={`response-help-${question.id}`} className="mt-3 text-base leading-relaxed text-muted-foreground">Your response is not saved or shared.</p>
            </>
          ) : (
            <>
              <p id={`selection-instructions-${question.id}`} className="mb-4 text-base leading-relaxed text-muted-foreground">{question.kind === "multi" ? "Select all that apply." : "Select one answer."}</p>
              <div className="grid gap-5">
                {question.choices.map((choice, i) => (
                  <label key={choice.id} className={cn("flex min-h-14 min-w-0 items-start gap-4 rounded-2xl border-2 p-5 text-xl leading-relaxed has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-4 has-[:focus-visible]:outline-primary", locked ? "cursor-default" : "cursor-pointer", selected.includes(choice.id) ? "border-primary bg-primary/5" : "border-input bg-card")}>
                    <input type={question.kind === "multi" ? "checkbox" : "radio"} name={`q-${question.id}`} value={choice.id}
                      aria-describedby={`selection-instructions-${question.id}`}
                      checked={selected.includes(choice.id)}
                      disabled={locked}
                      onChange={() => setSelected((previous) => question.kind === "single" ? [choice.id] : previous.includes(choice.id) ? previous.filter((id) => id !== choice.id) : [...previous, choice.id])}
                      className="mt-1.5 h-6 w-6 shrink-0 accent-[hsl(var(--primary))]"
                      data-testid={`radio-${question.id}-${choice.id}`} />
                    <span className="min-w-0 leading-relaxed whitespace-pre-wrap [overflow-wrap:anywhere]">{question.kind === "single" && `${String.fromCharCode(65 + i)}. `}{choice.text}</span>
                  </label>
                ))}
              </div>
            </>
          )}
        </fieldset>
        {!locked && <button type="submit" disabled={!ready} data-testid="button-submit" className="mt-8 min-h-12 max-w-full rounded-full bg-primary px-7 py-3.5 text-xl font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60">
          {reflection ? "Show sample responses" : "Submit answer"}
        </button>}
      </form>
      <div aria-live="polite">
        {locked && <div ref={feedbackRef} tabIndex={-1} data-testid="panel-feedback" className="mt-8 min-w-0 rounded-2xl border border-card-border bg-card p-5 sm:p-6 [overflow-wrap:anywhere]">
          <AnswerFeedback question={question} answer={submittedAnswer} headingLevel={2} allowRevision={reflection} />
          <button type="button" onClick={() => {
            if (reflection) onSubmit({ selected, response });
            onNext();
          }} data-testid="button-next" className="mt-8 inline-flex min-h-12 max-w-full items-center gap-3 rounded-full bg-primary px-6 py-3 text-xl font-semibold text-primary-foreground">
            {index === total - 1 ? "See my results" : "Next question"}<ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>}
      </div>
    </article>
  );
}
