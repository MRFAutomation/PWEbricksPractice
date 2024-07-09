const { expect } = require("@playwright/test");
import data from "../data/day25data";

export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.radioButton = page.locator(data.checkoutPageExistingRadio);
        this.termsChockbox = page.locator(data.checkoutPageTermsCheck);
        this.continueBtn = page.locator(data.checkoutPageContinueButton);
    }

    async selectExistingBillingAddressRadioButton() {
        await this.page.waitForSelector(data.checkoutPageExistingRadio);
        if (!this.radioButton.isChecked()) {
            await this.radioButton.click();
        }
    }

    async acceptTerms() {
        await this.page.waitForSelector(data.checkoutPageTermsCheck);
        await this.termsChockbox.click();
    }

    async clickContinueButton() {
        await this.page.waitForSelector(data.checkoutPageContinueButton);
        await this.continueBtn.click();
        await this.page.waitForTimeout(3000);
        await this.page.waitForLoadState();
    }
}