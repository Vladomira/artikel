import axios, { AxiosPromise } from "axios";
import { FullUser } from "../../models/response/FullUser";
import { BASE_URL } from "./auth-login";

export const fetchCurrentUser = (): Promise<AxiosPromise<FullUser>> => {
    return axios.get(`${BASE_URL}/user/me`, { withCredentials: true });
};
