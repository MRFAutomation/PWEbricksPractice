import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  await page.getByText('playwright', { exact: true }).click();
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
  await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
});

/* Above code has been auto-generated using record and play option of playwright */


/*
There are two ways to auto generate the code.
1. In VS terminal execute this command "npx playwright codegen" which will open the browser and inpector.
   Perform your test in browser and code will be generated autmatically in a file.
2. Other way is, click on Test icon from left toolbar in VS.
   Select desired option like browser type etc.
   Click on "Record new" option. It will also launch the browser to record test.
*/