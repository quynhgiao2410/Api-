import fs from "fs";
export const createTestCase = (testcase, hadData = true) => {
  if (!testcase) {
    console.log("\x1b[31m No testcase name provided \x1b[0m");
    return;
  }
  testcase = testcase.toLowerCase().split(" ").join("_");
  const testcaseFileName = `testcase_${testcase}.js`;
  const testcaseFilePath = `./src/tests/testcases/${testcaseFileName}`;
  if (fs.existsSync(testcaseFilePath)) {
    console.log("\x1b[31m Testcase already exists \x1b[0m");
    return;
  }
  const testcaseName = testcase
    .split("_")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join("");
  const content = `import { TestCase } from "../../core";

export class TestCase${testcaseName} extends TestCase {
  static order = ${fs.readdirSync("./src/tests/testcases").length + 1}
  async testcase_${testcase}_001(${hadData ? "data, headers" : "_, headers"}) {
    const response = await this.apiClient.post("/path"${
      hadData ? ", data" : ""
    });
    return response.isStatusCode(200);
  }
}`;
  fs.writeFileSync(testcaseFilePath, content);
  if (hadData) {
    const dataFileName = `testcase_${testcase}_001.data.json`;
    const dataFilePath = `./src/tests/data/${dataFileName}`;
    const dataContent = `{}`;
    fs.writeFileSync(dataFilePath, dataContent);
    1;
  }
};

export const removeTestCase = (testcase) => {
  if (!testcase) {
    console.log("\x1b[31m No testcase name provided \x1b[0m");
    return;
  }
  testcase = testcase.toLowerCase().split(" ").join("_");
  const testcaseFileName = `testcase_${testcase}.js`;
  const testcaseFilePath = `./src/tests/testcases/${testcaseFileName}`;
  if (!fs.existsSync(testcaseFilePath)) {
    console.log("\x1b[31m Testcase does not exists \x1b[0m");
  } else {
    fs.unlinkSync(testcaseFilePath);
  }
  const regexFile = new RegExp(`testcase_${testcase}_\\d{3}.data.json`);
  fs.readdirSync("./src/tests/data").forEach((file) => {
    console.log(file);
    if (regexFile.test(file)) {
      fs.unlinkSync(`./src/tests/data/${file}`);
    }
  });
};
