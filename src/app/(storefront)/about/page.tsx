import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Our Story", "The KatranKaari journey, the women behind the craft and the transformation of textile waste.", "/about");

const processSteps = [
  {
    number: "01",
    title: "Recover",
    copy: "Discarded textiles are collected and sorted so their useful life can continue.",
    image: "/katrankaari/process-collect.png",
    alt: "Stitched patch showing collected textile pieces",
  },
  {
    number: "02",
    title: "Reimagine",
    copy: "Colours, prints and offcuts are composed into practical new forms.",
    image: "/katrankaari/process-design-craft.png",
    alt: "Stitched patch showing tailoring scissors",
  },
  {
    number: "03",
    title: "Remake",
    copy: "Women artisans bring every design to life with skill, care and precision.",
    image: "/katrankaari/process-produce.png",
    alt: "Stitched patch showing a finished textile bag",
  },
];

function StitchPath({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 230" fill="none" aria-hidden="true">
      <path d="M8 196C112 224 162 177 195 120C231 57 273 20 351 19C426 17 468 57 510 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="9 13" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[linear-gradient(135deg,#fff8ef_0%,#f8ecdd_100%)] text-[#2a1b19]">
      <section className="relative isolate overflow-hidden border-b border-[#4b0d17] bg-[#651421] py-5 text-[#fff8ed] shadow-[inset_0_-1px_rgba(20,0,4,0.28)] sm:py-6 lg:pb-0 lg:pt-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,218,191,0.11),transparent_32%),linear-gradient(120deg,rgba(43,0,8,0.2),transparent_58%)]" aria-hidden="true" />
        <Container className="relative grid items-center gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-9">
          <div className="relative z-10 max-w-lg py-2 lg:py-4">
            <p className="mb-4 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#f4c8b6]">Our Story</p>
            <h1 className="font-sans text-[clamp(2.5rem,4vw,3.85rem)] font-medium leading-[1.04] tracking-[-0.035em] text-[#fff8ed]">
              Every scrap
              <span className="block">has a story.</span>
            </h1>
            <div className="mt-5 h-px w-16 bg-[#e9b49f]/70" aria-hidden="true" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#f8e8dc]/85 sm:text-[0.95rem]">Transforming textile waste into meaningful products and opportunities.</p>
          </div>

          <div className="relative h-[18rem] sm:h-[22rem] lg:h-[390px] lg:w-full lg:justify-self-end" aria-label="KatranKaari woman artisan holding a finished textile piece beside an unbranded sewing machine">
            <div className="absolute inset-x-[8%] bottom-[4%] top-[14%] rounded-full bg-[#f3cbb3]/10 blur-3xl" aria-hidden="true" />
            <Image src="/katrankaari/about-hero-cutout.webp" alt="KatranKaari woman artisan holding a finished textile piece beside an unbranded sewing machine" fill priority className="object-contain object-right-bottom lg:translate-y-3 lg:scale-[1.08] lg:origin-bottom-right" sizes="(min-width: 1024px) 59vw, 100vw" />
          </div>
        </Container>
        <StitchPath className="pointer-events-none absolute -bottom-10 left-[18%] hidden w-[31rem] text-[#f3bda5]/35 lg:block" />
      </section>

      <section className="relative border-b border-[#d9c3ae] py-6 sm:py-7 lg:py-8">
        <Container className="grid items-center gap-6 lg:grid-cols-[0.58fr_1.42fr] lg:gap-8">
          <div className="relative aspect-[1368/1498] w-full max-w-[21rem] justify-self-center overflow-hidden rounded-[1.2rem] bg-[#ead9c7] shadow-[0_18px_42px_rgba(89,30,26,0.12)]">
            <Image src="/katrankaari/journey-artisans-burgundy-final.webp" alt="Women sorting colourful recovered textiles as part of the KatranKaari journey" fill className="object-cover object-center" sizes="(min-width: 1024px) 336px, 85vw" />
          </div>
          <div className="relative">
            <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#721a27]">How it all started</p>
            <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-[#4e111c] sm:text-5xl">The KatranKaari Journey</h2>
            <p className="mt-4 max-w-4xl text-[0.95rem] leading-6 text-[#554943]">Every piece of fabric has a story, and at KatranKaari, we believe that its story should not end when it is discarded.</p>
            <p className="mt-3 max-w-4xl text-[0.9rem] leading-6 text-[#554943]">Rooted in Jamnagar, Gujarat, KatranKaari emerged under Project Swachh Halar, a CSR initiative of Nayara Energy Limited, in collaboration with the CSR Trust for SDGs in India. Built on responsible waste management, circularity and community empowerment, the initiative reimagines discarded textiles as a resource filled with possibilities.</p>
            <details className="group mt-4 max-w-4xl border-t border-[#d8bbaa] pt-3 text-[#554943]">
              <summary className="cursor-pointer list-none text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#721a27] marker:content-none">Read the full journey <span className="ml-1 inline-block transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary>
              <div className="mt-3 space-y-3 text-[0.88rem] leading-6">
                <p>Through dedicated skill development and hands-on training, women from local communities transform recovered fabrics into thoughtfully designed bags, accessories, home essentials and everyday products. From collecting and sorting discarded textiles to carefully designing and stitching each creation, every step reflects creativity, craftsmanship and conscious consumption.</p>
                <p>Beyond reducing textile waste, KatranKaari is committed to creating meaningful livelihood opportunities, nurturing entrepreneurship and supporting women on their journey towards financial independence.</p>
                <p>Our journey is about more than giving fabrics a second life. It is about changing the way we perceive waste, celebrating the hands that create, and building a future where sustainability and opportunity go hand in hand.</p>
                <p className="font-semibold text-[#4e111c]">Because what remains is not the end of a story, but the beginning of another.</p>
              </div>
            </details>
            <div className="mt-4 h-0.5 w-14 rounded-full bg-[#721a27]" aria-hidden="true" />
          </div>
        </Container>
        <StitchPath className="pointer-events-none absolute -bottom-14 right-[-5rem] hidden w-[28rem] rotate-[8deg] text-[#b96d63]/45 lg:block" />
      </section>

      <section id="artisan-stories" className="relative overflow-hidden bg-[#651421] py-9 text-[#fff8ed] shadow-[inset_0_1px_rgba(255,255,255,0.06),inset_0_-1px_rgba(20,0,4,0.25)] sm:py-10 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(120deg,transparent_0%,rgba(45,0,9,0.2)_100%)]" aria-hidden="true" />
        <Container className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          <div className="max-w-xl">
            <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#f4c8b6]">The hands behind every stitch</p>
            <h2 className="font-display text-4xl font-semibold leading-[0.94] tracking-[-0.03em] sm:text-5xl">Meet Our Artisans</h2>
            <p className="mt-3 text-[0.95rem] leading-6 text-[#f8e8dc]/85">A community of skilled and passionate women who turn fabric waste into thoughtfully crafted, timeless products.</p>
            <Link href="/impact" className="mt-5 inline-flex min-h-10 items-center gap-4 rounded-button border border-[#f8e8dc]/70 px-5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition hover:bg-[#fff8ed] hover:text-[#651421] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff8ed]">
              Their stories <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 items-center gap-2 py-3 sm:gap-4 lg:gap-5">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-[#f5d4c5]/20 bg-[#7a2431] shadow-[0_20px_48px_rgba(27,0,5,0.28)] -rotate-3">
              <div role="img" aria-label="Reserved for a new artisan portrait" className="absolute inset-2 rounded-[0.95rem] border border-dashed border-[#f5d4c5]/25 bg-[radial-gradient(circle_at_35%_25%,rgba(255,240,226,0.08),transparent_35%)] sm:inset-3" />
            </figure>
            <figure className="relative aspect-[4/5] translate-y-3 overflow-hidden rounded-[1.35rem] border border-[#f5d4c5]/20 bg-[#7a2431] shadow-[0_20px_48px_rgba(27,0,5,0.28)] rotate-3 sm:translate-y-4">
              <div role="img" aria-label="Reserved for a new artisan portrait" className="absolute inset-2 rounded-[0.95rem] border border-dashed border-[#f5d4c5]/25 bg-[radial-gradient(circle_at_35%_25%,rgba(255,240,226,0.08),transparent_35%)] sm:inset-3" />
            </figure>
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-[#f5d4c5]/20 bg-[#7a2431] shadow-[0_20px_48px_rgba(27,0,5,0.28)] -rotate-2">
              <div role="img" aria-label="Reserved for a new artisan portrait" className="absolute inset-2 rounded-[0.95rem] border border-dashed border-[#f5d4c5]/25 bg-[radial-gradient(circle_at_35%_25%,rgba(255,240,226,0.08),transparent_35%)] sm:inset-3" />
            </figure>
          </div>
        </Container>
        <StitchPath className="pointer-events-none absolute -bottom-16 left-[26%] z-0 w-[34rem] rotate-[-5deg] text-[#f3bda5]/50" />
      </section>

      <section className="py-7 sm:py-8 lg:py-9">
        <Container>
          <div className="mx-auto mb-5 max-w-3xl text-center">
            <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#721a27]">Our process</p>
            <h2 className="font-sans text-2xl font-medium leading-tight tracking-[-0.025em] text-[#4e111c] sm:text-3xl lg:text-4xl">From discarded textile to useful object.</h2>
          </div>
          <div className="relative mx-auto max-w-5xl">
            <svg className="pointer-events-none absolute left-[12%] top-8 hidden h-12 w-[76%] sm:block" viewBox="0 0 900 80" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 40 C75 2 150 2 225 40 S375 78 450 40 S600 2 675 40 S825 78 900 40" fill="none" stroke="#b98478" strokeLinecap="round" strokeWidth="2" strokeDasharray="8 10" />
            </svg>
            <ol className="relative grid grid-cols-3 gap-2 sm:gap-6">
            {processSteps.map((step) => (
              <li key={step.title} className="relative z-10 text-center">
                <div className="relative mx-auto h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                  <Image src={step.image} alt={step.alt} fill className="object-contain" sizes="96px" />
                </div>
                <span className="mt-2 block text-[0.58rem] font-bold tracking-[0.2em] text-[#9b695c] sm:text-[0.65rem]">{step.number}</span>
                <h3 className="mt-1 font-sans text-base font-semibold text-[#55131e] sm:text-lg">{step.title}</h3>
                <p className="mx-auto mt-1 max-w-[14rem] text-[0.68rem] leading-4 text-[#5c4d47] sm:text-xs sm:leading-5">{step.copy}</p>
              </li>
            ))}
            </ol>
          </div>
        </Container>
      </section>
    </main>
  );
}
