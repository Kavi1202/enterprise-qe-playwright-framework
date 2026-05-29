import { test, expect } from "../../fixtures/baseFixture";

import { ApiHelper } from "../../utils/apiHelper";

import { testUsers } from "../../utils/testData";

test("@regression UI and API inventory validation", async ({
  page,
  request,
  loginPage,
}) => {
  const apiResponse = await ApiHelper.getProducts(request);

  expect(apiResponse.status()).toBe(200);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    testUsers.validUser.username,
    testUsers.validUser.password,
  );

  await expect(page).toHaveURL(/inventory/);

  const inventoryItems = await page.locator(".inventory_item").count();

  expect(inventoryItems).toBeGreaterThan(0);
});
