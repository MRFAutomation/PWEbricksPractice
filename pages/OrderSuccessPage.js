const { expect } = require("@playwright/test");
import data from "../data/day25data";

export class OrderSuccessPage {
    constructor(page) {
        this.page = page;
        this.orderSuccess = page.locator(data.successPageHeading);
    }

    async validateOrderPlacedSuccessfully() {
        await this.page.waitForSelector(data.successPageHeading);
        await expect(this.orderSuccess).toContainText(data.successAssertionText);
        console.log(await this.orderSuccess.textContent());
        console.log("Test case completed");
        await this.page.waitForTimeout(3000);
    }
}