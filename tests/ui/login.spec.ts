import { test, expect } from '../../fixtures/baseFixture';
import { testUsers } from '../../utils/testData';

test.describe('Login Functionality', () => {

    test('Valid Login', async ({ page, loginPage }) => {

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            testUsers.validUser.username,
            testUsers.validUser.password
        );

        await expect(page).toHaveURL(/inventory/);
    });

    test('Invalid Login', async ({ loginPage, page }) => {

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            testUsers.invalidUser.username,
            testUsers.invalidUser.password
        );

        await expect(
            page.locator('[data-test="error"]')
        ).toBeVisible();
    });

    test('Locked User Login', async ({ loginPage, page }) => {

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            testUsers.lockedUser.username,
            testUsers.lockedUser.password
        );

        await expect(
            page.locator('[data-test="error"]'
        )).toContainText('locked out');
    });
});