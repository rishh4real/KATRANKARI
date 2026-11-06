import Link from "next/link";
import { UserRound } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { buttonClassName } from "@/components/ui/Button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Account", "Customer account integration status for the KatranKaari storefront.", "/account");

export default function AccountPage() {
  return (
    <Container className="page-section max-w-3xl text-center">
      <UserRound className="mx-auto" aria-hidden="true" size={36} strokeWidth={1.4} />
      <Badge className="mx-auto mt-5">Shopify integration pending</Badge>
      <h1 className="mt-5 font-display text-5xl md:text-6xl">Customer account</h1>
      <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">Secure sign-in, saved addresses, order history and account management will be enabled through Shopify’s Customer Account API. No placeholder account is created in this phase.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><Link className={buttonClassName("primary")} href="/shop">Continue shopping</Link><Link className={buttonClassName("secondary")} href="/contact">Contact us</Link></div>
    </Container>
  );
}
