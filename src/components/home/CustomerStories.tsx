import { Quote, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";

const stories = [
  {
    name: "Aditi Sharma",
    location: "Delhi, India",
    quote: "Beautifully made and so meaningful. I love that it gives new life to discarded fabrics.",
  },
  {
    name: "Rohan Mehta",
    location: "Mumbai, India",
    quote: "The quality is excellent, and the story behind each piece makes it feel even more special.",
  },
  {
    name: "Sneha Iyer",
    location: "Bengaluru, India",
    quote: "A perfect blend of sustainability, craft and utility. Proud to support such a thoughtful brand.",
  },
  {
    name: "Meera Kapoor",
    location: "Pune, India",
    quote: "Every stitch feels considered. It is the kind of everyday piece that only gets better with use.",
  },
  {
    name: "Kabir Singh",
    location: "Jaipur, India",
    quote: "I bought one as a gift and immediately came back for another. The craft is beautiful.",
  },
  {
    name: "Nandini Rao",
    location: "Hyderabad, India",
    quote: "Useful, thoughtful and unlike anything else in my collection. I use it every single day.",
  },
  {
    name: "Arjun Malhotra",
    location: "Gurugram, India",
    quote: "The materials have real character, and the finishing is genuinely excellent.",
  },
  {
    name: "Tara Desai",
    location: "Ahmedabad, India",
    quote: "It feels good to choose something practical that has been made with such care.",
  },
];

export function CustomerStories() {
  return (
    <section className="border-b border-[#E0D5CD] bg-[#FBF8F4]" aria-labelledby="customer-stories-title">
      <Container className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#741228]">
            <span className="w-10 border-t border-dashed border-[#9C5260]" aria-hidden="true" />
            <span>Customer stories</span>
            <span className="w-10 border-t border-dashed border-[#9C5260]" aria-hidden="true" />
          </div>
          <h2 id="customer-stories-title" className="mt-3 font-display text-[clamp(2rem,3.6vw,3.4rem)] leading-[1] text-[#641023]">
            Made with care. Loved with purpose.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#5D5552] sm:text-base">
            Thoughtful creations and everyday stories from the people who choose KatranKaari.
          </p>
        </div>

        <div className="mt-7 overflow-hidden" aria-label="Customer reviews">
          <div className="review-story-marquee flex w-max gap-3 pr-3 hover:[animation-play-state:paused] motion-reduce:translate-x-0 motion-reduce:animate-none md:gap-4 md:pr-4">
            {[...stories, ...stories].map((story, index) => (
            <article className="relative flex min-h-[12rem] w-[19rem] flex-col border border-[#DCC9C3] bg-white p-5 sm:w-[21rem]" key={`${story.name}-${index}`}>
              <div className="flex items-center gap-3 text-[#86152C]">
                <Quote aria-hidden="true" size={27} strokeWidth={2.1} />
                <span className="flex gap-0.5" aria-label="Five out of five stars">
                  {Array.from({ length: 5 }, (_, index) => <Star aria-hidden="true" className="fill-[#D89922] text-[#D89922]" key={index} size={15} />)}
                </span>
              </div>
              <blockquote className="mt-4 font-display text-[1.25rem] leading-[1.15] text-[#2B1A1E] sm:text-[1.35rem]">
                “{story.quote}”
              </blockquote>
              <div className="mt-auto flex items-center gap-3 border-t border-dashed border-[#D8C3BD] pt-4">
                <span className="grid size-8 place-items-center rounded-full bg-[#741228] text-xs font-semibold text-[#FBF8F4]" aria-hidden="true">
                  {story.name.charAt(0)}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-[#2B1A1E]">{story.name}</p>
                  <p className="mt-0.5 text-xs text-[#766B68]">{story.location}</p>
                </div>
              </div>
            </article>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
