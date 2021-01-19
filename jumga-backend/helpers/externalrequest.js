const fetch = require("node-fetch");

/** make a request
 *
 * @param {*} url
 * @param {*} method
 * @param {*} data
 * @param {*} token
 */
exports.request = async (url, method, data = {}, token = null) => {
  let meta =
    token == null
      ? {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      : {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        };

  if (method == "GET" || method == "DELETE") {
    meta =
      token == null
        ? {
            method: method,
            headers: {
              "Content-Type": "application/json",
            },
          }
        : {
            method: method,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${token}`,
            },
          };
  }
  const res = await fetch(url, meta);
  const responseData = await res.json();
  return {
    status: res.status,
    body: responseData,
  };
};
