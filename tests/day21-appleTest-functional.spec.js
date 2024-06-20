/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */

import { test, expect } from '@playwright/test';
import data from '../data/day21Pagination';

test.describe('Pagination suite', () => {

    for (const dt of data) {
        test(`Verify pagination functionality for show ${dt.pagination} pages`, async ({ page }) => {
            await page.goto(dt.webURL);

            await page.locator(dt.selectLocator).selectOption(dt.pagination);

            let productsCount = page.locator(dt.prodCountLocator);
            let pageValue = await page.locator(dt.pageSelectedLocator).textContent();

            if (pageValue === '15') {
                await expect(productsCount).toHaveCount(15);
            }
            else if (pageValue === '25') {
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
        }); // End test
    } // End for
}); // End describe