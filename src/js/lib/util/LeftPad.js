/**
 * Preprend 0 padding to value
 * @param {String} value  - The value to be padded
 * @param {Number} padding  - The desired total length
 * @returns {String} The initial value with padding
 */
export default function leftPad(value, padding) {
  if (typeof value != "string") {
    value = value.toString();
  }
  while (value.length < padding) {
    value = "0" + value;
  }
  return value;
}