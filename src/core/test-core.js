import fs from "fs";
import { getTestCaseNameFromFileName, mapVariablesToJson } from "../../utils";
export class TestCore {
  constructor(baseURL, headers) {
    this.baseURL = baseURL;
    this.headers = headers;
  }
  async executeTests() {
    let totalPassed = 0;
    let totalFailed = 0;
    const filenames = fs.readdirSync("./src/tests/testcases").sort((a, b) => {
      const orderA = require(`../tests/testcases/${a}`)[
        `TestCase${getTestCaseNameFromFileName(a)}`
      ].order;
      const orderB = require(`../tests/testcases/${b}`)[
        `TestCase${getTestCaseNameFromFileName(b)}`
      ].order;
      return orderA - orderB;
    });
    for (const filename of filenames) {
      let passed = 0;
      let failed = 0;
      const filepath = require(`../tests/testcases/${filename}`);
      const name = getTestCaseNameFromFileName(filename);
      const className = `TestCase${name}`;
      const instance = new filepath[className](this.baseURL, this.headers);
      const testcases = Object.getOwnPropertyNames(
        Object.getPrototypeOf(instance)
      ).filter((x) => x.startsWith("testcase"));
      for (const testcase of testcases) {
        let data = {};
        try {
          data = require(`../tests/data/${testcase}.data.json`);
        } catch (e) {}

        let headers = require(`../tests/headers/headers.json`);
        try {
          headers = require(`../tests/headers/${testcase}.headers.json`);
        } catch (e) {}
        let response;
        try {
          response = await instance[testcase](
            mapVariablesToJson(data),
            mapVariablesToJson(headers)
          );
        } catch (e) {
          console.log(e);
        }
        const isPassed = !!response && response.getPassed();
        if (isPassed) {
          totalPassed++;
          passed++;
        } else {
          totalFailed++;
          failed++;
        }
        const color = isPassed ? "\x1b[32m" : "\x1b[31m";
        const colorEnd = "\x1b[0m";
        console.log(
          `${testcase}: ${color}${isPassed ? "PASSED" : "FAILED"} ${colorEnd}`
        );
      }
      console.log(
        `====> Testcase ${name}: ${passed} \x1b[32mPASSED\x1b[0m, ${failed} \x1b[31mFAILED\x1b[0m ===>> Result: ${
          failed === 0 ? "\x1b[32mPASSED\x1b[0m" : "\x1b[31mFAILED\x1b[0m"
        }\n===============================`
      );
    }
    console.log(`\n=============SUMMARY============`);
    console.log(`Total \x1b[32mPASSED\x1b[0m: ${totalPassed}`);
    console.log(`Total \x1b[31mFAILED\x1b[0m: ${totalFailed}`);
    console.log(
      `===> Result: ${
        totalFailed === 0 ? "\x1b[32mPASSED\x1b[0m" : "\x1b[31mFAILED\x1b[0m"
      }`
    );
    console.log(`================================\n`);
  }
}
