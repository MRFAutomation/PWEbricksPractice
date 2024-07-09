module.exports = {
    url: "https://ecommerce-playground.lambdatest.io",
    email: "mrf.testdevice@gmail.com",
    password: "sXSDaE6xON1LR",
    viewCartXpath: "//a[normalize-space()='View Cart']",
    cartPageErrorMessage: "Products marked with *** are not available in the desired quantity or not in stock!",
    cartPageDulicateError: "//div[@class='alert alert-danger alert-dismissible' and contains(text(),'*** are not available')]",
    cartPageAllRows: "//table[@class='table table-bordered']//tbody//tr",
    cartPageCheckoutButton: "//a[@class='btn btn-lg btn-primary'and text()='Checkout']",
    cartPageContinueButton: "//a[normalize-space()='Continue']",
    checkoutPageExistingRadio: "//label[@for='input-payment-address-existing']",
    checkoutPageTermsCheck: "//label[@for='input-agree']",
    checkoutPageContinueButton: "#button-save",
    confirmPageHeading: "//h1[normalize-space()='Confirm Order']",
    confirmPageConfirmButton: "//button[@id='button-confirm']",
    successPageHeading: "//h1[normalize-space()='Your order has been placed!']",
    confirmText: "Confirm Order",
    successAssertionText: "Your order has been placed!",
    withoutPomUrl: "https://ecommerce-playground.lambdatest.io/index.php?route=product/manufacturer/info&manufacturer_id=8",


}