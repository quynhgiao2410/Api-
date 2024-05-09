import { TestCore } from "./src/core";
import { createTestCase, removeTestCase } from "./generator";
const BASE_URL = "http://foodhub123.me/api/";
const headers = {
  "X-Requested-With": "XMLHttpRequest",
};
if (process.argv[2] === "generate") {
  const method = process.argv[3];
  const name = process.argv[4];
  const noData = process.argv[5] === "--no-data";
  switch (method) {
    case "add":
      createTestCase(name, !noData);
      break;
    case "remove":
      removeTestCase(name);
      break;
    default:
      console.log("Invalid method");
  }
} else {
  const testCore = new TestCore(BASE_URL, headers);
  testCore.executeTests();
}
