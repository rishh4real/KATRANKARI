"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import type { ProductSortKey } from "@/lib/commerce/types";

export function ProductFilters({ types, query, productType, sort, onQuery, onType, onSort }: {
  types: string[];
  query: string;
  productType: string;
  sort: ProductSortKey;
  onQuery: (value: string) => void;
  onType: (value: string) => void;
  onSort: (value: ProductSortKey) => void;
}) {
  return (
    <div id="catalog-controls" className="mb-8 grid gap-3 rounded-card border border-border bg-surface p-4 md:grid-cols-[1fr_auto_auto]">
      <label className="relative">
        <span className="sr-only">Search products</span>
        <Search className="pointer-events-none absolute left-3 top-3 text-muted" aria-hidden="true" size={19} />
        <Input value={query} onChange={(event) => onQuery(event.target.value)} className="bg-background pl-10" placeholder="Search demo products" />
      </label>
      <label>
        <span className="sr-only">Filter by category</span>
        <select className="select-field" value={productType} onChange={(event) => onType(event.target.value)}>
          <option value="">All categories</option>
          {types.map((type) => <option value={type} key={type}>{type}</option>)}
        </select>
      </label>
      <label>
        <span className="sr-only">Sort products</span>
        <select className="select-field" value={sort} onChange={(event) => onSort(event.target.value as ProductSortKey)}>
          <option value="featured">Featured</option>
          <option value="title-asc">Name: A–Z</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
        </select>
      </label>
    </div>
  );
}
