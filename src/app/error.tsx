"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return <main className="grid min-h-screen place-items-center px-5 text-center"><div><p className="eyebrow">Something went wrong</p><h1 className="font-display text-5xl">We could not load this page.</h1><p className="mx-auto mt-4 max-w-md text-muted">Try loading the page again. No order or form data has been submitted.</p><Button className="mt-7" onClick={reset}>Try again</Button></div></main>;
}
