import { ApiClient } from "./api-client";

export class TestCase {
  constructor(baseURL, headers) {
    this.apiClient = new ApiClient(baseURL, headers);
  }
}
