import { test } from "@playwright/test";
import moment from "moment";

test("Calendar - Date selection using fill function", async ({ page }) => {
    await page.goto(
        "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
    );
    let date = "1994-12-04";

    await page.fill("id=birthday", date);
    await page.waitForTimeout(2000);
    console.log("Input date is: ", await page.locator("#birthday").textContent());
    await page.waitForTimeout(2000);
});

test.only("Calendar - Date selection using moment", async ({ page }) => {

    let prevFlag = false;
    let nextFlag = false;

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await page.click("//input[@placeholder='Start date']");

    let currentMonthYear = await page.
        locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]").
        textContent();

    await selectDate(1, "March 2024");
    await page.getByRole("heading", { name: "Bootstrap Date Pickers Demo" }).click();

    await page.click("//input[@placeholder='End date']");

    await selectDate(29, "June 2024");
    await page.getByRole("heading", { name: "Bootstrap Date Pickers Demo" }).click();


    async function selectDate(date, dateToSelect) {

        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

        let yearToSelect = dateToSelect.split(" ")[1];
        let monthToSelect = dateToSelect.split(" ")[0];
        let currentYearFlag = currentMonthYear.split(" ")[1];
        let currentMonthFlag = currentMonthYear.split(" ")[0];

        if (currentYearFlag == yearToSelect && currentMonthFlag == monthToSelect && prevFlag == false && nextFlag == false) {
            await page.waitForTimeout(1000);
            await page.click(`//td[@class='day'][text()='${date}']`);
            await page
                .getByRole("heading", { name: "Bootstrap Date Pickers Demo" })
                .click();
        } else {

            let thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
            if (currentYearFlag == yearToSelect && currentMonthFlag == monthToSelect && prevFlag == true) {
                thisMonth = false;
            }

            while ((await mmYY.textContent()) != dateToSelect) {

                if (thisMonth) {
                    await prev.click();
                    prevFlag = true;
                } else {
                    await next.click();
                    nextFlag = true;
                }
            }

            await page.waitForTimeout(1000);
            await page.click(`//td[@class='day'][text()='${date}']`);
            await page.getByRole("heading", { name: "Bootstrap Date Pickers Demo" }).click();
        }

        await page.waitForTimeout(2000);
    }
});
