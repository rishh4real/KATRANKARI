import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ShopCatalog } from "@/components/product/ShopCatalog";
import { mockCommerceProvider } from "@/lib/commerce/mock-provider";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ handle: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const collection = await mockCommerceProvider.getCollection(handle);
  return collection ? createMetadata(collection.title, collection.description, `/collections/${handle}`) : createMetadata("Collection not found", "The requested collection does not exist.", `/collections/${handle}`);
}

export default async function CollectionPage({ params }: Props) {
  const { handle } = await params;
  const [collection, result] = await Promise.all([mockCommerceProvider.getCollection(handle), mockCommerceProvider.getProducts({ collection: handle })]);
  if (!collection) notFound();
  return (
    <Container className="page-section">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: collection.title }]} />
      <header className="max-w-3xl"><Badge>Provisional collection</Badge><h1 className="mt-4 font-display text-5xl md:text-6xl">{collection.title}</h1><p className="mt-5 leading-7 text-muted">{collection.description}</p></header>
      <div className="mt-10"><ShopCatalog products={result.products} collection={handle} /></div>
    </Container>
  );
}
