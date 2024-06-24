import { expect } from '@playwright/test';
import data from '../data/day22-pagination';



class Pagination {

    constructor(page) {
        this.page = page;
        this.page3Locator = this.page.locator(data.page3Xpath);
        this.page1Locator = this.page.locator(data.page1Xpath);
        this.nextBtnLocator = this.page.locator(data.nextBtnXpath);
        this.backBtnLocator = this.page.locator(data.backBtnXpath);
        this.assertTextLocator = this.page.locator(data.assertionTextXpath);
        this.selectedPageLocator = this.page.locator(data.pageSelectedXpath);
        this.unselectedPagesList = this.page.$$(data.pagesNotSelectedXpath);
    }


    async verifyForwardFunctionality() {

        let selectedPageText = await this.selectedPageLocator.textContent();

        if (selectedPageText === '1') {

            await expect(await this.assertTextLocator).toContainText(data.assertTxt1to15);

            await this.nextBtnLocator.click();
            await expect(await this.assertTextLocator).toContainText(data.assertTxt16to30);

            await this.page.getByRole('link', { name: '>|' }).click();
            await expect(await this.assertTextLocator).toContainText(data.assertTxt31to42);
        }
        else {

            await this.page1Locator.click();
            await expect(await this.assertTextLocator).toContainText(data.assertTxt1to15);

            await this.nextBtnLocator.click();
            await expect(await this.assertTextLocator).toContainText(data.assertTxt16to30);

            await this.page.getByRole('link', { name: '>|' }).click();
            await expect(this.assertTextLocator).toContainText(data.assertTxt31to42);
        }
    }

    async verifyBackwardFunctionality() {

        let selectedPageText = await this.selectedPageLocator.textContent();

        if (selectedPageText === '3') {

            await expect(await this.page.assertTextLocator).toContainText(data.assertTxt31to42);

            await this.backBtnLocator.click();
            await expect(this.assertTextLocator).toContainText(data.assertTxt16to30);

            await this.page.getByRole('link', { name: '|<' }).click();
            await expect(await this.assertTextLocator).toContainText(data.assertTxt1to15);
        }
        else {

            await this.page3Locator.click();
            await expect(await this.assertTextLocator).toContainText(data.assertTxt31to42);

            await this.backBtnLocator.click();
            await expect(await this.assertTextLocator).toContainText(data.assertTxt16to30);

            await this.page.getByRole('link', { name: '|<' }).click();
            await expect(await this.assertTextLocator).toContainText(data.assertTxt1to15);

        }
    }
    async verifyPagesFunctionalityForward() {


        let unSelectedPages = await this.page.$$("//div[@id='entry_212440']//ul//li//a");

        await expect(await this.assertTextLocator).toContainText(data.assertTxt1to15);
        console.log(await this.assertTextLocator.textContent());

        for (let i = 2; i < await unSelectedPages.length; i++) {
            await this.page.click(`//a[@class='page-link'][text()=${i}]`);
            console.log(await this.assertTextLocator.textContent());
        }

    }
    async verifyPagesFunctionalityBackward() {


        let selectedPageText = await this.selectedPageLocator.textContent();

        if (selectedPageText === '1') {
            await this.page3Locator.click();
            // await this.page.click(`//a[@class='page-link'][text()='3']`);
            console.log(await this.assertTextLocator.textContent());
            let unSelectedPages = await this.page.$$(data.pagesNotSelectedXpath);
            for (let i = unSelectedPages.length - 2; i > 0; i--) {
                await this.page.locator(`//a[@class='page-link'][text()=${i}]`).scrollIntoViewIfNeeded();
                await this.page.click(`//a[@class='page-link'][text()=${i}]`);
                console.log(await this.assertTextLocator.textContent());
            }
        }
    }
}
module.exports = Pagination;