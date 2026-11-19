import { useState } from "react";
import { questions, isCorrect, type Answer } from "@/data/questions";
import { Shell } from "@/components/quiz/shell";
import { Intro } from "@/components/quiz/intro";
import { ProgressTrack } from "@/components/quiz/progress-track";
import { QuestionCard } from "@/components/quiz/question-card";
import { Results } from "@/components/quiz/results";

type Stage = "intro" | "quiz" | "results";

export default function Home() {
  const [stage, setStage] = useState<Stage>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const reset = () => {
    setAnswers({});
    setIndex(0);
    setStage("intro");
  };

  const q = questions[index];

  return (
    <Shell>
      {stage === "intro" && <Intro onStart={() => setStage("quiz")} />}
      {stage === "quiz" && (
        <div className="mx-auto max-w-3xl pt-4 md:pt-8">
          <ProgressTrack
            total={questions.length}
            current={index}
            results={questions.map((x) => (answers[x.id] ? x.kind === "reflection" || isCorrect(x, answers[x.id]) : null))}
          />
          <QuestionCard
            key={q.id}
            question={q}
            index={index}
            total={questions.length}
            submittedAnswer={answers[q.id]}
            onSubmit={(answer) => setAnswers((a) => ({ ...a, [q.id]: answer }))}
            onNext={() => {
              if (index < questions.length - 1) setIndex(index + 1);
              else setStage("results");
            }}
          />
        </div>
      )}
      {stage === "results" && <Results answers={answers} onRetry={reset} />}
    </Shell>
  );
}
