import loginData from '../data/day19LoginData';
const { expect } = require("@playwright/test");

class LoginPage {

    constructor(page) {
        this.page = page;
        this.email = page.getByPlaceholder('E-Mail Address');
        this.password = page.locator("#input-password");
    }

    async enterEmail() {
        await this.email.fill((loginData.email));
    }

    async enterPassword() {
        await this.password.fill(loginData.password);
    }

    async clickLogin() {
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async verifyLoginSuccess() {
        await expect(this.page.getByRole('heading', { name: loginData.loginHeading })).toHaveText(loginData.loginHeading);
    }
}
module.exports = LoginPage;