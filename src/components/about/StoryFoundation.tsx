"use client";

import { HandHeart, Handshake, MapPin, Recycle, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export type FoundationItem = {
  number: string;
  title: string;
  role: string;
  description: string;
  icon: "sustainability" | "collaboration" | "community" | "location";
};

type StoryFoundationProps = {
  eyebrow: string;
  heading: string;
  description: string;
  items: FoundationItem[];
};

const icons: Record<FoundationItem["icon"], LucideIcon> = {
  sustainability: Recycle,
  collaboration: HandHeart,
  community: Handshake,
  location: MapPin,
};

export function StoryFoundation({ eyebrow, heading, description, items }: StoryFoundationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-[#4D101D] bg-[#681426] py-6 text-[#FAF4E9] sm:py-9 lg:py-10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(234,218,199,0.09),transparent_32%),linear-gradient(120deg,rgba(77,16,29,0.24),transparent_62%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-4 h-56 w-56 rounded-full border border-[#EADAC7]/10"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.55rem] font-extrabold uppercase tracking-[0.2em] text-[#EADAC7] sm:text-[0.65rem] sm:tracking-[0.26em]">
            {eyebrow}
          </p>
          <h2 className="mt-1.5 font-display text-[1.65rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#FAF4E9] sm:mt-2 sm:text-4xl lg:text-[2.75rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-[0.68rem] leading-4 text-[#EADAC7]/85 sm:mt-3 sm:text-[0.9rem] sm:leading-6">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-4 grid max-w-6xl grid-cols-4 sm:mt-6 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
          }}
        >
          <svg className="pointer-events-none absolute left-[12.5%] top-3 z-0 h-8 w-[75%] sm:hidden" viewBox="0 0 1000 64" preserveAspectRatio="none" aria-hidden="true">
            <path className="process-thread" d="M0 32 C95 4 158 60 250 32 S408 4 500 32 S658 60 750 32 S905 4 1000 32" fill="none" stroke="#EADAC7" strokeWidth="2" strokeLinecap="round" strokeDasharray="7 11" />
          </svg>
          {items.map((item, index) => {
            const Icon = icons[item.icon];
            const mobileDivider = index === 0 ? "" : "border-l border-[#EADAC7]/25 sm:border-l-0";
            const tabletDivider = index % 2 === 1 ? "sm:border-l sm:border-[#EADAC7]/25" : "";
            const desktopDivider = index > 0 ? "lg:border-l lg:border-[#EADAC7]/25" : "";

            return (
              <motion.article
                key={item.number}
                className={`group relative z-10 px-1.5 py-1 text-center sm:px-6 sm:py-3 sm:text-left lg:px-7 ${mobileDivider} ${tabletDivider} ${desktopDivider}`}
                variants={
                  reduceMotion
                    ? undefined
                    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
                }
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-col-reverse items-center gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <span className="text-[0.48rem] font-extrabold tracking-[0.16em] text-[#D8A39D] sm:text-[0.62rem] sm:tracking-[0.2em]">
                    {item.number}
                  </span>
                  <span
                    className="flex h-9 w-9 rotate-2 items-center justify-center rounded-[0.65rem] border border-dashed border-[#EADAC7]/40 bg-[#4D101D]/25 text-[#EADAC7] transition duration-300 ease-out group-hover:-translate-y-1 group-hover:-rotate-2 group-hover:border-[#EADAC7]/70 group-hover:text-[#FAF4E9] sm:h-11 sm:w-11 sm:rounded-[0.8rem]"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.55} />
                  </span>
                </div>
                <h3 className="mt-2 font-display text-[0.72rem] font-semibold leading-[1.05] text-[#FAF4E9] sm:mt-3 sm:text-[1.35rem] sm:leading-none">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[0.42rem] font-extrabold uppercase leading-[1.25] tracking-[0.08em] text-[#EADAC7] sm:mt-2 sm:text-[0.62rem] sm:tracking-[0.17em]">
                  {item.role}
                </p>
                <p className="mt-1.5 text-[0.48rem] leading-[0.7rem] text-[#EADAC7]/80 sm:mt-2 sm:text-[0.75rem] sm:leading-[1.15rem]">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
