"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const shopColumns = [
  {
    title: "Bags & Totes",
    links: ["Quilted Dual Tote", "Patchwork Tote", "Weekend Duffle", "Crossbody Utility Bag"],
  },
  {
    title: "Home & Living",
    links: ["Cushion Covers", "Table Mats & Runners", "Oval Rugs", "Curtains & Organisers"],
  },
  {
    title: "Everyday Essentials",
    links: ["Pouches & Organisers", "Laptop & Tech", "Kitchen & Dining", "Fashion Accessories"],
  },
];

const navigation = [
  { label: "Corporate Gifting", href: "/corporate-gifting" },
  { label: "Our Story", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Education", href: "/education" },
];

function navigationClass(inverse: boolean, active: boolean) {
  return `inline-flex min-h-10 items-center whitespace-nowrap text-[9px] font-extrabold uppercase tracking-[0.1em] underline-offset-[5px] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:text-[10px] ${inverse ? "text-white decoration-white" : "text-foreground decoration-[#7A1424]"} ${active ? "underline" : ""}`;
}

export function DesktopNavigation({ pathname, inverse = false, shopOpen, onShopOpenChange }: { pathname: string; inverse?: boolean; shopOpen: boolean; onShopOpenChange: (open: boolean) => void }) {
  const shopActive = pathname === "/shop" || pathname.startsWith("/shop/") || pathname.startsWith("/collections/") || pathname.startsWith("/products/");
  const closeTimer = useRef<number | null>(null);

  const openShopMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    onShopOpenChange(true);
  };
  const closeShopMenu = () => {
    closeTimer.current = window.setTimeout(() => onShopOpenChange(false), 180);
  };

  useEffect(() => () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  return (
    <nav aria-label="Primary navigation" className="hidden lg:block">
      <ul className="flex items-center gap-4 xl:gap-6">
        <li onMouseEnter={openShopMenu} onMouseLeave={closeShopMenu} onFocus={openShopMenu} onBlur={closeShopMenu}>
          <Link className={navigationClass(inverse, shopActive)} aria-current={shopActive ? "page" : undefined} href="/shop">Shop</Link>
          <div className={`fixed inset-x-0 top-20 z-50 border-t border-black/10 bg-[#F8F7F2] px-10 py-9 text-foreground shadow-[0_20px_42px_rgba(0,0,0,0.14)] transition duration-200 xl:px-16 ${shopOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"}`} onMouseEnter={openShopMenu} onMouseLeave={closeShopMenu}>
            <div className="mx-auto grid max-w-site grid-cols-[repeat(3,minmax(0,1fr))_minmax(230px,0.85fr)] gap-8 xl:gap-10">
              {shopColumns.map((column) => (
                <section key={column.title} aria-label={column.title}>
                  <h2 className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#7A1424]">{column.title}</h2>
                  <ul className="space-y-2.5">
                    {column.links.map((label) => (
                      <li key={label}>
                        <Link className="text-sm leading-none text-foreground/80 transition-colors hover:text-[#7A1424] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1424]" href={`/shop?collection=${encodeURIComponent(label.toLowerCase().replaceAll(" ", "-"))}`}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                  <Link className="mt-5 inline-flex text-[10px] font-extrabold uppercase tracking-[0.1em] text-foreground underline decoration-[#7A1424] underline-offset-[5px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1424]" href="/shop">View all</Link>
                </section>
              ))}
              <Link className="group/card relative min-h-[270px] overflow-hidden bg-[#D8CBC2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1424]" href="/shop?collection=bags">
                <Image src="/katrankaari/editorial-bag.png" alt="KatranKaari patterned bag" fill sizes="(min-width: 1280px) 19vw, 23vw" className="object-cover transition duration-500 group-hover/card:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 text-white">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.1em]">Featured collection</span>
                  <span className="mt-1 block font-serif text-2xl">Bags & Totes</span>
                </div>
              </Link>
            </div>
          </div>
        </li>
        {navigation.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return <li key={item.href}><Link className={navigationClass(inverse, active)} aria-current={active ? "page" : undefined} href={item.href}>{item.label}</Link></li>;
        })}
      </ul>
    </nav>
  );
}
