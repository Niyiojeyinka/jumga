import { API_BASE_URL } from "./constant";

const request = async (url, method, data = {}, token = null) => {
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
              Authorization: `Bearer ${token}`,
            },
          };
  }
  const res = await fetch(API_BASE_URL + url, meta);
  const responseData = await res.json();
  return {
    status: res.status,
    body: responseData,
  };
};

export default request;
