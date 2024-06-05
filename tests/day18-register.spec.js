const { test, expect, chromium } = require("@playwright/test");
import loginData from "../data/day18RegisterData";

test.describe("Register Suite", () => {

    let browser;
    let context;
    let regPage;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        regPage = await context.newPage();
    });

    for (let i = 0; i < loginData.length; i++) {

        test(`Test Case ${i + 1} `, async () => {

            await regPage.goto(loginData[i].url);

            await regPage.getByRole('button', { name: 'My account' }).hover();
            await regPage.getByText('Register').click();

            await regPage.getByPlaceholder('First Name').fill(loginData[i].firstName);
            await regPage.getByPlaceholder('Last Name').fill(loginData[i].lastName);

            await regPage.getByPlaceholder('E-Mail')
                .fill(loginData[i].email);
            await regPage.getByPlaceholder('Telephone')
                .fill(loginData[i].tPhone);

            await regPage.fill("#input-password", loginData[i].password);
            await regPage.fill("#input-confirm", loginData[i].password);


            await regPage.getByText('I have read and agree to the ').click();
            await regPage.getByRole('button', { name: 'Continue' }).click();

            await expect(regPage.getByRole('heading', { name: loginData[i].assertText }))
                .toContainText(loginData[i].assertText);
            await expect(regPage.getByRole('link', { name: 'Continue' }))
                .toBeVisible();
        });
    }
});

