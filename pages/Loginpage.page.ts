import { Locator, Page, expect } from "@playwright/test";
import { DataGenerator } from "../utils/dataGenerator";
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
    readonly accCreatedText: Locator;
    readonly continueBtn: Locator;
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
        this.firstNameInput = page.getByText('First Name');
        this.lastNameInput = page.getByText('Last Name');
        this.addressInput = page.locator('#address1');
        this.stateInput = page.locator('#state');
        this.cityInput = page.getByText('City');
        this.zipCodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.getByText('Mobile Number');
        this.accCreatedText = page.getByText('Account Created!');
        this.continueBtn = page.getByRole('link', {name: 'Continue'});
    }

    async clickLoginOrSignUpLink(){
        await this.loginLink.click();
        expect(this.page).toHaveURL(/.*login/);
        await this.page.waitForSelector("//h2[text()='New User Signup!']");
        expect(this.singupText).toBeVisible();
    }
    async singupFlow(){
        const dataGenerator = new DataGenerator();
        const { name, email } = dataGenerator.generateRandomCredentials();
        await this.nameInput.fill(name);
        console.log(`Generated Name: ${name}`);
        await this.emailInput.fill(email);
        console.log(`Generated Email: ${email}`);
        await this.signupButton.click();
        expect(this.page).toHaveURL(/.*signup/);
        await this.passwordInput.fill('thiru123');
        //expect(this.page.locator(".required.form-group")).toBeVisible();
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
        await expect(this.page).toHaveURL(/.*account_created/);
        await expect(this.accCreatedText).toBeVisible();
        await this.continueBtn.click();
        await expect(this.page.locator('li a b')).toHaveText(name);
    }
}