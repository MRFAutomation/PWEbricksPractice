import { test } from '@playwright/test';
test('HRM Login Test', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.waitForTimeout(3000);
});
