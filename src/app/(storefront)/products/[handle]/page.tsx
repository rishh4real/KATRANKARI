import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductView } from "@/components/product/ProductView";
import { ProductStructuredData } from "@/components/product/ProductStructuredData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mockCommerceProvider } from "@/lib/commerce/mock-provider";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ handle: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params;
  const product = await mockCommerceProvider.getProduct(handle);
  return product ? createMetadata(product.title, product.description, `/products/${handle}`) : createMetadata("Product not found", "The requested product does not exist.", `/products/${handle}`);
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = await mockCommerceProvider.getProduct(handle);
  if (!product) notFound();
  const { products } = await mockCommerceProvider.getProducts({ productType: product.productType });
  const related = products.filter((item) => item.id !== product.id).slice(0, 4);
  return (
    <Container className="page-section">
      <ProductStructuredData product={product} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: product.title }]} />
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr]"><ProductGallery images={product.images} /><div className="lg:sticky lg:top-28 lg:h-fit"><ProductView product={product} /></div></div>
      {related.length ? <section className="mt-20 border-t border-border pt-16"><SectionHeading title="Related demo products" /><ProductGrid products={related} /></section> : null}
    </Container>
  );
}
