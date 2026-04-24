import { BaseUrl } from "../fixtures/baseurl";
import { LoginPage } from "../pages/LoginPage.page";
import { test } from "@playwright/test";

test.describe('Login and Signup tests', () => {
    let baseUrl: BaseUrl;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
    baseUrl = new BaseUrl(page);
    loginPage = new LoginPage(page);
    await baseUrl.navigateToBaseUrl();
});

    test('Verify that user can navigate to login page and Verify that user can signup successfully', async () => {
        await loginPage.clickLoginOrSignUpLink();
    });

    test('Verify that user can signup successfully', { tag: '@regression' }, async () => {
        await loginPage.clickLoginOrSignUpLink();
        await loginPage.singupFlow();
});
});
