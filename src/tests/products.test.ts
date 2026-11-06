import { describe, expect, it } from "vitest";
import { mockProducts } from "@/data/mock-products";
import { filterAndSortProducts } from "@/lib/products";

describe("catalog filtering and sorting", () => {
  it("filters by product type and text", () => {
    const byType = filterAndSortProducts(mockProducts, { productType: "Home and Living" });
    expect(byType.every((product) => product.productType === "Home and Living")).toBe(true);
    expect(filterAndSortProducts(mockProducts, { query: "drawstring" })[0]?.handle).toBe("drawstring-utility-pouch");
  });

  it("sorts prices in both directions", () => {
    const ascending = filterAndSortProducts(mockProducts, { sort: "price-asc" });
    const descending = filterAndSortProducts(mockProducts, { sort: "price-desc" });
    expect(ascending[0]?.priceRange.minVariantPrice.amount).toBeLessThanOrEqual(ascending.at(-1)?.priceRange.minVariantPrice.amount ?? 0);
    expect(descending[0]?.priceRange.minVariantPrice.amount).toBeGreaterThanOrEqual(descending.at(-1)?.priceRange.minVariantPrice.amount ?? 0);
  });
});
