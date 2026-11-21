import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CategoryCarousel, type HomeCategory } from "@/components/home/CategoryCarousel";
import { CollaborationCallout } from "@/components/home/CollaborationCallout";
import { CustomerStories } from "@/components/home/CustomerStories";
import { FeaturedProductsShowcase } from "@/components/home/FeaturedProductsShowcase";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { ProcessImpactSection } from "@/components/home/ProcessImpactSection";
import { createMetadata } from "@/lib/seo";

const HOME_CATEGORIES: HomeCategory[] = [
  { title: "Bags & Totes", items: ["Quilted Dual Tote", "Patchwork Tote", "Weekend Duffle", "Crossbody Utility Bag"], image: "/katrankaari/tote-bag-interior-clean.png", alt: "KatranKaari open tote bag interior", href: "/shop?collection=bags-and-totes", imageClassName: "object-cover object-center", panelClassName: "bg-[#F5F2ED]", overlayClassName: "bg-white/5" },
  { title: "Home & Living", items: ["Cushion Covers", "Table Mats & Runners", "Oval Rugs", "Curtains & Organisers"], image: "/katrankaari/patchwork-tote-clean.png", alt: "KatranKaari patchwork tote bag", href: "/shop?collection=home-and-living", imageClassName: "object-cover object-center", panelClassName: "bg-[#F5F2ED]", overlayClassName: "bg-white/5" },
  { title: "Everyday Essentials", items: ["Pouches & Organisers", "Laptop & Tech", "Kitchen & Dining", "Fashion Accessories"], image: "/katrankaari/earpods-case-green.png", alt: "KatranKaari green checked Earpods case", href: "/shop?collection=everyday-essentials", imageClassName: "object-cover object-[50%_60%]", panelClassName: "bg-[#F5F2ED]", overlayClassName: "bg-white/5" },
  { title: "Gifting & More", items: ["Shagun Envelopes", "Curated Gift Sets", "Corporate Gifting", "Custom Orders"], image: "/katrankaari/gifting-envelope-pouches.png", alt: "KatranKaari colourful gifting envelope pouches", href: "/shop?collection=gifting-and-more", imageClassName: "object-cover object-[50%_58%]", panelClassName: "bg-[#F5F2ED]", overlayClassName: "bg-white/5" },
];

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
        <CategoryCarousel categories={HOME_CATEGORIES} />
      </section>

      <ProcessImpactSection />

      <FeaturedProductsShowcase />

      <CustomerStories />

      <CollaborationCallout />
    </>
  );
}
