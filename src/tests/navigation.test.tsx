import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CartProvider } from "@/components/cart/CartProvider";
import { Header } from "@/components/layout/Header";

vi.mock("next/navigation", () => ({ usePathname: () => "/shop" }));

describe("site navigation", () => {
  it("provides labeled primary actions and marks the current page", () => {
    render(<CartProvider><Header /></CartProvider>);
    expect(screen.getByRole("link", { name: "KatranKaari home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop", current: "page" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("link", { name: /Cart with 0 items/ })).toBeInTheDocument();
  });
});
