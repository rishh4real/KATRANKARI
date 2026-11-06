"use client";

import { useMemo, useState } from "react";
import type { Product, ProductSortKey } from "@/lib/commerce/types";
import { filterAndSortProducts } from "@/lib/products";
import { ProductFilters } from "./ProductFilters";
import { ProductGrid } from "./ProductGrid";

export function ShopCatalog({ products, collection }: { products: Product[]; collection?: string }) {
  const [query, setQuery] = useState("");
  const [productType, setProductType] = useState("");
  const [sort, setSort] = useState<ProductSortKey>("featured");
  const types = useMemo(() => [...new Set(products.map((product) => product.productType))].sort(), [products]);
  const visible = useMemo(() => filterAndSortProducts(products, { collection, query, productType, sort }), [products, collection, query, productType, sort]);
  return (
    <>
      <ProductFilters types={types} query={query} productType={productType} sort={sort} onQuery={setQuery} onType={setProductType} onSort={setSort} />
      <p className="mb-5 text-sm text-muted" aria-live="polite">{visible.length} demo {visible.length === 1 ? "product" : "products"}</p>
      <ProductGrid products={visible} />
    </>
  );
}
