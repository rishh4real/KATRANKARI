import { describe, expect, it } from "vitest";
import { mockCommerceProvider } from "@/lib/commerce/mock-provider";

describe("mock commerce provider", () => {
  it("returns null for an invalid product handle", async () => {
    await expect(mockCommerceProvider.getProduct("does-not-exist")).resolves.toBeNull();
  });
});
