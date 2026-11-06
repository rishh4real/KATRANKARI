import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("About Us", "The KatranKaari story, purpose, process and artisan initiatives.", "/about");

const sections = [
  { title: "Brand history", copy: "A structured placeholder for the client-approved origin story, key moments and context behind KatranKaari." },
  { title: "Mission and values", copy: "A future statement of the principles that guide product design, material choices and community work." },
  { title: "Circularity", copy: "A place to explain verified circular practices in clear language without overstating outcomes." },
  { title: "Artisan initiatives", copy: "A future account of approved skills and livelihood initiatives, supported by consented stories and imagery." },
  { title: "Our process", copy: "A step-by-step structure for approved details about sourcing, sorting, design, production and quality." },
  { title: "Project Swachh Halar", copy: "A dedicated placeholder for client-supplied project history, partners, evidence and outcomes." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero border-b border-border"><Container><p className="eyebrow">About Us</p><h1 className="max-w-4xl font-display text-5xl leading-tight md:text-7xl">The story behind the material transformation.</h1><p className="mt-6 max-w-2xl leading-7 text-muted">This page is the approved home for KatranKaari’s human stories. Detailed history and claims remain placeholders until client content is supplied.</p></Container></section>
      <section className="page-section border-b border-border"><Container className="grid items-center gap-10 lg:grid-cols-2"><div className="relative aspect-[4/3] overflow-hidden rounded-card bg-surface"><Image src="/katrankaari/artisan-maker.png" alt="KatranKaari artisan working with textiles" fill priority className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div><div><p className="eyebrow">Our Story</p><h2 className="font-display text-4xl md:text-5xl">A place for the verified KatranKaari story.</h2><p className="mt-5 leading-7 text-muted">The final narrative will be written from approved brand history, project documentation and consented artisan accounts. This image appears only on the About page in line with the visual policy.</p></div></Container></section>
      <section className="page-section"><Container><SectionHeading eyebrow="Content scaffold" title="What this page will cover" copy="Each section is ready for client-approved copy and supporting assets." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{sections.map((section, index) => <article className="rounded-card border border-border p-6" key={section.title}><span className="text-sm text-muted">0{index + 1}</span><h2 className="mt-5 font-display text-3xl">{section.title}</h2><p className="mt-3 text-sm leading-6 text-muted">{section.copy}</p></article>)}</div></Container></section>
    </>
  );
}
