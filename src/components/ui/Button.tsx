import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "quiet";

export function buttonClassName(variant: Variant = "primary", className = "") {
  const variants: Record<Variant, string> = {
    primary: "bg-foreground text-background border-foreground hover:bg-primary hover:border-primary",
    secondary: "bg-transparent text-foreground border-border hover:border-foreground",
    quiet: "bg-transparent text-foreground border-transparent hover:bg-surface",
  };
  return `inline-flex min-h-11 items-center justify-center gap-2 rounded-button border px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;
}

export function Button({ variant = "primary", className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={buttonClassName(variant, className)} {...props} />;
}
