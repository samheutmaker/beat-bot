/**
 * Handles an HTTP response with JSON body
 * @param {Object} response  - An HTTP response object
 * @returns {Promise}
 */
export default function jsonResponse(response) {
  let status = response.status;
  if (200 <= status && status <= 299) {
    let json;
    try {
      json = response.json();
      return json;
    } catch (e) {
      return Promise.reject(e);
    }
  }

  return Promise.reject(`${response.status}: ${response.statusText}`);
}