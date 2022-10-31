import axios, { AxiosPromise } from "axios";
import { BASE_URL, TokenData } from "./auth-login";
import apiInterceptor from "./interseptor";

export const fetchRefreshUser = (
    token: string
): Promise<AxiosPromise<TokenData>> => {
    return apiInterceptor.post(`${BASE_URL}/auth/refresh`, {
        refreshToken: token,
    });
};
