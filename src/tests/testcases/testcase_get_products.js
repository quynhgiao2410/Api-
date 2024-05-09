import { TestCase } from "../../core";

export class TestCaseGetProducts extends TestCase {
  static order = 6;
  async testcase_get_products_001(_, headers) {
    const response = await this.apiClient.get("/data/products", { headers });
    return response
      .isStatusCode(200)
      .isJson()
      .isTrue("success")
      .isArrayOfJsons("data")
      .isNumber("data.*.id")
      .isString("data.*.name")
      .isLink("data.*.image")
      .isString("data.*.description")
      .isNumber("data.*.price")
      .isNumber("data.*.res_id")
      .isNumber("data.*.cat_id")
      .isNumber("data.*.avg_rating")
      .isNumber("data.*.total_reviews")
      .isString("data.*.category_name")
      .isArrayOfJsons("data.*.options")
      .isNumber("data.*.options.*.id")
      .isNumber("data.*.options.*.product_id")
      .isString("data.*.options.*.name")
      .isNumber("data.*.options.*.price")
      .isLink("data.*.options.*.image");
  }
  async testcase_get_products_002(_) {
    const response = await this.apiClient.get("/data/products");
    return response
      .isStatusCode(401)
      .isJson()
      .isFalse("success")
      .isEqual("Unauthorized", "error");
  }
}
