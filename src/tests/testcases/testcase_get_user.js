import { TestCase } from "../../core";

export class TestCaseGetUser extends TestCase {
  static order = 3;
  async testcase_get_user_001(_, headers) {
    const response = await this.apiClient.get("/data/user", {
      headers,
    });
    return response
      .isStatusCode(200)
      .isJson()
      .isTrue("success")
      .isJson("data")
      .isNumber("data.id")
      .isString("data.name")
      .isLink("data.avatar")
      .isEmail("data.emailOrPhone")
      .isBoolean("data.verified")
      .isNumber("data.user_id")
      .isJson("data.restaurant")
      .isNumber("data.restaurant.id")
      .isString("data.restaurant.name")
      .isLink("data.restaurant.logo")
      .isString("data.restaurant.address")
      .isLink("data.restaurant.cover_image")
      .isBoolean("data.restaurant.verified")
      .isNumber("data.restaurant.delivery_fee")
      .isNumber("data.restaurant.owner_id");
  }
  async testcase_get_user_002(_, headers) {
    const response = await this.apiClient.get("/data/user");
    return response
      .isStatusCode(401)
      .isJson()
      .isFalse("success")
      .isEqual("Unauthorized", "error");
  }
}
