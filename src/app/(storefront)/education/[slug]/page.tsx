import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buttonClassName } from "@/components/ui/Button";
import { mockArticles } from "@/data/mock-content";
import { createMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = mockArticles.find((item) => item.slug === slug);
  return article ? createMetadata(article.title, article.excerpt, `/education/${slug}`) : createMetadata("Article not found", "The requested article does not exist.", `/education/${slug}`);
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = mockArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <Container className="page-section max-w-4xl">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Education", href: "/education" }, { label: article.title }]} />
      <Badge>Sample content · not for publication</Badge><h1 className="mt-5 font-display text-5xl leading-tight md:text-7xl">{article.title}</h1><p className="mt-6 text-lg leading-8 text-muted">{article.excerpt}</p>
      <div className="mt-12 space-y-10">{article.sections.map((section) => <section key={section.heading}><h2 className="font-display text-3xl">{section.heading}</h2><p className="mt-4 leading-8 text-muted">{section.body}</p></section>)}</div>
      <Link className={`${buttonClassName("secondary")} mt-12`} href="/education">Back to education</Link>
    </Container>
  );
}
