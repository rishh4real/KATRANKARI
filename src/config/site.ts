const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: "KatranKaari",
  tagline: "Re-imagining textile waste",
  description: "Thoughtfully designed, functional products made from upcycled textile waste.",
  url: process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl,
  contact: {
    phoneDisplay: "+91 6351127795",
    phoneHref: "tel:+916351127795",
    email: "katrankaari21@gmail.com",
    address: "Jamnagar, Gujarat 361006",
  },
  social: {
    instagramHandle: "KatranKaari",
    instagramUrl: "https://www.instagram.com/katrankaari?rpxt=eDZncjJra3AzNHpy&utm_source=qr",
  },
};
