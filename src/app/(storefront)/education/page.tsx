import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Factory,
  Layers3,
  Repeat2,
  Scissors,
  Search,
  Shirt,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Textile Waste Insights: India & the World",
  "Understand textile waste in India and worldwide through current evidence, material flows and practical circular actions.",
  "/education",
);

const wasteTypes = [
  {
    icon: Scissors,
    number: "01",
    title: "Pre-consumer",
    copy: "Fibres, yarn, fabric offcuts, rejected pieces and surplus generated before a textile product reaches the person who will use it.",
  },
  {
    icon: Shirt,
    number: "02",
    title: "Post-consumer",
    copy: "Clothing and household textiles discarded after use, whether because they are worn, damaged, unwanted or no longer needed.",
  },
  {
    icon: Factory,
    number: "03",
    title: "Imported & traded",
    copy: "Used clothing, rags and textile waste that move across borders or between sorting and recycling markets before finding another use.",
  },
];

const indiaStats = [
  {
    value: "7.07M",
    unit: "tonnes / year",
    label: "Textile waste generated in India",
    note: "Ministry of Textiles estimate, ±5% margin of error.",
  },
  {
    value: "2.97M",
    unit: "tonnes / year",
    label: "Pre-consumer waste",
    note: "Waste from yarn, fabric, garmenting and other industrial applications.",
  },
  {
    value: "4.10M",
    unit: "tonnes / year",
    label: "Post-consumer waste",
    note: "Primarily household and commercial discards, including informal flows.",
  },
  {
    value: "1.90M",
    unit: "tonnes / year",
    label: "Incinerated or landfilled",
    note: "The report’s estimated disposal outcome across the mapped waste streams.",
  },
];

const globalStats = [
  {
    value: "92M",
    label: "tonnes of textile waste each year",
    copy: "UNEP and UN-Habitat use this global estimate to describe the scale of the waste challenge.",
  },
  {
    value: "2–8%",
    label: "of global greenhouse gas emissions",
    copy: "The textile sector’s estimated annual share, spanning fibre production through processing and use.",
  },
  {
    value: "8%",
    label: "of fibres came from recycled sources",
    copy: "The global share reported for 2023; textile-to-textile recycling accounted for less than 1%.",
  },
  {
    value: "9%",
    label: "of ocean microplastic pollution",
    copy: "UNEP’s estimate for the share linked to textiles, including microfibres shed from synthetic materials.",
  },
];

const barriers = [
  {
    title: "Materials are mixed",
    copy: "A single product may combine cotton, polyester, elastane, trims, coatings and thread. Separating them at end of use can be technically difficult.",
  },
  {
    title: "Sorting decides value",
    copy: "Colour, fibre, condition and contamination determine whether a textile can be reused, upcycled, recycled or only downcycled.",
  },
  {
    title: "Collection is fragmented",
    copy: "Textiles move through households, factories, charities, traders and informal networks. Without traceability, useful material can be lost or misclassified.",
  },
  {
    title: "Recycling is not one answer",
    copy: "Mechanical and chemical recycling each have limits. Keeping a product in use, repairing it or reusing intact fabric can preserve more of its existing value.",
  },
];

const circularActions = [
  {
    icon: Search,
    number: "01",
    title: "Know the material",
    copy: "Clear composition and origin information makes later sorting and recovery more possible.",
  },
  {
    icon: Repeat2,
    number: "02",
    title: "Keep it in use",
    copy: "Care, repair, resale, sharing and reuse extend the useful life already built into a textile.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Sort before mixing",
    copy: "Separating clean textiles by condition, colour and fibre protects their potential next use.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Design another chapter",
    copy: "Upcycling uses the form, colour and character already present to create a thoughtful new object.",
  },
];

const sources = [
  {
    name: "Ministry of Textiles, Government of India",
    title: "Mapping of Textile Waste Value Chain in India",
    date: "February 2026",
    href: "https://www.texmin.gov.in/static/uploads/2026/03/407c2f186a2044a4497c9c9803d16a2c.pdf",
  },
  {
    name: "UNEP & UN-Habitat",
    title: "International Day of Zero Waste 2025 — Key Messages",
    date: "2025",
    href: "https://wedocs.unep.org/bitstream/handle/20.500.11822/47015/ZWD2025_Key_messages_final.pdf?sequence=3",
  },
  {
    name: "United Nations Environment Programme",
    title: "Minimizing fashion’s environmental footprint",
    date: "UNEP Annual Report 2025",
    href: "https://www.unep.org/annualreport/index.php/2025/stories/minimizing-fashions-environmental-footprint",
  },
];

export default function EducationPage() {
  return (
    <main>
      <section
        id="education-hero"
        className="relative isolate overflow-hidden border-b border-[#4A0613] bg-[#580716] text-[#FAF4E9]"
      >
        <div
          className="pointer-events-none absolute -left-48 top-16 size-[36rem] rounded-full bg-[#812237]/40 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative grid min-h-[34rem] items-center gap-8 py-9 sm:py-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14 lg:py-10">
          <div className="hero-content-reveal relative z-10">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#D7AAA5]">
              Textile Waste Insights
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(3rem,5.8vw,6.2rem)] font-medium leading-[0.88] tracking-[-0.055em]">
              What we discard still holds value.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#EADAC7] sm:text-base">
              A clear view of textile waste in India and around the world—where it comes from, where
              it goes and why keeping materials in motion matters.
            </p>
            <a
              className="group mt-6 inline-flex min-h-11 items-center gap-3 bg-[#FAF4E9] px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#681426] transition-colors hover:bg-white"
              href="#understand"
            >
              Begin with the basics{" "}
              <ArrowDown
                className="transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
                size={16}
              />
            </a>
          </div>
          <div
            className="hero-content-reveal relative min-h-[22rem] overflow-hidden rounded-[0.9rem] border border-[#D7AAA5]/40 sm:min-h-[28rem] lg:min-h-[31rem]"
            style={{ animationDelay: "220ms" }}
          >
            <Image
              src="/katrankaari/fabric-closeup.png"
              alt="A dense arrangement of colourful textiles showing the variety of material that can remain in use"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-[1.02] motion-reduce:transition-none"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4D101D]/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <p className="max-w-xs text-xs font-bold uppercase leading-5 tracking-[0.14em] text-[#FAF4E9]">
                Waste is a material problem—and a design opportunity.
              </p>
              <span className="font-display text-4xl font-semibold text-[#FAF4E9] sm:text-5xl">
                92M
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section id="understand" className="scroll-mt-20 bg-[#FAF4E9] text-[#493D37]">
        <Container className="py-12 sm:py-14 lg:py-16">
          <ScrollReveal className="grid gap-7 border-b border-[#D2BDA9] pb-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#681426]">
                Start here
              </p>
              <p className="mt-3 text-sm text-[#8B6F63]">Not all waste begins in the wardrobe.</p>
            </div>
            <div>
              <h2 className="max-w-4xl font-display text-[clamp(2.4rem,4.6vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-[#4D101D]">
                Textile waste appears across the entire material journey.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B5B52] sm:text-base">
                It includes more than old clothes. Waste is created while fibres are spun, fabric is
                cut, products are made, goods remain unsold and textiles are discarded after use.
                Each stream needs a different recovery route.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid border-b border-[#D2BDA9] sm:grid-cols-3">
            {wasteTypes.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  className={`group py-7 transition-colors hover:bg-white/55 sm:min-h-[17rem] sm:px-6 ${index > 0 ? "border-t sm:border-l sm:border-t-0" : ""} border-[#D2BDA9] sm:first:pl-0 sm:last:pr-0`}
                  delay={index * 100}
                  key={item.title}
                >
                  <article>
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-full border border-[#B7827D]/60 text-[#681426] transition-[background-color,color,transform] duration-300 group-hover:-rotate-6 group-hover:bg-[#681426] group-hover:text-[#FAF4E9]">
                        <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
                      </span>
                      <span className="text-[0.6rem] font-extrabold tracking-[0.17em] text-[#B7827D]">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] text-[#4D101D]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#6B5B52]">{item.copy}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="india" className="scroll-mt-20 overflow-hidden bg-[#681426] text-[#FAF4E9]">
        <Container className="py-12 sm:py-14 lg:py-16">
          <ScrollReveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#D7AAA5]">
                The India view
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#D7AAA5]">
                Ministry of Textiles · February 2026
              </p>
            </div>
            <div>
              <h2 className="max-w-4xl font-display text-[clamp(2.5rem,4.7vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                India’s challenge is large. So is its recovery knowledge.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#EADAC7] sm:text-base">
                India’s first comprehensive government mapping estimates 7.073 million tonnes of
                textile waste generated each year. The country already has deep reuse, repair and
                mechanical-recycling networks, but sorting quality, traceability and higher-value
                recycling remain major gaps.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-8 grid border-y border-[#B7827D]/55 sm:grid-cols-2 lg:grid-cols-4">
            {indiaStats.map((stat, index) => (
              <ScrollReveal
                className={`py-6 sm:min-h-[15rem] sm:px-6 ${index % 2 ? "sm:border-l" : ""} ${index > 1 ? "border-t lg:border-t-0" : index > 0 ? "border-t sm:border-t-0" : ""} border-[#B7827D]/55 lg:border-l lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0`}
                delay={index * 90}
                key={stat.label}
              >
                <article className="flex h-full flex-col">
                  <span className="text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-[#D7AAA5]">
                    0{index + 1}
                  </span>
                  <p className="mt-5 font-display text-5xl font-semibold leading-none tracking-[-0.055em] sm:text-6xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[0.62rem] font-extrabold uppercase tracking-[0.13em] text-[#D7AAA5]">
                    {stat.unit}
                  </p>
                  <h3 className="mt-5 text-sm font-extrabold uppercase tracking-[0.08em]">
                    {stat.label}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#EADAC7]">{stat.note}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-sm font-bold text-[#FAF4E9]">
                Where India’s generated waste begins
              </p>
              <p className="mt-2 max-w-md text-xs leading-5 text-[#D7AAA5]">
                The 2026 estimate divides domestic generation into two main streams.
              </p>
            </div>
            <div>
              <div
                className="flex h-12 overflow-hidden rounded-sm"
                aria-label="42 percent pre-consumer and 58 percent post-consumer textile waste"
              >
                <div className="grid w-[42%] place-items-center bg-[#EADAC7] text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-[#681426]">
                  42%
                </div>
                <div className="grid w-[58%] place-items-center bg-[#B7827D] text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-[#FAF4E9]">
                  58%
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#EADAC7]">
                <span>
                  <span className="mr-2 inline-block size-2 bg-[#EADAC7]" />
                  Pre-consumer · 2.973M tonnes
                </span>
                <span>
                  <span className="mr-2 inline-block size-2 bg-[#B7827D]" />
                  Post-consumer · 4.100M tonnes
                </span>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section id="global" className="scroll-mt-20 bg-[#FAF4E9] text-[#493D37]">
        <Container className="grid gap-9 py-12 sm:py-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:py-16">
          <ScrollReveal className="relative min-h-[24rem] overflow-hidden rounded-[0.8rem] lg:min-h-full">
            <Image
              src="/katrankaari/editorial-textiles.png"
              alt="Finished textiles hanging together, representing materials kept in useful circulation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 max-w-sm text-sm font-semibold leading-6 text-white sm:bottom-6 sm:left-6">
              Circularity asks a different question: how much value can a material keep before it
              becomes waste?
            </p>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#681426]">
                The global view
              </p>
              <h2 className="mt-3 max-w-4xl font-display text-[clamp(2.5rem,4.7vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-[#4D101D]">
                The system produces more than waste.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B5B52] sm:text-base">
                Textile impacts accumulate across raw material production, dyeing, manufacturing,
                transport, use and disposal. Waste is the visible end of a much longer resource
                story.
              </p>
            </ScrollReveal>
            <div className="mt-7 grid border-t border-[#D2BDA9] sm:grid-cols-2">
              {globalStats.map((stat, index) => (
                <ScrollReveal
                  className={`py-6 ${index % 2 ? "sm:border-l sm:pl-6" : "sm:pr-6"} ${index > 1 ? "border-t" : ""} border-[#D2BDA9]`}
                  delay={(index % 2) * 90}
                  key={stat.label}
                >
                  <article>
                    <p className="font-display text-5xl font-semibold leading-none tracking-[-0.055em] text-[#681426]">
                      {stat.value}
                    </p>
                    <h3 className="mt-3 text-sm font-extrabold uppercase leading-5 tracking-[0.06em] text-[#4D101D]">
                      {stat.label}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-[#6B5B52]">{stat.copy}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#4D101D] text-[#FAF4E9]">
        <Container className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
          <ScrollReveal className="relative min-h-[23rem] overflow-hidden rounded-[0.8rem] border border-[#B7827D]/40 sm:min-h-[30rem]">
            <Image
              src="/katrankaari/fabric-waste.png"
              alt="A mixed pile of textile offcuts awaiting sorting and recovery"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#4D101D]/85 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-xs font-extrabold uppercase tracking-[0.14em] text-[#FAF4E9] sm:bottom-6 sm:left-6">
              Mixed material is harder to recover well.
            </p>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#D7AAA5]">
                Why the problem persists
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.5rem,4.5vw,4.8rem)] font-medium leading-[0.92] tracking-[-0.05em]">
                Collection is only the beginning.
              </h2>
            </ScrollReveal>
            <div className="mt-6 border-t border-[#B7827D]/50">
              {barriers.map((barrier, index) => (
                <ScrollReveal
                  className="grid gap-3 border-b border-[#B7827D]/50 py-5 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:items-start"
                  delay={index * 70}
                  key={barrier.title}
                >
                  <span className="text-[0.58rem] font-extrabold tracking-[0.15em] text-[#D7AAA5]">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold leading-tight">
                    {barrier.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#EADAC7]">{barrier.copy}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="circularity" className="scroll-mt-20 bg-[#FAF4E9] text-[#493D37]">
        <Container className="py-12 sm:py-14 lg:py-16">
          <ScrollReveal className="mx-auto max-w-5xl text-center">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#681426]">
              From insight to action
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,4.7vw,5rem)] font-medium leading-[0.92] tracking-[-0.05em] text-[#4D101D]">
              A better material journey starts before the bin.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6B5B52] sm:text-base">
              Waste systems matter, but so do the choices made when a textile is designed,
              purchased, cared for and sorted.
            </p>
          </ScrollReveal>
          <ol className="mt-9 grid border-y border-[#D2BDA9] sm:grid-cols-2 lg:grid-cols-4">
            {circularActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <ScrollReveal
                  className={`group py-7 transition-colors hover:bg-white/60 sm:min-h-[16rem] sm:px-6 ${index % 2 ? "sm:border-l" : ""} ${index > 1 ? "border-t lg:border-t-0" : index > 0 ? "border-t sm:border-t-0" : ""} border-[#D2BDA9] lg:border-l lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0`}
                  delay={index * 90}
                  key={action.title}
                >
                  <li>
                    <div className="flex items-center justify-between">
                      <Icon
                        className="text-[#681426] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                        aria-hidden="true"
                        size={27}
                        strokeWidth={1.55}
                      />
                      <span className="text-[0.6rem] font-extrabold tracking-[0.17em] text-[#B7827D]">
                        {action.number}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] text-[#4D101D]">
                      {action.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#6B5B52]">{action.copy}</p>
                  </li>
                </ScrollReveal>
              );
            })}
          </ol>
        </Container>
      </section>

      <section className="border-t border-[#D2BDA9] bg-[#F1E4D5] text-[#493D37]">
        <Container className="py-10 sm:py-12">
          <ScrollReveal className="grid gap-7 lg:grid-cols-[0.66fr_1.34fr]">
            <div>
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#681426]">
                Read the evidence
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[#4D101D]">
                Sources & scope
              </h2>
              <p className="mt-3 max-w-md text-xs leading-5 text-[#6B5B52]">
                Figures reflect the listed publications and their methodologies. Global and India
                estimates describe different scopes and should not be directly subtracted or
                combined.
              </p>
            </div>
            <div className="border-t border-[#CDB8A4]">
              {sources.map((source, index) => (
                <a
                  className="group grid gap-2 border-b border-[#CDB8A4] py-4 transition-colors hover:text-[#681426] sm:grid-cols-[2rem_0.8fr_1.2fr_auto] sm:items-center"
                  href={source.href}
                  key={source.title}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-[0.58rem] font-extrabold tracking-[0.15em] text-[#B7827D]">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.08em]">
                    {source.name}
                  </span>
                  <span className="text-sm">
                    {source.title} · {source.date}
                  </span>
                  <ArrowUpRight
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                    size={17}
                  />
                </a>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-[#681426] text-[#FAF4E9]">
        <Container className="flex flex-col justify-between gap-6 py-10 sm:flex-row sm:items-center sm:py-12">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-[#D7AAA5]">
              Keep the material moving
            </p>
            <h2 className="mt-2 max-w-3xl font-display text-[clamp(2rem,3.7vw,4rem)] font-medium leading-[0.94] tracking-[-0.045em]">
              Choose products designed from what remains.
            </h2>
          </div>
          <Link
            className="group inline-flex min-h-11 w-max items-center gap-3 border border-[#EADAC7]/75 px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] transition-colors hover:bg-[#FAF4E9] hover:text-[#681426]"
            href="/shop"
          >
            Explore products{" "}
            <ArrowUpRight
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
              size={16}
            />
          </Link>
        </Container>
      </section>
    </main>
  );
}
