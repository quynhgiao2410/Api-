import axios from "axios";
import { AssertableResponse } from "./assertable-response";

export class ApiClient {
  constructor(baseURL, headers) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
    //interceptors
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          return Promise.resolve(error.response);
        }
        if (error.request) {
          return Promise.resolve(error.request);
        }
        return Promise.resolve(error);
      }
    );
  }
  async get(url, config) {
    const response = await this.client.get(url, config);
    return new AssertableResponse(response);
  }
  async post(url, data, config) {
    const response = await this.client.post(url, data, config);
    return new AssertableResponse(response);
  }
  async put(url, data, config) {
    const response = await this.client.put(url, data, config);
    return new AssertableResponse(response);
  }
  async delete(url, config) {
    const response = await this.client.delete(url, config);
    return new AssertableResponse(response);
  }
  async patch(url, data, config) {
    const response = await this.client.patch(url, data, config);
    return new AssertableResponse(response);
  }
  async options(url, config) {
    const response = await this.client.options(url, config);
    return new AssertableResponse(response);
  }
}
