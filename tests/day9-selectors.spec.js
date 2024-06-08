import { test, expect } from '@playwright/test';
import { log } from 'console';
test("getByText and getByPlaceholder", async ({ page }) => {
    await page.goto("https://www.letskodeit.com/practice");

    /* getByText */
    console.log(await page.getByText('JavaScript Programming Language').textContent());

    /* getByPlaceholder */
    await page.getByPlaceholder('Start Typing...').fill("get by placeholder");

    await page.waitForTimeout(3000);
})

test("getByTitle", async ({ page }) => {

    await page.goto("https://thetestingworld.com/");
    await page.getByTitle('Coupon').last().click();

    await page.waitForTimeout(3000);
})

test("getByAltText", async ({ page }) => {

    await page.goto("https://www.expedia.com/");

    await page.getByAltText('Expedia logo').first().click();

    await page.waitForTimeout(3000);
})
test("Use of Playwright selectors", async ({ page }) => {

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel('Remember me').check();

})