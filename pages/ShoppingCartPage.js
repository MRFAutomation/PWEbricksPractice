const { expect } = require("@playwright/test");
import data from "../data/day25data";

export class ShoppingCartPage {
    constructor(page) {
        this.page = page;
        this.duplicateItemsError = page.locator(data.cartPageDulicateError);
        this.totalRows = page.locator(data.cartPageAllRows);
        this.checkoutButton = page.locator(data.cartPageCheckoutButton);
        this.chontinueButton = page.locator(data.cartPageContinueButton);
    }

    async removeDuplicateItemsAndClickCheckoutButton() {

        if (await this.duplicateItemsError.isVisible()) {

            await expect(this.duplicateItemsError).toContainText(data.cartPageErrorMessage);

            await this.page
                .locator(data.cartPageAllRows)
                .filter({ hasText: '***' })
                .getByRole('button').nth(1)
                .click();

            await this.page.waitForTimeout(3000);
            await this.page.waitForSelector(data.cartPageAllRows);

            const rowsCount = await this.totalRows.count();

            if (rowsCount > 0) {
                await this.checkoutButton.click();
                await this.page.waitForTimeout(3000);
                await this.page.waitForLoadState();
            }
            else {
                await this.chontinueButton.click();
            }
        } // if - errorTextLocator.isVisible()
    } // removeDuplicateItemsAndClickCheckout
}