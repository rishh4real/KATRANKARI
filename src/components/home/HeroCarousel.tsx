"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    src: "/katrankaari/hero-weekender-clean.png",
    alt: "KatranKaari patterned textile weekender bag against a burgundy fabric backdrop",
    heading: "Made From What Remains.",
  },
  {
    src: "/katrankaari/hero-tote-bags-floral.png",
    alt: "KatranKaari floral patchwork tote bags on a burgundy backdrop",
    heading: "Craft That Carries a Story.",
  },
];

const INTERVAL_MS = 3500;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, INTERVAL_MS);
  }, [next]);

  useEffect(() => {
    timerRef.current = setInterval(next, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const handleDotClick = (index: number) => {
    goTo(index);
    resetTimer();
  };

  return (
    <section
      id="home-hero"
      className={`relative isolate overflow-hidden border-b border-black/20 transition-[aspect-ratio] duration-500 sm:aspect-auto sm:min-h-[calc(100dvh-72px)] lg:min-h-[calc(100dvh-92px)] ${
        current === 0 ? "aspect-[3338/1818]" : "aspect-[1024/509]"
      }`}
      aria-label="KatranKaari hero carousel"
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 hidden w-full items-end px-0 sm:flex sm:min-h-[calc(100dvh-72px)] sm:pb-8 lg:min-h-[calc(100dvh-92px)] lg:px-0 lg:pb-8 xl:px-0">
        <div className="hero-content-reveal max-w-4xl pl-4 text-white sm:pl-6 lg:pl-8">
          {SLIDES.map((slide, i) => (
            <h1
              key={slide.src}
              className={`max-w-[19rem] font-sans text-[clamp(2rem,9vw,4.35rem)] font-medium leading-[1.04] transition-opacity duration-500 sm:max-w-4xl ${
                i === current ? "opacity-100" : "pointer-events-none absolute opacity-0"
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

          {/* Dot indicators */}
          <div className="mt-5 flex items-center gap-2 sm:mt-6" role="tablist" aria-label="Slide indicators">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => handleDotClick(i)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-black ${
                  i === current ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
