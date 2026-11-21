"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

export type HomeCategory = {
  title: string;
  items: string[];
  image: string;
  alt: string;
  href: string;
  imageClassName: string;
  panelClassName: string;
  overlayClassName: string;
};

type CategoryCarouselProps = {
  categories: HomeCategory[];
};

export function CategoryCarousel({ categories }: CategoryCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"previous" | "next">("next");
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = Math.min(categories.length - 1, Math.max(0, index));
      const track = trackRef.current;

      if (nextIndex === current) return;

      setDirection(nextIndex < current ? "previous" : "next");

      if (track) {
        const slide = track.children.item(nextIndex) as HTMLElement | null;
        if (slide) {
          track.scrollTo({ left: slide.offsetLeft - 16, behavior: "smooth" });
        }
      }

      setCurrent(nextIndex);
    },
    [categories.length, current],
  );

  const updateCurrentSlide = () => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children) as HTMLElement[];
    const targetLeft = track.scrollLeft + 16;
    const nextIndex = slides.reduce((closestIndex, slide, index) => {
      const closestDistance = Math.abs(slides[closestIndex].offsetLeft - targetLeft);
      const slideDistance = Math.abs(slide.offsetLeft - targetLeft);
      return slideDistance < closestDistance ? index : closestIndex;
    }, 0);

    if (nextIndex !== current) {
      setDirection(nextIndex < current ? "previous" : "next");
      setCurrent(nextIndex);
    }
  };

  return (
    <>
      <div className="border-y border-[#251017] bg-[#FAF4E9] md:hidden">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth pl-4 pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={updateCurrentSlide}
          aria-label="Shop by category"
        >
          {categories.map((category, index) => (
            <Link
              className={`group relative min-h-[31rem] basis-[calc(100%_-_2rem)] shrink-0 snap-start overflow-hidden ${category.panelClassName}`}
              href={category.href}
              key={category.title}
              aria-label={`${category.title}, slide ${index + 1} of ${categories.length}`}
            >
              <Image
                src={category.image}
                alt={category.alt}
                fill
                sizes="100vw"
                className={`transition duration-500 motion-reduce:transition-none ${category.imageClassName}`}
              />
              <span className="absolute inset-0 bg-black/35" aria-hidden="true" />
              <span className="absolute inset-0 grid place-items-center px-7 text-center text-white">
                <span className="space-y-2 text-lg leading-snug">
                  <span className="mb-4 block font-display text-[2.15rem] font-semibold leading-none">{category.title}</span>
                  {category.items.map((item) => (
                    <span className="block" key={item}>{item}</span>
                  ))}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-between bg-[#FAF4E9] px-5 py-4 text-[#251017]">
          <span className="text-xs font-bold uppercase tracking-[0.16em]">
            {String(current + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className={`grid h-11 place-items-center text-[#251017] transition-[width,color,opacity] duration-300 hover:text-[#681426] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681426] disabled:cursor-not-allowed disabled:opacity-25 ${
                direction === "previous" ? "w-14" : "w-11"
              }`}
              aria-label="Previous category"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 40 20"
                fill="none"
                className={`h-5 transition-[width] duration-300 ${direction === "previous" ? "w-12" : "w-8"}`}
              >
                <path d="M38 10H3M10 3L3 10L10 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              disabled={current === categories.length - 1}
              className={`grid h-11 place-items-center text-[#251017] transition-[width,color,opacity] duration-300 hover:text-[#681426] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681426] disabled:cursor-not-allowed disabled:opacity-25 ${
                direction === "next" ? "w-14" : "w-11"
              }`}
              aria-label="Next category"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 40 20"
                fill="none"
                className={`h-5 transition-[width] duration-300 ${direction === "next" ? "w-12" : "w-8"}`}
              >
                <path d="M2 10H37M30 3L37 10L30 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden bg-[#251017] p-px md:grid md:grid-cols-2 md:gap-px lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            className={`group relative min-h-[24rem] overflow-hidden lg:min-h-[27rem] ${category.panelClassName}`}
            href={category.href}
            key={category.title}
          >
            <Image
              src={category.image}
              alt={category.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className={`transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none ${category.imageClassName}`}
            />
            <div
              className={`absolute inset-0 transition-colors duration-300 group-hover:bg-black/45 ${category.overlayClassName}`}
              aria-hidden="true"
            />
            <span className="absolute inset-0 grid place-items-center px-5 text-center transition-opacity duration-200 group-hover:opacity-0">
              <span className="font-display text-4xl font-semibold leading-none text-[#251017] [text-shadow:0_1px_0_rgba(255,255,255,0.98),0_0_10px_rgba(255,250,242,0.92)]">
                {category.title}
              </span>
            </span>
            <span className="absolute inset-0 grid place-items-center px-5 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="space-y-1.5 text-lg leading-snug">
                <span className="mb-3 block font-display text-2xl font-semibold">{category.title}</span>
                {category.items.map((item) => (
                  <span className="block" key={item}>{item}</span>
                ))}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
