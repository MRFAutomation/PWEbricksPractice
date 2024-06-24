import { test, expect } from '@playwright/test';
const helper = require("../libs/helper");


test(`Verify pagination functionality for show pages`, async ({ page }) => {
    // await helper.gotoApplePage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8");

    async function verifyForwardFunctionality() {

        let txt;
        let selectedPageText = await page.locator("//div[@id='entry_212440']//ul//li//span").textContent();

        if (selectedPageText === '1') {
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("1 to 15 of 42");
            await page.locator(`//a[@class='page-link'][text()='>']`).scrollIntoViewIfNeeded();
            await page.click(`//a[@class='page-link'][text()='>']`);
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("16 to 30 of 42");
            await page.getByRole('link', { name: '>|' }).scrollIntoViewIfNeeded();
            await page.getByRole('link', { name: '>|' }).click();
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("31 to 42 of 42");
        }
        else {
            await page.click(`//a[@class='page-link'][text()='1']`);
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("1 to 15 of 42");

            await page.click(`//a[@class='page-link'][text()='>']`);
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("16 to 30 of 42");

            await page.getByRole('link', { name: '>|' }).scrollIntoViewIfNeeded();
            await page.getByRole('link', { name: '>|' }).click();
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("31 to 42 of 42");
        }

    }
    async function verifyBackwardFunctionality() {
        let txt;

        let selectedPageText = await page.locator("//div[@id='entry_212440']//ul//li//span").textContent();


        if (selectedPageText === '3') {
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("31 to 42 of 42");

            await page.locator(`//a[@class='page-link'][text()='<']`).scrollIntoViewIfNeeded();
            await page.click(`//a[@class='page-link'][text()='<']`);
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("16 to 30 of 42");

            await page.getByRole('link', { name: '|<' }).scrollIntoViewIfNeeded();
            await page.getByRole('link', { name: '|<' }).click();
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("1 to 15 of 42");
        }
        else {
            await page.click(`//a[@class='page-link'][text()='3']`);
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("31 to 42 of 42");

            await page.click(`//a[@class='page-link'][text()='<']`);
            txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            await expect(txt).toContainText("16 to 30 of 42");

            await page.getByRole('link', { name: '|<' }).scrollIntoViewIfNeeded();
            await page.getByRole('link', { name: '|<' }).click();

        }
    }
    async function verifyPagesFunctionalityForward() {
        let txt;
        let unSelectedPages = await page.$$("//div[@id='entry_212440']//ul//li//a");
        console.log(unSelectedPages.length);
        txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
        await expect(txt).toContainText("1 to 15 of 42");
        console.log(await txt.textContent());
        for (let i = 2; i < unSelectedPages.length; i++) {
            await page.locator(`//a[@class='page-link'][text()=${i}]`).scrollIntoViewIfNeeded();
            await page.click(`//a[@class='page-link'][text()=${i}]`);
            let txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
            console.log(await txt.textContent());
        }

    }
    async function verifyPagesFunctionalityBackward() {
        let selectedPageText = await page.locator("//div[@id='entry_212440']//ul//li//span").textContent();

        if (selectedPageText === '1') {
            await page.click(`//a[@class='page-link'][text()='3']`);

            let unSelectedPages = await page.$$("//div[@id='entry_212440']//ul//li//a");
            console.log(unSelectedPages.length);
            for (let i = unSelectedPages.length - 2; i > 0; i--) {
                await page.locator(`//a[@class='page-link'][text()=${i}]`).scrollIntoViewIfNeeded();
                await page.click(`//a[@class='page-link'][text()=${i}]`);

            }
        }
    }

    // verifyForwardFunctionality();
    // verifyBackwardFunctionality();
    // verifyPagesFunctionalityBackward();
    verifyPagesFunctionalityForward();

    // let txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
    // console.log(await txt.textContent());

    // console.log(
    //     await page.locator("//div[@id='entry_212440']//ul//li//span").textContent()
    // );

    // let tx = await txt.textContent();
    // if (tx === "Showing 1 to 15 of 42 (3 Pages)") {
    //     await page.locator(`//a[@class='page-link'][text()='>|']`).scrollIntoViewIfNeeded();
    //     await page.click(`//a[@class='page-link'][text()='>|']`);
    // }

    // for (let i = 2; i < 4; i++) {
    //     await page.locator(`//a[@class='page-link'][text()=${i}]`).scrollIntoViewIfNeeded();
    //     await page.click(`//a[@class='page-link'][text()=${i}]`);
    //     // let txt = page.locator('//div[@id="entry_212440"]//div[@class="col-sm-6 text-right"]');
    //     console.log(await txt.textContent());
    // }


    // await expect(txt).toContainText("1 to 15 of 42");


    await page.waitForTimeout(3000)
});
