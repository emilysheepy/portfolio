import { ArrowDown } from "lucide-react";
import { chapters } from "@/data/publication";
import { ChapterOpener, Disclosure, Illustration, Shape } from "./primitives";

const C = (n: number) => chapters[n - 1];

/* ======================= COVER ======================= */
export function Cover() {
  return (
    <section id="cover" aria-labelledby="cover-title" className="relative pb-24 pt-10 sm:pt-16">
      <Shape kind="field" color="hsl(var(--accent))" opacity={0.28} className="-right-[18vw] -top-24 h-[44rem] w-[70vw] min-w-[30rem]" />
      <Shape kind="circle" color="hsl(var(--primary))" opacity={0.09} className="-left-40 top-[26rem] h-[34rem] w-[34rem]" />
      <div className="layer mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end">
        <div className="reveal">
          <p className="kicker">A practical guide for managers · Six chapters</p>
          <h1 id="cover-title" className="mt-6 font-display font-medium leading-[0.98] tracking-[-0.03em] text-[clamp(3rem,8.4vw,7rem)]">
            Learning Disabilities <span className="italic">in the</span>{" "}
            <span className="hero-highlight">Workplace</span>
          </h1>
          <p className="reading-zone mt-8 max-w-[34ch] font-display text-[1.6rem] leading-[1.35] text-muted-foreground">
            Recognize workplace barriers, explore accommodation options and support employees with learning disabilities while respecting their privacy.
          </p>
          <div className="reading-zone mt-8 max-w-[58ch]">
            <p className="text-[1.25rem] leading-[1.6]">
              By the end of this guide, you will be better prepared to respond effectively and lawfully when someone in your workplace has a learning disability and needs support to perform at their best.
            </p>
          </div>
        </div>
        <figure className="reveal relative mx-auto w-full max-w-xl lg:max-w-none lg:self-center">
          <Illustration
            name="conversation"
            eager
            alt="Two women in a warm office conversation, one speaking while the other listens attentively."
          />
        </figure>
      </div>

      <div className="layer mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:mt-10">
        <div className="reveal max-w-4xl">
          <p className="kicker">What you will learn</p>
          <ul className="mt-6 grid gap-6 text-lg leading-[1.55] sm:grid-cols-2 sm:gap-10">
            <li className="flex items-start gap-4">
              <span className="shrink-0 whitespace-nowrap font-display text-4xl text-primary" aria-hidden="true">01</span>
              <span>Recognize when an employee may need support by understanding how learning disabilities can affect performance.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="shrink-0 whitespace-nowrap font-display text-4xl text-primary" aria-hidden="true">02</span>
              <span>Work with employees to develop accommodation plans while respecting their privacy.</span>
            </li>
          </ul>
          <a href="#chapter-1" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground" data-testid="link-begin">
            Begin reading <ArrowDown className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ======================= CHAPTER 1 ======================= */
export function ChapterOne() {
  const c = C(1);
  const areas = ["auditory", "visual", "communication", "expression – writing", "expression – mathematics", "motor", "temporal/organizational"];
  return (
    <section id={c.id} aria-labelledby={`${c.id}-title`} className="relative pb-32 pt-24">
      <Shape kind="sweep" color="hsl(var(--chart-3))" opacity={0.08} className="-right-[6vw] top-8 hidden h-[20rem] w-[26vw] lg:block" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ChapterOpener n={1} id={c.id} kicker="Chapter one · Understanding" title={c.title} />

        <div className="layer reveal mt-8 max-w-[64ch]">
          <blockquote>
            <p className="font-display text-[clamp(1.35rem,2.2vw,1.65rem)] font-medium leading-[1.55]">
              Learning disabilities affect the processing, acquisition, organization, retention or use of verbal or nonverbal information in people who have{" "}
              <span className="font-semibold">at least average thinking or reasoning ability.</span>
            </p>
          </blockquote>
        </div>

        <section className="layer reveal mt-16" aria-labelledby="chapter-one-related-title">
          <h3 id="chapter-one-related-title" className="display-md">Learning disabilities and related difficulties</h3>
          <div className="mt-7 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
            <div className="reading-zone max-w-[62ch]">
              <p className="text-[1.2rem] leading-[1.65]">
                A learning disability is not a measure of a person's intelligence or potential. The definition used here distinguishes specific difficulties with learning from an intellectual disability. An employee may have strong reasoning skills and still need a different way to read, record or use information at work.
              </p>
              <p className="mt-5 text-[1.2rem] leading-[1.65]">
                Learning disabilities can affect how a person processes and uses information. The following examples describe some of the difficulties an employee may experience.
              </p>
            </div>
            <div className="min-w-0">
              <dl>
                {[
                  ["Dyslexia", "can affect accurate or fluent word reading, decoding and spelling."],
                  ["Dyscalculia", "can affect understanding numbers, learning number facts and carrying out calculations."],
                  ["Auditory processing disorder", "can affect how a person interprets sounds, including speech. It is not the same as hearing loss."],
                ].map(([t, d]) => (
                  <div key={t} className="grid gap-2 border-t border-primary/25 py-4 sm:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] sm:gap-5">
                    <dt className="font-display text-xl font-medium">{t}</dt>
                    <dd className="text-lg leading-[1.55]">{d}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 max-w-[70ch] text-lg leading-[1.6]">Auditory processing disorder and learning disabilities are not interchangeable terms, although they may co-occur. Similar workplace difficulties can have different causes; a manager should not try to diagnose them.</p>
            </div>
          </div>
        </section>

        <section className="layer reveal mt-20 grid items-start gap-8 border-t border-border pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12" aria-labelledby="chapter-one-areas-title">
          <div className="max-w-[42ch]">
            <h3 id="chapter-one-areas-title" className="display-md scroll-mt-28">Information-processing areas</h3>
            <p className="mt-4 text-lg leading-[1.55] text-muted-foreground">
              Employees may experience barriers in one or more of these areas. Strengths, difficulties and support needs vary from person to person; this is not a diagnostic checklist.
            </p>
          </div>
          <ul role="list" className="grid min-w-0 gap-x-8 md:grid-cols-2" aria-label="Information-processing areas">
            {areas.map((area) => (
              <li key={area} className="min-w-0 border-t border-primary/25 py-4">
                <span className="block font-display text-lg leading-[1.5]" style={{ overflowWrap: "normal", wordBreak: "normal", hyphens: "none" }}>{area}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="layer reveal mt-20 grid items-start gap-8 border-t border-border pt-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12" aria-labelledby="chapter-one-faq-title">
          <h3 id="chapter-one-faq-title" className="display-md max-w-[16ch]">Frequently asked questions</h3>
          <div className="min-w-0">
            <div className="max-w-[72ch] border-b-[1.5px] border-border">
              <Disclosure summary="What causes learning disabilities?" testId="faq-causes">
                <p className="source-text max-w-[72ch] text-lg leading-[1.6]">
                  Learning disabilities are associated with genetic or neurobiological factors, or an injury that affects processes related to learning. They are not simply a lack of effort or motivation. Attention-deficit/hyperactivity disorder (ADHD) is a distinct condition that can co-occur with a learning disability. A manager's role is to understand workplace barriers and support needs, not to establish a medical cause.
                </p>
              </Disclosure>
              <Disclosure summary="Don't people outgrow learning disabilities?" testId="faq-outgrow">
                <div className="source-text max-w-[72ch] space-y-3 text-lg leading-[1.6]">
                  <p>Learning disabilities are lifelong, but their effects can change with the demands of the environment and the person's strengths, strategies and support.</p>
                  <p>People with learning disabilities can learn and succeed. Strategies that worked at school may need to be adjusted for new tasks, technologies or responsibilities at work.</p>
                </div>
              </Disclosure>
              <Disclosure summary="Do people with learning disabilities have below-average intelligence?" testId="faq-intelligence">
                <p className="source-text max-w-[72ch] text-lg leading-[1.6]">
                  No. The definition used in this guide describes learning difficulties in people who otherwise demonstrate at least average thinking or reasoning abilities. It distinguishes learning disabilities from intellectual disabilities. Managers should not assess an employee's intelligence or make assumptions about their abilities from a difficulty with a particular task.
                </p>
              </Disclosure>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

/* ======================= CHAPTER 2 ======================= */
const laws = [
  {
    name: "Canadian Charter of Rights and Freedoms",
    what: [
      "The Charter protects equality rights, including protection against discrimination based on mental or physical disability, in matters to which it applies.",
      "The Charter generally applies to government laws and actions, including government employment.",
    ],
    why: [
      "It does not directly govern every private-sector employment relationship. Human rights legislation provides separate protections against discrimination in employment.",
      "Managers should make recruitment and work processes accessible under the law that applies to their workplace.",
    ],
  },
  {
    name: "Canadian Human Rights Act",
    what: [
      "The Canadian Human Rights Act is federal anti-discrimination legislation. It prohibits discrimination on protected grounds, including disability, in federally regulated employment.",
      "It is not an enforcement mechanism for the Charter.",
    ],
    why: [
      "In workplaces under federal jurisdiction, employers have a duty to accommodate disability-related needs up to the point of undue hardship.",
      "Accommodation may include changing a training method or providing assistive software, depending on the employee's needs.",
    ],
  },
  {
    name: "Employment Equity Act",
    what: [
      "The Employment Equity Act requires covered employers to identify and remove employment barriers and take measures to improve equitable representation.",
      "It applies to covered federal public-sector employers and federally regulated private-sector employers with 100 or more employees. It addresses systemic barriers and representation for designated groups, including persons with disabilities.",
    ],
    why: [
      "Its requirements are distinct from the individual duty to accommodate.",
      "Simply doing business with the federal government does not, by itself, place an employer under this Act; federal contracting requirements are a separate matter.",
    ],
  },
];

export function ChapterTwo() {
  const c = C(2);
  return (
    <section id={c.id} aria-labelledby={`${c.id}-title`} className="relative pb-24 pt-24">
      <Shape kind="pebble" color="hsl(var(--accent))" opacity={0.08} className="-right-16 top-28 hidden h-[18rem] w-[18rem] lg:block" />
      <Shape kind="arc" color="hsl(var(--chart-5))" opacity={0.07} className="-left-[12rem] bottom-[-11rem] hidden h-[16rem] w-[42vw] sm:block" viewBox="0 0 1000 500" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ChapterOpener n={2} id={c.id} kicker="Chapter two · The legal context" title={c.title} />
        <div className="reading-zone layer reveal mt-10 max-w-[60ch]">
          <p className="font-display text-[1.45rem] leading-[1.5]">
            As a manager, you need to be aware that workers who have learning disabilities are guaranteed certain rights under Canadian law.
          </p>
          <p className="mt-5 text-lg leading-[1.6]">
            Start by identifying which jurisdiction regulates your workplace. The following federal laws have different purposes and do not apply in the same way to every employer.
          </p>
        </div>

        <figure className="layer reveal mt-8">
          <img
            src={`${import.meta.env.BASE_URL}images/workstations.webp`}
            width={1324}
            height={416}
            alt="Three office workstations configured with different equipment and arrangements."
            loading="lazy"
            decoding="async"
            className="mx-auto block h-auto w-full lg:w-[58%]"
          />
        </figure>

        <ol role="list" className="legal-laws reading-zone layer mt-14 space-y-12">
          {laws.map((l, i) => (
            <li key={l.name} className="legal-entry reveal">
              <article className="min-w-0">
                <header className="legal-heading grid min-w-0 grid-cols-[2.6rem_minmax(0,1fr)] items-baseline gap-x-4">
                  <p className="legal-number font-display font-medium leading-none" aria-hidden="true">{String(i + 1).padStart(2, "0")}</p>
                  <h3 id={`law-title-${i + 1}`} className="display-md min-w-0">{l.name}</h3>
                </header>
                <div className="legal-copy mt-5 grid min-w-0 gap-7 lg:grid-cols-2 lg:gap-10">
                  <section className="legal-detail min-w-0" aria-labelledby={`law-title-${i + 1} law-what-${i + 1}`}>
                    <h4 id={`law-what-${i + 1}`} className="font-display text-lg font-semibold">What it does</h4>
                    {l.what.map((paragraph) => <p key={paragraph} className="mt-3 text-lg leading-[1.65]">{paragraph}</p>)}
                  </section>
                  <section className="legal-detail min-w-0" aria-labelledby={`law-title-${i + 1} law-why-${i + 1}`}>
                    <h4 id={`law-why-${i + 1}`} className="font-display text-lg font-semibold">Why it matters at work</h4>
                    {l.why.map((paragraph) => <p key={paragraph} className="mt-3 text-lg leading-[1.65]">{paragraph}</p>)}
                  </section>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <section className="legal-practice reading-zone layer reveal mt-20" aria-labelledby="legal-practice-title">
          <h3 id="legal-practice-title" className="display-md">Applying the law at work</h3>
          <div className="legal-practice-grid mt-8 grid gap-8">
            <section className="legal-practice-item" aria-labelledby="legal-jurisdiction-title">
              <h4 id="legal-jurisdiction-title" className="font-display text-lg font-semibold">Federal, provincial and territorial law</h4>
              <p className="mt-3 max-w-[70ch] text-lg leading-[1.65]">
                Which law applies depends on whether an employer is federally, provincially or territorially regulated. Consult the human rights legislation that applies to your workplace.
              </p>
            </section>
            <section className="legal-practice-item" aria-labelledby="legal-agreement-title">
              <h4 id="legal-agreement-title" className="font-display text-lg font-semibold">Collective agreements and accommodation</h4>
              <p className="mt-3 max-w-[70ch] text-lg leading-[1.65]">
                Work with the employee, human resources and, where appropriate, their union or representative to explore suitable arrangements. Do not assume that a conflict with an existing arrangement settles the accommodation question. Seek advice about the applicable agreement and human rights obligations before deciding that an option is unavailable.
              </p>
            </section>
            <section className="legal-practice-item" aria-labelledby="legal-bfor-title">
              <h4 id="legal-bfor-title" className="font-display text-lg font-semibold">Bona fide occupational requirement</h4>
              <div className="max-w-[72ch] text-lg leading-[1.65]">
                <p className="mt-3">In federally regulated employment, an employer must demonstrate all three elements:</p>
                <ol className="mt-3 list-decimal space-y-2 pl-6">
                  <li>The standard is rationally connected to performing the job.</li>
                  <li>The employer adopted the standard with an honest, good-faith belief that it was necessary.</li>
                  <li>Accommodating workers who do not meet the standard would create undue hardship, considering health, safety and cost.</li>
                </ol>
                <p className="mt-4">This is not a checklist for automatically denying a request. Consider the individual circumstances and obtain appropriate advice.</p>
              </div>
            </section>
          </div>
          <p className="legal-disclaimer mt-10 max-w-[72ch] text-base leading-[1.6]">
            This guide provides general information, not legal advice. Please consult a qualified professional to review the circumstances of your situation.
          </p>
        </section>
      </div>
    </section>
  );
}

/* ======================= CHAPTER 3 ======================= */
const glossary = [
  { term: "reasonable accommodation", def: "The process of changing rules, practices or physical barriers in the workplace that disadvantage a qualified worker with a disability." },
  { term: "undue hardship", def: "The limit of the duty to accommodate. In federally regulated workplaces, an employer must support a claim with evidence about cost, health or safety and show that reasonable accommodation options have been exhausted. Some hardship is expected; inconvenience alone is not the test." },
  { term: "bona fide occupational requirement (BFOR)", def: "A job standard that meets the three-part test explained in Chapter 2: a rational connection to the job, adoption in good faith, and the inability to accommodate without undue hardship. It is not established by assumptions about a disability." },
];

export function ChapterThree() {
  const c = C(3);
  return (
    <section id={c.id} aria-labelledby={`${c.id}-title`} className="relative pb-32 pt-28">
      <Shape kind="field" color="hsl(var(--secondary))" opacity={1} className="-left-[8vw] top-[18rem] h-[48rem] w-[78vw]" />
      <Shape kind="circle" color="hsl(var(--accent))" opacity={0.55} className="right-[6vw] top-[30rem] hidden h-64 w-64 lg:block" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ChapterOpener n={3} id={c.id} kicker="Chapter three · Terms and roles" title={c.title} />

        <div className="layer mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <figure className="reveal relative mx-auto w-full max-w-lg">
            <Illustration name="discussion" alt="Two colleagues collaborating, reviewing a decision tree together on a clipboard." />
          </figure>
          <div className="reveal space-y-8">
            <div className="reading-zone">
              <p className="mt-2 font-display text-[1.7rem] leading-[1.35]">
                An employer provides ‘reasonable accommodation’ by changing rules, practices or physical barriers that disadvantage a qualified worker.
              </p>
              <p className="mt-4 text-lg leading-[1.6]">
                Work with the employee to agree on the equipment, training and other support needed. Clarify who will arrange each part of the plan and how it will be funded under the applicable requirements and workplace procedures.
              </p>
              <p className="mt-4 text-lg leading-[1.6]">
                Identify the essential duties before deciding whether a requirement is necessary. Assess what the employee can do with appropriate accommodation, rather than assuming that a disability prevents them from performing the job.
              </p>
            </div>
          </div>
        </div>

        <div className="layer reveal mt-20 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="reading-zone">
            <h3 className="display-md">Undue hardship</h3>
            <p className="mt-4 text-lg leading-[1.6]">
              Under the Canadian Human Rights Act, federally regulated employers must accommodate up to the point of undue hardship. The relevant factors are cost, health and safety. Other jurisdictions have their own human rights legislation; obtain advice about the rules that apply.
            </p>
            <p className="mt-4 text-lg leading-[1.6]">
              Undue hardship must be assessed case by case. An employer needs evidence that reasonable options have been exhausted and that the remaining measures would be prohibitively expensive or create undue health or safety risks.
            </p>
            <p className="mt-4 text-lg leading-[1.6]">
              Do not decide that a person cannot do a job because of a presumed disability. For a safety-sensitive role, examine the actual duties, the individual's functional abilities, the evidence about risk and possible accommodations. Seek qualified advice rather than making a categorical judgement.
            </p>
          </div>
          <div className="lg:pt-16">
            <p className="kicker">At a glance</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <p className="font-display text-2xl">Reasonable accommodation</p>
                <ul className="mt-2 space-y-1 text-lg">
                  <li>Adjust rules, practices or the physical environment.</li>
                  <li>Meet the employee's needs through a collaborative plan.</li>
                </ul>
              </div>
              <div>
                <p className="font-display text-2xl">Undue hardship</p>
                <ul className="mt-2 space-y-1 text-lg">
                  <li>Requires an individual, evidence-based assessment.</li>
                  <li>Considers cost, health and safety in federal workplaces.</li>
                  <li>Cannot be established by assumptions or inconvenience.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="layer reveal mt-20 lg:mr-[20%]">
          <p className="kicker">Glossary · Key terms</p>
          <div className="mt-3 border-b-[1.5px] border-border">
            {glossary.map((g) => (
              <Disclosure key={g.term} summary={g.term} testId={`glossary-${g.term.split(" ")[0]}-${g.term.length}`}>
                <p className="source-text text-lg leading-[1.6]">{g.def}</p>
              </Disclosure>
            ))}
          </div>
        </div>

        <section id="shared-process" aria-labelledby="shared-process-title" className="reading-zone layer reveal mt-20 border-t border-primary/20 pt-10">
          <h3 id="shared-process-title" className="display-lg max-w-[24ch]">Accommodation is a shared process.</h3>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h4 className="display-md">The employee's role</h4>
              <ul role="list" className="mt-5 max-w-[65ch] list-none divide-y divide-primary/20 text-lg leading-[1.65]">
                {[
                  "Advise the company of the need for accommodation through its designated contact.",
                  "Describe the workplace barriers and the support that may help.",
                  "Provide relevant information about functional limitations when it is necessary to assess an accommodation request. A specific diagnosis is not normally required.",
                  "Participate in identifying, implementing and reviewing suitable accommodations.",
                ].map((text) => (
                  <li key={text} className="py-4 first:pt-0 last:pb-0">{text}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="display-md">The employer's role</h4>
              <ul role="list" className="mt-5 max-w-[65ch] list-none divide-y divide-primary/20 text-lg leading-[1.65]">
                {[
                  "Inform the employee of their rights and responsibilities.",
                  "Explain how information will be kept confidential and who needs access.",
                  "Discuss observable barriers without attempting to diagnose the employee.",
                  "Explain the accommodation process and invite the employee's suggestions.",
                  "Request supporting information only when necessary, focusing on functional needs rather than unnecessary diagnostic or treatment details.",
                ].map((text) => (
                  <li key={text} className="py-4 first:pt-0 last:pb-0">{text}</li>
                ))}
              </ul>
            </div>
          </div>
          <section aria-labelledby="accommodation-routes-title" className="mt-12 border-t border-primary/20 pt-8">
            <h4 id="accommodation-routes-title" className="display-md">Informal and formal accommodation</h4>
            <div className="mt-5 max-w-[68ch] space-y-4 text-lg leading-[1.65]">
              <p>Some needs can be met through a conversation and an agreed adjustment. A formal process may be useful for more complex needs or ongoing arrangements.</p>
              <p>Supporting information is not always needed. Where necessary, it should relate to the employee's functional limitations and accommodation needs.</p>
              <p>The employee may wish to involve a union or other representative.</p>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
}
