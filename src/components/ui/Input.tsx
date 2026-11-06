import type { InputHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`min-h-11 w-full rounded-input border border-border bg-background px-3.5 text-base text-foreground outline-none transition focus:border-foreground focus:ring-2 focus:ring-accent/30 disabled:opacity-60 ${className}`} {...props} />;
}
