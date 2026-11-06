import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CartProvider } from "@/components/cart/CartProvider";
import CartPage from "@/app/(storefront)/cart/page";

describe("empty cart page", () => {
  it("shows a useful empty state", async () => {
    window.localStorage.clear();
    render(<CartProvider><CartPage /></CartProvider>);
    await waitFor(() => expect(screen.getByRole("heading", { name: "Your demo cart is empty" })).toBeInTheDocument());
    expect(screen.getByRole("link", { name: "Browse demo products" })).toHaveAttribute("href", "/shop");
  });
});
