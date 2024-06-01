import { test, expect } from '@playwright/test';
const data = JSON.parse(JSON.stringify(require("../logindata.json")));
/*
You will have to continue writing test cases for Login flow of following website
https://ecommerce-playground.lambdatest.io/
 
1.	Create a new test file with login.spec.js
2.	Add a describe block with name like "Login Test Suite"
3.	Add four test cases inside the login test suite.
1.	Login with valid credentials
2.	Login with username and without password
3.	Login without username and with password
4.	Login without username and password. 
*/

/* Solution */
test.describe('Login Test Suite', () => {
    test('Login with valid credentials', async ({ page }) => {

        await page.goto(data.url);

        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByText('Login').click();
        await page.getByPlaceholder('E-Mail Address').fill((data.email));
        await page.fill("#input-password", data.password);
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