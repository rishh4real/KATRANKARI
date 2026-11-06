import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("FAQs", "KatranKaari frequently asked questions scaffold.", "/faq");

const faqs = [
  ["Are the products and prices final?", "No. Everything in the current catalogue is clearly marked as development fixture data."],
  ["Can I place an order?", "No. Shopify checkout is not connected in Phase 1, and the demo cart cannot process payments."],
  ["Does the enquiry form send my information?", "No. It validates locally and does not transmit or store the submission."],
  ["Where will shipping and return details appear?", "Approved policies will be linked from the footer when the client supplies them."],
];

export default function FaqPage() {
  return <Container className="page-section max-w-4xl"><Badge>Phase 1 answers</Badge><h1 className="mt-5 font-display text-5xl md:text-7xl">Frequently asked questions</h1><div className="mt-12 divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details className="group py-5" key={question}><summary className="cursor-pointer list-none pr-8 text-lg font-semibold">{question}</summary><p className="mt-3 max-w-2xl leading-7 text-muted">{answer}</p></details>)}</div></Container>;
}
