import type {
  Cart,
  CartLineInput,
  CartLineUpdateInput,
  Collection,
  Product,
  ProductListResult,
  ProductQueryOptions,
} from "./types";

export interface CommerceProvider {
  getProducts(options?: ProductQueryOptions): Promise<ProductListResult>;
  getProduct(handle: string): Promise<Product | null>;
  getCollections(): Promise<Collection[]>;
  getCollection(handle: string): Promise<Collection | null>;
  createCart(): Promise<Cart>;
  getCart(cartId: string): Promise<Cart | null>;
  addCartLines(cartId: string, lines: CartLineInput[]): Promise<Cart>;
  updateCartLines(cartId: string, lines: CartLineUpdateInput[]): Promise<Cart>;
  removeCartLines(cartId: string, lineIds: string[]): Promise<Cart>;
}
