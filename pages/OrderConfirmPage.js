const { expect } = require("@playwright/test");
import data from "../data/day25data";

export class OrderConfirmPage {
    constructor(page) {
        this.page = page;
        this.confirmHeading = page.locator(data.confirmPageHeading);
        this.confirmButton = page.locator(data.confirmPageConfirmButton);

    }

    async clickOnConfirmOrderButton() {
        await this.page.waitForSelector(data.confirmPageHeading);
        await expect(this.confirmHeading).toContainText(data.confirmText);

        await this.confirmButton.click();
        await this.page.waitForTimeout(3000);
        await this.page.waitForLoadState();
    }
}