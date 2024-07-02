import { test, expect } from '@playwright/test';
import data from '../data/day24data';


test('Modify username', async ({ page }) => {

    await page.goto(data.editInformationPageURL);
    await expect(page.getByRole('heading', { name: data.editInformationHeading })).
        toHaveText(data.editInformationHeading);
});

test('Add new address', async ({ page }) => {

    await page.goto(data.addressBookPageURL);
    await expect(page.getByRole('heading', { name: data.addressBookHeading })).
        toHaveText(data.addressBookHeading);
});
