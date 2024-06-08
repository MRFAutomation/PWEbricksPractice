import { test, expect } from '@playwright/test';
import loginDataDay17 from '../data/day17LoginData';
import { off } from 'process';

/*
If I add the test in a loop then test cases will run according the iterations set in the loop. In the screenshot below, test will run for 5 times according to the loop settings.
Do following for login and register test cases
 
Add 5 different users information in register.js data file
Add a loop over Register test case and register all users from "register.js" file using single register test case
At the end you will see that 5 test cases will be executed based on the number of users available in register.js data file
 
Repeat above steps for Login test cases

*/

/* Solution */
test.describe('Login Test Suite', () => {


    for (const loginData of loginDataDay17) {

        test(`Login Test ${loginData.testId}`, async ({ page }) => {

            await page.goto(loginData.webURL);

            await page.getByRole('button', { name: 'My account' }).hover();
            await page.getByText('Login').click();
            await page.getByPlaceholder('E-Mail Address').fill((loginData.email));
            await page.fill("#input-password", loginData.password);
            await page.getByRole('button', { name: 'Login' }).click();

            if (await page.getByText(loginData.errortxt).isVisible()) {
                await expect(page.getByText(loginData.errortxt)).toHaveText(loginData.errorMsgCredentialsNotMatched);
            }

            if (await page.getByText(loginData.loginLimitExceed).isVisible()) {
                await expect(page.getByText(loginData.loginLimitExceed)).toHaveText(loginData.loginLimitExceed);
            }

            if (await page.getByRole('heading', { name: loginData.loginHeading }).isVisible()) {
                await expect(page.getByRole('heading', { name: loginData.loginHeading })).toHaveText(loginData.loginHeading);
            }

        })
    }
})