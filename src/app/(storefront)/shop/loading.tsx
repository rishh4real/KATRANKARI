import { Skeleton } from "@/components/ui/Skeleton";

export default function ShopLoading() {
  return <div className="mx-auto max-w-site px-5 py-16"><span className="sr-only">Loading products</span><Skeleton className="h-14 max-w-md" /><Skeleton className="mt-8 h-20 w-full" /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 8 }, (_, index) => <Skeleton className="aspect-[4/5]" key={index} />)}</div></div>;
}
