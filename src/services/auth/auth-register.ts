import axios, { AxiosPromise } from "axios";
import { BASE_URL, TokenData } from "./auth-login";

export const fetchRegisterUser = async (email: string, password: string) => {
    return axios.post(`${BASE_URL}/auth/sign-up`, {
        email,
        password,
    });
};
