import { API_BASE_URL } from "./constant";

const request = async (url, method, data = {}) => {
  let meta = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  if (method == "GET" || method == "DELETE") {
    meta = {
      method: method,
      headers: {
        "Content-Type": "application/json",
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
