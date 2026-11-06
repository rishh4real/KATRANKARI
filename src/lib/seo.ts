import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createMetadata(title: string, description: string, path: string): Metadata {
  const canonical = new URL(path, siteConfig.url);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: canonical,
    },
  };
}
