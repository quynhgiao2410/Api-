import { isArray } from "./assertions";

export const getTestCaseNameFromFileName = (fileName) => {
  return fileName
    .split(".")[0]
    .split("_")
    .slice(1)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join("");
};
export const getNestedProperties = (obj, property = "", isFlatten = true) => {
  try {
    const func = (_obj, _property) => {
      const nestedProperty = _property.split(".").filter((x) => x !== "");
      if (nestedProperty.length === 0) {
        return _obj;
      }
      let result = _obj;
      for (let i = 0; i < nestedProperty.length; i++) {
        const prop = nestedProperty[i];
        if (prop === "*" && isArray(result)) {
          return result.map((item) =>
            func(item, nestedProperty.slice(i + 1).join("."))
          );
        } else {
          result = result[prop];
        }
      }
      return result;
    };
    const values = func(obj, property);
    const flatten = (arr) => {
      return arr.reduce((flat, toFlatten) => {
        return flat.concat(
          Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
        );
      }, []);
    };
    return property.includes("*")
      ? isFlatten
        ? flatten(values)
        : values
      : [values];
  } catch (e) {
    return undefined;
  }
};
const globalVariables = {};
export const setGlobalVariable = (key, value) => {
  globalVariables[key] = value;
};
export const unsetGlobalVariable = (key) => {
  delete globalVariables[key];
};
const mocks = {
  randomNumber: () => Math.floor(Math.random() * 1000000),
  randomString: () => Math.random().toString(36).substring(7),
  randomEmail: () =>
    Math.random().toString(36).substring(7) +
    "@" +
    Math.random().toString(36).substring(7) +
    "." +
    Math.random().toString(36).substring(7),
  randomPhoneNumber: () => "0" + Math.floor(Math.random() * 10000000000),
};
export const getVariable = (key) => {
  if (mocks[key]) {
    return mocks[key]();
  }
  if (globalVariables[key]) {
    return globalVariables[key];
  }
};

export const mapVariablesToJson = (json) => {
  if (typeof json === "string") {
    const matches = json.match(/{{(.*?)}}/g);
    if (matches) {
      matches.forEach((match) => {
        const key = match.replace("{{", "").replace("}}", "");
        json = json.replace(match, getVariable(key) || match);
      });
    }
  } else if (typeof json === "object") {
    Object.keys(json).forEach((key) => {
      json[key] = mapVariablesToJson(json[key]);
    });
  }
  return json;
};
