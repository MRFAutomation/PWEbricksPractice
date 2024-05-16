import { test, expect } from "@playwright/test";
test("Checkboxes", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    const checkbox1 = "//input[@type='checkbox'][1]";
    const checkbox2 = "//input[@type='checkbox'][2]";

    await page.check(checkbox1);
    await page.click(checkbox2);

    expect(await page.locator(checkbox1)).toBeChecked();
    expect(await page.locator(checkbox2).isChecked()).toBeFalsy();

});