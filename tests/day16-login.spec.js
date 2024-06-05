import { test, expect } from '@playwright/test';
const data = JSON.parse(JSON.stringify(require("../data/day16LoginData.json")));
import loginData, { } from '../data/day16LoginData';
/*
Complete the login and register test cases and take the input from data files which has been taught yesterday for the following website.
 
https://ecommerce-playground.lambdatest.io/
*/

/* Solution */
test.describe('Login Test Suite', () => {
    test('Login with valid credentials', async ({ page }) => {

        await page.goto(loginData.webURL);

        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByText('Login').click();
        await page.getByPlaceholder('E-Mail Address').fill((loginData.email));
        await page.fill("#input-password", loginData.password);
        await page.getByRole('button', { name: 'Login' }).click();

        if (await page.getByText(data.errortxt).isVisible()) {
            await expect(page.getByText(data.errortxt)).toHaveText(data.errorMsgCredentialsNotMatched);
        }

        if (await page.getByText(data.loginLimitExceed).isVisible()) {
            await expect(page.getByText(data.loginLimitExceed)).toHaveText(data.loginLimitExceed);
        }

        if (await page.getByRole('heading', { name: data.loginHeading }).isVisible()) {
            await expect(page.getByRole('heading', { name: data.loginHeading })).toHaveText(data.loginHeading);
        }
    })
    test('Login with username and without password', async ({ page }) => {

        await page.goto(data.url);

        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByText('Login').click();
        await page.getByPlaceholder('E-Mail Address').fill((data.email));
        await page.getByRole('button', { name: 'Login' }).click();

        if (await page.getByText(data.errortxt).isVisible()) {
            await expect(page.getByText(data.errortxt)).toHaveText(data.errorMsgCredentialsNotMatched);
        }

        if (await page.getByText(data.loginLimitExceed).isVisible()) {
            await expect(page.getByText(data.loginLimitExceed)).toHaveText(data.loginLimitExceed);
        }
    })
    test('Login without username and with password', async ({ page }) => {

        await page.goto(data.url);

        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByText('Login').click();
        await page.fill("#input-password", data.password);
        await page.getByRole('button', { name: 'Login' }).click();

        if (await page.getByText(data.errortxt).isVisible()) {
            await expect(page.getByText(data.errortxt)).toHaveText(data.errorMsgCredentialsNotMatched);
        }

        if (await page.getByText(data.loginLimitExceed).isVisible()) {
            await expect(page.getByText(data.loginLimitExceed)).toHaveText(data.loginLimitExceed);
        }
    })
    test('Login without username and password', async ({ page }) => {

        await page.goto(data.url);

        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByText('Login').click();
        await page.getByRole('button', { name: 'Login' }).click();

        if (await page.getByText(data.errortxt).isVisible()) {
            await expect(page.getByText(data.errortxt)).toHaveText(data.errorMsgCredentialsNotMatched);
        }

        if (await page.getByText(data.loginLimitExceed).isVisible()) {
            await expect(page.getByText(data.loginLimitExceed)).toHaveText(data.loginLimitExceed);
        }
    })
})