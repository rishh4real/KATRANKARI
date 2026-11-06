# Future Shopify provider

The storefront currently imports `mockCommerceProvider` through the same `CommerceProvider` contract that a Shopify implementation will use.

The Shopify provider should use the Storefront GraphQL API for products, collections, inventory-aware variants and carts. It must map Shopify global IDs directly into the shared commerce types, use Shopify cart IDs and redirect checkout to Shopify-hosted checkout URLs.

Keep the Storefront access token server-side where possible. Never expose an Admin API token to the browser. Add caching and revalidation rules around catalogue queries, handle Storefront API errors explicitly, and plan webhook-driven invalidation for product and inventory updates. Customer accounts should use Shopify's Customer Account API as a separate future integration.

To switch providers, implement `CommerceProvider` in this directory and change the provider export at the application boundary. UI components should not import Shopify-specific response types.
