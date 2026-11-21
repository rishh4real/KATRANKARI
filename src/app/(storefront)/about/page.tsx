import Image from "next/image";
import Link from "next/link";
import { StoryFoundation, type FoundationItem } from "@/components/about/StoryFoundation";
import { StoryTimeline, type JourneyMilestone } from "@/components/about/StoryTimeline";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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

const foundationItems: FoundationItem[] = [
  { number: "01", title: "Project Swachh Halar", role: "Our Foundation", description: "A community-driven initiative promoting responsible waste management, resource recovery and circularity.", icon: "sustainability" },
  { number: "02", title: "Nayara Energy", role: "CSR Initiative", description: "Supporting sustainable development and community empowerment through Project Swachh Halar.", icon: "collaboration" },
  { number: "03", title: "CSR Trust for SDGs in India", role: "Implementation Partner", description: "Working towards sustainable development through community-led environmental and social initiatives.", icon: "community" },
  { number: "04", title: "Jamnagar, Gujarat", role: "Our Roots", description: "The community where discarded textiles are reimagined through craftsmanship and livelihood opportunities.", icon: "location" },
];

const journeyMilestones: JourneyMilestone[] = [
  { number: "01", title: "The Foundation", description: "Project Swachh Halar introduces a community-driven approach to responsible waste management.", icon: "foundation" },
  { number: "02", title: "The Beginning", description: "The textile upcycling incubation centre in Jamnagar introduces vocational training and upcycling opportunities for local women.", icon: "beginning" },
  { number: "03", title: "Creating Opportunities", description: "Women develop new skills and explore independent livelihood opportunities through textile craftsmanship.", icon: "opportunity" },
  { number: "04", title: "The KatranKaari Identity", description: "Discarded textiles are transformed into thoughtfully crafted, functional everyday products.", icon: "identity" },
];

function StitchPath({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 230" fill="none" aria-hidden="true">
      <path d="M8 196C112 224 162 177 195 120C231 57 273 20 351 19C426 17 468 57 510 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="9 13" />
    </svg>
  );
}

function HeroStitchPath({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1600 350" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 339C188 338 260 299 420 300C585 301 648 278 715 228C765 191 798 165 844 149C909 126 969 108 1035 122C1132 162 1204 119 1286 76C1380 27 1500 51 1600 105" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="11 16" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function ArtisanStitchPath({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1600 520" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M430 485C548 401 646 337 754 354C866 372 911 441 1012 428C1120 414 1154 319 1260 315C1382 311 1451 389 1600 276" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="9 15" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[linear-gradient(135deg,#fff8ef_0%,#f8ecdd_100%)] text-[#2a1b19]">
      <section id="about-hero" className="relative isolate overflow-hidden border-b border-[#4b0d17] bg-[#651421] text-[#fff8ed] shadow-[inset_0_-1px_rgba(20,0,4,0.28)] sm:pb-6 sm:pt-5 lg:pb-0 lg:pt-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,218,191,0.1),transparent_34%),linear-gradient(120deg,rgba(43,0,8,0.22),transparent_58%)]" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.18] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.48'/%3E%3C/svg%3E")` }} aria-hidden="true" />
        <Container className="relative z-10 grid min-h-[13.75rem] grid-cols-[0.82fr_1.18fr] items-center gap-0 sm:min-h-0 sm:grid-cols-[0.72fr_1.28fr] sm:gap-2 lg:grid-cols-[0.64fr_1.36fr] lg:gap-0">
          <div className="hero-content-reveal relative z-10 max-w-md py-3 sm:py-2 lg:py-4">
            <p className="mb-2 flex items-center gap-2 text-[0.52rem] font-extrabold uppercase tracking-[0.2em] text-[#f4c8b6] sm:mb-4 sm:gap-4 sm:text-[0.68rem] sm:tracking-[0.28em]">Our Story <span className="h-px w-8 bg-[#efc7b5]/75 sm:w-14" aria-hidden="true" /></p>
            <h1 className="font-display text-[clamp(1.9rem,8vw,2.3rem)] font-semibold leading-[0.92] tracking-[-0.035em] text-[#fff8ed] sm:text-[3.25rem] lg:text-[clamp(2.75rem,4.4vw,4.3rem)]">
              Every scrap
              <span className="block">has a story.</span>
            </h1>
            <p className="mt-4 hidden max-w-sm text-sm leading-6 text-[#f8e8dc]/85 sm:block sm:text-[0.95rem]">Transforming textile waste into meaningful products and opportunities.</p>
          </div>

          <div className="hero-content-reveal relative h-[13.75rem] sm:h-[22rem] lg:h-[350px] lg:w-full lg:justify-self-end" style={{ animationDelay: "220ms" }} aria-label="KatranKaari woman artisan holding a finished textile piece beside an unbranded sewing machine">
            <div className="about-hero-glow absolute inset-x-[5%] bottom-[-2%] top-[8%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,178,126,0.2),rgba(244,178,126,0.06)_48%,transparent_72%)] blur-2xl" aria-hidden="true" />
            <Image src="/katrankaari/about-hero-cutout.webp" alt="KatranKaari woman artisan holding a finished textile piece beside an unbranded sewing machine" fill priority className="object-contain object-right-bottom drop-shadow-[0_18px_22px_rgba(35,0,7,0.28)] lg:translate-y-10 lg:scale-[1.18] lg:origin-bottom-right" sizes="(min-width: 1024px) 64vw, 58vw" />
          </div>
        </Container>
        <HeroStitchPath className="pointer-events-none absolute inset-0 z-0 h-full w-full text-[#f3bda5]/45 lg:text-[#f3bda5]/55" />
      </section>

      <ScrollReveal>
      <section className="relative overflow-hidden border-b border-[#d9c3ae] py-6 sm:py-7 lg:py-8">
        <Container className="relative z-10 grid items-center gap-6 lg:grid-cols-[0.58fr_1.42fr] lg:gap-8">
          <div className="group relative aspect-[1368/1498] w-full max-w-[16rem] justify-self-center overflow-hidden rounded-[1.2rem] bg-[#ead9c7] shadow-[0_18px_42px_rgba(89,30,26,0.12)] sm:max-w-[21rem]">
            <Image src="/katrankaari/journey-artisans-burgundy-final.webp" alt="Women sorting colourful recovered textiles as part of the KatranKaari journey" fill className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.018] motion-reduce:transition-none" sizes="(min-width: 1024px) 336px, 85vw" />
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
      </ScrollReveal>

      <StoryFoundation eyebrow="The foundation behind us" heading="Rooted in Purpose. Built for Change." description="KatranKaari is rooted in a collective vision of responsible waste management, circularity and community empowerment. Its journey brings together organisations, communities and women artisans to reimagine the possibilities of discarded textiles." items={foundationItems} />

      <StoryTimeline eyebrow="Threads of our journey" heading="From an Initiative to a Purpose." milestones={journeyMilestones} />

      <ScrollReveal>
      <section id="artisan-stories" className="relative overflow-hidden bg-[#651421] py-9 text-[#fff8ed] shadow-[inset_0_1px_rgba(255,255,255,0.06),inset_0_-1px_rgba(20,0,4,0.25)] sm:py-10 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(120deg,transparent_0%,rgba(45,0,9,0.2)_100%)]" aria-hidden="true" />
        <Container className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          <div className="max-w-xl">
            <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#f4c8b6]">The hands behind every stitch</p>
            <h2 className="font-display text-4xl font-semibold leading-[0.94] tracking-[-0.03em] sm:text-5xl">Meet Our Artisans</h2>
            <p className="mt-3 text-[0.95rem] leading-6 text-[#f8e8dc]/85">A community of skilled and passionate women who turn fabric waste into thoughtfully crafted, timeless products.</p>
            <Link href="/impact#artisan-stories" className="mt-5 inline-flex min-h-10 items-center gap-4 rounded-button border border-[#f8e8dc]/70 px-5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition hover:bg-[#fff8ed] hover:text-[#651421] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff8ed]">
              Their stories <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 items-center gap-2 py-3 sm:gap-5 lg:gap-8">
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
        <ArtisanStitchPath className="pointer-events-none absolute inset-0 z-[5] h-full w-full text-[#f3bda5]/45" />
      </section>
      </ScrollReveal>

      <section className="py-7 sm:py-8 lg:py-9">
        <Container>
          <div className="mx-auto mb-5 max-w-3xl text-center">
            <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#721a27]">Our process</p>
            <h2 className="font-sans text-2xl font-medium leading-tight tracking-[-0.025em] text-[#4e111c] sm:text-3xl lg:text-4xl">From discarded textile to useful object.</h2>
          </div>
          <div className="relative mx-auto max-w-5xl">
            <svg className="pointer-events-none absolute left-[12%] top-8 z-0 hidden h-12 w-[76%] sm:block" viewBox="0 0 900 80" preserveAspectRatio="none" aria-hidden="true">
              <path className="process-thread" d="M0 40 C75 2 150 2 225 40 S375 78 450 40 S600 2 675 40 S825 78 900 40" fill="none" stroke="#b98478" strokeLinecap="round" strokeWidth="2" strokeDasharray="8 10" />
            </svg>
            <ol className="relative z-10 grid grid-cols-3 gap-2 sm:gap-6">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative z-10 text-center">
                <div className="about-process-icon relative isolate mx-auto h-16 w-16 rounded-full bg-[#fff8ef] sm:h-20 sm:w-20 lg:h-24 lg:w-24" style={{ animationDelay: `${index * 700}ms` }}>
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

      <ScrollReveal>
      <section className="relative isolate overflow-hidden border-t border-[#4b0d17] bg-[#651421] px-4 py-8 text-center text-[#fff8ed] sm:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,214,184,0.12),transparent_42%),linear-gradient(110deg,rgba(49,0,8,0.28),transparent_48%,rgba(49,0,8,0.2))]" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.2] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.48'/%3E%3C/svg%3E")` }} aria-hidden="true" />
        <div className="absolute -bottom-20 -left-14 h-48 w-80 rotate-[16deg] rounded-[55%_45%_12%_18%] border border-[#d27f78]/20 bg-[linear-gradient(145deg,#8a2837,#5a0e1a_58%,#35050d)] opacity-80 shadow-[0_-18px_45px_rgba(32,0,7,0.35)]" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-12 h-56 w-96 -rotate-[14deg] rounded-[45%_55%_16%_12%] border border-[#d27f78]/20 bg-[linear-gradient(215deg,#8a2837,#5a0e1a_58%,#35050d)] opacity-80 shadow-[0_-18px_45px_rgba(32,0,7,0.35)]" aria-hidden="true" />
        <Container className="relative z-10 translate-y-3 sm:translate-y-8">
          <h2 className="font-display text-[2rem] font-semibold leading-none tracking-[-0.03em] sm:text-5xl">Be Part of Our Story</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-[#f8e8dc]/85 sm:text-base sm:leading-6">Choose products that create impact for people and the planet.</p>
          <div className="mt-5 flex items-center justify-center gap-2 sm:mt-6 sm:gap-5">
            <Link href="/shop" className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 rounded-button bg-[#fff4e5] px-3 py-3 text-[0.68rem] font-bold text-[#651421] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-w-52 sm:flex-none sm:gap-4 sm:px-6 sm:text-sm">
              Explore Our Products <span aria-hidden="true">→</span>
            </Link>
            <Link href="/impact" className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center rounded-button border border-[#fff4e5]/75 px-3 py-3 text-[0.68rem] font-bold text-[#fff8ed] transition hover:-translate-y-0.5 hover:bg-[#fff4e5] hover:text-[#651421] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-w-52 sm:flex-none sm:px-6 sm:text-sm">
              See Our Impact
            </Link>
          </div>
        </Container>
      </section>
      </ScrollReveal>
    </main>
  );
}
