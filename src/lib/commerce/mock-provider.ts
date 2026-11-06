import { mockCollections } from "@/data/mock-collections";
import { mockProducts } from "@/data/mock-products";
import { filterAndSortProducts } from "@/lib/products";
import { addLines, createEmptyCart, removeLines, updateLines } from "./cart";
import type { CommerceProvider } from "./provider";
import type { Cart, CartLineInput, CartLineUpdateInput, ProductQueryOptions } from "./types";

const carts = new Map<string, Cart>();

export const mockCommerceProvider: CommerceProvider = {
  async getProducts(options: ProductQueryOptions = {}) {
    const products = filterAndSortProducts(mockProducts, options);
    return { products, totalCount: products.length };
  },
  async getProduct(handle) {
    return mockProducts.find((product) => product.handle === handle) ?? null;
  },
  async getCollections() {
    return mockCollections;
  },
  async getCollection(handle) {
    return mockCollections.find((collection) => collection.handle === handle) ?? null;
  },
  async createCart() {
    const id = `mock-cart-${crypto.randomUUID()}`;
    const cart = createEmptyCart(id);
    carts.set(id, cart);
    return cart;
  },
  async getCart(cartId) {
    return carts.get(cartId) ?? null;
  },
  async addCartLines(cartId: string, lines: CartLineInput[]) {
    const cart = addLines(carts.get(cartId) ?? createEmptyCart(cartId), lines);
    carts.set(cartId, cart);
    return cart;
  },
  async updateCartLines(cartId: string, lines: CartLineUpdateInput[]) {
    const cart = updateLines(carts.get(cartId) ?? createEmptyCart(cartId), lines);
    carts.set(cartId, cart);
    return cart;
  },
  async removeCartLines(cartId: string, lineIds: string[]) {
    const cart = removeLines(carts.get(cartId) ?? createEmptyCart(cartId), lineIds);
    carts.set(cartId, cart);
    return cart;
  },
};
