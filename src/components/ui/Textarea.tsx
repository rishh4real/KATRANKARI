import type { TextareaHTMLAttributes } from "react";

export function Textarea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`min-h-32 w-full resize-y rounded-input border border-border bg-background px-3.5 py-3 text-base text-foreground outline-none transition focus:border-foreground focus:ring-2 focus:ring-accent/30 disabled:opacity-60 ${className}`} {...props} />;
}
