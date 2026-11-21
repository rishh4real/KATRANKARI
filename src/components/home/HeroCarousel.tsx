"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    src: "/katrankaari/hero-weekender-premium.webp",
    alt: "KatranKaari floral textile weekender bag against a rich burgundy fabric backdrop",
    heading: "Made From What Remains.",
  },
  {
    src: "/katrankaari/hero-totes-premium.webp",
    alt: "Two KatranKaari quilted floral tote bags against a rich burgundy fabric backdrop",
    heading: "Craft That Carries a Story.",
  },
  {
    src: "/katrankaari/hero-tote-interior-premium.webp",
    alt: "Open KatranKaari floral tote revealing its burgundy lining and inner zipped pocket",
    heading: "Crafted Down to Every Detail.",
  },
] as const;

const SLIDE_DURATION_MS = 5000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const previousSlide = () => setCurrent((slide) => (slide - 1 + SLIDES.length) % SLIDES.length);
  const nextSlide = () => setCurrent((slide) => (slide + 1) % SLIDES.length);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((slide) => (slide + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home-hero"
      className="relative isolate aspect-[2712/1518] overflow-hidden border-b border-black/20 bg-[#5b0016] sm:aspect-auto sm:min-h-dvh"
      aria-label="KatranKaari featured collection carousel"
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            preload={index === 0}
            loading={index === 0 ? undefined : "eager"}
            fetchPriority={index === 0 ? undefined : "low"}
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 hidden w-full items-end px-0 sm:flex sm:min-h-dvh sm:pb-8 lg:px-0 lg:pb-8 xl:px-0">
        <div className="hero-content-reveal max-w-4xl pl-4 text-white sm:pl-6 lg:pl-8">
          {SLIDES.map((slide, index) => (
            <h1
              key={slide.src}
              className={`max-w-[19rem] font-sans text-[clamp(2rem,9vw,4.35rem)] font-medium leading-[1.04] transition-opacity duration-500 sm:max-w-4xl ${
                index === current ? "opacity-100" : "pointer-events-none absolute opacity-0"
              }`}
            >
              {slide.heading}
            </h1>
          ))}

          <Link
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-button border border-white bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.04em] text-foreground transition-colors hover:border-white/80 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:mt-6"
            href="/shop"
          >
            Shop All
          </Link>

          <div className="mt-5 flex items-center gap-2 sm:mt-6" role="tablist" aria-label="Choose hero image">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={index === current}
                aria-label={`Show hero image ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                  index === current ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 right-24 z-20 flex items-center gap-3 text-white sm:bottom-6 sm:right-32 lg:bottom-8">
        <button
          type="button"
          className="inline-flex h-10 w-12 items-center justify-center bg-transparent transition-transform hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Show previous hero image"
          onClick={previousSlide}
        >
          <ArrowLeft aria-hidden="true" size={34} strokeWidth={1.4} />
        </button>
        <button
          type="button"
          className="inline-flex h-10 w-12 items-center justify-center bg-transparent transition-transform hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Show next hero image"
          onClick={nextSlide}
        >
          <ArrowRight aria-hidden="true" size={34} strokeWidth={1.4} />
        </button>
      </div>
    </section>
  );
}
