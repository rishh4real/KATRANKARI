import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ShopCatalog } from "@/components/product/ShopCatalog";
import { mockCommerceProvider } from "@/lib/commerce/mock-provider";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Shop", "Browse KatranKaari development product fixtures by category.", "/shop");

export default async function ShopPage() {
  const [{ products }, collections] = await Promise.all([mockCommerceProvider.getProducts(), mockCommerceProvider.getCollections()]);
  return (
    <Container className="page-section">
      <header className="max-w-3xl"><p className="eyebrow">Mock catalogue</p><h1 className="font-display text-5xl md:text-6xl">Shop</h1><p className="mt-5 leading-7 text-muted">Products, pricing, availability and categories on this page are development fixtures. They will be replaced by Shopify catalogue data.</p></header>
      <nav aria-label="Product collections" className="my-8 flex gap-2 overflow-x-auto pb-2">{collections.map((collection) => <Link className="min-h-11 shrink-0 rounded-full border border-border px-4 py-2.5 text-sm font-semibold hover:border-foreground" href={`/collections/${collection.handle}`} key={collection.id}>{collection.title}</Link>)}</nav>
      <ShopCatalog products={products} />
    </Container>
  );
}
