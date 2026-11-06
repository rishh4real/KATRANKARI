import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return <main className="mx-auto w-full max-w-site px-5 py-16 sm:px-7 lg:px-10"><span className="sr-only">Loading page</span><Skeleton className="h-5 w-28" /><Skeleton className="mt-5 h-16 max-w-2xl" /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton className="aspect-[4/5]" key={index} />)}</div></main>;
}
