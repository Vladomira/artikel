import axios, { AxiosPromise } from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { BASE_URL } from "./auth-login";
import apiInterceptor from "./interseptor";

export const fetchRefreshUser = (
    token: string
): Promise<AxiosPromise<AuthResponse>> => {
    return apiInterceptor.post(`${BASE_URL}/auth/refresh`, {
        refreshToken: token,
    });
};
