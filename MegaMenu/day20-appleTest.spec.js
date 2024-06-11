const { test } = require("@playwright/test");
const LoginPage = require('../pages/LoginPage');
const MyAccountPage = require('../pages/MyAccountPage');
const ApplePage = require('../pages/ApplePage');

test.describe('Login suite using POM', () => {
    test('Login Test POM', async ({ page }) => {

        // Launch and login to site
        const loginPage = new LoginPage(page);
        await loginPage.launchWebsite();
        await loginPage.enterEmail();
        await loginPage.enterPassword();
        await loginPage.clickLogin();
        await loginPage.verifyLoginSuccess();

        // Move to MegaMenu and Click on Apple option
        const myAccountPage = new MyAccountPage(page);
        await myAccountPage.moveToMegaMenu();
        await myAccountPage.verifyAndClickAppleLink();

        // Verify title and other sections
        const applePage = new ApplePage(page);
        await applePage.verifyPageTitle();
        await applePage.verifySizeSection();
        await applePage.verifyColorSection();
        await applePage.verifySearchSection();
        await applePage.verifyFilterSaction();

    });
})
