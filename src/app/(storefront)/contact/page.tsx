import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Contact", "General and collaboration enquiry scaffold for KatranKaari.", "/contact");

export default function ContactPage() {
  return (
    <Container className="page-section grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
      <div><p className="eyebrow">Contact</p><h1 className="font-display text-5xl md:text-7xl">Start a conversation.</h1><p className="mt-6 leading-7 text-muted">For general enquiries, collaborations or product questions, reach KatranKaari through the verified details below.</p><div className="mt-8 rounded-card border border-border p-5 text-sm leading-6 text-muted"><strong className="text-foreground">Contact information</strong><ul className="mt-4 space-y-3"><li><a className="flex items-start gap-3 hover:text-foreground hover:underline" href={siteConfig.contact.phoneHref}><Phone className="mt-0.5 shrink-0" aria-hidden="true" size={17} />{siteConfig.contact.phoneDisplay}</a></li><li><a className="flex items-start gap-3 break-all hover:text-foreground hover:underline" href={`mailto:${siteConfig.contact.email}`}><Mail className="mt-0.5 shrink-0" aria-hidden="true" size={17} />{siteConfig.contact.email}</a></li><li className="flex items-start gap-3"><MapPin className="mt-0.5 shrink-0" aria-hidden="true" size={17} />{siteConfig.contact.address}</li><li><a className="flex items-start gap-3 hover:text-foreground hover:underline" href={siteConfig.social.instagramUrl} target="_blank" rel="noreferrer"><Instagram className="mt-0.5 shrink-0" aria-hidden="true" size={17} />@{siteConfig.social.instagramHandle}</a></li></ul></div></div>
      <ContactForm />
    </Container>
  );
}
