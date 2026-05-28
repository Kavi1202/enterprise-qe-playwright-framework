import { test, expect } from "../../fixtures/baseFixture";

import { testUsers } from "../../utils/testData";

test.describe("Complete Checkout Flow", () => {
  test('@smoke @regression User should complete purchase successfully', async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
  }) => {
    await loginPage.navigateToLoginPage();

    await loginPage.login(
      testUsers.validUser.username,
      testUsers.validUser.password,
    );

    await expect(page).toHaveURL(/inventory/);

    await inventoryPage.addProductToCart();

    expect(await inventoryPage.getCartCount()).toBe("1");

    await inventoryPage.navigateToCart();

    expect(await cartPage.isCartPageVisible()).toBeTruthy();

    expect(await cartPage.getProductName()).toContain("Sauce Labs");

    await cartPage.clickCheckout();

    await checkoutPage.enterCheckoutDetails("Kaviraj", "P", "560067");

    await checkoutPage.continueCheckout();

    await checkoutPage.finishCheckout();

    const successMessage = await checkoutPage.getSuccessMessage();

    expect(successMessage).toContain("Thank you");
  });
});
