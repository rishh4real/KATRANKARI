"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { HandCoins, Leaf, Scissors, ShoppingBag, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";

export type JourneyMilestone = {
  number: string;
  title: string;
  description: string;
  icon: "foundation" | "beginning" | "opportunity" | "identity";
};

type StoryTimelineProps = {
  eyebrow: string;
  heading: string;
  milestones: JourneyMilestone[];
};

const milestoneIcons: Record<JourneyMilestone["icon"], LucideIcon> = {
  foundation: Leaf,
  beginning: Scissors,
  opportunity: HandCoins,
  identity: ShoppingBag,
};

const markerRotation = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-2"];

export function StoryTimeline({ eyebrow, heading, milestones }: StoryTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.22 });
  const reduceMotion = useReducedMotion();
  const draw = reduceMotion || isInView;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[#EADAC7] bg-[#FAF4E9] py-10 text-[#4D101D] sm:py-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(183,130,125,0.08),transparent_32%),linear-gradient(120deg,rgba(234,218,199,0.2),transparent_62%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:repeating-linear-gradient(45deg,transparent_0,transparent_8px,rgba(104,20,38,0.08)_8px,rgba(104,20,38,0.08)_9px)]"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={draw ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.26em] text-[#681426]">
            {eyebrow}
          </p>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-5xl">
            {heading}
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-8 max-w-6xl sm:mt-10">
          <svg
            className="pointer-events-none absolute left-[12.5%] top-0 z-0 hidden h-16 w-[75%] lg:block"
            viewBox="0 0 1000 64"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M0 32 C95 4 158 60 250 32 S408 4 500 32 S658 60 750 32 S905 4 1000 32"
              fill="none"
              stroke="#B7827D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="7 11"
              initial={{ pathLength: reduceMotion ? 1 : 0, opacity: 0.35 }}
              animate={{ pathLength: draw ? 1 : 0, opacity: draw ? 0.8 : 0.35 }}
              transition={{
                pathLength: { duration: 1.8, ease: "easeInOut" },
                opacity: { duration: 0.4 },
              }}
            />
          </svg>
          <svg
            className="pointer-events-none absolute bottom-8 left-0 top-0 z-0 w-16 lg:hidden"
            viewBox="0 0 64 640"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M32 0 C10 72 54 132 32 205 S10 335 32 410 S54 540 32 640"
              fill="none"
              stroke="#B7827D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="7 11"
              initial={{ pathLength: reduceMotion ? 1 : 0, opacity: 0.35 }}
              animate={{ pathLength: draw ? 1 : 0, opacity: draw ? 0.8 : 0.35 }}
              transition={{
                pathLength: { duration: 1.8, ease: "easeInOut" },
                opacity: { duration: 0.4 },
              }}
            />
          </svg>

          <div className="relative z-10 grid gap-7 lg:grid-cols-4 lg:gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestoneIcons[milestone.icon];

              return (
                <motion.article
                  key={milestone.number}
                  className="relative grid grid-cols-[4rem_1fr] gap-5 lg:block"
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={draw ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                  transition={{
                    duration: 0.62,
                    delay: reduceMotion ? 0 : 0.28 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div
                    className={`group relative flex h-16 w-16 items-center justify-center rounded-[1.15rem] border border-[#4D101D] bg-[#681426] text-[#FAF4E9] shadow-[0_9px_20px_rgba(77,16,29,0.14)] transition duration-300 hover:-translate-y-1 hover:rotate-0 lg:mx-auto ${markerRotation[index]}`}
                  >
                    <span className="absolute inset-1.5 rounded-[0.8rem] border border-dashed border-[#EADAC7]/45" aria-hidden="true" />
                    <Icon className="relative z-10" size={26} strokeWidth={1.55} aria-hidden="true" />
                    <span className="absolute -right-2 -top-2 z-20 flex h-6 min-w-6 items-center justify-center rounded-full border border-[#B7827D]/55 bg-[#FAF4E9] px-1 text-[0.5rem] font-extrabold tracking-[0.08em] text-[#681426]">
                      {milestone.number}
                    </span>
                  </div>
                  <div className="pt-1 lg:mt-5 lg:px-2 lg:text-center">
                    <h3 className="font-display text-2xl font-semibold leading-none text-[#4D101D]">{milestone.title}</h3>
                    <p className="mt-3 text-[0.78rem] leading-5 text-[#493D37]/85">{milestone.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
