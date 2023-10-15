import AxiosInstance from "axios";

import { SERVER_URL } from "@/datas/constants/api";
import { USER_TOKEN_STORAGE_KEY } from "@/datas/constants/app";

import router from "@/router";

const axios = AxiosInstance.create({
    baseURL: SERVER_URL
});

axios.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem(USER_TOKEN_STORAGE_KEY);

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        let responseStatus = error.response.status;

        if (responseStatus === 403) {
            router.push({ name: "access" });
        } else if (responseStatus === 401) {
            router.push({ name: "login" });
        }

        return Promise.reject(error);
    }
);

export function useAxios() {
    return axios;
}
