import type { ReactNode } from "react";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="a11y-shell flex min-h-[100dvh] flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:inline-flex focus:items-center focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Mark />
          <span className="font-display text-xl font-medium tracking-tight" data-testid="text-brand">
            Considerate
          </span>
        </div>
      </header>
      <main id="main" className="mx-auto w-full max-w-5xl flex-1 px-5 pb-16 sm:px-8">
        {children}
      </main>
      <footer className="border-t border-border/70">
        <div className="mx-auto max-w-5xl px-5 py-6 text-base leading-[1.6] text-muted-foreground sm:px-8">
          <p className="max-w-[70ch]">All written content © 2012, 2026 Emily Sheepy. All rights reserved.</p>
          <p className="mt-3 max-w-[70ch]">This e-learning demonstration was developed for portfolio purposes and is not intended as professional training or legal advice. For guidance on workplace accommodations, consult current legislation and qualified human resources professionals.</p>
        </div>
      </footer>
    </div>
  );
}

function Mark() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="12" cy="16" r="9" fill="hsl(var(--primary))" />
      <circle cx="20" cy="16" r="9" fill="hsl(var(--accent))" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}
