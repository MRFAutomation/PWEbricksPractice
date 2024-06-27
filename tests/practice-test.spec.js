const { test, expect, chromium } = require("@playwright/test");
const Pagination = require('../pages/Pagination');
const helper = require("../libs/helper");

test('practice', async ({ page }) => {

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
