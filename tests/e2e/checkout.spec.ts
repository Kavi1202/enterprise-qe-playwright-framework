import {
    test,
    expect
} from '../../fixtures/baseFixture';

import {
    testUsers
} from '../../utils/testData';

test.describe(
    'Checkout Flow',
    () => {

    test(
    'User should add item to cart',
    async ({
        page,
        loginPage,
        inventoryPage
    }) => {

        await loginPage
            .navigateToLoginPage();

        await loginPage.login(
            testUsers.validUser.username,
            testUsers.validUser.password
        );

        await expect(page)
            .toHaveURL(/inventory/);

        expect(
            await inventoryPage
                .isInventoryPageVisible()
        ).toBeTruthy();

        await inventoryPage
            .addProductToCart();

        expect(
            await inventoryPage
                .getCartCount()
        ).toBe('1');

        await inventoryPage
            .navigateToCart();
    });
});