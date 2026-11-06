"use client";

import { useCallback, useEffect, useState } from "react";
import { HandwritingSvg } from "@/components/ui/handwriting-svg";

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [handwritingReady, setHandwritingReady] = useState(false);
  const handleHandwritingReady = useCallback(() => {
    setHandwritingReady(true);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const leaveTimer = window.setTimeout(() => setLeaving(true), 2600);
    const dismissTimer = window.setTimeout(() => setVisible(false), 3000);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(dismissTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-black px-6 text-[#8E1B3A] transition-opacity duration-500 ease-out ${leaving ? "opacity-0" : "opacity-100"}`}
      aria-live="polite"
    >
      <p className="sr-only">Hello, welcome to KatranKaari store.</p>
      <div className="w-full max-w-4xl text-center">
        <div className={`mx-auto max-w-[52rem] overflow-hidden transition-opacity duration-300 ease-out ${handwritingReady ? "opacity-100" : "opacity-0"}`}>
          <HandwritingSvg
            text="Hello, welcome to KatranKaari store."
            width={880}
            height={210}
            fontSize={66}
            strokeWidth={2.7}
            duration={2.05}
            delay={0.1}
            onReady={handleHandwritingReady}
            className="h-auto w-full text-[#8E1B3A] [filter:drop-shadow(0_0_0.45rem_rgba(142,27,58,0.92))]"
          />
        </div>
      </div>
    </div>
  );
}
