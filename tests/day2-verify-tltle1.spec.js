const { test, expect } = require('@playwright/test');

test("check title", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io");
    let title = await page.title();
    console.log("Title is: " + title);
    await expect(page).toHaveTitle(/Your Store/);
});
