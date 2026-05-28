import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export class LoginAssertions {
  static async verifyLoginSuccess(loginPage: LoginPage) {
    expect(await loginPage.isProductTitleVisible()).toBeTruthy();
  }

  static async verifyErrorMessage(
    loginPage: LoginPage,
    expectedMessage: string,
  ) {
    const errorText = await loginPage.getErrorText();

    expect(errorText).toContain(expectedMessage);
  }
}
