import { formatMoney } from "@/lib/format";
import type { Cart } from "@/lib/commerce/types";

export function CartSummary({ cart }: { cart: Cart }) {
  return (
    <aside className="h-fit rounded-card border border-border bg-surface p-6">
      <h2 className="font-display text-2xl">Summary</h2>
      <dl className="mt-6 flex justify-between border-b border-border pb-5"><dt>Subtotal</dt><dd className="font-semibold">{formatMoney(cart.subtotalAmount)}</dd></dl>
      <p className="mt-5 text-sm leading-6 text-muted">Taxes, shipping and checkout are unavailable in mock mode. Shopify-hosted checkout will be connected in a later phase.</p>
      <button type="button" disabled className="mt-6 min-h-11 w-full rounded-button bg-foreground px-5 text-sm font-semibold text-background opacity-50">Checkout unavailable in demo</button>
    </aside>
  );
}
