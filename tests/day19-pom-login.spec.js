const { test } = require("@playwright/test");
const LoginPage = require('../pages/LoginPage');

test.describe('Login suite using POM', () => {
    test('Login Test POM', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.launchWebsite();
        await loginPage.enterEmail();
        await loginPage.enterPassword();
        await loginPage.clickLogin();
        await loginPage.verifyLoginSuccess();
    });

})
