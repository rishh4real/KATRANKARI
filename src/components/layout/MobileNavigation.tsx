"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useEffect, useRef } from "react";

const mainLinks = [
  { label: "About Us", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Corporate Gifting & Custom Orders", href: "/corporate-gifting" },
  { label: "Our Impact", href: "/impact" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
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
  return (
    <div className="fixed inset-0 z-50 bg-black/60 lg:hidden" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div ref={panelRef} role="dialog" aria-modal="true" aria-label="Mobile navigation" className="ml-auto flex h-full w-[min(82vw,27rem)] flex-col overflow-y-auto bg-[#050505] px-7 py-6 text-white shadow-[-28px_0_46px_rgba(0,0,0,.38)]">
        <div className="flex items-start justify-between gap-5">
          <Link className="inline-flex border-2 border-black bg-white px-2.5 pb-1.5 pt-2 text-base font-black leading-none tracking-[0.04em] text-black" href="/" onClick={onClose}>KatranKaari</Link>
          <button className="inline-flex h-12 w-12 items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" type="button" aria-label="Close menu" onClick={onClose}><X aria-hidden="true" size={34} strokeWidth={1.5} /></button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-1 items-center py-7">
          <ul className="w-full space-y-3.5">
            {mainLinks.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return <li key={item.href}><Link className={`block border-b border-white/25 pb-2 font-display text-[clamp(1.75rem,8.4vw,3.2rem)] leading-[0.94] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${active ? "underline decoration-1 underline-offset-8" : ""}`} aria-current={active ? "page" : undefined} href={item.href} onClick={onClose}>{item.label}</Link></li>;
            })}
          </ul>
        </nav>
        <div className="flex flex-wrap gap-2 border-t border-white/25 pt-5 text-[10px] font-extrabold uppercase tracking-[0.16em]">
          <Link className="inline-flex min-h-10 items-center border border-white/50 px-3" href="/shop#catalog-controls" onClick={onClose}>Search</Link>
          <Link className="inline-flex min-h-10 items-center border border-white/50 px-3" href="/account" onClick={onClose}>Account</Link>
          <Link className="inline-flex min-h-10 items-center border border-white/50 px-3" href="/wishlist" onClick={onClose}>Wishlist</Link>
          <Link className="inline-flex min-h-10 items-center border border-white/50 px-3" href="/cart" onClick={onClose}>Cart</Link>
          <Link className="inline-flex min-h-10 items-center border border-white/50 px-3" href="/track-order" onClick={onClose}>Track Order</Link>
          <Link className="inline-flex min-h-10 items-center border border-white/50 px-3" href="/faq" onClick={onClose}>FAQs</Link>
        </div>
      </div>
    </div>
  );
}
