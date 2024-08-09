import { test, expect } from '@playwright/test';
import data from "../data/day26data";
import helper from '../libs/helper';

test.describe('Whishlist test suite', () => {

    test.skip('For a logged-out user, verify that user navigate to Login page, when click on wishlist link from header', async ({ page }) => {

        await page.goto(data.url);
        await page.getByLabel("Wishlist").click();

        await expect(page.getByRole('heading', { name: 'New Customer' })).toContainText("New Customer");
        await expect(page.getByRole('heading', { name: 'Returning Customer' })).toContainText("Returning Customer");
    });

    test.skip('Verify that user can navigate to wishlist page when click on wishlist link from header', async ({ page }) => {

        await page.goto(data.url);

        await page.getByLabel("Wishlist").click();

        let txt = await page.getByRole('heading', { name: 'Returning Customer' }).textContent();
        if (txt.includes("Returning Customer")) {
            await page.fill("#input-email", data.user);
            await page.fill("#input-password", data.pswd);
            await page.getByRole('button', { name: 'Login' }).click();
            expect(await page.title()).toContain("My Wish List");
        }
        else {
            expect(await page.title()).toContain("My Wish List");
        }
    });

    test.skip('For a logged-out user, verify that login alert box appear on top right with login and register links', async ({ page }) => {
        await page.goto(data.applePageUrl);
        await page.locator(`#mz-product-grid-image-34-212439`).hover();
        await page.waitForSelector("//button[@class='btn btn-wishlist wishlist-34 ']//i[@class='fas fa-heart']");
        await page.click("//button[@class='btn btn-wishlist wishlist-34 ']//i[@class='fas fa-heart']");

        await page.waitForSelector("//div[@id='notification-box-top']//span[@class='mr-auto']");
        await expect(page.locator("//div[@id='notification-box-top']//span[@class='mr-auto']")).toBeVisible();
        await expect(page.locator("//div[@id='notification-box-top']//span[@class='mr-auto']")).toContainText("Login");
    });

    test.skip('Verify that user can able to add multiple products in whishlist', async ({ page }) => {
        await page.goto(data.url);
        await helper.loginFunctionality(page);
        await helper.gotoApplePage(page);

        await page.waitForTimeout(3000);

        /* Logic to add multiple products to whishlist */
        for (let i = 32; i <= 36; i += 2) {

            await page.locator(`#mz-product-grid-image-${i}-212439`).hover();
            await page.waitForTimeout(1000);
            //     await page.click(`//button[@class='btn btn-cart cart-${i}']`);
            await page.click(`//button[@class="btn btn-wishlist wishlist-${i} "]`);
            await page.waitForTimeout(2000);
        }

    });

    test('Verify that user is able to add an item in whishlist', async ({ page }) => {
        const searchProduct = "MacBook Pro";
        await page.goto(data.url);
        await helper.loginFunctionality(page);
        await helper.gotoApplePage(page);

        const productLocators = await page.$$("h4.title");
        for (const productLocator of productLocators) {
            console.log(await productLocator.textContent());
            if (searchProduct === await productLocator.textContent()) {
                await productLocator.click();
                break;
            } // if
        } // for

        await page.waitForTimeout(2000);
        // await page.locator("#mz-product-grid-image-32-212439").click();
        await page.locator("//div[@id='image-gallery-216811']//i[@class='far fa-heart']").click();
        await page.locator("//a[contains(text(),'Wish List')]").click();
        // await page.waitForTimeout(3000);

        await page.waitForSelector("//table[@class='table table-hover border']//tbody//tr");
        await expect(page.locator('h1')).toContainText('My Wish List');
        const rowCount = await page.locator("//table[@class='table table-hover border']//tbody//tr").count();
        console.log("Row count : ", rowCount);
        const txt = await page
            .locator("//table[@class='table table-hover border']//tbody//tr")
            .filter({ hasText: searchProduct })
            .getByRole('link').nth(1)
            .textContent();

        console.log("Text : ", txt);

        await page
            .locator("//table[@class='table table-hover border']//tbody//tr")
            .filter({ hasText: searchProduct })
            .getByRole('link').nth(2)
            .click();

        // await page.waitForTimeout(3000);
        await page.getByRole('link', { name: 'Continue' }).click();

        // await page.waitForTimeout(3000);
        await helper.logoutFunctionality(page);


    });

    test.skip('Verify that user can add a particular product of his/her choice in whishlist', async ({ page }) => {
        const productName = "iPod Classic";
        await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8");
        const locators = await page.$$("h4.title");
        for (const loc of locators) {
            console.log(await loc.textContent());
            if (productName === await loc.textContent()) {
                await loc.click();
                break;
            }

        }


    });







})
