import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CollaborationCallout } from "@/components/home/CollaborationCallout";
import { CustomerStories } from "@/components/home/CustomerStories";
import { EducationLibraryPreview } from "@/components/home/EducationLibraryPreview";
import { FeaturedProductsShowcase } from "@/components/home/FeaturedProductsShowcase";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ProcessImpactSection } from "@/components/home/ProcessImpactSection";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createMetadata("KatranKaari", "KatranKaari storefront foundation for upcycled textile products and stories.", "/"),
  title: { absolute: "KatranKaari" },
};

export default async function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="border-b border-border bg-background">
        <Container className="py-7 text-center sm:py-8 lg:py-10">
          <p className="eyebrow">Discover KatranKaari</p>
          <h2 className="mx-auto mt-2 max-w-6xl font-sans text-[clamp(1.8rem,2.8vw,3.35rem)] font-normal leading-[1.08] text-foreground">A Little Less Waste. A Lot More Wonder.</h2>
          <p className="mx-auto mt-2 max-w-3xl text-xs leading-5 text-muted sm:text-sm">Discover everyday essentials, home accents, and meaningful gifts, beautifully reimagined from discarded textiles.</p>
        </Container>
        <div className="grid border border-[#251017] sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Bags & Totes", items: ["Quilted Dual Tote", "Patchwork Tote", "Weekend Duffle", "Crossbody Utility Bag"], image: "/katrankaari/tote-bag-interior-clean.png", alt: "KatranKaari open tote bag interior", href: "/shop?collection=bags-and-totes", imageClassName: "object-cover object-center", panelClassName: "bg-[#F5F2ED]", overlayClassName: "bg-white/5" },
            { title: "Home & Living", items: ["Cushion Covers", "Table Mats & Runners", "Oval Rugs", "Curtains & Organisers"], image: "/katrankaari/patchwork-tote-clean.png", alt: "KatranKaari patchwork tote bag", href: "/shop?collection=home-and-living", imageClassName: "object-cover object-center", panelClassName: "bg-[#F5F2ED]", overlayClassName: "bg-white/5" },
            { title: "Everyday Essentials", items: ["Pouches & Organisers", "Laptop & Tech", "Kitchen & Dining", "Fashion Accessories"], image: "/katrankaari/earpods-case-green.png", alt: "KatranKaari green checked Earpods case", href: "/shop?collection=everyday-essentials", imageClassName: "object-cover object-[50%_60%]", panelClassName: "bg-[#F5F2ED]", overlayClassName: "bg-white/5" },
            { title: "Gifting & More", items: ["Shagun Envelopes", "Curated Gift Sets", "Corporate Gifting", "Custom Orders"], image: "/katrankaari/gifting-envelope-pouches.png", alt: "KatranKaari colourful gifting envelope pouches", href: "/shop?collection=gifting-and-more", imageClassName: "object-cover object-[50%_58%]", panelClassName: "bg-[#F5F2ED]", overlayClassName: "bg-white/5" },
          ].map((category) => (
            <Link className={`group relative min-h-[20rem] overflow-hidden border-b border-[#251017] last:border-b-0 sm:min-h-[24rem] sm:border-b-0 sm:border-r last:border-r-0 lg:min-h-[27rem] ${category.panelClassName}`} href={category.href} key={category.title}>
              <Image src={category.image} alt={category.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className={`transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none ${category.imageClassName}`} />
              <div className={`absolute inset-0 transition-colors duration-300 group-hover:bg-black/45 ${category.overlayClassName}`} aria-hidden="true" />
              <span className="absolute inset-0 grid place-items-center px-5 text-center transition-opacity duration-200 group-hover:opacity-0">
                <span className="font-display text-3xl font-semibold leading-none text-[#251017] [text-shadow:0_1px_0_rgba(255,255,255,0.98),0_0_10px_rgba(255,250,242,0.92)] sm:text-4xl">{category.title}</span>
              </span>
              <span className="absolute inset-0 hidden place-items-center px-5 text-center text-white opacity-0 transition-opacity duration-300 group-hover:grid group-hover:opacity-100 sm:grid">
                <span className="space-y-1.5 text-base leading-snug sm:text-lg">
                  <span className="mb-3 block font-display text-2xl font-semibold">{category.title}</span>
                  {category.items.map((item) => <span className="block" key={item}>{item}</span>)}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ProcessImpactSection />

      <FeaturedProductsShowcase />

      <EducationLibraryPreview />

      <CustomerStories />

      <CollaborationCallout />
    </>
  );
}
