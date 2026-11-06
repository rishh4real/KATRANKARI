import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { mockArticles } from "@/data/mock-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Education", "A library structure for approved reports and stories about textile waste, circularity and material transformation.", "/education");

const focusAreas = [
  "Textile waste",
  "Landfills",
  "Women & work",
  "Waste industry",
  "Material stories",
];

export default function EducationPage() {
  const [featuredArticle, ...libraryArticles] = mockArticles;

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-[#D8D5CD] bg-[#FBFAF7]">
        <Image
          src="/katrankaari/featured-textile-pattern.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="pointer-events-none z-0 object-cover opacity-[0.1]"
        />
        <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
          <p className="eyebrow mb-5 text-[#7C2831]">Education / Field notes</p>
          <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.52fr)] lg:gap-16">
            <h1 className="max-w-4xl font-display text-[clamp(3.4rem,6.4vw,6.25rem)] leading-[0.84] text-[#251017]">
              Knowledge that keeps materials moving.
            </h1>
            <p className="max-w-md text-base leading-7 text-[#625D58] sm:text-lg">
              A considered library for approved reports, field stories, and material notes on textile waste, circular making, and the people behind it.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16 lg:py-20">
        <section className="grid border-y border-[#CFC9C0] lg:grid-cols-[minmax(0,1.24fr)_minmax(20rem,0.76fr)]" aria-labelledby="library-heading">
          <article className="border-b border-[#CFC9C0] py-7 lg:border-b-0 lg:border-r lg:py-9 lg:pr-10">
            <p className="eyebrow mb-4 text-[#7C2831]">Featured resource</p>
            <Link href={`/education/${featuredArticle.slug}`} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C2831] focus-visible:ring-offset-4">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#EDE8DF]">
                <Image
                  src="/katrankaari/fabric-waste.png"
                  alt="Sorted textile offcuts ready for reuse"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7C2831]">{featuredArticle.topic} / Sample article</p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-[#251017]">
                  Read article <ArrowUpRight aria-hidden="true" size={15} />
                </span>
              </div>
              <h2 id="library-heading" className="mt-3 max-w-3xl font-display text-4xl leading-[0.94] text-[#251017] sm:text-5xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#625D58]">{featuredArticle.excerpt}</p>
            </Link>
          </article>

          <aside className="py-7 lg:py-9 lg:pl-10" aria-label="Resource index">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow mb-0 text-[#7C2831]">Resource index</p>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#625D58]">{mockArticles.length} entries</p>
            </div>
            <div className="mt-6 border-t border-[#CFC9C0]">
              {libraryArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/education/${article.slug}`}
                  className="group grid grid-cols-[2.25rem_minmax(0,1fr)_auto] gap-3 border-b border-[#CFC9C0] py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C2831] focus-visible:ring-offset-4"
                >
                  <span className="pt-0.5 text-xs font-bold text-[#7C2831]">0{index + 2}</span>
                  <span>
                    <span className="block font-display text-[1.75rem] leading-none text-[#251017] transition-colors group-hover:text-[#7C2831]">{article.title}</span>
                    <span className="mt-2 block text-sm text-[#625D58]">{article.topic}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" size={18} className="mt-1 text-[#7C2831] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
            <p className="mt-6 max-w-sm text-sm leading-6 text-[#625D58]">
              Every resource is clearly labelled until its final report, source material, and publication approval are supplied.
            </p>
          </aside>
        </section>

        <section className="mt-12 border-b border-[#CFC9C0] pb-10 sm:mt-16 sm:pb-12" aria-labelledby="focus-areas-heading">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3 text-[#7C2831]">Our reading map</p>
              <h2 id="focus-areas-heading" className="font-display text-4xl leading-none text-[#251017] sm:text-5xl">What this library will hold.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#625D58]">A clear home for current client reports and future field notes, without turning knowledge into marketing noise.</p>
          </div>
          <ol className="mt-9 grid border-t border-[#CFC9C0] sm:grid-cols-2 lg:grid-cols-5">
            {focusAreas.map((area, index) => (
              <li key={area} className="flex min-h-32 flex-col justify-between border-b border-[#CFC9C0] py-4 sm:px-4 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pr-4">
                <span className="text-xs font-bold tracking-[0.1em] text-[#7C2831]">0{index + 1}</span>
                <span className="font-display text-[1.75rem] leading-none text-[#251017]">{area}</span>
              </li>
            ))}
          </ol>
        </section>
      </Container>
    </main>
  );
}
