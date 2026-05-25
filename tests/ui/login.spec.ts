import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { testUsers } from '../../utils/testData';

test.describe('Login Functionality', () => {

    test('Valid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            testUsers.validUser.username,
            testUsers.validUser.password
        );

        await expect(page).toHaveURL(/inventory/);
    });

    test('Invalid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            testUsers.invalidUser.username,
            testUsers.invalidUser.password
        );

        await expect(
            page.locator('[data-test="error"]')
        ).toBeVisible();
    });

    test('Locked User Login', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();
        await loginPage.login(
            testUsers.lockedUser.username,
            testUsers.lockedUser.password
        );  

        await expect(
            page.locator('[data-test="error"]')
        ).toBeVisible();
    });
});