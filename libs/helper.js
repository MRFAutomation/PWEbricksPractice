import data from "../data/helperData";


async function gotoApplePage(page) {

    await Promise.all([

        page.waitForNavigation({ waitUntil: "networkidle" }),

        // await page.goto(data.webURL),
        await page.getByRole('button', { name: 'Mega Menu' }).hover(),

        await page.
            locator("div#entry281_216477 li").
            filter({ hasText: 'Apple' }).
            getByRole('link', { name: 'Apple' }).
            click(),
    ])
}

async function addMulitpleProductToCart(page) {

    for (let i = 32; i <= 36; i += 2) {

        await page.locator(`#mz-product-grid-image-${i}-212439`).hover();
        await page.waitForTimeout(1000);

        await page.click(`//button[@class="btn btn-cart cart-${i}"]`);

    } // for loop
    await page.click("//a[normalize-space()='View Cart']");
    await page.waitForTimeout(2000);

    await page.waitForLoadState();
    const errorTextLocator = page.locator("//div[@class='alert alert-danger alert-dismissible' and contains(text(),'*** are not available')]");
    if (await errorTextLocator.isVisible()) {

        console.log(await errorTextLocator.textContent());
        await page
            .locator('//table[@class="table table-bordered"]//tbody//tr')
            .filter({ hasText: '***' })
            .getByRole('button').nth(1)
            .click();
        // await page.waitForTimeout(2000);
        // const continueButton = page.locator("//a[normalize-space()='Continue']");
        // await continueButton.click();
        await page.waitForTimeout(2000);

        const rowsCount = await page.locator("//table[@class='table table-bordered']//tbody//tr").count();
        console.log("Total number of rowsare: ", rowsCount);

        if (rowsCount > 0) {
            await page.click("//a[@class='btn btn-lg btn-primary'and text()='Checkout']");
            // await page.waitForTimeout(6000);
        }
        else {
            const continueButton = page.locator("//a[normalize-space()='Continue']");
            await continueButton.click();
        }
    } // if - errorTextLocator.isVisible()
    await page.waitForLoadState();
    const existingAddressRadio = page.locator("//label[@for='input-payment-address-existing']");
    if (!existingAddressRadio.isChecked()) {
        await page.click("//label[@for='input-payment-address-existing']");
    }
    await page.click("//label[@for='input-agree']");
    await page.click("#button-save");

    await page.waitForLoadState();
    console.log(await page.locator("//h1[normalize-space()='Confirm Order']").textContent());
    await page.click("//button[@id='button-confirm']");

    await page.waitForLoadState();
    console.log(await page.locator("//h1[normalize-space()='Your order has been placed!']").textContent());
    console.log("Test case completed");
}
async function addOneProductToCart(page) {

    await page.locator("#mz-product-grid-image-32-212439").hover();

    await page.click("//button[@class='btn btn-cart cart-32']");
    await page.click("//a[normalize-space()='View Cart']");


    await page.waitForLoadState();

    const errorTextLocator = await page.locator("//div[@class='alert alert-danger alert-dismissible' and contains(text(),'*** are not available')]");
    if (await errorTextLocator.isVisible()) {

        console.log(await errorTextLocator.textContent());

        await page
            .locator('//table[@class="table table-bordered"]//tbody//tr')
            .filter({ hasText: '***' })
            .getByRole('button').nth(1)
            .click();

        const continueButton = page.locator("//a[normalize-space()='Continue']");
        await continueButton.click();
        await page.waitForLoadState();
    }
    else {
        await page.click("//a[@class='btn btn-lg btn-primary'and text()='Checkout']");
        await page.waitForLoadState();
    }
}

module.exports = {
    gotoApplePage,
    addOneProductToCart,
    addMulitpleProductToCart
}
