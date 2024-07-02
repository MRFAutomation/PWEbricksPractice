import { test } from '@playwright/test';
const loginData = require('../data/day24data');


test('eCommerce Setup', async ({ page }) => {
    await page.goto(loginData.webURL);
    await page.getByRole('button', { name: 'My account' }).hover();
    await page.getByText('Login').click();
    await page.getByPlaceholder('E-Mail Address').fill((loginData.email));
    await page.fill("#input-password", loginData.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForURL(loginData.waitURL);
    await page.context().storageState({ path: "./authpd.json" })

});
