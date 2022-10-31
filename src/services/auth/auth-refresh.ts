import axios, { AxiosPromise } from "axios";
import { BASE_URL, TokenData } from "./auth-login";

export const fetchRefreshUser = (token: string): AxiosPromise<TokenData> => {
    return axios.post(`${BASE_URL}/auth/refresh`, {
        refreshToken: token,
    });
};
