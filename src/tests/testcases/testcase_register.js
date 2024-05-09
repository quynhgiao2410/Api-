import { TestCase } from "../../core";

export class TestCaseRegister extends TestCase {
  static order = 2;
  async testcase_register_001(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(200)
      .isJson()
      .isTrue("success")
      .isJson("data")
      .isNumber("data.user_id");
  }
  async testcase_register_002(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual("Email or phone is invalid format", "error");
  }
  async testcase_register_003(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(400)
      .isJson()
      .isFalse("success")
      .isEqual("Email or phone is required", "error");
  }
  async testcase_register_004(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual("Email or phone is already registered", "error");
  }
  async testcase_register_005(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(400)
      .isJson()
      .isFalse("success")
      .isEqual("Password is required", "error");
  }
  async testcase_register_006(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual(
        "Password must be at least 8 characters and contain both special characters, numbers and letters",
        "error"
      );
  }
  async testcase_register_007(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(400)
      .isJson()
      .isFalse("success")
      .isEqual("Name is required", "error");
  }
  async testcase_register_008(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual(
        "Name length must be at least 5 characters and not contain special characters",
        "error"
      );
  }
  async testcase_register_009(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(400)
      .isJson()
      .isFalse("success")
      .isEqual("Avatar is required", "error");
  }
  async testcase_register_010(data) {
    const response = await this.apiClient.post("/auth/register", data);
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual("Avatar is invalid format", "error");
  }
}
