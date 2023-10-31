import { reactive } from "vue";
import router from "../router";
import http from "../plugins/http";
import { AUTH } from "../datas/constants/api";
import { USER_TOKEN_STORAGE_KEY } from "../datas/constants/app";

const auth = reactive({ token: localStorage.getItem(USER_TOKEN_STORAGE_KEY), user: null });

const loggedIn = () => auth.user !== null;

const login = async (email, password) => {
    const data = { email, password };
    const response = await http.post(AUTH.LOGIN, data);

    if (response.status === 200) {
        router.push({ name: "home" });
    }
};

const logout = async () => {
    localStorage.removeItem(USER_TOKEN_STORAGE_KEY);

    auth.token = null;
    auth.user = null;

    router.push({ name: "login" });
};

const register = async (userData) => {
    const response = await http.post(AUTH.REGISTER, userData);
};

export const useAuth = () => {
    return {
        auth,
        loggedIn,
        login,
        logout,
        register
    };
};
