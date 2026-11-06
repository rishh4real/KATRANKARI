import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredProducts = [
  {
    title: "Patchwork Tote Bag",
    category: "Bags & Totes",
    price: "₹1,450",
    href: "/products/patchwork-tote",
  },
  {
    title: "Patchwork Cushion Cover",
    category: "Home & Living",
    price: "₹950",
    href: "/products/quilted-cushion-cover",
  },
  {
    title: "Earpods Case",
    category: "Everyday Essentials",
    price: "₹650",
    href: "/shop?collection=everyday-essentials",
  },
  {
    title: "Shagun Envelope Set",
    category: "Gifting & More",
    price: "₹350",
    href: "/shop?collection=gifting-and-more",
  },
];

export function FeaturedProductsShowcase() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#D8D5CD] bg-[#FBFAF7]" aria-labelledby="featured-products-title">
      <Image
        src="/katrankaari/featured-textile-pattern.png"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="pointer-events-none z-0 object-cover opacity-[0.12]"
      />
      <div className="relative z-10 mx-auto max-w-site px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="relative mb-8 flex items-end justify-center sm:mb-10">
          <div className="text-center">
            <p className="eyebrow mb-2">Curated from recovered textiles</p>
            <h2 id="featured-products-title" className="font-sans text-[clamp(2rem,3.2vw,2.9rem)] font-normal leading-none text-[#251017]">Featured Products</h2>
          </div>
          <Link href="/shop" className="group absolute bottom-0 right-0 hidden items-center gap-1 border-b border-[#7C2831] pb-1 text-xs font-bold uppercase tracking-[0.1em] text-[#251017] transition-colors hover:text-[#7C2831] sm:inline-flex">
            View all products <ArrowUpRight aria-hidden="true" size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-4">
          {featuredProducts.map((product) => (
            <article className="group min-w-0" key={product.title}>
              <Link href={product.href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C2831] focus-visible:ring-offset-4">
                <div className="aspect-[4/3] border border-[#CFC9C0] bg-white" aria-hidden="true" />
                <div className="mt-3 grid grid-cols-[minmax(0,1fr)_auto] gap-x-3">
                  <h3 className="min-w-0 text-sm font-semibold leading-5 text-[#251017] group-hover:text-[#7C2831] sm:text-[15px]">{product.title}</h3>
                  <p className="text-sm font-semibold leading-5 text-[#251017]">{product.price}</p>
                  <p className="col-span-2 mt-0.5 text-xs text-[#6D6A64]">{product.category}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <Link href="/shop" className="mt-9 inline-flex items-center gap-1 border-b border-[#7C2831] pb-1 text-xs font-bold uppercase tracking-[0.1em] text-[#251017] sm:hidden">
          View all products <ArrowUpRight aria-hidden="true" size={15} />
        </Link>
      </div>
    </section>
  );
}
