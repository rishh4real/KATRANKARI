import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CorporateEnquiryForm } from "@/components/forms/CorporateEnquiryForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Corporate Gifting & Custom Orders", "Explore enquiry-led corporate gifting and custom-order possibilities from KatranKaari.", "/corporate-gifting");

const possibilities = [
  { title: "Bulk orders", copy: "A scaffold for volume options, lead times and minimum quantities once approved." },
  { title: "Event gifting", copy: "A place to explain occasion-specific sets without promising unconfirmed products." },
  { title: "Curated collections", copy: "Flexible groupings that can later map to a Shopify catalogue or enquiry flow." },
  { title: "Customisation", copy: "A framework for approved branding, colour and packaging possibilities." },
];

export default function CorporateGiftingPage() {
  return (
    <>
      <section className="border-b border-border"><Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20"><div><p className="eyebrow">Corporate gifting & custom orders</p><h1 className="font-display text-5xl leading-tight md:text-7xl">Useful gifts with a material story.</h1><p className="mt-6 max-w-xl leading-7 text-muted">This enquiry-led scaffold is ready for approved catalogue details, bulk and event gifting, curated collections, customisation options and service terms.</p></div><div className="relative aspect-[4/3] overflow-hidden rounded-card"><Image src="/katrankaari/editorial-gifting.png" alt="Curated textile gift objects arranged together" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div></Container></section>
      <section className="page-section border-b border-border"><Container><SectionHeading eyebrow="Service scaffold" title="Ways to work together" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{possibilities.map((item) => <article className="rounded-card border border-border p-6" key={item.title}><h2 className="font-display text-2xl">{item.title}</h2><p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p></article>)}</div></Container></section>
      <section className="page-section"><Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="eyebrow">Catalogue request and enquiry</p><h2 className="font-display text-4xl md:text-5xl">Tell us what you are planning.</h2><p className="mt-5 leading-7 text-muted">The form validates locally so the full workflow can be reviewed. It does not send or store submissions until a secure backend is approved.</p></div><CorporateEnquiryForm /></Container></section>
    </>
  );
}
