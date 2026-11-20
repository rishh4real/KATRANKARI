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
    <section className="relative overflow-hidden border-b border-[#4D101D] bg-[#681426] py-8 text-[#FAF4E9] sm:py-9 lg:py-10">
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
          <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.26em] text-[#EADAC7]">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#FAF4E9] sm:text-4xl lg:text-[2.75rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#EADAC7]/85 sm:text-[0.9rem]">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-6 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
          }}
        >
          {items.map((item, index) => {
            const Icon = icons[item.icon];
            const mobileDivider = index === 0 ? "" : "border-t border-[#EADAC7]/25 sm:border-t-0";
            const tabletDivider = index % 2 === 1 ? "sm:border-l sm:border-[#EADAC7]/25" : "";
            const desktopDivider = index > 0 ? "lg:border-l lg:border-[#EADAC7]/25" : "";

            return (
              <motion.article
                key={item.number}
                className={`group relative px-1 py-4 sm:px-6 sm:py-3 lg:px-7 ${mobileDivider} ${tabletDivider} ${desktopDivider}`}
                variants={
                  reduceMotion
                    ? undefined
                    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
                }
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[0.62rem] font-extrabold tracking-[0.2em] text-[#D8A39D]">
                    {item.number}
                  </span>
                  <span
                    className="flex h-11 w-11 rotate-2 items-center justify-center rounded-[0.8rem] border border-dashed border-[#EADAC7]/40 bg-[#4D101D]/25 text-[#EADAC7] transition duration-300 ease-out group-hover:-translate-y-1 group-hover:-rotate-2 group-hover:border-[#EADAC7]/70 group-hover:text-[#FAF4E9]"
                    aria-hidden="true"
                  >
                    <Icon size={28} strokeWidth={1.55} />
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-none text-[#FAF4E9] sm:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.62rem] font-extrabold uppercase tracking-[0.17em] text-[#EADAC7]">
                  {item.role}
                </p>
                <p className="mt-2 text-[0.75rem] leading-[1.15rem] text-[#EADAC7]/80">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
