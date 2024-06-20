import data from "../data/day20Data";


async function gotoApplePage(page) {

    await page.getByRole('button', { name: 'Mega Menu' }).hover();

    await page.
        locator("div#entry281_216477 li").
        filter({ hasText: 'Apple' }).
        getByRole('link', { name: 'Apple' }).
        click();

    // for (const phone of await this.phones) {
    //     let phoneTxt = await phone.textContent();
    //     let trimTxt = phoneTxt.trim();

    //     if (trimTxt.includes("Apple")) {
    //         await phone.click();
    //         break;
    //     }
    // }
    await page.waitForTimeout(2000);
}
module.exports = {
    gotoApplePage
}
