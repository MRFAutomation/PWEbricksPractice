import { test, expect } from '@playwright/test';

test("Use of getByRole function in 5 different ways", async ({ page }) => {
    await page.goto("https://www.letskodeit.com/practice");

    await page.getByRole('heading', { name: 'Practice Page' });
    await page.getByRole('radio').first().click();
    await page.getByRole('checkbox').nth(1).click();
    await page.getByRole('link', { name: 'Open Tab' }).click();
    await page.getByRole('button', { name: 'Open Window' }).click();

    await page.waitForTimeout(3000);
})