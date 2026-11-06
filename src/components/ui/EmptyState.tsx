import type { ReactNode } from "react";

export function EmptyState({ title, copy, action }: { title: string; copy: string; action?: ReactNode }) {
  return (
    <div className="rounded-card border border-dashed border-border bg-surface px-6 py-14 text-center">
      <h2 className="font-display text-2xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-muted">{copy}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
