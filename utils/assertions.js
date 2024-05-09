export const isArrayOfType = (array, type) => {
  return array.every((item) => typeof item === type);
};

export const isArrayOfStrings = (array) => {
  return isArrayOfType(array, "string");
};

export const isArrayOfNumbers = (array) => {
  return isArrayOfType(array, "number");
};

export const isArrayOfJsons = (array) => {
  return isArrayOfType(array, "object");
};

export const isArrayOfBooleans = (array) => {
  return isArrayOfType(array, "boolean");
};

export const isJson = (obj) => {
  return typeof obj === "object";
};

export const isString = (str) => {
  return typeof str === "string";
};

export const isNumber = (num) => {
  return typeof num === "number";
};

export const isBoolean = (bool) => {
  return typeof bool === "boolean";
};

export const isArray = (array) => {
  return Array.isArray(array);
};

export const isEqual = (a, b) => {
  if (typeof a === "object" && typeof b === "object") {
    return compareTwoObjects(a, b);
  }
  return a === b;
};

export const isNotEqual = (a, b) => {
  if (typeof a === "object" && typeof b === "object") {
    return !compareTwoObjects(a, b);
  }
  return a !== b;
};

export const compareTwoObjects = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

export const isGreaterThan = (a, b) => {
  return a > b;
};

export const isLessThan = (a, b) => {
  return a < b;
};

export const isGreaterThanOrEqual = (a, b) => {
  return a >= b;
};

export const isLessThanOrEqual = (a, b) => {
  return a <= b;
};

export const isNull = (obj) => {
  return obj === null || obj === undefined;
};

export const isNotNull = (obj) => {
  return obj !== null && obj !== undefined;
};

export const isTrue = (bool) => {
  return bool === true;
};

export const isFalse = (bool) => {
  return bool === false;
};

export const isOneOf = (obj, values) => {
  return values.includes(obj);
};

export const isNotOneOf = (obj, values) => {
  return !values.includes(obj);
};

export const isKeyPresent = (obj, key) => {
  return typeof obj === "object" && obj.hasOwnProperty(key);
};

export const isKeyNotPresent = (obj, key) => {
  return typeof obj === "object" && !obj.hasOwnProperty(key);
};

export const isStringMatch = (str, regex) => {
  return regex.test(str);
};

export const isStringNotMatch = (str, regex) => {
  return !regex.test(str);
};

const isCountable = (obj) => {
  return isArray(obj) || isString(obj);
};
export const isLengthEqual = (obj, length) => {
  return isCountable(obj) && obj.length === length;
};

export const isLengthGreaterThan = (obj, length) => {
  return isCountable(obj) && obj.length > length;
};

export const isLengthLessThan = (obj, length) => {
  return isCountable(obj) && obj.length < length;
};

export const isLengthGreaterThanOrEqual = (obj, length) => {
  return isCountable(obj) && obj.length >= length;
};

export const isLengthLessThanOrEqual = (obj, length) => {
  return isCountable(obj) && obj.length <= length;
};

export const isSuccessStatusCode = (statusCode) => {
  return statusCode >= 200 && statusCode < 300;
};

export const isRedirectStatusCode = (statusCode) => {
  return statusCode >= 300 && statusCode < 400;
};

export const isClientErrorStatusCode = (statusCode) => {
  return statusCode >= 400 && statusCode < 500;
};

export const isServerErrorStatusCode = (statusCode) => {
  return statusCode >= 500 && statusCode < 600;
};

export const isLink = (link) => {
  if (!isString(link)) {
    return false;
  }
  try {
    new URL(link);
    return true;
  } catch (e) {
    return false;
  }
};

export const isEmail = (email) => {
  if (!isString(email)) {
    return false;
  }
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  return regex.test(email);
};

export const isPhoneNumber = (phone) => {
  if (!isString(phone)) {
    return false;
  }
  const regex = /^\+?[1-9]\d{1,14}$/;
  return regex.test(phone);
};
