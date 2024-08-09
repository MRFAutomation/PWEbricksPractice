import data from "../data/helperData";
import { expect } from "@playwright/test";

async function loginFunctionality(page) {

    await Promise.all([

        page.waitForNavigation({ waitUntil: "networkidle" }),

        await page.getByRole('button', { name: 'My account' }).hover(),
        await page.getByText('Login').click(),
        await page.getByPlaceholder('E-Mail Address').fill((data.email)),
        await page.fill("#input-password", data.password),
        await page.getByRole('button', { name: 'Login' }).click(),

        await expect(page).toHaveTitle(/.*My Account/),
        await expect(page).toHaveURL(data.loginAssertionURL),

    ])
}
async function logoutFunctionality(page) {

    await Promise.all([

        page.waitForNavigation({ waitUntil: "networkidle" }),

        await page.getByRole('button', { name: 'My account' }).hover(),
        await page.getByRole('link', { name: 'Logout', exact: true }).click(),
        await expect(page.locator('h1')).toContainText('Account Logout'),
        await page.getByRole('link', { name: 'Continue' }).click()
    ])
}

async function gotoApplePage(page) {

    await Promise.all([

        page.waitForNavigation({ waitUntil: "networkidle" }),
        await page.goto(data.webURL),
        await page.getByRole('button', { name: 'Mega Menu' }).hover(),

        await page.
            locator("div#entry281_216477 li").
            filter({ hasText: 'Apple' }).
            getByRole('link', { name: 'Apple' }).
            click(),
    ])
}


module.exports = {
    gotoApplePage,
    loginFunctionality,
    logoutFunctionality
}
