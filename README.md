# KatranKaari storefront foundation

This repository contains the Phase 1 frontend foundation for a custom, headless Shopify storefront. It uses Next.js App Router, strict TypeScript, Tailwind CSS and local development fixtures. Shopify, payments, customer accounts and real enquiry submission are intentionally not connected.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

Quality commands:

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
```

Playwright may require a one-time browser install with `npx playwright install chromium`.

## Architecture

```text
src/
├── app/                         # App Router pages, metadata and route states
│   └── (storefront)/            # Shared public storefront shell
├── components/
│   ├── cart/                    # Persistent development cart UI/state
│   ├── forms/                   # Validated, non-sending forms
│   ├── layout/                  # Header, navigation, footer and container
│   ├── product/                 # Catalogue, product and filtering UI
│   └── ui/                      # Reusable primitives
├── config/                      # Site-level configuration
├── data/                        # Explicitly labeled development fixtures
├── lib/
│   └── commerce/                # Shared types, cart logic and provider contract
└── tests/                       # Vitest and React Testing Library tests
e2e/                             # Playwright smoke flow
public/katrankaari/              # Existing local project imagery
```

The original Vite prototype files remain in the repository for reference but are excluded from the Next.js TypeScript and lint pipelines. The production entry point is `src/app`.

## Working routes

- `/`
- `/about`
- `/shop`
- `/collections/[handle]`
- `/products/[handle]`
- `/corporate-gifting`
- `/impact`
- `/education`
- `/education/[slug]`
- `/contact`
- `/faq`
- `/account`
- `/wishlist`
- `/cart`
- `/track-order`
- `/robots.txt`
- `/sitemap.xml`

Unknown product, collection and article handles render the Not Found state.

## Mock functionality

- Typed product, collection, variant, availability and article fixtures
- Search, category filtering and sorting
- Product details and variant selection
- Add, update and remove local cart lines with inventory limits
- Browser storage persistence for the development cart
- INR formatting
- Contact and corporate enquiry validation without transmission
- Responsive navigation covering all six main sections and utility routes
- Clear account, wishlist and order-tracking states pending Shopify integration
- Product review-and-rating placement without fabricated customer claims

All catalogue prices, inventory, descriptions, variants and groupings are development values. Forms do not send or store data. No impact metrics, business contacts, legal policies, promotions, testimonials or review claims are invented.

## Shopify integration boundary

UI code consumes shared commerce types and the `CommerceProvider` contract. A future Shopify Storefront GraphQL provider should replace the mock provider without changing product and cart components. See `src/lib/commerce/shopify/README.md` for the integration checklist.

The next development phase should confirm the design direction and content model, obtain approved catalogue and impact data, then implement the Shopify provider, hosted checkout handoff, secure enquiry delivery, policies and customer account integration.
