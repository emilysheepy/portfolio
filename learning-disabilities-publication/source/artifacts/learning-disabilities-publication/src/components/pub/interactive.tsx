import { useRef, useState, type KeyboardEvent } from "react";
import { Lock } from "lucide-react";
import {
  analysisSteps,
  conditionExamples,
  formSections,
} from "@/data/publication";

function useRovingTabs(count: number, onSelect: (i: number) => void) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % count;
    if (e.key === "ArrowLeft") next = (i - 1 + count) % count;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = count - 1;
    if (next >= 0) {
      e.preventDefault();
      onSelect(next);
      refs.current[next]?.focus();
    }
  };
  return { refs, onKeyDown };
}

/* ---------------- Four-step explorer ---------------- */
export function StepExplorer() {
  const [active, setActive] = useState(0);
  const { refs, onKeyDown } = useRovingTabs(analysisSteps.length, setActive);

  return (
    <div className="layer" data-testid="explorer-steps">
      <div className="relative">
        {/* flowing connector */}
        <svg className="pointer-events-none absolute left-0 top-[2.1rem] hidden h-16 w-full md:block" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M60,30 C200,-10 300,70 400,30 C500,-10 600,70 700,30 C800,-10 880,50 940,30" fill="none" stroke="hsl(var(--accent))" strokeWidth="5" strokeLinecap="round" strokeDasharray="2 14" />
        </svg>
        <div role="tablist" aria-label="Four-step job requirement analysis" aria-orientation="horizontal" className="relative grid gap-3 md:grid-cols-4 md:gap-6">
          {analysisSteps.map((s, i) => (
            <button
              key={s.n}
              ref={(el) => {
                refs.current[i] = el;
              }}
              role="tab"
              id={`step-tab-${s.n}`}
              aria-selected={active === i}
              aria-controls={`step-panel-${s.n}`}
              aria-label={`Step ${s.n}: ${s.label}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              data-testid={`button-step-${s.n}`}
              className={`step-node group flex items-start gap-4 rounded-[var(--radius)] p-2 text-left md:flex-col md:items-center md:text-center ${i % 2 ? "md:mt-10" : ""}`}
            >
              <span className="step-dot grid h-[4.25rem] w-[4.25rem] shrink-0 place-items-center rounded-full border-2 border-primary bg-card font-display text-3xl font-medium text-primary">
                {s.n}
              </span>
              <span className={`text-lg font-semibold leading-snug ${active === i ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                {s.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {analysisSteps.map((step, i) => (
        <div
          key={step.n}
          id={`step-panel-${step.n}`}
          role="tabpanel"
          aria-labelledby={`step-tab-${step.n}`}
          tabIndex={0}
          hidden={active !== i}
          className="relative mt-10 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
          data-testid={active === i ? "panel-step" : undefined}
        >
          <div className="source-text">
            {step.source.map((p) => (
              <p key={p} className="mt-3 text-[1.3rem] leading-[1.6]">{p}</p>
            ))}
          </div>
          <div>
            <ul className="mt-3 space-y-2">
              {step.slide.map((p) => (
                <li key={p} className="flex gap-3 text-lg leading-snug">
                  <span aria-hidden="true" className="mt-2.5 h-2 w-5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          {step.n === 3 && (
            <div className="md:col-span-2">
              <p className="kicker mt-2">Examples: tasks, processes and environments</p>
              <ConditionTabs />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
function ConditionTabs() {
  const [active, setActive] = useState(0);
  const { refs, onKeyDown } = useRovingTabs(conditionExamples.length, setActive);
  return (
    <div className="mt-4">
      <div role="tablist" aria-label="Condition examples" aria-orientation="horizontal" className="flex flex-wrap gap-2">
        {conditionExamples.map((c, i) => (
          <button
            key={c.kind}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`cond-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`cond-panel-${i}`}
            aria-label={`${c.kind} example`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            data-testid={`button-condition-${c.kind.toLowerCase()}`}
            className={`rounded-full border-2 px-5 py-2 text-lg font-semibold transition-colors ${
              active === i ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"
            }`}
          >
            {c.kind}
          </button>
        ))}
      </div>
      {conditionExamples.map((example, i) => (
        <div
          key={example.kind}
          id={`cond-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`cond-tab-${i}`}
          tabIndex={0}
          hidden={active !== i}
          className="mt-5 grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]"
        >
          <p className="source-text text-[1.2rem] leading-[1.6]">{example.text}</p>
          <p className="font-display text-xl italic leading-snug text-primary">{example.aside}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Annotated form ---------------- */
export function AnnotatedForm() {
  const [active, setActive] = useState<string>(formSections[0].id);
  return (
    <div className="layer" data-testid="form-annotated">
      <p className="mb-6 flex items-center gap-2 text-base font-semibold text-muted-foreground">
        <Lock className="h-4 w-4" aria-hidden="true" />
        Static educational example. There are no fields to fill in; nothing is collected, stored or sent.
      </p>
      <ol className="space-y-6">
        {formSections.map((s, i) => {
          const isOpen = active === s.id;
          return (
            <li key={s.id} className="grid gap-4 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-10">
              <div className={`paper rounded-[calc(var(--radius)/2)] p-4 sm:p-8 ${i % 2 ? "lg:-rotate-[0.4deg]" : "lg:rotate-[0.3deg]"}`}>
                <div className="flex items-start justify-between gap-4">
                  <h4 className={`min-w-0 leading-[1.25] ${i === 0 ? "font-display text-2xl sm:text-3xl" : "text-xl font-bold"}`}>{s.title}</h4>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`note-${s.id}`}
                    onClick={() => setActive(isOpen ? "" : s.id)}
                    data-testid={`button-annotation-${s.id}`}
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-xl font-medium transition-colors ${
                      isOpen ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <span aria-hidden="true">{i + 1}</span>
                    <span className="sr-only">{isOpen ? "Hide" : "Show"} annotation for {s.title}</span>
                  </button>
                </div>
                <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {s.fields.map((f) => (
                    <div key={f} className={f.length > 45 ? "sm:col-span-2" : ""}>
                      <dt className="text-base text-muted-foreground">{f}</dt>
                      <dd className="mt-3">
                        <span className="rule-line block" aria-hidden="true" />
                        <span className="sr-only">Blank example field</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div role="note" id={`note-${s.id}`} hidden={!isOpen} aria-label={`Annotation ${i + 1}`} className="relative self-center lg:pl-6">
                <span aria-hidden="true" className="absolute -left-4 top-6 hidden h-0.5 w-10 bg-accent lg:block" />
                <p className="kicker">What to include</p>
                <ul className="mt-3 space-y-3">
                  {s.annotation.map((a) => (
                    <li key={a} className="source-text text-lg leading-[1.55]">{a}</li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}