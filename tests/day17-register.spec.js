import { test, expect } from '@playwright/test';
import regData, { } from "../data/day17RegisterData";
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

    for (const data of regData) {

        test(`Registration test ${data.testId}`, async ({ page }) => {

            await page.goto(data.url);

            await page.getByRole('button', { name: 'My account' }).hover();
            await page.getByText('Register').click();

            await page.getByPlaceholder('First Name').fill(data.firstName);
            await page.getByPlaceholder('Last Name').fill(data.lastName);

            await page.getByPlaceholder('E-Mail')
                .fill(data.email);
            await page.getByPlaceholder('Telephone')
                .fill(data.tPhone);

            await page.fill("#input-password", data.password);
            await page.fill("#input-confirm", data.password);


            await page.getByText('I have read and agree to the ').click();
            await page.getByRole('button', { name: 'Continue' }).click();

            await expect(page.getByRole('heading', { name: data.assertTextHeading }))
                .toContainText(data.assertTextHeading);
            await expect(page.getByRole('link', { name: 'Continue' }))
                .toBeVisible();

        }) // end test
    } // end for
}) // end describe