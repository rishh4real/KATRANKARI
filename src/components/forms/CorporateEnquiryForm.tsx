"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { ChevronDown, Send } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig } from "@/config/site";
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

    if (Object.keys(nextErrors).length) {
      setStatus("Please correct the highlighted fields.");
      return;
    }

    const subject = encodeURIComponent(`Corporate gifting enquiry from ${values.company}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nCompany / organisation: ${values.company}\nEmail: ${values.email}\nPhone: ${values.phone || "Not provided"}\nEstimated quantity: ${values.quantity}\nProduct interest: ${values.interest}\nCustomisation: ${values.customisation || "Not specified"}\n\nMessage:\n${values.message}`,
    );

    setStatus("Opening your email app with a prepared enquiry…");
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  const inputProps = (name: keyof typeof values) => ({
    id: `corporate-${name}`,
    name,
    value: values[name],
    onChange: update,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `corporate-${name}-error` : undefined,
  });
  const inputClass = "min-h-[3.4rem] rounded-[0.55rem] border-[#D5BCA9] bg-[#FFF9F0]/75 px-4 text-[#493D37] focus:border-[#681426] focus:ring-[#B7827D]/25";

  return (
    <form noValidate onSubmit={submit} className="space-y-5 border-t border-[#CDB8A4] pt-7 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 xl:pl-16">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" htmlFor="corporate-name" error={errors.name}><Input className={inputClass} autoComplete="name" {...inputProps("name")} /></FormField>
        <FormField label="Company / organisation" htmlFor="corporate-company" error={errors.company}><Input className={inputClass} autoComplete="organization" {...inputProps("company")} /></FormField>
        <FormField label="Email" htmlFor="corporate-email" error={errors.email}><Input className={inputClass} type="email" autoComplete="email" {...inputProps("email")} /></FormField>
        <FormField label="Phone" htmlFor="corporate-phone" error={errors.phone} optional><Input className={inputClass} type="tel" autoComplete="tel" {...inputProps("phone")} /></FormField>
        <FormField label="Estimated quantity" htmlFor="corporate-quantity" error={errors.quantity}><Input className={inputClass} type="number" min={1} inputMode="numeric" {...inputProps("quantity")} /></FormField>
        <FormField label="Product interest" htmlFor="corporate-interest" error={errors.interest}>
          <div className="relative">
            <select className={`${inputClass} w-full appearance-none pr-11 outline-none`} {...inputProps("interest")}><option value="">Select one</option><option>Bags and totes</option><option>Home and living</option><option>Pouches and organisers</option><option>Curated mixed set</option><option>Not sure yet</option></select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#681426]" aria-hidden="true" size={17} />
          </div>
        </FormField>
      </div>
      <FormField label="Customisation requirements" htmlFor="corporate-customisation" error={errors.customisation} optional><Textarea className={`${inputClass} min-h-28 py-3`} {...inputProps("customisation")} /></FormField>
      <FormField label="Tell us about your requirement" htmlFor="corporate-message" error={errors.message}><Textarea className={`${inputClass} min-h-36 py-3`} {...inputProps("message")} /></FormField>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button className="inline-flex min-h-[3.35rem] w-max items-center gap-3 rounded-[0.55rem] bg-[#681426] px-7 py-3 text-[0.7rem] font-extrabold uppercase tracking-[0.13em] text-[#FAF4E9] transition-colors hover:bg-[#4D101D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681426] focus-visible:ring-offset-2" type="submit">
          Prepare enquiry <Send aria-hidden="true" size={15} />
        </button>
        <p role="status" aria-live="polite" className="text-sm text-[#7C433F]">{status}</p>
      </div>
    </form>
  );
}
