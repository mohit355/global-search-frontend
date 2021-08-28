import { API } from "./config";
import queryString from "query-string";

export const listBySearch = (params) => {
  // console.log(API);
  const query = queryString.stringify(params);
  return fetch(`${API}/listBySearch?${query}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => err);
};
