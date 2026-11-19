"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";

export type JourneyMilestone = {
  number: string;
  title: string;
  description: string;
};

type StoryTimelineProps = {
  eyebrow: string;
  heading: string;
  milestones: JourneyMilestone[];
};

export function StoryTimeline({ eyebrow, heading, milestones }: StoryTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.22 });
  const reduceMotion = useReducedMotion();
  const draw = reduceMotion || isInView;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[#EADAC7] bg-[#FAF4E9] py-12 text-[#4D101D] sm:py-14 lg:py-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_12%,rgba(183,130,125,0.08),transparent_32%),linear-gradient(120deg,rgba(234,218,199,0.2),transparent_62%)]"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={draw ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.26em] text-[#681426]">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-5xl">
            {heading}
          </h2>
        </motion.div>

        <div className="relative mt-10 sm:mt-12">
          <svg
            className="pointer-events-none absolute left-[8%] top-5 hidden h-16 w-[84%] lg:block"
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M0 39 C90 5 160 70 250 39 S410 5 500 39 S660 70 750 39 S910 5 1000 39"
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
            className="pointer-events-none absolute bottom-6 left-[1.1rem] top-5 w-8 lg:hidden"
            viewBox="0 0 32 640"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M16 0 C2 72 30 132 16 205 S2 335 16 410 S30 540 16 640"
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

          <div className="grid gap-8 lg:grid-cols-4 lg:gap-8">
            {milestones.map((milestone, index) => (
              <motion.article
                key={milestone.number}
                className="relative grid grid-cols-[2.25rem_1fr] gap-4 lg:block"
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                animate={draw ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                transition={{
                  duration: 0.62,
                  delay: reduceMotion ? 0 : 0.28 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#B7827D]/65 bg-[#FAF4E9] text-[0.58rem] font-extrabold tracking-[0.12em] text-[#681426] shadow-[0_0_0_6px_#FAF4E9] lg:mx-auto">
                  {milestone.number}
                </span>
                <div className="lg:mt-7 lg:text-center">
                  <h3 className="font-display text-2xl font-semibold leading-none text-[#4D101D]">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-[0.8rem] leading-5 text-[#493D37]/85">
                    {milestone.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
