import data from "../data/day25data";
import { test } from '@playwright/test'
import { ApplePage } from '../pages/ApplePage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { OrderConfirmPage } from '../pages/OrderConfirmPage';
import { OrderSuccessPage } from '../pages/OrderSuccessPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
const helper = require("../libs/helper");

test.describe('Add to Cart test Suite', () => {

    test('Add to Cart test with POM', async ({ page }) => {

        await page.goto(data.url);
        await helper.gotoApplePage(page);

        const applePage = new ApplePage(page);
        await applePage.addMultipleProductsToCart();
        await applePage.clickViewCartButton();

        const shoppingCartPage = new ShoppingCartPage(page);
        await shoppingCartPage.removeDuplicateItemsAndClickCheckoutButton();

        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.selectExistingBillingAddressRadioButton();
        await checkoutPage.acceptTerms();
        await checkoutPage.clickContinueButton();

        const orderConfirmPage = new OrderConfirmPage(page);
        await orderConfirmPage.clickOnConfirmOrderButton();

        const orderSuccessPage = new OrderSuccessPage(page);
        await orderSuccessPage.validateOrderPlacedSuccessfully();s
    });
})

