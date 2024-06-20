/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test, expect } from '@playwright/test';
import data from '../data/day21-pagination';

test.describe('Pagination suite', () => {


    test(`Verify pagination functionality for show pages`, async ({ page }) => {
        await page.goto(data.webURL);

        let productsCount = page.locator(data.prodCountLocator);
        let pageValue = await page.locator(data.pageSelectedLocator).textContent();

        if (pageValue === '15') {
            await expect(productsCount).toHaveCount(15);
        }
        for (let i = 25; i <= 100; i += 25) {
            let option = String(i);
            await page.locator(data.selectLocator).selectOption(option);

            productsCount = page.locator(data.prodCountLocator);
            pageValue = await page.locator(data.pageSelectedLocator).textContent();
            if (pageValue === '25') {
                await expect(productsCount).toHaveCount(25);
            }
            else if (pageValue === '50') {
                await expect(productsCount).toHaveCount(42);
            }
            else if (pageValue === '75') {
                await expect(productsCount).toHaveCount(42);
            }
            else if (pageValue === '100') {
                await expect(productsCount).toHaveCount(42);
            }

            await page.waitForTimeout(2000);
        }
    }); // End test

}); // End describe