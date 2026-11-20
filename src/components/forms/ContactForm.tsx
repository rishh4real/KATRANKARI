"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/config/site";
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

    if (Object.keys(nextErrors).length) {
      setStatus("Please correct the highlighted fields.");
      return;
    }

    const subject = encodeURIComponent(`Website enquiry from ${values.name}`);
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`);
    setStatus("Opening your email app with a prepared message…");
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const field = (name: keyof typeof values) => ({
    value: values[name],
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [name]: event.target.value }));
      if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    },
  });

  const inputClass = "rounded-none border-[#CDB8A4] bg-[#FFF9F0] px-4 text-[#493D37] placeholder:text-[#8A776F] focus:border-[#681426] focus:ring-[#B7827D]/25";

  return (
    <form noValidate onSubmit={submit} className="border border-[#CDB8A4] bg-[#EADAC7]/42 p-6 sm:p-8 lg:p-10">
      <div className="border-b border-[#CDB8A4] pb-7">
        <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-[#8A2536]">Send an enquiry</p>
        <h2 className="mt-3 font-display text-4xl leading-none text-[#681426] sm:text-5xl">Tell us what you have in mind.</h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-[#665750]">Complete the form and we will prepare an email in your device&apos;s mail app, ready for you to review and send.</p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <FormField label="Your name" htmlFor="contact-name" error={errors.name}>
          <Input id="contact-name" autoComplete="name" placeholder="Full name" className={inputClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} {...field("name")} />
        </FormField>
        <FormField label="Email address" htmlFor="contact-email" error={errors.email}>
          <Input id="contact-email" type="email" autoComplete="email" placeholder="you@example.com" className={inputClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} {...field("email")} />
        </FormField>
      </div>
      <div className="mt-5">
        <FormField label="How can we help?" htmlFor="contact-message" error={errors.message}>
          <Textarea id="contact-message" placeholder="Share a few details about your enquiry…" className={`${inputClass} min-h-40`} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} {...field("message")} />
        </FormField>
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" className="rounded-none !border-[#681426] !bg-[#681426] px-6 !text-[#FAF4E9] hover:!border-[#4D101D] hover:!bg-[#4D101D]">
          Prepare email <Send aria-hidden="true" size={16} />
        </Button>
        <p role="status" aria-live="polite" className="text-sm text-[#7C433F]">{status}</p>
      </div>
    </form>
  );
}
