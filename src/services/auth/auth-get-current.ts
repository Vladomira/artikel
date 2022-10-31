import axios, { AxiosPromise } from "axios";
import { BASE_URL } from "./auth-login";

export type FullUserData = {
    avatar: null | string;
    banner: null | string;
    email: null | string;
    username: null | string;
};
export const fetchCurrentUser = (): AxiosPromise<FullUserData> => {
    return axios.get(`${BASE_URL}/user/me`);
};
