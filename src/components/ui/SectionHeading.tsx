import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, copy, action }: { eyebrow?: string; title: string; copy?: string; action?: ReactNode }) {
  return (
    <header className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div className="max-w-2xl">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="font-display text-3xl leading-tight tracking-tight md:text-5xl">{title}</h2>
        {copy ? <p className="mt-4 max-w-prose text-base leading-7 text-muted">{copy}</p> : null}
      </div>
      {action}
    </header>
  );
}
