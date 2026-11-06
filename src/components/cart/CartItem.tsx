"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { formatMoney } from "@/lib/format";
import type { CartLine } from "@/lib/commerce/types";

export function CartItem({ line }: { line: CartLine }) {
  const { updateItem, removeItem } = useCart();
  const image = line.product.images[0];
  return (
    <article className="grid grid-cols-[6rem_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[7rem_1fr_auto]">
      <Link href={`/products/${line.product.handle}`} className="relative aspect-[4/5] overflow-hidden rounded-card bg-surface"><Image src={image.url} alt={image.altText} fill className="object-cover" sizes="112px" /></Link>
      <div><Link className="font-semibold hover:underline" href={`/products/${line.product.handle}`}>{line.product.title}</Link><p className="mt-1 text-sm text-muted">{line.variant.title}</p><p className="mt-2 text-sm">{formatMoney(line.variant.price)}</p></div>
      <div className="col-start-2 flex items-center gap-3 sm:col-auto sm:flex-col sm:items-end">
        <label><span className="sr-only">Quantity for {line.product.title}</span><input className="h-10 w-20 rounded-input border border-border px-2" type="number" min={1} max={line.variant.quantityAvailable} value={line.quantity} onChange={(event) => updateItem(line.id, Number(event.target.value))} /></label>
        <button className="text-sm text-muted underline underline-offset-4 hover:text-foreground" type="button" onClick={() => removeItem(line.id)}>Remove</button>
      </div>
    </article>
  );
}
