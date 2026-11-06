import { mockProducts } from "@/data/mock-products";
import type { Cart, CartLine, CartLineInput, CartLineUpdateInput, Money } from "./types";

const zeroMoney = (): Money => ({ amount: 0, currencyCode: "INR" });

export function calculateCart(lines: CartLine[], id = "mock-cart"): Cart {
  const totalQuantity = lines.reduce((total, line) => total + line.quantity, 0);
  const amount = lines.reduce((total, line) => total + line.variant.price.amount * line.quantity, 0);
  return { id, lines, totalQuantity, subtotalAmount: { ...zeroMoney(), amount }, checkoutUrl: null };
}

export function createEmptyCart(id = "mock-cart"): Cart {
  return calculateCart([], id);
}

function resolveVariant(merchandiseId: string) {
  for (const product of mockProducts) {
    const variant = product.variants.find((item) => item.id === merchandiseId);
    if (variant) return { product, variant };
  }
  return null;
}

export function addLines(cart: Cart, inputs: CartLineInput[]): Cart {
  const lines = [...cart.lines];
  for (const input of inputs) {
    const resolved = resolveVariant(input.merchandiseId);
    if (!resolved || !resolved.variant.availableForSale || input.quantity < 1) continue;
    const existing = lines.find((line) => line.merchandiseId === input.merchandiseId);
    const nextQuantity = Math.min((existing?.quantity ?? 0) + input.quantity, resolved.variant.quantityAvailable);
    if (existing) {
      existing.quantity = nextQuantity;
    } else {
      lines.push({
        id: `mock-line-${resolved.variant.id.split("/").pop()}`,
        merchandiseId: resolved.variant.id,
        quantity: nextQuantity,
        product: { handle: resolved.product.handle, title: resolved.product.title, images: resolved.product.images },
        variant: {
          id: resolved.variant.id,
          title: resolved.variant.title,
          price: resolved.variant.price,
          quantityAvailable: resolved.variant.quantityAvailable,
        },
      });
    }
  }
  return calculateCart(lines, cart.id);
}

export function updateLines(cart: Cart, inputs: CartLineUpdateInput[]): Cart {
  const quantities = new Map(inputs.map((input) => [input.id, input.quantity]));
  const lines = cart.lines
    .map((line) => {
      const requested = quantities.get(line.id);
      if (requested === undefined) return line;
      return { ...line, quantity: Math.min(Math.max(0, requested), line.variant.quantityAvailable) };
    })
    .filter((line) => line.quantity > 0);
  return calculateCart(lines, cart.id);
}

export function removeLines(cart: Cart, lineIds: string[]): Cart {
  const ids = new Set(lineIds);
  return calculateCart(cart.lines.filter((line) => !ids.has(line.id)), cart.id);
}
