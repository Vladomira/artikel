import axios, { AxiosPromise } from "axios";

export const BASE_URL = process.env.NEXT_PUBLIC_DB;

export type TokenData = {
    accessToken: string | null;
    refreshToken: string | null;
};
export const fetchLoginUser = (
    email: string,
    password: string
): AxiosPromise<TokenData> => {
    return axios.post(`${BASE_URL}/auth/sign-in`, {
        email,
        password,
    });
};
