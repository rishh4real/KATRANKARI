"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";

const slides = [
  {
    image: "/katrankaari/hero-weekender-bag.png",
    alt: "KatranKaari patterned textile weekender bag",
    imageClassName: "object-[54%_center] md:object-center",
  },
  {
    image: "/katrankaari/hero-tote-bags.png",
    alt: "KatranKaari patchwork tote bags",
    imageClassName: "object-[55%_center] md:object-center",
  },
  {
    image: "/katrankaari/hero-open-tote-bag.png",
    alt: "KatranKaari open patterned tote bag",
    imageClassName: "object-[55%_center] md:object-center",
  },
];

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const showPreviousSlide = () => setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  const showNextSlide = () => setActiveSlide((current) => (current + 1) % slides.length);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="home-hero" className="relative isolate flex min-h-[34rem] items-end overflow-hidden border-b border-black/20 text-white sm:min-h-[100dvh]" aria-roledescription="carousel" aria-label="KatranKaari featured collection">
      {slides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={index === activeSlide ? slide.alt : ""}
          fill
          priority={index === 0}
          className={`-z-20 object-cover transition-opacity duration-700 motion-reduce:transition-none ${slide.imageClassName} ${index === activeSlide ? "hero-image-drift opacity-100" : "opacity-0"}`}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-black/15" aria-hidden="true" />
      <button className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center text-white/55 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-6 sm:h-10 sm:w-10" type="button" aria-label="Show previous slide" onClick={showPreviousSlide}>
        <ChevronLeft aria-hidden="true" size={24} strokeWidth={1.25} />
      </button>
      <button className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center text-white/55 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:h-10 sm:w-10" type="button" aria-label="Show next slide" onClick={showNextSlide}>
        <ChevronRight aria-hidden="true" size={24} strokeWidth={1.25} />
      </button>
      <Container className="w-full pb-8 pt-28 sm:pb-16 sm:pt-40 lg:pb-20 lg:pt-48">
        <div className="hero-content-reveal max-w-4xl" key={activeSlide}>
          <h1 className="max-w-[19rem] font-sans text-[clamp(2rem,9vw,4.35rem)] font-medium leading-[1.04] sm:max-w-4xl">Made From What Remains.</h1>
          <div className="mt-5 sm:mt-6">
            <Link className="inline-flex min-h-11 items-center justify-center rounded-button border border-white bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.04em] text-foreground transition-colors hover:border-white/80 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black" href="/shop">Shop All</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
