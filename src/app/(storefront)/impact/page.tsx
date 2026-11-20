import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImpactComparison } from "@/components/impact/ImpactComparison";
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
    value: "1 MT",
    label: "Textile waste upcycled",
    detail: "Approximately one metric tonne transformed into products during FY 2023–24.",
  },
  {
    value: "75",
    label: "Women trained",
    detail: "Women trained in textile upcycling and product-making over two years.",
  },
  {
    value: "75",
    label: "Home-based businesses",
    detail: "Trained women reported to have started independent home-based enterprises.",
  },
  {
    value: "₹3,000",
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

export default function ImpactPage() {
  return (
    <main className="overflow-hidden bg-[#FAF4E9] text-[#493D37]">
      <section id="impact-hero" className="relative overflow-hidden border-b border-[#4D101D] bg-[#681426] pb-4 pt-[84px] text-[#FAF4E9] sm:pb-5 sm:pt-[88px] lg:pb-6 lg:pt-[96px]">
        <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#B7827D]/25 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-5 lg:grid-cols-[0.76fr_1.24fr] lg:gap-8">
          <div className="relative z-10 max-w-xl">
            <p className="flex items-center gap-4 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#E7BDB2]">
              Our impact <span className="h-px w-16 bg-[#E7BDB2]/75" aria-hidden="true" />
            </p>
            <h1 className="mt-3 font-sans text-[clamp(2.25rem,3.7vw,3.8rem)] font-normal leading-[0.94] tracking-[-0.045em] text-[#FFF8ED]">
              What remains
              <span className="block italic text-[#E7BDB2]">becomes possibility.</span>
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-5 text-[#F2DFD3]/88 sm:leading-6">
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

          <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
            {historicalImpact.map((item, index) => (
              <ScrollReveal className="h-full" delay={index * 110} key={item.label}>
                <div className="flex h-full flex-col border-b border-[#B7827D]/35 py-5 sm:border-r sm:px-5 lg:min-h-[11.5rem] lg:border-b-0 lg:px-6 lg:py-5 first:pl-0 last:border-r-0 last:pr-0">
                  <span className="text-[0.62rem] font-bold tracking-[0.24em] text-[#B7827D]">0{index + 1}</span>
                  <dt className="mt-4 font-sans text-[clamp(2.5rem,3.5vw,3.8rem)] font-normal leading-none tracking-[-0.04em] text-[#681426]">{item.value}</dt>
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

            <ol className="divide-y divide-[#D7AAA5]/35 border-y border-[#D7AAA5]/35">
              {materialSteps.map((step, index) => (
                <ScrollReveal delay={index * 100} key={step.number}>
                  <li className="grid grid-cols-[3.2rem_1fr] gap-3 py-4 sm:grid-cols-[3.6rem_1fr] lg:py-5">
                    <span className="font-sans text-xl font-normal text-[#D7AAA5] sm:text-2xl">{step.number}</span>
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

      <section className="relative overflow-hidden bg-[#FAF4E9] py-8 sm:py-10 lg:py-12">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-[#B7827D]/25" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full border border-[#B7827D]/25" aria-hidden="true" />
        <Container className="grid items-center gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <ScrollReveal className="order-2 lg:order-1">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#681426]">The human outcome</p>
            <h2 className="mt-3 max-w-2xl font-sans text-[clamp(2.3rem,3.6vw,3.8rem)] font-normal leading-[0.98] tracking-[-0.035em] text-[#4D101D]">
              A skill becomes a choice.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#5B4A42] sm:text-base sm:leading-7">
              Training is only the beginning. When craftsmanship connects with product design and access to markets, it can open routes to independent work, enterprise and greater financial agency.
            </p>
            <div className="mt-5 grid gap-5 border-t border-[#B7827D]/45 pt-5 sm:grid-cols-2">
              <div>
                <p className="font-sans text-2xl font-normal text-[#681426]">Capability</p>
                <p className="mt-2 text-sm leading-6 text-[#62534B]">Practical making, finishing and product-development skills.</p>
              </div>
              <div>
                <p className="font-sans text-2xl font-normal text-[#681426]">Agency</p>
                <p className="mt-2 text-sm leading-6 text-[#62534B]">More ways to participate, earn and build work on individual terms.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2" delay={120}>
            <div className="relative aspect-[16/9] overflow-hidden border-[0.65rem] border-[#FAF4E9] bg-[#681426] shadow-[0_28px_60px_rgba(77,16,29,0.16)] sm:border-[0.8rem]">
              <Image src="/katrankaari/maker.png" alt="A woman artisan presenting a textile product she created" fill className="object-cover object-center" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-[#4D101D] py-7 text-[#FAF4E9] sm:py-9">
        <Container className="grid items-center gap-7 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.25em] text-[#D7AAA5]">Keep the material moving</p>
            <h2 className="mt-2 max-w-4xl font-sans text-[clamp(2rem,3vw,3.2rem)] font-normal leading-[1]">Choose a product with another chapter already inside it.</h2>
          </div>
          <Link className="group inline-flex min-h-12 w-max items-center gap-3 border border-[#FAF4E9]/70 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.15em] transition hover:bg-[#FAF4E9] hover:text-[#4D101D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF4E9]" href="/shop">
            Explore products <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </section>
    </main>
  );
}
