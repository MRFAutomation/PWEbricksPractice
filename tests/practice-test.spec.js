const { test, expect, chromium } = require("@playwright/test");
const Pagination = require('../pages/Pagination');
const helper = require("../libs/helper");

test.skip('practice', async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    let headingText = await page.getByRole("heading", { name: "Bootstrap Date Pickers Demo" }).textContent();
    console.log(headingText);
    await expect(page.
        getByRole("heading", { name: "Bootstrap Date Pickers Demo" })).
        toHaveText("Bootstrap Date Pickers Demo");

    await page.click("//input[@placeholder='Start date']");

    /* With this xpath we are getting the current Month and Year text from calendar header  */
    let currentMonthYear = await page.
        locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]").
        textContent();

    console.log(currentMonthYear);

    await expect(page.
        locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
    ).toContainText("June 2024");



    await page.waitForTimeout(3000);
});

test.skip('Auth test1', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/edit");
    await page.waitForTimeout(5000);
});
test.skip('Auth xms', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    await page.goto("https://cqead6a.xmqa.cloud.com:4443/index_uc.jsp#manage");
    await page.waitForTimeout(15000);
});
test.skip('Auth xms1', async ({ browser }) => {
    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    await page.goto("https://cqead6a.xmqa.cloud.com:4443/index_uc.jsp#analyze");
    await page.getByRole('button', { name: 'Dismiss' }).click();
    await page.waitForTimeout(5000);
});
