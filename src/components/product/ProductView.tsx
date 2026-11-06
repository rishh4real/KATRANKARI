"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { Button, buttonClassName } from "@/components/ui/Button";
import type { Product } from "@/lib/commerce/types";
import { ProductPrice } from "./ProductPrice";

export function ProductView({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const variant = product.variants.find((item) => item.id === variantId) ?? product.variants[0];
  const canAdd = Boolean(variant?.availableForSale && variant.quantityAvailable > 0);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div><p className="eyebrow">Demo product</p><h1 className="font-display text-4xl leading-tight md:text-5xl">{product.title}</h1></div>
        <ProductPrice product={product} className="text-lg font-semibold" />
      </div>
      <p className="mt-6 text-base leading-7 text-muted">{product.description}</p>
      {product.variants.length > 1 ? (
        <label className="mt-7 block"><span className="mb-2 block text-sm font-semibold">Variant</span><select className="select-field w-full" value={variantId} onChange={(event) => setVariantId(event.target.value)}>{product.variants.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
      ) : null}
      {product.availability === "enquiry-only" ? (
        <Link className={`${buttonClassName("primary")} mt-7 w-full`} href="/corporate-gifting">Make a corporate enquiry</Link>
      ) : (
        <div className="mt-7 grid grid-cols-[7rem_1fr] gap-3">
          <label><span className="sr-only">Quantity</span><input className="min-h-11 w-full rounded-input border border-border px-3" type="number" min={1} max={variant?.quantityAvailable || 1} value={quantity} onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))} /></label>
          <Button disabled={!canAdd} onClick={() => addItem(variant.id, quantity)}>{canAdd ? "Add to demo cart" : "Currently unavailable"}</Button>
        </div>
      )}
      <div className="mt-8 border-t border-border pt-7">
        <h2 className="font-display text-2xl">Product details</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-muted">{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
      </div>
      <section id="reviews" className="mt-8 rounded-card border border-border bg-surface p-5">
        <p className="eyebrow">Customer feedback</p>
        <h2 className="font-display text-2xl">Reviews & ratings</h2>
        <div className="mt-4 grid grid-cols-[auto_1fr] gap-5 border-t border-border pt-4">
          <div aria-label="No rating available" className="font-display text-4xl text-muted">—<span className="text-base"> / 5</span></div>
          <p className="text-sm leading-6 text-muted">No verified customer reviews are connected yet. Ratings and reviews will appear here only after an approved Shopify-compatible review source is configured.</p>
        </div>
      </section>
    </div>
  );
}
