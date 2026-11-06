import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Our Impact", "A scaffold for verified KatranKaari environmental and community outcomes.", "/impact");

const metrics = ["Textile waste diverted", "Products made", "Livelihood opportunities"];

export default function ImpactPage() {
  return (
    <>
      <section className="page-hero border-b border-border"><Container><Badge>Approved data required</Badge><h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight md:text-7xl">Impact should be specific, verifiable and clear.</h1><p className="mt-6 max-w-2xl leading-7 text-muted">This page intentionally publishes no impact figures until the client supplies approved data and definitions.</p></Container></section>
      <section className="page-section border-b border-border"><Container><SectionHeading eyebrow="Metrics framework" title="Verified figures will live here" /><div className="grid gap-4 md:grid-cols-3">{metrics.map((metric) => <article className="rounded-card border border-border p-7" key={metric}><p className="font-display text-4xl text-muted">—</p><h2 className="mt-6 text-lg font-semibold">{metric}</h2><p className="mt-2 text-sm leading-6 text-muted">Client-approved metric, period and methodology pending.</p></article>)}</div></Container></section>
      <section className="page-section border-b border-border bg-surface"><Container className="grid items-center gap-10 lg:grid-cols-2"><div className="relative aspect-[4/3] overflow-hidden rounded-card"><Image src="/katrankaari/patchwork-stitching.png" alt="Close view of textile pieces being joined" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div><div><p className="eyebrow">Material transformation</p><h2 className="font-display text-4xl md:text-5xl">Show the process behind the outcome.</h2><p className="mt-5 leading-7 text-muted">Approved material flows, process imagery and environmental methodology can be added here without relying on generic sustainability claims.</p></div></Container></section>
      <section className="page-section"><Container><SectionHeading eyebrow="Outcome framework" title="Environmental and community outcomes" copy="These sections are structured for verified narrative evidence, approved women’s stories and clearly defined reporting periods." /><div className="grid gap-4 md:grid-cols-2"><article className="rounded-card border border-border p-7"><h2 className="font-display text-3xl">Environmental outcomes</h2><p className="mt-4 leading-7 text-muted">Placeholder for client-approved waste diversion, material recovery and process information.</p></article><article className="rounded-card border border-border p-7"><h2 className="font-display text-3xl">Community outcomes</h2><p className="mt-4 leading-7 text-muted">Placeholder for consented stories and verified livelihood or skills outcomes. Human imagery remains confined to the About page.</p></article></div></Container></section>
    </>
  );
}
