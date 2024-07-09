const { expect } = require("@playwright/test");
import data from "../data/day25data";
import { ShoppingCartPage } from '../pages/ShoppingCartPage';

export class ApplePage {
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

    async addMultipleProductsToCart() {
        await this.page.waitForLoadState();

        for (let i = 32; i <= 36; i += 2) {
            await this.page.locator(`#mz-product-grid-image-${i}-212439`).hover();
            await this.page.click(`//button[@class="btn btn-cart cart-${i}"]`);
            await this.page.waitForTimeout(3000);
        } // for loop
    } // addMultipleProductsToCart

    async clickViewCartButton() {
        await this.page.click(data.viewCartXpath);
        await this.page.waitForTimeout(2000);
        await this.page.waitForLoadState();
    }

}