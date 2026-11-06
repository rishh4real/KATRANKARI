import type { Product, ProductQueryOptions } from "@/lib/commerce/types";

export function filterAndSortProducts(products: Product[], options: ProductQueryOptions = {}): Product[] {
  const query = options.query?.trim().toLocaleLowerCase();
  const filtered = products.filter((product) => {
    const matchesCollection = !options.collection || product.collectionHandles.includes(options.collection);
    const matchesType = !options.productType || product.productType === options.productType;
    const matchesQuery = !query || `${product.title} ${product.description} ${product.productType}`.toLocaleLowerCase().includes(query);
    return matchesCollection && matchesType && matchesQuery;
  });

  return [...filtered].sort((a, b) => {
    switch (options.sort) {
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "price-asc":
        return a.priceRange.minVariantPrice.amount - b.priceRange.minVariantPrice.amount;
      case "price-desc":
        return b.priceRange.minVariantPrice.amount - a.priceRange.minVariantPrice.amount;
      default:
        return Number(b.featured) - Number(a.featured);
    }
  });
}
