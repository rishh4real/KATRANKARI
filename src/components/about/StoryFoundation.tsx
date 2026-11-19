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
    <section className="relative overflow-hidden border-b border-[#EADAC7] bg-[#FAF4E9] py-12 sm:py-14 lg:py-16">
      <div
        className="pointer-events-none absolute -right-24 top-4 h-56 w-56 rounded-full border border-[#B7827D]/10"
        aria-hidden="true"
      />
      <Container>
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.26em] text-[#681426]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-[#4D101D] sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-[#493D37] sm:text-[0.95rem] sm:leading-7">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4"
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
            const mobileDivider = index === 0 ? "" : "border-t border-[#B7827D]/35 sm:border-t-0";
            const tabletDivider = index % 2 === 1 ? "sm:border-l sm:border-[#B7827D]/35" : "";
            const desktopDivider = index > 0 ? "lg:border-l lg:border-[#B7827D]/35" : "";

            return (
              <motion.article
                key={item.number}
                className={`group relative px-1 py-6 sm:px-7 sm:py-4 lg:px-8 ${mobileDivider} ${tabletDivider} ${desktopDivider}`}
                variants={
                  reduceMotion
                    ? undefined
                    : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
                }
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[0.62rem] font-extrabold tracking-[0.2em] text-[#B7827D]">
                    {item.number}
                  </span>
                  <span
                    className="flex h-10 w-10 items-center justify-center text-[#681426] transition duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-[-3deg]"
                    aria-hidden="true"
                  >
                    <Icon size={28} strokeWidth={1.55} />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-none text-[#4D101D]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.62rem] font-extrabold uppercase tracking-[0.17em] text-[#681426]">
                  {item.role}
                </p>
                <p className="mt-3 text-[0.8rem] leading-5 text-[#493D37]/85">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
