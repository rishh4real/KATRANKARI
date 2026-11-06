import Link from "next/link";
import { PackageSearch } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Track Order", "Order tracking integration status for the KatranKaari storefront.", "/track-order");

export default function TrackOrderPage() {
  return (
    <Container className="page-section max-w-3xl text-center">
      <PackageSearch className="mx-auto" aria-hidden="true" size={38} strokeWidth={1.4} />
      <Badge className="mx-auto mt-5">Order system pending</Badge>
      <h1 className="mt-5 font-display text-5xl md:text-6xl">Track your order</h1>
      <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">Order tracking will become available when Shopify orders and customer authentication are connected. The development storefront does not create real orders.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><Link className={buttonClassName("primary")} href="/contact">Contact KatranKaari</Link><Link className={buttonClassName("secondary")} href="/faq">View FAQs</Link></div>
    </Container>
  );
}
