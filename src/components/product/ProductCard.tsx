import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/commerce/types";
import { Badge } from "@/components/ui/Badge";
import { ProductPrice } from "./ProductPrice";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  return (
    <article className="group">
      <Link href={`/products/${product.handle}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
        <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-surface">
          <Image className="object-cover transition duration-slow group-hover:scale-[1.025] motion-reduce:transition-none" src={image.url} alt={image.altText} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
          <Badge className="absolute left-3 top-3 bg-background/90">Demo product</Badge>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div><h3 className="font-semibold group-hover:underline">{product.title}</h3><p className="mt-1 text-sm text-muted">{product.productType}</p></div>
          <ProductPrice product={product} className="shrink-0 text-sm font-medium" />
        </div>
      </Link>
    </article>
  );
}
