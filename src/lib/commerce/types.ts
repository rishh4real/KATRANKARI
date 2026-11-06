export type CurrencyCode = "INR";

export type Money = {
  amount: number;
  currencyCode: CurrencyCode;
};

export type ProductImage = {
  id: string;
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Availability = "available" | "out-of-stock" | "enquiry-only";

export type ProductVariant = {
  id: string;
  title: string;
  sku: string;
  availableForSale: boolean;
  quantityAvailable: number;
  price: Money;
  selectedOptions: Array<{ name: string; value: string }>;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  productType: string;
  collectionHandles: string[];
  description: string;
  details: string[];
  availability: Availability;
  featured: boolean;
  isDemo: boolean;
  images: ProductImage[];
  variants: ProductVariant[];
  priceRange: { minVariantPrice: Money; maxVariantPrice: Money };
};

export type Collection = {
  id: string;
  handle: string;
  title: string;
  description: string;
  image: ProductImage;
  provisional: true;
};

export type CartLine = {
  id: string;
  merchandiseId: string;
  quantity: number;
  product: Pick<Product, "handle" | "title" | "images">;
  variant: Pick<ProductVariant, "id" | "title" | "price" | "quantityAvailable">;
};

export type Cart = {
  id: string;
  lines: CartLine[];
  totalQuantity: number;
  subtotalAmount: Money;
  checkoutUrl: null;
};

export type CartLineInput = { merchandiseId: string; quantity: number };
export type CartLineUpdateInput = { id: string; quantity: number };

export type ProductSortKey = "featured" | "title-asc" | "price-asc" | "price-desc";

export type ProductQueryOptions = {
  collection?: string;
  productType?: string;
  query?: string;
  sort?: ProductSortKey;
};

export type ProductListResult = {
  products: Product[];
  totalCount: number;
};

export type ContentArticle = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  topic: "Textile waste" | "Material stories" | "Circularity";
  sample: true;
  sections: Array<{ heading: string; body: string }>;
};
