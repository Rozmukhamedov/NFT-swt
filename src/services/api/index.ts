import axios from "axios";
import { getCookie, removeCookie, setCookie } from "../../utils/cookie";

export const requestWithoutAuth = axios.create({
  baseURL: "http://128.199.31.140:8448",
  timeout: 30000,
});

export const request = axios.create({
  baseURL: "http://128.199.31.140:8448",
  timeout: 20000,
  headers: {
    Authorization: `Bearer ${getCookie("token")}`,
  },
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // removeCookie("token");
      // removeCookie("user");
      // window.location.reload();
      // window.location.pathname = "/";
      axios
        .post("http://128.199.31.140:8444/api/token/refresh/", {
          refresh: getCookie("refresh_token"),
        })
        .then((response: any) => {
          setCookie("token", response?.data?.access);
        })
        .catch((error) => {
          removeCookie("token");
          removeCookie("user");
        });
    }
    return Promise.reject(error);
  }
);

request.interceptors.request.use(
  (config: any) => {
    config.headers = {
      ...config.headers,
      // common: {
      Authorization: "Bearer " + getCookie("token"),
      // }
    };
    return config;
  },
  (error) => Promise.reject(error)
);
