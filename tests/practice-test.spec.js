const { test, chromium } = require("@playwright/test");
const Pagination = require('../pages/Pagination');
const helper = require("../libs/helper");

test.describe('Pagination suite', () => {

    let browser;
    let context;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();

    });

    test(`Verify pagination functionality for show pages`, async () => {
        await helper.gotoApplePage(page);
        const pg = new Pagination(page);
        await pg.verifyPaginationFunctionality();
    }); // End test
}); // End describe