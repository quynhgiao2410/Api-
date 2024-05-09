import { setGlobalVariable } from "../../../utils";
import { TestCase } from "../../core";

export class TestCaseLogin extends TestCase {
  static order = 1;
  async testcase_login_001(data) {
    const response = await this.apiClient.post("/auth", data);
    const accessToken = response.getData().data?.accessToken;
    if (accessToken) {
      setGlobalVariable("accessToken", accessToken);
    }
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
      .isString("data.accessToken")
      .isString("data.refreshToken")
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
  async testcase_login_002(data) {
    const response = await this.apiClient.post("/auth", data);
    return response
      .isStatusCode(400)
      .isJson()
      .isFalse("success")
      .isEqual("Email or password is incorrect", "error");
  }
  async testcase_login_003(data) {
    const response = await this.apiClient.post("/auth", data);
    return response
      .isStatusCode(400)
      .isJson()
      .isFalse("success")
      .isEqual("Email or phone is required", "error");
  }
  async testcase_login_004(data) {
    const response = await this.apiClient.post("/auth", data);
    return response
      .isStatusCode(400)
      .isJson()
      .isFalse("success")
      .isEqual("Email or phone is required", "error");
  }
  async testcase_login_005(data) {
    const response = await this.apiClient.post("/auth", data);
    return response
      .isStatusCode(400)
      .isJson()
      .isFalse("success")
      .isEqual("Password is required", "error");
  }
  async testcase_login_006(data) {
    return this.testcase_login_001(data);
  }
  async testcase_login_007(data) {
    const response = await this.apiClient.post("/auth", data);
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual("Email or phone is invalid format", "error");
  }
}
