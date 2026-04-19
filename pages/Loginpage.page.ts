import { Locator, Page, expect } from "@playwright/test";   
export class LoginPage {
    readonly page: Page;
    readonly loginLink: Locator;
    readonly singupText: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;
    readonly passwordInput: Locator;
    readonly createAccBtn: Locator;
    readonly daySelect: Locator;
    readonly monthSelect: Locator;
    readonly yearSelect: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipCodeInput: Locator;
    readonly mobileNumberInput: Locator;
    constructor(page:Page){
        this.page = page;
        this.loginLink = page.getByText(' Signup / Login');
        this.singupText = page.getByText('New User Signup!');
        this.nameInput = page.getByPlaceholder('Name');
        this.emailInput = page.locator("//input[@data-qa='signup-email']");
        this.signupButton = page.getByRole('button', {name: 'Signup'});
        this.passwordInput = page.locator('#password');
        this.createAccBtn = page.getByRole('button', {name: 'Create Account'});
        this.daySelect = page.locator('#days');
        this.monthSelect = page.locator('#months');
        this.yearSelect = page.locator('#years');
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.addressInput = page.getByPlaceholder('Address');
        this.stateInput = page.getByPlaceholder('State');
        this.cityInput = page.getByPlaceholder('City');
        this.zipCodeInput = page.getByPlaceholder('Zipcode');
        this.mobileNumberInput = page.getByPlaceholder('Mobile Number');
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
        await this.passwordInput.fill('thiru123');
        await this.signupButton.click();
        expect(this.page).toHaveURL(/.*signup/);
        expect(this.page.locator(".required.form-group")).toBeVisible();
        await this.createAccBtn.click();
        await this.daySelect.selectOption('10');
        await this.monthSelect.selectOption('May');
        await this.yearSelect.selectOption('1990');
        await this.firstNameInput.fill('Tester');
        await this.lastNameInput.fill('User');
        await this.addressInput.fill('123 Test Street, Test City, Test Country');
        await this.stateInput.fill('Test State');
        await this.cityInput.fill('Test City');
        await this.zipCodeInput.fill('12345');
        await this.mobileNumberInput.fill('123412311');
        await this.createAccBtn.click();
    }
}