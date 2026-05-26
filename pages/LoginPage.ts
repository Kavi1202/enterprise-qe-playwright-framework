import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly productTitle: Locator;

    constructor(page: Page) {
        this.page = page;

        // Better locator strategy
        this.usernameInput =
            page.getByPlaceholder('Username');

        this.passwordInput =
            page.getByPlaceholder('Password');

        this.loginButton =
            page.getByRole('button', {
                name: 'Login'
            });

        this.errorMessage =
            page.locator('[data-test="error"]');

        this.productTitle =
            page.locator('[data-test="title"]');
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
    }

    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(
        username: string,
        password: string
    ) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async getErrorText() {
        return await this.errorMessage.textContent();
    }

    async isProductTitleVisible() {
        return await this.productTitle.isVisible();
    }
}