import _ from "lodash";

// Methods for transforming arrays to strings
function convertArraysToStrings(obj: Record<string, any>): Record<string, any> {
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key] = _.join(obj[key], ", ");
    }
  }
  return obj;
}

export { convertArraysToStrings };
