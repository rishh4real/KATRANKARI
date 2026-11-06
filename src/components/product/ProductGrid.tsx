import type { Product } from "@/lib/commerce/types";
import { EmptyState } from "@/components/ui/EmptyState";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  if (!products.length) return <EmptyState title="No products found" copy="Try a different category, search phrase or sorting option." />;
  return <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}
