import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import { siteConfig } from "@/config/site";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["500", "600"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${display.variable}`}>
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
