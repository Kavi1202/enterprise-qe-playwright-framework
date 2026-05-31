import { test, expect } from "../../fixtures/baseFixture";
import { testUsers } from "../../utils/testData";
import { LoginAssertions } from "../../assertions/loginAssertions";
import { ENV } from "../../config/env";

test.describe("Login Functionality", () => {

  test("@smoke @regression Valid Login", async ({
    page,
    loginPage
  }) => {

    await loginPage.navigateToLoginPage();

    console.log('ENV Username:', ENV.username);
    console.log('ENV Password:', ENV.password);
    
    await loginPage.login(
    ENV.username, ENV.password
    );

    await expect(page).toHaveURL(/inventory/);

    await LoginAssertions.verifyLoginSuccess(
      loginPage
    );
  });

  test("@regression Invalid Login", async ({
    loginPage
  }) => {

    await loginPage.navigateToLoginPage();

    await loginPage.login(
      testUsers.invalidUser.username,
      testUsers.invalidUser.password
    );

    await LoginAssertions.verifyErrorMessage(
      loginPage,
      "Username and password"
    );
  });

  test("@regression Locked User Login", async ({
    loginPage
  }) => {

    await loginPage.navigateToLoginPage();

    await loginPage.login(
      testUsers.lockedUser.username,
      testUsers.lockedUser.password
    );

    await LoginAssertions.verifyErrorMessage(
      loginPage,
      "locked out"
    );
  });

});