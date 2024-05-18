import { test, expect } from "@playwright/test";

/*
We will continue our practice with checkboxes today. Continuing from last assignment, 
 
Add a new tests in your previous tests folder
Go to "https://the-internet.herokuapp.com/checkboxes" website
If "checkbox 1" is unchecked then do check "checkbox 1" otherwise don’t check
If "checkbox 2" is checked then do uncheck "checkbox 2" otherwise don’t uncheck

*/
test("Checkboxes", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    const checkbox1 = "//input[@type='checkbox'][1]";
    const checkbox2 = "//input[@type='checkbox'][2]";

    const flagChk1 = await page.locator(checkbox1).isChecked();
    const flagChk2 = await page.locator(checkbox2).isChecked();

    if (flagChk1 == false) {
        await page.check(checkbox1);
    }
    if (flagChk2 == true) {
        await page.click(checkbox2);
    }

    expect(await page.locator(checkbox1)).toBeChecked();
    expect(await page.locator(checkbox2).isChecked()).toBeFalsy();
});