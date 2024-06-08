import loginData from '../data/day19LoginData';

class BasePage {

    constructor(page) {
        this.page = page;
    }

    async launchWebsite() {
        await this.page.goto(loginData.webURL)
    }

} module.exports = BasePage;