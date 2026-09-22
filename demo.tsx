"use client";

import { useEffect, useRef, useState } from "react";
import GlyphPortal from "@/components/ui/glyph-portal";
import { CrowdCanvas } from "@/components/ui/skiper39";

const settings = { word: "KATRANKAARI", scrollLength: 1.25, interactive: true, annotations: false };
const family = '"Glyph Portal Jakarta", Arial, sans-serif';
const images = [
  "/katrankaari/fabric-waste.png",
  "/katrankaari/stitching-closeup.png",
  "/katrankaari/patchwork-stitching.png",
  "/katrankaari/maker.png",
  "/katrankaari/table-runner.png",
  "/katrankaari/organizer.png",
  "/katrankaari/editorial-pillows.png",
  "/katrankaari/bunting.png",
];
const mosaicImages = [...images, ...images, ...images, ...images];
const heroStories = [
  {
    title: "Waste textile to design",
    label: "Material",
    image: "/katrankaari/fabric-waste.png",
    copy: "Pre-consumer textile waste becomes the starting point for desirable products.",
  },
  {
    title: "Hands that make",
    label: "Livelihoods",
    image: "/katrankaari/stitching-closeup.png",
    copy: "Women develop stitching and production skills through flexible work models.",
  },
  {
    title: "Useful everyday objects",
    label: "Products",
    image: "/katrankaari/table-runner.png",
    copy: "Bags, pouches, tableware and home accents are designed for real use.",
  },
  {
    title: "Corporate gifting with meaning",
    label: "B2B",
    image: "/katrankaari/editorial-gifting.png",
    copy: "Customised gifting options carry a strong sustainability and livelihood story.",
  },
];
const featuredProducts = [
  { title: "Patchwork totes", image: "/katrankaari/editorial-bag.png" },
  { title: "Table stories", image: "/katrankaari/table-runner.png" },
  { title: "Soft furnishings", image: "/katrankaari/editorial-pillows.png" },
];
const heroCards = [
  { title: "Scarves", image: "/katrankaari/editorial-scarf.png", story: 2 },
  { title: "Totes", image: "/katrankaari/editorial-bag.png", story: 3, featured: true },
  { title: "Textiles", image: "/katrankaari/editorial-textiles.png", story: 0 },
];
let fontLoad: Promise<void> | undefined;

export default function Demo(props: Partial<typeof settings>) {
  const s = { ...settings, ...props };
  const containerRef = useRef<HTMLDivElement>(null);
  const [face, setFace] = useState<string | null>(null);
  const [activeStory, setActiveStory] = useState(0);
  const [entered, setEntered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    if (window.location.hash) window.history.replaceState(null, "", window.location.pathname);
  }, []);
  useEffect(() => {
    if (entered) containerRef.current?.scrollTo({ top: 0, left: 0 });
  }, [entered]);
  useEffect(() => {
    let settled = false;
    const finish = (value: string) => { if (!settled) { settled = true; setFace(value); } };
    // The demo uses the résumé's face. The component itself never fetches a font.
    fontLoad ??= new FontFace("Glyph Portal Jakarta", 'url("https://cdn.21st.dev/assets/mirror/15/153fc85b70298beeb1d61a5f723331649e7f23bb77302a66e61cb3e2fbdb5e79.woff2")', { weight: "400 700" })
      .load().then((font) => { document.fonts.add(font); });
    const timeout = window.setTimeout(() => finish("Arial, sans-serif"), 1600);
    void fontLoad.then(() => finish(family), () => finish("Arial, sans-serif"));
    return () => { settled = true; clearTimeout(timeout); };
  }, []);
  const mainSite = (
    <main data-katrankaari-site id="site" data-katrankaari-menu-state={mobileMenuOpen ? "open" : "closed"}>
      <div data-katrankaari-topbar>
        <span>Free shipping on orders above ₹999</span>
        <span>Textile waste finds a better tomorrow</span>
        <span>Made in Jamnagar, Gujarat →</span>
      </div>
      <nav data-katrankaari-nav aria-label="Main navigation">
        <div data-katrankaari-nav-links>
          <button type="button" onClick={() => setActiveStory(2)}>Shop</button>
          <button type="button" onClick={() => setActiveStory(1)}>Our Story</button>
          <button type="button" onClick={() => setActiveStory(0)}>Impact</button>
        </div>
        <a data-katrankaari-nav-logo href="#site"><strong>KATRANKAARI</strong><small>Re-imagining textile waste</small></a>
        <button data-katrankaari-menu-toggle={mobileMenuOpen ? "open" : "closed"} type="button" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>
          <span />
          <span />
          <span />
        </button>
        <div data-katrankaari-nav-right>
          <button type="button" onClick={() => setActiveStory(3)}>Corporate Gifting</button>
          <span data-katrankaari-nav-divider aria-hidden="true" />
          <button data-katrankaari-icon type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.25" cy="10.25" r="5.7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M14.65 14.65 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button data-katrankaari-icon type="button" aria-label="Account">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="7.2" r="2.85" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6.25 19c.55-3.75 2.75-5.75 5.75-5.75S17.2 15.25 17.75 19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button data-katrankaari-icon type="button" aria-label="Cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.1 9.25h9.8l.55 10.2H6.55l.55-10.2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M9.35 9.25V7.35a2.65 2.65 0 0 1 5.3 0v1.9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="18.2" cy="5.7" r="3.9" fill="#111" />
              <text x="18.2" y="5.7" fill="#fff" fontSize="5.7" fontWeight="800" textAnchor="middle" dominantBaseline="central" letterSpacing="0">0</text>
            </svg>
          </button>
        </div>
      </nav>
      <div data-katrankaari-mobile-menu={mobileMenuOpen ? "open" : "closed"}>
        <div data-katrankaari-mobile-menu-head>
          <a data-katrankaari-mobile-logo href="#site" onClick={() => setMobileMenuOpen(false)}><strong>KATRANKAARI</strong></a>
        </div>
        <div data-katrankaari-mobile-menu-links>
          <button type="button" onClick={() => { setActiveStory(2); setMobileMenuOpen(false); }}>Shop</button>
          <button type="button" onClick={() => { setActiveStory(1); setMobileMenuOpen(false); }}>Our Story</button>
          <button type="button" onClick={() => { setActiveStory(0); setMobileMenuOpen(false); }}>Impact</button>
          <button type="button" onClick={() => { setActiveStory(3); setMobileMenuOpen(false); }}>Corporate Gifting</button>
        </div>
        <div data-katrankaari-mobile-menu-actions>
          <button type="button">Search</button>
          <button type="button">Account</button>
          <button type="button">Cart 0</button>
        </div>
      </div>
      <section data-katrankaari-hero aria-label="Featured KatranKaari products">
        {heroCards.map((card) => (
          <button data-katrankaari-hero-panel={card.featured ? "main" : ""} type="button" onClick={() => setActiveStory(card.story)} key={card.title}>
            <img src={card.image} alt="" />
            <span>{card.title}</span>
          </button>
        ))}
      </section>
      <section data-katrankaari-home-intro>
        <h1>Textile waste, reimagined for everyday life.</h1>
        <button data-katrankaari-shop-all type="button" onClick={() => setActiveStory(2)}>Shop all <span aria-hidden="true">→</span></button>
      </section>
      <section data-katrankaari-purpose>
        <img src="/katrankaari/fabric-closeup.png" alt="" />
        <div data-katrankaari-purpose-copy>
          <p>Our purpose</p>
          <h2>Made from what was left behind.</h2>
          <span>We transform pre-consumer textile waste into beautiful, functional everyday objects, reducing waste, supporting women livelihoods, and giving fabric a second life.</span>
          <button type="button" onClick={() => setActiveStory(1)}>Discover our story →</button>
        </div>
        <div data-katrankaari-purpose-points>
          <span>♧<strong>Textile waste diverted</strong></span>
          <span>◎<strong>Women livelihoods</strong></span>
          <span>↻<strong>A cleaner tomorrow</strong></span>
        </div>
      </section>
      <section data-katrankaari-collections aria-label="Explore our collections">
        <header>
          <span>Explore our collections</span>
          <button type="button" onClick={() => setActiveStory(2)}>Shop all →</button>
        </header>
        <div data-katrankaari-collection-grid>
          <button data-katrankaari-collection-card type="button">
            <img src="/katrankaari/editorial-bag.png" alt="" />
            <span>Bags →</span>
          </button>
          <button data-katrankaari-collection-card type="button">
            <img src="/katrankaari/editorial-pillows.png" alt="" />
            <span>Home →</span>
          </button>
          <button data-katrankaari-collection-card type="button">
            <img src="/katrankaari/editorial-scarf.png" alt="" />
            <span>Accessories →</span>
          </button>
          <button data-katrankaari-collection-card type="button">
            <img src="/katrankaari/editorial-gifting.png" alt="" />
            <span>Corporate Gifting →</span>
          </button>
        </div>
      </section>
      <section data-katrankaari-people>
        <img src="/katrankaari/artisan-maker.png" alt="" />
        <div>
          <p>People behind the change</p>
          <h2>Stronger Together.</h2>
          <span>Every product is crafted by skilled women artisans in Jamnagar, creating livelihoods and stronger communities.</span>
          <button type="button" onClick={() => setActiveStory(1)}>Meet our artisans →</button>
        </div>
        <blockquote>“What was once waste, now supports my future.”<cite>KatranKaari artisan</cite></blockquote>
      </section>
      <div data-katrankaari-green-strip><span>Be a part of a cleaner, brighter tomorrow.</span><button type="button" onClick={() => setActiveStory(2)}>Shop now →</button></div>
      <footer data-katrankaari-footer>
        <div data-katrankaari-footer-bg aria-hidden="true">
          <CrowdCanvas />
        </div>
        <div data-katrankaari-footer-scrim aria-hidden="true" />
        <div>
          <a data-katrankaari-footer-logo href="#site"><strong>KATRANKAARI</strong></a>
          <nav data-katrankaari-socials aria-label="Social links">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4.6" y="4.6" width="14.8" height="14.8" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.7" />
                <circle cx="16.45" cy="7.55" r="1.05" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5.2 9.1h3.05v9.55H5.2V9.1Zm1.54-4.35a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm4.02 4.35h2.92v1.3h.05c.42-.78 1.44-1.6 2.96-1.6 3.16 0 3.75 2.08 3.75 4.78v5.07h-3.05v-4.5c0-1.08-.02-2.46-1.5-2.46-1.51 0-1.74 1.18-1.74 2.38v4.58h-3.05V9.1Z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 8.3a3 3 0 0 0-2.1-2.12C17.05 5.7 12 5.7 12 5.7s-5.05 0-6.9.48A3 3 0 0 0 3 8.3 31.4 31.4 0 0 0 2.5 12 31.4 31.4 0 0 0 3 15.7a3 3 0 0 0 2.1 2.12c1.85.48 6.9.48 6.9.48s5.05 0 6.9-.48A3 3 0 0 0 21 15.7a31.4 31.4 0 0 0 .5-3.7 31.4 31.4 0 0 0-.5-3.7Z" fill="currentColor" />
                <path d="m10.25 15.05 4.6-3.05-4.6-3.05v6.1Z" fill="#111" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.1 8.2V6.85c0-.64.43-.79.73-.79h1.86V3.2L14.13 3.18c-2.84 0-3.48 2.12-3.48 3.48V8.2H8.4v3.23h2.25v9.39h3.45v-9.39h2.58l.34-3.23H14.1Z" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.02 3.25a8.55 8.55 0 0 0-7.28 13.05l-1 4.45 4.53-1.04a8.55 8.55 0 1 0 3.75-16.46Zm0 1.7a6.85 6.85 0 1 1-3.28 12.87l-.28-.15-2.38.55.53-2.32-.18-.3A6.85 6.85 0 0 1 12.02 4.95Zm-2.3 3.4c-.15-.34-.31-.35-.46-.36h-.4c-.14 0-.37.05-.56.26-.2.22-.74.72-.74 1.76s.76 2.05.86 2.19c.11.14 1.48 2.36 3.67 3.21 1.82.72 2.19.58 2.58.54.4-.04 1.28-.52 1.46-1.02.18-.5.18-.93.13-1.02-.05-.09-.2-.14-.42-.25l-1.47-.73c-.22-.11-.38-.16-.54.11-.16.27-.62.73-.76.88-.14.14-.28.16-.51.05-.23-.11-.98-.36-1.86-1.15-.69-.61-1.15-1.37-1.29-1.6-.14-.23-.01-.35.1-.46.1-.1.23-.27.34-.4.11-.14.15-.23.22-.39.07-.16.04-.3-.02-.41l-.67-1.62Z" fill="currentColor" />
              </svg>
            </a>
          </nav>
        </div>
        <div><strong>Shop</strong><span>All Products</span><span>Bags</span><span>Scarves</span><span>Home</span></div>
        <div><strong>Our Story</strong><span>Our Journey</span><span>Our Artisans</span><span>Impact</span></div>
        <div><strong>Help</strong><span>FAQs</span><span>Shipping & Returns</span><span>Size Guide</span><span>Contact Us</span></div>
        <form data-katrankaari-newsletter>
          <strong>Stay in touch</strong>
          <label>
            <span>Join our newsletter</span>
            <input placeholder="Your email address" />
            <button type="button">→</button>
          </label>
        </form>
        <div data-katrankaari-copyright><span>© 2026 KatranKaari. All rights reserved.</span><span>Made in Jamnagar, Gujarat | For a brighter tomorrow</span></div>
      </footer>
    </main>
  );
  return (
    <div ref={containerRef} data-demo-scroll data-slipstream-demo tabIndex={0} role="region" aria-label="KATRANKAARI. Scroll to step inside."
      style={{ width: "100%", height: "100svh", overflowY: "auto", background: "#fff", containerType: "inline-size", fontFamily: face ?? "Arial, sans-serif" }}>
      <style>{`
        [data-slipstream-demo] [data-gp-caption]{inset:calc(var(--gp-word-bottom,50%) + 48px) 24px auto;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;text-align:center;}
        [data-slipstream-demo] [data-gp-hint]{display:block;color:#7c837d;font-size:1.06rem;font-weight:500;letter-spacing:0;text-transform:none;}
        [data-slipstream-demo] [data-gp-enter]{min-height:36px;padding:0 14px;gap:14px;background:#000;border:1px solid #000;border-radius:7px;color:#fff;font-size:12px;font-weight:500;box-shadow:0 1px 2px #00000024;transition:background .18s,box-shadow .18s;}
        [data-slipstream-demo] [data-gp-enter]:hover{background:#1a1a1a;box-shadow:0 3px 8px #00000024;}
        [data-slipstream-demo] [data-gp-enter]:focus-visible{outline:2px solid #000;outline-offset:4px;}
        [data-slipstream-demo] [data-gp-touch-picker]{top:auto;bottom:18px;left:50%;}
        [data-slipstream-demo] [data-gp-select]{border-color:transparent;border-radius:8px;font-size:12px;color:#626964;}
        @container(max-width:450px){[data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 48px);}}
        @container(max-height:479px){[data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 42px);}}
        [data-slipstream-demo] [data-gp-content]{padding:0!important;font-family:inherit;background:#fff!important;color:#111!important;}
        [data-slipstream-demo] section,[data-slipstream-demo] [data-gp-caption]{font-family:inherit;}
        [data-katrankaari-media]{position:absolute;inset:0;overflow:hidden;background:#f7f3ea;}
        [data-katrankaari-media-fallback]{position:absolute;inset:0;background:#f7f3ea;}
        [data-katrankaari-mosaic]{position:absolute;left:50%;top:46%;width:max(1420px,92vw);display:grid;grid-template-columns:repeat(8,1fr);grid-auto-rows:clamp(110px,8.5vw,168px);gap:4px;transform:translate(-50%,-50%) rotate(-1deg);animation:katran-mosaic-drift 18s ease-in-out infinite alternate;}
        [data-katrankaari-tile]{width:100%;height:100%;object-fit:cover;border-radius:2px;filter:saturate(1.2) contrast(1.12) brightness(1.08);}
        [data-katrankaari-tile]:nth-child(5n){object-position:center 35%;}
        [data-katrankaari-media-shade]{position:absolute;inset:0;background:rgba(255,255,255,.02);}
        @keyframes katran-mosaic-drift{0%{transform:translate(-52%,-50%) rotate(-1deg);}100%{transform:translate(-48%,-50%) rotate(-1deg);}}
        [data-katrankaari-site]{min-height:100svh;background:#fff;color:#111;}
        [data-katrankaari-site] > *{transition:transform .42s cubic-bezier(.22,.68,.18,1),filter .42s ease,opacity .42s ease;}
        [data-katrankaari-topbar]{height:28px;display:grid;grid-template-columns:repeat(3,1fr);align-items:center;padding:0 clamp(18px,3.5vw,54px);border-bottom:1px solid rgba(0,0,0,.1);font-size:9px;font-weight:800;letter-spacing:.32em;text-transform:uppercase;color:#555;}
        [data-katrankaari-topbar] span:nth-child(2){text-align:center;}
        [data-katrankaari-topbar] span:nth-child(3){text-align:right;}
        [data-katrankaari-nav]{height:92px;position:sticky;top:0;z-index:5;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:1.5rem;padding:0 clamp(36px,4.5vw,76px);border-bottom:1px solid rgba(0,0,0,.16);background:rgba(255,255,255,.96);backdrop-filter:blur(14px);}
        [data-katrankaari-nav-logo]{display:inline-flex;flex-direction:column;align-items:center;color:#111;text-decoration:none;line-height:1;transform:translateY(2px);}
        [data-katrankaari-nav-logo] strong{border:2px solid #111;padding:.38rem .62rem .32rem;font-size:clamp(1.18rem,1.45vw,1.62rem);font-weight:850;letter-spacing:.08em;}
        [data-katrankaari-nav-logo] small{margin-top:.34rem;font-size:7px;font-weight:850;letter-spacing:.28em;text-transform:uppercase;}
        [data-katrankaari-nav-links],[data-katrankaari-nav-right]{display:flex;align-items:center;gap:clamp(1.8rem,3.2vw,3.2rem);font-size:11px;font-weight:850;letter-spacing:.2em;text-transform:uppercase;}
        [data-katrankaari-nav-right]{justify-content:flex-end;gap:clamp(1.2rem,2.2vw,2.2rem);}
        [data-katrankaari-nav-links] button,[data-katrankaari-nav-right] button{appearance:none;border:0;background:transparent;color:#111;padding:0;font:inherit;cursor:pointer;}
        [data-katrankaari-nav-links] button:hover,[data-katrankaari-nav-right] button:hover{text-decoration:underline;text-underline-offset:5px;}
        [data-katrankaari-nav-divider]{width:1px;height:32px;background:#bcbcbc;}
        [data-katrankaari-icon]{width:30px;height:30px;display:inline-grid;place-items:center;flex:0 0 30px;color:#111;text-decoration:none!important;}
        [data-katrankaari-icon] svg{width:24px;height:24px;display:block;overflow:visible;}
        [data-katrankaari-menu-toggle],[data-katrankaari-mobile-menu]{display:none;}
        [data-katrankaari-hero]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));min-height:clamp(520px,68svh,760px);overflow:hidden;border-bottom:1px solid #111;background:#111;}
        [data-katrankaari-hero-panel]{position:relative;appearance:none;border:0;border-right:1px solid #fff;background:#222;padding:0;overflow:hidden;cursor:pointer;text-align:left;}
        [data-katrankaari-hero-panel]:last-child{border-right:0;}
        [data-katrankaari-hero-panel] img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.96) contrast(1.03);transition:transform .65s ease,filter .25s ease;}
        [data-katrankaari-hero-panel="main"] img{object-position:center top;}
        [data-katrankaari-hero-panel]:hover img{transform:scale(1.045);filter:saturate(1.08) contrast(1.06);}
        [data-katrankaari-hero-panel] span{position:absolute;left:18px;bottom:16px;background:#fff;border:1px solid #111;padding:.48rem .62rem;color:#111;font-size:10px;font-weight:850;letter-spacing:.18em;text-transform:uppercase;opacity:0;transform:translateY(8px);transition:opacity .2s ease,transform .2s ease;}
        [data-katrankaari-hero-panel]:hover span{opacity:1;transform:translateY(0);}
        [data-katrankaari-home-intro]{padding:22px clamp(20px,4vw,72px) 28px;text-align:center;border-bottom:1px solid rgba(0,0,0,.12);}
        [data-katrankaari-home-intro] h1{margin:0;font-family:Georgia,serif;font-size:clamp(1.45rem,2.15vw,2.35rem);font-weight:400;line-height:1.2;letter-spacing:0;}
        [data-katrankaari-shop-all]{margin-top:16px;min-height:34px;padding:0 1.4rem;border:1px solid #111;background:#fff;color:#111;font-size:10px;font-weight:850;letter-spacing:.18em;text-transform:uppercase;cursor:pointer;}
        [data-katrankaari-shop-all]:hover{background:#111;color:#fff;}
        [data-katrankaari-purpose]{display:grid;grid-template-columns:minmax(0,1.06fr) minmax(340px,.72fr) minmax(220px,.42fr);border-bottom:1px solid #111;background:#fff;}
        [data-katrankaari-purpose]>img{width:100%;height:100%;min-height:330px;object-fit:cover;}
        [data-katrankaari-purpose-copy]{padding:clamp(32px,4vw,58px);display:flex;flex-direction:column;justify-content:center;border-right:1px solid rgba(0,0,0,.16);}
        [data-katrankaari-purpose-copy] p,[data-katrankaari-people] p{margin:0 0 .8rem;color:#777;font-size:10px;font-weight:850;letter-spacing:.22em;text-transform:uppercase;}
        [data-katrankaari-purpose-copy] h2,[data-katrankaari-people] h2{margin:0;font-family:Georgia,serif;font-size:clamp(2rem,3.5vw,4.2rem);font-weight:400;line-height:1.02;letter-spacing:0;}
        [data-katrankaari-purpose-copy] span,[data-katrankaari-people] div>span{display:block;max-width:46ch;margin:1.2rem 0 1.4rem;color:#58534d;font-size:.95rem;line-height:1.65;}
        [data-katrankaari-purpose-copy] button,[data-katrankaari-people] button{width:max-content;min-height:36px;border:1px solid #111;background:#fff;padding:0 1rem;font-size:10px;font-weight:850;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;}
        [data-katrankaari-purpose-copy] button:hover,[data-katrankaari-people] button:hover{background:#111;color:#fff;}
        [data-katrankaari-purpose-points]{display:grid;align-content:center;gap:28px;padding:clamp(26px,3vw,44px);}
        [data-katrankaari-purpose-points] span{display:grid;grid-template-columns:34px 1fr;gap:14px;align-items:center;font-size:28px;}
        [data-katrankaari-purpose-points] strong{font-size:10px;font-weight:850;line-height:1.35;letter-spacing:.18em;text-transform:uppercase;}
        [data-katrankaari-collections]{padding:28px clamp(20px,4vw,72px) 36px;border-bottom:1px solid #111;}
        [data-katrankaari-collections] header{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;font-size:10px;font-weight:850;letter-spacing:.22em;text-transform:uppercase;}
        [data-katrankaari-collections] header button{appearance:none;border:0;background:transparent;font:inherit;cursor:pointer;}
        [data-katrankaari-collection-grid]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;}
        [data-katrankaari-collection-card]{position:relative;appearance:none;border:0;background:#222;padding:0;min-height:clamp(210px,20vw,320px);overflow:hidden;cursor:pointer;text-align:left;}
        [data-katrankaari-collection-card] img{width:100%;height:100%;object-fit:cover;display:block;filter:brightness(.86);transition:transform .55s ease,filter .25s ease;}
        [data-katrankaari-collection-card]:hover img{transform:scale(1.045);filter:brightness(.96);}
        [data-katrankaari-collection-card] span{position:absolute;left:22px;bottom:18px;max-width:10ch;color:#fff;font-family:Georgia,serif;font-size:clamp(1.55rem,2.2vw,2.35rem);line-height:.98;text-shadow:0 2px 16px rgba(0,0,0,.38);}
        [data-katrankaari-people]{display:grid;grid-template-columns:minmax(0,1fr) minmax(320px,.74fr) minmax(260px,.52fr);border-bottom:1px solid #111;background:#f7f4ef;}
        [data-katrankaari-people]>img{width:100%;height:100%;min-height:310px;object-fit:cover;object-position:center 45%;filter:grayscale(1) contrast(1.12) brightness(.94);}
        [data-katrankaari-people]>div{padding:clamp(32px,4vw,58px);display:flex;flex-direction:column;justify-content:center;border-right:1px solid rgba(0,0,0,.14);}
        [data-katrankaari-people] blockquote{margin:0;padding:clamp(32px,4vw,58px);display:flex;flex-direction:column;justify-content:center;font-family:Georgia,serif;font-size:clamp(1.4rem,2.2vw,2.5rem);font-style:italic;line-height:1.22;}
        [data-katrankaari-people] cite{margin-top:2rem;font:850 10px/1.3 Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#666;}
        [data-katrankaari-green-strip]{min-height:48px;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:0 clamp(20px,4vw,72px);background:#364631;color:#fff;font-size:10px;font-weight:850;letter-spacing:.24em;text-transform:uppercase;}
        [data-katrankaari-green-strip] button{appearance:none;border:0;background:transparent;color:#fff;font:inherit;cursor:pointer;}
        [data-katrankaari-footer]{position:relative;display:grid;grid-template-columns:1.2fr .7fr .7fr .7fr 1.6fr;gap:clamp(22px,3vw,52px);overflow:hidden;padding:clamp(64px,7vw,104px) clamp(20px,4vw,72px) 28px;background:#050505;color:#fff;border-bottom:1px solid rgba(255,255,255,.26);}
        [data-katrankaari-footer-bg]{position:absolute;inset:0;z-index:0;display:block!important;pointer-events:none;background:#fff;}
        [data-katrankaari-footer-bg] canvas{opacity:.26;filter:grayscale(1) contrast(1.8) brightness(.55);transform:scale(1.08);transform-origin:center bottom;}
        [data-katrankaari-footer-scrim]{position:absolute;inset:0;z-index:1;display:block!important;background:rgba(0,0,0,.82);pointer-events:none;}
        [data-katrankaari-footer] > div:not([data-katrankaari-footer-bg]):not([data-katrankaari-footer-scrim]),[data-katrankaari-newsletter]{position:relative;z-index:2;}
        [data-katrankaari-footer-logo]{display:inline-flex;width:max-content;align-items:center;border:2px solid #111;background:#fff;padding:.48rem .75rem .42rem;color:#111;text-decoration:none;line-height:1;}
        [data-katrankaari-footer-logo] strong{color:#111!important;font-size:1.05rem;font-weight:900;letter-spacing:.1em;}
        [data-katrankaari-socials]{display:flex;align-items:center;gap:14px;margin-top:1.4rem;}
        [data-katrankaari-socials] a{width:25px;height:25px;display:inline-grid;place-items:center;color:#fff;text-decoration:none;}
        [data-katrankaari-socials] svg{width:20px;height:20px;display:block;}
        [data-katrankaari-footer] > div:not([data-katrankaari-footer-bg]):not([data-katrankaari-footer-scrim]):not([data-katrankaari-copyright]),[data-katrankaari-newsletter]{display:flex;flex-direction:column;gap:.5rem;color:rgba(255,255,255,.78);font-size:.86rem;line-height:1.45;}
        [data-katrankaari-footer] > div strong,[data-katrankaari-newsletter] strong{margin-bottom:.32rem;color:#fff;font-size:10px;font-weight:850;letter-spacing:.24em;text-transform:uppercase;}
        [data-katrankaari-newsletter] label span{display:block;margin-bottom:.6rem;}
        [data-katrankaari-newsletter] label{display:block;}
        [data-katrankaari-newsletter] input{width:calc(100% - 42px);height:42px;border:1px solid rgba(255,255,255,.7);background:rgba(0,0,0,.22);color:#fff;padding:0 .75rem;font:inherit;}
        [data-katrankaari-newsletter] input::placeholder{color:rgba(255,255,255,.68);}
        [data-katrankaari-newsletter] button{width:42px;height:42px;border:1px solid rgba(255,255,255,.7);border-left:0;background:#fff;color:#111;vertical-align:top;cursor:pointer;}
        [data-katrankaari-copyright]{grid-column:1/-1;position:relative;z-index:2;display:flex!important;justify-content:space-between;gap:1rem;margin:28px calc(clamp(20px,4vw,72px) * -1) -28px;padding:16px clamp(20px,4vw,72px);border-top:1px solid rgba(255,255,255,.22);font-size:9px;font-weight:750;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.84);}
        @container(max-width:850px){
          [data-slipstream-demo] [data-gp-caption]{top:calc(var(--gp-word-bottom,50%) + 38px);gap:14px;}
          [data-slipstream-demo] [data-gp-hint]{font-size:.96rem;}
          [data-katrankaari-topbar]{display:none;}
          [data-katrankaari-nav]{height:74px;grid-template-columns:auto 1fr auto;justify-items:stretch;gap:0;padding:0 14px;}
          [data-katrankaari-nav-logo]{grid-column:1;justify-self:start;transform:none;}
          [data-katrankaari-nav-logo] strong{font-size:1rem;padding:.34rem .5rem .3rem;}
          [data-katrankaari-nav-logo] small{display:none;}
          [data-katrankaari-nav-links],[data-katrankaari-nav-right]{display:none;}
          [data-katrankaari-site][data-katrankaari-menu-state="open"] [data-katrankaari-nav]{z-index:80;background:transparent;border-bottom-color:transparent;backdrop-filter:none;pointer-events:none;}
          [data-katrankaari-site][data-katrankaari-menu-state="open"] > :not([data-katrankaari-nav]):not([data-katrankaari-mobile-menu]){transform:translateX(-27vw);filter:brightness(.42);}
          [data-katrankaari-menu-toggle]{grid-column:3;justify-self:end;position:relative;z-index:72;width:58px;height:58px;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;appearance:none;border:0;background:transparent;color:#111;padding:0;cursor:pointer;}
          [data-katrankaari-menu-toggle] span{display:block;height:3px;background:#111;border-radius:99px;transition:width .24s ease,transform .32s cubic-bezier(.22,.68,.18,1),opacity .2s ease,background .2s ease;}
          [data-katrankaari-menu-toggle] span:nth-child(1){width:24px;margin-left:8px;}
          [data-katrankaari-menu-toggle] span:nth-child(2){width:32px;}
          [data-katrankaari-menu-toggle] span:nth-child(3){width:42px;}
          [data-katrankaari-menu-toggle="open"]{position:fixed;right:18px;top:10px;z-index:82;color:#fff;pointer-events:auto;}
          [data-katrankaari-menu-toggle="open"] span{background:#fff;margin-left:0!important;}
          [data-katrankaari-menu-toggle="open"] span:nth-child(1){width:40px;transform:translateY(11px) rotate(45deg);}
          [data-katrankaari-menu-toggle="open"] span:nth-child(2){opacity:0;transform:scaleX(.2);}
          [data-katrankaari-menu-toggle="open"] span:nth-child(3){width:40px;transform:translateY(-11px) rotate(-45deg);}
          [data-katrankaari-mobile-menu]{position:fixed;inset:0 0 0 auto;z-index:60;width:73vw;max-width:420px;display:grid;grid-template-rows:auto 1fr auto;gap:28px;background:#050505;color:#fff;padding:26px 28px 28px;transform:translateX(100%);transition:transform .42s cubic-bezier(.22,.68,.18,1);pointer-events:none;box-shadow:-28px 0 46px rgba(0,0,0,.38);}
          [data-katrankaari-mobile-menu="open"]{transform:translateX(0);pointer-events:auto;}
          [data-katrankaari-mobile-menu-head]{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;}
          [data-katrankaari-mobile-logo]{display:inline-flex;background:#fff;border:2px solid #111;color:#111;text-decoration:none;line-height:1;padding:.5rem .66rem .42rem;}
          [data-katrankaari-mobile-logo] strong{font-size:1.08rem;font-weight:900;letter-spacing:.09em;}
          [data-katrankaari-mobile-menu-links]{display:flex;flex-direction:column;justify-content:center;gap:24px;padding-bottom:5svh;}
          [data-katrankaari-mobile-menu-links] button{appearance:none;border:0;background:transparent;color:#eee;padding:0;text-align:left;font-family:Georgia,serif;font-size:clamp(2.45rem,12.8vw,5rem);font-weight:400;line-height:1;letter-spacing:0;cursor:pointer;}
          [data-katrankaari-mobile-menu-links] button:first-child{color:#fff;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:8px;}
          [data-katrankaari-mobile-menu-links] button::after{content:"";display:block;width:min(55vw,230px);height:1px;margin-top:8px;background:rgba(255,255,255,.26);}
          [data-katrankaari-mobile-menu-actions]{display:flex;flex-wrap:wrap;gap:10px;border-top:1px solid rgba(255,255,255,.28);padding-top:18px;}
          [data-katrankaari-mobile-menu-actions] button{appearance:none;border:1px solid rgba(255,255,255,.55);background:transparent;color:#fff;min-height:38px;padding:0 14px;font-size:10px;font-weight:850;letter-spacing:.18em;text-transform:uppercase;}
          [data-katrankaari-hero]{display:flex;min-height:0;height:min(520px,58svh);overflow-x:auto;scroll-snap-type:x mandatory;border-bottom:1px solid #111;}
          [data-katrankaari-hero-panel]{flex:0 0 78vw;height:100%;border-right:1px solid #fff;scroll-snap-align:start;}
          [data-katrankaari-hero-panel] span{opacity:1;transform:none;font-size:9px;}
          [data-katrankaari-home-intro]{padding:20px 18px 24px;}
          [data-katrankaari-home-intro] h1{font-size:clamp(1.45rem,7vw,2.2rem);}
          [data-katrankaari-purpose],[data-katrankaari-people],[data-katrankaari-footer]{grid-template-columns:1fr;}
          [data-katrankaari-purpose]>img,[data-katrankaari-people]>img{min-height:260px;max-height:360px;}
          [data-katrankaari-purpose-copy],[data-katrankaari-people]>div{border-right:0;padding:28px 20px;}
          [data-katrankaari-purpose-points]{grid-template-columns:1fr;gap:16px;padding:22px 20px;border-top:1px solid rgba(0,0,0,.14);}
          [data-katrankaari-collections]{padding:24px 16px 30px;}
          [data-katrankaari-collections] header{font-size:8px;letter-spacing:.18em;}
          [data-katrankaari-collection-grid]{display:flex;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;}
          [data-katrankaari-collection-card]{flex:0 0 74vw;min-height:260px;scroll-snap-align:start;}
          [data-katrankaari-collection-card] span{font-size:clamp(1.45rem,8vw,2.1rem);}
          [data-katrankaari-people] blockquote{padding:28px 20px;font-size:clamp(1.35rem,7vw,2rem);}
          [data-katrankaari-green-strip],[data-katrankaari-copyright]{align-items:flex-start;flex-direction:column;padding-block:16px;font-size:8px;letter-spacing:.18em;}
          [data-katrankaari-footer]{gap:24px;padding:44px 20px 0;}
          [data-katrankaari-footer-bg] canvas{opacity:.22;transform:scale(1.22);filter:grayscale(1) contrast(1.75) brightness(.52);}
          [data-katrankaari-footer-logo] strong{font-size:.98rem;}
          [data-katrankaari-socials]{gap:16px;}
          [data-katrankaari-copyright]{margin:10px -20px 0;padding:16px 20px;}
          [data-katrankaari-newsletter] input{width:calc(100% - 42px);}
        }
      `}</style>
      {entered ? mainSite : face ? <GlyphPortal word={s.word} fontFamily={face} fontWeight={700} style={{ fontFamily: face }} scrollLength={s.scrollLength} interactive={s.interactive} annotations={s.annotations} enterLabel="Step inside" onProgress={(progress) => {
        if (progress >= 0.34) setEntered(true);
      }} background={
        <div data-katrankaari-media>
          <div data-katrankaari-media-fallback />
          <div data-katrankaari-mosaic>
            {mosaicImages.map((src, index) => (
              <img data-katrankaari-tile key={`${src}-${index}`} src={src} alt="" />
            ))}
          </div>
          <div data-katrankaari-media-shade />
        </div>
      }>
        {mainSite}
      </GlyphPortal> : <div role="status" aria-label="Loading" style={{ height: "100%" }} />}
    </div>
  );
}
