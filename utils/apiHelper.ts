import { APIRequestContext } from "@playwright/test";

export class ApiHelper {
  static async getProducts(request: APIRequestContext) {
    return await request.get("https://dummyjson.com/products");
  }
}
