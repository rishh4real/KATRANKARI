"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { validateCorporateForm } from "@/lib/forms";
import { FormField } from "./FormField";

const initial = { name: "", company: "", email: "", phone: "", quantity: "", interest: "", customisation: "", message: "" };

export function CorporateEnquiryForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<ReturnType<typeof validateCorporateForm>>({});
  const [status, setStatus] = useState("");
  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validateCorporateForm(values);
    setErrors(nextErrors);
    setStatus(Object.keys(nextErrors).length ? "Please correct the highlighted fields." : "Demo mode: your enquiry was validated but was not sent.");
  };
  const inputProps = (name: keyof typeof values) => ({ id: `corporate-${name}`, name, value: values[name], onChange: update, "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `corporate-${name}-error` : undefined });
  return (
    <form noValidate onSubmit={submit} className="space-y-5 rounded-card border border-border bg-surface p-6 md:p-8">
      <div className="rounded-input border border-border bg-background p-3 text-sm text-muted"><strong className="text-foreground">Demo mode.</strong> No enquiry is sent or stored.</div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor="corporate-name" error={errors.name}><Input autoComplete="name" {...inputProps("name")} /></FormField>
        <FormField label="Company / organisation" htmlFor="corporate-company" error={errors.company}><Input autoComplete="organization" {...inputProps("company")} /></FormField>
        <FormField label="Email" htmlFor="corporate-email" error={errors.email}><Input type="email" autoComplete="email" {...inputProps("email")} /></FormField>
        <FormField label="Phone" htmlFor="corporate-phone" error={errors.phone} optional><Input type="tel" autoComplete="tel" {...inputProps("phone")} /></FormField>
        <FormField label="Estimated quantity" htmlFor="corporate-quantity" error={errors.quantity}><Input type="number" min={1} inputMode="numeric" {...inputProps("quantity")} /></FormField>
        <FormField label="Product interest" htmlFor="corporate-interest" error={errors.interest}>
          <select className="select-field w-full" {...inputProps("interest")}><option value="">Select one</option><option>Bags and totes</option><option>Home and living</option><option>Pouches and organisers</option><option>Curated mixed set</option><option>Not sure yet</option></select>
        </FormField>
      </div>
      <FormField label="Customisation requirements" htmlFor="corporate-customisation" error={errors.customisation} optional><Textarea {...inputProps("customisation")} /></FormField>
      <FormField label="Message" htmlFor="corporate-message" error={errors.message}><Textarea {...inputProps("message")} /></FormField>
      <Button type="submit">Validate enquiry</Button>
      <p role="status" aria-live="polite" className="text-sm text-muted">{status}</p>
    </form>
  );
}
