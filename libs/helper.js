import data from "../data/helperData";


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
    gotoApplePage
}
