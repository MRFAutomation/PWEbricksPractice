const { expect } = require("@playwright/test");
import data from "../data/day20Data";

class MyAccountPage {
    constructor(page) {
        this.page = page;
        this.megaMenuBtn = page.getByRole('button', { name: 'Mega Menu' });
        this.phones = page.$$(data.phonesList);
    }

    async moveToMegaMenu() {
        await this.megaMenuBtn.hover();
    }

    async verifyAndClickAppleLink() {
        for (const phone of await this.phones) {
            let phoneTxt = await phone.textContent();
            let trimTxt = phoneTxt.trim();

            if (trimTxt.includes("Apple")) {
                await phone.click();
                break;
            }
        }
    }
}
module.exports = MyAccountPage;