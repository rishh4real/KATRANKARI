import type { Product } from "@/lib/commerce/types";

export function ProductStructuredData({ product }: { product: Product }) {
  // Demo fixtures must not publish price, inventory or availability as real product data.
  if (product.isDemo) return null;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.images.map((image) => image.url),
    description: product.description,
    sku: product.variants[0]?.sku,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />;
}
