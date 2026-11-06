"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const processSteps = [
  { title: "Collect", copy: "Sourcing textile waste\nfrom mills and communities.", image: "/katrankaari/process-collect.png", alt: "Stitched patch showing collected textile pieces" },
  { title: "Sort", copy: "Categorising fabrics\nfor repurposing.", image: "/katrankaari/process-sort.png", alt: "Stitched patch showing folded textiles" },
  { title: "Design & Craft", copy: "Turning leftover textiles\ninto functional, beautiful pieces.", image: "/katrankaari/process-design-craft.png", alt: "Stitched patch showing tailoring scissors" },
  { title: "Produce", copy: "Handmade by\nlocal women artisans.", image: "/katrankaari/process-produce.png", alt: "Stitched patch showing a patchwork tote" },
  { title: "Renew", copy: "Extending the life of\ntextiles and reducing waste.", image: "/katrankaari/process-renew.png", alt: "Stitched patch showing circular renewal" },
];

const impactStats = [
  { value: "3.8 MT", copy: "of textile waste\ndiverted from landfill" },
  { value: "13,000+", copy: "products created\nand sold" },
  { value: "94", suffix: "*", copy: "women empowered\nthrough skills and jobs" },
];

function FramedEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 text-center text-[11px] font-bold uppercase tracking-[0.32em] text-[#F2E2D7] sm:text-xs">
      <span className="h-px w-10 bg-[#D6B8A7]/75" />
      <span>{children}</span>
      <span className="h-px w-10 bg-[#D6B8A7]/75" />
    </div>
  );
}

export function ProcessImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.16 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate w-full overflow-hidden bg-[#580716] px-5 py-14 text-[#F8EBDC] sm:px-8 sm:py-16 lg:px-10 lg:py-12 xl:h-[70svh] xl:min-h-[44rem] xl:py-8" aria-labelledby="circular-process-title">
      <div className="pointer-events-none absolute -left-4 -top-4 -z-10 h-44 w-52 sm:h-56 sm:w-72 lg:h-40 lg:w-52">
        <Image src="/katrankaari/process-corner-top-left.png" alt="" fill sizes="256px" className="object-contain object-left-top" />
      </div>
      <div className="pointer-events-none absolute -bottom-8 -right-4 -z-10 h-44 w-60 sm:h-56 sm:w-80 lg:h-40 lg:w-56">
        <Image src="/katrankaari/process-corner-top-left.png" alt="" fill sizes="224px" className="rotate-180 object-contain object-right-bottom" />
      </div>

      <div className={`mx-auto max-w-6xl text-center transition duration-700 motion-reduce:transition-none ${isVisible ? "translate-y-0" : "translate-y-2"}`}>
        <FramedEyebrow>Our circular process</FramedEyebrow>
        <h2 id="circular-process-title" className="mx-auto mt-4 max-w-4xl font-sans text-[clamp(2rem,3.2vw,2.8rem)] font-normal leading-[1.08] text-[#F8EBDC]">
          <span className="block">From Textile Waste to</span>
          <span className="block">Everyday Essentials</span>
        </h2>
        <p className="mt-3 text-sm text-[#E0BFC0] sm:text-base">A mindful journey that gives discarded textiles a second life.</p>
      </div>

      <div className="relative mx-auto mt-10 max-w-[82rem] px-4 sm:mt-11 sm:px-6 lg:mt-6 xl:px-0">
        <svg className="pointer-events-none absolute left-[8%] top-0 hidden h-[6.5rem] w-[84%] xl:block" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
          <path className="process-thread" d="M0 50 C35 12 65 12 100 50 S165 88 200 50 S265 12 300 50 S365 88 400 50 S465 12 500 50 S565 88 600 50 S665 12 700 50 S765 88 800 50 S865 12 900 50 S965 88 1000 50" fill="none" stroke="#E9CFC0" strokeLinecap="round" strokeWidth="2" strokeDasharray="8 8" style={{ strokeDashoffset: isVisible ? 0 : 650, transition: "stroke-dashoffset 1.8s ease-out" }} />
        </svg>
        <ol className="relative grid w-full min-w-0 gap-9 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-9 xl:grid-cols-5 xl:gap-4">
          <svg className="pointer-events-none absolute inset-y-14 left-1/2 w-4 -translate-x-1/2 sm:hidden" viewBox="0 0 16 1000" preserveAspectRatio="none" aria-hidden="true">
            <path className="process-thread" d="M8 0 V1000" fill="none" stroke="#E9CFC0" strokeLinecap="round" strokeWidth="2" strokeDasharray="8 8" />
          </svg>
          {processSteps.map((step, index) => (
              <li className={`relative z-10 text-center transition duration-500 motion-reduce:transition-none ${isVisible ? "translate-y-0" : "translate-y-2"}`} key={step.title} style={{ transitionDelay: `${220 + index * 140}ms` }}>
                <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32 xl:h-[6.5rem] xl:w-[6.5rem]">
                  <Image src={step.image} alt={step.alt} fill sizes="(min-width: 1024px) 120px, 128px" className="object-contain" />
                </div>
                <h3 className="mt-3 text-balance font-sans text-2xl font-normal leading-tight text-[#F8EBDC] xl:text-[1.25rem]">{step.title}</h3>
                <p className="mt-1.5 whitespace-pre-line text-sm leading-5 text-[#F2E2D7] xl:text-xs xl:leading-4">{step.copy}</p>
              </li>
          ))}
        </ol>
      </div>

      <div className={`mx-auto mt-10 max-w-6xl border-t border-[#D6B8A7]/55 pt-7 text-center transition duration-700 motion-reduce:transition-none sm:mt-12 sm:pt-8 lg:mt-6 lg:pt-5 ${isVisible ? "translate-y-0" : "translate-y-2"}`} style={{ transitionDelay: "880ms" }}>
        <FramedEyebrow>Our impact</FramedEyebrow>
        <dl className="mt-5 grid min-w-0 divide-y divide-[#D6B8A7]/55 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {impactStats.map((stat) => (
            <div className="min-w-0 px-5 py-6 sm:py-0" key={stat.value}>
              <dt className="font-sans text-[clamp(2.25rem,2.6vw,2.75rem)] font-normal leading-none text-[#F8EBDC]">
                {stat.value}{stat.suffix ? <sup className="ml-0.5 align-top text-[0.48em]">{stat.suffix}</sup> : null}
              </dt>
              <dd className="mt-1.5 whitespace-pre-line text-sm leading-5 text-[#F2E2D7] sm:text-[13px]">{stat.copy}</dd>
            </div>
          ))}
        </dl>
        <Link href="/impact" className="group mt-5 inline-flex min-h-10 items-center gap-2 rounded-[5px] bg-[#F5E7D6] px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#58111D] transition-colors duration-250 hover:bg-[#EBD7C0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F8EBDC] focus-visible:ring-offset-2 focus-visible:ring-offset-[#580716]">
          Know our impact <ArrowUpRight aria-hidden="true" size={17} className="transition-transform duration-250 group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
