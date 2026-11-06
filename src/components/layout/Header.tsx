"use client";

import Link from "next/link";
import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [showScrolledHeader, setShowScrolledHeader] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const { cart, ready } = useCart();

  useEffect(() => {
    if (!isHome) {
      setPastHero(false);
      return;
    }

    let previousScrollY = window.scrollY;
    let upwardScrollDistance = 0;
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const hero = document.getElementById("home-hero");
      const isPastHero = hero ? hero.getBoundingClientRect().bottom <= -48 : currentScrollY >= window.innerHeight + 48;
      const scrollDistance = currentScrollY - previousScrollY;
      setPastHero(isPastHero);
      if (!isPastHero) {
        upwardScrollDistance = 0;
        setShowScrolledHeader(false);
      } else if (scrollDistance > 0) {
        upwardScrollDistance = 0;
        setShowScrolledHeader(false);
      } else if (scrollDistance < 0) {
        upwardScrollDistance += Math.abs(scrollDistance);
        setShowScrolledHeader(upwardScrollDistance >= 32);
      }
      previousScrollY = currentScrollY;
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [isHome]);

  const hasLightHeader = !isHome || shopMenuOpen || (!pastHero && headerHovered) || (pastHero && showScrolledHeader);
  const homeHeaderClass = pastHero
    ? `fixed inset-x-0 top-0 z-40 bg-[#F8F7F2] text-[#171717] shadow-[0_1px_0_rgba(0,0,0,0.08)] transition-transform duration-300 ${showScrolledHeader ? "translate-y-0" : "-translate-y-full"}`
    : `absolute inset-x-0 top-0 z-40 transition-colors duration-300 ${headerHovered ? "bg-[#F8F7F2] text-[#171717] shadow-[0_1px_0_rgba(0,0,0,0.08)]" : "bg-transparent text-white"}`;
  return (
    <header className={isHome ? homeHeaderClass : "sticky top-0 z-40 border-b border-black/15 bg-background/95 text-foreground"} onMouseEnter={() => isHome && setHeaderHovered(true)} onMouseLeave={() => isHome && setHeaderHovered(false)}>
      <div className="mx-auto grid h-16 max-w-site grid-cols-[auto_1fr_auto] items-center px-4 lg:h-[80px] lg:grid-cols-[1fr_auto_1fr] lg:gap-5 lg:px-10 xl:px-16">
        <div className="hidden justify-self-start lg:block"><DesktopNavigation pathname={pathname} inverse={!hasLightHeader} shopOpen={shopMenuOpen} onShopOpenChange={setShopMenuOpen} /></div>
        <div className="flex items-center gap-1 lg:hidden">
          <button data-testid="mobile-menu-toggle" type="button" className="icon-button relative h-10 w-10 flex-none" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
            <span className="sr-only">Open menu</span>
            <span className={`absolute h-px w-5 -translate-y-1.5 ${hasLightHeader ? "bg-foreground" : "bg-white"}`} />
            <span className={`absolute h-px w-5 ${hasLightHeader ? "bg-foreground" : "bg-white"}`} />
            <span className={`absolute h-px w-5 translate-y-1.5 ${hasLightHeader ? "bg-foreground" : "bg-white"}`} />
          </button>
          <Link className={`icon-button h-10 w-10 ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/shop#catalog-controls" aria-label="Search products"><Search aria-hidden="true" size={21} strokeWidth={1.5} /></Link>
        </div>
        <Link className="inline-flex w-max items-center justify-self-center no-underline" href="/" aria-label="KatranKaari home">
          <strong className={hasLightHeader ? "border-2 border-foreground px-2 pb-1 pt-1.5 text-[0.9rem] font-black uppercase leading-none tracking-[0.06em] sm:text-base lg:text-[1.05rem]" : "border border-white px-2 py-1.5 text-[0.78rem] font-black uppercase leading-none tracking-[0.1em] sm:text-[0.9rem] lg:px-3 lg:py-2 lg:text-[1rem]"}>KatranKaari</strong>
        </Link>
        <div className="hidden items-center justify-self-end gap-1 lg:flex xl:gap-2">
          <nav aria-label="Secondary navigation">
            <ul className="flex items-center gap-4 xl:gap-6">
              {[{ label: "Contact", href: "/contact" }].map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return <li key={item.href}><Link className={`inline-flex min-h-11 items-center text-[10px] font-extrabold uppercase tracking-[0.14em] underline-offset-[6px] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:text-[11px] ${hasLightHeader ? "decoration-[#7A1424]" : "decoration-white"} ${active ? "underline" : ""}`} aria-current={active ? "page" : undefined} href={item.href}>{item.label}</Link></li>;
              })}
            </ul>
          </nav>
          <Link className={`icon-button ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/shop#catalog-controls" aria-label="Search products"><Search aria-hidden="true" size={23} strokeWidth={1.5} /></Link>
          <Link className={`icon-button ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/account" aria-label="Account"><UserRound aria-hidden="true" size={23} strokeWidth={1.5} /></Link>
          <Link className={`icon-button ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/wishlist" aria-label="Wishlist"><Heart aria-hidden="true" size={23} strokeWidth={1.5} /></Link>
          <Link className={`icon-button relative ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/cart" aria-label={`Cart with ${ready ? cart.totalQuantity : 0} items`}>
            <ShoppingBag aria-hidden="true" size={24} strokeWidth={1.5} />
            <span className={`absolute right-0 top-0 min-w-4 rounded-full px-1 text-center text-[10px] leading-4 ${hasLightHeader ? "bg-foreground text-background" : "bg-white text-foreground"}`}>{ready ? cart.totalQuantity : 0}</span>
          </Link>
        </div>
        <div className="flex items-center justify-self-end lg:hidden">
          <Link className={`icon-button h-10 w-10 ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/account" aria-label="Account"><UserRound aria-hidden="true" size={21} strokeWidth={1.5} /></Link>
          <Link className={`icon-button relative h-10 w-10 ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/cart" aria-label={`Mobile shopping bag with ${ready ? cart.totalQuantity : 0} items`}>
            <ShoppingBag aria-hidden="true" size={21} strokeWidth={1.5} />
            <span className={`absolute right-0 top-0 min-w-4 rounded-full px-1 text-center text-[10px] leading-4 ${hasLightHeader ? "bg-foreground text-background" : "bg-white text-foreground"}`}>{ready ? cart.totalQuantity : 0}</span>
          </Link>
        </div>
      </div>
      <MobileNavigation open={menuOpen} pathname={pathname} onClose={closeMenu} />
    </header>
  );
}
