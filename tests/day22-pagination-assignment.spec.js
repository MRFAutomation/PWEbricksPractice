import { test, expect } from '@playwright/test';
const Pagination = require("../pages/PaginationBottom");
const helper = require("../libs/helper");


test(`Verify pagination functionality for show pages`, async ({ page }) => {

    await helper.gotoApplePage(page);

    const pagination = new Pagination(page);

    await pagination.verifyForwardFunctionality();
    await pagination.verifyBackwardFunctionality();
    await pagination.verifyPagesFunctionalityForward();
    await pagination.verifyPagesFunctionalityBackward();

});
