export type ResponseClassification =
  | "Problematic response"
  | "Partially developed response"
  | "Reasonable response"
  | "Well-developed response";
export type Choice = { id: string; text: string; feedback: string; classification?: ResponseClassification };
export type Answer = { selected: string[]; response?: string };
export type Question = {
  id: number;
  topic: string;
  source: string;
  kind: "single" | "multi" | "reflection";
  scenario?: string;
  prompt: string;
  choices: Choice[];
  correctIds: string[];
};

export function isCorrect(question: Question, answer?: Answer) {
  return !!answer && question.kind !== "reflection" &&
    answer.selected.length === question.correctIds.length &&
    question.correctIds.every((id) => answer.selected.includes(id));
}

// Based on the supplied guide, with author-approved prompt revisions and
// mechanical copyedits. Preserve meaning and intentional distractors.
export const questions: Question[] = [
  {
    id: 1, topic: "Self-assessment", source: "Question 1", kind: "single",
    prompt: "According to the definition of learning disabilities used by the Public Service Commission of Canada, people with learning disabilities demonstrate:",
    correctIds: ["c"],
    choices: [
      { id: "a", text: "Below-average intelligence", feedback: "Incorrect: According to the official definition of learning disability from the Learning Disabilities Association of Canada, a learning disability is distinct from a global intellectual deficiency." },
      { id: "b", text: "Low verbal intelligence", feedback: "Incorrect: According to the official definition of learning disability from the Learning Disabilities Association of Canada, a learning disorder may affect processing or use of verbal or nonverbal information." },
      { id: "c", text: "Average to above-average intelligence", feedback: "Correct: A learning disability is a disorder that affects learning in individuals who show at least average thinking and reasoning abilities by definition." },
      { id: "d", text: "Any level of intelligence", feedback: "Incorrect: According to the official definition of learning disability from the Learning Disabilities Association of Canada, a person affected by a learning disability must demonstrate at least average abilities to think or reason." },
    ],
  },
  {
    id: 2, topic: "Self-assessment", source: "Question 2", kind: "multi",
    prompt: "Identify the Canadian pieces of legislation that apply to discrimination against people with learning disabilities in the workplace.",
    correctIds: ["b", "e", "f"],
    choices: [
      { id: "a", text: "Disability Accommodation and Protection Act", feedback: "Incorrect: This is not a Canadian law. The Human Rights Act states that employers must provide reasonable accommodation for people with disabilities." },
      { id: "b", text: "Canadian Human Rights Act", feedback: "Correct: The Canadian Human Rights Act enforces the Charter rights of people who have disabilities and defines ‘reasonable accommodation’." },
      { id: "c", text: "Federal Employee Discrimination Act", feedback: "Incorrect: This is not a Canadian law. The Employment Equity Act protects employees of federally regulated employers from discrimination based on disability." },
      { id: "d", text: "Employment Equality Act", feedback: "Incorrect: The Employment Equity Act protects people who work for the government, crown corporations and large businesses that conduct business with the federal government from discrimination based on disability." },
      { id: "e", text: "Employment Equity Act", feedback: "Correct: The Employment Equity Act protects people who work in government, crown corporations and large businesses that conduct business with the federal government from discrimination based on disability." },
      { id: "f", text: "Charter of Rights and Freedoms", feedback: "Correct: The Charter of Rights and Freedoms protects people from discrimination based on mental disability." },
    ],
  },
  {
    id: 3, topic: "Self-assessment", source: "Question 3", kind: "single",
    prompt: "Which of the following best describes the sequence of steps for conducting a job requirements analysis?",
    correctIds: ["d"],
    choices: [
      { id: "a", text: "identify essential duties, select accommodations, formulate a review plan", feedback: "Incorrect: The purpose of the job requirements analysis is to identify conditions that may need to change in order to accommodate an employee’s needs, but in many cases input from some third party will be needed to inform the final selection." },
      { id: "b", text: "describe the disability in the employee’s words, eliminate non-essential duties, summarize", feedback: "Incorrect: Describing the employee’s disability in his or her own words is an important first step, but the decision to eliminate non-essential duties is made while developing the accommodation plan." },
      { id: "c", text: "summarize, identify difficult tasks, specify conditions", feedback: "Incorrect: The summary of the job requirements analysis is the last step which simply identifies the specific aspects of the employee’s position that require accommodation." },
      { id: "d", text: "list essential duties, identify difficult requirements, specify conditions for difficulty", feedback: "Correct: The goal of the job requirements analysis is to work through the employee’s duties to narrow down the specific conditions that need to change to overcome the effects of a disability." },
    ],
  },
  {
    id: 4, topic: "Self-assessment", source: "Question 4", kind: "reflection",
    prompt: "Recommend an accommodation designed to help the employee described fulfill his job requirements, and explain why you believe it is appropriate:",
    scenario: "Najeeb is a union member who has disclosed a learning disability that makes it difficult for him to recall details of written instructions—he struggles to remember sentences seconds after reading them. He approaches you, the manager, with a problem. He and his fellow assembly line workers must pass a new safety certification test based on a text-only training workbook in three weeks, but he is having great difficulty getting through even the first unit.",
    correctIds: [],
    choices: [
      {
        id: "a",
        classification: "Partially developed response",
        text: "“Najeeb could be provided with alternative training from someone who already has their certification. That person could model the procedures for him so he doesn’t have to rely on the written material alone. This accommodation would cost more than a workbook because the company would have to pay whoever trains him, but that wouldn’t break the bank. It’s so close to the test time to set this up, which could be a problem—to give Najeeb a fair chance he might need more time to prepare for the test. This might seem unfair to his coworkers.”",
        feedback: "This is a reasonable suggestion, but the explanation addresses only two of the five key criteria that are used to evaluate the appropriateness of an accommodation (cost and effect on other workers). Try to evaluate this accommodation using some of the other criteria. What if Najeeb’s model doesn’t know the material well?",
      },
      {
        id: "b",
        classification: "Well-developed response",
        text: "“The task that is difficult for Najeeb involves recalling written information, so the employer could ask a volunteer to read the workbook into a voice recorder. That way, Najeeb can use the recording to review. This would be a solution that allows Najeeb to meet the same safety requirements as the other workers, so it should not have a negative effect on his coworkers, but if it takes him too long to work through the materials, his employer might have to let him take time off. Depending on what his role is, that could be dangerous or costly.”",
        feedback: "This response suggests an accommodation that addresses four of the five criteria for evaluating an accommodation that apply to this scenario, but where cost is concerned, taking two weeks off work is unlikely to damage the company and is not a good reason to rule out this accommodation.",
      },
      {
        id: "c",
        classification: "Reasonable response",
        text: "“Depending on the kind of training he needs, the employer or the union could provide wordless flowcharts or assist Najeeb in developing them to help him visualize the information. This would be a cheap and safe solution.”",
        feedback: "This is a good suggestion. This explanation addresses three of the five key criteria (safety, cost, and impact of union membership) that are used to evaluate the appropriateness of an accommodation. You could also consider what effect this accommodation could have on Najeeb’s coworkers or on the organization as a whole. For example, other workers might benefit from the development of flowcharts as well.",
      },
    ],
  },
  {
    id: 5, topic: "Self-assessment", source: "Question 5", kind: "reflection",
    prompt: "Explain how you would behave differently from the manager in the following scenario, and justify your reasoning.",
    scenario: "Meghan is a new employee who disclosed a learning disability during her interview. The hiring manager tells Meghan’s project lead that she must take medication at several specific times per day because she gets “wacky,” as Meghan described during the job analysis process. The project lead starts to give Meghan “helpful” reminders to take her medication any time she feels Meghan is not performing well. Meghan finds this extremely upsetting and files a complaint.",
    correctIds: [],
    choices: [
      {
        id: "a",
        classification: "Problematic response",
        text: "“The manager was insensitive. I would ask Meghan what she wants to say.”",
        feedback: "While the manager was definitely insensitive, this response really misses the mark; the hiring manager’s action isn’t just insensitive but a failure to comply with the obligation to protect Meghan from discrimination. Consider the effect of the manager’s actions on Meghan’s coworkers and on the organization. If she pursues a human rights complaint, there could be very serious consequences for the company.",
      },
      {
        id: "b",
        classification: "Partially developed response",
        text: "“The manager didn’t respect Meghan’s right to confidentiality. The manager could have told the project lead that Meghan needed to take breaks at certain times without saying why; this would have accommodated Meghan’s need while protecting her privacy.”",
        feedback: "Good. The project lead doesn’t actually need to know why Meghan needs to leave at certain times if she doesn’t want to disclose that information. This unnecessary information could affect Meghan’s relationship with her coworkers. You’ve missed a major issue—why did the manager need to accommodate Meghan to start with?",
      },
      {
        id: "c",
        classification: "Well-developed response",
        text: "“The hiring manager knew his employer had a duty to protect Meghan from discrimination but actually poked fun at her needs; he then broke the confidentiality agreement that covered the whole accommodation process and finally failed to follow the protocol for evaluating accommodation by failing to consider how his action could affect Meghan’s well-being, the organization itself and how costly this action could be.”",
        feedback: "Excellent. You recognized a failure to comply with the regulations straight away and traced that back to specific departures from the recommended procedures. The employee’s right to privacy was sorely violated in this case and you are absolutely right that the manager’s actions could be costly because he or she did not take the responsibilities of that situation seriously!",
      },
    ],
  },
];

export const objectives = [
  "When you leave today, you should be better prepared to respond effectively and lawfully when someone in your workplace has a learning disability and needs support to perform at their best.",
  "You will be able to recognize a possible need for a managerial intervention based on knowledge of how learning disabilities may affect performance.",
  "You will be able to guide the employee through the development of a plan to accommodate their needs while respecting their privacy.",
];

export const reference = [
  { term: "Slide 8", body: "The manager’s goal here is not to supply a diagnosis or label the employee, so he or she should avoid judgmental labels such as “motormouth” and technical labels such as “dyslexic” both out of respect for the employee and because most managers are not qualified to diagnose a problem." },
  { term: "Slide 12", body: "Identify the essential duties that are causing problems, then work to specify what conditions make those duties more difficult for this person. Those conditions may be tasks, processes or environments. For example, someone who has difficulty with visual processing may struggle with working under fluorescent lights." },
  { term: "Slide 15", body: "Proper documentation of any accommodations will help you and the employee monitor whether those changes are implemented and whether they are effective." },
];
