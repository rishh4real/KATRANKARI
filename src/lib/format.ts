import type { Money } from "@/lib/commerce/types";

export function formatMoney(money: Money): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: money.currencyCode,
    maximumFractionDigits: 0,
  }).format(money.amount);
}
