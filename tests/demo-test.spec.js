import { expect, test } from "@playwright/test";
import moment, { months } from "moment";


test.describe("Drop Down Test Suite", () => {
    test("Basic Drag and drop", async ({ page }) => {
        await page.goto("https://commitquality.com/practice-drag-and-drop");

        let flag = await page.locator("//div[@class='large-box inside'][text()='Success!']").isVisible();
        if (flag) {
            await page.locator("#small-box").dragTo(page.locator(".large-box "));
            await page.waitForTimeout(6000);
            await expect.soft(page.locator("//div[@class='large-box inside'][text()='Success!']")).toHaveText("Success!");
            await page.waitForTimeout(6000);
        }


        await page.waitForTimeout(1000);
    });


    test("Advance Drag and drop", async ({ page }) => {
        await page.goto("https://commitquality.com/practice-drag-and-drop");

        await page.waitForTimeout(6000);
        await page.locator("#small-box").hover();
        await page.waitForTimeout(6000);
        await page.mouse.down();
        await page.waitForTimeout(6000);
        await page.locator(".large-box ").hover();
        await page.waitForTimeout(6000);
        await page.mouse.up();
        await page.waitForTimeout(6000);

    });
    test("Basic Drag and drop1", async ({ page }) => {
        await page.goto("https://commitquality.com/practice-drag-and-drop");

        let flag = await page.locator("//div[@class='large-box inside'][text()='Success!']").isVisible();
        if (flag) {
            await page.locator("#small-box").dragTo(page.locator(".large-box "));
            await page.waitForTimeout(6000);
            await expect.soft(page.locator("//div[@class='large-box inside'][text()='Success!']")).toHaveText("Success!");

        }


        await page.waitForTimeout(1000);
    });


    test("Advance Drag and drop1", async ({ page }) => {
        await page.goto("https://commitquality.com/practice-drag-and-drop");


        await page.locator("#small-box").hover();
        await page.waitForTimeout(6000);
        await page.mouse.down();
        await page.waitForTimeout(6000);
        await page.locator(".large-box ").hover();
        await page.waitForTimeout(6000);
        await page.mouse.up();
        await page.waitForTimeout(6000);

    });

    test.only('Using Moment Library', async ({ page }) => {
        console.log("Current Date:", moment().toString());
        console.log("Current month is:", moment().month().toString())


        let month10 = moment().month(10);
        console.log(
            "Moment with Month of 10 is:",
            month10.toString()
        )

        let month24 = moment().month(24);
        console.log(
            "Moment with Month of 24 is:",
            month24.toString()
        )

        console.log("-----------------");
        console.log("Current Date:", moment().toString())
        console.log("Current month is:", moment().month())

        let monthDecember = moment().month("December");
        console.log(
            "Moment with Month of December is:",
            monthDecember.toString()
        )

        let monthFeb = moment().month("Feb");
        console.log(
            "Moment with Month of Feb is:",
            monthFeb.toString()
        )

        // const thisMonth = moment("July 2024", "MMMM YYYY").isBefore();
        const thisMonth = moment("June 2024", "MMMM YYYY").isBefore();
        console.log("This month: ", thisMonth);

        let dt = "December 2024";
        // let dt = "June 2024";
        let month = dt.split(" ")[0];
        let year = dt.split(" ")[1];
        console.log(month);
        console.log(year);

    });

});
