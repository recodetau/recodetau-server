export const PREFIX = "/api";

export const AUTH = `${PREFIX}/auth`;
export const LOGIN = `${AUTH}/login`;
export const LOGOUT = `${AUTH}/logout`;

export const USER = {
    CURRENT: `${PREFIX}/users/me`,
    ACCOUNT: `${PREFIX}/users/`
};
