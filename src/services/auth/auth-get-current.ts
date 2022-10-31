import { AxiosPromise } from "axios";
import { FullUser } from "../../models/response/FullUser";
import { BASE_URL } from "./auth-login";
import apiInterceptor from "./interseptor";

export const fetchCurrentUser = (): Promise<AxiosPromise<FullUser>> => {
    return apiInterceptor.get(`${BASE_URL}/user/me`);
};
