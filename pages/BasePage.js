import loginData from '../data/day19LoginData';

class BasePage {

    constructor(page) {
        this.page = page;
    }

    async launchWebsite() {
        await this.page.goto(loginData.webURL)
    }
    async enterEmail() {
        await this.email.fill((loginData.email));
    }

} module.exports = BasePage;