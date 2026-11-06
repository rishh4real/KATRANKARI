import { describe, expect, it } from "vitest";
import { formatMoney } from "@/lib/format";

describe("formatMoney", () => {
  it("formats INR without decimal noise", () => {
    expect(formatMoney({ amount: 1450, currencyCode: "INR" })).toMatch(/₹1,450/);
  });
});
