import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { footerNavigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-[#4A0613] bg-[#580716] text-[#F8EBDC]">
      <Container className="py-10 sm:py-12 lg:py-14">
        <div className="flex flex-col gap-6 border-b border-dashed border-[#C69288]/65 pb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#E0BFC0]">Made from what remains</p>
            <h2 className="mt-2 font-sans text-[clamp(2.45rem,5vw,5rem)] font-black leading-none tracking-[0.04em] text-[#F8EBDC]">KATRANKAARI</h2>
          </div>
          <Link href="/contact" className="group inline-flex min-h-10 items-center gap-2 self-start border-b border-[#F2E2D7] pb-1 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#F8EBDC] transition-colors hover:text-[#E0BFC0] sm:self-auto">
            Start a conversation <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-9 pt-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1.15fr] lg:gap-10">
          <div>
            <p className="max-w-xs text-sm leading-6 text-[#E0BFC0]">Thoughtfully designed, functional pieces made from upcycled textile waste.</p>
            <div className="mt-5 flex items-center gap-3">
              <a href={siteConfig.social.instagramUrl} target="_blank" rel="noreferrer" className="grid size-9 place-items-center rounded-[6px] border border-[#C69288] text-[#F8EBDC] transition-colors hover:bg-[#F5E7D6] hover:text-[#58111D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8EBDC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#580716]" aria-label="Follow KatranKaari on Instagram">
                <Instagram aria-hidden="true" size={18} />
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="grid size-9 place-items-center rounded-[6px] border border-[#C69288] text-[#F8EBDC] transition-colors hover:bg-[#F5E7D6] hover:text-[#58111D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8EBDC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#580716]" aria-label="Email KatranKaari">
                <Mail aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          {footerNavigation.map((group) => (
            <div key={group.heading}>
              <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#F2E2D7]">{group.heading}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-[#E0BFC0]">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link className="transition-colors hover:text-[#F8EBDC] hover:underline" href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#F2E2D7]">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm leading-5 text-[#E0BFC0]">
              <li><a className="flex items-start gap-2 transition-colors hover:text-[#F8EBDC] hover:underline" href={siteConfig.contact.phoneHref}><Phone className="mt-0.5 shrink-0" aria-hidden="true" size={15} />{siteConfig.contact.phoneDisplay}</a></li>
              <li><a className="flex items-start gap-2 break-all transition-colors hover:text-[#F8EBDC] hover:underline" href={`mailto:${siteConfig.contact.email}`}><Mail className="mt-0.5 shrink-0" aria-hidden="true" size={15} />{siteConfig.contact.email}</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 shrink-0" aria-hidden="true" size={15} />{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-[#C69288]/45">
        <Container className="flex flex-col gap-3 py-4 text-xs text-[#E0BFC0] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} KatranKaari. All rights reserved.</span>
          <span className="flex items-center gap-2 text-[#F2E2D7]"><span className="w-7 border-t border-dashed border-[#C69288]" aria-hidden="true" /> Reimagining textile waste</span>
        </Container>
      </div>
    </footer>
  );
}
