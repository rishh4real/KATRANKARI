"use client";

import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { CartItem } from "@/components/cart/CartItem";
import { CartSummary } from "@/components/cart/CartSummary";
import { Container } from "@/components/layout/Container";
import { EmptyState } from "@/components/ui/EmptyState";
import { buttonClassName } from "@/components/ui/Button";

export default function CartPage() {
  const { cart, ready } = useCart();
  return (
    <Container className="page-section">
      <p className="eyebrow">Development cart</p><h1 className="font-display text-5xl md:text-6xl">Your cart</h1>
      {!ready ? <p className="mt-8 text-muted">Loading saved demo cart…</p> : cart.lines.length === 0 ? <div className="mt-10"><EmptyState title="Your demo cart is empty" copy="Browse the mock catalogue to test the local cart flow." action={<Link className={buttonClassName("primary")} href="/shop">Browse demo products</Link>} /></div> : <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]"><div>{cart.lines.map((line) => <CartItem line={line} key={line.id} />)}</div><CartSummary cart={cart} /></div>}
    </Container>
  );
}
