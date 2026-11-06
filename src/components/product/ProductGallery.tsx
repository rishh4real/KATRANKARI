import Image from "next/image";
import type { ProductImage } from "@/lib/commerce/types";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {images.map((image, index) => (
        <div className={`relative aspect-[4/5] overflow-hidden rounded-card bg-surface ${index === 0 ? "sm:col-span-2" : ""}`} key={image.id}>
          <Image src={image.url} alt={image.altText} fill priority={index === 0} className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
        </div>
      ))}
    </div>
  );
}
