"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { addLines, createEmptyCart, removeLines, updateLines } from "@/lib/commerce/cart";
import type { Cart } from "@/lib/commerce/types";

const STORAGE_KEY = "katrankaari.mock-cart.v1";

type CartContextValue = {
  cart: Cart;
  ready: boolean;
  announcement: string;
  addItem: (merchandiseId: string, quantity: number) => void;
  updateItem: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState(() => createEmptyCart());
  const [ready, setReady] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const storage = typeof window.localStorage?.getItem === "function" ? window.localStorage : null;
      try {
        const stored = storage?.getItem(STORAGE_KEY);
        if (stored) setCart(JSON.parse(stored) as Cart);
      } catch {
        storage?.removeItem(STORAGE_KEY);
      } finally {
        setReady(true);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (ready && typeof window.localStorage?.setItem === "function") window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  const addItem = useCallback((merchandiseId: string, quantity: number) => {
    setCart((current) => addLines(current, [{ merchandiseId, quantity }]));
    setAnnouncement("Item added to your demo cart.");
  }, []);
  const updateItem = useCallback((lineId: string, quantity: number) => {
    setCart((current) => updateLines(current, [{ id: lineId, quantity }]));
    setAnnouncement("Cart quantity updated.");
  }, []);
  const removeItem = useCallback((lineId: string) => {
    setCart((current) => removeLines(current, [lineId]));
    setAnnouncement("Item removed from your demo cart.");
  }, []);

  const value = useMemo(() => ({ cart, ready, announcement, addItem, updateItem, removeItem }), [cart, ready, announcement, addItem, updateItem, removeItem]);
  return (
    <CartContext.Provider value={value}>
      {children}
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
    </CartContext.Provider>
  );
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used within CartProvider");
  return value;
}
