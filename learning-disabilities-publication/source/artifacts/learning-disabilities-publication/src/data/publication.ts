/* Learner-facing content. Attribution and verification notes are maintained in
 * docs/content-review.md, outside the published interface and client bundle. */

export const BASE = import.meta.env.BASE_URL;
export const img = (name: string) => `${BASE}images/${name}.webp`;

export const KNOWLEDGE_CHECK_URL =
  "https://emilysheepy.github.io/portfolio/learning-disabilities-knowledge-check/";

export const chapters = [
  { id: "chapter-1", n: 1, short: "Definition", title: "What is a learning disability?" },
  { id: "chapter-2", n: 2, short: "The law", title: "How can managers avoid discrimination?" },
  { id: "chapter-3", n: 3, short: "Accommodation", title: "What is accommodation?" },
  { id: "chapter-4", n: 4, short: "Barriers", title: "Identifying workplace barriers" },
  { id: "chapter-5", n: 5, short: "Choosing", title: "How do you choose an accommodation?" },
  { id: "chapter-6", n: 6, short: "The plan", title: "How do you prepare an accommodation plan?" },
] as const;

/* ---------- Chapter 4: four-step job requirement analysis ---------- */
export const analysisSteps = [
  {
    n: 1,
    label: "Identify essential duties.",
    source: [
      "Work with the employee to identify the duties that are essential to the job. Distinguish these from tasks that are preferred or incidental, and consider whether non-essential tasks can be reorganized.",
    ],
    slide: ["Identify the job's essential duties."],
  },
  {
    n: 2,
    label: "Identify difficult tasks or requirements.",
    source: ["Ask the employee which essential duties are difficult and how those difficulties affect their work."],
    slide: ["Describe the difficult duties in the employee's own words."],
  },
  {
    n: 3,
    label: "Specify the conditions under which difficulties occur.",
    source: [
      "Work with the employee to identify the conditions in which difficulties occur. Consider the task itself, the process used to complete it and the work environment. For example, an employee may find spoken instructions harder to follow in a noisy space than in a quiet one. Ask about their experience rather than assuming a cause.",
    ],
    slide: [
      "Describe the conditions in which difficulties occur.",
      "Examine tasks.",
      "Examine processes.",
      "Examine the work environment.",
    ],
  },
  {
    n: 4,
    label: "Summarize the barriers requiring accommodation.",
    source: [
      "Summarize the barriers and their effects on essential duties so that everyone understands what the accommodation plan needs to address. Record relevant professional input if it is needed and available.",
    ],
    slide: ["Summarize the job requirements analysis.", "Include relevant input, with appropriate consent and confidentiality."],
  },
] as const;

export const conditionExamples = [
  {
    kind: "Task",
    text: "Sue has dyslexia and has been promoted to a supervisory position. She must complete several printed inspection forms each week. She occasionally misreads instructions and needs to reread the forms before submitting them, which leaves less time for her other end-of-week duties.",
    aside: "Explore an accessible digital form or another way of presenting the instructions with Sue. Check whether the change addresses the difficulty she describes.",
  },
  {
    kind: "Process",
    text: "Joe is a trainee who has a documented verbal processing disorder. He packs gizmo kit components into shipping boxes in a particular order to prevent damage in transit. Trainees normally consult a written protocol for the packing order. Joe has requested accommodation because he finds the protocol difficult to understand and feels he is falling behind the other trainees.",
    aside: "Discuss whether a visual flowchart or a demonstration would help Joe follow the packing sequence. The essential requirement is safe, correct packing, not necessarily reading a particular protocol.",
  },
  {
    kind: "Environment",
    text: "Jeremiah must complete eight hours of approved professional development. The course takes place in a large classroom that can be noisy. After the first session, Jeremiah requests accommodation because his documented auditory processing difficulties make it hard to participate in that environment.",
    aside: "Explore a quieter setting or an alternative approved course format with Jeremiah. Check that it meets the learning requirement and addresses the barrier he describes.",
  },
] as const;

/* ---------- Chapter 5: Daniel's worked example ---------- */
export const danielScenario = [
  "Daniel works in a distribution centre. His employer is introducing a new inventory-management system.",
  "Daniel has difficulty following lengthy written instructions, but he has successfully learned other workplace procedures through demonstrations and supervised practice.",
  "His manager is considering providing hands-on training with a designated coworker, followed by a short period of supported practice.",
  "Before implementing the accommodation, the manager needs to consider whether it is appropriate and feasible.",
] as const;

export const danielEvaluation = [
  {
    id: "safety",
    title: "Safety",
    question: "Can Daniel practise using the new system without creating safety or operational risks?",
    explanation: "The manager should consider whether supervised practice can be arranged safely and whether any safeguards are necessary.",
  },
  {
    id: "training",
    title: "Additional training",
    question: "How much preparation would the designated coworker need to provide effective training?",
    explanation: "The manager should consider the training and support required to implement the proposed accommodation, along with other feasible approaches.",
  },
  {
    id: "cost",
    title: "Cost",
    question: "What staff time and other resources would the arrangement require?",
    explanation: "The manager should assess the actual cost and available resources rather than assuming that additional training time makes the accommodation unreasonable.",
  },
  {
    id: "coworkers",
    title: "Impact on coworkers",
    question: "How would the arrangement affect the designated coworker's workload and responsibilities?",
    explanation: "The manager should consider scheduling, workload distribution and practical implementation without treating coworker resentment or inconvenience as automatic grounds for refusing accommodation.",
  },
  {
    id: "union",
    title: "Union-related implications",
    question: "Are there relevant collective agreement provisions governing training assignments, duties or scheduling?",
    explanation: "If applicable, the manager should consult the appropriate parties to understand these requirements and how they interact with accommodation obligations.",
  },
] as const;

export const danielTakeaway =
  "The five criteria help managers evaluate whether a proposed accommodation is appropriate and how it can be implemented. They should support collaborative problem-solving, not serve as a checklist of reasons to refuse an accommodation. The manager should discuss the proposed approach with Daniel, consider feasible alternatives where necessary, and review whether the agreed accommodation is effective.";

/* ---------- Chapter 6: annotated request form ---------- */
export interface FormSection {
  id: string;
  title: string;
  fields: string[];
  annotation: string[];
}

export const formSections: FormSection[] = [
  {
    id: "form-header",
    title: "Sample accommodation request form",
    fields: [
      "Applicant Name",
      "Job Title",
      "Supervisor",
      "Work contact details, if needed",
      "Date",
      "Received by [HR Representative]",
      "Signature",
    ],
    annotation: [
      "Record the date of meetings and the people present.",
      "Identify the designated contact for accommodation requests.",
      "Acknowledge the employee's request promptly.",
    ],
  },
  {
    id: "form-analysis",
    title: "Job requirements",
    fields: ["In brief, what is the purpose of the job?", "Please attach a list of all essential functions."],
    annotation: [
      "Summarize job requirements.",
      "Identify the duties that are essential to the job.",
    ],
  },
  {
    id: "form-limitations",
    title: "Functional limitations and barriers",
    fields: [
      "Which essential duties are difficult, and under what conditions?",
      "What functional limitations or workplace barriers affect participation? Do not record unnecessary diagnostic or treatment details.",
    ],
    annotation: [
      "Describe the conditions in which difficulties occur.",
      "Identify current functional limitations that affect job duties.",
      "Request supporting professional information only when necessary, and limit it to relevant functional needs.",
    ],
  },
  {
    id: "form-alternatives",
    title: "Accommodation alternatives",
    fields: [
      "Can the applicant suggest an accommodation? If so, what?",
      "Describe recommendations from other sources here.",
      "Professional or resource consulted, if relevant",
      "Recommendations (attach additional sheet if necessary).",
    ],
    annotation: [
      "Identify potential accommodations for each task, process or work environment.",
      "Consider the employee's suggestions, relevant professional advice and reliable accommodation resources.",
    ],
  },
  {
    id: "form-plan",
    title: "Accommodation plan",
    fields: ["List accommodations to be implemented.", "Effective date", "Next scheduled review"],
    annotation: [
      "State all accommodations, specifying conditions — identify who will make the specific change, who will provide assistance or training if necessary, and what equipment is required.",
      "Confirm that the identified task, process and environmental barriers are addressed.",
      "Work with the employee to develop a plan to monitor any approved accommodation to determine its effectiveness, or to modify the accommodation if necessary.",
    ],
  },
  {
    id: "form-signatures",
    title: "Signatures",
    fields: ["Applicant’s signature / Date", "Human Resources Representative / Date", "Manager / Date"],
    annotation: [
      "Obtain the employee's approval of the document.",
      "Securely store the document according to company policy.",
      "Protect personal information. Share only what is necessary to identify and implement accommodation, and only with people who need to know.",
    ],
  },
];
