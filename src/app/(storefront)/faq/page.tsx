import Link from "next/link";
import { ArrowUpRight, HandHeart, Mail, MapPin, PackageOpen, Scissors } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  "Frequently Asked Questions",
  "Find answers about KatranKaari products, recovered textiles, care, gifting, custom orders and customer support.",
  "/faq",
);

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSection = {
  id: string;
  number: string;
  title: string;
  intro: string;
  icon: LucideIcon;
  questions: FaqItem[];
};

const faqSections: FaqSection[] = [
  {
    id: "products",
    number: "01",
    title: "Products & materials",
    intro: "What makes every KatranKaari piece distinct.",
    icon: Scissors,
    questions: [
      {
        question: "What makes KatranKaari products different?",
        answer:
          "KatranKaari gives discarded and surplus textiles a useful next chapter through thoughtful design and skilled craftsmanship. Each piece balances everyday function with the natural character of recovered fabric.",
      },
      {
        question: "Will my product look exactly like the photograph?",
        answer:
          "Recovered textiles naturally vary in print, colour placement and texture. The overall design and function remain consistent, while small variations make every piece distinct.",
      },
      {
        question: "How should I care for my KatranKaari product?",
        answer:
          "Please follow any care guidance supplied with the product. If you are unsure, share the product name or a photograph with our team before washing so we can guide you for that specific material.",
      },
    ],
  },
  {
    id: "orders",
    number: "02",
    title: "Orders & gifting",
    intro: "Availability, larger quantities and custom possibilities.",
    icon: PackageOpen,
    questions: [
      {
        question: "How can I check whether a product is available?",
        answer:
          "Explore the current selection in our shop. If a style, colour or quantity is not listed, contact us and the team can help you check what may be available.",
      },
      {
        question: "Do you accept corporate or bulk orders?",
        answer:
          "Yes. KatranKaari welcomes corporate gifting and larger-order enquiries. Share your preferred quantity, timeline and gifting occasion through our corporate gifting page so the team can suggest suitable possibilities.",
      },
      {
        question: "Can KatranKaari products be customised?",
        answer:
          "Customisation can be explored for selected gifting and larger-order requirements. What is possible depends on the product, recovered materials, quantity and timeline, so each request is reviewed individually.",
      },
    ],
  },
  {
    id: "impact",
    number: "03",
    title: "Craft & impact",
    intro: "The people, place and purpose behind the work.",
    icon: HandHeart,
    questions: [
      {
        question: "Where are KatranKaari products made?",
        answer:
          "KatranKaari is rooted in Jamnagar, Gujarat, where recovered textiles are reimagined through local craftsmanship and livelihood opportunities for women artisans.",
      },
      {
        question: "How does KatranKaari work with textile waste?",
        answer:
          "Discarded and surplus textiles are recovered, sorted and considered for their colour, texture and size. Skilled makers then transform suitable material into functional products designed for continued everyday use.",
      },
      {
        question: "Where can I learn more about the initiative?",
        answer:
          "Visit Our Story to understand KatranKaari’s roots and explore the Impact page for the wider Project Swachh Halar context, material journey and artisan stories.",
      },
    ],
  },
  {
    id: "support",
    number: "04",
    title: "Customer support",
    intro: "The quickest way to get help from the team.",
    icon: Mail,
    questions: [
      {
        question: "How can I contact KatranKaari?",
        answer: `Email ${siteConfig.contact.email}, call ${siteConfig.contact.phoneDisplay}, or use the message form on our Contact page. The team can help with products, gifting, collaborations and order-related questions.`,
      },
      {
        question: "I need help with an existing order. What should I share?",
        answer:
          "Send us your name, contact details, order reference and a short description of what you need help with. Photographs are useful when your question relates to a particular product.",
      },
      {
        question: "Where can I get help with shipping, returns or exchanges?",
        answer:
          "Please contact the KatranKaari team with your order details. They will confirm the applicable shipping information and guide you through the options available for your specific order.",
      },
    ],
  },
];

const faqItems = faqSections.flatMap((section) => section.questions);

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />

      <section className="relative isolate overflow-hidden border-b border-[#4A0613] bg-[#580716] text-[#FAF4E9]">
        <div className="pointer-events-none absolute -right-24 -top-40 size-[34rem] rounded-full border border-[#B7827D]/20" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-12 -top-24 size-[25rem] rounded-full border border-dashed border-[#EADAC7]/25" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-28 left-[42%] h-56 w-80 rotate-[-12deg] rounded-[55%_45%_20%_16%] bg-[#681426]/75 blur-3xl" aria-hidden="true" />

        <Container className="relative grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.15fr_0.65fr] lg:items-end lg:py-20">
          <div>
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-[#D7AAA5]">Answers, thoughtfully gathered</p>
            <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,5.8vw,5.8rem)] font-medium leading-[0.88] tracking-[-0.055em]">
              Everything you may want to know.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#EADAC7] sm:text-base">
              From recovered materials and product care to gifting and customer support, find the clearest answer here.
            </p>
          </div>

          <aside className="border-l border-[#B7827D]/55 pl-5 sm:pl-7">
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.2em] text-[#D7AAA5]">Need a direct answer?</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#FAF4E9]/88">Our team can help with a specific product, order or collaboration.</p>
            <Link className="group mt-5 inline-flex items-center gap-2 border-b border-[#EADAC7] pb-1 text-[0.7rem] font-extrabold uppercase tracking-[0.14em]" href="/contact">
              Contact KatranKaari
              <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" size={16} />
            </Link>
          </aside>
        </Container>
      </section>

      <section className="bg-[#FAF4E9] text-[#493D37]">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:py-20">
          <aside className="h-max lg:sticky lg:top-28">
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-[#681426]">Browse by topic</p>
            <nav className="mt-5 border-t border-[#D8C3AF]" aria-label="FAQ topics">
              {faqSections.map((section) => (
                <a className="group flex items-center justify-between border-b border-[#D8C3AF] py-3.5 text-sm font-semibold text-[#493D37] transition-colors hover:text-[#681426]" href={`#${section.id}`} key={section.id}>
                  {section.title}
                  <span className="text-[0.62rem] tracking-[0.12em] text-[#B7827D] transition-transform group-hover:translate-x-1">{section.number}</span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-14 sm:space-y-16">
            {faqSections.map((section) => {
              const Icon = section.icon;

              return (
                <section className="scroll-mt-28" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
                  <header className="grid gap-4 border-b border-[#CDB8A4] pb-5 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-end sm:gap-5">
                    <span className="grid size-11 place-items-center rounded-full border border-[#B7827D]/60 text-[#681426]" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.7} />
                    </span>
                    <div>
                      <div className="flex items-center gap-3 text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-[#B7827D]">
                        <span>{section.number}</span>
                        <span className="h-px w-8 bg-[#B7827D]/65" aria-hidden="true" />
                        <span>{section.intro}</span>
                      </div>
                      <h2 className="mt-2 font-display text-2xl font-semibold leading-none tracking-[-0.03em] text-[#4D101D] sm:text-3xl" id={`${section.id}-title`}>
                        {section.title}
                      </h2>
                    </div>
                  </header>

                  <div>
                    {section.questions.map((item, questionIndex) => (
                      <details className="group border-b border-[#D8C3AF]" key={item.question} open={section.id === "products" && questionIndex === 0}>
                        <summary className="grid min-h-16 cursor-pointer list-none grid-cols-[minmax(0,1fr)_2.5rem] items-center gap-5 py-4 text-base font-semibold text-[#493D37] transition-colors hover:text-[#681426] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681426] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF4E9] [&::-webkit-details-marker]:hidden sm:min-h-[4.75rem] sm:text-lg">
                          <span>{item.question}</span>
                          <span className="relative grid size-9 place-items-center rounded-full border border-[#B7827D]/60 text-[#681426] transition-colors group-open:bg-[#681426] group-open:text-[#FAF4E9]" aria-hidden="true">
                            <span className="absolute h-px w-3.5 bg-current" />
                            <span className="absolute h-3.5 w-px bg-current transition-transform group-open:rotate-90 group-open:opacity-0" />
                          </span>
                        </summary>
                        <div className="max-w-3xl pb-6 pr-12 text-sm leading-7 text-[#6B5B52] sm:text-base sm:leading-8">
                          <p>{item.answer}</p>
                          {section.id === "impact" && questionIndex === 2 ? (
                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#681426]">
                              <Link className="border-b border-[#B7827D] pb-0.5" href="/about">Our Story</Link>
                              <Link className="border-b border-[#B7827D] pb-0.5" href="/impact">Our Impact</Link>
                            </div>
                          ) : null}
                          {section.id === "support" && questionIndex === 0 ? (
                            <Link className="mt-4 inline-flex items-center gap-2 border-b border-[#B7827D] pb-0.5 text-[0.68rem] font-extrabold uppercase tracking-[0.13em] text-[#681426]" href="/contact">
                              Open contact page <ArrowUpRight aria-hidden="true" size={14} />
                            </Link>
                          ) : null}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-b-2 border-dashed border-[#C69288]/70 bg-[#681426] text-[#FAF4E9]">
        <Container className="grid gap-6 py-9 sm:py-11 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.22em] text-[#D7AAA5]">Still curious?</p>
            <h2 className="mt-2 max-w-3xl font-display text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">Tell us what you are looking for and we’ll help you find the answer.</h2>
            <p className="mt-3 flex items-center gap-2 text-sm text-[#EADAC7]"><MapPin aria-hidden="true" size={15} /> {siteConfig.contact.address}</p>
          </div>
          <Link className="group inline-flex min-h-12 w-max items-center gap-3 border border-[#EADAC7] px-6 py-3 text-[0.7rem] font-extrabold uppercase tracking-[0.14em] transition-colors hover:bg-[#FAF4E9] hover:text-[#681426]" href="/contact">
            Ask KatranKaari <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" size={17} />
          </Link>
        </Container>
      </section>
    </>
  );
}
