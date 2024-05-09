import { TestCase } from "../../core";

export class TestCaseDeleteAddress extends TestCase {
  static order = 5;
  async testcase_delete_address_001(_, headers) {
    const response = await this.apiClient.delete("/data/address/11", {
      headers,
    });
    return response.isStatusCode(200);
  }
  async testcase_delete_address_002(_, headers) {
    const response = await this.apiClient.delete("/data/address/11", {
      headers,
    });
    return response
      .isStatusCode(422)
      .isJson()
      .isFalse("success")
      .isEqual("Address not found", "error");
  }
  async testcase_delete_address_003(_, headers) {
    const response = await this.apiClient.delete("/data/address/5", {
      headers,
    });
    return response
      .isStatusCode(403)
      .isJson()
      .isFalse("success")
      .isEqual("You are not owner of this address", "error");
  }
  async testcase_delete_address_004(_, headers) {
    const response = await this.apiClient.delete("/data/address/11");
    return response
      .isStatusCode(401)
      .isJson()
      .isFalse("success")
      .isEqual("Unauthorized", "error");
  }
}
