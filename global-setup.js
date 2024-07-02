import { chromium, expect } from '@playwright/test';
const loginData = require('./data/day24data')

async function globalSetup() {

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(loginData.webURL);
    await page.getByRole('button', { name: 'My account' }).hover();
    await page.getByText('Login').click();
    await page.getByPlaceholder('E-Mail Address').fill((loginData.email));
    await page.fill("#input-password", loginData.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: loginData.loginHeading })).toHaveText(loginData.loginHeading);

    await page.context().storageState({ path: "./auth.json" })
}

export default globalSetup;