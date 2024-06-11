const { expect } = require("@playwright/test");
import data from "../data/day20Data";

class ApplePage {
    constructor(page) {
        this.page = page;
        this.filterSection = this.page.locator(data.filterSection);
        this.searchSection = this.page.locator(data.searchSection);
        this.colorSection = this.page.locator(data.colorSection);
        this.sizeSection = this.page.locator(data.sizeSection);
    }
    async getTitle() {
        console.log(await this.page.title());
    }

    async verifyPageTitle() {
        await expect.soft(this.page).toHaveTitle("Apple");
    }

    async verifyFilterSaction() {
        await expect.soft(this.filterSection).toBeVisible();
    }

    async verifySearchSection() {
        await expect.soft(this.searchSection).toBeVisible();
    }

    async verifyColorSection() {
        await expect.soft(this.colorSection).toBeVisible();
    }

    async verifySizeSection() {
        await expect.soft(this.sizeSection).toBeVisible();
    }

} module.exports = ApplePage;