"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { validateContactForm } from "@/lib/forms";
import { FormField } from "./FormField";

const initial = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<ReturnType<typeof validateContactForm>>({});
  const [status, setStatus] = useState("");
  const submit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    setStatus(Object.keys(nextErrors).length ? "Please correct the highlighted fields." : "Demo mode: your message was validated but was not sent.");
  };
  const field = (name: keyof typeof values) => ({ value: values[name], onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValues((current) => ({ ...current, [name]: event.target.value })) });
  return (
    <form noValidate onSubmit={submit} className="space-y-5 rounded-card border border-border bg-surface p-6 md:p-8">
      <div className="rounded-input border border-border bg-background p-3 text-sm text-muted"><strong className="text-foreground">Demo mode.</strong> This form validates locally and does not send data.</div>
      <FormField label="Name" htmlFor="contact-name" error={errors.name}><Input id="contact-name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} {...field("name")} /></FormField>
      <FormField label="Email" htmlFor="contact-email" error={errors.email}><Input id="contact-email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} {...field("email")} /></FormField>
      <FormField label="Message" htmlFor="contact-message" error={errors.message}><Textarea id="contact-message" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} {...field("message")} /></FormField>
      <Button type="submit">Validate enquiry</Button>
      <p role="status" aria-live="polite" className="text-sm text-muted">{status}</p>
    </form>
  );
}
