"use client";

import { useEffect, useRef, useState } from "react";

type ImpactStatProps = {
  amount: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export function ImpactStat({ amount, prefix = "", suffix = "", className = "" }: ImpactStatProps) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const formattedValue = `${prefix}${amount.toLocaleString("en-IN")}${suffix}`;

  useEffect(() => {
    const element = valueRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setDisplayValue(amount));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const duration = 1050;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(amount * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.55 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [amount]);

  return (
    <span ref={valueRef} className={className} aria-label={formattedValue}>
      <span aria-hidden="true">{prefix}{displayValue.toLocaleString("en-IN")}{suffix}</span>
    </span>
  );
}
