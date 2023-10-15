import { USER } from "@/data/store";
import { USER_TOKEN_STORAGE_KEY } from "@/data/app";

import UserService from "@/services/UserService";

const state = {
    token: localStorage.getItem(USER_TOKEN_STORAGE_KEY) || "",
    userInfo: null,
    isAuth: false
};

const getters = {
    [USER.IS_AUTH]: (state) => state.isAuth === true && state.token
};

const mutations = {
    [USER.LOGIN]: (state, accessToken) => {
        state.token = accessToken;
        state.isAuth = true;
        state.userInfo = null;

        localStorage.setItem(USER_TOKEN_STORAGE_KEY, accessToken);
    },
    [USER.LOGOUT]: (state) => {
        state.token = "";
        state.isAuth = false;
        state.userInfo = null;

        localStorage.removeItem(USER_TOKEN_STORAGE_KEY);
    },
    [USER.INFO]: (state, info) => {
        state.userInfo = info;
    }
};

const actions = {
    [USER.LOGIN]: ({ commit, dispatch }, accessToken) => {
        return new Promise((resolve, reject) => {
            commit(USER.LOGIN, accessToken);

            dispatch(USER.INFO)
                .then(() => resolve())
                .catch((error) => reject(error));
        });
    },
    [USER.INFO]: ({ commit, state }) => {
        return new Promise((resolve, reject) => {
            if (state.userInfo != null) {
                resolve(state.userInfo);
            } else {
                UserService.getCurrentUserInfo()
                    .then((info) => {
                        commit(USER.INFO, info);
                        resolve(info);
                    })
                    .catch((error) => reject(error));
            }
        });
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};
