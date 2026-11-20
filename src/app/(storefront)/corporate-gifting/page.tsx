import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Gift, HandHeart, Palette, UsersRound } from "lucide-react";
import { CorporateEnquiryForm } from "@/components/forms/CorporateEnquiryForm";
import { Container } from "@/components/layout/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Corporate Gifting & Custom Orders",
  "Explore thoughtful corporate gifts, curated textile sets and custom-order possibilities from KatranKaari.",
  "/corporate-gifting",
);

const giftingPossibilities = [
  {
    number: "01",
    icon: UsersRound,
    title: "Teams & clients",
    copy: "Useful gifts that recognise the people who help your organisation move forward.",
  },
  {
    number: "02",
    icon: Gift,
    title: "Events & milestones",
    copy: "Thoughtful gifting possibilities for celebrations, gatherings and meaningful occasions.",
  },
  {
    number: "03",
    icon: HandHeart,
    title: "Curated gift sets",
    copy: "A considered mix of practical textile products shaped around your brief and audience.",
  },
  {
    number: "04",
    icon: Palette,
    title: "Custom possibilities",
    copy: "Selected products, details and presentation can be explored for suitable quantities and timelines.",
  },
];

const giftingProcess = [
  { number: "01", title: "Share your brief", copy: "Tell us the occasion, quantity, timeline and what you want the gift to communicate." },
  { number: "02", title: "Curate the direction", copy: "We explore suitable products and combinations around your requirement." },
  { number: "03", title: "Refine the details", copy: "Together, we review the selection and any feasible custom touches." },
  { number: "04", title: "Prepare with care", copy: "Once confirmed, the gifting direction is prepared around the agreed brief." },
];

export default function CorporateGiftingPage() {
  return (
    <>
      <section id="corporate-gifting-hero" className="relative isolate overflow-hidden border-b border-[#4A0613] bg-[#580716] pt-[72px] text-[#FAF4E9] lg:pt-[92px]">
        <div className="pointer-events-none absolute -left-36 top-28 size-[31rem] rounded-full bg-[#7B1B2B]/45 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[37%] top-28 h-[24rem] w-px rotate-[32deg] border-l border-dashed border-[#D7AAA5]/30" aria-hidden="true" />

        <Container className="relative grid min-h-[37rem] gap-5 pt-8 sm:min-h-[42rem] sm:pt-10 lg:min-h-[39rem] lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:pt-0">
          <div className="relative z-10 pb-2 lg:pb-16">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#D7AAA5]">Corporate gifting & custom orders</p>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.9rem,5.4vw,5.8rem)] font-medium leading-[0.88] tracking-[-0.055em]">
              Gifts that carry a better story.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#EADAC7] sm:text-base">
              Thoughtfully made textile gifts for teams, clients, events and partnerships—designed to be useful, memorable and rooted in purpose.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="group inline-flex min-h-11 items-center gap-3 bg-[#FAF4E9] px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#681426] transition-colors hover:bg-white" href="#corporate-enquiry">
                Start an enquiry <ArrowDown className="transition-transform group-hover:translate-y-0.5" aria-hidden="true" size={16} />
              </a>
              <Link className="inline-flex min-h-11 items-center border border-[#EADAC7]/75 px-5 py-3 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] transition-colors hover:bg-[#FAF4E9] hover:text-[#681426]" href="/shop">
                Explore products
              </Link>
            </div>
          </div>

          <div className="relative min-h-[23rem] self-end sm:min-h-[29rem] lg:min-h-[35rem]">
            <Image
              src="/katrankaari/corporate-gifting-illustration-transparent.png"
              alt="Two KatranKaari makers revealing a patchwork tote as a meaningful gift"
              fill
              priority
              className="object-contain object-bottom"
              sizes="(min-width: 1024px) 62vw, 100vw"
            />
          </div>
        </Container>

        <div className="relative border-t border-[#B7827D]/45">
          <Container className="grid grid-cols-1 divide-y divide-[#B7827D]/35 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.15em] text-[#EADAC7] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <span className="py-3 sm:text-center">Recovered textile stories</span>
            <span className="py-3 sm:text-center">Thoughtful everyday utility</span>
            <span className="py-3 sm:text-center">Rooted in Jamnagar</span>
          </Container>
        </div>
      </section>

      <section className="bg-[#FAF4E9] text-[#493D37]">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid gap-7 border-b border-[#CDB8A4] pb-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#681426]">Ways to work together</p>
            <div>
              <h2 className="max-w-4xl font-display text-[clamp(2.2rem,4vw,4.3rem)] font-medium leading-[0.94] tracking-[-0.045em] text-[#4D101D]">Gifting that feels useful, personal and considered.</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6B5B52] sm:text-base">Begin with the occasion and the people receiving it. We’ll explore a direction that makes sense for your requirement and the materials available.</p>
            </div>
          </div>

          <div className="grid border-b border-[#CDB8A4] sm:grid-cols-2 lg:grid-cols-4">
            {giftingPossibilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className={`group py-7 sm:min-h-[16rem] sm:px-6 sm:py-8 ${index % 2 ? "sm:border-l" : ""} ${index > 0 ? "border-t sm:border-t-0" : ""} ${index > 1 ? "lg:border-l" : ""} border-[#D8C3AF] lg:first:pl-0 lg:last:pr-0`} key={item.title}>
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-full border border-[#B7827D]/60 text-[#681426] transition-colors group-hover:bg-[#681426] group-hover:text-[#FAF4E9]">
                      <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                    </span>
                    <span className="text-[0.6rem] font-extrabold tracking-[0.17em] text-[#B7827D]">{item.number}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold leading-none tracking-[-0.025em] text-[#4D101D] sm:text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6B5B52]">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-[#4A0613] bg-[#681426] text-[#FAF4E9]">
        <div className="pointer-events-none absolute -right-28 -top-28 size-[26rem] rounded-full border border-dashed border-[#D7AAA5]/20" aria-hidden="true" />
        <Container className="relative py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#D7AAA5]">A simple, collaborative process</p>
            <h2 className="mt-3 font-display text-[clamp(2.2rem,4vw,4rem)] font-medium leading-[0.95] tracking-[-0.04em]">From your brief to a thoughtful gifting direction.</h2>
          </div>

          <ol className="mt-9 grid border-t border-[#B7827D]/50 sm:grid-cols-2 lg:grid-cols-4">
            {giftingProcess.map((step, index) => (
              <li className={`min-h-[13rem] border-b border-[#B7827D]/50 py-6 sm:px-6 ${index % 2 ? "sm:border-l" : ""} lg:border-b-0 lg:border-l ${index === 0 ? "lg:border-l-0 lg:pl-0" : ""}`} key={step.number}>
                <span className="text-[0.62rem] font-extrabold tracking-[0.2em] text-[#D7AAA5]">{step.number}</span>
                <h3 className="mt-7 font-display text-xl font-semibold leading-none">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#EADAC7]">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="corporate-enquiry" className="scroll-mt-20 bg-[#FAF4E9] text-[#493D37]">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16 lg:py-20">
          <div className="lg:sticky lg:top-28 lg:h-max">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.26em] text-[#681426]">Start a conversation</p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(2.3rem,4vw,4.2rem)] font-medium leading-[0.94] tracking-[-0.045em] text-[#4D101D]">Tell us what you are planning.</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#6B5B52] sm:text-base">Share the essentials of your gifting requirement. Your email app will open with a prepared enquiry that you can review before sending.</p>
            <Link className="group mt-6 inline-flex items-center gap-2 border-b border-[#B7827D] pb-1 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#681426]" href="/contact">
              Prefer a general conversation? <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" size={15} />
            </Link>
          </div>
          <CorporateEnquiryForm />
        </Container>
      </section>
    </>
  );
}
