import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Container } from "@/components/layout/Container";

const reportCards = [
  {
    topic: "Textile waste",
    title: "Understanding textile waste",
    href: "/education/understanding-textile-waste",
    image: "/katrankaari/fabric-waste.png",
    alt: "Sorted textile offcuts prepared for reuse",
  },
  {
    topic: "Material stories",
    title: "From offcut to useful object",
    href: "/education/from-offcut-to-useful-object",
    image: "/katrankaari/editorial-textiles.png",
    alt: "Patchwork textiles arranged together",
  },
  {
    topic: "Circularity",
    title: "A practical introduction to circularity",
    href: "/education/a-practical-introduction-to-circularity",
    image: "/katrankaari/artisan-maker.png",
    alt: "Artisan working with colourful textiles",
  },
];

export function EducationLibraryPreview() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#4A0613] bg-[#580716] text-[#F8EBDC]" aria-labelledby="education-preview-title">
      <Container className="relative z-10 py-10 sm:py-12 lg:flex lg:min-h-[24rem] lg:items-center lg:py-12">
        <div className="grid w-full gap-8 lg:grid-cols-[minmax(17rem,0.7fr)_minmax(0,1.3fr)] lg:items-center lg:gap-10">
          <div>
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#F2E2D7]">
              <BookOpen aria-hidden="true" size={20} strokeWidth={1.8} />
              <span>Education & insights</span>
              <span className="h-px w-12 bg-[#D6B8A7]/75" />
            </div>
            <h2 id="education-preview-title" className="mt-5 max-w-lg font-sans text-[clamp(2.15rem,3vw,3.25rem)] font-normal leading-[1.02] text-[#F8EBDC]">
              Stories, Reports &amp; Ideas for a Circular Tomorrow.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#E0BFC0] sm:text-base">
              Research, reports and stories on textile waste, material transformation, and the people reshaping the future of fashion.
            </p>
            <Link href="/education" className="group mt-6 inline-flex min-h-10 items-center gap-2 rounded-[6px] bg-[#F5E7D6] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[#58111D] transition-colors hover:bg-[#EBD7C0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8EBDC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#580716]">
              Explore all reports <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {reportCards.map((report) => (
              <Link key={report.title} href={report.href} className="education-card-live group flex min-w-0 flex-col overflow-hidden rounded-[8px] border border-[#D6B8A7]/70 bg-[#5C0B19]/55 p-2.5 transition-colors hover:bg-[#64101F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8EBDC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#580716] sm:p-3">
                <div className="relative aspect-[1.28/0.78] overflow-hidden rounded-[5px] bg-[#7C2831]">
                  <Image src={report.image} alt={report.alt} fill sizes="(min-width: 1024px) 24vw, (min-width: 640px) 31vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#F5E7D6] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#6A1624] sm:text-[0.68rem]">{report.topic}</span>
                </div>
                <h3 className="mt-3 text-balance font-sans text-[clamp(1rem,1.35vw,1.3rem)] font-normal leading-[1.05] text-[#F8EBDC]">{report.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 border-b border-[#F2E2D7]/80 pb-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#F2E2D7]">
                  Read report <ArrowUpRight aria-hidden="true" size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
