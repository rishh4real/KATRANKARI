import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
    label: "Email Us",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail,
  },
  {
    label: "Call Us",
    value: siteConfig.contact.phoneDisplay,
    href: siteConfig.contact.phoneHref,
    icon: Phone,
  },
  {
    label: "Our Studio",
    value: siteConfig.contact.address,
    icon: MapPin,
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#FAF4E9] text-[#493D37]">
      <section className="relative isolate overflow-hidden bg-[#681426] text-[#FAF4E9]">
        <Container className="relative grid min-h-[23rem] gap-2 py-8 sm:py-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-5">
          <div className="relative z-10">
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.24em] text-[#EADAC7]">Contact KatranKaari</p>
            <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.9rem,5vw,5rem)] leading-[0.84] tracking-[-0.035em] text-[#FFF8EC]">
              Let&apos;s make something meaningful.
            </h1>
            <p className="mt-4 max-w-lg border-t border-[#EADAC7]/45 pt-4 text-sm leading-6 text-[#FAF4E9]/86">
              Have a product question, a collaboration in mind or a gifting requirement? Tell us what you are planning and our team will help you take the next step.
            </p>
            <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#E4B8B1]">Products · Collaborations · Corporate gifting</p>
          </div>
          <div className="relative h-[13rem] sm:h-[17rem] lg:h-[23rem] lg:self-end">
            <Image src="/katrankaari/contact-hero-connect.png" alt="Illustrated woman holding a telephone beside a stitched vintage phone" fill priority sizes="(min-width: 1024px) 58vw, 100vw" className="object-contain object-bottom drop-shadow-[0_20px_26px_rgba(54,4,17,0.28)]" />
          </div>
        </Container>
      </section>

      <section className="border-b border-[#D7C2AC]">
        <Container className="grid gap-10 py-10 sm:py-12 lg:grid-cols-[0.72fr_1.5fr] lg:gap-12 lg:py-14 xl:gap-16">
          <div className="flex flex-col">
            <ul className="border-b border-[#D8C3AF]">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <li className="border-t border-[#CDB8A4]" key={label}>
                  {href ? (
                    <a
                      className="group flex min-h-[5.15rem] items-center gap-5 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681426]"
                      href={href}
                    >
                      <span className="flex w-12 shrink-0 items-center justify-center text-[#681426] transition-transform duration-300 group-hover:-translate-y-0.5">
                        <Icon aria-hidden="true" size={35} strokeWidth={1.7} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base font-extrabold text-[#681426] sm:text-lg">{label}</span>
                        <span className="mt-0.5 block break-words text-sm text-[#493D37] transition-colors group-hover:text-[#681426] sm:text-base">{value}</span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex min-h-[5.15rem] items-center gap-5 py-3">
                      <span className="flex w-12 shrink-0 items-center justify-center text-[#681426]">
                        <Icon aria-hidden="true" size={35} strokeWidth={1.7} />
                      </span>
                      <span>
                        <span className="block text-base font-extrabold text-[#681426] sm:text-lg">{label}</span>
                        <span className="mt-0.5 block text-sm text-[#493D37] sm:text-base">{value}</span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-auto hidden pt-2 lg:block">
              <Image src="/katrankaari/contact-sewing-machine.png" alt="Burgundy line illustration of a vintage sewing machine with leaves and thread" width={1920} height={819} className="-ml-6 h-auto w-[calc(100%+1.5rem)] max-w-[22rem] object-contain" />
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>

      <section className="border-b-2 border-dashed border-[#C69288]/75 bg-[#580716] text-[#FAF4E9]">
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
