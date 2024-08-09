import { test } from '@playwright/test';
import Env from '../utils/env';

test('Test Env file data', async ({ page }) => {
    await page.goto(Env.LOGIN_URL);
    await page.fill("#user-name", Env.USER_NAME);
    await page.fill("#password", Env.PASSWORD);
    await page.click("#login-button");
});
