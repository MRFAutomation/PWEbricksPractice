import { test, expect } from '@playwright/test';
import data from "../data/day25data";

test.describe('Add to Cart test Suite', () => {

    test('Add to Cart without POM', async ({ page }) => {

        await page.goto(data.withoutPomUrl);

        for (let i = 32; i <= 36; i += 2) {

            await page.locator(`#mz-product-grid-image-${i}-212439`).hover();
            await page.waitForTimeout(1000);
            await page.click(`//button[@class="btn btn-cart cart-${i}"]`);
        }

        await page.click(data.viewCartXpath);
        await page.waitForTimeout(2000);
        await page.waitForLoadState();

        const errorTextLocator = page.locator(data.cartPageDulicateError);

        if (await errorTextLocator.isVisible()) {

            await expect(page.locator(data.cartPageDulicateError)).toContainText(data.cartPageErrorMessage);

            console.log(await errorTextLocator.textContent());

            await page
                .locator(data.cartPageAllRows)
                .filter({ hasText: '***' })
                .getByRole('button').nth(1)
                .click();

            await page.waitForTimeout(2000);

            await page.waitForSelector(data.cartPageAllRows);
            const rowsCount = await page.locator(data.cartPageAllRows).count();
            console.log("Total number of rowsare: ", rowsCount);

            if (rowsCount > 0) {
                await page.click(data.cartPageCheckoutButton);
            }
            else {
                const continueButton = page.locator(data.cartPageContinueButton);
                await continueButton.click();
            }
        }

        await page.waitForLoadState();
        const existingAddressRadio = page.locator(data.checkoutPageExistingRadio);

        if (!existingAddressRadio.isChecked()) {
            await existingAddressRadio.click();
        }

        await page.click(data.checkoutPageTermsCheck);
        await page.click(data.checkoutPageContinueButton);

        await page.waitForLoadState();

        console.log(await page.locator(data.confirmPageHeading).textContent());
        await page.click(data.confirmPageConfirmButton);

        await page.waitForLoadState();
        await expect(page.locator(data.successPageHeading)).toContainText(data.successAssertionText);

        console.log(await page.locator(data.successPageHeading).textContent());
        console.log("Test case completed");
    });
})

