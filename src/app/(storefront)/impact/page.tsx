import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UserRound } from "lucide-react";
import { ImpactComparison } from "@/components/impact/ImpactComparison";
import { ImpactStat } from "@/components/impact/ImpactStat";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Our Impact",
  "See how KatranKaari connects textile upcycling, thoughtful design and women-led livelihood opportunities in Jamnagar.",
  "/impact",
);

const historicalImpact = [
  {
    amount: 1,
    suffix: " MT",
    label: "Textile waste upcycled",
    detail: "Approximately one metric tonne transformed into products during FY 2023–24.",
  },
  {
    amount: 75,
    label: "Women trained",
    detail: "Women trained in textile upcycling and product-making over two years.",
  },
  {
    amount: 75,
    label: "Home-based businesses",
    detail: "Trained women reported to have started independent home-based enterprises.",
  },
  {
    amount: 3000,
    prefix: "₹",
    label: "Additional monthly income",
    detail: "Approximate additional income reported per woman each month.",
  },
];

const materialSteps = [
  {
    number: "01",
    title: "Recover what remains",
    copy: "Discarded and surplus textiles are gathered before they lose their value.",
  },
  {
    number: "02",
    title: "Design with what exists",
    copy: "Colour, texture and size guide the design instead of demanding new material.",
  },
  {
    number: "03",
    title: "Make for everyday use",
    copy: "Skilled hands turn the recovered fabric into useful products made to be used again and again.",
  },
];

const artisanStories = [
  {
    number: "01",
    artisan: "Artisan 01",
    title: "Learning the rhythm",
    copy: "Cutting, stitching and finishing turn a new technique into a skill she can carry into home-based work.",
    quote: "A first stitch becomes a new way forward.",
  },
  {
    number: "02",
    artisan: "Artisan 02",
    title: "A craft of her own",
    copy: "Each completed piece builds the confidence to suggest ideas, refine products and take greater ownership of the craft.",
    quote: "Confidence grows with every finished piece.",
  },
  {
    number: "03",
    artisan: "Artisan 03",
    title: "Making room to grow",
    copy: "Flexible textile work creates another route to income and experience, grown at a pace that fits her life.",
    quote: "The possibility grows beyond the product.",
  },
];

export default function ImpactPage() {
  return (
    <main className="overflow-hidden bg-[#FAF4E9] text-[#493D37]">
      <section id="impact-hero" className="relative overflow-hidden border-b border-[#4A0613] bg-[#580716] pb-5 pt-[88px] text-[#FAF4E9] sm:pb-6 sm:pt-[94px] lg:pb-7 lg:pt-[102px]">
        <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#B7827D]/25 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
          <div className="relative z-10 max-w-xl">
            <p className="flex items-center gap-4 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#E7BDB2]">
              Our impact <span className="h-px w-16 bg-[#E7BDB2]/75" aria-hidden="true" />
            </p>
            <h1 className="mt-3 font-sans text-[clamp(2.2rem,3.5vw,3.7rem)] font-normal leading-[0.95] tracking-[-0.04em] text-[#FFF8ED]">
              What remains
              <span className="block italic text-[#E7BDB2]">becomes possibility.</span>
            </h1>
            <p className="mt-3 max-w-lg text-[0.82rem] leading-5 text-[#F2DFD3]/88 sm:text-sm sm:leading-6">
              KatranKaari brings circular design and community enterprise into the same frame—giving discarded textiles a useful next chapter and women new ways to create, earn and grow.
            </p>
            <a className="group mt-4 inline-flex items-center gap-3 border-b border-[#FAF4E9]/75 pb-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.17em] text-[#FAF4E9]" href="#impact-ledger">
              See the evidence <span className="transition-transform group-hover:translate-y-1" aria-hidden="true">↓</span>
            </a>
          </div>

          <ImpactComparison />
        </Container>
      </section>

      <section id="impact-ledger" className="relative scroll-mt-24 overflow-hidden bg-[#FAF4E9] py-8 text-[#493D37] sm:py-10 lg:py-11">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E")` }} aria-hidden="true" />
        <Container className="relative">
          <ScrollReveal>
            <div className="grid gap-4 border-b border-[#B7827D]/45 pb-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#681426]">Historical impact ledger</p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#8B6F62]">Project Swachh Halar · Jamnagar</p>
              </div>
              <h2 className="max-w-4xl font-sans text-[clamp(2.1rem,3.4vw,3.5rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#4D101D]">
                Evidence of materials and livelihoods moving forward.
              </h2>
            </div>
          </ScrollReveal>

          <dl className="grid gap-x-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7">
            {historicalImpact.map((item, index) => (
              <ScrollReveal className="h-full" delay={index * 110} key={item.label}>
                <div className="flex h-full flex-col border-b border-[#B7827D]/35 py-5 sm:border-r sm:pr-5 lg:min-h-[11.5rem] lg:border-b-0 lg:py-5 lg:pr-7 last:border-r-0 last:pr-0">
                  <span className="text-[0.62rem] font-bold tracking-[0.24em] text-[#B7827D]">0{index + 1}</span>
                  <dt className="mt-4 font-sans text-[clamp(2.5rem,3.5vw,3.8rem)] font-normal leading-none tracking-[-0.04em] text-[#681426]">
                    <ImpactStat amount={item.amount} prefix={item.prefix} suffix={item.suffix} />
                  </dt>
                  <dd className="mt-auto pt-4">
                    <strong className="block text-sm font-extrabold uppercase tracking-[0.12em] text-[#681426]">{item.label}</strong>
                    <span className="mt-1.5 block text-xs leading-5 text-[#62534B]">{item.detail}</span>
                  </dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>

          <div className="mt-4 flex flex-col gap-3 border-t border-[#B7827D]/45 pt-4 text-[0.68rem] leading-5 text-[#715C52] sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-2xl">Figures describe the wider Project Swachh Halar incubation centre that gave rise to KatranKaari. Reporting periods vary by source.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-bold uppercase tracking-[0.1em]">
              <a className="transition-colors hover:text-[#681426]" href="https://www.nayaraenergy.com/storage/annual-reports/August2024/fBCWmGRSDtx4cToBy915.pdf" target="_blank" rel="noreferrer">Annual report 2023–24 ↗</a>
              <a className="transition-colors hover:text-[#681426]" href="https://www.outlookindia.com/csr/csr-2023/nayara" target="_blank" rel="noreferrer">Project feature ↗</a>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative border-b border-[#4D101D] bg-[#580716] py-8 text-[#FAF4E9] sm:py-10 lg:py-12">
        <Container>
          <ScrollReveal>
            <div className="grid gap-4 lg:grid-cols-[0.48fr_1.52fr] lg:items-end">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#D7AAA5]">Material in motion</p>
              <h2 className="max-w-5xl font-sans text-[clamp(2.3rem,3.7vw,3.8rem)] font-normal leading-[0.98] tracking-[-0.04em] text-[#FFF8ED]">
                The outcome begins long before the final stitch.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.16fr_0.84fr] lg:gap-10">
            <ScrollReveal>
              <div className="relative aspect-[16/8] overflow-hidden bg-[#EADAC7]">
                <Image src="/katrankaari/impact-stitching-closeup.webp" alt="A close view of an artisan guiding layered fabric beneath a sewing-machine needle" fill className="object-cover object-center" sizes="(min-width: 1024px) 60vw, 100vw" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2E0911]/80 to-transparent px-5 pb-5 pt-20 text-[#FFF8ED] sm:px-7 sm:pb-7">
                  <p className="max-w-xl font-sans text-xl font-normal leading-tight sm:text-2xl">Craft turns irregular scraps into something dependable, useful and worth keeping.</p>
                </div>
              </div>
            </ScrollReveal>

            <ol className="relative divide-y divide-[#D7AAA5]/35 border-y border-[#D7AAA5]/35">
              <svg className="pointer-events-none absolute bottom-7 left-[1.4rem] top-7 hidden w-3 sm:block" viewBox="0 0 12 360" preserveAspectRatio="none" aria-hidden="true">
                <path className="process-thread" d="M6 0 C1 48 11 84 6 130 S1 218 6 264 S11 324 6 360" fill="none" stroke="#D7AAA5" strokeLinecap="round" strokeWidth="1.8" strokeDasharray="7 10" vectorEffect="non-scaling-stroke" />
              </svg>
              {materialSteps.map((step, index) => (
                <ScrollReveal delay={index * 100} key={step.number}>
                  <li className="relative z-10 grid grid-cols-[3.2rem_1fr] gap-3 py-4 sm:grid-cols-[3.6rem_1fr] lg:py-5">
                    <span className="relative z-10 w-max bg-[#580716] py-1 font-sans text-xl font-normal text-[#D7AAA5] sm:text-2xl">{step.number}</span>
                    <div>
                      <h3 className="font-sans text-xl font-normal leading-none text-[#FFF8ED] sm:text-2xl">{step.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-5 text-[#EADAC7]/82 sm:leading-6">{step.copy}</p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section id="artisan-stories" className="relative scroll-mt-24 overflow-hidden bg-[#FAF4E9] py-8 sm:py-9 lg:py-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-[#B7827D]/25" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full border border-[#B7827D]/25" aria-hidden="true" />
        <Container className="relative">
          <ScrollReveal>
            <div className="grid gap-5 lg:grid-cols-[0.58fr_1.42fr] lg:items-end lg:gap-12">
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#681426]">The hands behind the impact</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#8B6F62]">Artisan stories</p>
              </div>
              <div>
                <h2 className="max-w-4xl font-sans text-[clamp(2.15rem,3.4vw,3.6rem)] font-normal leading-[0.98] tracking-[-0.035em] text-[#4D101D]">Every maker carries a story beyond the stitch.</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#5B4A42]">Skill, independence and possibility take a different shape in every pair of hands.</p>
              </div>
            </div>
          </ScrollReveal>

          <ol className="mt-7 grid gap-7 md:grid-cols-3 lg:gap-12">
            {artisanStories.map((story, index) => (
              <ScrollReveal className="h-full" delay={index * 110} key={story.number}>
                <li className="group relative flex h-full flex-col border-t border-[#B7827D]/55 pt-5 md:min-h-[16rem]">
                  <div className="flex items-start justify-between gap-5">
                    <div className="relative grid h-20 w-16 shrink-0 place-items-center overflow-hidden rounded-t-full border border-dashed border-[#B7827D]/65 bg-[radial-gradient(circle_at_50%_25%,#F1DFD0,transparent_58%),linear-gradient(145deg,#F8EEE2,#E8D4C3)] text-[#9B625F]" role="img" aria-label={`Portrait placeholder for ${story.artisan}`}>
                      <UserRound aria-hidden="true" size={28} strokeWidth={1.25} />
                    </div>
                    <div className="text-right">
                      <span className="block font-sans text-3xl font-normal leading-none text-[#B7827D] transition-colors duration-300 group-hover:text-[#681426]">{story.number}</span>
                      <span className="mt-2 block text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#A26F69]">{story.artisan}</span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-sans text-[1.65rem] font-normal leading-none tracking-[-0.03em] text-[#4D101D] sm:text-[1.8rem]">{story.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#62534B]">{story.copy}</p>
                  <blockquote className="mt-auto pt-5 font-sans text-base italic leading-6 text-[#681426]">“{story.quote}”</blockquote>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-[#C69288]/30 bg-[#580716] py-7 text-[#FAF4E9] sm:py-9">
        <Container className="grid items-center gap-7 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.25em] text-[#D7AAA5]">Keep the material moving</p>
            <h2 className="mt-2 max-w-4xl font-sans text-[clamp(2rem,3vw,3.2rem)] font-normal leading-[1]">Choose a product with another chapter already inside it.</h2>
          </div>
          <Link className="group inline-flex min-h-12 w-max items-center gap-3 border border-[#FAF4E9]/70 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.15em] transition hover:bg-[#FAF4E9] hover:text-[#580716] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF4E9]" href="/shop">
            Explore products <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </section>
    </main>
  );
}
