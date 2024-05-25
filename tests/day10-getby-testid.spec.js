import { test, expect } from '@playwright/test';

/*
Create a new Playwright tests
Go to https://main--demo-qasite.netlify.app/test.html site
Use above selector and add assertion for getByTestId on the element which have respective property
*/

/* Solution */
test("Use of Locate by test id", async ({ page }) => {

    await page.goto("https://main--demo-qasite.netlify.app/test.html");
    await expect(page.getByTestId('1')).toContainText("John");
})