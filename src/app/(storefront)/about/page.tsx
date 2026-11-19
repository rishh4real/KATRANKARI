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
    <main className="overflow-hidden bg-[#fbf1e5] text-[#2a1b19]">
      <section className="relative isolate overflow-hidden border-b border-[#ddc7b3] bg-[#fbf1e5]">
        <div className="grid min-h-[calc(100svh-72px)] lg:min-h-[670px] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative z-10 flex items-center px-5 py-16 sm:px-8 sm:py-20 lg:pl-[max(2.5rem,calc((100vw-90rem)/2+2.5rem))] lg:pr-12">
            <div className="max-w-xl">
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#721a27]">Our Story</p>
              <h1 className="font-display text-[clamp(4rem,8vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.045em] text-[#5d1420]">
                Every scrap
                <span className="block">has a story.</span>
              </h1>
              <p className="mt-8 max-w-md text-base leading-7 text-[#4d403a] sm:text-lg sm:leading-8">Transforming textile waste into meaningful products and opportunities.</p>
            </div>
          </div>

          <div className="relative min-h-[28rem] overflow-hidden lg:min-h-full">
            <Image src="/katrankaari/artisan-maker.png" alt="KatranKaari woman artisan holding a finished textile piece beside her sewing machine" fill priority className="object-cover object-[42%_center]" sizes="(min-width: 1024px) 59vw, 100vw" />
            <div className="absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-[#fbf1e5] to-transparent lg:block" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#5d1420]/25 to-transparent" aria-hidden="true" />
          </div>
        </div>
        <StitchPath className="pointer-events-none absolute left-[31%] top-[4%] hidden w-[34rem] text-[#b96d63]/50 lg:block" />
      </section>

      <section className="relative border-b border-[#ddc7b3] py-16 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-[#ead9c7] shadow-[0_24px_60px_rgba(89,30,26,0.14)]">
            <Image src="/katrankaari/fabric-closeup.png" alt="Recovered printed textiles gathered for reuse" fill className="object-cover" sizes="(min-width: 1024px) 42vw, 100vw" />
          </div>
          <div className="relative">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-[#721a27]">How it all started</p>
            <h2 className="max-w-2xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-[#4e111c] sm:text-6xl lg:text-7xl">The KatranKaari Journey</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#554943] sm:text-lg">Born in Jamnagar under Project Swachh Halar, an initiative supported by Nayara Energy, KatranKaari gives discarded textiles a second life while creating sustainable livelihoods for women in the community.</p>
            <div className="mt-9 h-1 w-24 rounded-full bg-[#721a27]" aria-hidden="true" />
          </div>
        </Container>
        <StitchPath className="pointer-events-none absolute -bottom-14 right-[-5rem] hidden w-[28rem] rotate-[8deg] text-[#b96d63]/45 lg:block" />
      </section>

      <section id="artisan-stories" className="relative overflow-hidden bg-[#651421] py-16 text-[#fff8ed] sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(120deg,transparent_0%,rgba(45,0,9,0.2)_100%)]" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-[#f4c8b6]">The hands behind every stitch</p>
            <h2 className="font-display text-5xl font-semibold leading-[0.92] tracking-[-0.035em] sm:text-6xl lg:text-7xl">Meet Our Artisans</h2>
            <p className="mt-6 text-base leading-8 text-[#f8e8dc]/85 sm:text-lg">A community of skilled and passionate women who turn fabric waste into thoughtfully crafted, timeless products.</p>
            <Link href="/impact" className="mt-9 inline-flex min-h-12 items-center gap-5 rounded-button border border-[#f8e8dc]/70 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] transition hover:bg-[#fff8ed] hover:text-[#651421] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#fff8ed]">
              Their stories <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid min-h-[31rem] grid-cols-12 grid-rows-12 gap-4 sm:min-h-[39rem]">
            <figure className="relative col-span-8 row-span-10 overflow-hidden rounded-[2rem] bg-[#f0d8c3] shadow-[0_24px_60px_rgba(27,0,5,0.3)] sm:col-span-7 lg:-rotate-2">
              <Image src="/katrankaari/artisan-maker.png" alt="KatranKaari woman artisan with her sewing machine and a finished product" fill className="object-cover object-[30%_center]" sizes="(min-width: 1024px) 36vw, 65vw" />
            </figure>
            <figure className="relative col-span-5 col-start-8 row-span-5 row-start-2 overflow-hidden rounded-[1.7rem] bg-[#ecd4bf] shadow-[0_20px_45px_rgba(27,0,5,0.24)] sm:col-start-8 lg:rotate-3">
              <Image src="/katrankaari/patchwork-stitching.png" alt="Artisan hands guiding colourful patchwork through a sewing machine" fill className="object-cover" sizes="(min-width: 1024px) 24vw, 42vw" />
            </figure>
            <figure className="relative col-span-6 col-start-7 row-span-5 row-start-7 overflow-hidden rounded-[1.7rem] bg-[#ecd4bf] shadow-[0_20px_45px_rgba(27,0,5,0.24)] sm:col-span-5 sm:col-start-8 lg:rotate-2">
              <Image src="/katrankaari/stitching-closeup.png" alt="Close-up of careful stitching on a textile product" fill className="object-cover" sizes="(min-width: 1024px) 24vw, 42vw" />
            </figure>
          </div>
        </Container>
        <StitchPath className="pointer-events-none absolute -bottom-16 left-[26%] w-[34rem] rotate-[-5deg] text-[#f3bda5]/50" />
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-[#721a27]">Our process</p>
            <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.035em] text-[#4e111c] sm:text-6xl">From discarded textile to useful object.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.title} className="overflow-hidden rounded-[1.4rem] border border-[#ddc7b3] bg-[#fff9f1]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ead9c7]">
                  <Image src={step.image} alt={step.alt} fill className="object-cover transition duration-500 hover:scale-[1.03]" sizes="(min-width: 1024px) 31vw, 100vw" />
                </div>
                <div className="p-6 sm:p-7">
                  <span className="text-xs font-bold tracking-[0.18em] text-[#9b695c]">{step.number}</span>
                  <h3 className="mt-3 font-display text-4xl font-semibold text-[#55131e]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5c4d47]">{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
