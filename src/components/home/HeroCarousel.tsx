import Image from "next/image";

export function HeroCarousel() {
  return (
    <section
      id="home-hero"
      className="relative isolate min-h-[calc(34rem-72px)] overflow-hidden border-b border-black/20 sm:min-h-[calc(100dvh-72px)] lg:min-h-[calc(100dvh-92px)]"
      aria-label="KatranKaari patterned textile weekender bag"
    >
      <Image
        src="/katrankaari/hero-weekender-clean.png"
        alt="KatranKaari patterned textile weekender bag against a burgundy fabric backdrop"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </section>
  );
}
