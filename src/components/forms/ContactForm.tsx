"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/config/site";
import { validateContactForm } from "@/lib/forms";

const initial = { name: "", email: "", phone: "", reason: "", message: "" };

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

    const subject = encodeURIComponent(`${values.reason || "Website enquiry"} from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone || "Not provided"}\nEnquiry: ${values.reason || "General"}\n\nMessage:\n${values.message}`,
    );
    setStatus("Opening your email app with a prepared message…");
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const update = (name: keyof typeof values) => (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setValues((current) => ({ ...current, [name]: event.target.value }));
    if (name === "name" || name === "email" || name === "message") {
      if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const inputClass = "min-h-[3.45rem] rounded-[0.65rem] border-[#D5BCA9] bg-[#FFF9F0]/65 px-4 text-[#493D37] placeholder:text-[#6F5D56] focus:border-[#681426] focus:ring-[#B7827D]/25";
  const errorClass = "mt-1.5 text-xs text-error";

  return (
    <form noValidate onSubmit={submit} className="lg:border-l lg:border-[#CDB8A4] lg:pl-12 xl:pl-16">
      <h2 className="font-display text-4xl font-semibold leading-none text-[#681426] sm:text-5xl">Send Us a Message</h2>

      <div className="mt-6 grid gap-x-5 gap-y-4 sm:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="contact-name">Your name</label>
          <Input id="contact-name" autoComplete="name" placeholder="Your Name *" className={inputClass} value={values.name} onChange={update("name")} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />
          {errors.name ? <p id="contact-name-error" className={errorClass} role="alert">{errors.name}</p> : null}
        </div>
        <div>
          <label className="sr-only" htmlFor="contact-email">Your email</label>
          <Input id="contact-email" type="email" autoComplete="email" placeholder="Your Email *" className={inputClass} value={values.email} onChange={update("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />
          {errors.email ? <p id="contact-email-error" className={errorClass} role="alert">{errors.email}</p> : null}
        </div>
        <div>
          <label className="sr-only" htmlFor="contact-phone">Phone number</label>
          <Input id="contact-phone" type="tel" autoComplete="tel" placeholder="Phone Number" className={inputClass} value={values.phone} onChange={update("phone")} />
        </div>
        <div className="relative">
          <label className="sr-only" htmlFor="contact-reason">I am reaching out for</label>
          <select id="contact-reason" className={`${inputClass} w-full appearance-none pr-11 outline-none`} value={values.reason} onChange={update("reason")}>
            <option value="">I&apos;m reaching out for…</option>
            <option value="Product enquiry">Product enquiry</option>
            <option value="Corporate gifting">Corporate gifting</option>
            <option value="Collaboration">Collaboration</option>
            <option value="General enquiry">General enquiry</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#681426]" aria-hidden="true" size={18} />
        </div>
        <div className="sm:col-span-2">
          <label className="sr-only" htmlFor="contact-message">Your message</label>
          <Textarea id="contact-message" placeholder="Your Message *" className={`${inputClass} min-h-[8.75rem] py-4`} value={values.message} onChange={update("message")} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />
          {errors.message ? <p id="contact-message-error" className={errorClass} role="alert">{errors.message}</p> : null}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" className="min-h-[3.35rem] rounded-[0.65rem] !border-[#681426] !bg-[#681426] px-8 !text-[#FAF4E9] hover:!border-[#4D101D] hover:!bg-[#4D101D]">
          Send Message <Send aria-hidden="true" size={16} />
        </Button>
        <p role="status" aria-live="polite" className="text-sm text-[#7C433F]">{status}</p>
      </div>
    </form>
  );
}
