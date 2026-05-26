import { test, expect } from "../../fixtures/baseFixture";

import { testUsers } from "../../utils/testData";

test.describe("Login Functionality", () => {
  test("Valid Login", async ({ page, loginPage }) => {
    await loginPage.navigateToLoginPage();

    await loginPage.login(
      testUsers.validUser.username,
      testUsers.validUser.password,
    );

    // URL validation
    await expect(page).toHaveURL(/inventory/);

    // UI validation
    expect(await loginPage.isProductTitleVisible()).toBeTruthy();
  });

  test("Invalid Login", async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();

    await loginPage.login(
      testUsers.invalidUser.username,
      testUsers.invalidUser.password,
    );

    const errorText = await loginPage.getErrorText();

    expect(errorText).toContain("Username and password");
  });

  test("Locked User Login", async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();

    await loginPage.login(
      testUsers.lockedUser.username,
      testUsers.lockedUser.password,
    );

    const errorText = await loginPage.getErrorText();

    expect(errorText).toContain("locked out");
  });
});
