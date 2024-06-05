import { test, expect } from '@playwright/test';
const data = JSON.parse(JSON.stringify(require("../data/day14RegisterData.json")));
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
    test('Boundary value test cases for First Name and Last Name fields', async ({ page }) => {

        await page.goto(data.url);

        await page.getByRole('button', { name: 'My account' }).hover();
        await page.getByText('Register').click();

        await page.getByPlaceholder('First Name').fill(data.firstName1);
        await page.getByPlaceholder('Last Name').fill(data.lastName33);

        await page.getByPlaceholder('E-Mail')
            .fill((Math.random() + 1).toString(36).substring(7) + data.email);

        await page.getByPlaceholder('Telephone').fill(data.tPhone);

        await page.fill("#input-password", data.password);
        await page.fill("#input-confirm", data.password);

        await page.getByText(data.agreeText).click();
        await page.getByRole('button', { name: 'Continue' }).click();

        if (data.firstName1.length < 1 || data.firstName1.length > 32) {
            await expect.soft(page.getByText(data.fnAssertText))
                .toHaveText(data.fnAssertText);
        }

        if (data.lastName33.length < 1 || data.lastName33.length > 32) {
            await expect.soft(page.getByText(data.lnAssertText))
                .toHaveText(data.lnAssertText);
        }
    })
})