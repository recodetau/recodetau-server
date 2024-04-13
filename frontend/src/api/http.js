import AxiosInstance from "axios";

import { USER_TOKEN_LOCALSTOTAGE_KEY } from "../constants/users.js";

const http = AxiosInstance.create({
  baseURL: "http://localhost",
});

http.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem(USER_TOKEN_LOCALSTOTAGE_KEY);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
