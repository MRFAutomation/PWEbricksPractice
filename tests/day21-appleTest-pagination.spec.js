const { test } = require("@playwright/test");
const Pagination = require('../pages/Pagination');
const helper = require("../libs/helper");

test.describe('Pagination suite', () => {
    test(`Verify pagination functionality for show pages`, async ({ page }) => {
        await helper.gotoApplePage(page);
        const pg = new Pagination(page);
        await pg.verifyPaginationFunctionality();
    });
}); 