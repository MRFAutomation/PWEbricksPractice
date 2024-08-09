import { test, request, expect } from '@playwright/test';
test.skip('HRM Login Test', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    await page.waitForTimeout(3000);
});

test.skip('API Get Call', async () => {
    const apiContext = request.newContext();
    const apiResponse = (await apiContext).get("https://reqres.in/api/users?page=2");
    const status = (await apiResponse).status();
    console.log(status);
}); // test


test.skip('Cookies', async ({ browser }) => {
    const brContext = await browser.newContext();
    const page = await brContext.newPage();

    const cookies = [
        { name: 'orangehrm', value: '93353e267f3165b88e48c6b176bb3cda', url: 'https://opensource-demo.orangehrmlive.com' }
    ]
    await brContext.addCookies(cookies);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
});
test.skip('PN', async ({ browser }) => {
    const brContext = await browser.newContext();
    const page = await brContext.newPage();

    const cookies = [
        {
            name: 'pnai-session',
            value: 'MTcyMjIzNDkzNHxOd3dBTkVaRldGRlJURFpUVlV4U1JFd3pORTVQTmxwVlRGWlVSVXhHU1VGUVJrdFVTa0pFTlVKTlZrWk1OVkkzVkZKTU5EUlZUbEU9fJRMKzRajRoikLRn8Fiiph_Mn6F_WvGvXcn_RtXCqkvE',
            url: 'https://pn.staging.paradigmnetworks.ai'
        }
    ]
    await brContext.addCookies(cookies);
    await page.goto('https://pn.staging.paradigmnetworks.ai/chat');
    await page.waitForLoadState('networkidle');
    await page.waitForLoadState('networkidle');
    await page.getByPlaceholder('Select Language Model').waitFor();
    await page.getByPlaceholder('Select Language Model').selectOption('Mistral Medium');
    await page.getByPlaceholder('Send Message...').fill('Hello I am test the PN chat AI product', { delay: 100 });
    const array = ['Previous Context', 'Verify Response', 'Apply Policies', 'Enrich Prompt'];
    for (let ar of array) {
        if (ar.includes('Previous Context')) {
            const bool = await page.getByText(ar).isChecked();
            await page.getByText(ar).click();
            break;
        } // if
    } // for
    await page.click('//a[@aria-label="Observability"]');
    await page.waitForLoadState('networkidle');
    console.table(array);
    // await page.locator('//div[@class="MuiSelect-select MuiSelect-standard MuiInputBase-input MuiInput-input MuiInputBase-inputSizeSmall css-icpe0q"]').last().click();
    await page.getByRole('link', { name: 'Policies' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'Add' }).click();
    await page.getByPlaceholder('Policy Name').fill('Test Name');
    await page.getByPlaceholder('Policy Description').fill('Test Description');
    await page.locator('//h5[text()="Prompt Enhancement"]/parent::div//input[@type="checkbox"]').click();
    await page.click('//span[text()="Google Drive"]');
    await page.locator('//h5[text()="Response Verification"]/parent::div//input[@type="checkbox"]').check();
    await page.getByText('OpenAI ChatGPT-4o').click();

});

test.skip('Read Text Box', async ({ page }) => {

    await page.goto('https://yourwebsite.com');

    const textboxLocator = page.locator('#myTextbox');

    const textboxValue = await textboxLocator.inputValue();

    console.log(textboxValue);
});

test.skip('Login Test', async ({ page }) => {
    /* write the login code below */
});

test('Handle Navigation Bar', async ({ browser }) => {

    const prompt = 'Who is MBS?';

    const context = await browser.newContext();
    const page = await context.newPage();

    const cookies = [
        {
            name: 'pnai-session',
            value: 'MTcyMjI0NjIwMnxOd3dBTkVaRldGRlJURFpUVlV4U1JFd3pORTVQTmxwVlRGWlVSVXhHU1VGUVJrdFVTa0pFTlVKTlZrWk1OVkkzVkZKTU5EUlZUbEU9fL7U8Sd_FSkHJ0AKjO-vdulSZeM_JcfLiIs2mC8QSx_b',
            url: 'https://pn.staging.paradigmnetworks.ai'
        }
    ]
    await context.addCookies(cookies);
    
    await page.goto('https://pn.staging.paradigmnetworks.ai/chat');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle('Paradigm Networks');

    await page.getByPlaceholder('Send Message...').fill(prompt);
    await page.click('button.send');
    await page.locator('svg.fs-5.spin').waitFor({ state: 'visible' })
    await page.locator('svg.fs-5.spin').waitFor({ state: 'hidden' })

    await page.locator('//span[contains(@aria-label,"Factuality")]').waitFor({ state: 'visible' });

    await page.click("a[href*='detail']");
});
