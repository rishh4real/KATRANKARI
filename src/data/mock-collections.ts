import type { Collection } from "@/lib/commerce/types";

const collection = (handle: string, title: string, description: string, url: string, altText: string): Collection => ({
  id: `gid://mock/Collection/${handle}`,
  handle,
  title,
  description,
  provisional: true,
  image: { id: `${handle}-image`, url, altText, width: 1200, height: 1500 },
});

export const mockCollections = [
  collection("bags-and-totes", "Bags and Totes", "Provisional grouping for carry products made with textile offcuts.", "/katrankaari/editorial-drawstring-bag.png", "Patchwork textile carry bag"),
  collection("home-and-living", "Home and Living", "Provisional grouping for functional textile pieces for the home.", "/katrankaari/editorial-pillows.png", "Textile cushions arranged in a home setting"),
  collection("pouches-and-organisers", "Pouches and Organisers", "Provisional grouping for small-format storage and organisation.", "/katrankaari/organizer.png", "Textile organiser with compartments"),
  collection("everyday-essentials", "Everyday Essentials", "Provisional grouping for useful objects designed for daily routines.", "/katrankaari/editorial-textiles.png", "Folded and layered textiles"),
  collection("corporate-gifting", "Corporate Gifting", "Enquiry-led sets and customisation possibilities for organisations.", "/katrankaari/editorial-gifting.png", "Curated textile gift objects"),
] satisfies Collection[];
