import Link from "next/link";
import { buttonClassName } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-5 text-center">
      <div><p className="eyebrow">404</p><h1 className="font-display text-5xl md:text-7xl">Page not found</h1><p className="mx-auto mt-5 max-w-md leading-7 text-muted">The page may have moved, or the catalogue handle does not exist in the current fixtures.</p><Link className={`${buttonClassName("primary")} mt-7`} href="/">Return home</Link></div>
    </main>
  );
}
