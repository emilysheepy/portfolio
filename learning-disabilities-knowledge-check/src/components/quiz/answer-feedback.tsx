import type { Answer, Question, ResponseClassification } from "@/data/questions";
import { CircleAlert, CircleCheck, CircleX } from "lucide-react";

const classificationHeaders: Record<ResponseClassification, string> = {
  "Problematic response": "#F6E3E1",
  "Partially developed response": "#F8ECD6",
  "Reasonable response": "#E4EAF5",
  "Well-developed response": "#E3EFE4",
};

const correctnessHeaders = {
  "Correct answer": { color: "#E3EFE4", Icon: CircleCheck },
  "Incorrect answer": { color: "#F6E3E1", Icon: CircleX },
  "Correct answer you missed": { color: "#F8ECD6", Icon: CircleAlert },
};

type Props = {
  question: Question;
  answer?: Answer;
  headingLevel: 2 | 4;
  allowRevision?: boolean;
};

export function AnswerFeedback({ question, answer, headingLevel, allowRevision = false }: Props) {
  const reflection = question.kind === "reflection";
  const selected = answer?.selected ?? [];
  const Heading = headingLevel === 2 ? "h2" : "h4";
  const EntryHeading = headingLevel === 2 ? "h3" : "h5";
  if (!reflection && !answer) return null;
  const choices = question.choices.filter(
    (choice) => reflection || selected.includes(choice.id) || question.correctIds.includes(choice.id),
  );
  if (question.kind === "single") {
    choices.sort((a, b) => Number(selected.includes(b.id)) - Number(selected.includes(a.id)));
  }

  return (
    <>
      <Heading className={headingLevel === 2 ? "text-2xl font-semibold leading-relaxed" : "mt-6 font-semibold"}>
        {reflection ? "Compare your approach" : "Feedback on your response"}
      </Heading>
      {reflection && <p className="mt-3 leading-[1.6] max-w-[65ch]">Review the sample responses below. Consider the strengths and limitations of each approach.</p>}
      {choices.map((choice, index) => {
        if (reflection) {
          return (
            <section key={choice.id} className="mt-6 overflow-hidden rounded-2xl border border-card-border bg-card text-foreground" data-testid={`feedback-${question.id}-${choice.id}`}>
              <header className="bg-[#F0EFEB] px-5 py-4 text-[#242735] sm:px-6" style={choice.classification ? { backgroundColor: classificationHeaders[choice.classification] } : undefined}>
                <EntryHeading className="font-semibold leading-[1.25]">
                  {choice.classification ?? `Sample response ${index + 1}`}
                </EntryHeading>
              </header>
              <div className="p-5 sm:p-6">
                <p className="font-medium leading-[1.6] max-w-[65ch] whitespace-pre-wrap">{choice.text}</p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="font-semibold">Analysis</p>
                  <p className="mt-3 leading-[1.6] max-w-[65ch] whitespace-pre-wrap" data-testid="text-feedback">{choice.feedback}</p>
                </div>
              </div>
            </section>
          );
        }
        const label = !question.correctIds.includes(choice.id)
            ? "Incorrect answer"
            : question.kind === "single" || selected.includes(choice.id)
              ? "Correct answer"
              : "Correct answer you missed";
        const { color, Icon } = correctnessHeaders[label];
        return (
          <section key={choice.id} className="mt-6 overflow-hidden rounded-2xl border border-card-border bg-card text-foreground" data-testid={`feedback-${question.id}-${choice.id}`}>
            <header className="px-5 py-4 text-[#242735] sm:px-6" style={{ backgroundColor: color }}>
              <EntryHeading className="flex items-start gap-3 font-semibold leading-[1.25]">
                <Icon className="h-6 w-6 shrink-0" aria-hidden="true" focusable="false" />
                <span>{label}</span>
              </EntryHeading>
            </header>
            <div className="p-5 sm:p-6">
              <p className="font-medium leading-[1.6] max-w-[65ch] whitespace-pre-wrap">{choice.text}</p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="leading-[1.6] max-w-[65ch] whitespace-pre-wrap" data-testid="text-feedback">{choice.feedback}</p>
              </div>
            </div>
          </section>
        );
      })}
      {reflection && allowRevision && <p className="mt-6 leading-[1.6]">You can revise your response before continuing.</p>}
    </>
  );
}
