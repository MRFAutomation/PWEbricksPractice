import { test, expect } from "@playwright/test";

test("click and fill functions", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", { type: 'submit' }).click();
});