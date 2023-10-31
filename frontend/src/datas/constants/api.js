export const SERVER_URL = "http://localhost:3000";

export const PREFIX = "/api";

export const AUTH = {
    LOGIN: `${PREFIX}/auth/login`,
    LOGOUT: `${PREFIX}/auth/logout`,
    REGISTER: `${PREFIX}/auth/register`
};

export const USER = {
    CURRENT: `${PREFIX}/users/me`,
    ACCOUNT: `${PREFIX}/users/`
};
