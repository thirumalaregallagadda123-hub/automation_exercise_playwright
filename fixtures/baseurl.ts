import {Locator, Page} from '@playwright/test';
export class BaseUrl {
    readonly page: Page;
    readonly baseUrl: string;
    constructor(page: Page) {
        this.page = page;
        this.baseUrl = 'https://automationexercise.com/';
    }
    async navigateToBaseUrl() {
        await this.page.goto(this.baseUrl);
    }
}