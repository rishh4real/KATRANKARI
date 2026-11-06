import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { mockProducts } from "@/data/mock-products";
import { mockCollections } from "@/data/mock-collections";
import { mockArticles } from "@/data/mock-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/shop",
    "/corporate-gifting",
    "/impact",
    "/education",
    "/contact",
    "/faq",
    "/account",
    "/wishlist",
    "/cart",
    "/track-order",
  ];
  return [
    ...paths.map((path) => ({ url: `${siteConfig.url}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...mockProducts.map((product) => ({ url: `${siteConfig.url}/products/${product.handle}`, changeFrequency: "weekly" as const, priority: 0.6 })),
    ...mockCollections.map((collection) => ({ url: `${siteConfig.url}/collections/${collection.handle}`, changeFrequency: "weekly" as const, priority: 0.6 })),
    ...mockArticles.map((article) => ({ url: `${siteConfig.url}/education/${article.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
