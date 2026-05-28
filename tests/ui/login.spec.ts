import { test, expect } from "../../fixtures/baseFixture";
import { testUsers } from "../../utils/testData";
import { LoginAssertions } from "../../assertions/loginAssertions";

test.describe("Login Functionality", () => {
  test("@smoke @regression Valid Login", async ({ page, loginPage }) => {
    await loginPage.navigateToLoginPage();

    await loginPage.login(
      testUsers.validUser.username,
      testUsers.validUser.password,
    );

    // URL validation
    await expect(page).toHaveURL(/inventory/);

    // UI validation
    await LoginAssertions.verifyLoginSuccess(loginPage);
  });

  test("@regression Invalid Login", async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();

    await loginPage.login(
      testUsers.invalidUser.username,
      testUsers.invalidUser.password,
    );

    const errorText = await loginPage.getErrorText();

    await LoginAssertions.verifyErrorMessage(
      loginPage,
      "Username and password",
    );
  });

  test("@regression Locked User Login", async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();

    await loginPage.login(
      testUsers.lockedUser.username,
      testUsers.lockedUser.password,
    );

    const errorText = await loginPage.getErrorText();

    await LoginAssertions.verifyErrorMessage(loginPage, "locked out");
  });
});
