"use client";

import Image from "next/image";
import { useState } from "react";

export function ImpactComparison() {
  const [position, setPosition] = useState(50);

  return (
    <figure className="group relative h-[13rem] w-full overflow-hidden rounded-[1.1rem] border border-[#D4BFAA] bg-white shadow-[0_22px_55px_rgba(77,16,29,0.16)] focus-within:ring-2 focus-within:ring-[#681426] focus-within:ring-offset-4 focus-within:ring-offset-[#681426] sm:h-[14rem] lg:h-[15.5rem]">
      <Image
        src="/katrankaari/patchwork-tote-clean.png"
        alt="Finished patchwork textile product held by hand"
        fill
        priority
        className="object-cover object-center"
        sizes="(min-width: 1024px) 58vw, 100vw"
      />
      <span className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-[#681426] px-3 py-2 text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-[#FAF4E9] shadow-sm">
        Reimagined
      </span>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src="/katrankaari/fabric-waste.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[#FAF4E9] px-3 py-2 text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-[#681426] shadow-sm">
          Discarded
        </span>
      </div>

      <div className="pointer-events-none absolute inset-y-0 z-20 w-px bg-[#FAF4E9] shadow-[0_0_0_1px_rgba(104,20,38,0.18)]" style={{ left: `${position}%` }} aria-hidden="true">
        <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-[5px] border-[#FAF4E9] bg-[#681426] text-lg font-bold text-[#FAF4E9] shadow-[0_8px_24px_rgba(77,16,29,0.3)] transition-transform group-hover:scale-105">
          ↔
        </span>
      </div>

      <input
        className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label="Compare discarded textiles with the finished patchwork product"
        aria-valuetext={`${position}% discarded textiles visible`}
      />
      <figcaption className="sr-only">Drag left or right to compare discarded textiles with the finished patchwork product.</figcaption>
    </figure>
  );
}
