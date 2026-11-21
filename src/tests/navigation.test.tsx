import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CartProvider } from "@/components/cart/CartProvider";
import { Header } from "@/components/layout/Header";

vi.mock("next/navigation", () => ({ usePathname: () => "/shop" }));

describe("site navigation", () => {
  it("provides labeled primary actions and marks the current page", () => {
    render(<CartProvider><Header /></CartProvider>);
    expect(screen.getByRole("link", { name: "KatranKaari home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop", current: "page" })).toBeInTheDocument();
    const menuToggle = screen.getByRole("button", { name: "Open menu" });
    expect(menuToggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("link", { name: /Cart with 0 items/ })).toBeInTheDocument();

    fireEvent.click(menuToggle);
    const mobileDialog = screen.getByRole("dialog", { name: "Mobile navigation" });
    expect(menuToggle).toHaveAttribute("aria-expanded", "true");
    expect(mobileDialog.parentElement?.parentElement).toBe(document.body);
  });
});
