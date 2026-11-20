import { ArrowUpRight } from "lucide-react";
import { chapters, KNOWLEDGE_CHECK_URL } from "@/data/publication";
import { ChapterOpener, Disclosure, Illustration, Shape } from "./primitives";
import { AnnotatedForm, StepExplorer } from "./interactive";
import { DanielExample } from "./daniel-example";
import { Mark } from "./chapter-nav";

const C = (n: number) => chapters[n - 1];

/* ======================= CHAPTER 4 ======================= */
const respondSteps = [
  "Discuss specific workplace difficulties respectfully.",
  "Invite the employee to describe their experience.",
  "Explain rights, responsibilities and privacy protections.",
  "Discuss support options and the accommodation process.",
  "Analyse the essential requirements and barriers.",
  "Develop and review an accommodation plan together.",
];

export function ChapterFour() {
  const c = C(4);
  return (
    <section id={c.id} aria-labelledby={`${c.id}-title`} className="relative pb-32 pt-28">
      <Shape kind="pebble" color="hsl(var(--accent))" opacity={0.32} className="-right-[12vw] top-[16rem] h-[52rem] w-[62vw] min-w-[22rem]" />
      <Shape kind="ribbon" color="hsl(var(--primary))" opacity={0.08} className="-left-10 bottom-[-6rem] h-[18rem] w-[110vw]" viewBox="0 0 1000 360" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ChapterOpener n={4} id={c.id} kicker="Chapter four · Jane and George" title={c.title} />

        <div className="layer mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="reading-zone reveal order-2 lg:order-1">
            <p className="kicker">Case study</p>
            <p className="mt-4 font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.3]">
              Jane is a good employee overall, but seems to struggle with remembering names, listening and following directions when she is first assigned work. When Jane reviews her notes with her manager, they are inaccurate.
            </p>
            <div className="mt-8">
              <p className="text-lg font-semibold">What workplace difficulties can George discuss with Jane?</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {["Remembering names", "Following instructions", "Clarifying instructions that seem to change", "Recording information accurately"].map((s) => (
                  <li key={s} className="rounded-full bg-card px-4 py-1.5 text-lg shadow-[0_2px_0_hsl(var(--border))]">{s}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <Disclosure summary="What do these details suggest?" testId="disclosure-jane">
                <p className="source-text text-lg leading-[1.6]">Jane appears to be having difficulty following verbal instructions and recording information accurately. There are several possible explanations, including auditory processing difficulties, hearing loss, attention or memory difficulties, or the way instructions are communicated. Rather than making assumptions about the cause, George should discuss the specific workplace challenges with Jane and work with her to identify appropriate supports.</p>
                <p className="mt-4 text-lg font-semibold">George can begin with observations, ask Jane what would help and explore supports without asking her to identify a diagnosis.</p>
              </Disclosure>
            </div>
          </div>
          <figure className="reveal order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
            <Illustration name="jane" alt="Jane at her desk, looking thoughtfully at her work and written instructions." />
          </figure>
        </div>

        <div className="layer reveal mt-24">
          <h3 className="display-lg max-w-[20ch]">Responding to workplace difficulties</h3>
          <ol className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {respondSteps.map((s, i) => (
              <li key={s} className="flex gap-4 border-t-2 border-primary/20 pt-4">
                <span className="font-display text-4xl font-medium leading-none text-accent" aria-hidden="true">{i + 1}.</span>
                <span className="text-lg leading-snug">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="layer mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="reveal space-y-2">
            <p className="kicker">Discussing difficulties respectfully</p>
            <Disclosure summary="Step 1. A non-confrontational approach" testId="disclosure-step1" defaultOpen>
              <div className="source-text space-y-3 text-lg leading-[1.6]">
                <p>When you notice that an employee is having difficulty with particular job tasks, begin by identifying the specific challenges and discussing them with the employee. Avoid assuming that the difficulties are caused by a learning disability or another medical condition.</p>
                <p>Describe what you have observed, not what you think the cause might be. Avoid judgemental labels or assigning a diagnosis. Ask about the tasks, instructions and working conditions that may be creating barriers.</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Select a private, appropriate time and location.</li>
                  <li>Describe specific difficulties with job tasks.</li>
                  <li>Share information and listen to the employee's perspective.</li>
                  <li>Involve the employee in identifying helpful supports.</li>
                  <li>Use respectful, non-judgemental language.</li>
                </ul>
              </div>
            </Disclosure>
            <Disclosure summary="Step 2. Using the employee's own words" testId="disclosure-step2">
              <div className="source-text space-y-3 text-lg leading-[1.6]">
                <p className="font-semibold">Why should you ask the employee to describe their issues in their own words?</p>
                <p>Assuming a diagnosis can make a respectful conversation more difficult and may prevent you from understanding the employee's experience. Ask which situations are difficult, what they have already tried and what changes might help. The employee is an important source of information about their strengths, barriers and support needs.</p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Do not attempt to diagnose a learning disability.</li>
                  <li>Avoid assumptions and stigma.</li>
                  <li>Respect the employee's privacy.</li>
                  <li>Listen to what has and has not worked in the past.</li>
                </ul>
                <p>You can discuss workplace barriers without requiring the employee to disclose a particular diagnosis. If supporting information is necessary for an accommodation process, explain why it is needed and focus on functional limitations and support needs.</p>
              </div>
            </Disclosure>
            <Disclosure summary="Different experiences of disclosure" testId="disclosure-experiences">
              <div className="source-text space-y-3 text-lg leading-[1.6]">
                <p>People who have learning disabilities may come to your workplace with a wide variety of experiences.</p>
                <p>Some individuals may not wish to officially disclose their learning disabilities due to past experiences.</p>
                <p>Some employees may be exploring the reasons for a difficulty; others may already know which supports help. Offer information about available workplace resources without pressuring them to seek or share a diagnosis.</p>
                <p>Employees may want support from a representative or another trusted person to describe their needs, understand the process or complete required forms. Explain the available options and ask what assistance would be useful.</p>
              </div>
            </Disclosure>
          </div>

          <div role="note" className="reveal relative self-start rounded-[2rem] bg-primary p-7 text-primary-foreground sm:p-9 lg:mt-12" aria-labelledby="privacy-title">
            <p className="kicker !text-accent">Privacy</p>
            <h3 id="privacy-title" className="display-md mt-2">Confidential, whatever route they choose</h3>
            <p className="mt-4 text-lg leading-[1.6]">
              An employee may not wish to commit to a formal accommodation process because of the extra steps required; they may not wish to officially disclose their condition to the employer, or even seek professional guidance at all.
            </p>
            <p className="mt-4 text-lg leading-[1.6]">
              Explain how accommodation information will be kept confidential. Limit access to people who need the information to arrange or implement support, and share only what is necessary. Keep accommodation records separate from general personnel records and follow applicable privacy requirements.
            </p>
            <p className="mt-4 text-lg leading-[1.6] text-primary-foreground/90">
              For example, JimBob needs to attend a day-long training session to learn to use an assistive device. A colleague arranging shift coverage may need to know when he will be away, but not his diagnosis or treatment details. JimBob can choose whether to share more about his experience.
            </p>
          </div>
        </div>

        <div className="layer reveal mt-24" data-anchor id="four-steps">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-end">
            <div>
              <p className="kicker">Step 5 · Analyzing job requirements</p>
              <h3 className="display-lg mt-3">A four-step job requirements analysis</h3>
              <p className="mt-4 max-w-[58ch] text-lg leading-[1.6]">
                The next step is to work closely with the employee to figure out exactly what parts of their job are causing the most difficulty.
              </p>
              <p className="mt-3 text-base text-muted-foreground">Select a step, or use the arrow keys, to read its explanation.</p>
            </div>
            <figure className="mx-auto w-48 sm:w-60 lg:-mb-10 lg:ml-auto">
              <Illustration name="timer" alt="" />
            </figure>
          </div>
          <div className="mt-10">
            <StepExplorer />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================= CHAPTER 5 ======================= */
const criteria = [
  "Is it safe?",
  "Are there other solutions that require less additional training?",
  "What will it cost, and what resources are available?",
  "How will it affect coworkers' tasks and safety?",
  "Does it involve union representation or collectively agreed job requirements?",
];

export function ChapterFive() {
  const c = C(5);
  return (
    <section id={c.id} aria-labelledby={`${c.id}-title`} className="relative bg-secondary/55 pb-32 pt-28">
      <Shape kind="sweep" color="hsl(var(--primary))" opacity={0.12} className="-right-[6vw] -top-40 h-[30rem] w-[60vw]" />
      <Shape kind="circle" color="hsl(var(--chart-3))" opacity={0.16} className="-left-56 top-[60rem] h-[36rem] w-[36rem]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ChapterOpener n={5} id={c.id} kicker="Chapter five · Weighing alternatives" title={c.title} />

        <div className="layer mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="reveal">
            <h3 className="display-md">Step 6. Developing an accommodation plan</h3>
            <div className="source-text mt-4 text-lg leading-[1.6]">
              <p>Identify potential accommodations for each task, process or work environment. Consider the employee's needs and the essential duties before comparing options.</p>
              <p className="mt-3 font-semibold">Draw on:</p>
              <ul className="mt-1 list-disc space-y-1 pl-6">
                <li>The employee's suggestions and experience.</li>
                <li>Relevant professional advice where needed.</li>
                <li>Reliable accommodation resources.</li>
              </ul>
            </div>
          </div>
          <div className="reveal">
            <h3 className="display-md">Choosing accommodations</h3>
            <p className="mt-4 text-lg leading-[1.6]">Use these questions to compare practical options. They are not a separate legal test for undue hardship. Do not reject an accommodation simply because others prefer a different arrangement.</p>
            <ol className="mt-5 space-y-4">
              {criteria.map((q, i) => (
                <li key={q} className="grid grid-cols-[3rem_1fr] items-baseline border-b border-primary/15 pb-3">
                  <span className="font-display text-3xl text-primary" aria-hidden="true">{i + 1}</span>
                  <span className="font-display text-[1.35rem] leading-snug">{q}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <DanielExample />

        <div className="layer reveal mt-20 grid gap-6 border-t border-primary/20 pt-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
          <p className="kicker">Additional resources</p>
          <div>
            <dl className="grid gap-6">
              {[
                ["Canadian Human Rights Commission", "The Canadian Human Rights Commission provides publications, tools and resources to help employers understand their responsibilities in the accommodation process.", "https://www.chrc-ccdp.gc.ca/resources/publications/workplace-accommodation-guide"],
                ["Learning Disabilities Association of Canada", "Explore information about learning disabilities, including definitions and frequently co-occurring conditions.", "https://www.ldac-acta.ca/official-definition-of-learning-disabilities"],
                ["Job Accommodation Network", "Explore practical accommodation ideas for employees with learning disabilities. This is a U.S. resource; its legal guidance does not replace Canadian requirements.", "https://askjan.org/disabilities/Learning-Disability.cfm"],
              ].map(([n, d, href]) => (
                <div key={n}>
                  <dt className="font-display text-xl font-medium"><a className="text-link" href={href}>{n}</a></dt>
                  <dd className="mt-1 text-base leading-[1.55]">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ======================= CHAPTER 6 ======================= */
const docSteps = [
  "Record meeting dates and the people present.",
  "Summarize the job's essential requirements.",
  "Include relevant supporting information only when necessary to understand functional needs.",
  "Specify the agreed accommodations and how they will be implemented.",
  "Confirm that the identified task, process and environmental barriers are addressed.",
  "Confirm the employee's agreement and set review dates.",
  "Store the plan securely, separate from general personnel records.",
];

export function ChapterSix() {
  const c = C(6);
  return (
    <section id={c.id} aria-labelledby={`${c.id}-title`} className="relative pb-32 pt-28">
      <Shape kind="field" color="hsl(var(--accent))" opacity={0.22} className="-left-[14vw] top-[52rem] h-[80rem] w-[92vw]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:items-end">
          <ChapterOpener n={6} id={c.id} kicker="Chapter six · Documenting and reviewing" title={c.title} />
          <figure className="reveal mx-auto w-full max-w-xs lg:max-w-sm">
            <Illustration name="plan" alt="An accommodation plan document beside a calendar and a pen." />
          </figure>
        </div>

        <div className="layer reveal mt-12 max-w-[50ch] lg:ml-[18%]">
          <p className="font-display text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.3]">
            Proper documentation of any accommodations will help you and the employee monitor whether those changes are implemented and whether they are effective.
          </p>
        </div>

        <div className="layer mt-16 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="reveal">
            <h3 className="display-md">Documenting the plan</h3>
            <ol className="mt-6 space-y-4">
              {docSteps.map((s, i) => (
                <li key={s} className="grid grid-cols-[3rem_1fr] gap-2">
                  <span className="font-display text-3xl font-medium text-accent" aria-hidden="true">{i + 1}.</span>
                  <div className="text-lg leading-snug">
                    {s}
                    {i === 3 && (
                      <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                        <li>Identify who will make each change.</li>
                        <li>Identify who will provide any assistance or training.</li>
                        <li>List the equipment required.</li>
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal space-y-10">
            <div>
              <h3 className="display-md">Monitoring and review</h3>
              <ul className="source-text mt-4 space-y-3 text-lg leading-[1.55]">
                <li>Work with the employee to develop a plan to monitor any approved accommodation to determine its effectiveness, or to modify the accommodation if necessary.</li>
                <li>Set a review date and a contact for questions. Adjust the plan if the employee's needs or job requirements change.</li>
                <li>If an accommodation is refused on undue hardship grounds, provide written reasons supported by evidence and explain the available review process.</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-primary p-7 text-primary-foreground">
              <p className="font-display text-xl leading-snug">Does implementing the plan require cooperation from supervisors or coworkers?</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-base font-bold uppercase tracking-[0.1em] text-accent">Yes</p>
                  <p className="mt-1 text-lg leading-snug">Discuss with the employee what needs to be shared and with whom. With their consent, explain the relevant work arrangements on a need-to-know basis, without unnecessary medical details.</p>
                </div>
                <div>
                  <p className="text-base font-bold uppercase tracking-[0.1em] text-accent">No</p>
                  <p className="mt-1 text-lg leading-snug">Implement the agreed accommodation and review its effectiveness with the employee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="layer reveal mt-24">
          <div className="max-w-[60ch]">
            <p className="kicker">Annotated example</p>
            <h3 className="display-lg mt-3">Reading the request form</h3>
            <p className="mt-4 text-lg leading-[1.6] text-muted-foreground">
              Explore the sections of an accommodation request form. Select a numbered marker to learn what to record and why it matters.
            </p>
          </div>
          <div className="mt-10">
            <AnnotatedForm />
          </div>
          <div className="mt-12 max-w-[62ch] source-text">
            <p className="mt-2 text-lg leading-[1.6]">
              In an actual accommodation process, explain how personal information will be collected, used, stored and shared under the applicable privacy requirements. Request only the information needed to understand functional limitations and implement support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ======================= CLOSING ======================= */
export function Closing() {
  return (
    <section id="closing" aria-labelledby="closing-title" className="on-primary relative pb-20 pt-28">
      <Shape kind="pebble" color="hsl(var(--accent))" opacity={0.85} className="-right-24 -top-20 h-[26rem] w-[26rem]" />
      <Shape kind="arc" color="hsl(var(--primary-foreground))" opacity={0.07} className="-left-40 bottom-0 h-[24rem] w-[60rem]" viewBox="0 0 1000 500" />
      <div className="layer mx-auto max-w-7xl px-5 sm:px-8">
        <p className="kicker">After reading</p>
        <h2 id="closing-title" className="display-xl mt-4 max-w-[14ch]">Put the chapters to work.</h2>
        <p className="mt-6 max-w-[52ch] text-xl leading-[1.6] text-primary-foreground/90">
          The companion knowledge check applies these ideas to realistic workplace situations, with feedback on each response.
        </p>
        <a
          href={KNOWLEDGE_CHECK_URL}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-lg font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          data-testid="link-knowledge-check"
        >
          Check your understanding
          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </a>

      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-base leading-[1.6] text-muted-foreground sm:px-8 md:flex-row md:items-start md:gap-10">
        <Mark />
        <div>
          <p>© 2012, 2026 Emily Sheepy. All rights reserved.</p>
          <p className="mt-3 max-w-[80ch]">
            This interactive publication was developed for portfolio purposes and is not intended as professional training or legal advice. For guidance on workplace accommodations, consult current legislation and qualified human resources professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
