import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Contact",
  "Contact KatranKaari for product questions, collaborations and corporate gifting enquiries.",
  "/contact",
);

const contactDetails = [
  {
    label: "Call or WhatsApp",
    value: siteConfig.contact.phoneDisplay,
    href: siteConfig.contact.phoneHref,
    icon: Phone,
  },
  {
    label: "Write to us",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail,
  },
  {
    label: "Visit our roots",
    value: siteConfig.contact.address,
    icon: MapPin,
  },
  {
    label: "Follow the journey",
    value: `@${siteConfig.social.instagramHandle}`,
    href: siteConfig.social.instagramUrl,
    icon: Instagram,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#FAF4E9] text-[#493D37]">
      <section className="relative isolate overflow-hidden bg-[#681426] text-[#FAF4E9]">
        <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden="true">
          <svg className="h-full w-full" viewBox="0 0 1440 520" preserveAspectRatio="none">
            <path d="M-50 408 C 180 326, 320 430, 520 326 S 872 224, 1060 324 S 1310 382, 1490 244" fill="none" stroke="#D6A39C" strokeWidth="3" strokeDasharray="13 15" strokeLinecap="round" />
          </svg>
        </div>
        <Container className="relative grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-20">
          <div>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-[#EADAC7]">Contact KatranKaari</p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(3.5rem,7.5vw,7rem)] leading-[0.82] tracking-[-0.035em] text-[#FFF8EC]">
              Let&apos;s make something meaningful.
            </h1>
          </div>
          <div className="max-w-xl border-t border-[#EADAC7]/45 pt-6 lg:justify-self-end">
            <p className="text-base leading-7 text-[#FAF4E9]/86 sm:text-lg">
              Have a product question, a collaboration in mind or a gifting requirement? Tell us what you are planning and our team will help you take the next step.
            </p>
            <p className="mt-5 text-[0.67rem] font-bold uppercase tracking-[0.2em] text-[#E4B8B1]">Products · Collaborations · Corporate gifting</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#D7C2AC]">
        <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:py-20 xl:gap-24">
          <div>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-[#8A2536]">Reach us directly</p>
            <h2 className="mt-3 max-w-md font-display text-4xl leading-none text-[#681426] sm:text-5xl">We would love to hear from you.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#665750] sm:text-base">
              Choose the channel that works for you. We are based in Jamnagar and respond to enquiries during regular working hours.
            </p>

            <ul className="mt-9 border-b border-[#CDB8A4]">
              {contactDetails.map(({ label, value, href, icon: Icon, external }) => (
                <li className="border-t border-[#CDB8A4]" key={label}>
                  {href ? (
                    <a
                      className="group flex min-h-20 items-center gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681426]"
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#B7827D] text-[#681426] transition-colors group-hover:bg-[#681426] group-hover:text-[#FAF4E9]">
                        <Icon aria-hidden="true" size={19} strokeWidth={1.6} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-[#8A6F66]">{label}</span>
                        <span className="mt-1 block break-words text-sm font-semibold text-[#493D37] transition-colors group-hover:text-[#681426] sm:text-base">{value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex min-h-20 items-center gap-4 py-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#B7827D] text-[#681426]">
                        <Icon aria-hidden="true" size={19} strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block text-[0.62rem] font-extrabold uppercase tracking-[0.18em] text-[#8A6F66]">{label}</span>
                        <span className="mt-1 block text-sm font-semibold text-[#493D37] sm:text-base">{value}</span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <ContactForm />
        </Container>
      </section>

      <section className="bg-[#4D101D] text-[#FAF4E9]">
        <Container className="flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between lg:py-11">
          <div>
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[#D7AAA5]">Planning a larger order?</p>
            <h2 className="mt-1.5 font-display text-3xl leading-none sm:text-4xl">Explore corporate gifting and custom possibilities.</h2>
          </div>
          <Link className="inline-flex min-h-12 w-max items-center border border-[#EADAC7] px-5 text-[0.7rem] font-extrabold uppercase tracking-[0.15em] transition-colors hover:bg-[#FAF4E9] hover:text-[#681426] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF4E9]" href="/corporate-gifting">
            Corporate gifting <span className="ml-3 text-base" aria-hidden="true">→</span>
          </Link>
        </Container>
      </section>
    </main>
  );
}
