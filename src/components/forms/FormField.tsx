import type { ReactNode } from "react";

export function FormField({ label, htmlFor, error, optional, children }: { label: string; htmlFor: string; error?: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold" htmlFor={htmlFor}>{label}{optional ? <span className="ml-1 font-normal text-muted">(optional)</span> : null}</label>
      {children}
      {error ? <p id={`${htmlFor}-error`} className="mt-1.5 text-sm text-error" role="alert">{error}</p> : null}
    </div>
  );
}
