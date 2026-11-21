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
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = (index + categories.length) % categories.length;
      const track = trackRef.current;

      if (track) {
        track.scrollTo({ left: track.clientWidth * nextIndex, behavior: "smooth" });
      }

      setCurrent(nextIndex);
    },
    [categories.length],
  );

  const updateCurrentSlide = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;

    setCurrent(Math.min(categories.length - 1, Math.round(track.scrollLeft / track.clientWidth)));
  };

  return (
    <>
      <div className="border-y border-[#251017] bg-[#FAF4E9] md:hidden">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={updateCurrentSlide}
          aria-label="Shop by category"
        >
          {categories.map((category, index) => (
            <Link
              className={`group relative min-h-[31rem] w-full shrink-0 snap-center overflow-hidden ${category.panelClassName}`}
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
              <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/5" aria-hidden="true" />
              <span className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="block font-display text-[2.15rem] font-semibold leading-none">{category.title}</span>
                <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                  Explore collection
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
              className="grid size-11 place-items-center border border-[#251017]/25 transition-colors hover:bg-[#681426] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681426]"
              aria-label="Previous category"
            >
              <span aria-hidden="true" className="text-2xl leading-none">←</span>
            </button>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              className="grid size-11 place-items-center border border-[#251017]/25 transition-colors hover:bg-[#681426] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681426]"
              aria-label="Next category"
            >
              <span aria-hidden="true" className="text-2xl leading-none">→</span>
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
