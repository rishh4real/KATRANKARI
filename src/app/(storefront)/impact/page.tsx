import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      <section className="relative overflow-hidden border-b border-[#D8C4AF] bg-[#FAF4E9] py-10 sm:py-14 lg:py-16">
        <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#EADAC7]/45 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="relative z-10 max-w-xl">
            <p className="flex items-center gap-4 text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#681426]">
              Our impact <span className="h-px w-16 bg-[#B7827D]" aria-hidden="true" />
            </p>
            <h1 className="mt-5 font-display text-[clamp(3.4rem,6.2vw,6.7rem)] font-semibold leading-[0.82] tracking-[-0.045em] text-[#4D101D]">
              What remains
              <span className="block italic text-[#8F3A45]">becomes possibility.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#62534B] sm:text-lg sm:leading-8">
              KatranKaari brings circular design and community enterprise into the same frame—giving discarded textiles a useful next chapter and women new ways to create, earn and grow.
            </p>
            <a className="group mt-7 inline-flex items-center gap-3 border-b border-[#681426] pb-2 text-[0.7rem] font-extrabold uppercase tracking-[0.17em] text-[#681426]" href="#impact-ledger">
              See the evidence <span className="transition-transform group-hover:translate-y-1" aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="relative min-h-[29rem] sm:min-h-[34rem] lg:min-h-[38rem]" aria-label="Discarded textiles transformed into a finished patchwork product">
            <div className="absolute left-0 top-0 h-[72%] w-[68%] overflow-hidden bg-[#681426] shadow-[0_24px_60px_rgba(77,16,29,0.18)]">
              <Image src="/katrankaari/fabric-waste.png" alt="Colourful discarded textile pieces before sorting" fill priority className="object-cover transition-transform duration-700 hover:scale-[1.025]" sizes="(min-width: 1024px) 42vw, 68vw" />
              <span className="absolute left-4 top-4 bg-[#FAF4E9] px-3 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-[#681426]">Discarded</span>
            </div>
            <div className="absolute bottom-0 right-0 h-[69%] w-[66%] overflow-hidden border-[0.7rem] border-[#FAF4E9] bg-white shadow-[0_28px_65px_rgba(77,16,29,0.18)] sm:border-[0.9rem]">
              <Image src="/katrankaari/patchwork-tote-clean.png" alt="Finished patchwork textile product held by hand" fill priority className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]" sizes="(min-width: 1024px) 40vw, 66vw" />
              <span className="absolute bottom-4 right-4 bg-[#681426] px-3 py-2 text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-[#FAF4E9]">Reimagined</span>
            </div>
            <div className="absolute left-[56%] top-[36%] z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#FAF4E9]/70 bg-[#681426] font-display text-3xl text-[#FAF4E9] shadow-lg sm:h-20 sm:w-20 sm:text-4xl" aria-hidden="true">→</div>
          </div>
        </Container>
      </section>

      <section id="impact-ledger" className="relative scroll-mt-24 overflow-hidden bg-[#580716] py-14 text-[#FAF4E9] sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.13] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E")` }} aria-hidden="true" />
        <Container className="relative">
          <ScrollReveal>
            <div className="grid gap-6 border-b border-[#D7AAA5]/35 pb-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#D7AAA5]">Historical impact ledger</p>
                <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#EADAC7]/70">Project Swachh Halar · Jamnagar</p>
              </div>
              <h2 className="max-w-4xl font-display text-[clamp(2.6rem,4.6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-[#FFF8ED]">
                Evidence of materials and livelihoods moving forward.
              </h2>
            </div>
          </ScrollReveal>

          <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
            {historicalImpact.map((item, index) => (
              <ScrollReveal className="h-full" delay={index * 110} key={item.label}>
                <div className="flex h-full flex-col border-b border-[#D7AAA5]/30 py-8 sm:border-r sm:px-6 lg:min-h-[19rem] lg:border-b-0 lg:px-7 lg:py-10 first:pl-0 last:border-r-0 last:pr-0">
                  <span className="text-[0.62rem] font-bold tracking-[0.24em] text-[#D7AAA5]">0{index + 1}</span>
                  <dt className="mt-8 font-display text-[clamp(3.4rem,5vw,5.8rem)] font-semibold leading-none tracking-[-0.04em] text-[#FFF8ED]">{item.value}</dt>
                  <dd className="mt-auto pt-7">
                    <strong className="block text-sm font-extrabold uppercase tracking-[0.12em] text-[#F1D9CC]">{item.label}</strong>
                    <span className="mt-2 block text-sm leading-6 text-[#EADAC7]/78">{item.detail}</span>
                  </dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-4 border-t border-[#D7AAA5]/35 pt-6 text-xs leading-5 text-[#EADAC7]/70 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-2xl">Figures describe the wider Project Swachh Halar incubation centre that gave rise to KatranKaari. Reporting periods vary by source.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-bold uppercase tracking-[0.1em]">
              <a className="transition-colors hover:text-white" href="https://www.nayaraenergy.com/storage/annual-reports/August2024/fBCWmGRSDtx4cToBy915.pdf" target="_blank" rel="noreferrer">Annual report 2023–24 ↗</a>
              <a className="transition-colors hover:text-white" href="https://www.outlookindia.com/csr/csr-2023/nayara" target="_blank" rel="noreferrer">Project feature ↗</a>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative border-b border-[#D8C4AF] bg-[#FAF4E9] py-14 sm:py-18 lg:py-24">
        <Container>
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-[0.48fr_1.52fr] lg:items-end">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#681426]">Material in motion</p>
              <h2 className="max-w-5xl font-display text-[clamp(3rem,5.4vw,6rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-[#4D101D]">
                The outcome begins long before the final stitch.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.16fr_0.84fr] lg:gap-14">
            <ScrollReveal>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EADAC7]">
                <Image src="/katrankaari/stitching-closeup.png" alt="Hands guiding recovered fabric through a sewing machine" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2E0911]/80 to-transparent px-5 pb-5 pt-20 text-[#FFF8ED] sm:px-7 sm:pb-7">
                  <p className="max-w-xl font-display text-2xl font-semibold leading-tight sm:text-3xl">Craft turns irregular scraps into something dependable, useful and worth keeping.</p>
                </div>
              </div>
            </ScrollReveal>

            <ol className="divide-y divide-[#CDB7A3] border-y border-[#CDB7A3]">
              {materialSteps.map((step, index) => (
                <ScrollReveal delay={index * 100} key={step.number}>
                  <li className="grid grid-cols-[3.2rem_1fr] gap-3 py-7 sm:grid-cols-[4.2rem_1fr] lg:py-8">
                    <span className="font-display text-2xl font-semibold text-[#B7827D] sm:text-3xl">{step.number}</span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold leading-none text-[#4D101D] sm:text-3xl">{step.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-[#62534B] sm:text-base sm:leading-7">{step.copy}</p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#EADAC7] py-14 sm:py-18 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border border-[#B7827D]/25" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full border border-[#B7827D]/25" aria-hidden="true" />
        <Container className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <ScrollReveal className="order-2 lg:order-1">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#681426]">The human outcome</p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.035em] text-[#4D101D]">
              A skill becomes a choice.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#5B4A42] sm:text-lg sm:leading-8">
              Training is only the beginning. When craftsmanship connects with product design and access to markets, it can open routes to independent work, enterprise and greater financial agency.
            </p>
            <div className="mt-8 grid gap-6 border-t border-[#B7827D]/45 pt-7 sm:grid-cols-2">
              <div>
                <p className="font-display text-3xl font-semibold text-[#681426]">Capability</p>
                <p className="mt-2 text-sm leading-6 text-[#62534B]">Practical making, finishing and product-development skills.</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-[#681426]">Agency</p>
                <p className="mt-2 text-sm leading-6 text-[#62534B]">More ways to participate, earn and build work on individual terms.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="order-1 lg:order-2" delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden border-[0.75rem] border-[#FAF4E9] bg-[#681426] shadow-[0_28px_60px_rgba(77,16,29,0.16)] sm:border-[1rem]">
              <Image src="/katrankaari/maker.png" alt="A woman artisan presenting a textile product she created" fill className="object-cover object-center" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-[#4D101D] py-12 text-[#FAF4E9] sm:py-16">
        <Container className="grid items-center gap-7 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.25em] text-[#D7AAA5]">Keep the material moving</p>
            <h2 className="mt-3 max-w-4xl font-display text-[clamp(2.5rem,4vw,4.6rem)] font-semibold leading-[0.92]">Choose a product with another chapter already inside it.</h2>
          </div>
          <Link className="group inline-flex min-h-12 w-max items-center gap-3 border border-[#FAF4E9]/70 px-6 py-3 text-xs font-extrabold uppercase tracking-[0.15em] transition hover:bg-[#FAF4E9] hover:text-[#4D101D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF4E9]" href="/shop">
            Explore products <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Container>
      </section>
    </main>
  );
}
