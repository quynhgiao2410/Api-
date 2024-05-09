import {
  isArray,
  isEqual,
  isNotEqual,
  isArrayOfBooleans,
  isArrayOfNumbers,
  isArrayOfJsons,
  isArrayOfStrings,
  isArrayOfType,
  isBoolean,
  isNumber,
  isJson,
  isString,
  Types,
  getNestedProperties,
  isFalse,
  isTrue,
  isGreaterThan,
  isGreaterThanOrEqual,
  isKeyNotPresent,
  isKeyPresent,
  isLengthEqual,
  isLengthGreaterThan,
  isLengthGreaterThanOrEqual,
  isLengthLessThan,
  isLengthLessThanOrEqual,
  isLessThan,
  isLessThanOrEqual,
  isNotNull,
  isNotOneOf,
  isNull,
  isOneOf,
  isStringMatch,
  isStringNotMatch,
  isClientErrorStatusCode,
  isRedirectStatusCode,
  isServerErrorStatusCode,
  isSuccessStatusCode,
  isLink,
  isEmail,
  isPhoneNumber,
} from "../../utils";

export class AssertableResponse {
  passed = true;
  constructor(response) {
    this.response = response;
  }
  getResponse() {
    return this.response;
  }
  getData() {
    return this.response.data;
  }
  getPassed() {
    return this.passed;
  }
  isEqual(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isEqual(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isNotEqual(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isNotEqual(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isArrayOfBooleans(property) {
    const values = getNestedProperties(this.response.data, property, false);
    const result = values.every((x) => isArrayOfBooleans(x));
    this.passed = this.passed && result;
    return this;
  }
  isArrayOfNumbers(property) {
    const values = getNestedProperties(this.response.data, property, false);
    const result = values.every((x) => isArrayOfNumbers(x));
    this.passed = this.passed && result;
    return this;
  }
  isArrayOfJsons(property) {
    const values = getNestedProperties(this.response.data, property, false);
    const result = values.every((x) => isArrayOfJsons(x));
    this.passed = this.passed && result;
    return this;
  }
  isArrayOfStrings(property) {
    const values = getNestedProperties(this.response.data, property, false);
    const result = values.every((x) => isArrayOfStrings(x));
    this.passed = this.passed && result;
    return this;
  }
  isArrayOfType(type, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isArrayOfType(x, type));
    this.passed = this.passed && result;
    return this;
  }
  isBoolean(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isBoolean(x));
    this.passed = this.passed && result;
    return this;
  }
  isNumber(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isNumber(x));
    this.passed = this.passed && result;
    return this;
  }
  isJson(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isJson(x));
    this.passed = this.passed && result;
    return this;
  }
  isString(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isString(x));
    this.passed = this.passed && result;
    return this;
  }
  isArray(property) {
    const values = getNestedProperties(this.response.data, property, false);
    const result = values.every((x) => isArray(x));
    this.passed = this.passed && result;
    return this;
  }
  isFalse(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isFalse(x));
    this.passed = this.passed && result;
    return this;
  }
  isTrue(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isTrue(x));
    this.passed = this.passed && result;
    return this;
  }
  isGreaterThan(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isGreaterThan(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isGreaterThanOrEqual(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isGreaterThanOrEqual(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isKeyNotPresent(key, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isKeyNotPresent(x, key));
    this.passed = this.passed && result;
    return this;
  }
  isKeyPresent(key, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isKeyPresent(x, key));
    this.passed = this.passed && result;
    return this;
  }
  isLengthEqual(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isLengthEqual(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isLengthGreaterThan(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isLengthGreaterThan(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isLengthGreaterThanOrEqual(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isLengthGreaterThanOrEqual(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isLengthLessThan(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isLengthLessThan(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isLengthLessThanOrEqual(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isLengthLessThanOrEqual(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isLessThan(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isLessThan(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isLessThanOrEqual(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isLessThanOrEqual(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isNotNull(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isNotNull(x));
    this.passed = this.passed && result;
    return this;
  }
  isNotOneOf(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isNotOneOf(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isNull(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isNull(x));
    this.passed = this.passed && result;
    return this;
  }
  isOneOf(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isOneOf(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isStringMatch(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isStringMatch(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isStringNotMatch(expected, property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isStringNotMatch(x, expected));
    this.passed = this.passed && result;
    return this;
  }
  isLink(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isLink(x));
    this.passed = this.passed && result;
    return this;
  }
  isNotLink(property) {
    return !this.isLink(property);
  }
  isEmail(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isEmail(x));
    this.passed = this.passed && result;
    return this;
  }
  isNotEmail(property) {
    return !this.isEmail(property);
  }
  isPhoneNumber(property) {
    const values = getNestedProperties(this.response.data, property);
    const result = values.every((x) => isPhoneNumber(x));
    this.passed = this.passed && result;
    return this;
  }
  isClientErrorStatusCode() {
    const result = isClientErrorStatusCode(this.response.status);
    this.passed = this.passed && result;
    return this;
  }
  isRedirectStatusCode() {
    const result = isRedirectStatusCode(this.response.status);
    this.passed = this.passed && result;
    return this;
  }
  isServerErrorStatusCode() {
    const result = isServerErrorStatusCode(this.response.status);
    this.passed = this.passed && result;
    return this;
  }
  isSuccessStatusCode() {
    const result = isSuccessStatusCode(this.response.status);
    this.passed = this.passed && result;
    return this;
  }
  isStatusCode(expected) {
    const result = this.response.status === expected;
    this.passed = this.passed && result;
    return this;
  }
}
