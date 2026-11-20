"use client";

import Link from "next/link";
import { Search, ShoppingBag, UserRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const pathname = usePathname();
  const overlayHeroIds: Record<string, string> = {
    "/": "home-hero",
    "/about": "about-hero",
    "/contact": "contact-hero",
  };
  const heroId = overlayHeroIds[pathname];
  const hasOverlayHero = Boolean(heroId);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [showScrolledHeader, setShowScrolledHeader] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const { cart, ready } = useCart();

  useEffect(() => {
    if (!heroId) return;

    let previousScrollY = window.scrollY;
    let upwardScrollDistance = 0;
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const hero = document.getElementById(heroId);
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
  }, [heroId]);

  const hasLightHeader = !hasOverlayHero || shopMenuOpen || (!pastHero && headerHovered) || (pastHero && showScrolledHeader);
  const overlayHeaderClass = pastHero
    ? `fixed inset-x-0 top-0 z-40 bg-background text-[#171717] shadow-[0_1px_0_rgba(0,0,0,0.08)] transition-transform duration-300 ${showScrolledHeader ? "translate-y-0" : "-translate-y-full"}`
    : `absolute inset-x-0 top-0 z-40 transition-colors duration-300 ${headerHovered ? "bg-background text-[#171717] shadow-[0_1px_0_rgba(0,0,0,0.08)]" : "bg-transparent text-white"}`;
  return (
    <header className={hasOverlayHero ? overlayHeaderClass : "sticky top-0 z-40 border-b border-black/15 bg-background/95 text-foreground"} onMouseEnter={() => hasOverlayHero && setHeaderHovered(true)} onMouseLeave={() => hasOverlayHero && setHeaderHovered(false)}>
      <div className="flex h-[72px] w-full items-center gap-4 px-3 sm:px-5 lg:h-[92px] lg:gap-6 lg:px-6 xl:px-8">
        <Link className="inline-flex w-max flex-none flex-col items-center no-underline" href="/" aria-label="KatranKaari home">
          <strong className={hasLightHeader ? "border-2 border-foreground px-3 pb-1.5 pt-2 text-base font-black leading-none tracking-[0.04em] sm:text-[1.05rem] lg:px-4 lg:py-2.5 lg:text-[1.22rem]" : "border border-white px-3 pb-1.5 pt-2 text-sm font-black leading-none tracking-[0.06em] sm:text-base lg:px-4 lg:py-2.5 lg:text-[1.22rem]"}>KatranKaari</strong>
          <small className={`mt-1.5 w-full text-center font-display text-[0.6rem] italic leading-none sm:text-[0.66rem] lg:text-[0.7rem] ${hasLightHeader ? "text-muted" : "text-white/85"}`}>Re-imagining textile waste</small>
        </Link>
        <div className="ml-auto hidden min-w-0 justify-end lg:flex"><DesktopNavigation pathname={pathname} inverse={!hasLightHeader} shopOpen={shopMenuOpen} onShopOpenChange={setShopMenuOpen} /></div>
        <div className="hidden items-center gap-1 lg:flex xl:ml-2 xl:gap-2">
          <Link className={`icon-button ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/shop#catalog-controls" aria-label="Search products"><Search aria-hidden="true" size={23} strokeWidth={1.5} /></Link>
          <Link className={`icon-button ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/account" aria-label="Account"><UserRound aria-hidden="true" size={23} strokeWidth={1.5} /></Link>
          <Link className={`icon-button relative ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/cart" aria-label={`Cart with ${ready ? cart.totalQuantity : 0} items`}>
            <ShoppingBag aria-hidden="true" size={24} strokeWidth={1.5} />
            <span className={`absolute right-0 top-0 min-w-4 rounded-full px-1 text-center text-[10px] leading-4 ${hasLightHeader ? "bg-foreground text-background" : "bg-white text-foreground"}`}>{ready ? cart.totalQuantity : 0}</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center lg:hidden">
          <Link className={`icon-button h-10 w-10 ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/shop#catalog-controls" aria-label="Search products"><Search aria-hidden="true" size={20} strokeWidth={1.5} /></Link>
          <Link className={`icon-button h-10 w-10 ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/account" aria-label="Account"><UserRound aria-hidden="true" size={21} strokeWidth={1.5} /></Link>
          <Link className={`icon-button relative h-10 w-10 ${!hasLightHeader ? "hover:!bg-white/10" : ""}`} href="/cart" aria-label={`Mobile shopping bag with ${ready ? cart.totalQuantity : 0} items`}>
            <ShoppingBag aria-hidden="true" size={21} strokeWidth={1.5} />
            <span className={`absolute right-0 top-0 min-w-4 rounded-full px-1 text-center text-[10px] leading-4 ${hasLightHeader ? "bg-foreground text-background" : "bg-white text-foreground"}`}>{ready ? cart.totalQuantity : 0}</span>
          </Link>
          <button data-testid="mobile-menu-toggle" type="button" className="icon-button relative h-10 w-10 flex-none" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
            <span className="sr-only">Open menu</span>
            <span className={`absolute h-px w-5 -translate-y-1.5 ${hasLightHeader ? "bg-foreground" : "bg-white"}`} />
            <span className={`absolute h-px w-5 ${hasLightHeader ? "bg-foreground" : "bg-white"}`} />
            <span className={`absolute h-px w-5 translate-y-1.5 ${hasLightHeader ? "bg-foreground" : "bg-white"}`} />
          </button>
        </div>
      </div>
      <MobileNavigation open={menuOpen} pathname={pathname} onClose={closeMenu} />
    </header>
  );
}
