import { danielEvaluation, danielScenario, danielTakeaway } from "@/data/publication";
import { Illustration, Shape } from "./primitives";

export function DanielExample() {
  return (
    <section id="daniel-example" aria-labelledby="daniel-title" className="layer mt-24">
      <header className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="reveal">
          <p className="kicker">Worked example</p>
          <h3 id="daniel-title" className="display-lg mt-3">Daniel's workplace training</h3>
          <div className="mt-6 max-w-[62ch] space-y-4 text-lg leading-[1.65]">
            {danielScenario.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <figure className="reveal relative mx-auto w-full max-w-md">
          <Shape kind="pebble" color="hsl(var(--accent))" opacity={0.45} className="inset-[8%] h-[84%] w-[84%]" />
          <div className="relative z-[2]">
            <Illustration name="najeeb" alt="Daniel reviewing workplace training materials at his desk." />
          </div>
        </figure>
      </header>

      <div className="mt-14 sm:mt-20">
        <h4 className="display-md reveal">Applying the five criteria</h4>
        <ol role="list" className="mt-8 list-none divide-y divide-primary/20 border-y border-primary/20" data-testid="daniel-evaluation">
          {danielEvaluation.map((criterion, index) => (
            <li id={`daniel-${criterion.id}`} key={criterion.id} className="reveal grid scroll-mt-28 gap-5 py-8 sm:py-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
              <div className="flex items-baseline gap-5 sm:gap-6">
                <span className="shrink-0 font-display text-5xl leading-none text-primary sm:text-6xl" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h5 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] font-medium leading-[1.25]">
                  <span className="sr-only">Criterion {index + 1}: </span>
                  {criterion.title}
                </h5>
              </div>
              <div className="max-w-[65ch]">
                <p className="font-display text-[1.35rem] font-medium leading-[1.4] sm:text-2xl">{criterion.question}</p>
                <p className="mt-4 text-lg leading-[1.65]">{criterion.explanation}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="reveal mt-10 max-w-[70ch] sm:mt-12">
        <h4 className="kicker">Takeaway</h4>
        <p className="mt-4 font-display text-[clamp(1.35rem,2.2vw,1.65rem)] leading-[1.5]">{danielTakeaway}</p>
      </div>
    </section>
  );
}
