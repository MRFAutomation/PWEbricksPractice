import { test, expect } from '@playwright/test';

/*
You need to automate the Registration flow of following website
https://ecommerce-playground.lambdatest.io/

1.	Create a separate test file for this work
2.	Add a describe block which says “User Registration Suite”
3.	Add a test in it which will first navigate to the above link and then click on “Registeration” option
4.	Fill out the Register form and click Register
5.	Verify following heading text “Your Account Has Been Created” once you click the register. Also verify that “Continue” button visibility
*/

/* Solution */
test.describe('User Registration Suite', () => {
    test('Registration test', async ({ page }) => {

        await page.goto("https://ecommerce-playground.lambdatest.io/");

        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByText('Register').click();

        await page.getByPlaceholder('First Name').fill("Rana");
        await page.getByPlaceholder('Last Name').fill("Farhan");

        await page.getByPlaceholder('E-Mail')
            .fill((Math.random() + 1).toString(36).substring(7) + "@gmail.com");

        await page.getByPlaceholder('Telephone').fill("12345678900");

        await page.fill("#input-password", "sXSDaE6xON1LR");
        await page.fill("#input-confirm", "sXSDaE6xON1LR");

        await page.click("//label[@for='input-agree']");
        await page.getByRole('button', { name: 'Continue' }).click();

        await expect(page.getByRole('heading', { name: ' Your Account Has Been Created!' }))
            .toContainText(" Your Account Has Been Created!");
        await expect(page.getByRole('link', { name: 'Continue' }))
            .toBeVisible();

    }) // end test
}) // end describe