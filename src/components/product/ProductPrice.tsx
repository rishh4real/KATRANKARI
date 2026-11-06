import { formatMoney } from "@/lib/format";
import type { Product } from "@/lib/commerce/types";

export function ProductPrice({ product, className = "" }: { product: Product; className?: string }) {
  if (product.availability === "enquiry-only") return <span className={className}>Price by enquiry</span>;
  const { minVariantPrice, maxVariantPrice } = product.priceRange;
  return <span className={className}>{minVariantPrice.amount !== maxVariantPrice.amount ? "From " : ""}{formatMoney(minVariantPrice)}</span>;
}
