import { BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { objectives, reference } from "@/data/questions";

export function ResourcesDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          data-testid="button-open-resources"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          About and resources
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[88dvh] overflow-y-auto sm:max-w-2xl bg-card">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-medium">About this knowledge check</DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            This instructional design demo reproduces the five self-assessment questions, answers, feedback, and sample responses from the supplied 2011 instructor’s guide. Interface labels and this context note are separate from the original text. It is not legal or medical advice.
          </DialogDescription>
        </DialogHeader>

        <section className="mt-2" aria-labelledby="res-objectives">
          <h3 id="res-objectives" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Learning objectives
          </h3>
          <ol className="mt-3 space-y-2">
            {objectives.map((o, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="font-display text-primary tabular-nums">{i + 1}.</span>
                <span>{o}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-6" aria-labelledby="res-reference">
          <h3 id="res-reference" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Excerpts from the guide
          </h3>
          <dl className="mt-3 grid gap-3 sm:grid-cols-2">
            {reference.map((r) => (
              <div key={r.term} className="rounded-xl border border-border bg-background/60 p-4">
                <dt className="font-display text-base font-medium">{r.term}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-6 rounded-xl bg-secondary p-4" aria-labelledby="res-source">
          <h3 id="res-source" className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary-foreground/80">
            Source and context
          </h3>
          <p className="mt-2 text-sm leading-relaxed" data-testid="text-attribution">
            <cite>Learning Disabilities in the Workplace: Instructor's Guide</cite>, Invisible Disabilities
            Support Network, ©2011. Original wording has been retained; formatting has been changed for the web.
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Laws, policies, and accommodation processes differ by jurisdiction and organization. Verify current
            requirements with your HR, legal, or accessibility team.
          </p>
        </section>
      </DialogContent>
    </Dialog>
  );
}
