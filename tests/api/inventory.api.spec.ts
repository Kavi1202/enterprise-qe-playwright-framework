import { test, expect } from "@playwright/test";

import { ApiHelper } from "../../utils/apiHelper";

test.describe("Inventory API Validation", () => {
  test("@smoke @api Should fetch inventory successfully", async ({
    request,
  }) => {
    const response = await ApiHelper.getProducts(request);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.products.length).toBeGreaterThan(0);

    expect(responseBody.products[0]).toHaveProperty("title");
  });
});
