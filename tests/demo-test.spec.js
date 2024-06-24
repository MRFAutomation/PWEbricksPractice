import { expect, test } from "@playwright/test";


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
});
