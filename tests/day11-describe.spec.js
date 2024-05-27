import { test, expect } from '@playwright/test';

/*
Select any website of your choice
Create a two describe block in a single test file.
Add 3 test cases to describe block 1 and 4 test cases to describe block 2
Your test file should use following function atleast one time
getByLabel
getByPlaceholder
getByText
getByAltText
getByTitle
getByRole
getByTestDataID
Xpath
*/

test.describe('Three tests - block1', () => {
    test('Test 1 - getByRole', async ({ page }) => {
        await page.goto('https://selectorshub.com/xpath-practice-page/');
        await page.getByRole('textbox', { name: 'Enter your company' }).fill('Selector Hub');
    })

    test('Test 2 - getByText', async ({ page }) => {
        await page.goto('https://selectorshub.com/xpath-practice-page/');
        await page.getByText('Checkout here').click();
    })

    test('Test 3 - getByPlaceholder', async ({ page }) => {
        await page.goto("https://www.letskodeit.com/practice");
        await page.getByPlaceholder('Start Typing...').fill("get by placeholder");
    })
}) // end describe block 1

test.describe('Four tests - block2', () => {
    test('Test 1 - getByAltText', async ({ page }) => {
        await page.goto("https://www.expedia.com/helpcenter/");
        await page.getByAltText('Expedia logo').first().click();
    })

    test('Test 2 - getByTitle', async ({ page }) => {
        await page.goto('https://selectorshub.com/xpath-practice-page/');
        console.log(await page.getByTitle('Click to donate').textContent());
    })

    test('Test 3 - getByLabel', async ({ page }) => {
        await page.goto("https://login.salesforce.com/");
        await page.getByLabel('Remember me').check();
    })

    test('Test 4 - getByTestId', async ({ page }) => {
        await page.goto("https://main--demo-qasite.netlify.app/test.html");
        await expect(page.getByTestId('1')).toContainText("John");
    })
})