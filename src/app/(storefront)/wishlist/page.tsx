import Link from "next/link";
import { Heart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { buttonClassName } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Wishlist", "Wishlist integration status for the KatranKaari storefront.", "/wishlist");

export default function WishlistPage() {
  return (
    <Container className="page-section max-w-4xl">
      <p className="eyebrow">Optional utility</p><h1 className="font-display text-5xl md:text-6xl">Wishlist</h1>
      <div className="mt-10"><EmptyState title="Your wishlist is empty" copy="Saved products will be enabled alongside customer accounts so the list can persist securely across devices." action={<div className="flex flex-col items-center gap-4"><Heart aria-hidden="true" /><Link className={buttonClassName("primary")} href="/shop">Browse products</Link></div>} /></div>
    </Container>
  );
}
