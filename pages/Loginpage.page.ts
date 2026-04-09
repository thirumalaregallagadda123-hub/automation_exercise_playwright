import { Locator, Page, expect } from "@playwright/test";   
export class LoginPage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly singupText: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;
    constructor(page:Page){
        this.page = page;
        this.loginLink = page.getByText(' Signup / Login');
        this.singupText = page.getByText('New User Signup!');
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.locator("//input[@data-qa='signup-email']");
        this.signupButton = page.getByRole('button', {name: 'Signup'});
    }
    async clickLoginOrSignUpLink(){
        await this.loginLink.click();
        expect(this.page).toHaveURL(/.*login/);
        await this.page.waitForSelector("//h2[text()='New User Signup!']");
        expect(this.singupText).toBeVisible();
    }
    async singupFlow(){
        await this.nameInput.fill('Thirumal');
        await this.emailInput.fill('thiru@test.com');
        await this.signupButton.click();
    }
}