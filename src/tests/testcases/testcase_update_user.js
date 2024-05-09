import { TestCase } from "../../core";

export class TestCaseUpdateUser extends TestCase {
  static order = 4;
  async testcase_update_user_001(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(200)
      .isJson()
      .isTrue("success")
      .isJson("data")
      .isNumber("data.id")
      .isString("data.name")
      .isEqual(data.name, "data.name")
      .isLink("data.avatar")
      .isEqual(data.avatar, "data.avatar")
      .isEmail("data.emailOrPhone")
      .isBoolean("data.verified")
      .isEqual(data.verified, "data.verified")
      .isNumber("data.user_id");
  }
  async testcase_update_user_002(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual(
        "Password must be at least 8 characters and contain both special characters, numbers and letters",
        "error"
      );
  }
  async testcase_update_user_003(data, headers) {
    const response = await this.apiClient.post("/data/user", data);
    return response
      .isStatusCode(401)
      .isJson()
      .isFalse("success")
      .isEqual("Unauthorized", "error");
  }
  async testcase_update_user_004(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(200)
      .isJson()
      .isTrue("success")
      .isJson("data")
      .isNumber("data.id")
      .isString("data.name")
      .isEqual(data.name, "data.name")
      .isLink("data.avatar")
      .isEqual(data.avatar, "data.avatar")
      .isEmail("data.emailOrPhone")
      .isBoolean("data.verified")
      .isNumber("data.user_id");
  }
  async testcase_update_user_005(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual("Verified must be true or false", "error");
  }
  async testcase_update_user_006(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(200)
      .isJson()
      .isTrue("success")
      .isJson("data")
      .isNumber("data.id")
      .isString("data.name")
      .isEqual(data.name, "data.name")
      .isLink("data.avatar")
      .isEmail("data.emailOrPhone")
      .isBoolean("data.verified")
      .isEqual(data.verified, "data.verified")
      .isNumber("data.user_id");
  }
  async testcase_update_user_007(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual("Avatar is invalid format", "error");
  }
  async testcase_update_user_008(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(200)
      .isJson()
      .isTrue("success")
      .isJson("data")
      .isNumber("data.id")
      .isString("data.name")
      .isLink("data.avatar")
      .isEqual(data.avatar, "data.avatar")
      .isEmail("data.emailOrPhone")
      .isBoolean("data.verified")
      .isEqual(data.verified, "data.verified")
      .isNumber("data.user_id");
  }
  async testcase_update_user_009(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual(
        "Name length must be at least 5 characters and not contain special characters or digits",
        "error"
      );
  }
  async testcase_update_user_010(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(200)
      .isJson()
      .isTrue("success")
      .isJson("data")
      .isNumber("data.id")
      .isString("data.name")
      .isEqual(data.name, "data.name")
      .isLink("data.avatar")
      .isEqual(data.avatar, "data.avatar")
      .isEmail("data.emailOrPhone")
      .isBoolean("data.verified")
      .isEqual(data.verified, "data.verified")
      .isNumber("data.user_id");
  }
  async testcase_update_user_011(data, headers) {
    const response = await this.apiClient.post("/data/user", data, { headers });
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual(
        "Password must be at least 8 characters and contain both special characters, numbers and letters",
        "error"
      );
  }
}
