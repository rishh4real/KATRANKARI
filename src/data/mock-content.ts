import type { ContentArticle } from "@/lib/commerce/types";

export const mockArticles: ContentArticle[] = [
  {
    id: "sample-textile-waste",
    slug: "understanding-textile-waste",
    title: "Understanding textile waste",
    excerpt: "A sample outline for future educational content about where textile waste comes from.",
    topic: "Textile waste",
    sample: true,
    sections: [
      { heading: "What this article will cover", body: "This sample page marks the intended structure for client-approved educational copy and sourced facts." },
      { heading: "Sources required", body: "Before publication, claims and figures must be reviewed and supported by approved primary sources." },
    ],
  },
  {
    id: "sample-material-story",
    slug: "from-offcut-to-useful-object",
    title: "From offcut to useful object",
    excerpt: "A sample material story showing how transformation content can be structured.",
    topic: "Material stories",
    sample: true,
    sections: [
      { heading: "Material selection", body: "Final copy will document the approved sourcing, sorting and design process." },
      { heading: "Transformation", body: "Process details and imagery remain placeholders until the client approves them." },
    ],
  },
  {
    id: "sample-circularity",
    slug: "a-practical-introduction-to-circularity",
    title: "A practical introduction to circularity",
    excerpt: "A sample framework for explaining circular design without unsupported claims.",
    topic: "Circularity",
    sample: true,
    sections: [
      { heading: "The intended lesson", body: "This page will connect circular design principles to KatranKaari's verified practices." },
      { heading: "Editorial review", body: "Examples, definitions and citations will be added after content review." },
    ],
  },
];
