import { test, expect } from "@playwright/test";
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

    /* Flags used below to construct logic to select current month */
    let prevFlag = false;
    let nextFlag = false;

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    /*  Open the first calendar to select the Start date*/
    await page.click("//input[@placeholder='Start date']");

    /* With this xpath we are getting the current Month and Year text from calendar header  */
    let currentMonthYear = await page.
        locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]").
        textContent();

    /* Calling the  selectDate function and passing the date, month and years to select*/
    await selectDate(1, "June 2024");

    /* Clicking on the heading just just minimize/close the calendar */
    await page.getByRole("heading", { name: "Bootstrap Date Pickers Demo" }).click();

    /*  Open the first calendar to select the Start date*/
    await page.click("//input[@placeholder='End date']");

    /* Calling the  selectDate function and passing the date, month and years to select*/
    await selectDate(1, "July 2024");
    /* Clicking on the heading just just minimize/close the calendar */
    await page.getByRole("heading", { name: "Bootstrap Date Pickers Demo" }).click();

    /* selectDate function started here */
    async function selectDate(date, dateToSelect) {
        /* Get the Prev button locator */
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        /* Get the next button locator */
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");
        /* Get the Month and Year text of second calendar locator */
        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");

        /* Splitting month and year text and storing them to variables  */
        let yearToSelect = dateToSelect.split(" ")[1];
        let monthToSelect = dateToSelect.split(" ")[0];
        let currentYearFlag = currentMonthYear.split(" ")[1];
        let currentMonthFlag = currentMonthYear.split(" ")[0];

        /* This if statement will only execute if we are selecting the current month date */
        if (currentYearFlag == yearToSelect && currentMonthFlag == monthToSelect && prevFlag == false && nextFlag == false) {
            await page.waitForTimeout(1000);
            /* Contructing xpath for date recieved in selectDate function and then click on the desired date*/
            await page.click(`//td[@class='day'][text()='${date}']`);

            /* Assert that actual and expected month and the year are same */
            await expect(mmYY).toContainText(dateToSelect);

            await page
                .getByRole("heading", { name: "Bootstrap Date Pickers Demo" })
                .click();
        } else {
            /* Getting the boolean value using moment.js library function based on  dateToSelect string*/
            /* if dateToSelect is before or same as current month/year then boolean value will be true else false */
            let thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();

            /* By this logic we are selecting the current month date in second calendar only if we have 
               selected the previous month date in first calendar.
            */
            if (currentYearFlag == yearToSelect && currentMonthFlag == monthToSelect && prevFlag == true) {
                thisMonth = false;
            }

            /* This loop will iterate over the calendar forward/backward untill it find the exact match of
               month and year to select
            */
            while ((await mmYY.textContent()) != dateToSelect) {

                if (thisMonth) {
                    await prev.click();
                    prevFlag = true;
                } else {
                    await next.click();
                    nextFlag = true;
                }
            }

            /* Selecting the desired date by click action */
            await page.click(`//td[@class='day'][text()='${date}']`);

            /* Assert that actual and expected month and the year are same */
            await expect(mmYY).toContainText(dateToSelect);

            /* Click on the  Bootstrap heading to minimize/close the calendar*/
            await page.getByRole("heading", { name: "Bootstrap Date Pickers Demo" }).click();
        }

        await page.waitForTimeout(2000);
    } // End selectDate method
});
