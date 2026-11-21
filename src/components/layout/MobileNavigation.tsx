"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const mainLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Corporate Gifting", href: "/corporate-gifting" },
  { label: "About Us", href: "/about" },
  { label: "Our Impact", href: "/impact" },
];

export function MobileNavigation({ open, pathname, onClose }: { open: boolean; pathname: string; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && focusable?.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return createPortal(
    <div className="mobile-menu-backdrop fixed inset-0 z-[120] bg-[#2B080F]/55 lg:hidden" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={panelRef} role="dialog" aria-modal="true" aria-label="Mobile navigation" className="mobile-menu-panel ml-auto flex h-dvh w-[75vw] min-w-[18rem] max-w-[22rem] flex-col overflow-y-auto border-l border-[#D7AAA5]/35 bg-[linear-gradient(155deg,#681426_0%,#4D101D_65%,#350811_100%)] px-5 py-5 text-[#FAF4E9] shadow-[-28px_0_46px_rgba(43,8,15,.42)] sm:px-6 sm:py-6">
        <div className="flex items-start justify-between gap-5">
          <Link className="inline-flex flex-col items-start text-[#FAF4E9]" href="/" onClick={onClose}><strong className="border-2 border-[#FAF4E9] bg-[#FAF4E9] px-2.5 pb-1.5 pt-2 text-base font-black leading-none tracking-[0.04em] text-[#4D101D]">KatranKaari</strong><small className="mt-1 font-display text-[0.64rem] italic text-[#EADAC7]">Re-imagining textile waste</small></Link>
          <button className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center text-[#FAF4E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF4E9]" type="button" aria-label="Close menu" onClick={onClose}>
            <span className="mobile-menu-close-line mobile-menu-close-line-top" aria-hidden="true" />
            <span className="mobile-menu-close-line mobile-menu-close-line-middle" aria-hidden="true" />
            <span className="mobile-menu-close-line mobile-menu-close-line-bottom" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-1 items-center py-7">
          <ul className="w-full space-y-3.5">
            {mainLinks.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return <li key={item.href}><Link className={`block border-b border-[#EADAC7]/35 pb-2 font-display text-[clamp(1.55rem,6.8vw,2.4rem)] leading-[0.98] text-[#FAF4E9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF4E9] ${active ? "underline decoration-1 underline-offset-8" : ""}`} aria-current={active ? "page" : undefined} href={item.href} onClick={onClose}>{item.label}</Link></li>;
            })}
          </ul>
        </nav>
        <div className="grid grid-cols-2 gap-2 border-t border-[#EADAC7]/35 pt-5 text-[9px] font-extrabold uppercase tracking-[0.14em]">
          <Link className="inline-flex min-h-10 items-center justify-center border border-[#EADAC7]/55 px-2" href="/shop#catalog-controls" onClick={onClose}>Search</Link>
          <Link className="inline-flex min-h-10 items-center justify-center border border-[#EADAC7]/55 px-2" href="/account" onClick={onClose}>Account</Link>
          <Link className="inline-flex min-h-10 items-center justify-center border border-[#EADAC7]/55 px-2" href="/cart" onClick={onClose}>Cart</Link>
          <Link className="inline-flex min-h-10 items-center justify-center border border-[#EADAC7]/55 px-2" href="/track-order" onClick={onClose}>Track Order</Link>
          <Link className="col-span-2 inline-flex min-h-10 items-center justify-center border border-[#EADAC7]/55 px-2" href="/faq" onClick={onClose}>FAQs</Link>
        </div>
      </div>
    </div>,
    document.body,
  );
}
