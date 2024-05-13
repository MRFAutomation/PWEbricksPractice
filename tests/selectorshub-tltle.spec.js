const { test, expect } = require('@playwright/test');

test("check title", async ({ page }) => {
    await page.goto("https://selectorshub.com/xpath-practice-page");
    let title = await page.title();
    console.log("Title is: " + title);
    await expect(page).toHaveTitle(/Xpath Practice Page/);
});
