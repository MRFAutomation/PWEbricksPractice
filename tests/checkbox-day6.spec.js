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

    /* Here we used first and last methods because we already know this page have only two checkboxes */
    const eleChkBx1 = page.getByRole("checkbox").first();
    const eleChkBx2 = page.getByRole("checkbox").last();

    const flagChkBx1 = await eleChkBx1.isChecked();
    const flagChkBx2 = await eleChkBx2.isChecked();

    if (flagChkBx1 == false) {
        await eleChkBx1.click();
    }
    if (flagChkBx2 == true) {
        await eleChkBx2.click();
    }

    expect(await eleChkBx1).toBeChecked();
    expect(await eleChkBx2.isChecked()).toBeFalsy();

    await page.waitForTimeout(3000)
});