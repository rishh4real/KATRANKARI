import { expect, test } from "@playwright/test";

test("homepage, navigation and mock commerce smoke flow", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Made From What Remains");

  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Open menu" }).click();
  const mobileDialog = page.getByRole("dialog", { name: "Mobile navigation" });
  const mobileNavigation = page.getByRole("navigation", { name: "Mobile navigation" });
  await expect(mobileDialog).toBeVisible();
  await expect(mobileNavigation.getByRole("link", { name: "Education", exact: true })).toHaveCount(0);
  await expect(mobileNavigation.getByRole("link", { name: "Contact", exact: true })).toHaveCount(0);
  await expect(mobileDialog.getByRole("link", { name: "Wishlist", exact: true })).toHaveCount(0);
  await mobileNavigation.getByRole("link", { name: "Shop", exact: true }).click();
  await expect(page).toHaveURL(/\/shop$/);
  await expect(page.getByRole("heading", { level: 1, name: "Shop" })).toBeVisible();

  await page.goto("/products/patchwork-tote");
  await expect(page.getByRole("heading", { level: 1, name: "Patchwork Tote" })).toBeVisible();
  await page.getByRole("button", { name: "Add to demo cart" }).click();
  await expect(page.getByRole("status")).toContainText("Item added");
  await page.goto("/cart");
  const quantity = page.getByLabel("Quantity for Patchwork Tote");
  await expect(quantity).toHaveValue("1");
  await quantity.fill("2");
  await expect(quantity).toHaveValue("2");
});
