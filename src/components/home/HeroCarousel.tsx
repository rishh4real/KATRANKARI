import Image from "next/image";
import Link from "next/link";

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
      <div className="relative z-10 flex min-h-[calc(34rem-72px)] w-full items-end px-0 pb-5 sm:min-h-[calc(100dvh-72px)] sm:px-0 sm:pb-8 lg:min-h-[calc(100dvh-92px)] lg:px-0 lg:pb-8 xl:px-0">
        <div className="hero-content-reveal max-w-4xl pl-4 text-white sm:pl-6 lg:pl-8">
          <h1 className="max-w-[19rem] font-sans text-[clamp(2rem,9vw,4.35rem)] font-medium leading-[1.04] sm:max-w-4xl">
            Made From What Remains.
          </h1>
          <Link
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-button border border-white bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-[0.04em] text-foreground transition-colors hover:border-white/80 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:mt-6"
            href="/shop"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  );
}
