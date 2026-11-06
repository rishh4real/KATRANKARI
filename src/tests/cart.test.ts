import { describe, expect, it } from "vitest";
import { addLines, createEmptyCart, removeLines, updateLines } from "@/lib/commerce/cart";
import { mockProducts } from "@/data/mock-products";

const variant = mockProducts[0].variants[0];

describe("mock cart", () => {
  it("starts empty", () => {
    const cart = createEmptyCart();
    expect(cart.lines).toEqual([]);
    expect(cart.totalQuantity).toBe(0);
    expect(cart.subtotalAmount.amount).toBe(0);
  });

  it("adds, updates and totals cart lines", () => {
    const added = addLines(createEmptyCart(), [{ merchandiseId: variant.id, quantity: 2 }]);
    expect(added.totalQuantity).toBe(2);
    expect(added.subtotalAmount.amount).toBe(variant.price.amount * 2);
    const updated = updateLines(added, [{ id: added.lines[0].id, quantity: 3 }]);
    expect(updated.totalQuantity).toBe(3);
    expect(updated.subtotalAmount.amount).toBe(variant.price.amount * 3);
    expect(removeLines(updated, [updated.lines[0].id]).lines).toEqual([]);
  });

  it("rejects unavailable merchandise", () => {
    const unavailable = mockProducts.find((product) => product.availability === "out-of-stock")!.variants[0];
    expect(addLines(createEmptyCart(), [{ merchandiseId: unavailable.id, quantity: 1 }]).lines).toEqual([]);
  });
});
