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
    image: "/katrankaari/fabric-waste.png",
    alt: "Discarded textile pieces ready to be sorted",
  },
  {
    number: "02",
    title: "Reimagine",
    copy: "Colours, prints and offcuts are composed into practical new forms.",
    image: "/katrankaari/patchwork-stitching.png",
    alt: "Colourful textile offcuts being stitched into patchwork",
  },
  {
    number: "03",
    title: "Remake",
    copy: "Women artisans bring every design to life with skill, care and precision.",
    image: "/katrankaari/stitching-closeup.png",
    alt: "Close-up of a KatranKaari piece being sewn",
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
      <section className="relative isolate overflow-hidden border-b border-[#4b0d17] bg-[#651421] text-[#fff8ed] shadow-[inset_0_-1px_rgba(20,0,4,0.28)]">
        <div className="grid min-h-[32rem] sm:min-h-[36rem] lg:min-h-[480px] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10 flex items-center px-5 py-12 sm:px-8 sm:py-14 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pr-10">
            <div className="max-w-xl">
              <p className="mb-4 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#f4c8b6]">Our Story</p>
              <h1 className="font-display text-[clamp(3.4rem,6vw,5.8rem)] font-semibold leading-[0.86] tracking-[-0.04em] text-[#fff8ed]">
                Every scrap
                <span className="block">has a story.</span>
              </h1>
              <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-[#f8e8dc]/85 sm:text-base">Transforming textile waste into meaningful products and opportunities.</p>
            </div>
          </div>

          <div className="relative min-h-[22rem] overflow-hidden lg:min-h-full">
            <Image src="/katrankaari/artisan-maker.png" alt="KatranKaari woman artisan holding a finished textile piece beside her sewing machine" fill priority className="object-cover object-[42%_center]" sizes="(min-width: 1024px) 59vw, 100vw" />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#651421] to-transparent lg:block" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#5d1420]/25 to-transparent" aria-hidden="true" />
          </div>
        </div>
        <StitchPath className="pointer-events-none absolute left-[31%] top-[4%] hidden w-[34rem] text-[#f3bda5]/55 lg:block" />
      </section>

      <section className="relative border-b border-[#d9c3ae] py-10 sm:py-12 lg:py-14">
        <Container className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.2rem] bg-[#ead9c7] shadow-[0_18px_42px_rgba(89,30,26,0.12)]">
            <Image src="/katrankaari/fabric-closeup.png" alt="Recovered printed textiles gathered for reuse" fill className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
          </div>
          <div className="relative">
            <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#721a27]">How it all started</p>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-[#4e111c] sm:text-5xl lg:text-6xl">The KatranKaari Journey</h2>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-[#554943] sm:text-base">Born in Jamnagar under Project Swachh Halar, an initiative supported by Nayara Energy, KatranKaari gives discarded textiles a second life while creating sustainable livelihoods for women in the community.</p>
            <div className="mt-6 h-0.5 w-16 rounded-full bg-[#721a27]" aria-hidden="true" />
          </div>
        </Container>
        <StitchPath className="pointer-events-none absolute -bottom-14 right-[-5rem] hidden w-[28rem] rotate-[8deg] text-[#b96d63]/45 lg:block" />
      </section>

      <section id="artisan-stories" className="relative overflow-hidden bg-[#651421] py-12 text-[#fff8ed] shadow-[inset_0_1px_rgba(255,255,255,0.06),inset_0_-1px_rgba(20,0,4,0.25)] sm:py-14 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(120deg,transparent_0%,rgba(45,0,9,0.2)_100%)]" aria-hidden="true" />
        <Container className="relative grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
          <div className="max-w-xl">
            <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#f4c8b6]">The hands behind every stitch</p>
            <h2 className="font-display text-4xl font-semibold leading-[0.94] tracking-[-0.03em] sm:text-5xl lg:text-6xl">Meet Our Artisans</h2>
            <p className="mt-4 text-[0.95rem] leading-7 text-[#f8e8dc]/85 sm:text-base">A community of skilled and passionate women who turn fabric waste into thoughtfully crafted, timeless products.</p>
            <Link href="/impact" className="mt-6 inline-flex min-h-11 items-center gap-4 rounded-button border border-[#f8e8dc]/70 px-5 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition hover:bg-[#fff8ed] hover:text-[#651421] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff8ed]">
              Their stories <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid min-h-[24rem] grid-cols-12 grid-rows-12 gap-3 sm:min-h-[28rem]">
            <figure className="relative col-span-8 row-span-10 overflow-hidden rounded-[1.5rem] bg-[#f0d8c3] shadow-[0_20px_48px_rgba(27,0,5,0.28)] sm:col-span-7 lg:-rotate-2">
              <Image src="/katrankaari/artisan-maker.png" alt="KatranKaari woman artisan with her sewing machine and a finished product" fill className="object-cover object-[30%_center]" sizes="(min-width: 1024px) 36vw, 65vw" />
            </figure>
            <figure className="relative col-span-5 col-start-8 row-span-5 row-start-2 overflow-hidden rounded-[1.35rem] bg-[#ecd4bf] shadow-[0_16px_36px_rgba(27,0,5,0.22)] sm:col-start-8 lg:rotate-3">
              <Image src="/katrankaari/patchwork-stitching.png" alt="Artisan hands guiding colourful patchwork through a sewing machine" fill className="object-cover" sizes="(min-width: 1024px) 24vw, 42vw" />
            </figure>
            <figure className="relative col-span-6 col-start-7 row-span-5 row-start-7 overflow-hidden rounded-[1.35rem] bg-[#ecd4bf] shadow-[0_16px_36px_rgba(27,0,5,0.22)] sm:col-span-5 sm:col-start-8 lg:rotate-2">
              <Image src="/katrankaari/stitching-closeup.png" alt="Close-up of careful stitching on a textile product" fill className="object-cover" sizes="(min-width: 1024px) 24vw, 42vw" />
            </figure>
          </div>
        </Container>
        <StitchPath className="pointer-events-none absolute -bottom-16 left-[26%] w-[34rem] rotate-[-5deg] text-[#f3bda5]/50" />
      </section>

      <section className="py-12 sm:py-14 lg:py-16">
        <Container>
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
            <p className="mb-3 text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#721a27]">Our process</p>
            <h2 className="font-display text-4xl font-semibold leading-[0.96] tracking-[-0.03em] text-[#4e111c] sm:text-5xl">From discarded textile to useful object.</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.title} className="overflow-hidden rounded-[1.15rem] border border-[#ddc7b3] bg-[#fff9f1] shadow-[0_10px_28px_rgba(89,30,26,0.06)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#ead9c7]">
                  <Image src={step.image} alt={step.alt} fill className="object-cover transition duration-500 hover:scale-[1.03]" sizes="(min-width: 1024px) 31vw, 100vw" />
                </div>
                <div className="p-5">
                  <span className="text-[0.68rem] font-bold tracking-[0.2em] text-[#9b695c]">{step.number}</span>
                  <h3 className="mt-2 font-display text-3xl font-semibold text-[#55131e]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5c4d47]">{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
