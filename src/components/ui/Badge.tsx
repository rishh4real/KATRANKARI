import type { HTMLAttributes } from "react";

export function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={`inline-flex w-fit rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-muted ${className}`} {...props} />;
}
