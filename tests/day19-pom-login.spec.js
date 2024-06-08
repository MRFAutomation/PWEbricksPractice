const { test } = require("@playwright/test");
const LoginPage = require('../pages/LoginPage');
const BasePage = require('../pages/BasePage');

test.describe('Login suite using POM', () => {
    test('Login Test POM', async ({ page }) => {

        const basePage = new BasePage(page);
        await basePage.launchWebsite();

        const loginPage = new LoginPage(page);
        await loginPage.enterEmail();
        await loginPage.enterPassword();
        await loginPage.clickLogin();
        await loginPage.verifyLoginSuccess();
    });

})
