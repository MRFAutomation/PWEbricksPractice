import { test, expect } from '@playwright/test';
import data from '../data/day21Pagination';
const helper = require("../libs/helper");


class Pagination {

    constructor(page) {
        this.page = page;
        this.productsCount = page.locator(data[0].prodCountLocator);
        this.pageValue = page.locator(data[0].pageSelectedLocator);

    }

    async verifyPaginationFunctionality() {

        let firstPage = await this.pageValue.textContent()
        if (firstPage === '15') {
            await expect(this.productsCount).toHaveCount(15);
        }
        for (let i = 25; i <= 100; i += 25) {
            let option = String(i);
            await this.page.locator(data[0].selectLocator).selectOption(option);

            this.productsCount = this.page.locator(data[0].prodCountLocator);
            this.pageValue = await this.page.locator(data[0].pageSelectedLocator).textContent();
            if (await this.pageValue === '25') {
                await expect(this.productsCount).toHaveCount(25);
            }
            else if (await this.pageValue === '50') {
                await expect(this.productsCount).toHaveCount(42);
            }
            else if (await this.pageValue === '75') {
                await expect(this.productsCount).toHaveCount(42);
            }
            else if (await this.pageValue === '100') {
                await expect(this.productsCount).toHaveCount(42);
            }
        }
    }
}
module.exports = Pagination;