import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Functionality', () => {

    test('Valid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(page).toHaveURL(/inventory/);
    });

    test('Invalid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            'standard_user',
            'wrong_password'
        );

        await expect(
            page.locator('[data-test="error"]')
        ).toBeVisible();
    });
});