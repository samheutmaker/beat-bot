/**
 * Retreive a nested objected property via JSON pointer syntax
 * if the value does not exist, use the fallback provided
 * @param {Object} object  - The root object 
 * @param {String} jsonPointer  - Describes the position of the desired property in JSON pointer syntax
 * @param {JSType} fallback  - The fallback value to return if the value does not exist, can be any valid JS Value
 * @returns {JSType} The desired property, can be any valid JS Value
 */
export default function(object, jsonPointer, fallback = "Unknown Value") {
  if (!object) return fallback;

  let nested = jsonPointer.split("/");
  let val = object;

  while (nested.length > 0) {
    let prop = nested.shift();
    if (!val[prop] && val[prop] != 0) {
      return fallback;
    } else {
      val = val[prop];
    }
  }

  if (!val && val != 0) {
    return fallback;
  } else {
    return val;
  }
}